'use client';
import { useState, useEffect, useRef } from 'react';
import './css/Carousel.css';

export default function Carousel() {
  const [position, setPosition] = useState(3);
  const totalItems = 5;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const testimonials = [
    {
      image: '/static/1.jpg',
      name: 'Sally Sharpe',
      occupation: 'Marketing Admin',
      quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, suscipit?'
    },
    {
      image: '/static/2.jpg',
      name: 'Michael John',
      occupation: 'Cybersecurity Engineer',
      quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, dolore.'
    },
    {
      image: '/static/3.jpg',
      name: 'Mikayla Eddie',
      occupation: 'Software Engineer',
      quote: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, temporibus?'
    },
    {
      image: '/static/4.jpg',
      name: 'Eve Smith',
      occupation: 'UI/UX Designer',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, beatae?'
    },
    {
      image: '/static/5.jpg',
      name: 'Luke Maxwell',
      occupation: 'System Architect',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, tempore.'
    }
  ];

  const rotateCarousel = (direction: 'next' | 'prev') => {
    setPosition(prev => {
      if (direction === 'next') {
        return prev % totalItems === 0 ? 1 : prev + 1;
      } else {
        return prev === 1 ? totalItems : prev - 1;
      }
    });
  };

  useEffect(() => {
    if (!isHovering) {
      intervalRef.current = setInterval(() => {
        rotateCarousel('next');
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovering]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    
    if (x < width / 3) rotateCarousel('prev');
    else if (x > width * 2/3) rotateCarousel('next');
  };

  return (
    <div 
      className='maincontainer'
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="nav-arrow left" onClick={() => rotateCarousel('prev')}>❮</div>
      <div className="nav-arrow right" onClick={() => rotateCarousel('next')}>❯</div>
      
      {testimonials.map((_, index) => (
        <input 
          key={index} 
          type="radio" 
          name="position" 
          checked={position === index + 1}
          onChange={() => setPosition(index + 1)}
        />
      ))}
      
      <div id="carousel">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="item" 
            style={{
              '--position': position,
              '--offset': index + 1
            } as React.CSSProperties}
          >
            <img src={testimonial.image} alt={testimonial.name} />
            <h3 className="name">{testimonial.name}</h3>
            <p className="occupation">{testimonial.occupation}</p>
            <p className="testimonial">{testimonial.quote}</p>
          </div>
        ))}
      </div>
    </div>
  );
}