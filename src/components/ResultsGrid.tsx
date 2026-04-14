import React from 'react';

const influencers = [
  { img: 'https://personiflow.com/assets/example-result-2-Bd59TzoL.jpg', name: 'Bruna' },
  { img: 'https://i.imgur.com/B5VleDT.png', name: 'Sofia' },
  { img: 'https://personiflow.com/assets/example-result-4-CbyAlhEj.jpg', name: 'Maiara' },
  { img: 'https://zayraai.com/images/influencer5.png', name: 'Luana' },
];

const ResultsGrid: React.FC = () => {
  return (
    <section className="py-6 md:py-24 bg-transparent relative overflow-hidden">
      {/* Accent Auras */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary/10 blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-secondary/10 blur-[150px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 reveal">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter font-display">
            Resultados que <span className="gradient-text italic">impulsionam</span>
          </h2>
          <p className="text-white/70 text-lg lg:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Influenciadores 100% digitais criados com a Viral Forge. <br />
            Sem fotos reais. Sem modelos. Sem estúdio. Tudo criado com a Viral Forge
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {influencers.map((item, i) => (
            <div 
              key={i} 
              className={`reveal group relative aspect-[3/4] rounded-[48px] overflow-hidden glass-card shadow-2xl transition-all duration-700`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <img 
                src={item.img} 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" 
                alt="AI Influencer"
              />
              {/* Overlay Gradient - Darker for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              {/* Content Overlay - Static visibility as per screenshot */}
              <div className="absolute inset-x-0 bottom-0 p-10">
                 <p className="text-[10px] font-black tracking-[0.3em] text-brand-primary uppercase mb-1">CRIADA POR IA</p>
                 <h3 className="text-3xl font-black font-display uppercase tracking-tighter text-white">{item.name}</h3>
              </div>

              {/* Subtle Inner Glow on Hover */}
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 rounded-[48px] transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsGrid;
