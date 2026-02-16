import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image - Darker, moodier fashion shot */}
      <div className="absolute inset-0 z-0 opacity-60">
        <img 
          src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Beauty Portrait" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Subtle overlay lines for structure */}
      <div className="absolute inset-0 z-10 border-x border-white/5 container mx-auto pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center">
        
        <div className="mb-8 overflow-hidden">
          <span className="inline-block text-amber-500 text-xs md:text-sm tracking-[0.4em] uppercase font-medium animate-fade-in-up">
            Est. 2015 • Warszawa
          </span>
        </div>

        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white mb-8 leading-none tracking-tight mix-blend-difference">
          PONADCZASOWE <br />
          <span className="italic font-light text-amber-500">PIĘKNO</span>
        </h1>

        <p className="text-neutral-300 max-w-lg mx-auto mb-12 text-sm md:text-base leading-loose font-light tracking-wide">
          Doświadcz luksusu w najczystszej postaci. Holistyczne podejście do pielęgnacji, 
          które wydobywa Twoje naturalne piękno w surowym, eleganckim otoczeniu.
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          <Button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
            Nasze Usługi
          </Button>
          <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Rezerwacja
          </Button>
        </div>
      </div>
      
      {/* Bottom ticker/line */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/10 py-6">
        <div className="container mx-auto px-6 flex justify-between text-[10px] md:text-xs uppercase tracking-[0.2em] text-neutral-500">
          <span>Scroll Down</span>
          <span>Gold Beauty Studio</span>
        </div>
      </div>
    </section>
  );
};