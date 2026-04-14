import React, { useState } from 'react';

const samples = [
  { id: 1, img: 'https://zayraai.com/images/upscale-after-3.png' },
  { id: 2, img: 'https://zayraai.com/images/upscale-after-2.png' },
  { id: 3, img: 'https://zayraai.com/images/upscale-after-1.png' },
];

const ComparisonCard: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
  const [sliderPos, setSliderPos] = useState(50);
  
  return (
    <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden glass-container p-2 group select-none">
      <div className="relative h-full w-full rounded-[32px] overflow-hidden">
        {/* After Image - Now we show the "After" image as the background and clip the "Before" overlay */}
        <div className="absolute inset-0 bg-cover bg-center grayscale-0 blur-0" style={{ backgroundImage: `url(${imageUrl})` }} />
        
        {/* Before Image Overlay - Blurred and Grayscale - Clipped from the right */}
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale blur-[4px] opacity-100 z-10 pointer-events-none"
          style={{ 
            backgroundImage: `url(${imageUrl})`,
            clipPath: `inset(0 0 0 ${sliderPos}%)`
          }} 
        />

        {/* Slider Controller - Full Height and Width for interaction */}
        <input 
          type="range" 
          min="0" max="100" 
          step="0.1"
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          className="absolute inset-0 z-30 opacity-0 cursor-ew-resize w-full h-full"
        />
        
        {/* Slider Handle Visual - A vertical line with a centered pill */}
        <div 
          className="absolute inset-y-0 z-20 pointer-events-none w-[2px] bg-white transition-all duration-100"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
             <div className="flex items-center justify-center text-black">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7l-4 5 4 5M16 7l4 5-4 5" />
                </svg>
             </div>
          </div>
        </div>

        {/* Labels with Glass Morph */}
        <div className="absolute top-6 left-6 z-20 px-4 py-2 glass-container rounded-full text-[10px] font-black tracking-[0.2em] text-white/60 uppercase">144p</div>
        <div className="absolute top-6 right-6 z-20 px-5 py-2 glass-container bg-brand-primary/20 border-brand-primary/40 rounded-full text-[10px] font-black tracking-[0.2em] text-white uppercase shadow-[0_0_20px_rgba(139,92,246,0.2)]">4K Ultra</div>
      </div>
    </div>
  );
};

const UpscaleSlider: React.FC = () => {
  return (
    <section className="py-6 md:py-32 bg-transparent overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-24 reveal">
          <p className="text-brand-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4">Nitidez Absoluta</p>
          <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter font-display">
            A magia do <span className="gradient-text italic">UltraVision</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto leading-relaxed font-medium">
            Restaure qualquer imagem para 4K Ultra HD instantaneamente. <br /> Arraste o slider para comparar a diferença.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-0">
          {samples.map((s, i) => (
            <div key={s.id} className="reveal" style={{ animationDelay: `${i * 0.1}s` }}>
              <ComparisonCard imageUrl={s.img} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpscaleSlider;
