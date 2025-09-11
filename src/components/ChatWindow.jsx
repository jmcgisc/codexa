"use client";
import { useState, useEffect, useRef } from "react";

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "¡Hola! Soy Evelyn, tu asistente virtual de Stratik. 🚀 Cuéntame tu consulta y te conectaré con el área adecuada.",
      agent: "Evelyn",
      color: "bg-gradient-to-r from-purple-500 to-indigo-600",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMessage = {
        sender: "bot",
        text: data.response,
        agent: data.agent || "Evelyn",
        color: data.color || "bg-gradient-to-r from-purple-500 to-indigo-600",
      };

      // Simular tiempo de escritura para mejor UX
      setTimeout(() => {
        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
      }, 1000);
    } catch (err) {
      console.error("Error enviando mensaje:", err);
      setIsTyping(false);
    }
  };

  // Mapeo de colores para los badges de agentes
  const agentColorMap = {
    Evelyn: "bg-gradient-to-r from-purple-500 to-indigo-600",
    Soporte: "bg-gradient-to-r from-blue-500 to-cyan-600",
    Ventas: "bg-gradient-to-r from-green-500 to-emerald-600",
    Técnico: "bg-gradient-to-r from-orange-500 to-amber-600",
    Default: "bg-gradient-to-r from-gray-500 to-gray-600",
  };

  return (
    <div className="flex flex-col h-[400px] w-80 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
      {/* Header con gradiente */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 p-3 text-white">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-400 rounded-full border border-white"></div>
          </div>
          <div>
            <h2 className="font-bold text-sm">Hola! Soy Evelyn</h2>
            <p className="text-xs text-white/80">Stratik Support</p>
          </div>
        </div>
      </div>

      {/* Mensajes */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gradient-to-b from-gray-50 to-gray-100">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex flex-col ${
              msg.sender === "user" ? "items-end" : "items-start"
            }`}
          >
            {/* Badge de agente */}
            {msg.sender === "bot" && (
              <div className="flex items-center mb-1 ml-1">
                <span
                  className={`text-xs px-2 py-0.5 rounded-full text-white font-medium ${agentColorMap[msg.agent] || agentColorMap.Default}`}
                >
                  {msg.agent}
                </span>
              </div>
            )}
            
            {/* Burbuja de mensaje */}
            <div
              className={`relative p-2 rounded-lg max-w-[85%] break-words text-sm ${
                msg.sender === "user"
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-none"
                  : "bg-white text-gray-800 rounded-bl-none border border-gray-200"
              }`}
            >
              {msg.text}
            </div>
            
            {/* Hora del mensaje */}
            <span className="text-xs text-gray-500 mt-0.5 ml-1">
              {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        ))}
        
        {/* Indicador de escritura */}
        {isTyping && (
          <div className="flex items-start">
            <div className="bg-white text-gray-800 p-2 rounded-lg rounded-bl-none border border-gray-200 max-w-[85%]">
              <div className="flex space-x-1">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="p-3 bg-white border-t border-gray-200">
        <div className="flex items-center">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-full px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Escribe tu mensaje..."
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim()}
            className="ml-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-2 rounded-full shadow-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}