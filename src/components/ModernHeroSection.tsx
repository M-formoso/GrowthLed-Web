import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animated-text";
import { MagneticCard } from "@/components/ui/magnetic-card"; 
import { FloatingElement, ParticleBackground } from "@/components/ui/floating-elements";
import { ChevronLeft, ChevronRight, ChevronDown, Zap, Award, Users } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const ModernHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const slides = [
    {
      title: "Potenciá tu energía",
      subtitle: "con tecnología LED de vanguardia",
      description: "Transformamos espacios con soluciones de iluminación inteligente y eficiente"
    },
    {
      title: "Innovación Energética",
      subtitle: "para un futuro sostenible",
      description: "Lideramos la revolución LED con productos que combinan diseño y eficiencia"
    },
    {
      title: "Iluminación Profesional",
      subtitle: "adaptada a tus necesidades",
      description: "Desde grandes industrias hasta proyectos residenciales, tenemos la solución perfecta"
    }
  ];

  const stats = [
    { icon: Zap, value: "500+", label: "Proyectos Completados" },
    { icon: Award, value: "15", label: "Años de Experiencia" },
    { icon: Users, value: "100+", label: "Clientes Satisfechos" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background dinámico */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          transform: `scale(1.1) translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
        }}
      />
      
      {/* Overlay con gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/90" />
      
      {/* Partículas flotantes */}
      <ParticleBackground particleCount={40} />

      {/* Navegación lateral */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20">
        <MagneticCard strength={0.3}>
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="glass-card hover-lift mb-4 border-white/20"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </MagneticCard>
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20">
        <MagneticCard strength={0.3}>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="glass-card hover-lift mb-4 border-white/20"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </MagneticCard>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <FloatingElement delay={0} amplitude={8}>
            <div className="inline-block px-6 py-2 rounded-full glass-card border border-primary/30 mb-6">
              <span className="text-primary font-semibold text-sm">GROWTHLED • Iluminación Profesional</span>
            </div>
          </FloatingElement>

          <div className="mb-6 min-h-[200px] flex flex-col justify-center">
            <AnimatedText
              key={`title-${currentSlide}`}
              text={slides[currentSlide].title}
              variant="gradient"
              className="text-6xl md:text-8xl font-bold mb-4"
              delay={100}
            />
            
            <AnimatedText
              key={`subtitle-${currentSlide}`}
              text={slides[currentSlide].subtitle}
              variant="splitWords"
              className="text-2xl md:text-3xl font-light text-muted-foreground mb-6"
              delay={300}
            />

            <AnimatedText
              key={`description-${currentSlide}`}
              text={slides[currentSlide].description}
              variant="fadeUp"
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              delay={500}
            />
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <FloatingElement delay={600} amplitude={5}>
              <MagneticCard strength={0.2}>
                <Button 
                  size="lg" 
                  className="px-8 py-6 text-lg font-semibold hover-lift group"
                >
                  Conocé nuestros servicios
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </MagneticCard>
            </FloatingElement>

            <FloatingElement delay={800} amplitude={5}>
              <MagneticCard strength={0.2}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-6 text-lg glass-card border-primary/30 hover:bg-primary/10"
                >
                  Ver Proyectos
                </Button>
              </MagneticCard>
            </FloatingElement>
          </div>
        </div>

        {/* Estadísticas flotantes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <FloatingElement 
              key={index} 
              delay={1000 + index * 200} 
              amplitude={6}
              duration={4000 + index * 500}
            >
              <MagneticCard strength={0.15}>
                <div className="glass-card rounded-2xl p-6 hover-lift group">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                      <stat.icon size={24} className="text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </MagneticCard>
            </FloatingElement>
          ))}
        </div>

        {/* Indicadores de slide */}
        <div className="flex justify-center space-x-2 mb-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-primary scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <FloatingElement delay={1500} amplitude={10}>
          <div className="flex flex-col items-center text-muted-foreground">
            <span className="text-sm mb-2">Explorá más</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </div>
        </FloatingElement>
      </div>
    </section>
  );
};

export default ModernHeroSection;