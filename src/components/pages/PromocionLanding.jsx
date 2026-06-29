'use client';
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import {
  Activity,
  BrainCircuit,
  ShieldCheck,
  Clock,
  TrendingUp,
  Smartphone,
  FileText,
  Zap,
  CheckCircle2,
  ChevronRight,
  X
} from 'lucide-react';

const StratidentLanding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const formData = new FormData(e.currentTarget);
    const from_name = formData.get('from_name')?.toString() || '';
    const clinic_name = formData.get('clinic_name')?.toString() || '';
    const from_email = formData.get('from_email')?.toString() || '';
    const phone = formData.get('phone')?.toString() || '';

    const combinedMessage = `Clínica: ${clinic_name} | Doctor: ${from_name}`;

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: from_name,
          phone: phone,
          from_email: from_email,
          message: combinedMessage,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setShowSuccess(true);
      e.currentTarget.reset();
      setTimeout(() => {
        setShowSuccess(false);
        setIsModalOpen(false);
      }, 3000);
    } catch (error) {
      console.error('Error al enviar el mensaje:', error?.text || error?.message || error);
      alert('Error al enviar el mensaje. Por favor, intenta nuevamente.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-cyan-100 selection:text-blue-900">

      {/* 0. HEADER PREMIUM (CUSTOM NAVBAR LANDING) */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-white/50 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/logo.jpg" alt="Stratik Logo" className="h-10 w-auto object-contain mix-blend-multiply" />
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-gray-900 font-black text-lg leading-none tracking-tight">Stratident</span>
              <span className="text-blue-600 text-[10px] font-bold uppercase tracking-widest leading-none mt-1">By Stratik</span>
            </div>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="px-5 py-2.5 rounded-xl bg-gray-900 hover:bg-black text-white text-sm font-bold shadow-lg shadow-gray-200 transition-all active:scale-95 flex items-center gap-2 group">
            Acceso Anticipado <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        {/* Faint Logo Watermark */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-5 pointer-events-none mix-blend-multiply select-none">
          <img src="/images/logo.jpg" alt="" className="w-full max-w-4xl object-contain grayscale scale-110" />
        </div>

        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30 -z-20" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl -z-20" />
        <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl -z-20" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-bold tracking-wide mb-8 shadow-sm">
            <Zap className="w-4 h-4 text-cyan-500" />
            SOFTWARE MÉDICO DE NUEVA GENERACIÓN
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight mb-6 leading-tight max-w-4xl mx-auto">
            El Sistema Operativo Inteligente para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">Clínicas Dentales</span> de Alto Rendimiento.
          </h1>

          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Digitaliza expedientes clínicos, automatiza el cálculo de comisiones y mejora la retención de pacientes con el único CRM dental en México impulsado por Inteligencia Artificial.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button onClick={() => setIsModalOpen(true)} className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-200 transition-all active:scale-95 flex items-center justify-center gap-2">
              Solicitar Acceso Early Bird <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
            Desarrollado y respaldado por la ingeniería de <span className="text-blue-600">Stratik</span>
          </p>

          {/* Mockup Placeholder */}
          <div className="mt-16 relative mx-auto w-full max-w-5xl">
            <div className="rounded-3xl shadow-2xl border border-gray-100 bg-white overflow-hidden aspect-video flex items-center justify-center bg-gradient-to-tr from-gray-50 to-white relative z-10">
              {/* Reemplazar con la imagen real de tu Dashboard */}
              <p className="text-gray-300 font-bold text-xl flex flex-col items-center gap-4">
                <img src="/images/Mockup.png" alt="Dashboard Stratident" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEMA / AGITACIÓN */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
              ¿Tu clínica crece, pero tu control administrativo se queda atrás?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Papelería Interminable</h3>
              <p className="text-gray-500 leading-relaxed">
                Expedientes físicos perdidos, radiografías regadas en WhatsApp y notas clínicas incompletas que ponen en riesgo tu práctica.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Caos Financiero</h3>
              <p className="text-gray-500 leading-relaxed">
                Horas perdidas calculando comisiones a mano, controlando el inventario o buscando quién tiene saldos pendientes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pacientes en Abandono</h3>
              <p className="text-gray-500 leading-relaxed">
                Falta de seguimiento post-operatorio y recordatorios que resultan en citas canceladas y pérdida de retención.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE FEATURES */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-4">
              Conoce Stratident: Todo lo que tu práctica necesita en una sola pestaña.
            </h2>
            <p className="text-xl text-gray-500">Arquitectura de vanguardia diseñada para optimizar cada minuto de tu tiempo en el sillón dental.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">

            {/* Feature 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Expediente Clínico Digital</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" /> Odontograma y Periodontograma interactivo en tiempo real.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" /> Visor de radiografías DICOM y archivos multimedia.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" /> Comparador visual "Antes y Después" para estética dental.</li>
                </ul>
                <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100 mt-6">
                  <FileText className="w-8 h-8 text-cyan-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Cumplimiento Legal (NOM)</h4>
                    <p className="text-gray-500 text-sm mt-1">Actualmente se está tramitando la certificación NOM-004-SSA3-2012 (Expediente Clínico) y NOM-024-SSA3-2012, asegurando el estándar oficial mexicano para tu práctica.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                <BrainCircuit className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Copiloto Dental IA</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> Dictado de notas clínicas por voz y transcripción inteligente.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> Resúmenes automáticos de la evolución del paciente.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /> Análisis de imágenes clínicas con algoritmos de visión.</li>
                </ul>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Business Center & Finanzas</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> Generación de presupuestos y estado de cuenta al instante.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> Motor de cálculo automático de comisiones para especialistas.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> Control de inventario médico y armado de kits quirúrgicos.</li>
                </ul>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center">
                <Smartphone className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Experiencia del Paciente</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" /> Agenda clínica inteligente con sincronización bidireccional.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" /> Envío automatizado de indicaciones post-operatorias.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" /> Portal web privado y gamificación con Score de Higiene.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3.5 ECOSISTEMA COMPLETO */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-4">
              El Ecosistema más Completo de Latinoamérica
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Más de 30 módulos especializados en la gestión clínica, administrativa y financiera, diseñados para cumplir con la normatividad vigente y potenciar tus ingresos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Columna 1: Clínico */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Herramientas Clínicas</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Odontograma Avanzado",
                  "Periodontograma",
                  "Endodoncia & Ortodoncia",
                  "Receta Médica Electrónica",
                  "Galería Kardex Clínico",
                  "Comparador de Fotos",
                  "Educación 3D para Pacientes",
                  "Consentimientos y Firma Legal",
                  "Portal Privado del Paciente",
                  "Exportar ARCO y HL7/FHIR"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna 2: Administrativo */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Administración y Finanzas</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Agenda Clínica Multisede",
                  "Directorio de Pacientes",
                  "Check-In QR en Recepción",
                  "Control de Laboratorio",
                  "Business Center",
                  "Contabilidad Fiscal SAT",
                  "Marketing CRM",
                  "Recursos Humanos",
                  "Inventario, Kits y Costos",
                  "Cálculo de Comisiones",
                  "Normatividad COFEPRIS",
                  "Gestión RPBI"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna 3: Inteligencia Artificial */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full blur-3xl -z-10"></div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Módulos Inteligentes IA</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Copiloto Dental IA",
                  "Dictado Clínico por Voz",
                  "Cronómetro Clínico de Sillón",
                  "Evolución y Presupuestos IA",
                  "Copiloto de Cierre (Ventas)",
                  "Manejo de Objeciones de Pacientes",
                  "Análisis de Radiografías",
                  "Recordatorios Inteligentes"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                    <Zap className="w-5 h-5 text-purple-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEGURIDAD & STRATIK TOUCH */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/50 to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6">Tu información clínica, segura y alineada a la ley.</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Stratident está construido sobre infraestructura Serverless (Google Cloud) asegurando disponibilidad 24/7. Olvídate de los sistemas lentos que requieren instalaciones. Accede a la velocidad de la luz desde tu Mac, PC o iPad.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <ShieldCheck className="w-8 h-8 text-cyan-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Firmas Digitales Autógrafas</h4>
                    <p className="text-sm text-gray-400">Generación de Consentimientos Informados con capacidad de firma directa en pantalla por parte del paciente.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <Activity className="w-8 h-8 text-red-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Contralor IA (Auditoría en tiempo real)</h4>
                    <p className="text-sm text-gray-400">Alertas automáticas que bloquean el inicio de tratamientos si detectan que falta documentación legal obligatoria.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Componente decorativo tecnológico */}
            <div className="relative h-full flex items-center justify-center">
              <div className="w-80 h-80 border border-white/10 rounded-full flex items-center justify-center relative animate-[spin_60s_linear_infinite]">
                <div className="w-60 h-60 border border-cyan-500/30 rounded-full flex items-center justify-center border-dashed">
                  <div className="w-40 h-40 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-50" />
                </div>
              </div>
              <div className="absolute text-center">
                <Zap className="w-12 h-12 text-white mx-auto mb-2" />
                <p className="font-black tracking-widest uppercase text-sm">Powered by Stratik</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA / EARLY BIRD */}
      <section className="py-32 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Únete a la evolución digital de la odontología.
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Estamos abriendo plazas limitadas para nuestro <strong>Programa Early Bird</strong>. Accede a precios preferenciales de por vida, migración de datos asistida y soporte prioritario directo de nuestro equipo de ingeniería.
          </p>

          <form onSubmit={sendEmail} className="bg-white p-8 rounded-3xl shadow-2xl max-w-xl mx-auto text-left relative">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Reserva tu acceso anticipado</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Nombre del Doctor</label>
                <input required name="from_name" type="text" className="w-full mt-1 p-3 border border-gray-200 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" placeholder="Dr. Juan Pérez" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Nombre de la Clínica</label>
                <input required name="clinic_name" type="text" className="w-full mt-1 p-3 border border-gray-200 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" placeholder="Dental Studio" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Email</label>
                  <input required name="from_email" type="email" className="w-full mt-1 p-3 border border-gray-200 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" placeholder="hola@clinica.com" />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">WhatsApp</label>
                  <input required name="phone" type="tel" className="w-full mt-1 p-3 border border-gray-200 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" placeholder="55 0000 0000" />
                </div>
              </div>
              <button disabled={isSending} type="submit" className="w-full mt-4 py-4 rounded-xl bg-gray-900 hover:bg-black text-white font-bold shadow-lg transition-all active:scale-95 text-lg flex items-center justify-center gap-2">
                {isSending ? 'Enviando...' : 'Quiero mi Acceso Anticipado'}
              </button>
              {showSuccess && <p className="text-green-600 text-sm font-bold text-center mt-2">¡Solicitud enviada con éxito!</p>}
            </div>
            <p className="text-[10px] text-gray-400 text-center mt-4 uppercase tracking-wider font-bold">
              Al registrarte aceptas nuestros Términos y Condiciones
            </p>
          </form>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-gray-50 py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
          <h2 className="text-2xl font-black text-blue-600 tracking-tight mb-1">Stratident</h2>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-6">Powered by Stratik</p>
          <div className="flex gap-6 text-sm font-bold text-gray-500 mb-6">
            <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-blue-600 transition-colors">Aviso de Privacidad</button>
            <button onClick={() => setIsTermsOpen(true)} className="hover:text-blue-600 transition-colors">Términos y Condiciones</button>
            <button onClick={() => setIsSupportOpen(true)} className="hover:text-blue-600 transition-colors">Soporte</button>
          </div>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Stratik Agency. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* MODAL EARLY BIRD */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl relative overflow-hidden animate-in fade-in zoom-in duration-200">
            {/* Botón cerrar */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <form onSubmit={sendEmail} className="p-8 text-left relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center mt-2">Reserva tu acceso anticipado</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Nombre del Doctor</label>
                  <input required name="from_name" type="text" className="w-full mt-1 p-3 border border-gray-200 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" placeholder="Dr. Juan Pérez" />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Nombre de la Clínica</label>
                  <input required name="clinic_name" type="text" className="w-full mt-1 p-3 border border-gray-200 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" placeholder="Dental Studio" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Email</label>
                    <input required name="from_email" type="email" className="w-full mt-1 p-3 border border-gray-200 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" placeholder="hola@clinica.com" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">WhatsApp</label>
                    <input required name="phone" type="tel" className="w-full mt-1 p-3 border border-gray-200 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" placeholder="55 0000 0000" />
                  </div>
                </div>
                <button disabled={isSending} type="submit" className="w-full mt-4 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-200 transition-all active:scale-95 text-lg flex items-center justify-center gap-2">
                  {isSending ? 'Enviando...' : 'Quiero mi Acceso Anticipado'}
                </button>
                {showSuccess && <p className="text-green-600 text-sm font-bold text-center mt-2">¡Solicitud enviada con éxito!</p>}
              </div>
              <p className="text-[10px] text-gray-400 text-center mt-4 uppercase tracking-wider font-bold">
                Al registrarte aceptas nuestros Términos y Condiciones
              </p>
            </form>
          </div>
        </div>
      )}

      {/* POPUPS FOOTER */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl relative overflow-hidden animate-in fade-in zoom-in p-8">
            <button onClick={() => setIsPrivacyOpen(false)} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full">
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Aviso de Privacidad</h3>
            <div className="text-gray-600 text-sm max-h-96 overflow-y-auto space-y-4 pr-2">
              <p>StratikSoftware protege y salvaguarda sus datos personales para evitar el daño, pérdida, destrucción, robo, extravío, alteración, así como el tratamiento no autorizado de sus datos personales. Se está tramitando el cumplimiento de normativas vigentes en materia de salud.</p>
              <p><strong>Recopilación de información:</strong> Recopilamos información personal (como nombre, correo, teléfono) únicamente con el fin de contactarlo para proporcionarle información sobre nuestro software CRM Stratident.</p>
              <p>Sus datos no serán compartidos con terceros sin su consentimiento expreso.</p>
            </div>
          </div>
        </div>
      )}

      {isTermsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl relative overflow-hidden animate-in fade-in zoom-in p-8">
            <button onClick={() => setIsTermsOpen(false)} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full">
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Términos y Condiciones</h3>
            <div className="text-gray-600 text-sm max-h-96 overflow-y-auto space-y-4 pr-2">
              <p>Al acceder o utilizar Stratident (actualmente en programa Early Bird), usted acepta estar sujeto a estos términos. El software se proporciona "tal cual" y "según disponibilidad".</p>
              <p><strong>Propiedad Intelectual:</strong> Todos los derechos, títulos e intereses en y para Stratident son y seguirán siendo propiedad exclusiva de Stratik.</p>
              <p>En el uso de herramientas de IA y funcionalidades clínicas, el juicio profesional del dentista o especialista médico siempre debe prevalecer sobre las sugerencias del sistema.</p>
            </div>
          </div>
        </div>
      )}

      {isSupportOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm relative overflow-hidden animate-in fade-in zoom-in p-8 text-center">
            <button onClick={() => setIsSupportOpen(false)} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full">
              <X className="w-6 h-6" />
            </button>
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Soporte Técnico</h3>
            <p className="text-gray-500 mb-6 text-sm">Nuestro equipo de ingeniería de Stratik está listo para ayudarte con tu integración y acceso Early Bird.</p>
            <a href="mailto:stratiksoftware@gmail.com" className="inline-block w-full py-3 rounded-xl bg-gray-900 hover:bg-black text-white font-bold transition-all">
              Contactar a Soporte
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default StratidentLanding;
