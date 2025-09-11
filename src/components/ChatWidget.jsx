"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatWindow from "./ChatWindow";
import { MessageCircle, X } from "lucide-react"; // íconos bonitos

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Botón flotante */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition transform hover:scale-105"
        >
          <MessageCircle size={26} />
        </button>
      )}

      {/* Ventana del chat */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-80 h-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 flex items-center justify-between text-white">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-600 font-bold">
                  E
                </div>
                <div>
                  <p className="font-semibold">Evelyn</p>
                  <p className="text-xs text-gray-200">Asistente Stratik</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="bg-white/20 hover:bg-white/30 rounded-full p-1 transition"
              >
                <X size={16} />
              </button>
            </div>

            {/* Chat */}
            <ChatWindow />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
