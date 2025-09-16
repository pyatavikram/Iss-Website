import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'motion/react';

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    image: "https://images.unsplash.com/photo-1659353220597-71b8c6a56259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGRldmVsb3BlcnxlbnwxfHx8fDE3NTc5NTcwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Former Google engineer with 12+ years of experience in scaling tech companies.",
    skills: ["Strategy", "Leadership", "Product Vision"]
  },
  {
    name: "Marcus Johnson",
    role: "CTO & Co-founder",
    image: "https://images.unsplash.com/photo-1635768229592-8c2532d33cb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhwcm9mZXNzaW9uYWwlMjBtYW4lMjB0ZWNofGVufDF8fHx8MTc1Nzk1NzA3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Full-stack architect passionate about building scalable, secure systems.",
    skills: ["Architecture", "Cloud", "Security"]
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1646579886741-12b59840c63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVjaCUyMHRlYW18ZW58MXx8fHwxNzU3OTU3MDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Award-winning designer with expertise in user experience and interface design.",
    skills: ["UX/UI", "Design Systems", "Prototyping"]
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1635768229592-8c2532d33cb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhwcm9mZXNzaW9uYWwlMjBtYW4lMjB0ZWNofGVufDF8fHx8MTc1Nzk1NzA3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Frontend specialist with deep expertise in React, TypeScript, and modern web technologies.",
    skills: ["React", "TypeScript", "Performance"]
  }
];

export function Team() {
  return (
    <section id="team" className="py-16 md:py-24 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            Our Team
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Meet the Experts Behind TechFlow
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our diverse team of talented professionals brings together decades of experience 
            in technology, design, and business strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                z: 50
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card className="group backdrop-blur-sm bg-card/90 border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 object-cover"
                      />
                    </motion.div>
                    
                    {/* Animated overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Social icons with 3D animation */}
                    <motion.div 
                      className="absolute bottom-4 left-4 right-4"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex space-x-3 justify-center">
                        {[
                          { icon: Linkedin, delay: 0 },
                          { icon: Twitter, delay: 0.1 },
                          { icon: Github, delay: 0.2 }
                        ].map((social, socialIndex) => {
                          const SocialIcon = social.icon;
                          return (
                            <motion.button 
                              key={socialIndex}
                              className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                              initial={{ scale: 0, rotateZ: -180 }}
                              whileHover={{ 
                                scale: 1, 
                                rotateZ: 0,
                                rotateY: 360 
                              }}
                              animate={{ scale: 1, rotateZ: 0 }}
                              transition={{ 
                                delay: social.delay,
                                type: "spring",
                                stiffness: 200 
                              }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <SocialIcon className="h-4 w-4 text-white" />
                            </motion.button>
                          );
                        })}
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="p-6 space-y-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <div className="text-center space-y-1">
                      <motion.h3
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {member.name}
                      </motion.h3>
                      <motion.p 
                        className="text-sm text-primary"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {member.role}
                      </motion.p>
                    </div>
                    
                    <p className="text-sm text-muted-foreground text-center">
                      {member.bio}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: index * 0.1 + skillIndex * 0.1 + 0.5,
                            type: "spring",
                            stiffness: 200 
                          }}
                          whileHover={{ 
                            scale: 1.1,
                            rotateZ: 5 
                          }}
                        >
                          <Badge variant="secondary" className="text-xs backdrop-blur-sm bg-secondary/80">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to join our amazing team?
          </p>
          <button className="text-primary hover:text-primary/80 transition-colors">
            View Open Positions →
          </button>
        </div>
      </div>
    </section>
  );
}