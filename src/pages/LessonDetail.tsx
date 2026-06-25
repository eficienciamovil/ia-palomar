import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Clock, CheckCircle, Lightbulb, HelpCircle, BookOpen } from 'lucide-react';
import { lessons } from '../data/lessons';
import { LevelBadge } from '../components/common/Badge';

export default function LessonDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const lesson = lessons.find((l) => l.id === id);

  const completed: string[] = JSON.parse(localStorage.getItem('ia_palomar_completed_lessons') || '[]');
  const [isDone, setIsDone] = useState(completed.includes(id || ''));

  if (!lesson) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-500">Lección no encontrada.</p>
        <button onClick={() => navigate('/aprender')} className="btn-primary mt-4">
          Volver
        </button>
      </div>
    );
  }

  const currentIndex = lessons.findIndex((l) => l.id === id);
  const prevLesson = lessons[currentIndex - 1];
  const nextLesson = lessons[currentIndex + 1];

  const handleComplete = () => {
    const stored: string[] = JSON.parse(localStorage.getItem('ia_palomar_completed_lessons') || '[]');
    if (!stored.includes(lesson.id)) {
      stored.push(lesson.id);
      localStorage.setItem('ia_palomar_completed_lessons', JSON.stringify(stored));
    }
    setIsDone(true);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <button
        onClick={() => navigate('/aprender')}
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-6 transition-colors"
      >
        <ArrowLeft size={16} />
        Volver a lecciones
      </button>

      <div className="card overflow-hidden mb-6">
        <div className="bg-gradient-to-r from-green-900 to-green-800 p-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-green-300 text-xs font-mono">Lección #{String(lesson.orden).padStart(2, '0')}</span>
            <span className="text-green-300 text-xs">•</span>
            <span className="text-green-300 text-xs">{lesson.categoria}</span>
          </div>
          <h1 className="text-xl font-bold mb-3">{lesson.titulo}</h1>
          <p className="text-green-200 text-sm">{lesson.descripcion}</p>
          <div className="flex items-center gap-3 mt-4">
            <LevelBadge level={lesson.nivel} />
            <div className="flex items-center gap-1 text-green-300 text-xs">
              <Clock size={13} />
              {lesson.duracion_minutos} minutos
            </div>
            {isDone && (
              <div className="flex items-center gap-1 text-green-300 text-xs">
                <CheckCircle size={13} />
                Completada
              </div>
            )}
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-3">
            <BookOpen size={16} className="text-green-700" />
            Contenido
          </div>
          <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
            {lesson.contenido}
          </div>
        </div>
      </div>

      <div className="card p-5 mb-4 border-l-4 border-green-600">
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-2">
          <Lightbulb size={15} className="text-green-700" />
          Ejemplo aplicado al servicio
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">{lesson.ejemplo_aplicado}</p>
      </div>

      <div className="card p-5 mb-6 border-l-4 border-blue-500">
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-2">
          <HelpCircle size={15} className="text-blue-600" />
          Pregunta de control
        </div>
        <p className="text-sm text-gray-700 leading-relaxed">{lesson.pregunta_control}</p>
      </div>

      {!isDone && (
        <button
          onClick={handleComplete}
          className="btn-primary w-full justify-center py-3 mb-6"
        >
          <CheckCircle size={16} />
          Marcar como completada
        </button>
      )}

      {isDone && (
        <div className="flex items-center gap-2 justify-center text-green-700 bg-green-50 border border-green-200 rounded-xl p-3 mb-6">
          <CheckCircle size={18} />
          <span className="text-sm font-medium">Lección completada</span>
        </div>
      )}

      <div className="flex justify-between gap-4">
        <div>
          {prevLesson && (
            <button
              onClick={() => navigate(`/aprender/${prevLesson.id}`)}
              className="btn-secondary"
            >
              <ArrowLeft size={14} />
              Anterior
            </button>
          )}
        </div>
        <div>
          {nextLesson && (
            <button
              onClick={() => navigate(`/aprender/${nextLesson.id}`)}
              className="btn-primary"
            >
              Siguiente
              <ArrowLeft size={14} className="rotate-180" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
