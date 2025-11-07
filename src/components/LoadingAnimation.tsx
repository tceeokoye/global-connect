import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const LoadingAnimation = () => {
  const [text, setText] = useState("");
  const fullText = "Welcome to Global Connect LLC";
  
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullText.length) {
        clearInterval(intervalId);
      }
    }, 100); // Speed of typing

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        scaleX: [1, 0],
        transition: { 
          duration: 1,
          ease: [0.43, 0.13, 0.23, 0.96]
        }
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-black to-gray-900 origin-center"
    >
    
      <div className="relative w-48 h-48 mb-12">
        {/* Realistic Earth Image */}
        <motion.div
          className="absolute inset-0 rounded-full bg-cover bg-center shadow-2xl"
          style={{
            backgroundImage: "url('/backgrounds/Globespinner.avif')",
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Orbit Ring */}
        <motion.div
          className="absolute -inset-4 rounded-full border-2 border-blue-500/30"
          style={{ transform: "rotateX(65deg)" }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Search Bubbles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-blue-400/80 rounded-full shadow-lg"
            style={{
              left: "50%",
              top: "50%",
            }}
            animate={{
              x: [0, Math.cos(i * Math.PI/2) * 100, 0],
              y: [0, Math.sin(i * Math.PI/2) * 100, 0],
              opacity: [0, 1, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Typewriter Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center relative"
      >
        <motion.h1 
          className="text-5xl font-bold text-white mb-3"
        >
          {text}
          <motion.span
            animate={{ opacity: [0, 1] }}
            transition={{ repeat: Infinity, duration: 0.7 }}
            className="inline-block ml-1"
          >
            |
          </motion.span>
        </motion.h1>
        <motion.div 
          className="h-1 w-32 bg-blue-500 mx-auto rounded-full shadow-lg"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: text.length / fullText.length }}
          transition={{ duration: 0.1 }}
        />
      </motion.div>
    </motion.div>
  );
};