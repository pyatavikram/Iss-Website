import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useRef, useEffect } from 'react';

interface InteractiveOrbProps {
  size?: number;
  className?: string;
}

export function InteractiveOrb({ size = 200, className = "" }: InteractiveOrbProps) {
  const orbRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [30, -30]), {
    stiffness: 300,
    damping: 40,
  });
  
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-30, 30]), {
    stiffness: 300,
    damping: 40,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (orbRef.current) {
        const rect = orbRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={orbRef}
      className={`relative ${className}`}
      style={{
        width: size,
        height: size,
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
      }}
    >
      {/* Main orb */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent backdrop-blur-sm border border-primary/30"
        animate={{
          boxShadow: [
            '0 0 20px rgba(3, 2, 19, 0.2)',
            '0 0 40px rgba(3, 2, 19, 0.4)',
            '0 0 20px rgba(3, 2, 19, 0.2)',
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{
          transform: 'translateZ(0px)',
        }}
      />
      
      {/* Inner ring */}
      <motion.div
        className="absolute inset-4 rounded-full border-2 border-primary/40"
        animate={{ rotateZ: [0, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{
          transform: 'translateZ(10px)',
        }}
      />
      
      {/* Core */}
      <motion.div
        className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/40 to-primary/20"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          transform: 'translateZ(20px)',
        }}
      />
      
      {/* Floating particles around orb */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/60 rounded-full"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translateZ(30px)',
          }}
          animate={{
            rotateY: [0, 360],
            x: [0, Math.cos(i * Math.PI / 4) * (size * 0.6)],
            y: [0, Math.sin(i * Math.PI / 4) * (size * 0.6)],
          }}
          transition={{
            duration: 6 + i * 0.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </motion.div>
  );
}