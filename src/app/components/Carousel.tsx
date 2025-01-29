import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const gameModes = [
  {
    id: 'bedwars',
    name: 'Bedwars',
    icon: '🛏️',
    description: 'Erstelle eine riesige Insel aus einem einzigen Block und beteilige dich am Handel mit anderen Spielern.'
  },
  {
    id: 'oneblock',
    name: 'Oneblock',
    icon: '🧊',
    description: 'Erstelle eine riesige Insel aus einem einzigen Block und beteilige dich am Handel mit anderen Spielern.'
  },
  {
    id: 'fastbuilders',
    name: 'FastBuilders',
    icon: '🏗️',
    description: 'Erstelle eine riesige Insel aus einem einzigen Block und beteilige dich am Handel mit anderen Spielern.'
  }
];

export default function GameModeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? gameModes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === gameModes.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative pl-6 p-14 rounded-2xl text-center text-gray-600 bg-gray-100 justify-center shadow-md transition-all ease-linear hover:shadow-xl">
      <h1 className="text-[1.7rem] ml-6 text-3xl">
        Welche <span className="text-purple-600">Spielmodi</span> bieten wir dir an?
      </h1>
      <h3 className="text-gray-800 font-sans font-semibold text-[1.4rem] below-800:text-[1.1rem]">
        Wir bieten dir viele verschiedene Spielmodi, die alle etwas besonderes haben und Spaß mitbringen
      </h3>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button 
          onClick={handlePrevious}
          className="p-2 rounded-full hover:bg-gray-200 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex gap-4 items-center justify-center">
          {gameModes.map((mode, index) => (
            <div
              key={mode.id}
              className={`
                transition-all duration-300 transform
                ${index === currentIndex ? 'bg-purple-600 text-white scale-105' : 'bg-white scale-95 opacity-70'}
                rounded-lg p-4 flex items-center gap-3 w-64 shadow-md hover:shadow-xl
              `}
            >
              <span className="text-2xl">{mode.icon}</span>
              <span className="font-bold">{mode.name}</span>
            </div>
          ))}
        </div>

        <button 
          onClick={handleNext}
          className="p-2 rounded-full hover:bg-gray-200 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <p className="text-gray-800 font-sans font-semibold text-[1.4rem] below-800:text-[1.1rem] mt-8">
        {gameModes[currentIndex].description}
      </p>
    </div>
  );
}