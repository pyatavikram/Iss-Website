import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';
import { Professional3DSection } from './Professional3DSection';
import { 
  Users, 
  Trophy, 
  Clock, 
  Target,
  ArrowRight,
  Award,
  Globe,
  Shield,
  Zap
} from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: "200+",
    label: "Expert Team Members",
    subLabel: "Global Specialists"
  },
  {
    icon: Trophy,
    value: "500+",
    label: "Successful Projects",
    subLabel: "Enterprise Solutions"
  },
  {
    icon: Clock,
    value: "8+",
    label: "Years of Experience",
    subLabel: "Industry Leadership"
  },
  {
    icon: Target,
    value: "99.9%",
    label: "Client Satisfaction",
    subLabel: "Proven Results"
  }
];

const achievements = [
  {
    icon: Award,
    title: 'Industry Recognition',
    description: 'Winner of Tech Innovation Award 2023'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Serving clients across 40+ countries'
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'ISO 27001 & SOC 2 Type II certified'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: '99.9% uptime guarantee on all services'
  }
];

const values = [
  {
    title: "Innovation First",
    description: "We embrace cutting-edge technologies and methodologies to deliver forward-thinking solutions."
  },
  {
    title: "Quality Driven",
    description: "Every line of code, every design element is crafted with precision and attention to detail."
  },
  {
    title: "Client Focused",
    description: "Your success is our success. We work closely with you to understand and exceed your expectations."
  },
  {
    title: "Agile Approach",
    description: "We adapt quickly to changes and deliver results through iterative, collaborative processes."
  }
];

export function About() {
  return (
    <Professional3DSection className="py-20 md:py-28 lg:py-36" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Badge variant="secondary" className="w-fit backdrop-blur-sm">
                  About TechFlow
                </Badge>
              </motion.div>
              
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Transforming Ideas into{' '}
                <motion.span
                  className="text-primary"
                  animate={{ 
                    textShadow: [
                      "0 0 0px rgba(3,2,19,0.5)",
                      "0 0 20px rgba(3,2,19,0.3)",
                      "0 0 0px rgba(3,2,19,0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Digital Reality
                </motion.span>
              </motion.h2>
              
              <motion.p 
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Founded in 2016, TechFlow has been at the forefront of digital innovation, 
                helping businesses of all sizes leverage technology to achieve their goals. 
                Our team of experts combines technical excellence with creative problem-solving 
                to deliver solutions that make a real difference.
              </motion.p>
            </div>

            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h3>Our Core Values</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div 
                    key={index} 
                    className="space-y-2 p-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5 
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <motion.h4 
                      className="text-primary"
                      whileHover={{ scale: 1.05 }}
                    >
                      {value.title}
                    </motion.h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateX: 5 }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Button className="group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: 0.4 + index * 0.1,
                      type: "spring",
                      stiffness: 120 
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      y: -2
                    }}
                  >
                    <Card className="text-center backdrop-blur-sm bg-card/80 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6 space-y-2">
                        <div className="flex justify-center">
                          <motion.div 
                            className="p-3 bg-gradient-to-br from-primary/8 to-primary/4 rounded-xl"
                            whileHover={{ 
                              scale: 1.1
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <Icon className="h-6 w-6 text-primary" />
                          </motion.div>
                        </div>
                        <div>
                          <motion.div 
                            className="text-2xl"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity,
                              delay: index * 0.5 
                            }}
                          >
                            {stat.value}
                          </motion.div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              whileHover={{ 
                scale: 1.02,
                rotateX: 5 
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <motion.h3
                    animate={{ 
                      textShadow: [
                        "0 0 0px rgba(255,255,255,0.5)",
                        "0 0 10px rgba(255,255,255,0.3)",
                        "0 0 0px rgba(255,255,255,0.5)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Ready to Start Your Project?
                  </motion.h3>
                  <p className="text-primary-foreground/80">
                    Join hundreds of satisfied clients who trust us with their digital transformation.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="secondary" size="sm" className="shadow-md hover:shadow-lg transition-all duration-300">
                      Get Free Consultation
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Achievements section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-center mb-12">
            <motion.h3 
              className="text-2xl md:text-3xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Achievements
            </motion.h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recognized for excellence in technology innovation and client satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 120 
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -3
                  }}
                >
                  <Card className="text-center backdrop-blur-sm bg-card/90 border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl h-full">
                    <CardContent className="p-6 space-y-4">
                      <motion.div 
                        className="flex justify-center"
                        whileHover={{ 
                          scale: 1.1
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-3 bg-gradient-to-br from-primary/15 to-primary/5 rounded-2xl">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </motion.div>
                      <div>
                        <h4 className="text-lg mb-2">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </Professional3DSection>
  );
}