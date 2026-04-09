import React, { useState, useMemo } from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  TooltipProps
} from 'recharts';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, Sprout, Lock, Award, Info, ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

// --- Types ---

interface DataPoint {
  month: number;
  displayMonth: string;
  value: number;
  isHarvest: boolean;
  harvestAmount: number;
}

// --- Custom Tooltip ---

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as DataPoint;
    return (
      <div className="bg-white/90 backdrop-blur-md border border-emerald-500/20 p-4 rounded-xl shadow-2xl">
        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">
          Mes {data.month} — Ciclo Biológico
        </p>
        
        {data.isHarvest ? (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-digital font-bold text-lg">
              <Sprout size={18} />
              <span>🌾 Cosecha Completada: +${data.harvestAmount.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2 text-gold-heritage text-xs font-medium">
              <Lock size={12} />
              <span>Dividendo distribuido vía Smart Contract</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
            <span className="animate-pulse">🌱</span>
            <span>Cultivo en maduración. Monitoreo IoT activo.</span>
          </div>
        )}
        
        <div className="mt-3 pt-3 border-t border-slate-100">
          <p className="text-xs text-slate-400">Valor Total del Activo</p>
          <p className="text-xl font-bold text-slate-900">${data.value.toLocaleString()}</p>
        </div>
      </div>
    );
  }
  return null;
};

// --- Main Component ---

export default function HarvestSimulator() {
  const [investment, setInvestment] = useState(10000);

  // Generate 5-year data (60 months)
  const data = useMemo(() => {
    const points: DataPoint[] = [];
    let currentValue = investment;
    const apy = 0.22;
    const harvestYield = apy / 2; // 11% per harvest

    for (let m = 0; m <= 60; m++) {
      const isHarvest = m > 0 && m % 6 === 0;
      let harvestAmount = 0;
      
      if (isHarvest) {
        harvestAmount = Math.round(currentValue * harvestYield);
        currentValue += harvestAmount;
      }

      points.push({
        month: m,
        displayMonth: m % 12 === 0 ? `Año ${m / 12}` : '',
        value: currentValue,
        isHarvest,
        harvestAmount
      });
    }
    return points;
  }, [investment]);

  const totalReturn = data[data.length - 1].value - investment;
  const isGenesis = investment >= 30000;

  return (
    <section id="harvest-simulator" className="py-24 px-6 bg-surface-grey relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-digital/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-heritage/5 rounded-full blur-3xl translate-y-1/2" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 shadow-sm"
          >
            <TrendingUp size={14} className="text-emerald-digital" />
            Simulador de Rendimiento Real
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Simulador de Producción
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Proyecte el rendimiento de su participación. 
            Retornos estacionales basados en la productividad real de los cultivos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-white/70 backdrop-blur-xl border border-emerald-500/10 p-8 rounded-3xl shadow-xl shadow-slate-200/50"
          >
            <div className="mb-8">
              <div className="flex justify-between items-end mb-4">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Capital a Sembrar
                </label>
                <span className="text-3xl font-bold text-emerald-digital">
                  ${investment.toLocaleString()}
                </span>
              </div>
              <input 
                type="range" 
                min="1000" 
                max="100000" 
                step="1000"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-digital"
              />
              <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-300 uppercase tracking-tighter">
                <span>$1k</span>
                <span>$50k</span>
                <span>$100k</span>
              </div>
            </div>

            <AnimatePresence>
              {isGenesis && (
                <motion.div
                  initial={{ opacity: 0, height: 0, scale: 0.9 }}
                  animate={{ opacity: 1, height: 'auto', scale: 1 }}
                  exit={{ opacity: 0, height: 0, scale: 0.9 }}
                  className="mb-8 p-4 bg-gradient-to-br from-gold-heritage/10 to-transparent border border-gold-heritage/20 rounded-2xl relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:scale-110 transition-transform">
                    <Award size={40} className="text-gold-heritage" />
                  </div>
                  <div className="flex items-center gap-2 text-gold-heritage font-bold text-xs uppercase tracking-widest mb-1">
                    <Award size={14} />
                    <span>Estatus Genesis Activado</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Acceso a mercados mayoristas y multiplicador de yield institucional habilitado.
                  </p>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gold-heritage/10 rounded-full blur-xl" />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-6">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Retorno Proyectado (5 años)</p>
                <p className="text-2xl font-bold text-slate-900">+${totalReturn.toLocaleString()}</p>
                <div className="mt-2 flex items-center gap-1 text-emerald-digital text-xs font-bold">
                  <TrendingUp size={12} />
                  <span>22% APY Promedio</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-emerald-digital/5 rounded-2xl border border-emerald-digital/10">
                <Info size={16} className="text-emerald-digital shrink-0 mt-0.5" />
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Los dividendos se liquidan automáticamente tras cada cosecha semestral, reflejando la venta real de productos agrícolas en mercados internacionales.
                </p>
              </div>
            </div>

            <button className="w-full mt-8 py-4 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all group">
              Confirmar Proyección
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Chart Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-white/70 backdrop-blur-xl border border-emerald-500/10 p-8 rounded-3xl shadow-xl shadow-slate-200/50 h-[500px] flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Curva de Producción y Utilidades</h3>
                <p className="text-xs text-slate-400">Visualización de liquidaciones por campaña agrícola</p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-digital" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Valor Activo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gold-heritage" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Hito de Cosecha</span>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#E2E8F0" opacity={0.3} />
                  <XAxis 
                    dataKey="displayMonth" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fontWeight: 700, fill: '#94A3B8' }}
                    dy={10}
                  />
                  <YAxis 
                    hide 
                    domain={['dataMin - 1000', 'dataMax + 5000']} 
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#10B981', strokeWidth: 1, strokeDasharray: '5 5' }} />
                  <Area 
                    type="stepAfter" 
                    dataKey="value" 
                    stroke="#10B981" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                    animationDuration={1500}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest border-t border-slate-100 pt-6">
              <span>Inicio: ${investment.toLocaleString()}</span>
              <span>Proyección Final: ${data[data.length - 1].value.toLocaleString()}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
