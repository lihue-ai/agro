import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Scale, Globe, Landmark } from 'lucide-react';

export default function LegalShield() {
  return (
    <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-heritage/10 border border-gold-heritage/20 text-gold-heritage text-[10px] font-bold uppercase tracking-widest mb-6">
              <Landmark size={14} />
              <span>Arquitectura Legal de Doble Escudo</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
              Blindaje Jurídico Global, <br />
              <span className="text-emerald-digital italic font-serif">Activos Productivos.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Hemos diseñado una estructura que elimina el riesgo jurisdiccional. Su participación está vinculada a la producción, legalmente protegida bajo estándares internacionales que garantizan la seguridad de su capital.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-white shrink-0">
                  <Scale size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Jurisdicción Wyoming LLC</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Su participación se rige por las leyes corporativas de EE.UU., garantizando la protección de la propiedad privada y la resolución de disputas en cortes internacionales.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-emerald-digital flex items-center justify-center text-white shrink-0">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Inmutabilidad Blockchain</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Cada título de propiedad está tokenizado en la red Polygon, creando un registro público, auditable y resistente a cualquier inestabilidad política local.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-[3rem] p-12 text-white relative z-10 overflow-hidden border border-white/10"
            >
              {/* Abstract Map/Grid Overlay */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10B981_1px,transparent_1px)] bg-[size:20px_20px]" />
              
              <div className="relative z-20">
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-heritage">
                    <ShieldCheck size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Blindaje Patrimonial</h3>
                    <p className="text-slate-400 text-sm">Protocolo de Custodia Aetheris</p>
                  </div>
                </div>

                <ul className="space-y-6">
                  <li className="flex items-center gap-4 border-b border-white/5 pb-4">
                    <div className="w-2 h-2 rounded-full bg-emerald-digital" />
                    <span className="text-sm font-medium">Contratos Inteligentes de Producción</span>
                  </li>
                  <li className="flex items-center gap-4 border-b border-white/5 pb-4">
                    <div className="w-2 h-2 rounded-full bg-emerald-digital" />
                    <span className="text-sm font-medium">Estructura Wyoming LLC (EE.UU.)</span>
                  </li>
                  <li className="flex items-center gap-4 border-b border-white/5 pb-4">
                    <div className="w-2 h-2 rounded-full bg-emerald-digital" />
                    <span className="text-sm font-medium">Participación digital tokenizada</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-emerald-digital" />
                    <span className="text-sm font-medium">Cumplimiento normativo KYC/AML</span>
                  </li>
                </ul>

                <div className="mt-12 p-6 bg-emerald-digital/10 border border-emerald-digital/20 rounded-2xl">
                  <p className="text-xs text-emerald-digital font-bold uppercase tracking-widest mb-2">Estado de Protección</p>
                  <p className="text-lg font-bold">Activo & Verificado</p>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative Glow */}
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-emerald-digital/20 rounded-full blur-[100px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
