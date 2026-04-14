import React from 'react';

const BrandCTA: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="reveal">
          <h2 className="text-3xl md:text-6xl font-black mb-6 tracking-tighter font-display leading-[1.1] uppercase italic text-white">
            Pronto para criar seu <br />
            <span className="text-brand-primary">próximo conteúdo?</span>
          </h2>
          <p className="text-white/40 text-base md:text-lg max-w-xl mx-auto leading-relaxed font-medium mb-12">
            Junte-se a milhares de criadores que já estão usando IA para produzir conteúdo profissional.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <button className="btn-premium px-12 py-5 text-lg group">
              <span className="flex items-center gap-2">
                Criar Conta Gratuitamente
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
            <p className="text-white/20 text-xs font-medium tracking-tight">
              Sem cartão de crédito necessário para começar.
            </p>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/10 blur-[150px] -z-10 animate-pulse" />
    </section>
  );
};

export default BrandCTA;
