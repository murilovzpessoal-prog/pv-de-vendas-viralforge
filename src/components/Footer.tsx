import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-transparent border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 text-white font-black italic tracking-tighter text-xl font-display">
              VIRAL<span className="text-brand-primary">FORGE</span>
            </div>
            <p className="text-white/40 text-xs leading-relaxed max-w-xs font-medium">
              Liderando a revolução criativa com inteligência artificial avançada para produtores de conteúdo de alta performance.
            </p>
          </div>

          <div>
             <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">Produto</h4>
             <ul className="space-y-4 text-white/40 text-xs font-medium">
               <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Galeria</a></li>
               <li><a href="#" className="hover:text-white transition-colors">API</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">Suporte</h4>
             <ul className="space-y-4 text-white/40 text-xs font-medium">
               <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">Redes Sociais</h4>
             <div className="flex gap-3">
               <a href="#" className="w-9 h-9 bg-white/[0.03] border border-white/5 rounded-full flex items-center justify-center hover:bg-brand-primary/10 hover:text-brand-primary transition-all">
                 <span className="text-[10px] font-black">IG</span>
               </a>
               <a href="#" className="w-9 h-9 bg-white/[0.03] border border-white/5 rounded-full flex items-center justify-center hover:bg-brand-primary/10 hover:text-brand-primary transition-all">
                 <span className="text-[10px] font-black">TK</span>
               </a>
             </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] font-medium tracking-tight">
            © 2026 VIRAL FORGE. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 text-white/20 text-[10px] font-medium tracking-tight">
            <span>Desenvolvido por Antigravity</span>
            <div className="w-1 h-1 rounded-full bg-brand-primary" />
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
