import { useState } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import { lessons } from '../data/lessons';
import { tools } from '../data/tools';
import { prompts } from '../data/prompts';
import { useCases } from '../data/useCases';
import { glossaryTerms } from '../data/glossary';
import { labProjects } from '../data/labProjects';
import {
  BookOpen, Wrench, FileText, Briefcase, BookMarked,
  FlaskConical, BarChart3, Users, MessageSquare, ClipboardCheck
} from 'lucide-react';

interface MetricCardProps {
  icon: React.ElementType;
  label: string;
  value: number | string;
  sub?: string;
  color?: string;
}

function MetricCard({ icon: Icon, label, value, sub, color = 'bg-green-50 text-green-700' }: MetricCardProps) {
  return (
    <div className="card p-5">
      <div className="flex items-center gap-3 mb-2">
        <div className={`w-9 h-9 rounded-lg ${color} flex items-center justify-center flex-shrink-0`}>
          <Icon size={17} />
        </div>
        <span className="text-sm text-gray-600">{label}</span>
      </div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      {sub && <div className="text-xs text-gray-400 mt-0.5">{sub}</div>}
    </div>
  );
}

const tabs = [
  { id: 'metrics', label: 'Métricas', icon: BarChart3 },
  { id: 'content', label: 'Contenido', icon: BookOpen },
  { id: 'users', label: 'Usuarios', icon: Users },
];

export default function Admin() {
  const [activeTab, setActiveTab] = useState('metrics');

  const consultations = JSON.parse(localStorage.getItem('ia_palomar_consultations') || '[]');
  const completedLessons = JSON.parse(localStorage.getItem('ia_palomar_completed_lessons') || '[]');
  const promptsCopied = parseInt(localStorage.getItem('ia_palomar_prompts_copied') || '0');
  const evaluations = JSON.parse(localStorage.getItem('ia_palomar_evaluations') || '[]');

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <SectionTitle
        title="Panel de Administración"
        subtitle="Métricas de uso, gestión de contenido y estadísticas de la plataforma."
      />

      <div className="flex gap-2 mb-6 border-b border-gray-200 pb-0">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px
              ${activeTab === id
                ? 'border-green-700 text-green-800'
                : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          >
            <Icon size={15} />
            {label}
          </button>
        ))}
      </div>

      {activeTab === 'metrics' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Uso de la plataforma</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <MetricCard icon={MessageSquare} label="Consultas totales" value={consultations.length} />
              <MetricCard icon={BookOpen} label="Lecciones completadas" value={completedLessons.length} sub={`de ${lessons.length}`} color="bg-blue-50 text-blue-700" />
              <MetricCard icon={FileText} label="Prompts copiados" value={promptsCopied} color="bg-indigo-50 text-indigo-700" />
              <MetricCard icon={ClipboardCheck} label="Evaluaciones realizadas" value={evaluations.length} color="bg-violet-50 text-violet-700" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Contenido disponible</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <MetricCard icon={BookOpen} label="Lecciones" value={lessons.length} color="bg-green-50 text-green-700" />
              <MetricCard icon={Wrench} label="Herramientas" value={tools.length} color="bg-slate-50 text-slate-700" />
              <MetricCard icon={FileText} label="Prompts" value={prompts.length} color="bg-indigo-50 text-indigo-700" />
              <MetricCard icon={Briefcase} label="Casos de uso" value={useCases.length} color="bg-teal-50 text-teal-700" />
              <MetricCard icon={BookMarked} label="Glosario" value={glossaryTerms.length} color="bg-cyan-50 text-cyan-700" />
              <MetricCard icon={FlaskConical} label="Proyectos lab" value={labProjects.length} color="bg-amber-50 text-amber-700" />
            </div>
          </div>

          {evaluations.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Últimas evaluaciones</h3>
              <div className="card overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Fecha</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Puntaje</th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Nivel</th>
                    </tr>
                  </thead>
                  <tbody>
                    {evaluations.slice(0, 5).map((ev: { id: string; puntaje: number; nivel_resultado: string; fecha: string }) => (
                      <tr key={ev.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-4 py-3 text-gray-600">
                          {new Date(ev.fecha).toLocaleDateString('es-AR')}
                        </td>
                        <td className="px-4 py-3 font-semibold text-green-800">{ev.puntaje}%</td>
                        <td className="px-4 py-3 text-gray-600">{ev.nivel_resultado}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === 'content' && (
        <div className="space-y-6">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
            <strong>Versión MVP:</strong> La gestión de contenido en esta versión es de solo lectura.
            La edición completa requiere la integración con Supabase y autenticación de administrador.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Lecciones', count: lessons.length, icon: BookOpen, items: lessons.map(l => l.titulo) },
              { title: 'Herramientas', count: tools.length, icon: Wrench, items: tools.map(t => t.nombre) },
              { title: 'Prompts', count: prompts.length, icon: FileText, items: prompts.map(p => p.titulo) },
              { title: 'Casos de Uso', count: useCases.length, icon: Briefcase, items: useCases.map(u => u.titulo) },
            ].map(({ title, count, icon: Icon, items }) => (
              <div key={title} className="card p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={16} className="text-green-700" />
                  <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
                  <span className="badge bg-gray-100 text-gray-600 ml-auto">{count}</span>
                </div>
                <ul className="space-y-1 max-h-40 overflow-y-auto">
                  {items.map((item, i) => (
                    <li key={i} className="text-xs text-gray-600 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'users' && (
        <div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800 mb-6">
            <strong>Autenticación pendiente:</strong> La gestión de usuarios requiere integración con
            Supabase Auth. Consultá el README para instrucciones de configuración.
          </div>
          <div className="card p-8 text-center">
            <Users size={32} className="text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 text-sm">
              Sistema de usuarios disponible tras integrar Supabase Auth.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
