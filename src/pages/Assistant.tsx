import { useState, useRef, useEffect } from 'react';
import { Send, Trash2, Bot, User, MessageSquare, Tag } from 'lucide-react';
import type { ChatMessage } from '../types';
import { generateMockResponse, createMessage, suggestedQuestions } from '../services/aiAssistantService';

function formatContent(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '</p><p class="mb-2">')
    .replace(/\n/g, '<br/>')
    .replace(/^/, '<p class="mb-2">')
    .replace(/$/, '</p>');
}

export default function Assistant() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    createMessage(
      'assistant',
      `Bienvenido al **Asistente IA Palomar**. Estoy aquí para orientarte sobre herramientas de inteligencia artificial, ayudarte a formular prompts efectivos y responder consultas sobre aplicación de IA en tareas del servicio.

Podés preguntarme sobre ChatGPT, Claude, Microsoft Copilot, n8n, AppSheet, automatizaciones, redacción de GEDOs, análisis de planillas, seguridad de la información y más.

¿En qué puedo asistirte hoy?`,
      'Bienvenida',
    ),
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText || isLoading) return;

    const userMessage = createMessage('user', messageText);
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await generateMockResponse(messageText);
      const assistantMessage = createMessage('assistant', response.content, response.categoria);
      setMessages((prev) => [...prev, assistantMessage]);

      const consultations = JSON.parse(localStorage.getItem('ia_palomar_consultations') || '[]');
      consultations.unshift({
        id: `c_${Date.now()}`,
        usuario: 'Oficial',
        pregunta: messageText,
        respuesta: response.content.substring(0, 200) + '...',
        categoria: response.categoria,
        herramienta_mencionada: response.herramienta_mencionada,
        calificacion: 0,
        fecha: new Date().toISOString(),
      });
      localStorage.setItem('ia_palomar_consultations', JSON.stringify(consultations.slice(0, 50)));
    } catch {
      setMessages((prev) => [
        ...prev,
        createMessage('assistant', 'Ocurrió un error al procesar la consulta. Por favor, intentá nuevamente.'),
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClear = () => {
    setMessages([
      createMessage('assistant', 'Conversación iniciada. ¿En qué puedo asistirte?', 'General'),
    ]);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="border-b border-gray-200 bg-white px-6 py-4 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-green-800 flex items-center justify-center">
              <Bot size={18} className="text-white" />
            </div>
            <div>
              <div className="font-semibold text-gray-900 text-sm">Asistente IA Palomar</div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Activo — Modo orientación y formación
              </div>
            </div>
          </div>
          <button
            onClick={handleClear}
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Trash2 size={14} />
            Limpiar
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                ${message.role === 'user' ? 'bg-slate-700' : 'bg-green-800'}`}
            >
              {message.role === 'user'
                ? <User size={14} className="text-white" />
                : <Bot size={14} className="text-white" />}
            </div>
            <div className={`max-w-2xl ${message.role === 'user' ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
              {message.categoria && message.role === 'assistant' && (
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <Tag size={11} />
                  {message.categoria}
                </div>
              )}
              <div
                className={`px-4 py-3 rounded-2xl text-sm leading-relaxed
                  ${message.role === 'user'
                    ? 'bg-green-800 text-white rounded-tr-sm'
                    : 'bg-white border border-gray-200 text-gray-800 rounded-tl-sm shadow-sm'
                  }`}
              >
                {message.role === 'assistant' ? (
                  <div
                    dangerouslySetInnerHTML={{ __html: formatContent(message.content) }}
                    className="prose prose-sm max-w-none"
                  />
                ) : (
                  message.content
                )}
              </div>
              <div className="text-xs text-gray-400 px-1">
                {new Date(message.timestamp).toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-green-800 flex items-center justify-center flex-shrink-0">
              <Bot size={14} className="text-white" />
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-sm px-4 py-3">
              <div className="flex gap-1 items-center h-5">
                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {messages.length <= 1 && (
        <div className="px-6 pb-2">
          <p className="text-xs text-gray-400 mb-2 flex items-center gap-1">
            <MessageSquare size={12} />
            Preguntas sugeridas:
          </p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((q) => (
              <button
                key={q}
                onClick={() => handleSend(q)}
                className="text-xs px-3 py-1.5 bg-white border border-gray-300 rounded-full hover:bg-gray-50 hover:border-green-400 transition-colors text-gray-600"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="px-6 py-4 border-t border-gray-200 bg-white flex-shrink-0">
        <div className="flex gap-3 items-end">
          <div className="flex-1 relative">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escribí tu consulta aquí... (Enter para enviar, Shift+Enter para nueva línea)"
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent min-h-[52px] max-h-32"
              rows={1}
              disabled={isLoading}
            />
          </div>
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || isLoading}
            className="w-11 h-11 rounded-xl bg-green-800 hover:bg-green-900 disabled:bg-gray-200 text-white flex items-center justify-center transition-colors flex-shrink-0"
          >
            <Send size={16} />
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          No cargues información clasificada, reservada o datos personales de terceros.
        </p>
      </div>
    </div>
  );
}
