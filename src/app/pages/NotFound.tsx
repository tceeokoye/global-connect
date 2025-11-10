"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center p-8 bg-white rounded-3xl shadow-2xl"
      >
        <motion.h1
          className="mb-4 text-6xl font-extrabold text-pink-500"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          404
        </motion.h1>
        <motion.p
          className="mb-6 text-xl text-gray-700"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Oops! Page not found
        </motion.p>
        <motion.a
          href="/"
          className="inline-block px-6 py-3 text-white bg-pink-500 rounded-full shadow-lg hover:bg-pink-600 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Return to Home
        </motion.a>
      </motion.div>
    </div>
  );
};

export default NotFound;
