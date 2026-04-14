import React from 'react';

const features = [
  {
    title: 'Vídeos Cinematográficos',
    description: 'Transforme texto em movimentos fluídos e realistas com um clique.',
    icon: (
      <svg className="w-10 h-10 text-brand-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    tag: 'Popular'
  },
  {
    title: 'Imagens em Ultra HD',
    description: 'Gere fotos artísticas e realistas com detalhamento impressionante.',
    icon: (
      <svg className="w-10 h-10 text-brand-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    tag: 'Estúdio'
  },
  {
    title: 'Upscale Magnificado',
    description: 'Aumente a resolução de suas criações mantendo a nitidez perfeita.',
    icon: (
      <svg className="w-10 h-10 text-brand-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    ),
    tag: 'Expert'
  }
];

const FeatureShowcase: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Ferramentas de <span className="text-brand-lime italic">Próxima Geração</span></h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">Tudo o que você precisa para dominar a criação de conteúdo com inteligência artificial.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div 
              key={feature.title} 
              className="group relative glass p-8 rounded-[32px] hover:border-brand-lime/30 transition-all hover:-translate-y-2 cursor-pointer"
            >
              <div className="absolute top-6 right-8 text-[10px] font-bold tracking-widest uppercase py-1 px-3 bg-white/10 rounded-full border border-white/5 opacity-50 group-hover:opacity-100 group-hover:bg-brand-lime/20 group-hover:text-brand-lime transition-all">
                {feature.tag}
              </div>
              
              <div className="mb-6 p-4 bg-white/5 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-brand-lime transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-white/50 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="mt-8 flex items-center gap-2 text-sm font-bold text-white/30 group-hover:text-brand-lime transition-colors">
                <span>Explorar Recurso</span>
                <svg className="w-4 h-4 translate-y-px" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
