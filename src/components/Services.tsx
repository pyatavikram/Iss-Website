import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
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
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Comprehensive Tech Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to deployment, we provide end-to-end technology solutions 
            that drive innovation and accelerate your business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className={`relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  service.popular ? 'border-primary shadow-md' : ''
                }`}
              >
                {service.popular && (
                  <Badge className="absolute -top-2 left-4 bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription>
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <button className="text-primary hover:text-primary/80 transition-colors flex items-center space-x-1">
                      <span>Learn more</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}