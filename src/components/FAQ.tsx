import React, { useState } from 'react';

const faqs = [
  {
    question: "Preciso instalar algum programa?",
    answer: "Não. A Viral Forge é 100% online. Você acessa pelo seu navegador de qualquer computador ou celular e já começa a criar na hora."
  },
  {
    question: "Em quanto tempo consigo criar uma influenciadora?",
    answer: "Em menos de 5 minutos você já tem suas primeiras gerações ultra-realistas prontas para serem publicadas."
  },
  {
    question: "Posso usar para anúncios pagos?",
    answer: "Com certeza. Nossos criativos são otimizados para alta conversão em plataformas como Meta Ads, TikTok Ads e Google Ads."
  },
  {
    question: "Posso acessar pelo celular?",
    answer: "Sim, a Viral Forge é totalmente responsiva e você pode criar seus influencers diretamente do seu smartphone com a mesma qualidade."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-6 md:py-32 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16 md:mb-20 reveal">
          <h2 className="text-3xl md:text-6xl font-black mb-6 tracking-tighter font-display text-white">
            Dúvidas <span className="gradient-text italic">frequentes</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="reveal glass-card rounded-[32px] overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-8 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-bold tracking-tight text-white/80 group-hover:text-white transition-colors">
                  {faq.question}
                </span>
                <span className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-500 bg-white/5 ${openIndex === i ? 'rotate-180' : ''}`}>
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                   </svg>
                </span>
              </button>
              
              <div className={`transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-8 pt-2 text-white/40 font-medium leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
