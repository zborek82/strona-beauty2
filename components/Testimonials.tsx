import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-32 bg-neutral-950 relative overflow-hidden border-t border-neutral-900">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <Quote size={48} className="text-amber-500 mb-8 opacity-50" />
          
          <h2 className="text-sm text-neutral-400 tracking-[0.3em] uppercase mb-16">Głosy naszych klientów</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TESTIMONIALS.slice(0, 3).map((review) => (
              <div key={review.id} className="flex flex-col items-center">
                <div className="flex gap-1 mb-6 text-amber-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-white font-serif italic mb-8 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="w-12 h-[1px] bg-neutral-800 mb-4"></div>
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">{review.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};