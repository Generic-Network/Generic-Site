import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const cardCount = 5;
  
  // Farben für die Karten - dezent für weiße Website
  const cardColors = [
    'bg-blue-50 border-blue-200',
    'bg-gray-50 border-gray-200',
    'bg-purple-50 border-purple-200',
    'bg-amber-50 border-amber-200',
    'bg-emerald-50 border-emerald-200'
  ];
  
  const cardTitles = [
    'Karte 1',
    'Karte 2',
    'Karte 3',
    'Karte 4',
    'Karte 5'
  ];
  
  // Überprüfe die Bildschirmgröße beim Laden und bei Größenänderungen
  const checkScreenSize = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);
  
  useEffect(() => {
    // Initialer Check der Bildschirmgröße
    checkScreenSize();
    
    // Event-Listener für Resize-Events
    window.addEventListener('resize', checkScreenSize);
    
    // Bereinigung beim Unmount
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [checkScreenSize]);
  
  const goToPrev = () => {
    setActiveIndex((current) => (current === 0 ? cardCount - 1 : current - 1));
  };
  
  const goToNext = () => {
    setActiveIndex((current) => (current === cardCount - 1 ? 0 : current + 1));
  };
  
  useEffect(() => {
    // Automatische Rotation alle 5 Sekunden
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);
  
  // Berechnet Position und Stil für jede Karte basierend auf Gerätetyp
  const getCardStyle = (index:any) => {
    const diff = (index - activeIndex + cardCount) % cardCount;
    
    // Angepasster 3D-Effekt für Mobile
    if (isMobile) {
      // Einfachere Darstellung auf Mobilgeräten
      if (diff === 0) {
        return {
          transform: 'translateX(-50%) scale(1)',
          zIndex: 30,
          opacity: 1,
          left: '50%',
        };
      } else if (diff === 1) {
        return {
          transform: 'translateX(40%) scale(0.8)',
          zIndex: 20,
          opacity: 0.7,
          left: '50%',
        };
      } else if (diff === cardCount - 1) {
        return {
          transform: 'translateX(-140%) scale(0.8)',
          zIndex: 20,
          opacity: 0.7,
          left: '50%',
        };
      } else {
        return {
          transform: 'translateX(-50%) scale(0.6)',
          zIndex: 0,
          opacity: 0,
          left: '50%',
        };
      }
    } else {
      // Desktop 3D-Effekt
      if (diff === 0) {
        return {
          transform: 'translateX(-50%) translateZ(100px) scale(1)',
          zIndex: 30,
          opacity: 1,
          left: '50%',
        };
      } else if (diff === 1 || diff === cardCount - 1) {
        // Rechts oder links vom aktiven
        const isRight = diff === 1;
        return {
          transform: `translateX(${isRight ? '20%' : '-120%'}) translateZ(50px) scale(0.85) rotateY(${isRight ? '-15deg' : '15deg'})`,
          zIndex: 20,
          opacity: 0.8,
          left: '50%',
        };
      } else if (diff === 2 || diff === cardCount - 2) {
        // Weiter rechts oder links
        const isRight = diff === 2;
        return {
          transform: `translateX(${isRight ? '90%' : '-190%'}) translateZ(0) scale(0.7) rotateY(${isRight ? '-30deg' : '30deg'})`,
          zIndex: 10,
          opacity: 0.6,
          left: '50%',
        };
      } else {
        // Versteckte Karten
        return {
          transform: 'translateX(-50%) translateZ(-50px) scale(0.5)',
          zIndex: 0,
          opacity: 0,
          left: '50%',
        };
      }
    }
  };

  // Kartengrößen basierend auf Bildschirmgröße
  const cardSizeClass = isMobile 
    ? 'w-48 h-64 p-4' // Kleinere Karten auf Mobilgeräten
    : 'w-64 h-80 p-6'; // Größere Karten auf Desktop

  // Angepasste Höhe des Containers
  const containerHeightClass = isMobile ? 'h-72' : 'h-96';

  return (
    <div className={`relative w-full ${containerHeightClass} mt-4 md:mt-8 mb-8 md:mb-16 overflow-hidden`}>
      {/* Carousel Container mit 3D-Perspektive */}
      <div className="w-full h-full" style={{ perspective: '1000px' }}>
        {/* Karten */}
        {Array.from({ length: cardCount }).map((_, index) => {
          const style = getCardStyle(index);
          const colorClass = cardColors[index];
          
          return (
            <div
              key={index}
              className={`absolute shadow-lg rounded-lg ${cardSizeClass} ${colorClass} border transition-all duration-500`}
              style={{
                ...style,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Karteninhalt */}
              <div className="flex flex-col items-center justify-center h-full">
                <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-4 text-gray-800">{cardTitles[index]}</h3>
                <p className="text-xs md:text-sm text-gray-600 text-center">
                  Dies ist der Inhalt für {cardTitles[index]}. Hier könnten Informationen oder Bilder angezeigt werden.
                </p>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Navigationspfeile - verkleinert auf Mobilgeräten */}
      <button 
        onClick={goToPrev}
        className="absolute left-2 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-1 md:p-2 rounded-full shadow-md z-40 transition-all"
      >
        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-700" />
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-2 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-1 md:p-2 rounded-full shadow-md z-40 transition-all"
      >
        <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-700" />
      </button>
      
      {/* Indikatoren */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-1 md:space-x-2 mb-2 md:mb-4">
        {Array.from({ length: cardCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all ${
              activeIndex === index ? 'bg-gray-800 w-3 md:w-4' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}