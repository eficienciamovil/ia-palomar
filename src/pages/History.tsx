import { useState } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import SearchInput from '../components/common/SearchInput';
import { searchFilter } from '../utils/search';
import { History as HistoryIcon, Star, Trash2 } from 'lucide-react';
import type { Consultation } from '../types';

export default function History() {
  const [search, setSearch] = useState('');

  const stored: Consultation[] = JSON.parse(localStorage.getItem('ia_palomar_consultations') || '[]');
  const [consultations, setConsultations] = useState<Consultation[]>(stored);

  const filtered = searchFilter(consultations, search, ['pregunta', 'categoria', 'herramienta_mencionada', 'usuario']);

  const handleRate = (id: string, rating: number) => {
    const updated = consultations.map((c) => c.id === id ? { ...c, calificacion: rating } : c);
    setConsultations(updated);
    localStorage.setItem('ia_palomar_consultations', JSON.stringify(updated));
  };

  const handleClear = () => {
    if (window.confirm('¿Eliminar todo el historial de consultas?')) {
      setConsultations([]);
      localStorage.removeItem('ia_palomar_consultations');
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-start justify-between mb-6">
        <SectionTitle
          title="Historial de Consultas"
          subtitle="Registro de tus consultas al Asistente IA Palomar."
        />
        {consultations.length > 0 && (
          <button
            onClick={handleClear}
            className="flex items-center gap-1.5 text-sm text-red-500 hover:text-red-700 px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors"
          >
            <Trash2 size={14} />
            Limpiar
          </button>
        )}
      </div>

      {consultations.length > 0 && (
        <div className="mb-4">
          <SearchInput value={search} onChange={setSearch} placeholder="Buscar en historial..." />
        </div>
      )}

      {filtered.length === 0 && consultations.length === 0 && (
        <div className="card p-12 text-center">
          <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
            <HistoryIcon size={24} className="text-gray-400" />
          </div>
          <h3 className="font-semibold text-gray-700 mb-2">Sin historial todavía</h3>
          <p className="text-sm text-gray-500">
            Tus consultas al Asistente IA Palomar aparecerán aquí automáticamente.
          </p>
        </div>
      )}

      {filtered.length === 0 && consultations.length > 0 && (
        <div className="text-center py-12 text-gray-400">
          No se encontraron consultas con ese criterio.
        </div>
      )}

      <div className="space-y-3">
        {filtered.map((c) => (
          <div key={c.id} className="card p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-gray-400">
                    {new Date(c.fecha).toLocaleDateString('es-AR', {
                      day: '2-digit', month: '2-digit', year: 'numeric',
                      hour: '2-digit', minute: '2-digit',
                    })}
                  </span>
                  {c.categoria && (
                    <>
                      <span className="text-gray-300">•</span>
                      <span className="badge bg-gray-100 text-gray-500">{c.categoria}</span>
                    </>
                  )}
                  {c.herramienta_mencionada && c.herramienta_mencionada !== 'Ninguna' && (
                    <span className="badge bg-green-100 text-green-700">{c.herramienta_mencionada}</span>
                  )}
                </div>
                <p className="font-medium text-gray-900 text-sm mb-2">{c.pregunta}</p>
                <p className="text-xs text-gray-500 line-clamp-2">{c.respuesta}</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
              <span className="text-xs text-gray-400">Calificar respuesta:</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleRate(c.id, star)}
                    className="transition-colors"
                  >
                    <Star
                      size={16}
                      className={star <= (c.calificacion || 0) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
