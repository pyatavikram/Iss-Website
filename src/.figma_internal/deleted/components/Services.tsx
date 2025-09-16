import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Database, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and best practices.",
    features: ["React & Next.js", "TypeScript", "Responsive Design", "Performance Optimization"],
    popular: false
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps for iOS and Android platforms.",
    features: ["React Native", "Flutter", "Native iOS/Android", "App Store Optimization"],
    popular: true
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps solutions for modern applications.",
    features: ["AWS/Azure/GCP", "Docker & Kubernetes", "CI/CD Pipelines", "Monitoring"],
    popular: false
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Big data solutions, analytics, and machine learning implementations.",
    features: ["Data Pipelines", "ML Models", "Real-time Analytics", "Data Visualization"],
    popular: false
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets.",
    features: ["Security Audits", "Penetration Testing", "Compliance", "24/7 Monitoring"],
    popular: false
  },
  {
    icon: Zap,
    title: "AI & Automation",
    description: "Artificial intelligence solutions to automate and optimize business processes.",
    features: ["Process Automation", "ChatBots", "AI Integration", "Workflow Optimization"],
    popular: true
  }
];

export function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28 lg:py-36 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden">
      {/* Professional background elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-gradient-radial from-primary/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-gradient-radial from-secondary/6 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Floating geometric elements */}
      <motion.div
        className="absolute top-20 right-20 w-4 h-4 bg-primary/20 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-16 w-6 h-6 border-2 border-primary/30 rotate-45"
        animate={{
          rotateZ: [45, 405],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center space-y-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Badge variant="secondary" className="w-fit mx-auto backdrop-blur-sm bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 text-sm px-4 py-2">
              Enterprise Solutions
            </Badge>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Comprehensive Technology{' '}
            <motion.span 
              className="text-primary block lg:inline"
              animate={{ 
                textShadow: [
                  "0 0 0px rgba(3,2,19,0.5)",
                  "0 0 20px rgba(3,2,19,0.2)",
                  "0 0 0px rgba(3,2,19,0.5)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Services
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            From AI-driven solutions to cloud infrastructure, we deliver enterprise-grade 
            technology services that transform your business operations and accelerate growth.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100 
                }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5
                }}
              >
                <Card 
                  className={`relative backdrop-blur-sm bg-card/90 border-border/50 hover:border-primary/40 transition-all duration-700 hover:shadow-2xl group h-full ${
                    service.popular ? 'border-primary/60 shadow-lg ring-2 ring-primary/20 bg-gradient-to-br from-primary/5 to-card/90' : ''
                  }`}
                >
                  {service.popular && (
                    <motion.div
                      initial={{ scale: 0, rotateZ: -180 }}
                      whileInView={{ scale: 1, rotateZ: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.5, type: "spring", stiffness: 200 }}
                    >
                      <Badge className="absolute -top-3 left-6 bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground shadow-xl z-10 px-3 py-1">
                        Most Popular
                      </Badge>
                    </motion.div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className="p-4 bg-gradient-to-br from-primary/12 to-primary/4 rounded-xl group-hover:from-primary/20 group-hover:to-primary/8 transition-all duration-300 shadow-md"
                        whileHover={{ 
                          scale: 1.1
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon className="h-7 w-7 text-primary" />
                      </motion.div>
                      <div className="flex-1">
                        <CardTitle className="group-hover:text-primary transition-colors text-xl mb-2">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="group-hover:text-foreground/80 transition-colors text-base leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <ul className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                        >
                          <motion.div
                            className="mt-0.5"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          </motion.div>
                          <span className="text-muted-foreground group-hover:text-foreground/80 transition-colors leading-relaxed">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <div className="pt-4 border-t border-border/50">
                      <motion.button 
                        className="text-primary hover:text-primary/80 transition-colors flex items-center space-x-2 group/btn font-medium"
                        whileHover={{ x: 8 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span>Explore Solution</span>
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                        </motion.div>
                      </motion.button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Button size="lg" className="bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:via-primary hover:to-primary shadow-xl hover:shadow-2xl transition-all duration-500 text-lg px-8 py-6">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}