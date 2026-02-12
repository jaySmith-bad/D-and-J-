"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Eclipse Animation */}
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* The Sun (Bakery/Golden Circle) */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                boxShadow: ["0 0 20px #D4AF37", "0 0 60px #D4AF37", "0 0 20px #D4AF37"]
              }}
              transition={{ 
                duration: 2,
                boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute w-32 h-32 bg-primary rounded-full"
            />
            
            {/* The Moon (The Void) */}
            <motion.div
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="absolute w-33 h-33 bg-background rounded-full z-10"
            />

            {/* Corona Effect when overlapped */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ delay: 2.5, duration: 1 }}
              className="absolute w-40 h-40 border-2 border-primary rounded-full blur-md"
            />
          </div>
          
          <div className="mt-12 text-center">
            <div className="overflow-hidden mb-2">
              <motion.h2
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="font-serif text-3xl text-white italic tracking-[0.2em]"
              >
                Đang chuẩn bị lò nướng...
              </motion.h2>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="font-sans text-[10px] uppercase tracking-[0.5em] text-primary/60"
            >
              Căn chỉnh các hương vị thiên hà
            </motion.p>
          </div>

          {/* Background Stars for Loader */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ 
                  duration: Math.random() * 3 + 2, 
                  repeat: Infinity, 
                  delay: Math.random() * 2 
                }}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
