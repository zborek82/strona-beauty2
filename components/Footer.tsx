import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-neutral-800 text-center">
       <div className="container mx-auto px-6">
          <h2 className="text-2xl font-serif font-bold text-white tracking-widest mb-6">
            GOLD <span className="text-amber-500">BEAUTY</span>
          </h2>
          <p className="text-gray-500 text-sm mb-6">&copy; {new Date().getFullYear()} Gold Beauty Studio. Wszystkie prawa zastrzeżone.</p>
          <div className="flex justify-center gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-amber-500 transition-colors">Polityka Prywatności</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Regulamin</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Facebook</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Instagram</a>
          </div>
       </div>
    </footer>
  );
};