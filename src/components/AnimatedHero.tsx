"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

import { AnimatedHeroProps } from "@/types/global";

const AnimatedHero = ({
  image,
  video,
  title,
  subtitle,
  overlay,
  height = "h-screen",
  showConnectingAnimation = false,
}: AnimatedHeroProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.2]);

  // Cinematic fade/zoom on load
  const fadeIn = { opacity: 0, scale: 1.2 };
  const fadeOut = { opacity: 1, scale: 1 };

    const backgroundImage =
    typeof image === "string" ? image : image?.src ?? "";

  return (
    <div ref={ref} className={`relative overflow-hidden ${height}`}>
      {/* Background Layer (Image or Video) */}
      <motion.div
        initial={fadeIn}
        animate={fadeOut}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{ y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        {video ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <div
            className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/90 mb-8"
            >
              {subtitle}
            </motion.p>
          )}

          {overlay && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {overlay}
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div className="w-1.5 h-3 bg-white/70 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedHero;
