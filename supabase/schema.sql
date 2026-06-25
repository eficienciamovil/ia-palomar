-- IA Palomar — Schema SQL para Supabase
-- Ejecutar en el SQL Editor de Supabase

-- Extensión UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tabla de usuarios
CREATE TABLE IF NOT EXISTS usuarios (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nombre TEXT NOT NULL,
  apellido TEXT NOT NULL,
  grado TEXT,
  email TEXT UNIQUE NOT NULL,
  dependencia TEXT,
  rol TEXT DEFAULT 'oficial' CHECK (rol IN ('oficial', 'instructor', 'admin')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla de lecciones
CREATE TABLE IF NOT EXISTS lecciones (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  titulo TEXT NOT NULL,
  descripcion TEXT,
  contenido TEXT NOT NULL,
  nivel TEXT CHECK (nivel IN ('inicial', 'intermedio', 'avanzado')),
  duracion_minutos INTEGER,
  categoria TEXT,
  ejemplo_aplicado TEXT,
  pregunta_control TEXT,
  activa BOOLEAN DEFAULT TRUE,
  orden INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla de progreso de lecciones
CREATE TABLE IF NOT EXISTS progreso_lecciones (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  usuario_id UUID REFERENCES usuarios(id) ON DELETE CASCADE,
  leccion_id UUID REFERENCES lecciones(id) ON DELETE CASCADE,
  completada BOOLEAN DEFAULT FALSE,
  fecha_completada TIMESTAMPTZ,
  UNIQUE (usuario_id, leccion_id)
);

-- Tabla de herramientas
CREATE TABLE IF NOT EXISTS herramientas (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nombre TEXT NOT NULL,
  categoria TEXT,
  descripcion TEXT,
  para_que_sirve TEXT,
  cuando_conviene TEXT,
  cuando_no_conviene TEXT,
  riesgos TEXT,
  ejemplo_militar TEXT,
  nivel TEXT CHECK (nivel IN ('inicial', 'intermedio', 'avanzado')),
  tags TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla de prompts
CREATE TABLE IF NOT EXISTS prompts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  titulo TEXT NOT NULL,
  categoria TEXT,
  nivel TEXT CHECK (nivel IN ('inicial', 'intermedio', 'avanzado')),
  objetivo TEXT,
  prompt TEXT NOT NULL,
  recomendaciones TEXT,
  advertencias TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla de casos de uso
CREATE TABLE IF NOT EXISTS casos_uso (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  titulo TEXT NOT NULL,
  area TEXT,
  problema TEXT,
  solucion_ia TEXT,
  herramientas_sugeridas TEXT[],
  beneficio TEXT,
  riesgos TEXT,
  nivel_implementacion TEXT CHECK (nivel_implementacion IN ('inicial', 'intermedio', 'avanzado')),
  prompt_ejemplo TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla de consultas
CREATE TABLE IF NOT EXISTS consultas (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  usuario_id UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  pregunta TEXT NOT NULL,
  respuesta TEXT,
  categoria TEXT,
  herramienta_mencionada TEXT,
  calificacion INTEGER CHECK (calificacion BETWEEN 1 AND 5),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla de glosario
CREATE TABLE IF NOT EXISTS glosario (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  termino TEXT NOT NULL UNIQUE,
  definicion TEXT NOT NULL,
  ejemplo_servicio TEXT,
  nivel TEXT CHECK (nivel IN ('inicial', 'intermedio', 'avanzado')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla de proyectos del laboratorio
CREATE TABLE IF NOT EXISTS proyectos_laboratorio (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  titulo TEXT NOT NULL,
  area TEXT,
  estado TEXT CHECK (estado IN ('idea', 'prototipo', 'en_prueba', 'operativo')),
  descripcion TEXT,
  problema_resuelve TEXT,
  herramientas_utilizadas TEXT[],
  responsable TEXT,
  beneficio_esperado TEXT,
  proximos_pasos TEXT,
  fecha DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla de evaluaciones
CREATE TABLE IF NOT EXISTS evaluaciones (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  usuario_id UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  puntaje INTEGER CHECK (puntaje BETWEEN 0 AND 100),
  nivel_resultado TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security (RLS)
ALTER TABLE usuarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE lecciones ENABLE ROW LEVEL SECURITY;
ALTER TABLE progreso_lecciones ENABLE ROW LEVEL SECURITY;
ALTER TABLE herramientas ENABLE ROW LEVEL SECURITY;
ALTER TABLE prompts ENABLE ROW LEVEL SECURITY;
ALTER TABLE casos_uso ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultas ENABLE ROW LEVEL SECURITY;
ALTER TABLE glosario ENABLE ROW LEVEL SECURITY;
ALTER TABLE proyectos_laboratorio ENABLE ROW LEVEL SECURITY;
ALTER TABLE evaluaciones ENABLE ROW LEVEL SECURITY;

-- Políticas públicas de lectura (ajustar según requerimiento institucional)
CREATE POLICY "Lectura pública de lecciones" ON lecciones FOR SELECT USING (true);
CREATE POLICY "Lectura pública de herramientas" ON herramientas FOR SELECT USING (true);
CREATE POLICY "Lectura pública de prompts" ON prompts FOR SELECT USING (true);
CREATE POLICY "Lectura pública de casos_uso" ON casos_uso FOR SELECT USING (true);
CREATE POLICY "Lectura pública de glosario" ON glosario FOR SELECT USING (true);
CREATE POLICY "Lectura pública de proyectos" ON proyectos_laboratorio FOR SELECT USING (true);

-- Índices de rendimiento
CREATE INDEX IF NOT EXISTS idx_progreso_usuario ON progreso_lecciones(usuario_id);
CREATE INDEX IF NOT EXISTS idx_consultas_usuario ON consultas(usuario_id);
CREATE INDEX IF NOT EXISTS idx_consultas_fecha ON consultas(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_evaluaciones_usuario ON evaluaciones(usuario_id);
