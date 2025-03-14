"use client";
import './style.scss';
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ServerStatus from "./components/ServerStatus";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import JoinNow from './components/JoinNow'
import Carousel from "./components/Carousel"
import localFont from 'next/font/local';



const nexaBlack = localFont({
  src: '../../public/fonts/nexa-black.otf',
  variable: '--font-nexa-black',
});

function useInteractiveBubble() {
  const bubbleRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef({ curX: 0, curY: 0, tgX: 0, tgY: 0 });

  useEffect(() => {
    const bubble = bubbleRef.current;
    if (!bubble) return;

    function move() {
      const pos = positionRef.current;
      pos.curX += (pos.tgX - pos.curX) / 20;
      pos.curY += (pos.tgY - pos.curY) / 20;
      
      bubble.style.transform = `translate(${Math.round(pos.curX)}px, ${Math.round(pos.curY)}px)`;
      animationRef.current = requestAnimationFrame(move);
    }

    function handleMouseMove(event) {
      positionRef.current.tgX = event.clientX;
      positionRef.current.tgY = event.clientY;
    }

    window.addEventListener('mousemove', handleMouseMove);
    animationRef.current = requestAnimationFrame(move);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return bubbleRef;
}

function useBackgroundBubbles() {
  const [bubbles, setBubbles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setBubbles(
      Array.from({ length: 20 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 100 + 50,
        blur: Math.random() * 10 + 20,
      }))
    );

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return { bubbles, mousePosition };
}

export default function Homepage() {
  const interactiveBubbleRef = useInteractiveBubble();
  const { bubbles, mousePosition } = useBackgroundBubbles();

  return (
    <>
      <nav className="z-50 top-0 absolute w-full">
        <NavBar></NavBar>
      </nav>
      <main className=''>
        <div className={`h-screen relative overflow-hidden ${nexaBlack.className}`}>
          <div className='gradient-bg'>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-600 via-gray-500 to-gray-500 opacity-45" />
            <svg xmlns="http://www.w3.org/2000/svg" className='morphsvg'>
              <defs>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </defs>
            </svg>
            <div className='gradients-container'>
              <div className="g1"></div>
              <div className="g2"></div>
              <div className="g3"></div>
              <div className="g4"></div>
              <div className="g5"></div>
              <div ref={interactiveBubbleRef} className="interactive"></div>
            </div>
          </div>

          <div className="relative z-10 container mx-auto h-full flex items-center absolute-text">
            <div className="max-w-3xl">
              <motion.h1
                className="text-6xl font-bold text-white mb-6 xl:text-[8rem]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                >
                Generic Network
              </motion.h1>
              <motion.p
                className="text-xl text-white/90 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                >
                Spiel einfach und unkompliziert auf unserem <a href="">Minecraft-Server</a> mit exzellenter Performance, wunderbarer Community und einem hilfsbereiten Team.
              </motion.p>
              <motion.button
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                >
                Get Started
              </motion.button>
            </div>
          </div>
        </div>

        <div className={`container mx-auto px-4 py-24 ${nexaBlack.className}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col md:flex-row items-center  transition-all duration-300 cubic-bezier(.15,1.92,.96,.29) transform hover:scale-[1.1]">
              <img
                src="https://picsum.photos/250"
                alt="placeholder"
                className="w-30 h-30 md:w-30 md:h-30 object-cover rounded-lg mb-4 md:mb-0 md:mr-4"
                />
              <div>
                <h3 className="text-xl font-bold mb-2">Spaßige Spielmodie</h3>
                <p className="text-gray-600 transition-all cubic-bezier(.15,1.92,.96,.29)">Spiele spaßige und kompeditieve Spiele mit deinen Freunden oder alleine.</p>
                <br />
                <a href="/games" className='underline text-blue-500'>Lerne mehr!</a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col md:flex-row items-center  transition-all duration-300 cubic-bezier(.15,1.92,.96,.29) transform hover:scale-[1.1]">
              <img
                src="https://picsum.photos/250"
                alt="placeholder"
                className="w-30 h-30 md:w-30 md:h-30 object-cover rounded-lg mb-4 md:mb-0 md:mr-4"
                />
              <div>
                <h3 className="text-xl font-bold mb-2">Proffesionelles Team</h3>
                <p className="text-gray-600 transition-all cubic-bezier(.15,1.92,.96,.29)">Wir haben ein hilfbreites Team, welches keine Kosten und Muehen scheut, um dir das beste Spielerlebnis zu bereiten.</p>
                <br />
                <a href="/games" className='underline text-blue-500'>Lerne mehr!</a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col md:flex-row items-center  transition-all duration-300 cubic-bezier(.15,1.92,.96,.29) transform hover:scale-[1.1]">
              <img
                src="https://picsum.photos/250"
                alt="placeholder"
                className="w-30 h-30 md:w-30 md:h-30 object-cover rounded-lg mb-4 md:mb-0 md:mr-4"
                />
              <div>
                <h3 className="text-xl font-bold mb-2">Aktive Spielerschaft</h3>
                <p className="text-gray-600 transition-all cubic-bezier(.15,1.92,.96,.29)">Wir haben eine aktive und nette Spielerschaft die gerne mit dir Interagieren und dir helfen. </p>
                <br />
                <a href="/games" className='underline text-blue-500'>Lerne mehr!</a>
              </div>
            </div>
          </div>
          </div>
          <div className="mx-[10rem] my-[5rem] ">
            <ServerStatus />
          </div>

      </main>
  

      <div className='mx-40'>

      <JoinNow />
      </div>
  
      <div className='mx-40'>

      <Carousel />
      </div>

    
     <footer>
      <Footer></Footer>
     </footer>
     </>
  );
}
