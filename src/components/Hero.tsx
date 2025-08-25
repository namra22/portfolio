import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center space-y-8 animate-fadeIn">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-sky-600">
              Namra Ikram
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground">
              IT and Software Specialist
            </p>
          </div>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            Dedicated IT specialist with extensive experience in public health informatics 
            and software development. Currently pursuing MS in AI to enhance data-driven 
            solutions for global health.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              <a href="mailto:namraikram78@gmail.com" className="hover:text-primary transition-colors">
                namraikram78@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              <span>03185696512</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Islamabad, Pakistan</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button
              variant="default"
              size="lg"
             className="bg-gradient-primary text-primary hover:text-white hover:opacity-90 transition-colors transition-opacity"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href="https://github.com/namra22" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary opacity-10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary opacity-10 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;