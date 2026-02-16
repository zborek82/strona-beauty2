import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-black text-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Text Section - Minimalist */}
          <div className="w-full lg:w-5/12 order-2 lg:order-1">
            <h2 className="text-sm text-amber-500 tracking-[0.3em] uppercase mb-6">Filozofia</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Sztuka <span className="italic text-neutral-500">pielęgnacji</span> <br/>
              w rytmie miasta.
            </h3>
            
            <div className="w-12 h-[1px] bg-amber-500 mb-8"></div>

            <p className="text-neutral-400 font-light leading-relaxed mb-8 text-sm md:text-base">
              Gold Beauty Studio to nie tylko salon kosmetyczny. To przestrzeń, w której czas zwalnia. 
              Inspirowani światowymi stolicami mody, stworzyliśmy miejsce surowe w formie, ale bogate w doświadczenia.
            </p>
            <p className="text-neutral-400 font-light leading-relaxed mb-10 text-sm md:text-base">
              Nasz zespół to artyści w swoim fachu. Używamy wyłącznie wyselekcjonowanych, niszowych marek kosmetycznych, 
              które gwarantują spektakularne efekty bez kompromisów.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-neutral-800 pt-8">
               <div>
                  <span className="block text-3xl font-serif text-amber-500 mb-1">8+</span>
                  <span className="text-xs uppercase tracking-widest text-neutral-500">Lat doświadczenia</span>
               </div>
               <div>
                  <span className="block text-3xl font-serif text-amber-500 mb-1">5k+</span>
                  <span className="text-xs uppercase tracking-widest text-neutral-500">Zadowolonych Klientek</span>
               </div>
            </div>
          </div>

          {/* Image Section - Sharp, tall */}
          <div className="w-full lg:w-7/12 order-1 lg:order-2">
            <div className="relative h-[600px] w-full">
              <img 
                src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2073&auto=format&fit=crop" 
                alt="Minimalist Beauty Salon Interior" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-amber-500/30 hidden lg:block"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};