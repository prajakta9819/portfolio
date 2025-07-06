import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const StudiesSection = () => {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Indian Institute of Technology (IIT) Delhi",
      location: "New Delhi, India",
      period: "2018 - 2020",
      gpa: "8.7/10.0",
      description: "Specialized in Software Engineering and Quality Assurance. Completed advanced coursework in software testing methodologies, automation frameworks, and quality management systems.",
      highlights: [
        "Dean's List for Academic Excellence (2019, 2020)",
        "Led university team in Inter-IIT Software Testing Competition",
        "Research project on 'AI-driven Test Case Generation'",
        "Teaching Assistant for Software Quality Assurance course"
      ],
      subjects: ["Software Testing", "Quality Assurance", "Database Systems", "Web Technologies", "Data Structures", "Software Engineering"]
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "University of Delhi",
      location: "Delhi, India",
      period: "2015 - 2018",
      gpa: "8.2/10.0",
      description: "Foundation in computer science with focus on programming fundamentals and software development. Active participant in coding competitions and technical events.",
      highlights: [
        "First Class with Distinction",
        "Winner of Annual Programming Contest 2017",
        "President of Computer Science Society",
        "Organized technical workshops on testing methodologies"
      ],
      subjects: ["Programming Fundamentals", "Computer Networks", "Operating Systems", "Software Development", "Mathematics", "Statistics"]
    }
  ];

  const certifications = [
    {
      name: "ISTQB Certified Tester Foundation Level",
      issuer: "International Software Testing Qualifications Board",
      year: "2021",
      badge: "Foundation"
    },
    {
      name: "Selenium WebDriver Certification",
      issuer: "Automation Testing Institute",
      year: "2022",
      badge: "Automation"
    },
    {
      name: "Agile Testing Certification",
      issuer: "Scrum Alliance",
      year: "2023",
      badge: "Agile"
    },
    {
      name: "API Testing with Postman",
      issuer: "Postman Academy",
      year: "2022",
      badge: "API"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strong academic foundation in computer science with specialized focus on software quality assurance, 
            complemented by industry-recognized certifications.
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Academic Qualifications</h3>
          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="p-8 bg-gradient-card border-border/50 hover:shadow-primary/20 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <div className="flex items-start space-x-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {edu.degree}
                        </h4>
                        <p className="text-primary font-semibold">{edu.institution}</p>
                        <div className="flex items-center text-muted-foreground text-sm mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="font-medium">{edu.period}</span>
                    </div>
                    <div className="flex items-center text-primary">
                      <Award className="h-4 w-4 mr-2" />
                      <span className="font-bold">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {edu.description}
                </p>

                <div className="mb-6">
                  <h5 className="font-semibold text-foreground mb-3">Key Highlights:</h5>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-foreground mb-3">Key Subjects:</h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.subjects.map((subject, sIndex) => (
                      <Badge 
                        key={sIndex} 
                        variant="outline" 
                        className="border-primary/30 text-primary hover:bg-primary/10"
                      >
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="p-6 bg-gradient-card border-border/50 hover:shadow-primary/20 transition-all duration-300 group text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors w-fit mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cert.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {cert.year}
                  </Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                    {cert.badge}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudiesSection;