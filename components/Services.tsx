import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-neutral-950 border-t border-neutral-900">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <span className="text-amber-500 text-xs tracking-[0.3em] uppercase block mb-4">Menu Zabiegowe</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Wybierz <span className="italic text-neutral-600">Swoje</span> Piękno</h2>
          </div>
          <p className="text-neutral-500 text-sm max-w-sm mt-6 md:mt-0 leading-relaxed text-right">
            Ceny mogą ulec zmianie w zależności od indywidualnych potrzeb i zużycia materiałów. Konsultacja przed zabiegiem jest wliczona w cenę.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {SERVICES.map((category, index) => (
            <div key={index} className="group">
              <div className="flex items-center gap-4 mb-8 border-b border-neutral-800 pb-4">
                 <span className="text-amber-500">{category.icon}</span>
                 <h3 className="text-2xl font-serif text-white">{category.title}</h3>
              </div>
              
              <ul className="space-y-6">
                {category.items.map((item, idx) => (
                  <li key={idx} className="group/item">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="text-neutral-300 font-light text-lg group-hover/item:text-amber-500 transition-colors">{item.name}</span>
                      <div className="flex-grow mx-4 border-b border-dotted border-neutral-800"></div>
                      <span className="text-white font-serif text-lg">{item.price}</span>
                    </div>
                    <div className="flex justify-between">
                       <p className="text-xs text-neutral-500 font-light tracking-wide">{item.description}</p>
                       <span className="text-xs text-neutral-600 whitespace-nowrap ml-2">{item.duration}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
             <a href="#contact" className="inline-block border-b border-white pb-1 text-white text-sm tracking-[0.2em] uppercase hover:text-amber-500 hover:border-amber-500 transition-colors">
                Umów konsultację indywidualną
             </a>
        </div>
      </div>
    </section>
  );
};