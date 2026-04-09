import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black font-bold text-sm">A</div>
            <span className="text-white font-bold tracking-tighter text-lg">Aetheris</span>
          </div>
          <div className="text-xs text-slate-600">
            © 2026 Aetheris AgriTech. Todos los derechos reservados.
          </div>
          <div className="flex gap-6 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
