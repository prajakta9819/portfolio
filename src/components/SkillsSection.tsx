import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  const skills = [
    "Manual Testing",
    "Automation Testing", 
    "API Testing",
    "Performance Testing",
    "Security Testing",
    "Penetration Testing",
    "Selenium",
    "Cypress", 
    "REST Assured",
    "Postman",
    "JIRA",
    "Python",
    "Java",
    "JavaScript",
    "SQL",
    "Agile Methodologies",
    "Scrum",
    "Test Case Design",
    "Bug Reporting",
    "TDD",
    "GitLab",
    "OKTA Integration"
  ];

  return (
    <section className="py-20 bg-accent/30" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across testing methodologies, automation tools, and development practices
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
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

export default SkillsSection;
