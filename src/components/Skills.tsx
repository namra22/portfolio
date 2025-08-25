import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Globe, Heart } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "JavaScript/React", level: 85 },
        { name: "Python", level: 80 },
        { name: "PHP/Laravel", level: 85 },
        { name: "C++", level: 75 }
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Android Studio", level: 85 },
        { name: "MS Office", level: 95 },
        { name: "DHIS 2", level: 80 },
        { name: "Database Management", level: 85 }
      ]
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health Informatics",
      skills: [
        { name: "Public Health Informatics", level: 90 },
        { name: "Health Data Systems", level: 85 },
        { name: "Capacity Building", level: 88 },
        { name: "Data Validation", level: 85 },
        { name: "Workflow Optimization", level: 82 }
      ]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Languages",
      skills: [
        { name: "English", level: 85, label: "Proficient" },
        { name: "Urdu", level: 100, label: "Native" },
        { name: "Pashto", level: 100, label: "Native" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-card"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-primary rounded-lg text-primary-foreground">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {skill.label || `${skill.level}%`}
                      </span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;