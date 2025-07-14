import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const EducationSection = () => {
  const academicQualifications = [
    {
      degree: "Graduate Certificate in IT Project Management",
      institution: "Conestoga College",
      location: "Waterloo, Canada",
      period: "May 2024 - Dec 2024",
      gpa: "3.68/4",
      highlights: [
        "Academic Award: DISTINCTION",
        "Document of Recognition: ONTARIO COLLEGE GRADUATE CERTIFICATE"
      ],
      description: "Focused on Agile methodologies, stakeholder management, budgeting, scheduling, and risk assessment within IT project environment.",
      subjects: [
        "Technical Communication",
        "Agile Principles", 
        "Stakeholder Management",
        "Project Management",
        "Management & Leadership Essentials",
        "Scrum Essentials",
        "Kanban Methodology",
        "Agile Planning/ Problem Solving",
        "Emerging Technology",
        "Capstone - Battling Bishops (Chess Game)"
      ]
    },
    {
      degree: "Graduate Certificate in Software Quality & Test Engineering",
      institution: "Conestoga College", 
      location: "Waterloo, Canada",
      period: "May 2023 - Dec 2023",
      gpa: "3.74/4",
      highlights: [
        "Academic Award: DISTINCTION (First Class Honours)",
        "Dean's Honours List (2023)",
        "Document of Recognition: ONTARIO COLLEGE GRADUATE CERTIFICATE"
      ],
      description: "Specialised in Software testing methodologies, automation frameworks, and quality assurance principles across web, mobile, and backend systems.",
      subjects: [
        "High Quality Software Programming",
        "System Analysis and Design",
        "Software Testing Tools",
        "Software Testing Methodologies", 
        "Software Engineering Principles",
        "User Experience Evaluation",
        "Developing Quality Applications",
        "Non-Functional Testing",
        "Security Testing",
        "Database Testing"
      ]
    }
  ];

  const certifications = [
    {
      title: "DevOps and Jenkins Fundamentals",
      provider: "LearnKartS",
      year: "2025",
      category: "DevOps",
      icon: "⚙️"
    },
    {
      title: "Foundations of Project Management", 
      provider: "Google",
      year: "2024",
      category: "Foundation",
      icon: "📊"
    },
    {
      title: "Cypress UI automation testing for absolute beginners",
      provider: "Coursera Project Network",
      year: "2024", 
      category: "Automation",
      icon: "🤖"
    },
    {
      title: "API Testing Using Rest Assured Test Automation Tool",
      provider: "Coursera Project Network", 
      year: "2024",
      category: "API",
      icon: "🔌"
    },
    {
      title: "Scrum Master Certification: Scaling Agile and the Team-of-Teams",
      provider: "LearnQuest",
      year: "2024",
      category: "Foundation", 
      icon: "🏃‍♂️"
    },
    {
      title: "How to use roadmaps in Jira",
      provider: "Coursera Project Network",
      year: "2024",
      category: "Foundation",
      icon: "🗺️"
    }
  ];

  const AcademicCard = ({ qualification }: { qualification: any }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 mb-6">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                {qualification.degree}
              </CardTitle>
              <div className="flex items-center gap-2 text-muted-foreground mt-1">
                <span className="font-medium">{qualification.institution}</span>
              </div>
            </div>
          </div>
          <Badge variant="outline" className="shrink-0">
            GPA: {qualification.gpa}
          </Badge>
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{qualification.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{qualification.period}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          {qualification.description}
        </p>
        
        <div>
          <h4 className="font-semibold mb-2 text-primary flex items-center gap-2">
            <Award className="h-4 w-4" />
            Key Highlights:
          </h4>
          <ul className="space-y-1">
            {qualification.highlights.map((highlight: string, index: number) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1">🏆</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2 text-primary">Key Subjects:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {qualification.subjects.map((subject: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs justify-start">
                {subject}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const CertificationCard = ({ cert }: { cert: any }) => (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="text-2xl">{cert.icon}</div>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                {cert.title}
              </h4>
              <Badge variant="outline" className="shrink-0 ml-2">
                {cert.year}
              </Badge>
            </div>
            <p className="text-muted-foreground mb-2">{cert.provider}</p>
            <Badge variant="secondary" className="text-xs">
              {cert.category}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 bg-accent/30" id="education">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Education & Certifications
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Education & Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation in computer science with specialized focus on software quality and project management, 
            complemented by industry-recognized certifications
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="academic" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="academic" className="flex items-center gap-2">
                🎓 Academic Qualifications
              </TabsTrigger>
              <TabsTrigger value="certifications" className="flex items-center gap-2">
                📜 Professional Certifications
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="academic" className="space-y-6">
              {academicQualifications.map((qualification, index) => (
                <AcademicCard key={index} qualification={qualification} />
              ))}
            </TabsContent>
            
            <TabsContent value="certifications" className="space-y-6">
              <div className="grid gap-6">
                {certifications.map((cert, index) => (
                  <CertificationCard key={index} cert={cert} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;