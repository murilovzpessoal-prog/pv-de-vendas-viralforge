import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResultsGrid from './components/ResultsGrid';
import Capabilities from './components/Capabilities';
import UpscaleSlider from './components/UpscaleSlider';
import Expressions from './components/Expressions';
import Testimonials from './components/Testimonials';
import WorkflowSteps from './components/WorkflowSteps';
import FAQ from './components/FAQ';
import BrandCTA from './components/BrandCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brand-primary/30 font-sans scroll-smooth relative bg-mesh overflow-x-hidden">
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-noise opacity-5" />
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Top Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-brand-primary/10 blur-[180px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-brand-secondary/10 blur-[180px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Middle Glows */}
        <div className="absolute top-[40%] right-[-5%] w-[40%] h-[40%] bg-brand-primary/10 blur-[150px] rounded-full" />
        <div className="absolute top-[60%] left-[-5%] w-[40%] h-[40%] bg-brand-secondary/10 blur-[150px] rounded-full" />
        
        {/* Bottom Glows */}
        <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-brand-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] left-[10%] w-[30%] h-[30%] bg-brand-accent/10 blur-[120px] rounded-full" />
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <ResultsGrid />
        <Capabilities />
        <UpscaleSlider />
        <Expressions />
        <WorkflowSteps />
        <Testimonials />
        <FAQ />
        <BrandCTA />
      </main>

      <Footer />
    </div>
  );
};

export default App;
