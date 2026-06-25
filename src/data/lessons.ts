import type { Lesson } from '../types';

export const lessons: Lesson[] = [
  {
    id: 'l01',
    titulo: '¿Qué es la inteligencia artificial generativa?',
    descripcion: 'Comprendé el concepto central de la IA actual y cómo funciona en términos prácticos.',
    contenido: `La inteligencia artificial generativa es un conjunto de sistemas informáticos capaces de producir contenido nuevo: texto, imágenes, código, resúmenes, traducciones y más. A diferencia de los programas tradicionales que siguen instrucciones fijas, estos sistemas aprenden patrones a partir de enormes volúmenes de datos y generan respuestas coherentes ante preguntas o tareas nuevas.

Los modelos más conocidos son ChatGPT (OpenAI), Claude (Anthropic) y Gemini (Google). Todos ellos son asistentes conversacionales que pueden entender texto en lenguaje natural y responder de forma contextual.

La IA generativa no piensa, no siente ni decide. Predice qué texto es más probable dado un contexto. Esa capacidad predictiva resulta extremadamente útil para redactar, analizar, resumir, comparar, estructurar y mejorar información.`,
    nivel: 'inicial',
    duracion_minutos: 10,
    categoria: 'Fundamentos',
    ejemplo_aplicado: `Un oficial necesita redactar una nota de servicio explicando la implementación de un nuevo procedimiento. En lugar de escribir desde cero, le indica a la IA: "Redactá una nota formal explicando que a partir del lunes se implementará un registro digital de vehículos. Incluí el propósito, el procedimiento y el responsable." La IA genera un borrador que el oficial revisa, ajusta y firma.`,
    pregunta_control: '¿Cuál de estas afirmaciones sobre la IA generativa es correcta? A) Toma decisiones autónomas. B) Predice texto a partir de patrones aprendidos. C) Accede a sistemas internos sin permiso. D) Reemplaza el criterio profesional.',
    activa: true,
    orden: 1,
  },
  {
    id: 'l02',
    titulo: 'Qué es un modelo de lenguaje',
    descripcion: 'Entendé cómo funcionan los LLM (Large Language Models) detrás de las herramientas de IA.',
    contenido: `Un modelo de lenguaje (LLM, por sus siglas en inglés) es un sistema entrenado con miles de millones de palabras en decenas de idiomas. Durante ese entrenamiento aprendió gramática, hechos, razonamientos, formatos de documentos, código de programación y estilos de escritura.

Cuando le hacés una pregunta, el modelo analiza el contexto y genera una respuesta palabra por palabra, eligiendo en cada paso la continuación más probable. Esto explica por qué puede equivocarse: elige lo que parece correcto según sus patrones, no lo que es verificadamente verdadero.

Los modelos se diferencian por: su tamaño (parámetros), la calidad del entrenamiento, la fecha de corte del conocimiento y las instrucciones especiales que reciben (system prompts). GPT-4, Claude 3 y Gemini Ultra son ejemplos de modelos grandes y capaces.`,
    nivel: 'inicial',
    duracion_minutos: 10,
    categoria: 'Fundamentos',
    ejemplo_aplicado: `Un modelo entrenado con textos militares, normas, reglamentos y documentación administrativa puede generar borradores de GEDOs más precisos que un modelo genérico. Por eso, en el futuro, un modelo ajustado al contexto del Cuartel podría ser más útil que los modelos públicos generales.`,
    pregunta_control: '¿Por qué un modelo de lenguaje puede equivocarse? A) Porque no tiene acceso a internet. B) Porque elige lo que parece probable, no lo verificadamente verdadero. C) Porque fue programado para mentir. D) Porque no entiende español.',
    activa: true,
    orden: 2,
  },
  {
    id: 'l03',
    titulo: 'Qué es un prompt',
    descripcion: 'Aprendé a formular instrucciones claras para obtener respuestas útiles de la IA.',
    contenido: `Un prompt es la instrucción que el usuario le da a la IA para obtener una respuesta. Es el punto de partida de toda interacción. Cuanto más claro, completo y estructurado sea el prompt, mejor será el resultado.

Un buen prompt incluye:
• Rol: qué papel debe asumir la IA ("Actuá como...").
• Objetivo: qué resultado se espera obtener.
• Contexto: información relevante para entender la tarea.
• Formato: cómo debe presentarse la respuesta (lista, tabla, párrafo, etc.).
• Tono: formal, técnico, pedagógico, etc.
• Restricciones: qué no incluir o qué evitar.

Prompts vagos generan respuestas vagas. Prompts precisos generan respuestas útiles.`,
    nivel: 'inicial',
    duracion_minutos: 15,
    categoria: 'Prompts',
    ejemplo_aplicado: `Prompt vago: "Escribí algo sobre logística."
Resultado: texto genérico de poca utilidad.

Prompt preciso: "Actuá como asesor logístico militar. Redactá un procedimiento de cinco pasos para el control diario de vehículos de una unidad. El formato debe ser numerado, con encabezados claros, tono formal y orientado a suboficiales con responsabilidad de guardia."
Resultado: procedimiento estructurado, aplicable y listo para revisar.`,
    pregunta_control: '¿Qué elementos debería incluir un buen prompt? A) Solo el tema. B) Rol, objetivo, contexto, formato, tono y restricciones. C) Una pregunta breve. D) El nombre de la herramienta a usar.',
    activa: true,
    orden: 3,
  },
  {
    id: 'l04',
    titulo: 'Diferencia entre buscador, chatbot, asistente y agente',
    descripcion: 'Distinguí los distintos tipos de herramientas de IA para elegir la adecuada.',
    contenido: `• Buscador (Google, Bing): indexa páginas web y devuelve enlaces. No genera contenido nuevo. Busca lo que ya existe.

• Chatbot clásico: responde preguntas predefinidas según árboles de decisión. Sin IA generativa. Respuestas limitadas.

• Asistente de IA generativa (ChatGPT, Claude, Gemini): entiende lenguaje natural, genera respuestas originales, puede analizar, redactar, resumir y razonar. No accede a internet por defecto salvo que tenga esa función habilitada.

• Agente de IA: sistema que puede ejecutar tareas en varios pasos, usar herramientas externas (como navegar la web, ejecutar código, escribir archivos) y tomar decisiones en cadena. Más autónomo y complejo.

La mayoría de las herramientas que usarás en el servicio son asistentes. Los agentes son el siguiente nivel de automatización.`,
    nivel: 'inicial',
    duracion_minutos: 12,
    categoria: 'Fundamentos',
    ejemplo_aplicado: `Si necesitás encontrar una norma pública, usás un buscador. Si necesitás redactar un resumen de esa norma, usás un asistente de IA. Si necesitás que la IA busque, resuma, compare y envíe un informe automáticamente, necesitás un agente.`,
    pregunta_control: '¿Qué diferencia principal tiene un agente respecto a un asistente? A) El agente es más barato. B) El agente puede ejecutar tareas en múltiples pasos y usar herramientas externas. C) El agente no usa IA. D) El agente solo funciona en inglés.',
    activa: true,
    orden: 4,
  },
  {
    id: 'l05',
    titulo: 'Qué puede hacer y qué no puede hacer la IA',
    descripcion: 'Establecé expectativas realistas sobre las capacidades y límites de la IA generativa.',
    contenido: `La IA generativa puede:
✓ Redactar, resumir, corregir y mejorar textos.
✓ Explicar conceptos complejos en términos simples.
✓ Estructurar documentos, proyectos e informes.
✓ Analizar datos copiados (planillas, estadísticas).
✓ Generar ideas, opciones y alternativas.
✓ Traducir y reformular.
✓ Asistir en la preparación de clases y presentaciones.
✓ Revisar borradores y detectar inconsistencias de texto.
✓ Generar código de programación básico.

La IA no puede:
✗ Verificar información en tiempo real (salvo herramientas con acceso a web).
✗ Acceder a sistemas internos del cuartel.
✗ Garantizar que la información es correcta.
✗ Tomar decisiones ni asumir responsabilidades.
✗ Reemplazar el criterio profesional del oficial.
✗ Procesar información clasificada sin autorización.`,
    nivel: 'inicial',
    duracion_minutos: 10,
    categoria: 'Fundamentos',
    ejemplo_aplicado: `La IA puede redactar un borrador de parte de novedades basado en datos que vos le proporcionás. No puede acceder al sistema de novedades del cuartel para extraer esos datos por sí misma. Vos aportás la información, la IA la organiza y mejora.`,
    pregunta_control: '¿Cuál de estas tareas NO puede hacer la IA generativa por defecto? A) Resumir un documento. B) Acceder automáticamente a sistemas internos del cuartel. C) Redactar un informe. D) Explicar un concepto.',
    activa: true,
    orden: 5,
  },
  {
    id: 'l06',
    titulo: 'Por qué la IA puede equivocarse',
    descripcion: 'Comprendé el fenómeno de la alucinación y cómo detectar errores en las respuestas.',
    contenido: `La IA puede equivocarse por varias razones:

1. Alucinación (hallucination): el modelo genera información que parece correcta pero es falsa. Puede inventar nombres, fechas, normas, cifras o referencias que no existen.

2. Corte de conocimiento: los modelos tienen una fecha límite de entrenamiento. No conocen eventos recientes.

3. Falta de contexto: si no le proporcionás información suficiente, la IA rellena huecos con suposiciones.

4. Ambigüedad del prompt: si la instrucción es vaga, la respuesta puede desviarse.

5. Sesgo del entrenamiento: los modelos pueden reflejar sesgos del texto con que fueron entrenados.

Señales de alerta:
• Fechas o normas muy específicas sin fuente verificable.
• Nombres de personas o unidades que no reconocés.
• Cifras exactas sin referencia.
• Respuestas demasiado seguras sobre temas complejos.`,
    nivel: 'inicial',
    duracion_minutos: 12,
    categoria: 'Buenas prácticas',
    ejemplo_aplicado: `Un oficial le pregunta a la IA "¿Cuál es el artículo de la reglamentación que establece el procedimiento X?" La IA puede responder con un número de artículo inventado que parece real. Siempre verificá normas, artículos y fechas en las fuentes oficiales.`,
    pregunta_control: '¿Qué es una "alucinación" en el contexto de la IA? A) Un error de internet. B) Información falsa que la IA genera con apariencia de ser verdadera. C) Un mensaje de error del sistema. D) Una respuesta en otro idioma.',
    activa: true,
    orden: 6,
  },
  {
    id: 'l07',
    titulo: 'Cómo verificar una respuesta de IA',
    descripcion: 'Aprendé a validar la información generada por IA antes de usarla en el servicio.',
    contenido: `Toda respuesta de IA debe ser revisada antes de usarse en un documento oficial o decisión de servicio. El proceso de verificación tiene pasos simples:

1. Leé completo: revisá coherencia interna del texto.
2. Identificá afirmaciones específicas: fechas, normas, cifras, nombres.
3. Verificá en fuentes primarias: reglamentación, normativa vigente, sistemas oficiales.
4. Consultá a un experto si corresponde.
5. Ajustá el borrador con tus propios conocimientos y criterio.
6. Firmá solo lo que puedas respaldar.

Regla fundamental: Si no podés verificar una afirmación de la IA, no la incluyas en un documento oficial.`,
    nivel: 'inicial',
    duracion_minutos: 10,
    categoria: 'Buenas prácticas',
    ejemplo_aplicado: `La IA redacta un procedimiento y menciona que "según la Disposición N° 1234/2021...". Antes de incorporarlo al GEDO, verificás en el sistema normativo si esa disposición existe y si el artículo mencionado dice lo que la IA indicó.`,
    pregunta_control: '¿Qué hacer si la IA menciona una norma específica en su respuesta? A) Incluirla directamente en el documento. B) Buscarla en fuentes normativas oficiales para verificar que existe y es correcta. C) Descartarla. D) Preguntar a otro modelo de IA.',
    activa: true,
    orden: 7,
  },
  {
    id: 'l08',
    titulo: 'Cómo usar IA para redactar documentos',
    descripcion: 'Técnicas prácticas para producir documentación administrativa con asistencia de IA.',
    contenido: `La IA es especialmente útil para la etapa de redacción y revisión de documentos. El proceso recomendado es:

1. Definí el objetivo del documento.
2. Recopilá la información necesaria (sin datos sensibles).
3. Construí un prompt preciso con: tipo de documento, destinatario, asunto, datos disponibles, tono y extensión.
4. Revisá el borrador generado.
5. Corregí, ajustá y completá con tu criterio.
6. Verificá normas y fechas mencionadas.
7. Firmá y elevá el documento final.

Documentos en los que la IA puede asistir:
• Borradores de GEDO.
• Notas de servicio.
• Memorandos.
• Informes de situación.
• Actas de reunión.
• Fundamentos de proyectos.
• Procedimientos internos.`,
    nivel: 'intermedio',
    duracion_minutos: 15,
    categoria: 'Aplicaciones',
    ejemplo_aplicado: `Prompt: "Actuá como redactor administrativo militar. Redactá un memorando dirigido al Jefe de Logística informando que a partir del 1° de julio se implementará el registro digital de movimientos de vehículos. Mencioná que el sistema fue probado durante 30 días, que se adjunta un manual de uso y que el responsable de capacitación será el Teniente García. Tono formal, extensión máxima 3 párrafos."`,
    pregunta_control: '¿Cuál es el paso más importante antes de usar un borrador generado por IA en un documento oficial? A) Copiarlo directamente. B) Enviarlo al superior para que lo revise sin leerlo. C) Revisarlo, verificar afirmaciones específicas y ajustar con criterio propio. D) Traducirlo al inglés.',
    activa: true,
    orden: 8,
  },
  {
    id: 'l09',
    titulo: 'Cómo usar IA para analizar datos',
    descripcion: 'Aplicá IA para detectar inconsistencias, tendencias y anomalías en planillas.',
    contenido: `La IA puede analizar datos cuando le proporcionás la información en formato de texto o tabla. No accede a archivos de Excel directamente (salvo herramientas con esa integración), pero puede procesar datos copiados y pegados.

Usos frecuentes:
• Detectar inconsistencias en planillas de abastecimiento.
• Comparar períodos mensuales.
• Identificar valores atípicos.
• Calcular totales, promedios y variaciones.
• Generar tablas resumen.
• Redactar informes a partir de datos numéricos.

Limitaciones:
• La IA no puede acceder a archivos en tu computadora directamente.
• Los cálculos complejos pueden contener errores.
• No procesa imágenes de planillas (salvo modelos con visión habilitada).
• Verificá siempre los cálculos críticos.`,
    nivel: 'intermedio',
    duracion_minutos: 15,
    categoria: 'Aplicaciones',
    ejemplo_aplicado: `Copiás los datos de una planilla mensual de abastecimiento y se los pegás a la IA con la instrucción: "Analizá esta tabla y detectá inconsistencias, valores inusuales, faltantes o movimientos que requieran revisión. Presentá el resultado en una tabla con columnas: ítem, observación y recomendación."`,
    pregunta_control: '¿Cómo podés compartir datos de una planilla con una IA generativa? A) La IA accede directamente a Excel. B) Copiando y pegando los datos en el chat. C) Enviando el archivo por correo a la IA. D) La IA no puede procesar datos.',
    activa: true,
    orden: 9,
  },
  {
    id: 'l10',
    titulo: 'Cómo usar IA para preparar una clase',
    descripcion: 'Diseñá clases y capacitaciones más efectivas con el apoyo de herramientas de IA.',
    contenido: `La IA puede asistir en todas las etapas de preparación de una clase:

1. Diseño curricular: estructura temática, objetivos de aprendizaje.
2. Contenido: explicaciones, ejemplos, analogías, casos.
3. Materiales: resúmenes, fichas, actividades prácticas.
4. Evaluación: preguntas de control, escenarios de aplicación.
5. Presentación: esquemas para diapositivas, guiones de exposición.

La IA no reemplaza al instructor: el conocimiento específico, la adaptación al grupo y la experiencia del instructor siguen siendo irreemplazables. La IA reduce el tiempo de producción de materiales.`,
    nivel: 'intermedio',
    duracion_minutos: 12,
    categoria: 'Aplicaciones',
    ejemplo_aplicado: `Prompt: "Actuá como instructor militar. Diseñá una clase de 45 minutos sobre el uso responsable de herramientas de IA para oficiales. Incluí: objetivo de la clase, tres bloques temáticos con duración, un ejemplo aplicado al servicio, una actividad práctica grupal y tres preguntas de cierre. Tono formal y pedagógico."`,
    pregunta_control: '¿En cuál de estos aspectos puede asistirte la IA al preparar una clase? A) Reemplazar al instructor completamente. B) Diseñar la estructura, generar contenido, crear materiales y proponer actividades. C) Calificar automáticamente a los alumnos. D) Ninguna de las anteriores.',
    activa: true,
    orden: 10,
  },
  {
    id: 'l11',
    titulo: 'Cómo usar IA para crear una aplicación',
    descripcion: 'Explorá herramientas de IA que permiten crear apps sin necesidad de programar.',
    contenido: `Existen herramientas que permiten crear aplicaciones web con muy poco o ningún código:

• AppSheet (Google): crea apps a partir de hojas de cálculo. Ideal para checklists, inventarios y registros.
• Lovable: plataforma que genera apps completas a partir de descripciones en lenguaje natural.
• Cursor: editor de código que usa IA para programar con mayor velocidad.
• Claude Code: herramienta de Anthropic para desarrollar aplicaciones completas con asistencia de IA en el terminal.
• n8n / Make: automatización visual de flujos sin código.

El concepto clave es "vibe coding": describís en lenguaje natural qué querés que haga la aplicación, y la IA genera el código o la app directamente.`,
    nivel: 'avanzado',
    duracion_minutos: 20,
    categoria: 'Desarrollo',
    ejemplo_aplicado: `Con AppSheet y una hoja de Google Sheets, un oficial puede crear en horas una app de parte diario que registre novedades, muestre resúmenes y genere alertas automáticas sin escribir una línea de código.`,
    pregunta_control: '¿Qué es "vibe coding"? A) Un lenguaje de programación. B) La técnica de describir en lenguaje natural qué querés que haga una app y que la IA genere el código. C) Un tipo de base de datos. D) Una forma de hackear sistemas.',
    activa: true,
    orden: 11,
  },
  {
    id: 'l12',
    titulo: 'Cómo usar IA en logística',
    descripcion: 'Casos prácticos de aplicación de IA en procesos logísticos y de abastecimiento.',
    contenido: `La logística militar involucra planificación, control, registro, análisis y reporte de recursos. La IA puede asistir en todas esas etapas:

Planificación:
• Generar cronogramas de mantenimiento.
• Estructurar matrices de priorización.
• Redactar procedimientos operativos.

Control y análisis:
• Detectar inconsistencias en estados de abastecimiento.
• Comparar períodos y detectar tendencias.
• Identificar artículos críticos.

Documentación:
• Redactar informes de situación logística.
• Estructurar actas de recepción de materiales.
• Generar checklists digitales.

Automatización:
• Crear flujos automáticos de alerta.
• Conectar planillas con apps de registro.
• Generar reportes automáticos en fechas definidas.`,
    nivel: 'intermedio',
    duracion_minutos: 15,
    categoria: 'Aplicaciones',
    ejemplo_aplicado: `El responsable de abastecimiento copia los datos del estado mensual en un asistente de IA e indica: "Comparás este estado con el del mes anterior. Identificá artículos con movimiento inusual, stock crítico o diferencias inexplicadas. Presentá un informe ejecutivo de una página."`,
    pregunta_control: '¿En cuál de estas tareas logísticas NO es útil la IA? A) Detectar inconsistencias en planillas. B) Redactar informes de situación. C) Aprobar automáticamente compras de emergencia. D) Generar checklists digitales.',
    activa: true,
    orden: 12,
  },
  {
    id: 'l13',
    titulo: 'Automatizaciones: qué son y para qué sirven',
    descripcion: 'Entendé cómo automatizar tareas repetitivas usando herramientas como n8n y Make.',
    contenido: `Una automatización es un flujo de trabajo programado que ejecuta tareas sin intervención manual. Las herramientas de automatización conectan distintos sistemas y hacen que información fluya entre ellos de forma automática.

Herramientas principales:
• n8n: plataforma open source de automatización visual. Puede correr en servidores propios.
• Make (ex Integromat): similar a n8n, con interfaz muy visual.
• Zapier: más sencillo, orientado a usuarios sin experiencia técnica.

Ejemplos de automatizaciones posibles:
• Cuando se llena un formulario, enviar un correo al responsable.
• Cuando una planilla se actualiza, generar un resumen automático.
• Cuando un vehículo registra una salida, actualizar el control de flota.
• Cada semana, generar un reporte de actividad y enviarlo por mail.`,
    nivel: 'intermedio',
    duracion_minutos: 15,
    categoria: 'Automatización',
    ejemplo_aplicado: `Un oficial configura un flujo en n8n: cada vez que un suboficial completa un checklist digital de vehículos, el sistema registra los datos en una hoja de cálculo, actualiza un dashboard y envía un aviso al responsable si se detecta alguna anomalía.`,
    pregunta_control: '¿Qué herramienta está diseñada para automatización visual sin código? A) Supabase. B) n8n. C) GitHub. D) Visual Studio Code.',
    activa: true,
    orden: 13,
  },
  {
    id: 'l14',
    titulo: 'Seguridad de la información',
    descripcion: 'Principios fundamentales para el uso seguro de IA en el ámbito institucional.',
    contenido: `El uso de IA en entornos institucionales requiere especial cuidado con la información que se comparte. Los modelos de IA públicos envían los datos ingresados a servidores externos.

Principios básicos:
1. No cargar información clasificada, reservada o sensible.
2. No subir documentos internos completos sin autorización.
3. No incluir datos personales (nombre, DNI, domicilio) de terceros.
4. No compartir credenciales, contraseñas ni tokens de acceso.
5. No usar respuestas de IA como fuente normativa sin verificar.
6. Mantener el criterio profesional sobre las respuestas generadas.
7. Registrar el uso cuando la normativa institucional lo requiera.

Información que SÍ puede compartirse:
• Ideas generales y conceptos.
• Datos ficticios o anonimizados.
• Borradores sin información sensible.
• Textos públicos o normativos.`,
    nivel: 'inicial',
    duracion_minutos: 10,
    categoria: 'Seguridad',
    ejemplo_aplicado: `En lugar de pegar el legajo completo de un suboficial para que la IA redacte un informe, el oficial describe la situación en términos genéricos: "Redactá un informe para un personal con 15 años de servicio, sin sanciones, con alta calificación en los últimos tres años, que solicita..."`,
    pregunta_control: '¿Qué tipo de información NO debe cargarse en una IA pública? A) Conceptos generales. B) Borradores sin datos sensibles. C) Información clasificada o personal de terceros. D) Preguntas conceptuales.',
    activa: true,
    orden: 14,
  },
  {
    id: 'l15',
    titulo: 'Buenas prácticas para oficiales',
    descripcion: 'Guía práctica para un uso profesional, responsable y efectivo de la IA.',
    contenido: `Diez buenas prácticas para el oficial que usa IA:

1. Revisá siempre: nunca usés una respuesta sin leer.
2. Verificá lo específico: fechas, normas, cifras, nombres.
3. Firmar es responsabilidad tuya: la IA no firma, vos sí.
4. Usá la IA para producir más, no para pensar menos.
5. Protegé la información: anonimizá cuando sea necesario.
6. Iterá los prompts: si el resultado no es bueno, mejorá la instrucción.
7. Aprendé el vocabulario: entender la herramienta mejora los resultados.
8. Compartí lo que funciona: los buenos prompts son un activo institucional.
9. Reportá errores: si la IA genera algo incorrecto, no lo uses ni lo difundas.
10. Mantené el criterio: la IA asiste, no decide.`,
    nivel: 'inicial',
    duracion_minutos: 8,
    categoria: 'Buenas prácticas',
    ejemplo_aplicado: `El oficial usa la IA para generar tres opciones de estructura para un proyecto. Evalúa las opciones con su criterio, elige la más adecuada, la desarrolla con su conocimiento específico y presenta el proyecto con su firma. La IA aportó velocidad; el oficial aportó criterio.`,
    pregunta_control: '¿Cuál es la responsabilidad del oficial respecto al documento generado con asistencia de IA? A) Ninguna, la IA es responsable. B) Parcial, depende de cuánto cambió el texto. C) Completa, el oficial que firma asume plena responsabilidad. D) La responsabilidad es del proveedor de IA.',
    activa: true,
    orden: 15,
  },
];
