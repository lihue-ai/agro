import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Eye, BarChart3, Wallet, ArrowRight } from 'lucide-react';

const Step = ({ icon: Icon, title, description, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
    className="relative flex flex-col items-center text-center p-6"
  >
    <div className="w-16 h-16 rounded-2xl bg-emerald-digital/10 flex items-center justify-center text-emerald-digital mb-6 relative z-10">
      <Icon size={28} />
      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-emerald-digital flex items-center justify-center text-[10px] font-bold">
        {Math.round(delay * 10) + 1}
      </div>
    </div>
    <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
    <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
  </motion.div>
);

export default function SimpleExplanation() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            ¿Cómo funciona el modelo AgriTech?
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Hemos digitalizado el acceso a la producción agrícola de alto valor, permitiéndote participar en ciclos productivos reales con tecnología de punta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-14 left-0 w-full h-[2px] bg-slate-100 z-0" />
          
          <Step 
            icon={ShoppingCart} 
            title="Participación" 
            description="Eliges la capacidad productiva (tokens $PACHA) en la que deseas participar." 
            delay={0}
          />
          <Step 
            icon={Eye} 
            title="Optimización IoT" 
            description="Nuestra tecnología monitorea y optimiza el cultivo en tiempo real para maximizar el rendimiento." 
            delay={0.1}
          />
          <Step 
            icon={BarChart3} 
            title="Cosecha y Venta" 
            description="La producción se coloca en mercados globales, transformando el esfuerzo agrícola en valor líquido." 
            delay={0.2}
          />
          <Step 
            icon={Wallet} 
            title="Retorno Operativo" 
            description="Recibes los beneficios de la comercialización proporcionalmente a tu participación digital." 
            delay={0.3}
          />
        </div>

        {/* Practical Example Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-emerald-digital/5 border border-emerald-digital/20 rounded-[2.5rem] p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-digital/10 text-emerald-digital text-[10px] font-bold uppercase tracking-widest mb-6">
                Modelo Operativo
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                De la producción a tu <br />
                <span className="text-emerald-digital">billetera digital.</span>
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Al participar en el proyecto, te integras a una cadena de valor agrícola tecnificada. 
                Nosotros gestionamos toda la operación, desde el riego inteligente hasta la exportación. 
                Tú recibes la utilidad neta generada por la venta de la producción.
              </p>
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-emerald-digital/10 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-gold-heritage/10 flex items-center justify-center text-gold-heritage">
                  <BarChart3 size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Rendimiento Estimado</p>
                  <p className="text-lg font-bold text-slate-900">18% - 24% Anual Variable</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                <div className="w-2 h-6 bg-emerald-digital rounded-full" />
                Tu Proyección Visual
              </h4>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Inversión Inicial</span>
                  <span className="font-bold text-slate-900">$10,000</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-emerald-digital" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Valorización + Cosechas (Año 5)</span>
                  <span className="font-bold text-emerald-digital">$25,400*</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-emerald-digital" />
                </div>
                <p className="text-[10px] text-slate-400 italic">
                  *Cifras proyectadas basadas en rendimientos históricos y valorización de la tierra.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
