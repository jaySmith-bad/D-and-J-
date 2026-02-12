"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  { id: 1, type: "almond", src: "https://images.unsplash.com/photo-1508815143374-1249ff9609e9?q=80&w=200&auto=format&fit=crop", size: 40 },
  { id: 2, type: "rosemary", src: "https://images.unsplash.com/photo-1548391350-968f58dedaed?q=80&w=200&auto=format&fit=crop", size: 60 },
  { id: 3, type: "almond", src: "https://images.unsplash.com/photo-1508815143374-1249ff9609e9?q=80&w=200&auto=format&fit=crop", size: 30 },
  { id: 4, type: "rosemary", src: "https://images.unsplash.com/photo-1548391350-968f58dedaed?q=80&w=200&auto=format&fit=crop", size: 50 },
  { id: 5, type: "almond", src: "https://images.unsplash.com/photo-1508815143374-1249ff9609e9?q=80&w=200&auto=format&fit=crop", size: 45 },
  { id: 6, type: "rosemary", src: "https://images.unsplash.com/photo-1548391350-968f58dedaed?q=80&w=200&auto=format&fit=crop", size: 55 },
];

export default function ZeroGravityElements() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {items.map((item, index) => {
        // Create unique movement for each element
        const yRange = [Math.random() * 100, Math.random() * -200 - 100];
        const rotateRange = [Math.random() * 360, Math.random() * 360 + 180];
        const xRange = [(Math.random() - 0.5) * 50, (Math.random() - 0.5) * 150];
        
        // Use transform based on scroll
        const y = useTransform(scrollYProgress, [0, 1], yRange);
        const rotate = useTransform(scrollYProgress, [0, 1], rotateRange);
        const x = useTransform(scrollYProgress, [0, 1], xRange);
        const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.4, 0.4, 0]);

        // Position items randomly
        const left = `${10 + (index * 15) % 80}%`;
        const top = `${15 + (index * 20) % 70}%`;

        return (
          <motion.div
            key={item.id}
            style={{
              position: "absolute",
              left,
              top,
              y,
              x,
              rotate,
              opacity,
              width: item.size,
              height: item.size,
            }}
            className="filter grayscale brightness-50 contrast-125"
          >
            <img 
              src={item.src} 
              alt="Nguyên liệu bánh" 
              className="w-full h-full object-contain mix-blend-screen"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
