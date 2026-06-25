import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, CheckCircle, Circle, ChevronRight, Filter } from 'lucide-react';
import { lessons } from '../data/lessons';
import { LevelBadge } from '../components/common/Badge';
import SearchInput from '../components/common/SearchInput';
import SectionTitle from '../components/common/SectionTitle';
import { searchFilter } from '../utils/search';

export default function Learn() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [levelFilter, setLevelFilter] = useState('todos');

  const completed: string[] = JSON.parse(localStorage.getItem('ia_palomar_completed_lessons') || '[]');

  const filtered = lessons.filter((lesson) => {
    const matchSearch = searchFilter([lesson], search, ['titulo', 'descripcion', 'categoria']).length > 0;
    const matchLevel = levelFilter === 'todos' || lesson.nivel === levelFilter;
    return matchSearch && matchLevel;
  });

  const completedCount = lessons.filter((l) => completed.includes(l.id)).length;
  const progress = Math.round((completedCount / lessons.length) * 100);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <SectionTitle
        title="Aprender IA desde Cero"
        subtitle="15 microlecciones graduales con ejemplos aplicados al contexto del cuartel."
      />

      <div className="card p-5 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Progreso de aprendizaje</span>
          <span className="text-sm font-bold text-green-800">{completedCount}/{lessons.length} lecciones</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-green-700 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-1">{progress}% completado</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1">
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Buscar lecciones..."
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter size={15} className="text-gray-400" />
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

      <div className="space-y-3">
        {filtered.map((lesson) => {
          const isDone = completed.includes(lesson.id);
          return (
            <button
              key={lesson.id}
              onClick={() => navigate(`/aprender/${lesson.id}`)}
              className="card w-full p-4 text-left hover:shadow-md transition-all duration-150 hover:-translate-y-0.5 group flex items-start gap-4"
            >
              <div className="flex-shrink-0 mt-0.5">
                {isDone
                  ? <CheckCircle size={22} className="text-green-600" />
                  : <Circle size={22} className="text-gray-300" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-gray-400 font-mono">#{String(lesson.orden).padStart(2, '0')}</span>
                      <span className="text-xs text-gray-400">{lesson.categoria}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm group-hover:text-green-800 transition-colors">
                      {lesson.titulo}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">{lesson.descripcion}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <LevelBadge level={lesson.nivel} />
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock size={12} />
                      {lesson.duracion_minutos} min
                    </div>
                  </div>
                </div>
              </div>
              <ChevronRight size={16} className="text-gray-400 flex-shrink-0 group-hover:text-green-700 transition-colors mt-1" />
            </button>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          No se encontraron lecciones con ese criterio.
        </div>
      )}
    </div>
  );
}
