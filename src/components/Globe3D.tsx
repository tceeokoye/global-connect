import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import earthGlobe from "@/assets/earth-globe.jpg";
import spaceBackground from "@/assets/space-background.jpg";
import personBusiness from "@/assets/person-business.jpg";
import personStudent from "@/assets/person-student.jpg";
import personTrader from "@/assets/person-trader.jpg";
import personTech from "@/assets/person-tech.jpg";
import personHealthcare from "@/assets/person-healthcare.jpg";
import personEducator from "@/assets/person-educator.jpg";
import personGraduate from "@/assets/person-graduate.jpg";

const Globe3D = () => {
  const [connections, setConnections] = useState<Array<{ x: number; y: number; angle: number }>>([]);
  
  const personImages = [
    personEducator,
    personGraduate,
    personBusiness,
    personTrader,
    personTech,
    personHealthcare,
    personStudent,
  ];

  useEffect(() => {
    // Generate random connection points around the globe
    const points = Array.from({ length: 50 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      angle: (i * 360) / 50,
    }));
    setConnections(points);
  }, []);

  return (
    <div 
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "var(--gradient-hero)",
      }}
    >
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: "var(--gradient-hero-overlay)",
        }}
        animate={{
          background: [
            "radial-gradient(ellipse at 20% 50%, hsl(205 90% 45% / 0.15) 0%, transparent 50%)",
            "radial-gradient(ellipse at 80% 50%, hsl(280 60% 50% / 0.15) 0%, transparent 50%)",
            "radial-gradient(ellipse at 20% 50%, hsl(205 90% 45% / 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Enhanced animated background stars */}
      <div className="absolute inset-0">
        {[...Array(150)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              background: i % 3 === 0 ? "hsl(205 90% 65%)" : i % 3 === 1 ? "hsl(280 60% 70%)" : "white",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px currentColor`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main 3D Globe Container */}
      <div 
        className="relative w-full max-w-[600px] h-[400px] sm:h-[500px] md:h-[600px] mx-auto"
        style={{
          perspective: "1200px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Enhanced 3D Rotating Earth with Image */}
        <motion.div
          className="absolute inset-0 m-auto w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden"
          animate={{
            rotateY: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            transformStyle: "preserve-3d",
            boxShadow: "0 0 80px hsl(205 90% 65% / 0.6), 0 0 120px hsl(280 60% 60% / 0.3), inset 0 0 40px rgba(0, 0, 0, 0.5)",
          }}
        >
          <img 
            src={earthGlobe} 
            alt="Earth Globe" 
            className="w-full h-full object-cover"
          />
          
          {/* Football grid lines overlay */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 350 350">
            {/* Vertical lines */}
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <motion.line
                key={`v-${i}`}
                x1={50 * i}
                y1="0"
                x2={50 * i}
                y2="350"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="1"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
            {/* Horizontal lines */}
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <motion.line
                key={`h-${i}`}
                x1="0"
                y1={50 * i}
                x2="350"
                y2={50 * i}
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="1"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
            {/* Diagonal lines for football effect */}
            {[0, 1, 2, 3].map((i) => (
              <motion.path
                key={`d-${i}`}
                d={`M ${i * 87.5} 0 Q ${175 + i * 50} 175 ${i * 87.5} 350`}
                stroke="rgba(255, 255, 255, 0.15)"
                strokeWidth="1"
                fill="none"
                animate={{
                  opacity: [0.15, 0.4, 0.15],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </svg>
          
          {/* Earth overlay glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/30 rounded-full" />
        </motion.div>

        {/* 3D Rotating Rings */}
        {[0, 45, 90].map((rotation, i) => (
          <motion.div
            key={`ring-${i}`}
            className="absolute inset-0 m-auto border-2 border-primary/40 rounded-full hidden md:block"
            style={{
              width: "450px",
              height: "450px",
              transformStyle: "preserve-3d",
              transform: `rotateX(${rotation}deg) rotateY(${rotation}deg)`,
            }}
            animate={{
              rotateZ: 360,
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              rotateZ: {
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear",
              },
              opacity: {
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
              },
            }}
          />
        ))}

        {/* Connection lines from Africa to world */}
        {connections.slice(0, 8).map((point, i) => {
          const angle = (i * 360) / 8;
          const startRadius = 180;
          const endRadius = 280;
          const startX = 250 + Math.cos((angle * Math.PI) / 180) * startRadius;
          const startY = 250 + Math.sin((angle * Math.PI) / 180) * startRadius;
          const endX = 250 + Math.cos((angle * Math.PI) / 180) * endRadius;
          const endY = 250 + Math.sin((angle * Math.PI) / 180) * endRadius;

          return (
            <motion.svg
              key={`connection-${i}`}
              className="absolute inset-0 w-full h-full pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            >
              <motion.line
                x1={startX}
                y1={startY}
                x2={endX}
                y2={endY}
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeOut",
                }}
              />
            </motion.svg>
          );
        })}

        {/* Animated people nodes with real images */}
        {connections.slice(0, 8).map((point, i) => {
          const angle = (i * 360) / 8;
          const radius = window.innerWidth < 640 ? 160 : window.innerWidth < 768 ? 200 : 280;
          const x = 250 + Math.cos((angle * Math.PI) / 180) * radius;
          const y = 250 + Math.sin((angle * Math.PI) / 180) * radius;
          const personImage = personImages[i % personImages.length];

          return (
            <motion.div
              key={`person-${i}`}
              className="absolute"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Person avatar with real image */}
              <motion.div
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full shadow-glow overflow-hidden border-2 border-primary/50"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1.2, 1],
                  opacity: [0, 1, 1],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.08,
                  repeat: Infinity,
                  repeatDelay: 8,
                }}
              >
                <img 
                  src={personImage} 
                  alt={`Person ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Pulse rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary"
                animate={{
                  scale: [1, 2.5],
                  opacity: [0.8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.08,
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary-glow"
                animate={{
                  scale: [1, 2],
                  opacity: [0.6, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.08 + 0.5,
                }}
              />
            </motion.div>
          );
        })}

        {/* Data flow particles */}
        {[...Array(8)].map((_, i) => {
          const angle = (i * 360) / 8;
          const radius = 200;
          return (
            <motion.div
              key={`flow-${i}`}
              className="absolute w-1.5 h-1.5 bg-primary rounded-full"
              style={{
                left: "50%",
                top: "50%",
              }}
              animate={{
                x: [
                  0,
                  Math.cos((angle * Math.PI) / 180) * radius,
                  Math.cos((angle * Math.PI) / 180) * radius * 1.5,
                ],
                y: [
                  0,
                  Math.sin((angle * Math.PI) / 180) * radius,
                  Math.sin((angle * Math.PI) / 180) * radius * 1.5,
                ],
                opacity: [1, 0.6, 0],
                scale: [1, 1.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.13,
                ease: "easeOut",
              }}
            />
          );
        })}
      </div>

      {/* Enhanced Title and Content Overlay */}
      <motion.div
        className="absolute top-16 sm:top-20 md:top-24 left-0 right-0 text-center px-4 z-30"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-3 sm:mb-4 md:mb-6 text-white tracking-tight"
          style={{
            textShadow: "var(--shadow-hero-text), 0 0 40px hsl(205 90% 65% / 0.5)",
            background: "linear-gradient(135deg, hsl(0 0% 100%) 0%, hsl(205 90% 75%) 50%, hsl(280 60% 75%) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          Gateway Africa
        </motion.h1>
        <motion.p 
          className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-semibold text-white/95 mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto"
          style={{
            textShadow: "var(--shadow-hero-text)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Connecting Africato the Global Community
        </motion.p>
      </motion.div>

      {/* Enhanced Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-32 sm:bottom-36 md:bottom-40 left-0 right-0 z-30 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4"
      >
        <a href="/intake" className="inline-block group">
          <motion.button 
            className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-white font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-xl shadow-glow text-base sm:text-lg md:text-xl w-full sm:w-auto transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            style={{
              boxShadow: "0 0 40px hsl(205 90% 65% / 0.6), 0 10px 30px hsl(0 0% 0% / 0.3)",
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Now 
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </a>
        <a href="/services" className="inline-block group">
          <motion.button 
            className="relative overflow-hidden bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-xl border-2 border-white/50 hover:border-white/80 text-base sm:text-lg md:text-xl w-full sm:w-auto transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            style={{
              boxShadow: "0 0 30px hsl(0 0% 100% / 0.2), 0 10px 30px hsl(0 0% 0% / 0.3)",
            }}
          >
            Our Services
          </motion.button>
        </a>
      </motion.div>

      {/* Enhanced Bottom text */}
      <motion.div
        className="absolute bottom-12 sm:bottom-16 md:bottom-20 left-0 right-0 text-center px-4 z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <motion.h3 
          className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3"
          style={{
            textShadow: "var(--shadow-hero-text)",
          }}
          animate={{
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          Connecting People. Transforming Lives.
        </motion.h3>
        <p 
          className="text-white/90 text-sm sm:text-base md:text-lg font-medium"
          style={{
            textShadow: "0 2px 10px hsl(0 0% 0% / 0.5)",
          }}
        >
          Join thousands connecting Africa to global opportunities
        </p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-30 hidden md:block"
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center p-1.5 sm:p-2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Globe3D;
