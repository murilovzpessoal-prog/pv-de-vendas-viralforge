import React from 'react';

const testimonials = [
  {
    name: 'Camila Santos',
    initials: 'CS',
    text: 'Nunca imaginei que criar influencers digitais seria tão fácil. A qualidade é impressionante, ninguém percebe que é IA!',
  },
  {
    name: 'Rafael Costa',
    initials: 'RC',
    text: 'Estava gastando fortunas com editores de vídeo. Com a Viral Forge economizo tempo e dinheiro, e ainda escalo muito mais rápido.',
  },
  {
    name: 'Ana Beatriz',
    initials: 'AB',
    text: 'Finalmente uma ferramenta que entende as dores de quem trabalha com conteúdo. Simples, rápida e eficiente.',
  },
  {
    name: 'Lucas Mendes',
    initials: 'LM',
    text: 'A Viral Forge mudou completamente minha operação. Consigo criar dezenas de vídeos em minutos. Meu engajamento subiu 40% no primeiro mês.',
  },
  {
    name: 'Pedro Oliveira',
    initials: 'PO',
    text: 'Triplicou minha produção de criativos. Antes fazia 5 por semana, agora faço 50. Simplesmente incrível!',
  },
  {
    name: 'Mariana Silva',
    initials: 'MS',
    text: 'Os avatares são extremamente realistas. Meus clientes ficam impressionados com a qualidade dos vídeos.',
  },
  {
    name: 'Bruno Ferreira',
    initials: 'BF',
    text: 'Reduzi meu custo por lead em 60% depois que comecei a usar a Viral Forge. A escala de testes faz toda diferença.',
  },
  {
    name: 'Julia Martins',
    initials: 'JM',
    text: 'Como infoprodutora, a Viral Forge me permite criar dezenas de variações de criativos para testar diferentes ganchos rapidamente.',
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-6 md:py-32 bg-transparent relative overflow-hidden">
      {/* Brand Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-primary/5 blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-24 reveal">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter font-display uppercase italic">
             O que nossos <span className="text-brand-primary">criadores</span> dizem
          </h2>
          <p className="text-white/40 text-[14px] md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
             Veja como a Viral Forge está transformando a criação de conteúdo digital
          </p>
        </div>
      </div>

      {/* Full-Width Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* Fading Edges */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-background via-background/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-background via-background/80 to-transparent z-20 pointer-events-none" />

        <div className="space-y-8">
          {/* Row 1 - Left to Right */}
          <div className="flex gap-6">
            <div className="flex gap-6 animate-marquee">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div 
                  key={i} 
                  className="flex-none w-[320px] glass-card p-8 rounded-[32px] group hover:border-brand-primary/20 transition-all duration-500"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center font-bold text-xs text-brand-primary">
                      {t.initials}
                    </div>
                    <span className="font-black text-xs uppercase tracking-tight text-white/90">{t.name}</span>
                  </div>
                  <div className="flex gap-1 mb-4 text-yellow-500">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/40 text-[13px] font-medium leading-relaxed italic">
                    "{t.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Right to Left */}
          <div className="flex gap-6">
            <div className="flex gap-6 animate-marquee-reverse">
              {[...testimonials, ...testimonials].reverse().map((t, i) => (
                <div 
                  key={i} 
                  className="flex-none w-[320px] glass-card p-8 rounded-[32px] group hover:border-brand-primary/20 transition-all duration-500"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center font-bold text-xs text-brand-primary">
                      {t.initials}
                    </div>
                    <span className="font-black text-xs uppercase tracking-tight text-white/90">{t.name}</span>
                  </div>
                  <div className="flex gap-1 mb-4 text-yellow-500">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/40 text-[13px] font-medium leading-relaxed italic">
                    "{t.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
