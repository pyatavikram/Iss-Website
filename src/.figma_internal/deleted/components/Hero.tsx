import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, Play, Sparkles, Code, Cpu, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const Professional3DCard = ({ 
  icon: Icon, 
  title, 
  delay = 0, 
  className = "" 
}: { 
  icon: any, 
  title: string, 
  delay?: number, 
  className?: string 
}) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    animate={{ 
      opacity: 1, 
      y: [0, -8, 0], 
      scale: 1
    }}
    transition={{
      opacity: { duration: 0.6, delay },
      scale: { duration: 0.6, delay },
      y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }}
    whileHover={{ 
      scale: 1.05, 
      y: -10
    }}
  >
    <div className="w-14 h-14 bg-gradient-to-br from-primary/8 to-primary/4 backdrop-blur-sm rounded-xl border border-primary/15 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300">
      <Icon className="w-5 h-5 text-primary" />
    </div>
  </motion.div>
);

export function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={heroRef} id="home" className="relative pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-32 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Professional gradient overlay */}
      <motion.div 
        className="absolute inset-0"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-background to-secondary/2" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
              >
                <Badge variant="secondary" className="w-fit backdrop-blur-sm bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
                  <Sparkles className="w-3 h-3 mr-2" />
                  Enterprise Ready Solutions
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Transforming Business Through{' '}
                <motion.span 
                  className="block text-primary relative"
                  animate={{ 
                    textShadow: [
                      "0 0 0px rgba(3,2,19,0.5)",
                      "0 0 20px rgba(3,2,19,0.2)",
                      "0 0 0px rgba(3,2,19,0.5)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  Intelligent Technology
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-muted-foreground max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                We deliver enterprise-grade software solutions that leverage AI, cloud computing, 
                and modern architecture to drive unprecedented business growth and operational excellence.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateX: 5, y: -5 }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Button size="lg" className="group bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:via-primary hover:to-primary shadow-xl hover:shadow-2xl transition-all duration-500 text-lg px-8 py-6">
                  Start Your Transformation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotateX: -5, y: -5 }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Button variant="outline" size="lg" className="group backdrop-blur-sm bg-background/80 border-primary/30 hover:bg-primary/5 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-500">
                  <Play className="mr-2 h-5 w-5" />
                  View Case Studies
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-3 gap-8 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {[
                { value: "500+", label: "Enterprise Clients", subLabel: "Global Fortune 500" },
                { value: "99.9%", label: "Uptime SLA", subLabel: "Mission Critical" },
                { value: "24/7", label: "Expert Support", subLabel: "Worldwide Coverage" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center group"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  style={{ transformStyle: "preserve-3d" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-2xl md:text-3xl mb-1"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 3, delay: index * 0.3, repeat: Infinity }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground/70">{stat.subLabel}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Professional Tech Cards */}
            <Professional3DCard 
              icon={Code} 
              title="Development" 
              delay={0.8} 
              className="top-8 -right-6" 
            />
            <Professional3DCard 
              icon={Cpu} 
              title="AI/ML" 
              delay={1.2} 
              className="bottom-12 -left-8" 
            />
            <Professional3DCard 
              icon={Zap} 
              title="Performance" 
              delay={1.6} 
              className="top-1/3 -left-6" 
            />
            
            <motion.div 
              className="relative"
              whileHover={{ 
                scale: 1.01
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Simplified overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/3 rounded-2xl z-10"
                animate={{
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              
              {/* Modern frame effect */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-primary/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGRldmVsb3BlcnxlbnwxfHx8fDE3NTc5NTcwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional technology workspace"
                  className="w-full h-[500px] md:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}