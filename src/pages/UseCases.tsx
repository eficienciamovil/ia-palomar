import { useState } from 'react';
import { useCases } from '../data/useCases';
import { LevelBadge, TagBadge } from '../components/common/Badge';
import CopyButton from '../components/common/CopyButton';
import SearchInput from '../components/common/SearchInput';
import SectionTitle from '../components/common/SectionTitle';
import { searchFilter } from '../utils/search';
import { AlertTriangle, CheckCircle, Wrench, Target, ChevronDown, ChevronUp } from 'lucide-react';

const areas = ['todas', ...Array.from(new Set(useCases.map((uc) => uc.area)))];

export default function UseCases() {
  const [search, setSearch] = useState('');
  const [areaFilter, setAreaFilter] = useState('todas');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = useCases.filter((uc) => {
    const matchSearch = searchFilter([uc], search, ['titulo', 'area', 'problema', 'solucion_ia']).length > 0;
    const matchArea = areaFilter === 'todas' || uc.area === areaFilter;
    return matchSearch && matchArea;
  });

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <SectionTitle
        title="Casos de Uso Militares"
        subtitle="Escenarios concretos de aplicación de IA en tareas del cuartel, con herramientas sugeridas y prompts de ejemplo."
      />

      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="flex-1">
          <SearchInput value={search} onChange={setSearch} placeholder="Buscar casos de uso..." />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {areas.map((area) => (
          <button
            key={area}
            onClick={() => setAreaFilter(area)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors
              ${areaFilter === area
                ? 'bg-green-800 text-white'
                : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-50'}`}
          >
            {area === 'todas' ? 'Todas las áreas' : area}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((uc) => {
          const isExpanded = expandedId === uc.id;
          return (
            <div key={uc.id} className="card overflow-hidden">
              <button
                className="w-full p-5 text-left"
                onClick={() => setExpandedId(isExpanded ? null : uc.id)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-xs text-gray-400 mb-1">{uc.area}</div>
                    <h3 className="font-semibold text-gray-900 text-sm">{uc.titulo}</h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{uc.problema}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <LevelBadge level={uc.nivel_implementacion} />
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
                        Problema identificado
                      </div>
                      <p className="text-sm text-gray-700">{uc.problema}</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-green-800 text-sm font-semibold mb-2">
                        <CheckCircle size={14} />
                        Solución con IA
                      </div>
                      <p className="text-sm text-gray-700">{uc.solucion_ia}</p>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-blue-800 text-sm font-semibold mb-2">
                        <Wrench size={14} />
                        Herramientas sugeridas
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {uc.herramientas_sugeridas.map((h) => (
                          <TagBadge key={h} tag={h} />
                        ))}
                      </div>
                    </div>
                    <div className="bg-amber-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-amber-800 text-sm font-semibold mb-2">
                        <AlertTriangle size={14} />
                        Riesgos
                      </div>
                      <p className="text-sm text-gray-700">{uc.riesgos}</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-gray-700 text-sm font-semibold mb-2">
                      <CheckCircle size={14} className="text-green-600" />
                      Beneficio esperado
                    </div>
                    <p className="text-sm text-gray-700">{uc.beneficio}</p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Prompt de ejemplo</span>
                      <CopyButton text={uc.prompt_ejemplo} label="Copiar prompt" />
                    </div>
                    <div className="bg-gray-900 text-green-400 rounded-xl p-4 text-sm font-mono leading-relaxed whitespace-pre-wrap">
                      {uc.prompt_ejemplo}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          No se encontraron casos con ese criterio.
        </div>
      )}
    </div>
  );
}
