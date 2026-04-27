'use client'

import React, { useState, useEffect, useRef } from 'react';
import { RiPhoneFill, RiMailFill } from "react-icons/ri";
import { ImLocation } from "react-icons/im";
import emailjs from '@emailjs/browser';
import InputField from './InputField';
import InputEmail from './InputEmail';
import TextAreaField from './TextAreaField';
import ReCAPTCHA from "react-google-recaptcha";

interface FormValues {
  [key: string]: string;
  nombreCompleto: string;
  telefonoMovil: string;
  email: string;
  mensaje: string;
}

const FormularioContacto = () => {
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string);
  }, []);

  const [values, setValues] = useState<FormValues>({
    nombreCompleto: '',
    telefonoMovil: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const [status, setStatus] = useState<string>('');
  const [captchaValido, cambiarCaptchaValido] = useState<boolean | null>(null);
  const captcha = useRef<ReCAPTCHA>(null);

  const onChangeCaptcha = () => {
    if (captcha.current?.getValue()) {
      cambiarCaptchaValido(true);
    } else {
      cambiarCaptchaValido(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaValido) {
      cambiarCaptchaValido(false);
      return;
    }

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          from_name: values.nombreCompleto,    // ← mapea a {{from_name}}
          phone: values.telefonoMovil,         // ← mapea a {{phone}}
          from_email: values.email,            // ← mapea a {{from_email}}
          message: values.mensaje,             // ← mapea a {{message}}
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );

      console.log('Success!!', response);
      setValues({
        nombreCompleto: '',
        telefonoMovil: '',
        email: '',
        mensaje: '',
      });
      setStatus('SUCCESS');
      captcha.current?.reset();
      cambiarCaptchaValido(null);
    } catch (error) {
      console.log('Failed send Email', error);
      setStatus('ERROR');
    }
  };

  useEffect(() => {
    if (status === 'SUCCESS') {
      const timer = setTimeout(() => {
        setStatus('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="antialiased bg-cyan-900 min-h-screen w-full flex items-center justify-center">
      <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-cyan-800 p-8 rounded-xl shadow-lg text-white overflow-hidden">
        <div className="flex flex-col space-y-8 justify-between">
          <div>
            <h1 className="font-title text-5xl xl:text-7xl tracking-wide py-10 xl:py-20">Contactanos</h1>
            <p className="p-2 text-cyan-100 text-sm">Te asesoramos desde el primer momento</p>
          </div>
          <div className="inline-flex space-x-2 items-center">
            <RiPhoneFill className="text-teal-300 text-xl" />
            <span>+(52) 55 7563 0576</span>
          </div>
          <div className="inline-flex space-x-2 items-center">
            <RiMailFill className="text-teal-300 text-xl" />
            <span>stratiksoftware@gmail.com</span>
          </div>
          <div className="inline-flex space-x-2 items-center">
            <ImLocation className="text-teal-300 text-xl" />
            <span>Cd. México, Madrid</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-28 -top-28"></div>
          <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -left-16 -bottom-16"></div>

          <div className="relative z-10 bg-white rounded-xl shadow-lg hover:shadow-indigo-500/40 p-8 text-gray-600 md:w-90">
            <form onSubmit={handleSubmit} id="form" className="flex flex-col space-y-4">
              <InputField
                value={values.nombreCompleto}
                handleChange={handleChange}
                label="Nombre Completo"
                name="nombreCompleto"
                type="text"
                placeholder="Juan Perez"
              />
              <InputField
                value={values.telefonoMovil}
                handleChange={handleChange}
                label="Teléfono Móvil"
                name="telefonoMovil"
                type="text"
                placeholder="+52 55 55 55 55 55"
              />
              <InputEmail
                value={values.email}
                handleChange={handleChange}
                label="E-mail"
                name="email"
                type="email"
                placeholder="st@gmail.com"
              />
              <TextAreaField
                value={values.mensaje}
                handleChange={handleChange}
                label="Mensaje"
                name="mensaje"
              />

              <div className="text-center">
                <ReCAPTCHA
                  ref={captcha}
                  onChange={onChangeCaptcha}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY!}
                  theme="light"
                />
                {captchaValido === false && (
                  <div className="text-red-500 mt-2 text-sm font-medium">
                    Por favor, verifica que no eres un robot
                  </div>
                )}
              </div>

              <button
                id="button"
                type="submit"
                className="inline-block self-end font-semibold px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg py-2 uppercase text-sm hover:opacity-90 transition-colors"
              >
                Enviar Formulario
              </button>
            </form>
          </div>

          {status === 'SUCCESS' && (
            <div className="text-base px-4 py-3 bg-green-100 text-green-800 rounded-lg mt-4 text-center">
              <p>¡Su mensaje ha sido enviado con éxito! En breve nos comunicaremos con usted. ¡Gracias!</p>
            </div>
          )}

          {status === 'ERROR' && (
            <div className="text-base px-4 py-3 bg-red-100 text-red-800 rounded-lg mt-4 text-center">
              <p>Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormularioContacto;
