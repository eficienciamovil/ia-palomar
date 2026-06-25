import { useState } from 'react';
import { labProjects } from '../data/labProjects';
import { StatusBadge, TagBadge } from '../components/common/Badge';
import SearchInput from '../components/common/SearchInput';
import SectionTitle from '../components/common/SectionTitle';
import { searchFilter } from '../utils/search';
import { FlaskConical, ChevronDown, ChevronUp, Target, Wrench, TrendingUp, ArrowRight } from 'lucide-react';

const statusOrder = ['todos', 'operativo', 'en_prueba', 'prototipo', 'idea'];

export default function Laboratory() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('todos');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = labProjects.filter((p) => {
    const matchSearch = searchFilter([p], search, ['titulo', 'area', 'descripcion', 'problema_resuelve']).length > 0;
    const matchStatus = statusFilter === 'todos' || p.estado === statusFilter;
    return matchSearch && matchStatus;
  });

  const counts = {
    operativo: labProjects.filter((p) => p.estado === 'operativo').length,
    en_prueba: labProjects.filter((p) => p.estado === 'en_prueba').length,
    prototipo: labProjects.filter((p) => p.estado === 'prototipo').length,
    idea: labProjects.filter((p) => p.estado === 'idea').length,
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <SectionTitle
        title="Laboratorio IA Palomar"
        subtitle="Proyectos y prototipos de aplicación de inteligencia artificial en el cuartel."
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { key: 'operativo', label: 'Operativos', color: 'text-green-700 bg-green-50 border-green-200' },
          { key: 'en_prueba', label: 'En Prueba', color: 'text-yellow-700 bg-yellow-50 border-yellow-200' },
          { key: 'prototipo', label: 'Prototipos', color: 'text-blue-700 bg-blue-50 border-blue-200' },
          { key: 'idea', label: 'Ideas', color: 'text-gray-700 bg-gray-50 border-gray-200' },
        ].map(({ key, label, color }) => (
          <div key={key} className={`card border ${color} p-3 text-center`}>
            <div className="text-2xl font-bold">{counts[key as keyof typeof counts]}</div>
            <div className="text-xs">{label}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="flex-1">
          <SearchInput value={search} onChange={setSearch} placeholder="Buscar proyectos..." />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {statusOrder.map((status) => (
          <button
            key={status}
            onClick={() => setStatusFilter(status)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors capitalize
              ${statusFilter === status
                ? 'bg-green-800 text-white'
                : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-50'}`}
          >
            {status === 'todos' ? 'Todos' : status === 'en_prueba' ? 'En Prueba' : status}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((project) => {
          const isExpanded = expandedId === project.id;
          return (
            <div key={project.id} className="card overflow-hidden">
              <button
                className="w-full p-5 text-left"
                onClick={() => setExpandedId(isExpanded ? null : project.id)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <FlaskConical size={14} className="text-gray-400" />
                      <span className="text-xs text-gray-400">{project.area}</span>
                      <span className="text-xs text-gray-300">•</span>
                      <span className="text-xs text-gray-400">{new Date(project.fecha).toLocaleDateString('es-AR')}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm">{project.titulo}</h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">{project.descripcion}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <StatusBadge status={project.estado} />
                    {isExpanded ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
                  </div>
                </div>
              </button>

              {isExpanded && (
                <div className="px-5 pb-5 border-t border-gray-100 pt-4 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-red-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-red-800 text-sm font-semibold mb-2">
                        <Target size={14} />
                        Problema que resuelve
                      </div>
                      <p className="text-sm text-gray-700">{project.problema_resuelve}</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-green-800 text-sm font-semibold mb-2">
                        <TrendingUp size={14} />
                        Beneficio esperado
                      </div>
                      <p className="text-sm text-gray-700">{project.beneficio_esperado}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-gray-700 text-xs font-semibold mb-2">
                        <Wrench size={13} />
                        Herramientas utilizadas
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.herramientas_utilizadas.map((h) => (
                          <TagBadge key={h} tag={h} />
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-gray-700 text-xs font-semibold mb-2">
                        <ArrowRight size={13} />
                        Próximos pasos
                      </div>
                      <p className="text-sm text-gray-600">{project.proximos_pasos}</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Responsable: </span>
                    <span className="text-sm text-gray-700">{project.responsable}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          No se encontraron proyectos con ese criterio.
        </div>
      )}
    </div>
  );
}
