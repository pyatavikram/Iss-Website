import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-36 lg:pb-32"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10 dark:from-primary/10 dark:to-secondary/20"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className="w-fit mx-auto lg:mx-0"
              >
                🚀 Now Available
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight font-semibold">
                Building the Future of{' '}
                <span className="text-primary">Digital Innovation</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                We create cutting-edge software solutions that transform
                businesses and empower teams to achieve extraordinary results in
                the digital age.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 text-center">
              <div>
                <div className="font-semibold text-2xl">500+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="font-semibold text-2xl">99%</div>
                <div className="text-sm text-muted-foreground">
                  Client Satisfaction
                </div>
              </div>
              <div>
                <div className="font-semibold text-2xl">24/7</div>
                <div className="text-sm text-muted-foreground">
                  Support Available
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-primary to-secondary rounded-lg blur-lg opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHx3b21hbiUyMGRldmVsb3BlcnxlbnwxfHx8fDE3NTc5NTg1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern tech workspace"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}