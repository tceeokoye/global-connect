import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LoadingAnimation } from "./LoadingAnimation";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showCurtain, setShowCurtain] = useState(false);

  useEffect(() => {
    const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    const navType = navEntries[0]?.type;

    if (navType === "reload") sessionStorage.removeItem("heroSliderPlayed");

    if (sessionStorage.getItem("heroSliderPlayed")) {
      setIsLoading(false);
      setShowCurtain(false);
    } else {
      setShowCurtain(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
        setShowCurtain(false);
        sessionStorage.setItem("heroSliderPlayed", "true");
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingAnimation />}</AnimatePresence>
      <AnimatePresence>
        {showCurtain && (
          <>
            <motion.div className="fixed left-0 top-0 w-1/2 h-full bg-black z-50" initial={{ x: "50%" }} animate={{ x: "-100%" }} transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 0.8, 0.2, 1] }}/>
            <motion.div className="fixed right-0 top-0 w-1/2 h-full bg-black z-50" initial={{ x: "-50%" }} animate={{ x: "100%" }} transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 0.8, 0.2, 1] }}/>
          </>
        )}
      </AnimatePresence>

      {children}
    </>
  );
};
export default AppLayout
