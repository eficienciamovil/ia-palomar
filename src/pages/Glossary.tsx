import { useState } from 'react';
import { glossaryTerms } from '../data/glossary';
import { LevelBadge } from '../components/common/Badge';
import SearchInput from '../components/common/SearchInput';
import SectionTitle from '../components/common/SectionTitle';
import { searchFilter } from '../utils/search';
import { Lightbulb } from 'lucide-react';

export default function Glossary() {
  const [search, setSearch] = useState('');
  const [levelFilter, setLevelFilter] = useState('todos');

  const filtered = glossaryTerms.filter((term) => {
    const matchSearch = searchFilter([term], search, ['termino', 'definicion', 'ejemplo_servicio']).length > 0;
    const matchLevel = levelFilter === 'todos' || term.nivel === levelFilter;
    return matchSearch && matchLevel;
  });

  const byLetter: Record<string, typeof glossaryTerms> = {};
  filtered.forEach((term) => {
    const letter = term.termino[0].toUpperCase();
    if (!byLetter[letter]) byLetter[letter] = [];
    byLetter[letter].push(term);
  });

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <SectionTitle
        title="Glosario de IA"
        subtitle="Definiciones claras de términos de inteligencia artificial con ejemplos aplicados al servicio."
      />

      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="flex-1">
          <SearchInput value={search} onChange={setSearch} placeholder="Buscar términos..." />
        </div>
        <div className="flex gap-2">
          {['todos', 'inicial', 'intermedio', 'avanzado'].map((level) => (
            <button
              key={level}
              onClick={() => setLevelFilter(level)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors capitalize
                ${levelFilter === level
                  ? 'bg-green-800 text-white'
                  : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-50'}`}
            >
              {level === 'todos' ? 'Todos' : level}
            </button>
          ))}
        </div>
      </div>

      {Object.keys(byLetter).sort().map((letter) => (
        <div key={letter} className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-green-800 flex items-center justify-center text-white font-bold text-lg">
              {letter}
            </div>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="space-y-3">
            {byLetter[letter].map((term) => (
              <div key={term.id} className="card p-5">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-bold text-gray-900">{term.termino}</h3>
                  <LevelBadge level={term.nivel} />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">{term.definicion}</p>
                <div className="bg-green-50 rounded-lg p-3 flex items-start gap-2">
                  <Lightbulb size={14} className="text-green-700 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-green-800 leading-relaxed">
                    <strong>Ejemplo en el servicio:</strong> {term.ejemplo_servicio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {filtered.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          No se encontraron términos con ese criterio.
        </div>
      )}
    </div>
  );
}
