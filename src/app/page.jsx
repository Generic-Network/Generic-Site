"use client";
import "./style.scss";
import Footer from "./components/Footer";
import NavBar from "./components/NavBarTesti";
import ServerStatus from "./components/ServerStatus";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import JoinNow from "./components/JoinNow";
import Carousel from "./components/Carousel";
import localFont from "next/font/local";
import NavBarTest from "./components/Navbar";

const nexaBlack = localFont({
  src: "../../public/fonts/nexa-black.otf",
  variable: "--font-nexa-black",
});

function useInteractiveBubble() {
  const bubbleRef = useRef(null);
  const positionRef = useRef({ curX: 0, curY: 0, tgX: 0, tgY: 0 });
  const animationRef = useRef(null);

  useEffect(() => {
    const bubble = bubbleRef.current;
    if (!bubble) return;

    // Hardware-Acceleration-Hint
    bubble.style.willChange = "transform";

    const move = () => {
      const pos = positionRef.current;
      pos.curX += (pos.tgX - pos.curX) / 20;
      pos.curY += (pos.tgY - pos.curY) / 20;
      // Verwendung von translate3d, um GPU-Beschleunigung zu erzwingen
      bubble.style.transform = `translate3d(${Math.round(
        pos.curX
      )}px, ${Math.round(pos.curY)}px, 0)`;
      animationRef.current = requestAnimationFrame(move);
    };

    const handleMouseMove = (event) => {
      positionRef.current.tgX = event.clientX;
      positionRef.current.tgY = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationRef.current = requestAnimationFrame(move);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return bubbleRef;
}

function useBackgroundBubbles() {
  const [bubbles, setBubbles] = useState([]);
  useEffect(() => {
    setBubbles(
      Array.from({ length: 20 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 100 + 50,
        blur: Math.random() * 10 + 20,
      }))
    );
  }, []);
  return bubbles;
}

export default function Homepage() {
  const interactiveBubbleRef = useInteractiveBubble();
  const bubbles = useBackgroundBubbles();

  return (
    <>
      
        
          <NavBar/>
      
      <main className={` ${nexaBlack.className}`}>
        <div className=" h-screen relative overflow-hidden">
          <div className="gradient-bg" style={{ willChange: "transform" }}>
            {/* Optimierter Hintergrundgradient mit Hardware-Acceleration */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-gray-600 via-gray-500 to-gray-500 opacity-45"
              style={{ transform: "translate3d(0,0,0)" }}
            />

            {/* SVG-Filter bleibt erhalten, wird aber nicht animiert */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="morphsvg"
              style={{ display: "none" }}
            >
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                    result="goo"
                  />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </defs>
            </svg>

            <div
              className="gradients-container"
              style={{ willChange: "transform" }}
            >
              <div className="g1"></div>
              <div className="g2"></div>
              <div className="g3"></div>
              <div className="g4"></div>
              <div className="g5"></div>
              <div
                ref={interactiveBubbleRef}
                className="interactive"
                style={{ willChange: "transform" }}
              ></div>
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
                Lorem ipsum dolor sit amet consectetur{" "}
                <a href="">adipiscing elit</a> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud.
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
            <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col md:flex-row items-center transition-all duration-300 cubic-bezier(.15,1.92,.96,.29) transform hover:scale-[1.1]">
              <img
                src="https://picsum.photos/250"
                alt="placeholder"
                className="w-30 h-30 md:w-30 md:h-30 object-cover rounded-lg mb-4 md:mb-0 md:mr-4"
              />
              <div className="">
                <h3 className="text-xl font-bold mb-2">Lorem ipsum</h3>
                <p className="text-gray-600 transition-all cubic-bezier(.15,1.92,.96,.29)">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                </p>
                <br />
                <a href="/games" className="underline text-blue-500">
                  Lerne mehr!
                </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center transition-all duration-300 cubic-bezier(.15,1.92,.96,.29) transform hover:scale-[1.1]">
              <img
                src="https://picsum.photos/250"
                alt="placeholder"
                className="w-30 h-30 md:w-30 md:h-30 object-cover rounded-lg mb-4 md:mb-0 md:mr-4"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">Lorem ipsum
                </h3>
                <p className="text-gray-600 transition-all cubic-bezier(.15,1.92,.96,.29)">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea.
                </p>
                <br />
                <a href="/games" className="underline text-blue-500">
                  Lerne mehr!
                </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col md:flex-row items-center transition-all duration-300 cubic-bezier(.15,1.92,.96,.29) transform hover:scale-[1.1]">
              <img
                src="https://picsum.photos/250"
                alt="placeholder"
                className="w-30 h-30 md:w-30 md:h-30 object-cover rounded-lg mb-4 md:mb-0 md:mr-4"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">Lorem ipsum
                </h3>
                <p className="text-gray-600 transition-all cubic-bezier(.15,1.92,.96,.29)">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </p>
                <br />
                <a href="/games" className="underline text-blue-500">
                  Lerne mehr!
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-60 below-700:mx-20 below-400:mx-4">
          <JoinNow />
        </div>
        
      </main>

      <div className="">
        <Carousel />
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}