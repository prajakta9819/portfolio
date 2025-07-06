import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Bug, Shield, Target } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: CheckCircle,
      title: "3+ Years Experience",
      description: "Comprehensive testing across web, mobile, and API platforms"
    },
    {
      icon: Bug,
      title: "Bug Hunter",
      description: "Identified and resolved 500+ critical issues across projects"
    },
    {
      icon: Shield,
      title: "Quality Guardian",
      description: "Implemented testing frameworks that improved product reliability by 40%"
    },
    {
      icon: Target,
      title: "Precision Focus",
      description: "Specialized in automation testing and performance optimization"
    }
  ];

  const skills = [
    "Manual Testing", "Automation Testing", "API Testing", "Performance Testing",
    "Selenium WebDriver", "TestNG", "Postman", "JIRA", "Cypress", "REST APIs",
    "SQL", "Python", "Java", "Agile Methodologies", "Test Case Design", "Bug Reporting"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated Software QA Engineer with a passion for ensuring software excellence. 
            My journey in quality assurance has been driven by attention to detail and a commitment 
            to delivering bug-free, high-performance applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slide-in-left">
            <div className="bg-gradient-card rounded-xl p-8 shadow-card">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">My Approach</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I believe quality assurance is more than just finding bugs—it's about understanding 
                user behavior, anticipating edge cases, and ensuring seamless user experiences. 
                I combine manual testing expertise with automation skills to deliver comprehensive 
                quality solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My experience spans various industries, from e-commerce platforms to enterprise applications, 
                where I've consistently improved software reliability and user satisfaction.
              </p>
            </div>
          </div>

          <div className="grid gap-4 animate-slide-in-right">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-border/50 hover:shadow-primary/20 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center animate-fade-in">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm bg-secondary/50 hover:bg-secondary transition-colors cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;