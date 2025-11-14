"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

const slides = [
  {
    image:
      "/backgrounds/section-partnership.jpg",
    title: "Gateway Africa",
    subtitle: "Your Bridge to Global Business Success",
    description:
      "Connect with international markets and unlock cross-border opportunities through our comprehensive trade solutions.",
    highlights: ["International Trade Support", "Market Entry Strategy"],
  },
  {
    image:
      "/backgrounds/hero-education.jpg",
    title: "Gateway Africa",
    subtitle: "Excellence in Global Education",
    description:
      "Access world-class educational opportunities and professional development programs tailored to your aspirations.",
    highlights: ["Global Education Access", "Professional Development"],
  },
  {
    image:
      "/backgrounds/investment.avif",
    title: "Gateway Africa",
    subtitle: "Investment Without Borders",
    description:
      "Navigate investment opportunities with expert guidance and comprehensive market insights.",
    highlights: ["Investment Advisory", "Market Analysis"],
  },
  {
    image:
      "/backgrounds/hero-intake.jpg",
    title: "Gateway Africa",
    subtitle: "Seamless Immigration Services",
    description:
      "Transform your global mobility with our expert immigration and visa support services.",
    highlights: ["Visa Processing", "Immigration Support"],
  },
  {
    image:
      "/backgrounds/tourism.jpg",
    title: "Gateway Africa",
    subtitle: "Travel & Tourism Excellence",
    description:
      "Experience hassle-free travel planning and tourism services tailored to your needs.",
    highlights: ["Travel Planning", "Tourism Services"],
  },
];

export const BackgroundSlider = ({
  onSlideChange,
}: {
  onSlideChange?: (slide: typeof slides[0]) => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [fade, setFade] = useState(false);
  const [direction, setDirection] = useState("x"); // track motion direction

  const directions = ["x", "-x", "y", "-y"];

  useEffect(() => {
    onSlideChange?.(slides[currentIndex]);
  }, [currentIndex, onSlideChange]);


  useEffect(() => {
    const interval = setInterval(() => {
      const randomDir = directions[Math.floor(Math.random() * directions.length)];
      setDirection(randomDir);
      setFade(true);

      setTimeout(() => {
        setCurrentIndex(nextIndex);
        setNextIndex((nextIndex + 1) % slides.length);
        setFade(false);
      }, 1000);
    }, 6000);

    return () => clearInterval(interval);
  }, [nextIndex]);

  const [hasMounted, setHasMounted] = useState(false);

useEffect(() => {
  setHasMounted(true);
}, []);

  
  const getDirectionOffset = (dir: string) => {
    switch (dir) {
      case "x":
        return { x: "100%", y: 0 };
      case "-x":
        return { x: "-100%", y: 0 };
      case "y":
        return { y: "100%", x: 0 };
      case "-y":
        return { y: "-100%", x: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      {!hasMounted ? (
      // SSR-safe static version (NO ANIMATION)
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${slides[0].image})`,
        }}
      />
    ) :( <><motion.div
        key={`current-${currentIndex}`}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${slides[currentIndex].image})`,
        }}
        animate={{
          scale: [1.05, 1.1, 1.05],
          x: [0, 15, -15, 0],
          y: [0, -10, 10, 0],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      <motion.div
        key={`next-${nextIndex}`}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${slides[nextIndex].image})`,
        }}
        initial={{
          opacity: 0,
          ...getDirectionOffset(direction),
          scale: 1.1,
        }}
        animate={{
          opacity: fade ? 1 : 0,
          x: 0,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 1.3,
          ease: "easeInOut",
        }}
      /></>)}

  
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
};
