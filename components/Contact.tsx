import React, { useState } from 'react';
import { Button } from './Button';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 bg-black text-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Info Section */}
          <div>
            <span className="text-amber-500 text-xs tracking-[0.3em] uppercase block mb-6">Lokalizacja & Kontakt</span>
            <h2 className="text-5xl font-serif mb-12">Odwiedź Nas</h2>
            
            <div className="space-y-12 font-light text-neutral-300">
              <div>
                <h4 className="text-white text-lg font-serif mb-2">Adres</h4>
                <p>ul. Złota 44</p>
                <p>00-001 Warszawa</p>
              </div>

              <div>
                <h4 className="text-white text-lg font-serif mb-2">Kontakt</h4>
                <p className="hover:text-amber-500 transition-colors cursor-pointer">+48 123 456 789</p>
                <p className="hover:text-amber-500 transition-colors cursor-pointer">kontakt@goldbeauty.pl</p>
              </div>

              <div>
                <h4 className="text-white text-lg font-serif mb-2">Godziny</h4>
                <div className="flex justify-between max-w-xs border-b border-neutral-800 pb-2 mb-2">
                  <span>Poniedziałek - Piątek</span>
                  <span>9:00 - 20:00</span>
                </div>
                <div className="flex justify-between max-w-xs border-b border-neutral-800 pb-2">
                  <span>Sobota</span>
                  <span>10:00 - 15:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Minimalist Form */}
          <div className="pt-10 lg:pt-0">
             <h3 className="text-2xl font-serif mb-8 text-white">Napisz do nas</h3>
             <form onSubmit={handleSubmit} className="space-y-10">
                <div className="group">
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full bg-transparent border-b border-neutral-700 text-white py-4 focus:border-amber-500 focus:outline-none transition-colors placeholder-neutral-600"
                    placeholder="IMIĘ I NAZWISKO"
                  />
                </div>
                <div className="group">
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full bg-transparent border-b border-neutral-700 text-white py-4 focus:border-amber-500 focus:outline-none transition-colors placeholder-neutral-600"
                    placeholder="ADRES EMAIL"
                  />
                </div>
                <div className="group">
                  <textarea 
                    id="message"
                    rows={3}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-transparent border-b border-neutral-700 text-white py-4 focus:border-amber-500 focus:outline-none transition-colors resize-none placeholder-neutral-600"
                    placeholder="WIADOMOŚĆ"
                  ></textarea>
                </div>
                <Button type="submit" variant="outline" className="w-full md:w-auto">
                  {submitted ? 'Wysłano' : 'Wyślij Wiadomość'}
                </Button>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
};