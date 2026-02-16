import React from 'react';

const IMAGES = [
  { src: 'https://www.dropbox.com/scl/fi/qf9nzh7pkruhd172ikoic/Oczyszczanie-wodorowe-HydraFacial.png?rlkey=lf2608zorwsrolj4zmhg3tabt&st=rqa0is6i&raw=1', alt: 'Oczyszczanie Wodorowe' },
  { src: 'https://www.dropbox.com/scl/fi/iah5drk8j8llsqg1spnlm/Modelowanie-Ust.png?rlkey=elipihmosauicxplusu1eajiq&st=ol4skzug&raw=1', alt: 'Modelowanie Ust' },
  { src: 'https://www.dropbox.com/scl/fi/d0kgi6qzrvmkn5zrf0xgj/Mezoterapia-mikroig-owa.png?rlkey=mmerikjdsf9lk0ynn597ys7lq&st=hu8khth2&raw=1', alt: 'Mezoterapia Mikroigłowa' },
  { src: 'https://www.dropbox.com/scl/fi/mhv4qyo5d7dnqzh39i2j5/makijarz-profesjonalny.png?rlkey=a4h0y2ub2ifgs4dq9x87mvbm3&st=ree85fop&raw=1', alt: 'Makijaż Profesjonalny' },
  { src: 'https://www.dropbox.com/scl/fi/jqmogdonzvjf5vgbubqbs/Laminacja-Brwi.png?rlkey=n8iqvwkdlecl5hp40uccx85rj&st=dmrjbca9&raw=1', alt: 'Laminacja Brwi' },
  { src: 'https://www.dropbox.com/scl/fi/hgjir28bzk8s2gx4het71/Epilacja-Laserowa.png?rlkey=fbjprhfbzrdj1vq3pwv0ltkws&st=j09jb6ml&raw=1', alt: 'Epilacja Laserowa' },
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="bg-black pb-32">
       {/* Full width header style */}
       <div className="py-20 text-center border-t border-b border-neutral-900 mb-12">
            <h2 className="text-4xl font-serif text-white tracking-widest uppercase">Portfolio</h2>
            <p className="text-amber-500 text-xs tracking-[0.4em] mt-4 uppercase">Selected Works</p>
       </div>

      <div className="container mx-auto px-6 md:px-12">
        {IMAGES.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {IMAGES.map((img, index) => (
              <div 
                key={index} 
                className="relative group overflow-hidden h-80 md:h-96"
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
                {/* Minimalist overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="border border-white/30 p-4 w-[90%] h-[90%] flex items-center justify-center">
                      <span className="text-white font-serif text-xl tracking-wider uppercase">{img.alt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-40 border border-neutral-900 border-dashed">
             <p className="text-neutral-600 uppercase tracking-widest text-xs">Czekam na nowe zdjęcia...</p>
          </div>
        )}
      </div>
    </section>
  );
};