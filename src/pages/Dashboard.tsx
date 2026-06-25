import { useNavigate } from 'react-router-dom';
import {
  MessageSquare, BookOpen, Wrench, FileText, Briefcase,
  Shield, FlaskConical, BookMarked, ClipboardCheck, History,
  AlertTriangle, Star, TrendingUp
} from 'lucide-react';

const modules = [
  {
    to: '/asistente',
    icon: MessageSquare,
    title: 'Consultar al Asistente IA',
    description: 'Dialogá con el Asistente IA Palomar sobre herramientas, prompts y aplicaciones al servicio.',
    color: 'bg-green-800',
    featured: true,
  },
  {
    to: '/aprender',
    icon: BookOpen,
    title: 'Aprender IA desde Cero',
    description: '15 microlecciones graduales con ejemplos aplicados al contexto del cuartel.',
    color: 'bg-blue-700',
  },
  {
    to: '/herramientas',
    icon: Wrench,
    title: 'Comparar Herramientas',
    description: 'Conocé ChatGPT, Claude, Copilot, n8n, AppSheet y más herramientas con criterio profesional.',
    color: 'bg-slate-700',
  },
  {
    to: '/prompts',
    icon: FileText,
    title: 'Biblioteca de Prompts',
    description: 'Instrucciones validadas para GEDOs, logística, instrucción, análisis y más.',
    color: 'bg-indigo-700',
  },
  {
    to: '/casos',
    icon: Briefcase,
    title: 'Casos de Uso Militares',
    description: 'Escenarios concretos de aplicación de IA en el ámbito del cuartel.',
    color: 'bg-teal-700',
  },
  {
    to: '/seguridad',
    icon: Shield,
    title: 'Seguridad y Buenas Prácticas',
    description: 'Criterios para el uso responsable y protegido de herramientas de IA.',
    color: 'bg-red-700',
  },
  {
    to: '/laboratorio',
    icon: FlaskConical,
    title: 'Laboratorio IA Palomar',
    description: 'Proyectos y prototipos de aplicación de IA en el cuartel.',
    color: 'bg-amber-700',
  },
  {
    to: '/glosario',
    icon: BookMarked,
    title: 'Glosario',
    description: 'Definiciones claras de términos de inteligencia artificial aplicados al servicio.',
    color: 'bg-cyan-700',
  },
  {
    to: '/evaluacion',
    icon: ClipboardCheck,
    title: 'Evaluación Rápida',
    description: 'Medí tu nivel de conocimiento sobre IA con preguntas de opción múltiple.',
    color: 'bg-violet-700',
  },
  {
    to: '/historial',
    icon: History,
    title: 'Historial de Consultas',
    description: 'Revisá tus consultas anteriores y el progreso de tu aprendizaje.',
    color: 'bg-gray-600',
  },
];

const stats = [
  { label: 'Herramientas analizadas', value: '15', icon: Star },
  { label: 'Prompts disponibles', value: '15', icon: FileText },
  { label: 'Casos de uso', value: '12', icon: TrendingUp },
  { label: 'Términos del glosario', value: '30', icon: BookMarked },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-green-900 to-green-800 rounded-2xl p-8 mb-8 text-white">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-green-700 bg-opacity-60 px-3 py-1 rounded-full text-green-200 text-xs font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Plataforma activa — Versión 1.0
          </div>
          <h1 className="text-3xl font-bold mb-3">IA Palomar</h1>
          <p className="text-green-100 text-sm font-medium mb-4 uppercase tracking-wide">
            Asistente de Formación y Aplicación Práctica de Inteligencia Artificial
            para Oficiales del Cuartel El Palomar
          </p>
          <p className="text-green-200 text-sm leading-relaxed max-w-2xl">
            Esta plataforma tiene por finalidad facilitar la comprensión, consulta y aplicación
            responsable de herramientas de inteligencia artificial generativa en tareas profesionales
            del servicio, contribuyendo al perfeccionamiento del oficial, la mejora de procesos y el
            uso seguro de tecnologías emergentes.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map(({ label, value, icon: Icon }) => (
          <div key={label} className="card p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
              <Icon size={18} className="text-green-700" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{value}</div>
              <div className="text-xs text-gray-500">{label}</div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-lg font-semibold text-gray-900 mb-4">Módulos de la plataforma</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
        {modules.map(({ to, icon: Icon, title, description, color, featured }) => (
          <button
            key={to}
            onClick={() => navigate(to)}
            className={`card p-5 text-left hover:shadow-md transition-all duration-150 hover:-translate-y-0.5 group
              ${featured ? 'ring-2 ring-green-200' : ''}`}
          >
            <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center mb-3`}>
              <Icon size={18} className="text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 text-sm mb-1.5 group-hover:text-green-800 transition-colors">
              {title}
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="card p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
              <AlertTriangle size={16} className="text-amber-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Principio de uso</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed italic border-l-4 border-green-700 pl-4">
            "La inteligencia artificial no reemplaza el criterio profesional del oficial; lo asiste,
            lo amplía y le permite trabajar con mayor velocidad, precisión y capacidad de análisis."
          </p>
        </div>

        <div className="card p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Inicio rápido</h3>
          <div className="space-y-2">
            {[
              { step: '1', text: 'Completá la Evaluación Rápida para conocer tu nivel.', to: '/evaluacion' },
              { step: '2', text: 'Revisá Seguridad y Buenas Prácticas antes de usar IA.', to: '/seguridad' },
              { step: '3', text: 'Explorá la Biblioteca de Prompts para tareas concretas.', to: '/prompts' },
              { step: '4', text: 'Consultá al Asistente IA cualquier duda del servicio.', to: '/asistente' },
            ].map(({ step, text, to }) => (
              <button
                key={step}
                onClick={() => navigate(to)}
                className="flex items-start gap-3 w-full text-left p-2 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <span className="w-6 h-6 rounded-full bg-green-800 text-white text-xs flex items-center justify-center flex-shrink-0 font-bold">
                  {step}
                </span>
                <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-6 text-center">
        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto italic">
          "Esta herramienta se concibe como un aporte inicial para que el conocimiento tecnológico
          no quede concentrado en unos pocos, sino disponible para todo oficial que busque comprender,
          aplicar y proyectar la inteligencia artificial al servicio."
        </p>
      </div>
    </div>
  );
}
