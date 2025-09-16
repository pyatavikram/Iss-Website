import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface Professional3DSectionProps {
  children: React.ReactNode;
  className?: string;
  parallax?: boolean;
  backgroundElements?: boolean;
}

export function Professional3DSection({ 
  children, 
  className = "", 
  parallax = true,
  backgroundElements = true 
}: Professional3DSectionProps) {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], parallax ? ["0%", "20%"] : ["0%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={sectionRef}
      className={`relative overflow-hidden ${className}`}
      style={parallax ? { y } : {}}
    >
      {backgroundElements && (
        <>
          {/* Professional gradient overlays */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/2 via-transparent to-secondary/2"
            style={{ opacity }}
          />
          
          {/* Subtle geometric patterns */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 right-1/4 w-px h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent rotate-12" />
            <div className="absolute bottom-1/3 left-1/3 w-32 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent rotate-12" />
            <motion.div
              className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary/30 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>

          {/* Professional mesh background */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" className="absolute inset-0">
              <defs>
                <pattern id="professionalMesh" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="30" cy="30" r="0.5" fill="currentColor" className="text-primary/40" />
                  <circle cx="0" cy="0" r="0.5" fill="currentColor" className="text-primary/20" />
                  <circle cx="60" cy="60" r="0.5" fill="currentColor" className="text-primary/20" />
                  <line x1="30" y1="30" x2="60" y2="0" stroke="currentColor" strokeWidth="0.5" className="text-primary/10" />
                  <line x1="30" y1="30" x2="0" y2="60" stroke="currentColor" strokeWidth="0.5" className="text-primary/10" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#professionalMesh)" />
            </svg>
          </div>
        </>
      )}

      <div className="relative z-10">
        {children}
      </div>
    </motion.section>
  );
}