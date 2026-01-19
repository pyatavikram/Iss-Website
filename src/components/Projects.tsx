import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'Readefy – Online book portal',
    duration: '2016 – present',
    role: 'Application Architect, Developer',
    description: [
      'Taken up as a freelancing project along with couple of other developers.',
      'Setting up the architecture based on repository pattern.',
    ],
    environment: 'ASP.NET Web API, Dapper, LINQ, MS SQL Server, AngularJS',
    client: 'Individual',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2glMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc1Nzk2MjU4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Gamyam – Tracking & Navigation solutions',
    duration: '2015 to 2016',
    role: 'Application Architect',
    description: [
      'Served as Subject-Matter Expert (SME) on various strategies.',
      'Created infrastructure for application development process that improved overall application quality and accelerated application delivery timeframes.',
      'Designed & implemented the application flow model.',
    ],
    environment: 'ASP.NET Web API, Entity Framework, LINQ, MS SQL Server, AngularJS',
    client: 'GVK EMRI – 108 services, Delhi Public School',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMHRlY2glMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc1Nzk2MjU4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'a-mantra – Facilities Mgmt. system',
    duration: '2013 – 2015',
    role: 'Senior Application Developer, Team lead',
    description: [
      'Upgraded the product with business specific customizations.',
      'Managed and led the entire application development/redesigning activity.',
    ],
    environment: 'ASP.NET Web API, Entity Framework, LINQ, MS SQL Server, AngularJS',
    client: 'Yes Bank',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMHRlY2glMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc1Nzk2MjU4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'SaiNath Documentation Automation',
    duration: '2010 - 2012',
    role: 'Senior Application Developer',
    description: [
      'Software that is used to generate House/Flat/Plot/Agriculture sale deed documentation based on the user inputs.',
      'Developed and oversaw execution of the entire windows based application.',
      'Designed & developed the licensing & renewal mechanism.',
      'Provided product support by diagnosing customer problems.',
    ],
    environment: 'C#.NET, MS Access',
    client: 'Government aided organization',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxhYnN0cmFjdCUyMHRlY2glMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc1Nzk2MjU4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'DSRAuto - Digitization of service report',
    duration: '2007 - 2008',
    role: 'Senior Application Developer',
    description: [
      'Generates an automated service inspection report for Field Engineers’ & Service Managers on outages performed with improved reliability and performance.',
      'Delivered fully tested source code complying with quality indicators objectives.',
      'Defined and documented both functional and technical specifications.',
    ],
    environment: 'C#.NET, ASP.NET, Oracle 9i, MS Access, Windows 2008',
    client: 'BHEL – GE Gas Turbine Services Pvt. Ltd.,',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxhYnN0cmFjdCUyMHRlY2glMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc1Nzk2MjU4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Man Hours',
    duration: '2006',
    role: 'Application Developer',
    description: [
      'Calculates the time taken & manual power to service the completion of a component which helps the managers to analyze the productivity graph.',
      'Analyzed, designed, implemented and integrated clients’ functional requirements in the solutions',
    ],
    environment: 'C#.NET, Oracle 9i, Windows 2000',
    client: 'BHEL – GE Gas Turbine Services Pvt. Ltd.,',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxhYnN0cmFjdCUyMHRlY2glMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc1Nzk2MjU4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Incoming Inspection Report',
    duration: '2005',
    role: 'Application Developer',
    description: [
      'Inspection process where an issue of a component is analyzed.',
      'Reporting the complete details such as time taken to repair & service each product that is being inspected.',
    ],
    environment: 'Visual Basic 6.0, Oracle 9i',
    client: 'BHEL – GE Gas Turbine Services Pvt. Ltd.,',
    image: 'https://images.unsplash.com/photo-1542831371-d531d36971a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxhYnN0cmFjdCUyMHRlY2glMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc1Nzk2MjU4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            My Projects
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            A Selection of My Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of the projects I've had the pleasure of working on.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden grid md:grid-cols-2 group">
              <div className={`relative ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className={`p-6 sm:p-8 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="flex items-center space-x-3 mb-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-xl">{project.title}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground">Duration</h4>
                    <p className="text-sm">{project.duration}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground">Role</h4>
                    <p className="text-sm">{project.role}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground">Client</h4>
                    <p className="text-sm">{project.client}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground">Environment</h4>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.environment.split(', ').map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="pt-2">
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">Description</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {project.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
