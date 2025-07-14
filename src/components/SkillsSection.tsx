import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Testing Types",
      skills: [
        "Manual Testing",
        "Automation Testing", 
        "API Testing",
        "Performance Testing",
        "Security Testing",
        "Penetration Testing",
        "Regression Testing",
        "Integration Testing",
        "UAT Testing",
        "Functional Testing"
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Selenium",
        "Cypress", 
        "REST Assured",
        "Postman",
        "JIRA",
        "Redmine",
        "BugZilla",
        "GitLab",
        "SQL",
        "JavaScript"
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        "Python (basic)",
        "Java",
        "JavaScript",
        "HTML",
        "CSS",
        "SQL"
      ]
    },
    {
      title: "Methodologies & Frameworks",
      skills: [
        "Agile Methodologies",
        "Waterfall Environment",
        "Scrum Essentials",
        "Kanban Methodology",
        "Test Case Design",
        "Bug Reporting",
        "TDD",
        "OKTA Integration"
      ]
    }
  ];

  return (
    <section className="py-20 bg-accent/30" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Technical Skills
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across testing methodologies, automation tools, and development practices
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary group-hover:text-primary/80 transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-sm py-1 px-3 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;