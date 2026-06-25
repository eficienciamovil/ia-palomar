import { useState } from 'react';
import { prompts } from '../data/prompts';
import { LevelBadge } from '../components/common/Badge';
import CopyButton from '../components/common/CopyButton';
import SearchInput from '../components/common/SearchInput';
import SectionTitle from '../components/common/SectionTitle';
import { searchFilter } from '../utils/search';
import { Target, AlertTriangle, Info, ChevronDown, ChevronUp } from 'lucide-react';

const categories = ['todas', ...Array.from(new Set(prompts.map((p) => p.categoria)))];

export default function Prompts() {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('todas');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = prompts.filter((p) => {
    const matchSearch = searchFilter([p], search, ['titulo', 'objetivo', 'prompt', 'categoria']).length > 0;
    const matchCat = categoryFilter === 'todas' || p.categoria === categoryFilter;
    return matchSearch && matchCat;
  });

  const trackCopy = (promptTitle: string) => {
    const count = parseInt(localStorage.getItem('ia_palomar_prompts_copied') || '0') + 1;
    localStorage.setItem('ia_palomar_prompts_copied', String(count));
    const log: string[] = JSON.parse(localStorage.getItem('ia_palomar_copied_prompts_log') || '[]');
    log.unshift({ title: promptTitle, date: new Date().toISOString() } as unknown as string);
    localStorage.setItem('ia_palomar_copied_prompts_log', JSON.stringify(log.slice(0, 20)));
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <SectionTitle
        title="Biblioteca de Prompts Militares"
        subtitle="Instrucciones validadas para tareas frecuentes del servicio. Copiá, adaptá y usá."
      />

      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="flex-1">
          <SearchInput value={search} onChange={setSearch} placeholder="Buscar prompts..." />
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
            {cat === 'todas' ? 'Todas las categorías' : cat}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((prompt) => {
          const isExpanded = expandedId === prompt.id;
          return (
            <div key={prompt.id} className="card overflow-hidden">
              <button
                className="w-full p-5 text-left"
                onClick={() => setExpandedId(isExpanded ? null : prompt.id)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-gray-400">{prompt.categoria}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm">{prompt.titulo}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Target size={12} />
                        {prompt.objetivo}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <LevelBadge level={prompt.nivel} />
                    {isExpanded ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
                  </div>
                </div>
              </button>

              {isExpanded && (
                <div className="px-5 pb-5 border-t border-gray-100 pt-4 space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Prompt completo</span>
                      <CopyButton
                        text={prompt.prompt}
                        label="Copiar prompt"
                      />
                    </div>
                    <div
                      className="bg-gray-900 text-green-400 rounded-xl p-4 text-sm font-mono leading-relaxed whitespace-pre-wrap cursor-pointer"
                      onClick={() => trackCopy(prompt.titulo)}
                    >
                      {prompt.prompt}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-blue-800 text-xs font-semibold mb-2">
                        <Info size={13} />
                        Recomendaciones de uso
                      </div>
                      <p className="text-sm text-gray-700">{prompt.recomendaciones}</p>
                    </div>
                    <div className="bg-amber-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-amber-800 text-xs font-semibold mb-2">
                        <AlertTriangle size={13} />
                        Advertencias
                      </div>
                      <p className="text-sm text-gray-700">{prompt.advertencias}</p>
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
          No se encontraron prompts con ese criterio.
        </div>
      )}
    </div>
  );
}
