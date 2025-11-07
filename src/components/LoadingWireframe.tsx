import { motion } from "framer-motion";

const LoadingWireframe = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative">
        {/* 3D Rotating Globe Wireframe */}
        <motion.div
          className="relative w-64 h-64"
          animate={{
            rotateY: 360,
            rotateX: [0, 10, 0],
          }}
          transition={{
            rotateY: {
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            },
            rotateX: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
        >
          {/* Wireframe Circle Layers */}
          {[0, 30, 60, 90, 120, 150].map((rotation, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border-2 border-primary/30 rounded-full"
              style={{
                transform: `rotateY(${rotation}deg)`,
                transformStyle: "preserve-3d",
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.98, 1.02, 0.98],
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Horizontal Latitude Lines */}
          {[-40, -20, 0, 20, 40].map((y, i) => (
            <motion.div
              key={`h-${i}`}
              className="absolute left-1/2 border border-primary/20 rounded-full"
              style={{
                width: `${80 - Math.abs(y)}%`,
                height: `${(80 - Math.abs(y)) * 0.3}px`,
                top: `${50 + y}%`,
                transform: "translateX(-50%) translateY(-50%)",
              }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 2,
                delay: i * 0.15,
                repeat: Infinity,
              }}
            />
          ))}

          {/* Pulsing Core */}
          <motion.div
            className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-primary/20"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.2, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Connection Dots */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * Math.PI * 2) / 12;
            const radius = 120;
            return (
              <motion.div
                key={`dot-${i}`}
                className="absolute w-2 h-2 bg-primary rounded-full"
                style={{
                  left: `calc(50% + ${Math.cos(angle) * radius}px)`,
                  top: `calc(50% + ${Math.sin(angle) * radius}px)`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.1,
                  repeat: Infinity,
                }}
              />
            );
          })}
        </motion.div>

        {/* Loading Text */}
        <motion.div
          className="mt-12 text-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <h2 className="text-2xl font-bold text-gradient mb-2">
            Connecting Worlds
          </h2>
          <div className="flex gap-2 justify-center">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-primary rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingWireframe;
