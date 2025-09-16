import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const FloatingShape = ({ delay = 0, duration = 8, size = 100, className = "" }) => {
  return (
    <motion.div
      className={`absolute rounded-full bg-gradient-to-br from-primary/10 to-primary/5 blur-sm ${className}`}
      style={{
        width: size,
        height: size,
      }}
      animate={{
        y: [-20, 20, -20],
        x: [-10, 10, -10],
        rotateX: [0, 360],
        rotateY: [0, -360],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

const ParticleField = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 4,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-primary/20 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + particle.delay,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Floating Shapes */}
      <FloatingShape delay={0} size={200} className="top-10 left-10" />
      <FloatingShape delay={2} size={150} className="top-1/4 right-20" />
      <FloatingShape delay={4} size={100} className="bottom-1/4 left-1/3" />
      <FloatingShape delay={1} size={120} className="bottom-20 right-10" />
      <FloatingShape delay={3} size={80} className="top-1/2 left-1/4" />
      
      {/* Particle Field */}
      <ParticleField />
      
      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-primary/20 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-secondary/20 via-transparent to-transparent rounded-full blur-3xl" />
      </div>
    </div>
  );
}