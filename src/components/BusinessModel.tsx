import React from 'react';
import { motion } from 'motion/react';
import { X, Check, ArrowRight, Shield, Zap, Users, Globe } from 'lucide-react';

const ComparisonRow = ({ label, traditional, aetheris, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
    className="grid grid-cols-1 md:grid-cols-3 border-b border-slate-100 py-6 items-center gap-4"
  >
    <div className="text-sm font-bold text-slate-900 uppercase tracking-wider">{label}</div>
    <div className="flex items-center gap-2 text-slate-400 text-sm">
      <X size={16} className="text-red-400 shrink-0" />
      <span>{traditional}</span>
    </div>
    <div className="flex items-center gap-2 text-emerald-digital font-bold text-sm">
      <Check size={16} className="shrink-0" />
      <span>{aetheris}</span>
    </div>
  </motion.div>
);

export default function BusinessModel() {
  return (
    <section className="py-24 px-6 bg-snow-white relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Eficiencia en Agro-Tecnología
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Comparamos la ineficiencia del modelo agrícola tradicional frente a la precisión y escalabilidad de la arquitectura AgriTech de Pachanova.
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
          <div className="hidden md:grid grid-cols-3 mb-8 pb-4 border-b-2 border-slate-50 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <div>Atributo</div>
            <div>Agricultura Tradicional</div>
            <div className="text-emerald-digital">Modelo AgriTech</div>
          </div>

          <div className="space-y-2">
            <ComparisonRow 
              label="Acceso a la Producción" 
              traditional="Barreras de entrada y altos costos operativos" 
              aetheris="Participación fraccionada vía tokens $PACHA" 
              delay={0.1}
            />
            <ComparisonRow 
              label="Control y Datos" 
              traditional="Decisiones basadas en intuición y clima" 
              aetheris="Optimización predictiva vía sensores IoT" 
              delay={0.2}
            />
            <ComparisonRow 
              label="Comercialización" 
              traditional="Dependencia de acopiadores locales" 
              aetheris="Acceso directo a mercados globales" 
              delay={0.3}
            />
            <ComparisonRow 
              label="Certeza Jurídica" 
              traditional="Contratos informales y riesgo local" 
              aetheris="Estructura Wyoming LLC (EE.UU.)" 
              delay={0.4}
            />
            <ComparisonRow 
              label="Rendimiento Operativo" 
              traditional="Bajo margen por ineficiencia técnica" 
              aetheris="Alta rentabilidad por precisión técnica" 
              delay={0.5}
            />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <Zap size={24} className="text-gold-heritage mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">Velocidad</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Liquidaciones automáticas basadas en hitos biológicos reales.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <Shield size={24} className="text-emerald-digital mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">Seguridad</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Contratos inteligentes auditados que protegen el principal del inversor.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <Globe size={24} className="text-emerald-digital mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">Escalabilidad</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Modelo replicable en cualquier bioregión de Latinoamérica.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
