import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "MS in Artificial Intelligence",
      institution: "Comsats University Islamabad",
      period: "August 2024 - Present",
      status: "In Progress",
      description: "Focusing on AI applications in healthcare and data-driven solutions"
    },
    {
      degree: "BS in Software Engineering",
      institution: "International Islamic University Islamabad",
      period: "August 2018 - August 2022",
      status: "Completed",
      description: "Comprehensive education in software development, database systems, and engineering principles"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Education
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-card relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-primary" />
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground flex-shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.institution}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mt-2 md:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      edu.status === 'In Progress' 
                        ? 'bg-secondary text-secondary-foreground' 
                        : 'bg-primary text-primary-foreground'
                    }`}>
                      {edu.status}
                    </span>
                    <p className="text-muted-foreground text-sm">{edu.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;