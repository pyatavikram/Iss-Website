import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface TechGridProps {
  className?: string;
}

export function TechGrid({ className = "" }: TechGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);
      
      const gridSize = 40;
      const cols = Math.ceil(canvas.width / window.devicePixelRatio / gridSize);
      const rows = Math.ceil(canvas.height / window.devicePixelRatio / gridSize);

      ctx.strokeStyle = 'rgba(3, 2, 19, 0.1)';
      ctx.lineWidth = 1;

      // Draw grid
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * gridSize;
          const y = j * gridSize;
          
          // Calculate distance from mouse
          const distance = Math.sqrt(Math.pow(mousePos.x - x, 2) + Math.pow(mousePos.y - y, 2));
          const maxDistance = 150;
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            const size = 2 + (opacity * 4);
            
            ctx.fillStyle = `rgba(3, 2, 19, ${opacity * 0.6})`;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
            
            // Draw connections to nearby points
            for (let k = Math.max(0, i - 2); k <= Math.min(cols, i + 2); k++) {
              for (let l = Math.max(0, j - 2); l <= Math.min(rows, j + 2); l++) {
                if (k === i && l === j) continue;
                
                const x2 = k * gridSize;
                const y2 = l * gridSize;
                const distance2 = Math.sqrt(Math.pow(mousePos.x - x2, 2) + Math.pow(mousePos.y - y2, 2));
                
                if (distance2 < maxDistance) {
                  const lineOpacity = (1 - (distance / maxDistance)) * (1 - (distance2 / maxDistance)) * 0.3;
                  ctx.strokeStyle = `rgba(3, 2, 19, ${lineOpacity})`;
                  ctx.beginPath();
                  ctx.moveTo(x, y);
                  ctx.lineTo(x2, y2);
                  ctx.stroke();
                }
              }
            }
          }
        }
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [mousePos]);

  return (
    <motion.canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-auto ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      style={{ width: '100%', height: '100%' }}
    />
  );
}