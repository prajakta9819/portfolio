import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Calendar, Building } from "lucide-react";

const ExperienceSection = () => {
  const canadianExperience = [
    {
      title: "Operations Specialist",
      company: "Apple Canada",
      location: "Waterloo, ON",
      period: "May 2024 - Present",
      logo: "🍎",
      description: "Execute daily inventory and stockroom operations with precision and efficiency to support a seamless Apple Retail customer experience.",
      achievements: [
        "Maintained 100% compliance with Apple's Retail Inventory standards during weekly audits",
        "Ensured timely fulfillment of runner requests, reducing wait times and supporting sales team success",
        "Archived sensitive government-related documents accurately and securely",
        "Supported multiple departments during product launches and merchandising refreshes"
      ],
      technologies: ["Apple Retail Inventory System", "Secure Stockroom Protocols", "Loss Prevention Procedures"]
    },
    {
      title: "Sales Associate",
      company: "Carlsberg Canada / Waterloo Brewing",
      location: "Waterloo, ON",
      period: "Jan 2024 – Apr 2024",
      logo: "🍺",
      description: "Contributed to a high-performing retail environment through product expertise and operational support.",
      achievements: [
        "Assisted customers with product queries and knowledgeable recommendations",
        "Maintained merchandising standards and visual displays",
        "Managed back-store operations and inventory management",
        "Collaborated effectively as a team player"
      ],
      technologies: ["POS System", "Inventory Management Tools", "Excel", "Retail CRM"]
    },
    {
      title: "Sales Advisor",
      company: "Hennes & Mauritz (H&M)",
      location: "Waterloo, ON",
      period: "Jun 2023 – Sept 2024",
      logo: "👗",
      description: "Delivered exceptional customer service while supporting sales, inventory, and merchandising operations.",
      achievements: [
        "Delivered exceptional customer service across all departments",
        "Recognized for being highly dependable and quick to learn new areas",
        "Supported truck deliveries and restocking with efficiency",
        "Provided personalized shopping experiences contributing to store sales"
      ],
      technologies: ["POS System", "Retail Stock Scanner", "Loss Prevention Tools"]
    }
  ];

  const indianExperience = [
    {
      title: "Junior QA Analyst",
      company: "Crescent Global IT Service Pvt Ltd/ Fugetron Corp",
      location: "Andheri, Mumbai, India",
      period: "Jan 2023 – Apr 2024",
      logo: "🔍",
      description: "Contributed to multiple concurrent QA projects involving mobile, web, and API testing.",
      achievements: [
        "Awarded 'Best Performer of the Quarter' for outstanding contribution to quality goals",
        "Executed full-cycle testing for iOS-based Nifty Media Art mobile app",
        "Led penetration, API, and security testing for The Team Companies' Clear and VPAY projects",
        "Performed OKTA integration testing and mobile build validations"
      ],
      technologies: ["Selenium", "Postman", "JIRA", "Rest Assured", "iOS Testing", "OKTA", "API Security Testing"],
      projects: [
        {
          name: "Nifty Media Art",
          description: "E2E testing across modules such as Login, Registration, NFT Listings, Marketplace, and Admin Portal for an iOS mobile application",
          tech: ["iOS Testing", "Manual QA", "Postman", "JIRA"]
        },
        {
          name: "TTC Clear Project",
          description: "Led testing efforts for Clear, focusing on API functionality, penetration testing, and OKTA authentication flows",
          tech: ["Postman", "API Testing", "Security Validation", "OKTA"]
        },
        {
          name: "TTC VPAY",
          description: "Tested and validated secure financial workflows within VPAY, ensuring compliance and system reliability",
          tech: ["Penetration Testing", "API Testing", "Security Compliance"]
        }
      ]
    },
    {
      title: "Software Engineer",
      company: "Larsen & Toubro Infotech (LTIMindtree)",
      location: "(Mumbai, Chennai) India",
      period: "Jul 2018 – Dec 2020",
      logo: "💻",
      description: "Worked across development and QA teams, contributing to mission-critical applications through both front-end development and software testing.",
      achievements: [
        "Contributed to planning, execution, and documentation of manual testing efforts",
        "Performed unit, integration, and UAT testing to ensure system integrity",
        "Designed and implemented multiple web pages using HTML, CSS, and JavaScript",
        "Provided rapid-response support for production-critical issues"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Manual Testing", "BugZilla", "Waterfall"],
      projects: [
        {
          name: "Kyosan Project – QA & UAT",
          description: "Participated in QA planning and execution phases for the Kyosan project, supporting UAT and integration testing",
          tech: ["Manual Testing", "Test Case Design", "UAT", "Bug Tracking"]
        },
        {
          name: "Web Development & UI Integration",
          description: "Designed and developed client-side pages using HTML/CSS/JS, ensuring seamless navigation and responsiveness",
          tech: ["HTML", "CSS", "JavaScript"]
        }
      ]
    }
  ];

  const ExperienceCard = ({ exp, showProjects = false }: { exp: any, showProjects?: boolean }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 mb-6">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl">{exp.logo}</div>
            <div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                {exp.title}
              </CardTitle>
              <div className="flex items-center gap-2 text-muted-foreground mt-1">
                <Building className="h-4 w-4" />
                <span className="font-medium">{exp.company}</span>
              </div>
            </div>
          </div>
          <Badge variant="outline" className="shrink-0">
            {exp.period}
          </Badge>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{exp.location}</span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          {exp.description}
        </p>
        
        <div>
          <h4 className="font-semibold mb-2 text-primary">Key Achievements:</h4>
          <ul className="space-y-1">
            {exp.achievements.map((achievement: string, index: number) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2 text-primary">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {showProjects && exp.projects && (
          <div>
            <h4 className="font-semibold mb-3 text-primary">Key Projects:</h4>
            <Accordion type="single" collapsible className="w-full">
              {exp.projects.map((project: any, index: number) => (
                <AccordionItem key={index} value={`project-${index}`}>
                  <AccordionTrigger className="text-left">
                    {project.name}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech: string, techIndex: number) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 bg-background" id="experience">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Professional Journey
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            3+ years of progressive QA experience across India and Canada, evolving from foundational manual testing to leading automation initiatives
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="canada" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="canada" className="flex items-center gap-2">
                🇨🇦 Canadian Experience
              </TabsTrigger>
              <TabsTrigger value="india" className="flex items-center gap-2">
                🇮🇳 Indian Experience
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="canada" className="space-y-6">
              {canadianExperience.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} />
              ))}
            </TabsContent>
            
            <TabsContent value="india" className="space-y-6">
              {indianExperience.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} showProjects={true} />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;