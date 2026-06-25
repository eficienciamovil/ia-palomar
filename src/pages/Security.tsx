import { securityGuidelines } from '../data/securityGuidelines';
import SectionTitle from '../components/common/SectionTitle';
import { SecurityBadge } from '../components/common/Badge';
import { Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const trafficLight = {
  verde: {
    icon: CheckCircle,
    bg: 'bg-green-50',
    border: 'border-green-200',
    iconColor: 'text-green-600',
    title: 'VERDE — Puede usarse con IA',
    titleColor: 'text-green-800',
    dot: 'bg-green-500',
  },
  amarillo: {
    icon: AlertTriangle,
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    iconColor: 'text-yellow-600',
    title: 'AMARILLO — Requiere análisis previo',
    titleColor: 'text-yellow-800',
    dot: 'bg-yellow-500',
  },
  rojo: {
    icon: Shield,
    bg: 'bg-red-50',
    border: 'border-red-200',
    iconColor: 'text-red-600',
    title: 'ROJO — Nunca cargar en IA pública',
    titleColor: 'text-red-800',
    dot: 'bg-red-500',
  },
};

const order: Array<'verde' | 'amarillo' | 'rojo'> = ['verde', 'amarillo', 'rojo'];

export default function Security() {
  const byLevel = (level: 'verde' | 'amarillo' | 'rojo') =>
    securityGuidelines.filter((g) => g.nivel === level);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-8">
        <SectionTitle
          title="Uso Responsable y Seguro de IA"
          subtitle="Criterios fundamentales para el uso profesional de herramientas de IA en el ámbito institucional."
        />
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
          <AlertTriangle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800 leading-relaxed">
            El uso de herramientas de IA pública implica el envío de datos a servidores externos.
            Mantener siempre criterio de seguridad, independientemente de la urgencia o conveniencia aparente.
            La responsabilidad profesional del oficial no se transfiere a ninguna herramienta tecnológica.
          </p>
        </div>
      </div>

      <h2 className="text-lg font-bold text-gray-900 mb-4">Semáforo de Seguridad</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {order.map((level) => {
          const config = trafficLight[level];
          const Icon = config.icon;
          const items = byLevel(level);
          return (
            <div key={level} className={`rounded-xl border-2 p-5 ${config.bg} ${config.border}`}>
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-4 h-4 rounded-full ${config.dot}`} />
                <Icon size={16} className={config.iconColor} />
                <span className={`text-sm font-bold ${config.titleColor}`}>{config.title}</span>
              </div>
              {items.length > 0 && (
                <ul className="space-y-1.5">
                  {items[0].ejemplos.map((ej) => (
                    <li key={ej} className="text-xs text-gray-700 flex items-start gap-1.5">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                      {ej}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>

      <h2 className="text-lg font-bold text-gray-900 mb-4">Guías de uso responsable</h2>
      <div className="space-y-4">
        {securityGuidelines.map((guideline) => {
          const config = trafficLight[guideline.nivel];
          const Icon = config.icon;
          return (
            <div key={guideline.id} className={`card p-5 border-l-4 ${config.border}`}>
              <div className="flex items-start gap-4">
                <div className={`w-9 h-9 rounded-lg ${config.bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon size={17} className={config.iconColor} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-gray-900 text-sm">{guideline.titulo}</h3>
                    <SecurityBadge level={guideline.nivel} />
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{guideline.descripcion}</p>
                  <ul className="space-y-1.5">
                    {guideline.ejemplos.map((ej) => (
                      <li key={ej} className="text-xs text-gray-600 flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                        {ej}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 bg-green-900 rounded-xl p-6 text-white">
        <h3 className="font-bold mb-3 flex items-center gap-2">
          <Shield size={18} />
          Principio rector
        </h3>
        <p className="text-green-200 text-sm leading-relaxed">
          La IA es una herramienta auxiliar que asiste, organiza y mejora la producción del oficial.
          No decide, no firma, no asume responsabilidades. El criterio profesional, la verificación
          de la información y la responsabilidad institucional siempre recaen en el personal.
        </p>
      </div>
    </div>
  );
}
