import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin, ExternalLink, Github } from 'lucide-react';

const ExperienceSection = () => {
  const indiaExperience = [
    {
      title: "Junior QA Analyst",
      company: "TechnoSoft Solutions Pvt Ltd",
      location: "Bangalore, India",
      period: "2020 - 2021",
      description: "Started my QA journey focusing on manual testing and bug reporting for e-commerce and fintech applications. Quickly adapted to agile methodologies and contributed to multiple product releases.",
      achievements: [
        "Executed manual testing for 8+ web and mobile applications",
        "Created comprehensive test documentation and bug reports",
        "Achieved 99% accuracy in defect identification across projects",
        "Collaborated with cross-functional teams in agile environment"
      ],
      technologies: ["Manual Testing", "JIRA", "Confluence", "TestRail", "Agile", "SQL"],
      projects: [
        {
          name: "E-commerce Payment Gateway Testing",
          description: "Comprehensive testing of payment integration for major Indian e-commerce platform",
          technologies: ["Manual Testing", "API Testing", "Security Testing"],
          link: null
        },
        {
          name: "Mobile Banking App QA",
          description: "End-to-end testing of mobile banking application across Android and iOS platforms",
          technologies: ["Mobile Testing", "Cross-platform Testing", "Security Testing"],
          link: null
        }
      ]
    }
  ];

  const canadaExperience = [
    {
      title: "Senior QA Engineer",
      company: "TechFlow Solutions",
      location: "Toronto, Canada",
      period: "2022 - Present",
      description: "Leading quality assurance initiatives for enterprise SaaS applications. Implemented comprehensive automation frameworks and mentored junior team members while ensuring zero-downtime deployments.",
      achievements: [
        "Reduced manual testing time by 65% through automation implementation",
        "Led QA team of 4 engineers across multiple product lines",
        "Improved bug detection rates by 45% with advanced testing strategies",
        "Integrated testing into CI/CD pipeline reducing deployment time by 40%"
      ],
      technologies: ["Selenium", "Cypress", "TestNG", "Jenkins", "Python", "Docker", "AWS"],
      projects: [
        {
          name: "Enterprise CRM Automation Suite",
          description: "Built comprehensive automation framework for large-scale CRM application serving 10K+ users",
          technologies: ["Selenium WebDriver", "TestNG", "Jenkins", "Maven"],
          link: "https://github.com/alex-johnson-qa/crm-automation"
        },
        {
          name: "API Testing Framework",
          description: "Developed robust API testing framework with data-driven approach for microservices architecture",
          technologies: ["RestAssured", "Python", "Pytest", "Docker"],
          link: "https://github.com/alex-johnson-qa/api-test-framework"
        },
        {
          name: "Performance Testing Suite",
          description: "Comprehensive performance testing solution for high-traffic web applications",
          technologies: ["JMeter", "Grafana", "InfluxDB", "AWS CloudWatch"],
          link: "https://github.com/alex-johnson-qa/performance-suite"
        }
      ]
    },
    {
      title: "QA Engineer",
      company: "InnovateTech Canada",
      location: "Vancouver, Canada", 
      period: "2021 - 2022",
      description: "Specialized in automated testing for cloud-based applications and API services. Developed testing strategies for high-availability systems and contributed to DevOps practices.",
      achievements: [
        "Implemented automated regression testing reducing release cycles by 50%",
        "Designed API testing suite covering 200+ endpoints",
        "Maintained 98% test coverage across critical application features",
        "Established testing best practices adopted company-wide"
      ],
      technologies: ["Postman", "Newman", "Cypress", "JavaScript", "MySQL", "AWS", "Kubernetes"],
      projects: [
        {
          name: "Cloud Migration Testing",
          description: "Led QA efforts for migrating legacy applications to AWS cloud infrastructure",
          technologies: ["AWS", "Terraform", "Selenium", "Performance Testing"],
          link: null
        },
        {
          name: "Microservices Testing Strategy",
          description: "Developed comprehensive testing approach for microservices architecture",
          technologies: ["API Testing", "Contract Testing", "Docker", "Kubernetes"],
          link: "https://github.com/alex-johnson-qa/microservices-testing"
        }
      ]
    }
  ];

  const ProjectCard = ({ project }: { project: any }) => (
    <div className="bg-secondary/20 rounded-lg p-4 border border-border/30">
      <div className="flex items-start justify-between mb-2">
        <h6 className="font-semibold text-foreground">{project.name}</h6>
        {project.link && (
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-glow transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
        )}
      </div>
      <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
      <div className="flex flex-wrap gap-1">
        {project.technologies.map((tech: string, techIndex: number) => (
          <Badge 
            key={techIndex} 
            variant="secondary" 
            className="text-xs bg-secondary/50"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );

  const ExperienceCard = ({ exp, index }: { exp: any, index: number }) => (
    <div 
      className="relative mb-12 animate-fade-in"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
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
            {exp.achievements.map((achievement: string, achIndex: number) => (
              <li key={achIndex} className="flex items-start text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech: string, techIndex: number) => (
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

        {exp.projects && exp.projects.length > 0 && (
          <div>
            <h4 className="font-semibold text-foreground mb-4">Key Projects:</h4>
            <div className="grid gap-4">
              {exp.projects.map((project: any, projIndex: number) => (
                <ProjectCard key={projIndex} project={project} />
              ))}
            </div>
          </div>
        )}
      </Card>
    </div>
  );

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            3+ years of progressive growth across India and Canada, from foundational testing skills 
            to leading automation initiatives and mentoring teams.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Canada Experience */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="flex-1 h-px bg-gradient-primary"></div>
              <h3 className="px-6 text-2xl font-bold text-foreground bg-background">
                🇨🇦 Canada Experience
              </h3>
              <div className="flex-1 h-px bg-gradient-primary"></div>
            </div>
            
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block"></div>
              {canadaExperience.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} index={index} />
              ))}
            </div>
          </div>

          {/* India Experience */}
          <div>
            <div className="flex items-center mb-8">
              <div className="flex-1 h-px bg-gradient-primary"></div>
              <h3 className="px-6 text-2xl font-bold text-foreground bg-background">
                🇮🇳 India Experience
              </h3>
              <div className="flex-1 h-px bg-gradient-primary"></div>
            </div>
            
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block"></div>
              {indiaExperience.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;