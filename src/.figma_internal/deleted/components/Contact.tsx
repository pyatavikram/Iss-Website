import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "hello@techflow.com",
    description: "Send us an email and we'll respond within 24 hours"
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+1 (555) 123-4567",
    description: "Mon-Fri 9AM-6PM EST"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "123 Tech Street, San Francisco, CA 94102",
    description: "Our headquarters in the heart of SF"
  },
  {
    icon: Clock,
    title: "Business Hours",
    detail: "Monday - Friday: 9AM - 6PM EST",
    description: "Weekend emergency support available"
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can help transform your ideas into powerful digital solutions. 
            We're here to answer all your questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5" />
                <span>Send us a Message</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName">First Name</label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName">Last Name</label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email">Email</label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company">Company (Optional)</label>
                  <Input id="company" placeholder="Acme Corp" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject">Subject</label>
                  <Input id="subject" placeholder="Project Inquiry" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project requirements..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button className="w-full group">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3>Get in Touch</h3>
              <p className="text-muted-foreground">
                We'd love to hear from you. Choose the method that works best for you, 
                and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h4>{info.title}</h4>
                      <p className="text-primary">{info.detail}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h4>Prefer a Quick Call?</h4>
                  <p className="text-primary-foreground/80">
                    Book a 15-minute discovery call to discuss your project requirements 
                    and see how we can help.
                  </p>
                  <Button variant="secondary" size="sm">
                    Schedule Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}