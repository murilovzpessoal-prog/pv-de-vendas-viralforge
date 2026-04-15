import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 pt-6 pb-2 md:py-6`}>
      <div className={`mx-auto max-w-[95%] md:max-w-[1000px] transition-all duration-500 border ${
        isScrolled 
        ? 'px-4 md:px-8 py-2 md:py-3 bg-white/[0.08] backdrop-blur-2xl border-white/20 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
        : 'px-4 md:px-6 py-2 bg-white/[0.03] backdrop-blur-lg border-white/10 rounded-2xl'
      }`}>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 group cursor-pointer shrink-0" onClick={() => window.scrollTo(0,0)}>
            <div className="w-8 h-8 md:w-10 md:h-10 overflow-hidden group-hover:scale-110 transition-transform duration-500 flex items-center justify-center p-1 shrink-0">
              <img src="https://i.imgur.com/9EBJgrR.png" alt="Viral Forge Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight font-display text-white/90 group-hover:text-white transition-all duration-500 whitespace-nowrap">
              Viral Forge
            </span>
          </div>

          <div className="flex items-center gap-4 md:gap-6 shrink-0">
            <a href="https://viralforgeai.space/" target="_blank" rel="noopener noreferrer" className="text-[10px] md:text-xs font-bold text-white/60 hover:text-white transition-colors tracking-wide md:tracking-widest uppercase">
              Entrar
            </a>

            <a href="https://viralforgeai.space/" target="_blank" rel="noopener noreferrer">
              <button className="btn-premium px-3 py-1.5 md:px-8 md:py-3 text-[9px] md:text-[10px] tracking-wider md:tracking-[0.2em] whitespace-nowrap">
                Começar Agora
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
