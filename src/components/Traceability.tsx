import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Cpu, Database, MapPin, Wind, Droplets, Thermometer } from 'lucide-react';

const IoTMetric = ({ icon: Icon, label, value, unit, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
    className="bg-white/50 backdrop-blur-sm border border-slate-100 p-4 rounded-2xl flex items-center gap-4"
  >
    <div className="w-10 h-10 rounded-xl bg-emerald-digital/10 flex items-center justify-center text-emerald-digital">
      <Icon size={20} />
    </div>
    <div>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</p>
      <p className="text-lg font-bold text-slate-900">{value}<span className="text-xs ml-1 text-slate-400 font-medium">{unit}</span></p>
    </div>
  </motion.div>
);

export default function Traceability() {
  return (
    <section id="traceability" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side: The "Digital Twin" Data Feed */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden border border-slate-800"
            >
              {/* Animated Grid Background */}
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#10B981_1px,transparent_1px),linear-gradient(to_bottom,#10B981_1px,transparent_1px)] bg-[size:40px_40px]" />
              
              <div className="relative z-20">
                <div className="flex justify-between items-center mb-12">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-digital animate-pulse" />
                    <span className="text-xs font-bold text-emerald-digital uppercase tracking-[0.2em]">Data en Vivo: Sector Agrícola</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-emerald-digital/20 border border-emerald-digital/30 text-[10px] font-bold text-emerald-digital uppercase">
                    Blockchain Verified
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <IoTMetric icon={Thermometer} label="Temperatura" value="22.4" unit="°C" delay={0.1} />
                  <IoTMetric icon={Droplets} label="Humedad Suelo" value="42" unit="%" delay={0.2} />
                  <IoTMetric icon={Wind} label="Calidad Aire" value="98" unit="AQI" delay={0.3} />
                  <IoTMetric icon={MapPin} label="Geolocalización" value="12.4°S" unit="76.2°W" delay={0.4} />
                </div>

                {/* Simulated Blockchain Ledger */}
                <div className="bg-black/40 rounded-2xl p-6 border border-white/5 font-mono text-[10px]">
                  <p className="text-emerald-digital/60 mb-2 uppercase tracking-widest font-bold">Registro Inmutable Ledger</p>
                  <div className="space-y-2 text-slate-400">
                    <p className="flex justify-between">
                      <span>[00:50:06] HASH_GENESIS_VALIDATED</span>
                      <span className="text-emerald-digital">0x4f...a2e1</span>
                    </p>
                    <p className="flex justify-between">
                      <span>[00:48:12] IOT_SENSOR_SYNC_COMPLETE</span>
                      <span className="text-emerald-digital">0x92...b88c</span>
                    </p>
                    <p className="flex justify-between opacity-50">
                      <span>[00:45:30] SMART_CONTRACT_ESCROW_INIT</span>
                      <span className="text-emerald-digital">0x11...f39d</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Gold Accent */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-heritage/10 rounded-full blur-3xl" />
          </div>

          {/* Text Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                Trazabilidad y <br />
                <span className="text-emerald-digital italic font-serif">Control de Activos</span>
              </h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Cada metro cuadrado de su inversión está vinculado a un Gemelo Digital. Nuestra red de sensores IoT monitorea la salud del cultivo 24/7, registrando cada hito operativo en la red Polygon.
              </p>

              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-emerald-digital shadow-sm">
                    <Database size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Auditoría Permanente</h4>
                    <p className="text-sm text-slate-500">Datos protegidos contra manipulación. Su patrimonio está respaldado por evidencia física auditable en tiempo real.</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-emerald-digital shadow-sm">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Protección de Capital</h4>
                    <p className="text-sm text-slate-500">Implementamos seguros paramétricos que se activan automáticamente ante anomalías climáticas, protegiendo su inversión inicial.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
