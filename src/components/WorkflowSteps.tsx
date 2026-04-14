import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Descreva sua ideia',
    description: 'Escreva o que você quer criar ou escolha um template pronto. A Viral Forge entende você.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'A IA cria pra você',
    description: 'Em segundos, a Viral Forge gera fotos, vídeos ou áudios com qualidade profissional.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'Baixe e publique',
    description: 'Exporte em alta resolução e publique direto nas suas redes ou anúncios.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    )
  }
];

const WorkflowSteps: React.FC = () => {
  return (
    <section className="py-6 md:py-32 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-24 reveal">
          <p className="text-brand-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4">Como funciona</p>
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter font-display uppercase italic text-white">
            Simples assim. <span className="text-brand-primary">3 passos.</span>
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Central Connecting Line */}
          <div className="hidden md:block absolute top-20 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

          {steps.map((s, i) => (
            <div 
              key={i} 
              className="reveal relative p-12 pt-16 rounded-[40px] glass-card group transition-all duration-700 hover:border-brand-primary/20 text-center"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Top Ambient Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-brand-primary/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Icon Container with Number */}
              <div className="relative inline-block mb-12 z-10">
                 <div className="w-16 h-16 rounded-full glass-container border-white/10 flex items-center justify-center text-white/40 group-hover:text-brand-primary group-hover:border-brand-primary/40 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-500 bg-white/[0.02]">
                    {s.icon}
                 </div>
                 {/* Number Badge */}
                 <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-[10px] font-black font-display text-white/40 group-hover:text-brand-primary transition-colors">
                    {s.number}
                 </div>
              </div>
              
              <h3 className="text-2xl font-black mb-4 tracking-tight font-display text-white">{s.title}</h3>
              <p className="text-white/30 text-base leading-relaxed font-medium px-4">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSteps;
