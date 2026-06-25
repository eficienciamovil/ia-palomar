import { useState } from 'react';
import { tools } from '../data/tools';
import { LevelBadge, TagBadge } from '../components/common/Badge';
import SearchInput from '../components/common/SearchInput';
import SectionTitle from '../components/common/SectionTitle';
import { searchFilter } from '../utils/search';
import { ChevronDown, ChevronUp, AlertTriangle, CheckCircle, XCircle, Briefcase } from 'lucide-react';

const categories = ['todas', ...Array.from(new Set(tools.map((t) => t.categoria)))];

export default function Tools() {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('todas');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = tools.filter((tool) => {
    const matchSearch = searchFilter([tool], search, ['nombre', 'descripcion', 'para_que_sirve', 'tags', 'categoria']).length > 0;
    const matchCat = categoryFilter === 'todas' || tool.categoria === categoryFilter;
    return matchSearch && matchCat;
  });

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <SectionTitle
        title="Comparador de Herramientas"
        subtitle="Conocé las principales herramientas de IA con criterio profesional: cuándo usarlas, cuándo no y qué riesgos tienen."
      />

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1">
          <SearchInput value={search} onChange={setSearch} placeholder="Buscar herramientas..." />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors
              ${categoryFilter === cat
                ? 'bg-green-800 text-white'
                : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-50'}`}
          >
            {cat === 'todas' ? 'Todas' : cat}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((tool) => {
          const isExpanded = expandedId === tool.id;
          return (
            <div key={tool.id} className="card overflow-hidden">
              <button
                className="w-full p-5 text-left flex items-start gap-4"
                onClick={() => setExpandedId(isExpanded ? null : tool.id)}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h3 className="font-bold text-gray-900 text-base">{tool.nombre}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">{tool.categoria}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <LevelBadge level={tool.nivel} />
                      {isExpanded ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{tool.descripcion}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {tool.tags.map((tag) => <TagBadge key={tag} tag={tag} />)}
                  </div>
                </div>
              </button>

              {isExpanded && (
                <div className="px-5 pb-5 border-t border-gray-100 pt-4 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-green-800 text-sm font-semibold mb-2">
                        <CheckCircle size={15} />
                        Para qué sirve
                      </div>
                      <p className="text-sm text-gray-700">{tool.para_que_sirve}</p>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-blue-800 text-sm font-semibold mb-2">
                        <CheckCircle size={15} />
                        Cuándo conviene usarla
                      </div>
                      <p className="text-sm text-gray-700">{tool.cuando_conviene}</p>
                    </div>
                    <div className="bg-red-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-red-800 text-sm font-semibold mb-2">
                        <XCircle size={15} />
                        Cuándo NO conviene
                      </div>
                      <p className="text-sm text-gray-700">{tool.cuando_no_conviene}</p>
                    </div>
                    <div className="bg-amber-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-amber-800 text-sm font-semibold mb-2">
                        <AlertTriangle size={15} />
                        Riesgos
                      </div>
                      <p className="text-sm text-gray-700">{tool.riesgos}</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-gray-800 text-sm font-semibold mb-2">
                      <Briefcase size={15} />
                      Ejemplo de uso militar
                    </div>
                    <p className="text-sm text-gray-700">{tool.ejemplo_militar}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          No se encontraron herramientas con ese criterio.
        </div>
      )}
    </div>
  );
}
