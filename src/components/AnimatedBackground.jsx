import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import '../styles/background.css';

/**
 * AnimatedBackground con estética contemplativa y sagrada:
 * Resplandor de cirio cálido (Candle Glow), fondo de pergamino con filigrana
 * y motas de luz dorada flotante (Vigilia) usando Framer Motion.
 */
export const AnimatedBackground = () => {
  const sparks = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2,
      duration: Math.random() * 7 + 6,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="sacred-bg" aria-hidden="true">
      {/* Resplandores difusos de luz de cirio */}
      <div className="bg-candle-glow-1" />
      <div className="bg-candle-glow-2" />
      <div className="bg-candle-glow-3" />

      {/* Trama sutil de pergamino */}
      <div className="bg-parchment-texture" />

      {/* Pavesas de luz dorada */}
      {sparks.map((spark) => (
        <motion.span
          key={spark.id}
          className="candle-sparkle"
          style={{
            left: `${spark.x}%`,
            top: `${spark.y}%`,
            width: `${spark.size}px`,
            height: `${spark.size}px`,
          }}
          animate={{
            y: ['0px', '-40px', '0px'],
            opacity: [0.15, 0.85, 0.15],
            scale: [0.9, 1.3, 0.9],
          }}
          transition={{
            duration: spark.duration,
            repeat: Infinity,
            delay: spark.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};
