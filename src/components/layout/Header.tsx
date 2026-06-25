import { Menu, Bell, User } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface HeaderProps {
  onMenuClick: () => void;
}

const pageTitles: Record<string, string> = {
  '/': 'Panel Principal',
  '/asistente': 'Asistente IA Palomar',
  '/aprender': 'Aprender IA desde Cero',
  '/herramientas': 'Comparador de Herramientas',
  '/prompts': 'Biblioteca de Prompts',
  '/casos': 'Casos de Uso Militares',
  '/seguridad': 'Seguridad y Buenas Prácticas',
  '/laboratorio': 'Laboratorio IA Palomar',
  '/glosario': 'Glosario de IA',
  '/evaluacion': 'Evaluación Rápida',
  '/historial': 'Historial de Consultas',
  '/admin': 'Administración',
};

export default function Header({ onMenuClick }: HeaderProps) {
  const location = useLocation();
  const basePath = '/' + location.pathname.split('/')[1];
  const title = pageTitles[basePath] || pageTitles[location.pathname] || 'IA Palomar';

  return (
    <header className="h-14 bg-white border-b border-gray-200 flex items-center px-4 gap-3 flex-shrink-0">
      <button
        onClick={onMenuClick}
        className="lg:hidden text-gray-500 hover:text-gray-700 p-1.5 rounded-lg hover:bg-gray-100"
      >
        <Menu size={20} />
      </button>

      <div className="flex-1">
        <h1 className="text-base font-semibold text-gray-900">{title}</h1>
      </div>

      <div className="flex items-center gap-2">
        <button className="relative p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
          <Bell size={18} />
        </button>
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors">
          <div className="w-7 h-7 rounded-full bg-green-800 flex items-center justify-center">
            <User size={14} className="text-white" />
          </div>
          <span className="text-sm font-medium text-gray-700 hidden sm:block">Oficial</span>
        </button>
      </div>
    </header>
  );
}
