import React, { useState, useRef } from 'react';

const samples = [
  { video: 'https://zayraai.com/videos/motion-zaza.mp4' },
  { video: 'https://zayraai.com/videos/motion-3.mp4' },
  { video: 'https://zayraai.com/videos/motion-cara.mp4' },
];

const voices = [
  { 
    title: 'Voz Masculina Profissional', 
    sub: 'Tom claro e objetivo para apresentações',
    audioUrl: '/audio/voz-masculina.mp3'
  },
  { 
    title: 'Voz Feminina Natural', 
    sub: 'Expressiva e envolvente para narrações',
    audioUrl: '/audio/voz-feminina.mp3'
  },
  { 
    title: 'Narração Dinâmica', 
    sub: 'Ideal para comerciais e anúncios',
    audioUrl: '/audio/narracao.mp3'
  }
];

const Expressions: React.FC = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = (index: number, url: string) => {
    if (!url) return;

    if (playingIndex === index) {
      // Se clicar no mesmo e estiver tocando, pausa
      audioRef.current?.pause();
      setPlayingIndex(null);
    } else {
      // Se tiver outro tocando, para ele
      if (audioRef.current) {
        audioRef.current.pause();
      }

      // Cria novo áudio ou atualiza o atual
      if (!audioRef.current) {
        audioRef.current = new Audio(url);
      } else {
        audioRef.current.src = url;
      }

      audioRef.current.play();
      setPlayingIndex(index);

      // Reset quando o áudio acabar
      audioRef.current.onended = () => {
        setPlayingIndex(null);
      };
    }
  };

  return (
    <section className="py-6 md:py-32 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-24 reveal">
          <h2 className="text-3xl md:text-6xl font-black leading-[1.1] tracking-tighter italic font-display">
            <span className="text-white block">MOVIMENTOS E</span>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mt-2">
               <span className="inline-block bg-brand-primary text-black px-4 md:px-6 py-1 rounded-xl -rotate-1 text-[22px] md:text-5xl">EXPRESSÕES</span>
               <span className="text-white mt-2 md:mt-0">REALISTAS</span>
            </div>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed font-medium mt-8">
            Crie vídeos com expressões e movimentos realistas em minutos, prontos para serem postados e viralizar nas redes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto items-center">
          {samples.map((s, i) => (
            <div 
              key={i} 
              className={`reveal relative aspect-[3/4] rounded-[32px] md:rounded-[48px] overflow-hidden glass-container p-2 md:p-3 group transition-all duration-1000 ${
                i === 1 ? 'md:scale-110 md:z-10 shadow-[0_0_80px_rgba(139,92,246,0.15)]' : 'md:scale-95 opacity-80 hover:opacity-100'
              }`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="relative h-full w-full rounded-[24px] md:rounded-[40px] overflow-hidden bg-[#0A0A0B]">
                <video 
                  src={s.video} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" 
                />
              </div>
              
              {/* Overlay Badge */}
              <div className="absolute top-6 md:top-8 left-6 md:left-8 flex items-center gap-2 px-3 py-1.5 glass-container rounded-full text-[8px] font-black uppercase tracking-[0.2em] text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                Live Render
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 md:mt-48 text-center reveal">
           {/* Voices Badge */}
           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-container border-white/10 mb-8 group hover:border-brand-primary/30 transition-colors cursor-default">
              <span className="text-brand-primary text-xs">🔊</span>
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-colors">Vozes IA</span>
           </div>
           
           <h2 className="text-3xl md:text-7xl font-black leading-[1.1] tracking-tighter italic font-display mb-6">
              VOZES QUE PARECEM <span className="bg-brand-primary text-black px-4 md:px-6 py-1 rounded-xl inline-block transform -rotate-1 ml-2">REAIS</span>
           </h2>
           <p className="text-white/40 text-[13px] md:text-base max-w-lg mx-auto leading-relaxed font-medium mb-12 md:mb-16 px-6 md:px-0">
              Áudios gerados com a Viral Forge. <br className="hidden md:block" /> Ouça e surpreenda-se com a qualidade.
           </p>

           <div className="max-w-2xl mx-auto space-y-4">
              {voices.map((v, i) => (
                <div 
                  key={i} 
                  onClick={() => toggleAudio(i, v.audioUrl)}
                  className={`glass-card p-6 flex items-center gap-6 group hover:border-brand-primary/30 transition-all cursor-pointer rounded-[24px] ${
                    playingIndex === i ? 'border-brand-primary/40 bg-brand-primary/5 shadow-[0_0_40px_rgba(139,92,246,0.1)]' : ''
                  }`}
                >
                   <div className={`w-14 h-14 rounded-full glass-container flex items-center justify-center text-white/80 transition-all border border-white/5 ${
                     playingIndex === i ? 'bg-brand-primary text-black scale-110' : 'group-hover:bg-brand-primary group-hover:text-black'
                   }`}>
                      {playingIndex === i ? (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <rect x="6" y="4" width="4" height="16" />
                          <rect x="14" y="4" width="4" height="16" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                   </div>
                   <div className="text-left">
                      <h4 className={`text-lg font-black tracking-tight font-display transition-colors ${
                        playingIndex === i ? 'text-brand-primary' : 'text-white'
                      }`}>{v.title}</h4>
                      <p className="text-white/40 text-xs font-medium">{v.sub}</p>
                   </div>
                   
                   {/* Animated Sound Wave (Visible when playing) */}
                   {playingIndex === i && (
                     <div className="ml-auto flex items-center gap-1 h-4">
                       {[1, 2, 3, 4].map((bar) => (
                         <div 
                           key={bar}
                           className="w-1 bg-brand-primary rounded-full animate-audio-bar"
                           style={{ animationDelay: `${bar * 0.1}s` }}
                         />
                       ))}
                     </div>
                   )}
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Expressions;
