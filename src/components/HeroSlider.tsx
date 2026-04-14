"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/slider/background1.png",
  "/slider/backgraound2.jpg",
  "/slider/background3.jpg",
  "/slider/background4.jpg",
  "/slider/background5.jpg",
  "/slider/background6.jpg",
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-full min-h-[60vh] lg:min-h-[85vh] xl:min-h-0 xl:h-full overflow-hidden bg-black flex flex-col justify-center xl:rounded-[1rem] shadow-2xl">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover object-center"
            priority={index === 0}
          />
        </div>
      ))}
      
      {/* Subtle overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/50 z-20"></div>

      {/* Hero Text */}
      <div className="relative z-30 w-full px-8 py-16 lg:px-24 flex flex-col items-center text-center">
        <h1 className="text-5xl lg:text-[6rem] font-serif font-bold leading-[1.05] mb-6 tracking-tight text-white max-w-5xl drop-shadow-xl">
          University of Allahabad
        </h1>
        <p className="text-xl lg:text-2xl text-gray-100 font-light max-w-3xl leading-relaxed drop-shadow-md uppercase tracking-widest mb-4">
          A Central University
        </p>
        <div className="w-24 h-1 bg-[#C4263F] mb-6"></div>
        <p className="text-lg lg:text-xl text-gray-200 font-serif italic max-w-2xl drop-shadow-md">
          "Quot Rami Tot Arbores" — Citadel of Learning
        </p>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-3 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ease-in-out ${
              index === currentIndex ? "bg-[#C4263F] w-10 shadow-[0_0_10px_rgba(196,38,63,0.8)]" : "bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
