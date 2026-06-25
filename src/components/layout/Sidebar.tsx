import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard, MessageSquare, BookOpen, Wrench, FileText,
  Briefcase, Shield, FlaskConical, BookMarked, ClipboardCheck,
  History, Settings, X, ChevronRight
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Inicio' },
  { to: '/asistente', icon: MessageSquare, label: 'Asistente IA' },
  { to: '/aprender', icon: BookOpen, label: 'Aprender IA' },
  { to: '/herramientas', icon: Wrench, label: 'Herramientas' },
  { to: '/prompts', icon: FileText, label: 'Biblioteca de Prompts' },
  { to: '/casos', icon: Briefcase, label: 'Casos de Uso' },
  { to: '/seguridad', icon: Shield, label: 'Seguridad' },
  { to: '/laboratorio', icon: FlaskConical, label: 'Laboratorio IA' },
  { to: '/glosario', icon: BookMarked, label: 'Glosario' },
  { to: '/evaluacion', icon: ClipboardCheck, label: 'Evaluación' },
  { to: '/historial', icon: History, label: 'Historial' },
  { to: '/admin', icon: Settings, label: 'Administración' },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full z-30 flex flex-col
          bg-gradient-to-b from-green-900 to-green-950
          w-64 transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:z-auto
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-green-700">
          <div>
            <div className="text-white font-bold text-lg leading-tight">IA Palomar</div>
            <div className="text-green-300 text-xs mt-0.5">Cuartel El Palomar</div>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-green-300 hover:text-white p-1"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 group
                ${isActive
                  ? 'bg-green-700 text-white'
                  : 'text-green-200 hover:bg-green-800 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon size={17} className="flex-shrink-0" />
                  <span className="flex-1">{label}</span>
                  {isActive && <ChevronRight size={14} className="opacity-60" />}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="px-4 py-4 border-t border-green-700">
          <div className="text-green-400 text-xs leading-relaxed">
            Uso responsable de IA para oficiales del Cuartel El Palomar
          </div>
        </div>
      </aside>
    </>
  );
}
