'use client'

import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSend, FiCheckCircle, FiAlertCircle, FiUser, FiPhone, FiMail, FiMessageSquare } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';
import ReCAPTCHA from 'react-google-recaptcha';

const FloatingInput = ({ icon: Icon, ...props }: any) => (
  <div className="relative z-0 mb-6 group">
    <input 
      {...props}
      className="block py-2.5 px-0 w-full text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 dark:focus:border-blue-400 peer"
      placeholder=" "
    />
    <label className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-focus:dark:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
      <div className="flex items-center gap-2">
        <Icon className="w-4 h-4" />
        {props.label}
      </div>
    </label>
  </div>
);

const FloatingTextArea = ({ icon: Icon, ...props }: any) => (
  <div className="relative z-0 mb-6 group">
    <textarea 
      {...props}
      className="block py-2.5 px-0 w-full text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 dark:focus:border-blue-400 peer"
      placeholder=" "
    />
    <label className="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-focus:dark:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
      <div className="flex items-center gap-2">
        <Icon className="w-4 h-4" />
        {props.label}
      </div>
    </label>
  </div>
);

const FormularioContactoPremium = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [captchaValid, setCaptchaValid] = useState<boolean | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const captchaRef = useRef<ReCAPTCHA>(null);

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaValid(!!token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!captchaValid) {
      setCaptchaValid(false);
      return;
    }

    setStatus('sending');
    
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      
      setStatus('success');
      setFormData({
        nombre: '',
        telefono: '',
        email: '',
        mensaje: ''
      });
      captchaRef.current?.reset();
      setCaptchaValid(null);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-md"
        >
          {/* Efecto de neón */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none animate-pulse" />
          
          {/* Tarjeta del formulario */}
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl">
            {/* Header con gradiente */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <FaTelegramPlane className="text-yellow-300" />
                  Envíanos un Mensaje
                </h2>
                <button 
                  onClick={onClose}
                  className="p-1 rounded-full hover:bg-white/20 transition-colors"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>
              <p className="mt-1 text-blue-100">Nos pondremos en contacto contigo pronto</p>
            </div>
            
            {/* Formulario */}
            <form ref={formRef} onSubmit={handleSubmit} className="p-6 space-y-6">
              <FloatingInput
                name="nombre"
                label="Nombre Completo"
                icon={FiUser}
                value={formData.nombre}
                onChange={(e: any) => setFormData({...formData, nombre: e.target.value})}
                required
              />
              
              <FloatingInput
                name="telefono"
                label="Teléfono"
                icon={FiPhone}
                type="tel"
                value={formData.telefono}
                onChange={(e: any) => setFormData({...formData, telefono: e.target.value})}
              />
              
              <FloatingInput
                name="email"
                label="Correo Electrónico"
                icon={FiMail}
                type="email"
                value={formData.email}
                onChange={(e: any) => setFormData({...formData, email: e.target.value})}
                required
              />
              
              <FloatingTextArea
                name="mensaje"
                label="Tu Mensaje"
                icon={FiMessageSquare}
                rows={4}
                value={formData.mensaje}
                onChange={(e: any) => setFormData({...formData, mensaje: e.target.value})}
                required
              />

              {/* Integración de reCAPTCHA */}
              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={captchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LfUIlUrAAAAAEkjBb8F0jo93uMtzjVtFZeefYE_"}
                  onChange={handleCaptchaChange}
                  theme="dark"
                />
              </div>
              {captchaValid === false && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-red-500 dark:text-red-400 text-sm"
                >
                  Por favor, verifica que no eres un robot
                </motion.p>
              )}
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === 'sending'}
                className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
                  status === 'sending' 
                    ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl'
                }`}
              >
                {status === 'sending' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    <FiSend />
                    Enviar Mensaje
                  </>
                )}
              </motion.button>
            </form>
            
            {/* Mensajes de estado */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="p-4 bg-green-50 dark:bg-green-900/50 text-green-700 dark:text-green-300 border-t border-green-100 dark:border-green-800 flex items-center gap-2"
                >
                  <FiCheckCircle className="flex-shrink-0" />
                  <span>¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.</span>
                </motion.div>
              )}
              
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="p-4 bg-red-50 dark:bg-red-900/50 text-red-700 dark:text-red-300 border-t border-red-100 dark:border-red-800 flex items-center gap-2"
                >
                  <FiAlertCircle className="flex-shrink-0" />
                  <span>Error al enviar. Por favor, inténtalo de nuevo.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Efecto de partículas (opcional) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
            {[...Array(10)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-blue-400/20"
                style={{
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default FormularioContactoPremium;