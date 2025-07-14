import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bug, Shield, Target, Zap } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Target,
      title: "3+ Years Experience",
      description: "Comprehensive testing across web, mobile, and API platforms in Agile Environments"
    },
    {
      icon: Bug,
      title: "Bug Hunter",
      description: "Identified and resolved 500+ critical issues, across major projects"
    },
    {
      icon: Shield,
      title: "Quality Guardian",
      description: "Implemented testing frameworks that improved product reliability by 40%"
    },
    {
      icon: Zap,
      title: "Precision Focus",
      description: "Specialized in performance optimization using tools like Selenium, Cypress"
    }
  ];

  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Software QA Engineer with a passion for ensuring software excellence. My journey in quality 
                assurance has been driven by attention to detail and a commitment to delivering bug-free, 
                high-performance applications.
              </p>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">My Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I believe quality assurance is more than just identifying bugs—it's about advocating for the user, 
                  anticipating edge cases, and ensuring secure, performant, and seamless user experiences. From mobile 
                  apps and web platforms to backend systems, I've executed API, performance, security, and functional 
                  testing using tools like Selenium, Cypress, and Rest Assured.
                </p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                My background includes Agile team leadership, and collaboration with cross-functional stakeholders 
                to ensure quality at every stage. Whether testing NFT marketplaces, mobile apps, or finance systems, 
                my focus remains the same: to deliver reliable, user-centered software through continuous improvement 
                and process excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-card-gradient border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2">{highlight.title}</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;