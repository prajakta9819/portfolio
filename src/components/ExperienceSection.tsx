import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior QA Engineer",
      company: "TechFlow Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading quality assurance initiatives for enterprise-level applications. Implemented automated testing frameworks that reduced manual testing time by 60% and improved bug detection rates by 45%.",
      achievements: [
        "Established comprehensive test automation strategy using Selenium and Cypress",
        "Mentored junior QA engineers and conducted code reviews",
        "Collaborated with DevOps team to integrate testing into CI/CD pipeline",
        "Reduced production bugs by 40% through rigorous testing protocols"
      ],
      technologies: ["Selenium", "Cypress", "TestNG", "Jenkins", "Python", "REST APIs"]
    },
    {
      title: "QA Engineer",
      company: "Digital Innovations Inc",
      location: "Austin, TX",
      period: "2021 - 2022",
      description: "Performed comprehensive testing of web and mobile applications across multiple platforms. Specialized in API testing and performance optimization for high-traffic e-commerce platforms.",
      achievements: [
        "Designed and executed 200+ test cases for critical user journeys",
        "Implemented API testing suite using Postman and Newman",
        "Performed load testing that identified performance bottlenecks",
        "Achieved 95% test coverage across all product features"
      ],
      technologies: ["Postman", "JMeter", "SQL", "JIRA", "TestRail", "Mobile Testing"]
    },
    {
      title: "Junior QA Analyst",
      company: "StartupHub Technologies",
      location: "Remote",
      period: "2020 - 2021",
      description: "Started my QA journey focusing on manual testing and bug reporting. Quickly adapted to agile methodologies and contributed to multiple product releases with zero critical bugs in production.",
      achievements: [
        "Executed manual testing for 5+ web applications",
        "Created detailed bug reports and test documentation",
        "Participated in daily standups and sprint planning sessions",
        "Maintained 99% accuracy in defect identification and reporting"
      ],
      technologies: ["Manual Testing", "JIRA", "Confluence", "Agile", "HTML/CSS", "Git"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Experience Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Over 3+ years of progressive growth in software quality assurance, 
            from manual testing foundations to advanced automation leadership.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative mb-12 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow hidden md:block"></div>
                
                <Card className="md:ml-16 p-8 bg-gradient-card border-border/50 hover:shadow-primary/20 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-primary mt-2 mb-1">
                        <Building className="h-4 w-4 mr-2" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="border-primary/30 text-primary hover:bg-primary/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;