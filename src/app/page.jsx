"use client";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import localFont from 'next/font/local';

const nexaBlack = localFont({
  src: '../../public/fonts/nexa-black.otf',
  variable: '--font-nexa-black', // CSS-Variable für Tailwind
});

export default function Homepage() {
  const [bubbles, setBubbles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Create bubbles
    setBubbles(
      Array.from({ length: 20 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 100 + 50,
        blur: Math.random() * 10 + 20,
      }))
    );

    // Update mouse position
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      {/* NavBar */}
      <nav className="absolute z-50 w-full">
        <NavBar />
      </nav>

      {/* Bubbles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((bubble, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: bubble.size,
              height: bubble.size,
              filter: `blur(${bubble.blur}px)`,
              x: bubble.x,
              y: bubble.y,
            }}
            animate={{
              x: mousePosition.x - bubble.size / 2,
              y: mousePosition.y - bubble.size / 2,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className={`h-screen relative overflow-hidden ${nexaBlack.className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center ">
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
              Spiel einfach und unkompliziert auf unserem <a href="">Minecraft-Server</a> mit exelenter Performance, wunderbarer Community und einem hilfsbereitem Team.
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

      {/* Features Section */}
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

      {/* Footer */}
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
