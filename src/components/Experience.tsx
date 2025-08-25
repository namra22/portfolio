import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "IT Officer",
      company: "National Institute of Health (NIH), Pakistan",
      period: "May 2024 - Present",
      description: "CDC-US Pakistan Project",
      responsibilities: [
        "Ensure smooth operation of IT infrastructure across project activities",
        "Provide technical support and training for health data systems, including DHIS2",
        "Conducted capacity-building training in DHIS2 for health teams in Khyber Pakhtunkhwa (KP)",
        "Supported documentation and communication to align project workflows with international standards",
        "Collaborated with provincial health leadership (DGs of Punjab and KP) to enhance system adoption and efficiency"
      ]
    },
    {
      title: "Software Development Intern",
      company: "TECH NIH (now NHDC NIH)",
      period: "September 2022 - January 2023",
      responsibilities: [
        "Maintained and supported NIH's official website built on PHP Laravel, focusing on backend administration",
        "Designed and optimised the database structure for the Cancer Registry System",
        "Ensured efficient data management and retrieval for health analysis"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Professional Experience
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-card relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-primary" />
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground flex-shrink-0">
                  <Briefcase className="w-6 h-6" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      {exp.description && (
                        <p className="text-sm text-muted-foreground italic mt-1">{exp.description}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mt-2 md:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span className="text-muted-foreground">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;