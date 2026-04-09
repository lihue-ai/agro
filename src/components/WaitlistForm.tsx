import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Loader2, ShieldCheck, Lock, ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function WaitlistForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '$10,000 - $29,999 (Pro)'
  });
  const [mockHash, setMockHash] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate network latency
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setMockHash(`0x_mock_${Math.random().toString(36).substring(2, 15)}`);
    setStatus('success');
  };

  return (
    <section className="py-24 px-6 bg-snow-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-digital/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-heritage/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          {/* Scarcity Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-heritage/5 border border-gold-heritage/20 text-gold-heritage text-xs font-bold uppercase tracking-[0.2em] mb-8 shadow-sm animate-pulse"
          >
            <Sparkles size={14} />
            <span>Programa Genesis 100: 87/100 Plazas Asignadas</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
            Asegure su participación en el <br className="hidden md:block" />
            proyecto AgriTech.
          </h2>
          
          <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Sea parte de los primeros 100 participantes en acceder a condiciones preferenciales. Los activos productivos agrícolas con liquidez digital son el estándar del nuevo agro.
          </p>
        </div>

        <div className="relative max-w-xl mx-auto">
          <AnimatePresence mode="wait">
            {status !== 'success' ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white border border-slate-100 p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Nombre Completo</label>
                    <input
                      required
                      type="text"
                      placeholder="Ej. Alejandro Valdivia"
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-digital/50 transition-colors"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Correo Electrónico Oficial</label>
                    <input
                      required
                      type="email"
                      placeholder="nombre@empresa.com"
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-digital/50 transition-colors"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Interés de Inversión Estimado (USD)</label>
                    <select
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-emerald-digital/50 transition-colors appearance-none cursor-pointer"
                      value={formData.interest}
                      onChange={e => setFormData({ ...formData, interest: e.target.value })}
                    >
                      <option value="$1,000 - $9,999 (Retail)">$1,000 - $9,999 (Retail)</option>
                      <option value="$10,000 - $29,999 (Pro)">$10,000 - $29,999 (Pro)</option>
                      <option value="$30,000+ (Genesis 100 - 30% Descuento)">$30,000+ (Genesis 100 - 30% Descuento)</option>
                    </select>
                  </div>

                  <div className="pt-4">
                    <button
                      disabled={status === 'submitting'}
                      type="submit"
                      className="w-full py-5 bg-emerald-digital text-white rounded-2xl font-bold text-lg shadow-[0_20px_50px_rgba(16,185,129,0.3)] hover:bg-emerald-600 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="animate-spin" />
                          <span>Procesando Protocolo...</span>
                        </>
                      ) : (
                        <>
                          <span>Reclamar mi Parcela Digital</span>
                          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[10px] text-slate-400 text-center leading-relaxed px-4">
                    Al registrarte, aceptas que tu cuenta iniciará con balance cero y estará sujeta a estricta verificación KYC/AML posterior bajo el estándar institucional de Aetheris.
                  </p>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white border border-emerald-digital/20 p-12 rounded-[2.5rem] shadow-xl text-center"
              >
                <div className="w-20 h-20 bg-emerald-digital/10 rounded-full flex items-center justify-center mx-auto mb-8 text-emerald-digital">
                  <CheckCircle size={48} />
                </div>
                
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Posición Asegurada.</h3>
                <p className="text-slate-500 mb-10 leading-relaxed">
                  Tu perfil ha sido registrado bajo el protocolo de <span className="text-emerald-digital font-bold">Data Cero</span>. <br />
                  La tierra responde exclusivamente a ti. Recibirás instrucciones encriptadas en tu correo oficial.
                </p>

                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-left">
                  <div className="flex items-center gap-2 text-emerald-digital/60 text-[10px] font-bold uppercase tracking-widest mb-3">
                    <Lock size={12} />
                    <span>Hash de Registro Inmutable</span>
                  </div>
                  <code className="block font-mono text-[11px] text-emerald-digital break-all bg-emerald-digital/5 p-3 rounded-lg border border-emerald-digital/10">
                    {mockHash}
                  </code>
                </div>

                <div className="mt-10 flex items-center justify-center gap-2 text-slate-400 text-xs font-medium">
                  <ShieldCheck size={16} className="text-emerald-digital" />
                  <span>Verificado por Aetheris Security Protocol</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
