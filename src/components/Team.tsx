import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from './ui/button';

const team = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Co-founder',
    image:
      'https://images.unsplash.com/photo-1580894742597-87bc8789db3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGRldmVsb3BlcnxlbnwxfHx8fDE3NTc5NTg1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bio: 'Former Google engineer with 12+ years of experience in scaling tech companies.',
    skills: ['Strategy', 'Leadership', 'Product Vision'],
  },
  {
    name: 'Marcus Johnson',
    role: 'CTO & Co-founder',
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjB0ZWNofGVufDF8fHx8MTc1Nzk1NzA3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bio: 'Full-stack architect passionate about building scalable, secure systems.',
    skills: ['Architecture', 'Cloud', 'Security'],
  },
  {
    name: 'Elena Rodriguez',
    role: 'Head of Design',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVjaCUyMHRlYW18ZW58MXx8fHwxNzU3OTU3MDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bio: 'Award-winning designer with expertise in user experience and interface design.',
    skills: ['UX/UI', 'Design Systems', 'Prototyping'],
  },
  {
    name: 'David Kim',
    role: 'Lead Developer',
    image:
      'https://images.unsplash.com/photo-1542393545-10f5cde2c810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxwcm9mZXNzaW9uYWwlMjBtYW4lMjB0ZWNofGVufDF8fHx8MTc1Nzk1NzA3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bio: 'Frontend specialist with deep expertise in React, TypeScript, and modern web technologies.',
    skills: ['React', 'TypeScript', 'Performance'],
  },
];

export function Team() {
  return (
    <section id="team" className="py-16 md:py-24 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            Our Team
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            Meet the Experts Behind TechFlow
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of talented professionals brings together decades
            of experience in technology, design, and business strategy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-3 justify-center">
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                        <Linkedin className="h-4 w-4 text-white" />
                      </button>
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                        <Twitter className="h-4 w-4 text-white" />
                      </button>
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                        <Github className="h-4 w-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="text-center space-y-1">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-sm text-primary">{member.role}</p>
                  </div>

                  <p className="text-sm text-muted-foreground text-center">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-1 justify-center pt-2">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Want to join our amazing team?
          </p>
          <Button variant="outline">View Open Positions →</Button>
        </div>
      </div>
    </section>
  );
}