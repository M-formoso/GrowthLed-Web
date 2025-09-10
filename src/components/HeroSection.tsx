import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/60"></div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-8 top-1/2 -translate-y-1/2 text-foreground/70 hover:text-foreground hover:bg-foreground/10 z-10"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-8 top-1/2 -translate-y-1/2 text-foreground/70 hover:text-foreground hover:bg-foreground/10 z-10"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-up">
          Potenciá tu energía!
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Somos especialistas
        </p>
        <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Button 
            size="lg" 
            className="bg-brand-gradient hover:shadow-brand-glow transition-all duration-300 animate-glow text-lg px-8 py-6"
          >
            Conocé nuestros servicios
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/30 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;