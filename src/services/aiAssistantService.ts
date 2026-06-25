import type { ChatMessage } from '../types';

interface AIResponse {
  content: string;
  categoria: string;
  herramienta_mencionada: string;
}

const knowledgeBase: Record<string, AIResponse> = {
  chatgpt: {
    content: `**ChatGPT** es una herramienta de inteligencia artificial generativa desarrollada por OpenAI. Es uno de los asistentes más populares del mundo.

**Aplicación al servicio:**
Puede ayudar a redactar borradores de GEDOs, estructurar informes, preparar clases, analizar datos no sensibles, mejorar comunicaciones escritas y generar matrices de riesgos.

**Precaución:**
No cargues información clasificada, reservada o sensible. Los datos ingresados se envían a servidores externos. Todo borrador generado debe ser revisado y aprobado por el oficial responsable.

**Siguiente paso sugerido:**
Probá pedirle que redacte el borrador de una nota de servicio o que estructure una presentación sobre un tema de tu área.`,
    categoria: 'Herramientas',
    herramienta_mencionada: 'ChatGPT',
  },
  claude: {
    content: `**Claude** es una herramienta de IA generativa desarrollada por Anthropic. Es especialmente útil para análisis de textos extensos y razonamiento escrito complejo.

**Aplicación al servicio:**
Puede ayudar a revisar anexos técnicos extensos, resumir normativa no sensible, preparar clases, estructurar proyectos de mejora y comparar versiones de documentos.

**Precaución:**
No cargues información clasificada, reservada o personal sin autorización. Verificá siempre los datos específicos que mencione (normas, fechas, cifras).

**Siguiente paso sugerido:**
Probá pedirle que transforme una idea general en un esquema de informe o que compare dos enfoques distintos para resolver un problema de tu área.`,
    categoria: 'Herramientas',
    herramienta_mencionada: 'Claude',
  },
  copilot: {
    content: `**Microsoft Copilot** es la familia de asistentes de IA de Microsoft, integrados en el ecosistema Office 365.

**Aplicación al servicio:**
Integrado en Word, Excel, PowerPoint, Outlook y Teams. Puede resumir reuniones de Teams, asistir en la redacción de documentos Word, analizar planillas Excel con lenguaje natural y redactar correos.

**Precaución:**
Verificar las políticas institucionales respecto al uso de Microsoft 365 con Copilot. Requiere licencia M365 activa. Revisar qué datos accede el sistema según la configuración institucional.

**Siguiente paso sugerido:**
Si tenés Office 365, activá Copilot en Word y probá la función "Borrador con Copilot" para generar el primer esquema de un documento.`,
    categoria: 'Herramientas',
    herramienta_mencionada: 'Microsoft Copilot',
  },
  gemini: {
    content: `**Gemini** es el asistente de IA generativa de Google, integrado con los servicios de Google Workspace.

**Aplicación al servicio:**
Puede asistir en la redacción y análisis dentro de Google Docs, Google Sheets y Gmail. En algunas versiones tiene acceso a búsqueda de Google en tiempo real.

**Precaución:**
Los datos se procesan en servidores de Google. Verificar políticas institucionales antes de usar con información interna.

**Siguiente paso sugerido:**
Si usás Google Workspace, explorá la integración de Gemini con Google Docs para asistencia en redacción directa.`,
    categoria: 'Herramientas',
    herramienta_mencionada: 'Gemini',
  },
  perplexity: {
    content: `**Perplexity** es un motor de búsqueda con IA que responde preguntas con información actualizada de la web, citando las fuentes.

**Aplicación al servicio:**
Útil para investigar temas con información actualizada y verificable. A diferencia de ChatGPT o Claude, siempre indica de dónde proviene la información.

**Precaución:**
Verificar siempre las fuentes citadas directamente. No reemplaza la consulta a normativa oficial.

**Siguiente paso sugerido:**
Usalo para investigar avances recientes en tecnología logística o buscar normativa pública actualizada antes de redactar un documento.`,
    categoria: 'Herramientas',
    herramienta_mencionada: 'Perplexity',
  },
  prompt: {
    content: `**Un prompt** es la instrucción que le das a la IA para obtener una respuesta. Es el elemento más importante de toda interacción con IA.

**Cómo hacer un buen prompt:**
Un prompt efectivo incluye:
• **Rol**: "Actuá como asesor logístico militar..."
• **Objetivo**: qué querés obtener exactamente
• **Contexto**: información relevante para la tarea
• **Formato**: cómo debe presentarse la respuesta (lista, tabla, párrafo)
• **Tono**: formal, técnico, pedagógico
• **Restricciones**: qué no incluir

**Ejemplo aplicado:**
"Actuá como redactor administrativo militar. Redactá un memorando dirigido al Jefe de Logística informando que a partir del lunes se implementará el registro digital de vehículos. Tono formal, máximo 3 párrafos, mencioná que se adjunta el manual."

**Siguiente paso sugerido:**
Explorá la Biblioteca de Prompts para ver ejemplos validados para distintas tareas del servicio.`,
    categoria: 'Prompts',
    herramienta_mencionada: 'Ninguna',
  },
  gedo: {
    content: `**La IA puede ayudar a redactar, ordenar y mejorar un proyecto de texto para GEDO**, pero la responsabilidad del contenido final corresponde siempre al oficial que lo firma o eleva.

**Cómo usar IA para un GEDO:**
1. Describí el objeto del GEDO en el prompt.
2. Indicá el destinatario, la dependencia y el propósito.
3. Mencioná si hay anexos adjuntos.
4. Pedí tono formal e institucional.
5. Revisá el borrador generado.
6. Verificá normas y datos específicos.
7. Firmá solo lo que podés respaldar.

**Precaución:**
No incluyas información clasificada en el prompt. No copies el borrador sin revisarlo. El GEDO final es tu responsabilidad profesional.

**Siguiente paso sugerido:**
Visitá la Biblioteca de Prompts y buscá "Redacción de GEDO formal" para usar un prompt ya probado.`,
    categoria: 'Documentación',
    herramienta_mencionada: 'ChatGPT',
  },
  logistica: {
    content: `**La IA tiene múltiples aplicaciones en logística:**

**Análisis de planillas:**
Podés copiar datos de estados de abastecimiento y pedirle a la IA que detecte inconsistencias, valores atípicos, stock crítico y tendencias.

**Documentación:**
Redacción de informes de situación logística, procedimientos de mantenimiento, checklists de control.

**Planificación:**
Generación de cronogramas, matrices de priorización, análisis de recursos críticos.

**Automatización:**
Con n8n o Make, podés automatizar alertas de stock mínimo, envío de reportes periódicos y actualización de registros.

**Precaución:**
No cargues datos de abastecimiento clasificados sin autorización. Verificá siempre los cálculos críticos que genera la IA.

**Siguiente paso sugerido:**
Revisá los Casos de Uso para ver el ejemplo completo de "Análisis mensual de estados de abastecimiento".`,
    categoria: 'Logística',
    herramienta_mencionada: 'ChatGPT',
  },
  abastecimiento: {
    content: `**La IA puede asistir en el control y análisis de abastecimiento de forma significativa.**

**Aplicaciones concretas:**
• Detectar inconsistencias entre entradas y salidas.
• Identificar artículos con stock crítico (bajo el mínimo).
• Comparar estados de distintos períodos.
• Detectar artículos sin movimiento por períodos prolongados.
• Generar informes de auditoría preliminar.

**Cómo hacerlo:**
1. Copiá los datos del estado de abastecimiento en formato de tabla.
2. Usá el prompt de "Análisis de planilla logística" de la Biblioteca.
3. Revisá los hallazgos identificados.
4. Verificá cada hallazgo con los documentos originales.

**Precaución:**
No cargues información de stock clasificado. Los cálculos de la IA deben verificarse manualmente en ítems críticos.`,
    categoria: 'Logística',
    herramienta_mencionada: 'Claude',
  },
  planilla: {
    content: `**Para analizar una planilla con IA**, el proceso es sencillo:

1. **Abrí tu planilla** en Excel o Google Sheets.
2. **Seleccioná los datos** que querés analizar (sin información sensible).
3. **Copiá los datos** (Ctrl+C).
4. **Abrí el asistente de IA** (ChatGPT, Claude, etc.).
5. **Pegá los datos** y describí qué querés detectar.

**Prompt recomendado:**
"Analizá la siguiente tabla y detectá: (1) inconsistencias, (2) valores atípicos, (3) faltantes, (4) duplicaciones. Presentá los hallazgos en una tabla con columnas: Hallazgo | Evidencia | Recomendación. [PEGAR DATOS]"

**Limitaciones:**
La IA no puede abrir archivos de Excel directamente. Algunos modelos permiten adjuntar archivos en formato CSV.

**Siguiente paso sugerido:**
Probá con una planilla de datos no sensibles primero para familiarizarte con el proceso.`,
    categoria: 'Análisis',
    herramienta_mencionada: 'ChatGPT',
  },
  automatizacion: {
    content: `**La automatización** permite que las tareas repetitivas se ejecuten solas, sin intervención manual.

**Herramientas principales:**
• **n8n**: plataforma open source. Puede instalarse en servidores propios. Ideal para integraciones complejas.
• **Make**: interfaz visual más amigable. Plan gratuito disponible.
• **Zapier**: más sencillo, orientado a usuarios no técnicos.

**Ejemplos de automatizaciones posibles:**
• Cuando se llena un formulario → guardar en planilla → notificar al responsable.
• Cada lunes → generar reporte de novedades → enviarlo por email.
• Stock bajo el mínimo → alerta automática al responsable.

**Precaución:**
Una automatización mal configurada puede enviar mensajes erróneos. Siempre probá en un entorno controlado antes de activar.

**Siguiente paso sugerido:**
Revisá el Caso de Uso "Automatización de confirmaciones" para ver un ejemplo aplicado al servicio.`,
    categoria: 'Automatización',
    herramienta_mencionada: 'n8n',
  },
  n8n: {
    content: `**n8n** es una plataforma open source de automatización de flujos de trabajo.

**Características principales:**
• Interfaz visual tipo diagrama de flujo.
• Más de 400 integraciones disponibles.
• Puede instalarse en servidores propios (mayor control de datos).
• Plan gratuito en la nube disponible.
• Permite agregar código JavaScript para casos complejos.

**Aplicación al servicio:**
Automatizar el envío de partes diarios, conectar formularios con planillas de registro, generar alertas automáticas cuando se detectan novedades, crear flujos de aprobación de trámites.

**Precaución:**
Requiere configuración técnica. Una automatización mal configurada puede generar errores en cadena. Siempre probar antes de activar en producción.

**Siguiente paso sugerido:**
Explorá la documentación oficial de n8n para ver casos de uso similares al contexto del servicio.`,
    categoria: 'Automatización',
    herramienta_mencionada: 'n8n',
  },
  make: {
    content: `**Make** (anteriormente Integromat) es una plataforma de automatización visual con interfaz muy accesible.

**Características:**
• Interfaz gráfica tipo diagrama de flujo.
• Plan gratuito con 1.000 operaciones por mes.
• Más de 1.000 integraciones.
• Más amigable que n8n para usuarios sin experiencia técnica.

**Aplicación al servicio:**
Conectar un formulario de Google con una planilla de registro, enviar alertas automáticas por correo, generar reportes periódicos.

**Precaución:**
Los datos se procesan en servidores de Make (infraestructura externa). Verificar según el tipo de datos que maneja el flujo.

**Siguiente paso sugerido:**
Creá una cuenta gratuita en Make y explorá los templates disponibles para automatizaciones básicas.`,
    categoria: 'Automatización',
    herramienta_mencionada: 'Make',
  },
  seguridad: {
    content: `**El uso responsable de IA requiere criterio de seguridad permanente.**

**Principios fundamentales:**
• No cargar información clasificada, reservada o sensible.
• No subir documentos internos completos a plataformas externas.
• No incluir datos personales de terceros sin autorización.
• No compartir credenciales, contraseñas ni tokens.
• No usar respuestas de IA como fuente normativa sin verificar.
• Mantener siempre el criterio profesional.

**Semáforo de seguridad:**
🟢 **Verde**: ideas generales, borradores sin datos sensibles, consultas conceptuales.
🟡 **Amarillo**: documentos internos que requieren anonimización previa.
🔴 **Rojo**: información clasificada, datos personales, credenciales.

**Siguiente paso sugerido:**
Visitá la sección de Seguridad y Buenas Prácticas para consultar el semáforo completo y las guías de uso responsable.`,
    categoria: 'Seguridad',
    herramienta_mencionada: 'Ninguna',
  },
  'datos sensibles': {
    content: `**Información sensible y la IA: criterios fundamentales.**

**Nunca debe cargarse en IA pública:**
• Información clasificada o reservada.
• Datos personales: nombre completo, DNI, domicilio, datos médicos.
• Credenciales: contraseñas, tokens, claves de acceso.
• Información disciplinaria de personal.
• Datos operativos sensibles.

**Cómo trabajar con IA cuando hay datos sensibles:**
Anonimizá los datos antes de compartirlos. En lugar de nombres reales, usá roles: "el oficial de guardia", "el suboficial responsable". En lugar de cifras exactas clasificadas, usá rangos o ejemplos ficticios para el análisis conceptual.

**Fundamento:**
Los sistemas de IA públicos envían los datos a servidores externos. No existe garantía de confidencialidad equivalente a los estándares institucionales.

**Siguiente paso sugerido:**
Consultá la sección de Seguridad para ver el semáforo completo con ejemplos específicos.`,
    categoria: 'Seguridad',
    herramienta_mencionada: 'Ninguna',
  },
  supabase: {
    content: `**Supabase** es una plataforma open source que ofrece base de datos, autenticación y almacenamiento.

**Características:**
• Base de datos PostgreSQL.
• Autenticación de usuarios integrada.
• APIs automáticas sin código adicional.
• Puede instalarse en servidores propios (self-hosted).
• Plan gratuito generoso para proyectos pequeños.

**Aplicación al servicio:**
Backend de apps institucionales: registro de vehículos, parte diario digital, control de abastecimiento, gestión de usuarios con roles.

**Precaución:**
En el plan gratuito, los datos se almacenan en servidores de Supabase. Para mayor control, usar la versión self-hosted en infraestructura propia.

**Siguiente paso sugerido:**
Explorá el Laboratorio IA Palomar para ver proyectos que ya usan Supabase como base de datos.`,
    categoria: 'Herramientas',
    herramienta_mencionada: 'Supabase',
  },
  railway: {
    content: `**Railway** es una plataforma de despliegue de aplicaciones en la nube, simple y con plan gratuito.

**Características:**
• Despliegue de apps web, APIs y bases de datos.
• Conecta directamente con repositorios de GitHub.
• No requiere configuración de servidores complejos.
• Plan gratuito disponible.

**Aplicación al servicio:**
Publicar aplicaciones institucionales desarrolladas para el cuartel: app de parte diario, sistema de control de vehículos, plataforma de formación.

**Precaución:**
Los datos y código se almacenan en servidores de Railway. Revisar políticas según la sensibilidad de la información que maneja la app.

**Siguiente paso sugerido:**
Si tenés una app desarrollada localmente, Railway permite publicarla en minutos conectando el repositorio de GitHub.`,
    categoria: 'Herramientas',
    herramienta_mencionada: 'Railway',
  },
  vercel: {
    content: `**Vercel** es la plataforma líder en despliegue de aplicaciones web frontend.

**Características:**
• Especializada en React, Next.js y otros frameworks modernos.
• Despliegue automático desde GitHub: cada push publica la nueva versión.
• Plan gratuito muy generoso.
• Red de distribución global para alta velocidad.

**Aplicación al servicio:**
Esta misma plataforma IA Palomar puede desplegarse en Vercel. Cualquier app web institucional desarrollada en React puede publicarse en minutos.

**Precaución:**
El código debe estar en un repositorio de GitHub conectado. Los archivos estáticos se distribuyen en servidores de Vercel.

**Siguiente paso sugerido:**
Creá una cuenta en Vercel, conectá tu repositorio de GitHub y desplegá tu primera app en menos de 5 minutos.`,
    categoria: 'Herramientas',
    herramienta_mencionada: 'Vercel',
  },
  'claude code': {
    content: `**Claude Code** es una herramienta de Anthropic que funciona desde el terminal y permite desarrollar aplicaciones completas con asistencia de IA.

**Características:**
• Lee, escribe y ejecuta código en proyectos reales.
• Entiende el contexto completo del proyecto.
• Puede construir apps completas a partir de descripciones en lenguaje natural.
• Integrado con el terminal del desarrollador.

**Aplicación al servicio:**
Esta misma aplicación, IA Palomar, fue desarrollada con asistencia de Claude Code. Permite a oficiales con conocimientos técnicos básicos construir herramientas institucionales mucho más rápido.

**Precaución:**
Requiere entorno de desarrollo (Node.js, npm). El código generado debe revisarse antes de desplegarse en producción.

**Siguiente paso sugerido:**
Instalá Claude Code con el comando: npm install -g @anthropic-ai/claude-code. Luego ejecutá claude en tu directorio de proyecto.`,
    categoria: 'Desarrollo',
    herramienta_mencionada: 'Claude Code',
  },
  lovable: {
    content: `**Lovable** es una plataforma que genera aplicaciones web completas a partir de descripciones en lenguaje natural, sin necesidad de programar.

**Características:**
• Genera código React funcional desde una descripción.
• Despliega la app automáticamente.
• Permite modificaciones iterativas en lenguaje natural.
• Interfaz muy accesible para no programadores.

**Aplicación al servicio:**
Crear prototipos de apps institucionales (registro de novedades, control de materiales, formularios digitales) sin necesitar un equipo de desarrollo.

**Precaución:**
Las apps generadas pueden tener limitaciones técnicas. Para usos críticos o con información sensible, revisar el código generado antes del despliegue.

**Siguiente paso sugerido:**
Ingresá a lovable.dev, describí la app que necesitás y generá tu primer prototipo en minutos.`,
    categoria: 'Desarrollo',
    herramienta_mencionada: 'Lovable',
  },
  cursor: {
    content: `**Cursor** es un editor de código con IA integrada que permite programar con asistencia contextual en tiempo real.

**Características:**
• Entiende el contexto completo del proyecto.
• Sugiere código, explica errores y refactoriza.
• Compatible con múltiples lenguajes.
• Basado en VS Code, interfaz familiar.

**Aplicación al servicio:**
Para oficiales con conocimiento en programación, Cursor acelera significativamente el desarrollo de herramientas institucionales.

**Precaución:**
Requiere conocimiento previo de programación. La IA asiste, no reemplaza el juicio técnico del desarrollador.

**Siguiente paso sugerido:**
Descargá Cursor desde cursor.sh y abrí tu proyecto existente. La IA comenzará a asistirte automáticamente.`,
    categoria: 'Desarrollo',
    herramienta_mencionada: 'Cursor',
  },
  'inteligencia artificial': {
    content: `**La inteligencia artificial generativa** es el tipo de IA que podés usar hoy para asistirte en tareas del servicio.

**En términos simples:**
Es un sistema que aprendió patrones de enormes volúmenes de texto y puede generar contenido nuevo: redactar, resumir, analizar, explicar y razonar en lenguaje natural.

**No es ciencia ficción:**
ChatGPT, Claude y Gemini son herramientas disponibles hoy, sin costo en sus versiones básicas, que podés usar para mejorar tu trabajo inmediatamente.

**Principio fundamental:**
La IA no reemplaza el criterio profesional del oficial. Lo asiste, lo amplía y le permite trabajar con mayor velocidad, precisión y capacidad de análisis.

**Siguiente paso sugerido:**
Empezá por la sección "Aprender IA desde cero" para una introducción gradual y aplicada al contexto del servicio.`,
    categoria: 'Fundamentos',
    herramienta_mencionada: 'Ninguna',
  },
  agente: {
    content: `**Un agente de IA** es un sistema más autónomo que un asistente conversacional.

**Diferencia con un asistente:**
• Un asistente responde preguntas.
• Un agente puede ejecutar tareas en múltiples pasos, usar herramientas externas (navegar web, ejecutar código, escribir archivos) y tomar decisiones encadenadas.

**Ejemplo práctico:**
Un agente configurado para: (1) revisar el correo de novedades, (2) clasificar mensajes urgentes, (3) actualizar la planilla de seguimiento, (4) enviar un resumen diario. Todo de forma autónoma.

**Estado actual:**
Los agentes son la frontera más avanzada de la IA aplicada. Herramientas como Copilot Studio permiten configurar agentes sin programación.

**Precaución:**
Los agentes más autónomos requieren más supervisión y configuración cuidadosa. Una acción incorrecta puede tener consecuencias en múltiples sistemas.

**Siguiente paso sugerido:**
Revisá el Caso de Uso "Creación de asistentes internos con IA" para ver un ejemplo de agente aplicado al cuartel.`,
    categoria: 'Fundamentos',
    herramienta_mencionada: 'Copilot Studio',
  },
  app: {
    content: `**Para crear una aplicación con asistencia de IA**, tenés varias opciones según tu nivel técnico:

**Sin programación:**
• **AppSheet**: apps desde planillas de Google. Ideal para checklists y registros.
• **Lovable**: describís la app en lenguaje natural y la genera automáticamente.

**Con asistencia de IA:**
• **Cursor**: editor de código con IA integrada para programadores.
• **Claude Code**: desarrollo completo desde el terminal con IA.

**Proceso general:**
1. Definí claramente qué debe hacer la app.
2. Identificá quiénes la van a usar y cómo.
3. Elegí la herramienta según tu nivel técnico.
4. Generá el prototipo.
5. Probá con usuarios reales.
6. Iterá y mejorá.

**Siguiente paso sugerido:**
Visitá el Laboratorio IA Palomar para ver proyectos de apps que ya están en desarrollo o funcionando en el cuartel.`,
    categoria: 'Desarrollo',
    herramienta_mencionada: 'AppSheet',
  },
};

const defaultResponse: AIResponse = {
  content: `Puedo ayudarte a entender herramientas de inteligencia artificial, formular prompts, aplicar IA a tareas administrativas, logísticas, documentales o de instrucción, y revisar buenas prácticas de seguridad.

**Para obtener una respuesta más precisa, podés preguntarme sobre:**
• Herramientas específicas: ChatGPT, Claude, Copilot, Gemini, n8n, AppSheet...
• Tareas concretas: redactar un GEDO, analizar una planilla, preparar una clase...
• Conceptos: qué es un prompt, qué es automatización, qué es un agente...
• Seguridad: qué información no cargar, cómo verificar respuestas...

Reformulá tu consulta indicando qué querés hacer, con qué herramienta o sobre qué proceso del servicio necesitás orientación.`,
  categoria: 'General',
  herramienta_mencionada: 'Ninguna',
};

function detectKeyword(text: string): AIResponse {
  const lower = text.toLowerCase();

  const keywords = [
    ['claude code', 'claude code'],
    ['datos sensibles', 'datos sensibles'],
    ['inteligencia artificial', 'inteligencia artificial'],
    ['chatgpt', 'chatgpt'],
    ['claude', 'claude'],
    ['copilot', 'copilot'],
    ['gemini', 'gemini'],
    ['perplexity', 'perplexity'],
    ['gedo', 'gedo'],
    ['logística', 'logistica'],
    ['logistica', 'logistica'],
    ['abastecimiento', 'abastecimiento'],
    ['planilla', 'planilla'],
    ['automatización', 'automatizacion'],
    ['automatizacion', 'automatizacion'],
    ['n8n', 'n8n'],
    ['make', 'make'],
    ['seguridad', 'seguridad'],
    ['supabase', 'supabase'],
    ['railway', 'railway'],
    ['vercel', 'vercel'],
    ['lovable', 'lovable'],
    ['cursor', 'cursor'],
    ['agente', 'agente'],
    ['prompt', 'prompt'],
    ['app', 'app'],
  ] as const;

  for (const [keyword, key] of keywords) {
    if (lower.includes(keyword)) {
      return knowledgeBase[key] ?? defaultResponse;
    }
  }

  return defaultResponse;
}

export function generateMockResponse(userMessage: string): Promise<AIResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = detectKeyword(userMessage);
      resolve(response);
    }, 800 + Math.random() * 700);
  });
}

export function createMessage(role: 'user' | 'assistant', content: string, categoria?: string): ChatMessage {
  return {
    id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    role,
    content,
    timestamp: new Date().toISOString(),
    categoria,
  };
}

export const suggestedQuestions = [
  '¿Qué es la inteligencia artificial generativa?',
  '¿Qué diferencia hay entre ChatGPT y Claude?',
  '¿Para qué sirve Microsoft Copilot?',
  '¿Qué herramienta conviene usar para redactar un GEDO?',
  '¿Cómo hago un buen prompt?',
  '¿Puedo subir documentos militares a una IA pública?',
  '¿Cómo uso IA para analizar una planilla?',
  '¿Qué es n8n y para qué sirve?',
  '¿Qué es Claude Code?',
  '¿Qué riesgos tiene usar IA en el servicio?',
];
