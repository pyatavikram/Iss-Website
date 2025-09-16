import { motion } from 'motion/react';

export function Professional3DBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Simplified animated mesh gradient */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary/4 via-primary/2 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-secondary/4 via-secondary/2 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      {/* Simplified floating elements */}
      <motion.div
        className="absolute top-1/4 left-1/6 w-3 h-3 bg-primary/20 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-3/4 right-1/6 w-2 h-2 bg-secondary/30 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-4 h-4 border border-primary/20 rotate-45"
        animate={{
          rotateZ: [45, 405],
          y: [0, -10, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Simplified geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="techPattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="60" cy="60" r="1" fill="currentColor" className="text-primary/40" />
              <circle cx="0" cy="0" r="0.5" fill="currentColor" className="text-primary/20" />
              <circle cx="120" cy="120" r="0.5" fill="currentColor" className="text-primary/20" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#techPattern)" />
        </svg>
      </div>

      {/* Subtle mesh overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-12" />
        <div className="absolute top-1/2 left-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-12" />
      </div>
    </div>
  );
}