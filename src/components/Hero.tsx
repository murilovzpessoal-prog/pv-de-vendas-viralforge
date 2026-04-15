import React, { useEffect } from 'react';

const Hero: React.FC = () => {
  /* ── Load VTurb SmartPlayer Script ── */
  useEffect(() => {
    const scriptId = "vturb-player-script";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "text/javascript";
    script.src = "https://scripts.converteai.net/9f104f3c-6dae-4e86-bc54-251dfbade0f0/players/69dfe713e537066c4a8b1bd3/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Optional: cleanup if needed, though usually not for global scripts
    };
  }, []);

  return (
    <section className="relative pt-24 md:pt-48 pb-8 md:pb-32 overflow-hidden">
      {/* Brand Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-primary/10 blur-[200px] rounded-full -z-10 animate-pulse" />

      <div className="container mx-auto px-6 relative">
        <div className="absolute inset-0 bg-grid opacity-20 -z-10" />
      </div>

      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-screen pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-brand-primary/20 blur-[180px] rounded-full animate-pulse-slow" />
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-brand-secondary/15 blur-[150px] rounded-full animate-pulse-slow delay-700" />
      </div>

      <div className="container mx-auto px-6 flex flex-col items-center text-center relative z-10 pt-4 md:pt-0">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full max-w-4xl aspect-video glow-aura -z-10 opacity-30" />

        {/* Animated Badge */}
        <div className="reveal flex items-center gap-2 px-5 py-2 rounded-full glass-container mb-8 md:mb-12 border border-white/10 hover:border-brand-primary/30 transition-colors group cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary" />
          </span>
          <span className="text-[9px] md:text-[10px] font-black tracking-[0.3em] text-white/60 group-hover:text-white transition-colors uppercase">
            A nova era da IA chegou
          </span>
        </div>

        {/* Cinematic Headline */}
        <h1 className="reveal delay-1 font-black leading-[1.05] tracking-tighter mb-8 md:mb-10 w-full max-w-[95vw] md:max-w-none font-display text-center mx-auto">
          <span className="block text-white text-[38px] sm:text-5xl md:text-7xl mb-1 md:mb-2">Crie</span>
          <span className="block text-white text-[34px] sm:text-5xl md:text-7xl mb-1">influenciadoras em</span>
          <span className="block italic bg-gradient-to-r from-[#EC4899] via-[#C084FC] to-[#8B5CF6] bg-clip-text text-transparent text-glow-strong text-[34px] sm:text-5xl md:text-7xl pb-2">
            uma única plataforma
          </span>
        </h1>

        {/* Subtitle */}
        <p className="reveal delay-2 text-white/70 text-sm md:text-lg max-w-2xl mb-12 md:mb-14 font-medium leading-relaxed px-4 md:px-0">
          Gere imagem, vídeo, voz e motion em minutos — tudo em um único estúdio digital
        </p>

        {/* Action Group */}
        <div className="reveal delay-3 flex flex-col items-center gap-6 md:gap-8 mb-12 md:mb-28 w-full px-4 md:px-0">
          <a href="https://viralforgeai.space/" target="_blank" rel="noopener noreferrer" className="w-[85%] max-w-[300px] sm:w-auto">
            <button className="btn-premium w-full px-8 py-3 md:px-12 md:py-6 text-sm md:text-base tracking-[0.2em] font-black group shadow-[0_0_50px_rgba(139,92,246,0.3)]">
              Começar Agora <span className="inline-block transition-transform group-hover:translate-x-2 ml-2">→</span>
            </button>
          </a>

          <div className="hidden md:flex flex-col items-center gap-5">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#060508] overflow-hidden hover:scale-110 transition-transform duration-300">
                  <img src={`https://i.pravatar.cc/100?img=${i + 30}`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-[10px] font-black tracking-[0.3em] text-white/30 uppercase">
              Junte-se a <span className="text-white/80">22.000+</span> criadores
            </p>
          </div>
        </div>

        {/* Featured Video Vertical Showcase */}
        <div className="reveal delay-4 w-full max-w-xs sm:max-w-sm mx-auto px-4">
          <div className="relative aspect-[9/16] w-full group">
            {/* Glow Aura */}
            <div className="absolute inset-0 bg-brand-primary/20 blur-[100px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />

            <div className="relative h-full w-full glass-container rounded-[40px] p-2 border border-white/10 group-hover:border-white/20 transition-all duration-1000 shadow-[0_0_50px_rgba(139,92,246,0.15)]">
              <div className="relative h-full w-full rounded-[32px] overflow-hidden bg-[#0A0A0B]">
                {/* VTurb SmartPlayer Integration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full" style={{ 
                    // To handle horizontal videos in a vertical container without black bars,
                    // we apply a scale transform similar to what we did for Vimeo.
                    // VTurb injects an iframe that we want to zoom.
                    transform: 'scale(1.4)',
                    transformOrigin: 'center center'
                  }}>
                    <vturb-smartplayer id="vid-69dfe713e537066c4a8b1bd3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
