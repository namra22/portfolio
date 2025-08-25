import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Globe, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "namraikram78@gmail.com",
      href: "mailto:namraikram78@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "03185696512",
      href: "tel:03185696512"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Islamabad, Pakistan",
      href: null
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/namra22",
      href: "https://github.com/namra22"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Get In Touch
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 shadow-xl border-0 bg-gradient-card">
            <div className="text-center mb-8">
              <p className="text-lg text-muted-foreground">
                I'm always interested in hearing about new opportunities and collaborations 
                in health informatics and software development. Feel free to reach out!
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors"
                >
                  <div className="p-2 bg-gradient-primary rounded-lg text-primary-foreground">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-foreground hover:text-primary transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity"
                asChild
              >
                <a href="mailto:namraikram78@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Me an Email
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;