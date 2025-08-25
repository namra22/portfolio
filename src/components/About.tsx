import { Card } from "@/components/ui/card";
import { Target, Award, Users, Database } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Public Health Focus",
      description: "Specializing in health informatics and data-driven solutions for global health initiatives"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Technical Expertise",
      description: "Proficient in full-stack development, database management, and system optimization"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Capacity Building",
      description: "Experienced in training health teams and implementing DHIS2 systems"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Currently pursuing MS in AI to enhance expertise in data-driven healthcare solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8 shadow-lg border-0 bg-gradient-card">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am a dedicated IT and Software Specialist with extensive experience in public health 
              informatics and IT systems support. My work at the National Institute of Health (NIH) 
              Pakistan focuses on protecting and improving public health globally through building 
              and strengthening public health impact.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mt-4">
              With a strong background in database management and software development, I have a 
              proven record of enhancing health programs and training stakeholders. My expertise 
              spans from developing mobile applications to implementing large-scale health data 
              systems like DHIS2.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 border-0 bg-card hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;