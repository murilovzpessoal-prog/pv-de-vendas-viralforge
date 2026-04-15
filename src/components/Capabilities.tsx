import React from 'react';

const features = [
  {
    title: 'Fotos Ultra-Realistas',
    subtitle: 'Gere influencers com qualidade de estúdio profissional',
    description: 'Cada imagem sai com pele real, poros visíveis e expressões naturais. Parece foto de verdade porque a tecnologia foi feita pra isso.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: 'Vídeos com IA',
    subtitle: 'Transforme imagens estáticas em vídeos com movimento',
    description: 'Você cria a imagem e a Viral Forge dá vida a ela. Movimentos naturais, prontos pra Reels e TikTok, tudo em poucos segundos.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Controle Criativo Total',
    subtitle: 'Defina cada detalhe da sua criação',
    description: 'Escolha o rosto, a pose, o cenário, a roupa e o estilo. Você decide tudo e a IA executa exatamente como você imaginou.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'Melhoria de Pele',
    subtitle: 'Aperfeiçoe texturas com um clique',
    description: 'O Viral Forge Skin transforma qualquer imagem em algo absurdamente realista. Poros, micro-texturas e iluminação natural que eliminam aquele visual artificial.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Vozes Realistas',
    subtitle: 'Áudio natural com sotaque brasileiro',
    description: 'Crie narração e falas com vozes que soam de verdade. Masculinas, femininas, perfeitas para conteúdo UGC, anúncios e stories.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    )
  },
  {
    title: 'Velocidade Instantânea',
    subtitle: 'Resultados em segundos, não em horas',
    description: 'Pensou, criou. Menos de 10 segundos entre a sua ideia e o conteúdo pronto. Sem fila, sem espera, sem enrolação.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

const Capabilities: React.FC = () => {
  return (
    <section className="py-6 md:py-32 bg-transparent relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 md:mb-24 reveal">
          <p className="text-brand-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4">Tudo que você precisa</p>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter font-display text-white">
            Uma plataforma completa para criar <span className="gradient-text italic">conteúdo</span>
          </h2>
          <p className="text-white/70 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Fotos, vídeos, áudio e edição. Tudo com inteligência artificial, tudo em um só lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="reveal glass-card p-10 rounded-[32px] border border-white/[0.05] hover:border-brand-primary/30 transition-all duration-500 group relative"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/60 group-hover:text-brand-primary group-hover:border-brand-primary/40 transition-all duration-500 mb-8">
                {f.icon}
              </div>
              <h3 className="text-xl font-black mb-2 tracking-tight font-display text-white">{f.title}</h3>
              <p className="text-brand-primary text-sm font-bold mb-4 tracking-tight">
                {f.subtitle}
              </p>
              <p className="text-white/40 text-[14px] leading-relaxed font-medium">
                {f.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Cinematic Section Break */}
        <div className="mt-24 md:mt-40 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          <div className="reveal order-2 lg:order-1 text-center lg:text-left">
              <h2 className="text-4xl md:text-8xl font-black leading-[0.9] tracking-tighter italic mb-8 md:mb-10 font-display">
                <span className="text-white block">COPIE OS</span>
                <div className="my-3">
                  <span className="inline-block bg-brand-primary text-black px-6 md:px-8 py-2 rounded-2xl -rotate-1">
                    MOVIMENTOS
                  </span>
                </div>
                <span className="text-white block whitespace-nowrap">DO SEU VÍDEO</span>
              </h2>
             <p className="text-white/40 text-[14px] md:text-xl max-w-md lg:mx-0 mx-auto leading-relaxed font-medium mb-10 md:mb-12 px-4 md:px-0">
                Copie o movimento de qualquer vídeo e coloque seu personagem no mesmo movimento. Crie vídeos virais em segundos.
             </p>
             <a href="https://viralforgeai.space/" target="_blank" rel="noopener noreferrer">
               <button className="btn-premium px-10 py-5">
                 Saiba mais
               </button>
             </a>
          </div>
          <div className="reveal delay-2 order-1 lg:order-2">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-[48px] overflow-hidden glass-container p-3 group">
              <div className="absolute inset-0 bg-brand-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative h-full w-full rounded-[40px] overflow-hidden bg-[#0A0A0B]">
                <video 
                  src="https://zayraai.com/videos/motion-showcase-3.mp4?v=2" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
