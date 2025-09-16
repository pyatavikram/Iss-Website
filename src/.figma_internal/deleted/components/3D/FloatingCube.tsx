import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';

interface FloatingCubeProps {
  size?: number;
  color?: string;
  delay?: number;
  className?: string;
}

export function FloatingCube({ 
  size = 100, 
  color = 'rgba(3, 2, 19, 0.1)', 
  delay = 0,
  className = ""
}: FloatingCubeProps) {
  const cubeRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cubeRef}
      className={`absolute ${className}`}
      style={{ 
        width: size,
        height: size,
        transformStyle: 'preserve-3d',
      }}
      initial={{ 
        rotateX: 0, 
        rotateY: 0, 
        rotateZ: 0,
        y: 20,
        opacity: 0 
      }}
      animate={{ 
        rotateX: [0, 360],
        rotateY: [0, 360],
        rotateZ: [0, 180],
        y: [0, -30, 0],
        opacity: [0, 0.8, 0.6, 0.8]
      }}
      transition={{
        duration: 20,
        delay,
        repeat: Infinity,
        ease: "linear",
        y: { duration: 8, ease: "easeInOut" },
        opacity: { duration: 4, ease: "easeInOut" }
      }}
    >
      {/* Cube faces */}
      <div 
        className="absolute border border-primary/20 backdrop-blur-sm"
        style={{
          width: size,
          height: size,
          background: `linear-gradient(135deg, ${color}, transparent)`,
          transform: `translateZ(${size/2}px)`,
        }}
      />
      <div 
        className="absolute border border-primary/20 backdrop-blur-sm"
        style={{
          width: size,
          height: size,
          background: `linear-gradient(135deg, ${color}, transparent)`,
          transform: `rotateY(90deg) translateZ(${size/2}px)`,
        }}
      />
      <div 
        className="absolute border border-primary/20 backdrop-blur-sm"
        style={{
          width: size,
          height: size,
          background: `linear-gradient(135deg, ${color}, transparent)`,
          transform: `rotateY(180deg) translateZ(${size/2}px)`,
        }}
      />
      <div 
        className="absolute border border-primary/20 backdrop-blur-sm"
        style={{
          width: size,
          height: size,
          background: `linear-gradient(135deg, ${color}, transparent)`,
          transform: `rotateY(-90deg) translateZ(${size/2}px)`,
        }}
      />
      <div 
        className="absolute border border-primary/20 backdrop-blur-sm"
        style={{
          width: size,
          height: size,
          background: `linear-gradient(135deg, ${color}, transparent)`,
          transform: `rotateX(90deg) translateZ(${size/2}px)`,
        }}
      />
      <div 
        className="absolute border border-primary/20 backdrop-blur-sm"
        style={{
          width: size,
          height: size,
          background: `linear-gradient(135deg, ${color}, transparent)`,
          transform: `rotateX(-90deg) translateZ(${size/2}px)`,
        }}
      />
    </motion.div>
  );
}