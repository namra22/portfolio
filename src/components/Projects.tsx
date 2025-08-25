import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Github, ExternalLink, Paintbrush, CheckCircle } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Painting App - Android Studio",
      description: "An interactive mobile painting application with advanced drawing capabilities",
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ["Java", "Android Studio", "Canvas API"],
      features: [
        "Custom brush features with adjustable size and colors",
        "Shape auto-correct feature for clean geometric rendering",
        "Freehand drawing with smooth curves",
        "Save and export functionality"
      ],
      githubUrl: "https://github.com/namra22/portfolio.git",
      period: "January 2022"
    }
  ];

  const achievements = [
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Technical Training and Capacity Building",
      description: "Delivered technical training and capacity-building support for public health teams across Pakistan"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Improved Health Data Workflows",
      description: "Assisted in improving health data workflows for better decision-making at national level"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Donor-Funded Project Experience",
      description: "Contributed to internationally supported health initiatives through IT system management, data validation, and workflow optimization"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Projects & Achievements
        </h2>
        
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Projects */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Featured Projects</h3>
            <div className="grid gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-card"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground flex-shrink-0">
                      {project.icon}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-foreground">{project.title}</h4>
                          <p className="text-muted-foreground mt-1">{project.description}</p>
                        </div>
                        <span className="text-sm text-muted-foreground">{project.period}</span>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-foreground mb-2">Key Features:</p>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <Paintbrush className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* <Button
                        variant="outline"
                        size="sm"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View on GitHub
                        </a>
                      </Button> */}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Key Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 border-0 bg-card hover:scale-105"
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-primary flex-shrink-0">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;