import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { 
  Users, 
  Trophy, 
  Clock, 
  Target,
  ArrowRight 
} from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: "50+",
    label: "Expert Team Members"
  },
  {
    icon: Trophy,
    value: "500+",
    label: "Successful Projects"
  },
  {
    icon: Clock,
    value: "8+",
    label: "Years of Experience"
  },
  {
    icon: Target,
    value: "99%",
    label: "Client Satisfaction"
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
    <section id="about" className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                About TechFlow
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl">
                Transforming Ideas into Digital Reality
              </h2>
              <p className="text-lg text-muted-foreground">
                Founded in 2016, TechFlow has been at the forefront of digital innovation, 
                helping businesses of all sizes leverage technology to achieve their goals. 
                Our team of experts combines technical excellence with creative problem-solving 
                to deliver solutions that make a real difference.
              </p>
            </div>

            <div className="space-y-4">
              <h3>Our Core Values</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="text-primary">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Button className="group">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardContent className="p-6 space-y-2">
                      <div className="flex justify-center">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6 text-center space-y-4">
                <h3>Ready to Start Your Project?</h3>
                <p className="text-primary-foreground/80">
                  Join hundreds of satisfied clients who trust us with their digital transformation.
                </p>
                <Button variant="secondary" size="sm">
                  Get Free Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}