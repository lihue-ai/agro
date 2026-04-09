import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'motion/react';
import { ArrowRight, Leaf, ShieldCheck, Cpu } from 'lucide-react';

// --- 3D Components ---

function AndeanTerrace() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Create a topographic-like mesh
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(10, 10, 40, 40);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      // Create terrace steps effect
      const z = Math.floor(Math.sqrt(x * x + y * y) * 2) / 2 * 0.5;
      pos.setZ(i, z + Math.sin(x * 0.5) * 0.2);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group rotation={[-Math.PI / 3, 0, 0]} position={[0, -1, 0]}>
      <mesh ref={meshRef} geometry={geometry}>
        <meshStandardMaterial 
          color="#10B981" 
          wireframe 
          transparent 
          opacity={0.4} 
          emissive="#10B981"
          emissiveIntensity={0.5}
        />
      </mesh>
      {/* Base solid layer for depth */}
      <mesh geometry={geometry} position={[0, 0, -0.05]}>
        <meshStandardMaterial color="#F8FAFC" transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <AndeanTerrace />
      </Float>
      
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
}

// --- UI Components ---

export default function AgriTechHero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950 flex items-center pt-20">
      
      {/* 3D Background Container */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas shadows dpr={[1, 2]}>
          <Scene />
        </Canvas>
      </div>

      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-digital/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold-heritage/5 rounded-full blur-[150px]" />
      </div>

      {/* Content Overlay */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-digital text-[10px] font-bold tracking-[0.2em] uppercase mb-12 backdrop-blur-md">
            <Cpu size={14} />
            <span>AgriTech & Smart Farming</span>
          </div>

          <div className="relative mb-12">
            {/* Title Background Effect */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-20 blur-3xl scale-110 pointer-events-none">
              <div className="w-full h-full bg-gradient-to-r from-emerald-digital/30 via-gold-heritage/20 to-emerald-digital/30 rounded-full" />
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif italic text-gold-heritage leading-[1.1] tracking-tight drop-shadow-[0_10px_30px_rgba(181,148,16,0.3)]">
              Rendimiento Agrícola, <br />
              <span className="text-white not-italic font-sans font-bold tracking-tighter">Optimizado por Tecnología.</span>
            </h1>
          </div>

          <p className="text-lg md:text-2xl text-slate-400 leading-relaxed mb-12 max-w-3xl mx-auto font-light">
            Participe en la producción de nuestra infraestructura AgriTech. 
            Fusionamos el respaldo jurídico de EE.UU. con la eficiencia operativa del agro moderno peruano.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('harvest-simulator')}
              className="px-10 py-5 bg-emerald-digital text-white rounded-full font-bold text-lg shadow-[0_20px_50px_rgba(16,185,129,0.3)] hover:bg-emerald-600 transition-all flex items-center justify-center gap-3 group"
            >
              Sembrar Capital Hoy
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <button 
              onClick={() => scrollToSection('traceability')}
              className="px-10 py-5 bg-white/5 text-white border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 backdrop-blur-md transition-all"
            >
              Ver Trazabilidad
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/5 pt-12 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-gold-heritage flex items-center justify-center gap-2">
                <ShieldCheck size={18} />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Seguridad</span>
              </div>
              <p className="text-sm text-slate-500">Wyoming LLC Structure</p>
            </div>
            <div className="space-y-2">
              <div className="text-gold-heritage flex items-center justify-center gap-2">
                <Leaf size={18} />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Impacto</span>
              </div>
              <p className="text-sm text-slate-500">100% Regenerativo</p>
            </div>
            <div className="space-y-2">
              <div className="text-gold-heritage flex items-center justify-center gap-2">
                <Cpu size={18} />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Tech</span>
              </div>
              <p className="text-sm text-slate-500">Blockchain Polygon</p>
            </div>
            <div className="space-y-2">
              <div className="text-gold-heritage flex items-center justify-center gap-2">
                <ArrowRight size={18} />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Yield</span>
              </div>
              <p className="text-sm text-slate-500">22% APY Proyectado</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 p-12 hidden lg:block">
        <div className="flex flex-col items-end gap-3">
          <div className="w-32 h-[1px] bg-gold-heritage/30" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold-heritage font-bold">
            Aetheris AgriTech © 2026
          </span>
        </div>
      </div>
    </section>
  );
}
