export type UserRole = 'oficial' | 'instructor' | 'admin';
export type Level = 'inicial' | 'intermedio' | 'avanzado';
export type LessonStatus = 'not_started' | 'in_progress' | 'completed';
export type ProjectStatus = 'idea' | 'prototipo' | 'en_prueba' | 'operativo';
export type SecurityLevel = 'verde' | 'amarillo' | 'rojo';

export interface User {
  id: string;
  nombre: string;
  apellido: string;
  grado: string;
  email: string;
  dependencia: string;
  rol: UserRole;
  created_at: string;
}

export interface Lesson {
  id: string;
  titulo: string;
  descripcion: string;
  contenido: string;
  nivel: Level;
  duracion_minutos: number;
  categoria: string;
  ejemplo_aplicado: string;
  pregunta_control: string;
  activa: boolean;
  orden: number;
}

export interface LessonProgress {
  leccion_id: string;
  completada: boolean;
  fecha_completada?: string;
}

export interface Tool {
  id: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  para_que_sirve: string;
  cuando_conviene: string;
  cuando_no_conviene: string;
  riesgos: string;
  ejemplo_militar: string;
  nivel: Level;
  tags: string[];
  icono?: string;
}

export interface Prompt {
  id: string;
  titulo: string;
  categoria: string;
  nivel: Level;
  objetivo: string;
  prompt: string;
  recomendaciones: string;
  advertencias: string;
}

export interface UseCase {
  id: string;
  titulo: string;
  area: string;
  problema: string;
  solucion_ia: string;
  herramientas_sugeridas: string[];
  beneficio: string;
  riesgos: string;
  nivel_implementacion: Level;
  prompt_ejemplo: string;
}

export interface GlossaryTerm {
  id: string;
  termino: string;
  definicion: string;
  ejemplo_servicio: string;
  nivel: Level;
}

export interface LabProject {
  id: string;
  titulo: string;
  area: string;
  estado: ProjectStatus;
  descripcion: string;
  problema_resuelve: string;
  herramientas_utilizadas: string[];
  responsable: string;
  beneficio_esperado: string;
  proximos_pasos: string;
  fecha: string;
}

export interface QuizQuestion {
  id: string;
  pregunta: string;
  opciones: string[];
  respuesta_correcta: number;
  explicacion: string;
  categoria: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  categoria?: string;
}

export interface Consultation {
  id: string;
  usuario: string;
  pregunta: string;
  respuesta: string;
  categoria: string;
  herramienta_mencionada: string;
  calificacion: number;
  fecha: string;
}

export interface SecurityGuideline {
  id: string;
  titulo: string;
  descripcion: string;
  nivel: SecurityLevel;
  ejemplos: string[];
}

export interface DashboardMetrics {
  consultas_totales: number;
  lecciones_completadas: number;
  prompts_copiados: number;
  herramientas_consultadas: number;
}
