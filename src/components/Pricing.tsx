import React from 'react';

const plans = [
  {
    name: 'Essencial',
    price: '97',
    description: 'Comece sua jornada na nova era digital.',
    features: ['500 Créditos Mensais', 'Geração de Imagens Quad-HD', 'Suporte Especializado', 'Acesso à Comunidade'],
    highlight: false
  },
  {
    name: 'Pro',
    price: '197',
    description: 'Aferição profissional para criadores de elite.',
    features: ['2.500 Créditos Mensais', 'Geração de Vídeos 4K', 'Upscale Neural Avançado', 'Prioridade de Processamento'],
    highlight: true
  },
  {
    name: 'Master',
    price: '497',
    description: 'Domínio total para agências e estúdios.',
    features: ['Créditos Dinâmicos', 'Pipeline 8K Exclusivo', 'Mentorias Trimestrais', 'Early Access a Novos Modelos'],
    highlight: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 md:py-40 bg-background relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/10 blur-[200px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24 reveal">
          <p className="text-brand-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4">Escolha seu Nível</p>
          <h2 className="text-3xl md:text-6xl font-black mb-8 tracking-tighter uppercase font-display text-white">
            Planos de <span className="gradient-text italic">Performance</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {plans.map((p, i) => (
            <div 
              key={p.name}
              className={`reveal flex flex-col p-10 md:p-12 rounded-[40px] md:rounded-[48px] border transition-all duration-700 hover:scale-[1.02] ${
                p.highlight 
                ? 'bg-white/[0.04] border-brand-primary/40 shadow-[0_40px_100px_rgba(139,92,246,0.15)] z-10 md:scale-105' 
                : 'bg-white/[0.02] border-white/5 opacity-80 md:opacity-80 hover:opacity-100 hover:border-white/10'
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="mb-12">
                <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter font-display">{p.name}</h3>
                <p className="text-white/30 text-sm font-medium">{p.description}</p>
              </div>
              
              <div className="flex items-baseline gap-2 mb-16">
                <span className="text-white/20 text-lg font-black tracking-tighter">R$</span>
                <span className="text-7xl font-black tracking-tighter gradient-text leading-none">{p.price}</span>
                <span className="text-white/20 text-xs font-black uppercase tracking-widest">/mês</span>
              </div>

              <div className="space-y-6 mb-16 grow">
                {p.features.map(f => (
                  <div key={f} className="flex items-center gap-4 group/item">
                    <div className="p-1 rounded-full bg-brand-primary/10 text-brand-primary transition-colors group-hover/item:bg-brand-primary group-hover/item:text-black">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-bold text-white/60 group-hover/item:text-white transition-colors">{f}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-6 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all active:scale-95 ${
                p.highlight 
                ? 'btn-premium' 
                : 'bg-white/[0.05] text-white hover:bg-white/10 border border-white/10'
              }`}>
                Assinar Agora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
