import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { quizQuestions } from '../data/quizQuestions';
import SectionTitle from '../components/common/SectionTitle';
import { CheckCircle, XCircle, RotateCcw, Award, BookOpen } from 'lucide-react';

type QuizState = 'intro' | 'playing' | 'finished';

function getLevel(score: number): { label: string; color: string; description: string; modules: string[] } {
  if (score >= 91) return {
    label: 'Avanzado',
    color: 'text-purple-700 bg-purple-50 border-purple-200',
    description: 'Excelente nivel de conocimiento sobre IA. Podés liderar iniciativas de implementación.',
    modules: ['Laboratorio IA', 'Casos de Uso Avanzados'],
  };
  if (score >= 71) return {
    label: 'Competente',
    color: 'text-blue-700 bg-blue-50 border-blue-200',
    description: 'Buen dominio conceptual. Profundizá en herramientas específicas y automatización.',
    modules: ['Comparador de Herramientas', 'Biblioteca de Prompts'],
  };
  if (score >= 41) return {
    label: 'En Desarrollo',
    color: 'text-yellow-700 bg-yellow-50 border-yellow-200',
    description: 'Base sólida en construcción. Continuá con las lecciones intermedias.',
    modules: ['Aprender IA desde Cero (lecciones 4-10)', 'Seguridad'],
  };
  return {
    label: 'Inicial',
    color: 'text-green-700 bg-green-50 border-green-200',
    description: 'Comenzá por las primeras lecciones para construir una base conceptual sólida.',
    modules: ['Aprender IA desde Cero (lecciones 1-5)', 'Glosario'],
  };
}

export default function Quiz() {
  const navigate = useNavigate();
  const [state, setState] = useState<QuizState>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);

  const current = quizQuestions[currentIndex];
  const isLast = currentIndex === quizQuestions.length - 1;

  const correctCount = answers.filter((a, i) => a === quizQuestions[i]?.respuesta_correcta).length;
  const score = Math.round((correctCount / quizQuestions.length) * 100);
  const levelInfo = getLevel(score);

  const handleSelect = (idx: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(idx);
    setShowExplanation(true);
  };

  const handleNext = () => {
    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);
    setSelectedAnswer(null);
    setShowExplanation(false);

    if (isLast) {
      const evaluation = {
        id: `ev_${Date.now()}`,
        puntaje: Math.round(((newAnswers.filter((a, i) => a === quizQuestions[i]?.respuesta_correcta).length) / quizQuestions.length) * 100),
        nivel_resultado: getLevel(Math.round(((newAnswers.filter((a, i) => a === quizQuestions[i]?.respuesta_correcta).length) / quizQuestions.length) * 100)).label,
        fecha: new Date().toISOString(),
      };
      const stored = JSON.parse(localStorage.getItem('ia_palomar_evaluations') || '[]');
      stored.unshift(evaluation);
      localStorage.setItem('ia_palomar_evaluations', JSON.stringify(stored.slice(0, 10)));
      setState('finished');
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleRestart = () => {
    setState('intro');
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowExplanation(false);
  };

  if (state === 'intro') {
    return (
      <div className="p-6 max-w-2xl mx-auto">
        <SectionTitle
          title="Evaluación Rápida"
          subtitle="Medí tu nivel de conocimiento sobre inteligencia artificial."
        />
        <div className="card p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <Award size={32} className="text-green-700" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Evaluación de Conocimientos IA</h2>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Esta evaluación contiene {quizQuestions.length} preguntas de opción múltiple sobre
            conceptos de inteligencia artificial, herramientas, seguridad y buenas prácticas.
            Al finalizar recibirás tu nivel y recomendaciones de módulos a revisar.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-6 text-center">
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="text-xl font-bold text-gray-900">{quizQuestions.length}</div>
              <div className="text-xs text-gray-500">Preguntas</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="text-xl font-bold text-gray-900">~10</div>
              <div className="text-xs text-gray-500">Minutos</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="text-xl font-bold text-gray-900">4</div>
              <div className="text-xs text-gray-500">Niveles</div>
            </div>
          </div>
          <button onClick={() => setState('playing')} className="btn-primary w-full justify-center py-3">
            Comenzar evaluación
          </button>
        </div>
      </div>
    );
  }

  if (state === 'finished') {
    return (
      <div className="p-6 max-w-2xl mx-auto">
        <div className="card p-8 text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <Award size={32} className="text-green-700" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Evaluación completada</h2>
          <div className="text-5xl font-bold text-green-800 mb-2">{score}%</div>
          <div className="text-gray-500 text-sm mb-4">{correctCount} de {quizQuestions.length} respuestas correctas</div>
          <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold border ${levelInfo.color} mb-4`}>
            Nivel: {levelInfo.label}
          </div>
          <p className="text-gray-600 text-sm">{levelInfo.description}</p>
        </div>

        <div className="card p-5 mb-4">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <BookOpen size={16} className="text-green-700" />
            Módulos recomendados
          </h3>
          <ul className="space-y-2">
            {levelInfo.modules.map((m) => (
              <li key={m} className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle size={14} className="text-green-600 flex-shrink-0" />
                {m}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-3">
          <button onClick={handleRestart} className="btn-secondary flex-1 justify-center">
            <RotateCcw size={14} />
            Repetir
          </button>
          <button onClick={() => navigate('/aprender')} className="btn-primary flex-1 justify-center">
            Ir a lecciones
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-gray-600">
          Pregunta {currentIndex + 1} de {quizQuestions.length}
        </span>
        <span className="text-xs text-gray-400 badge bg-gray-100">{current.categoria}</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="bg-green-700 h-2 rounded-full transition-all"
          style={{ width: `${((currentIndex) / quizQuestions.length) * 100}%` }}
        />
      </div>

      <div className="card p-6 mb-4">
        <h3 className="text-base font-semibold text-gray-900 mb-5">{current.pregunta}</h3>
        <div className="space-y-3">
          {current.opciones.map((opcion, idx) => {
            let style = 'border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 text-gray-700';
            if (selectedAnswer !== null) {
              if (idx === current.respuesta_correcta) {
                style = 'border-green-500 bg-green-50 text-green-800';
              } else if (idx === selectedAnswer && idx !== current.respuesta_correcta) {
                style = 'border-red-400 bg-red-50 text-red-700';
              } else {
                style = 'border-gray-200 bg-gray-50 text-gray-400';
              }
            }
            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={selectedAnswer !== null}
                className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm flex items-center gap-3 ${style}
                  ${selectedAnswer === null ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center flex-shrink-0 text-xs font-bold">
                  {String.fromCharCode(65 + idx)}
                </span>
                {opcion}
                {selectedAnswer !== null && idx === current.respuesta_correcta && (
                  <CheckCircle size={16} className="ml-auto text-green-600 flex-shrink-0" />
                )}
                {selectedAnswer !== null && idx === selectedAnswer && idx !== current.respuesta_correcta && (
                  <XCircle size={16} className="ml-auto text-red-500 flex-shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {showExplanation && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
          <p className="text-sm text-blue-800 leading-relaxed">
            <strong>Explicación:</strong> {current.explicacion}
          </p>
        </div>
      )}

      {selectedAnswer !== null && (
        <button onClick={handleNext} className="btn-primary w-full justify-center py-3">
          {isLast ? 'Ver resultados' : 'Siguiente pregunta'}
        </button>
      )}
    </div>
  );
}
