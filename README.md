# IA Palomar

**Asistente de Formación y Aplicación Práctica de Inteligencia Artificial para Oficiales del Cuartel El Palomar**

## Descripción

IA Palomar es una plataforma web institucional diseñada para que los oficiales del Cuartel El Palomar puedan comprender, consultar y aplicar herramientas de inteligencia artificial generativa en tareas profesionales, administrativas, logísticas, documentales, de conducción e instrucción.

> "La inteligencia artificial no reemplaza el criterio profesional del oficial; lo asiste, lo amplía y le permite trabajar con mayor velocidad, precisión y capacidad de análisis."

## Módulos

| Módulo | Ruta | Descripción |
|---|---|---|
| Dashboard | / | Panel principal |
| Asistente IA | /asistente | Chat especializado |
| Aprender IA | /aprender | 15 microlecciones |
| Herramientas | /herramientas | Comparador de 15 herramientas |
| Prompts | /prompts | 15 prompts militares |
| Casos de Uso | /casos | 12 escenarios concretos |
| Seguridad | /seguridad | Semáforo y buenas prácticas |
| Laboratorio | /laboratorio | Proyectos en desarrollo |
| Glosario | /glosario | 30 términos con ejemplos |
| Evaluación | /evaluacion | Quiz de 15 preguntas |
| Historial | /historial | Registro de consultas |
| Admin | /admin | Panel de administración |

## Stack técnico

- **Frontend**: React 18 + Vite + TypeScript
- **Estilos**: Tailwind CSS 3
- **Routing**: React Router DOM v6
- **Íconos**: Lucide React
- **Base de datos**: Supabase (PostgreSQL) — opcional
- **Despliegue**: Vercel o Railway

## Instalación

```bash
# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env

# Iniciar en desarrollo
npm run dev

# Build de producción
npm run build
```

## Variables de entorno

Copiar `.env.example` como `.env`:

```env
# Supabase (opcional)
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu-anon-key

# API de IA (opcional — para respuestas reales)
VITE_ANTHROPIC_API_KEY=sk-ant-...
```

La app funciona sin Supabase ni APIs de IA en modo mock.

## Conectar Supabase

1. Crear proyecto en supabase.com
2. Ejecutar `supabase/schema.sql` en el SQL Editor
3. Copiar URL y Anon Key al `.env`

## Despliegue en Vercel

```bash
npm install -g vercel
vercel
```

O conectar el repositorio GitHub desde el dashboard de Vercel.

## Despliegue en Railway

Conectar el repositorio GitHub desde railway.app. Railway detecta automáticamente el proyecto Vite.

## Próximos pasos

1. Integrar Supabase Auth para usuarios con roles
2. Conectar API de Anthropic/OpenAI para respuestas reales
3. Agregar prompts específicos aportados por los usuarios
4. Panel instructor para crear lecciones desde la interfaz
5. Exportación de historial en PDF

---

Desarrollado con Claude Code para el Cuartel El Palomar.
