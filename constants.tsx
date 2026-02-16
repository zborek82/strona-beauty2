import React from 'react';
import { Sparkles, Palette, Flower2, Gem, Heart, Crown } from 'lucide-react';
import { ServiceCategory, Testimonial } from './types';

export const NAV_LINKS = [
  { name: 'Start', href: '#home' },
  { name: 'O nas', href: '#about' },
  { name: 'Usługi', href: '#services' },
  { name: 'Galeria', href: '#gallery' },
  { name: 'Kontakt', href: '#contact' },
];

export const SERVICES: ServiceCategory[] = [
  {
    title: 'Pielęgnacja Twarzy',
    icon: <Sparkles className="w-6 h-6" />,
    items: [
      { name: 'Oczyszczanie Wodorowe', price: '250 PLN', duration: '60 min', description: 'Głębokie oczyszczanie, dotlenienie i nawilżanie skóry.' },
      { name: 'Mezoterapia Mikroigłowa', price: '350 PLN', duration: '75 min', description: 'Intensywna rewitalizacja, redukcja blizn i zmarszczek.' },
      { name: 'Masaż Kobido', price: '200 PLN', duration: '60 min', description: 'Japoński lifting twarzy bez skalpela. Efekt widoczny od razu.' },
    ]
  },
  {
    title: 'Manicure & Pedicure',
    icon: <Palette className="w-6 h-6" />,
    items: [
      { name: 'Manicure Hybrydowy', price: '120 PLN', duration: '60 min', description: 'Opracowanie skórek, nadanie kształtu, malowanie pod skórki.' },
      { name: 'Manicure Japoński', price: '90 PLN', duration: '45 min', description: 'Regeneracja zniszczonej płytki, nadanie blasku.' },
      { name: 'Pedicure SPA', price: '180 PLN', duration: '90 min', description: 'Kąpiel, peeling, maska, masaż stóp i malowanie.' },
    ]
  },
  {
    title: 'Oprawa Oka',
    icon: <Flower2 className="w-6 h-6" />,
    items: [
      { name: 'Henna Pudrowa + Geometria', price: '100 PLN', duration: '60 min', description: 'Idealny kształt i kolor dopasowany do urody.' },
      { name: 'Laminacja Brwi', price: '150 PLN', duration: '60 min', description: 'Ujarzmienie niesfornych włosków, efekt "fluffy brows".' },
      { name: 'Lifting Rzęs + Botox', price: '180 PLN', duration: '75 min', description: 'Podkręcenie, farbowanie i odżywienie naturalnych rzęs.' },
    ]
  },
  {
    title: 'Pielęgnacja Ciała',
    icon: <Heart className="w-6 h-6" />,
    items: [
      { name: 'Endermologia (Masaz próżniowy)', price: '150 PLN', duration: '40 min', description: 'Redukcja cellulitu i ujędrnienie skóry.' },
      { name: 'Peeling całego ciała + Masaż', price: '220 PLN', duration: '60 min', description: 'Złuszczenie martwego naskórka i relaksacyjny masaż masłem shea.' },
      { name: 'Depilacja Laserowa (Nogi)', price: '300 PLN', duration: '45 min', description: 'Trwałe usuwanie owłosienia laserem diodowym.' },
    ]
  },
    {
    title: 'Makijaż',
    icon: <Crown className="w-6 h-6" />,
    items: [
      { name: 'Makijaż Okazjonalny', price: '200 PLN', duration: '60 min', description: 'Trwały makijaż wieczorowy, podkreślający atuty.' },
      { name: 'Makijaż Ślubny', price: '250 PLN', duration: '90 min', description: 'Perfekcyjny look panny młodej, utrwalony fixerem.' },
      { name: 'Lekcja Makijażu', price: '400 PLN', duration: '180 min', description: 'Nauka makijażu dziennego i wieczorowego na własnych kosmetykach.' },
    ]
  },
    {
    title: 'Pakiety VIP',
    icon: <Gem className="w-6 h-6" />,
    items: [
      { name: 'Dzień w SPA (Twarz + Ciało)', price: '500 PLN', duration: '180 min', description: 'Masaż Kobido, Peeling ciała, Manicure SPA.' },
      { name: 'Metamorfoza', price: '600 PLN', duration: '240 min', description: 'Lifting rzęs, Henna, Manicure, Pedicure i Makijaż.' },
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: 'Anna Kowalska', text: 'Najlepszy salon w mieście! Obsługa profesjonalna, a efekty zabiegów przechodzą najśmielsze oczekiwania. Polecam masaż Kobido – po jednej wizycie twarz wygląda na wypoczętą jak po urlopie!', rating: 5 },
  { id: 2, name: 'Marta Nowak', text: 'Cudowna atmosfera i piękne, luksusowe wnętrze. Manicure hybrydowy trzyma się idealnie przez 3 tygodnie, żadnych odprysków. Dziewczyny mają ogromny talent do zdobień.', rating: 5 },
  { id: 3, name: 'Karolina Wiśniewska', text: 'Indywidualne podejście do klienta to rzadkość, a tu czuję się zaopiekowana. Pani kosmetolog idealnie dobrała zabieg kwasami do mojej wrażliwej cery. Efekt "glow" gwarantowany.', rating: 5 },
  { id: 4, name: 'Ewa Zięba', text: 'Robiłam tutaj makijaż ślubny i byłam zachwycona. Wytrzymał całą noc zabawy bez poprawek! Do tego bardzo miła atmosfera, która pomogła mi się odstresować w tym ważnym dniu.', rating: 5 },
  { id: 5, name: 'Dominika S.', text: 'Polecam endermologię w Gold Beauty. Seria zabiegów zdziałała cuda na moje uda. Sprzęt jest nowoczesny, a obsługa bardzo kompetentna i dyskretna.', rating: 5 },
];