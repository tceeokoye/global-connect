"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BackgroundSlider } from "./BackgroundSlider";

import { useState } from "react";

const HeroSlider3D = () => {
  const [currentSlide, setCurrentSlide] = useState({
    title: "Gateway Africa",
    subtitle: "Industry | Trade | Investment | Travel | Immigration | Jobs",
    description:
      "Connect with international markets and unlock cross-border opportunities through our comprehensive trade solutions.",
    highlights: ["International Trade Support", "Market Entry Strategy"],
  });

  return (
    <section className="relative w-full h-[calc(100vh-80px)] md:h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <BackgroundSlider onSlideChange={setCurrentSlide} />
      </div>

      {/* Overlay content */}
      <div className="relative z-30 flex flex-col md:flex-row items-center justify-center w-full h-full px-6 md:px-12">
        <div className="max-w-3xl text-center md:text-left md:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
          >
            {currentSlide.title}
          </motion.h1>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.subtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h2 className="text-xl sm:text-2xl md:text-3xl text-white/90 font-semibold mt-4">
                {currentSlide.subtitle}
              </motion.h2>
              <motion.p className="mt-4 text-sm sm:text-base md:text-lg text-white/90 max-w-xl">
                {currentSlide.description}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 items-center">
            <a href="/intake" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ y: -3 }}
                className="bg-gradient-to-r from-primary to-primary-glow text-white font-bold px-6 py-3 rounded-lg shadow-lg w-full sm:w-auto"
              >
                Get Started
              </motion.button>
            </a>
            <a href="/services" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ y: -3 }}
                className="bg-white/10 text-white font-semibold px-5 py-3 rounded-lg border border-white/20 w-full sm:w-auto"
              >
                View Services
              </motion.button>
            </a>
          </div>
        </div>

        {/* Highlights */}
        <div className="hidden md:flex flex-col items-end md:w-1/2 gap-4 ml-8">
          <AnimatePresence mode="wait">
            {currentSlide.highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/50 backdrop-blur-md p-4 rounded-xl w-[320px] text-white shadow-lg"
              >
                <h4 className="font-bold">{highlight}</h4>
                <p className="text-sm text-white/90 mt-1">
                  {currentSlide.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Tagline */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 text-center px-4">
        <p className="text-xs sm:text-sm text-white/80">
          Connecting People. Transforming Lives.
        </p>
      </div>
    </section>
  );
};

export default HeroSlider3D;
