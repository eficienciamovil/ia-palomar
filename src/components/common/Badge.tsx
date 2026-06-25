import type { Level, SecurityLevel } from '../../types';

interface LevelBadgeProps {
  level: Level;
}

const levelConfig: Record<Level, { label: string; className: string }> = {
  inicial: { label: 'Inicial', className: 'bg-green-100 text-green-800' },
  intermedio: { label: 'Intermedio', className: 'bg-blue-100 text-blue-800' },
  avanzado: { label: 'Avanzado', className: 'bg-purple-100 text-purple-800' },
};

export function LevelBadge({ level }: LevelBadgeProps) {
  const config = levelConfig[level];
  return (
    <span className={`badge ${config.className}`}>{config.label}</span>
  );
}

interface SecurityBadgeProps {
  level: SecurityLevel;
}

const securityConfig: Record<SecurityLevel, { label: string; className: string; dot: string }> = {
  verde: { label: 'Verde', className: 'bg-green-100 text-green-800', dot: 'bg-green-500' },
  amarillo: { label: 'Amarillo', className: 'bg-yellow-100 text-yellow-800', dot: 'bg-yellow-500' },
  rojo: { label: 'Rojo', className: 'bg-red-100 text-red-800', dot: 'bg-red-500' },
};

export function SecurityBadge({ level }: SecurityBadgeProps) {
  const config = securityConfig[level];
  return (
    <span className={`badge gap-1.5 ${config.className}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
      {config.label}
    </span>
  );
}

interface TagBadgeProps {
  tag: string;
}

export function TagBadge({ tag }: TagBadgeProps) {
  return (
    <span className="badge bg-gray-100 text-gray-600">{tag}</span>
  );
}

interface StatusBadgeProps {
  status: string;
}

const statusConfig: Record<string, { label: string; className: string }> = {
  idea: { label: 'Idea', className: 'bg-gray-100 text-gray-600' },
  prototipo: { label: 'Prototipo', className: 'bg-blue-100 text-blue-700' },
  en_prueba: { label: 'En Prueba', className: 'bg-yellow-100 text-yellow-700' },
  operativo: { label: 'Operativo', className: 'bg-green-100 text-green-700' },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status] ?? { label: status, className: 'bg-gray-100 text-gray-600' };
  return (
    <span className={`badge ${config.className}`}>{config.label}</span>
  );
}
