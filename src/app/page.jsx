"use client";
import './style.scss';
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
    <div className="relative min-h-screen bg-white">
      <nav className="absolute z-50 w-full">
        <NavBar />
      </nav>

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

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
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

      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Smart Completions"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imageUrl="https://via.placeholder.com/150"
          />
          <FeatureCard
            title="Real-time Collaboration"
            description="Ut enim ad minim veniam, quis nostrud exercitation."
            imageUrl="https://via.placeholder.com/150"
          />
          <FeatureCard
            title="Advanced AI"
            description="Duis aute irure dolor in reprehenderit in voluptate."
            imageUrl="https://via.placeholder.com/150"
          />
        </div>
      </div>

      <footer className="relative z-20">
        <Footer />
      </footer>
    </div>
  );
}

const FeatureCard = ({ title, description, imageUrl }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-xl flex flex-col md:flex-row items-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.4 }}
  >
    <img
      src={imageUrl}
      alt="placeholder"
      className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-4"
    />
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);