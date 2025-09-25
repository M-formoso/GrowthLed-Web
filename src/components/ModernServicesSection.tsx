import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedText } from "@/components/ui/animated-text";
import { MagneticCard } from "@/components/ui/magnetic-card";
import { FloatingElement, ParticleBackground } from "@/components/ui/floating-elements";
import { 
  Zap, 
  Building, 
  Factory, 
  Home, 
  Lightbulb,
  Settings,
  Users,
  Wrench,
  ArrowRight
} from "lucide-react";

// Importar imágenes
import energyManagement from "@/assets/servicios/energy-management.jpg";
import solarEnergy from "@/assets/servicios/solar-energy.jpg";
import electricalNetworks from "@/assets/servicios/electrical-networks.jpg";
import transformationCenters from "@/assets/servicios/transformation-centers.jpg";
import urbanNetworks from "@/assets/servicios/urban-networks.jpg";
import largeClients from "@/assets/servicios/large-clients.jpg";
import residentialHotels from "@/assets/servicios/residential-hotels.jpg";
import energyConsulting from "@/assets/servicios/energy-consulting.jpg";

const ModernServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoveredSpecialization, setHoveredSpecialization] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      icon: Zap,
      title: "Gestión Energética Inteligente",
      description: "Optimización avanzada del consumo energético con tecnología IoT y análisis predictivo para máxima eficiencia.",
      image: energyManagement,
      gradient: "from-blue-500 to-cyan-400",
      features: ["Monitoreo 24/7", "IA Predictiva", "Ahorro hasta 40%"],
      position: "col-span-2 row-span-2"
    },
    {
      id: 2,
      icon: Lightbulb,
      title: "Energía Solar Residencial",
      description: "Sistemas fotovoltaicos completos con tecnología de última generación.",
      image: solarEnergy,
      gradient: "from-yellow-500 to-orange-400",
      features: ["Instalación rápida", "25 años garantía"],
      position: "col-span-1 row-span-1"
    },
    {
      id: 3,
      icon: Settings,
      title: "Redes Eléctricas",
      description: "Diseño, instalación y mantenimiento de infraestructura eléctrica industrial.",
      image: electricalNetworks,
      gradient: "from-green-500 to-emerald-400",
      features: ["Certificación", "Soporte técnico"],
      position: "col-span-1 row-span-1"
    },
    {
      id: 4,
      icon: Building,
      title: "Centros de Transformación",
      description: "Soluciones integrales para distribución de energía en gran escala.",
      image: transformationCenters,
      gradient: "from-purple-500 to-pink-400",
      features: ["Alta tensión", "Seguridad máxima"],
      position: "col-span-1 row-span-2"
    },
    {
      id: 5,
      icon: Users,
      title: "Consultoría Energética",
      description: "Asesoramiento especializado para optimizar tu matriz energética.",
      image: energyConsulting,
      gradient: "from-indigo-500 to-blue-400",
      features: ["Auditorías", "Planes personalizados"],
      position: "col-span-2 row-span-1"
    }
  ];

  const specializations = [
    {
      icon: Factory,
      title: "Grandes Industrias",
      description: "Soluciones energéticas para complejos industriales y manufactureros"
    },
    {
      icon: Building,
      title: "Redes Urbanas",
      description: "Infraestructura eléctrica para desarrollo urbano sostenible"
    },
    {
      icon: Home,  
      title: "Residencial & Hotelería",
      description: "Sistemas energéticos eficientes para el sector residencial"
    },
    {
      icon: Wrench,
      title: "Grandes Clientes",
      description: "Servicios especializados para empresas de alto consumo"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-background via-background/95 to-background overflow-hidden">
      <ParticleBackground particleCount={30} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header con animaciones */}
        <div className="text-center mb-20">
          <FloatingElement delay={0} amplitude={5}>
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium">
              Servicios Especializados
            </Badge>
          </FloatingElement>
          
          <AnimatedText
            text="Potenciamos tu futuro energético"
            variant="gradient"
            className="text-5xl md:text-6xl font-bold mb-6"
            delay={200}
          />
          
          <AnimatedText
            text="Combinamos innovación, experiencia y tecnología de vanguardia para ofrecer soluciones energéticas que transforman industrias y comunidades."
            variant="fadeUp"
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            delay={400}
          />
        </div>

        {/* Grid de servicios con layout dinámico */}
        <div className="grid grid-cols-4 gap-6 mb-20 auto-rows-[200px]">
          {services.map((service, index) => (
            <MagneticCard
              key={service.id}
              className={`${service.position} group`}
              strength={0.2}
            >
              <Card 
                className="h-full glass-card hover-lift overflow-hidden border-0 relative"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Background con imagen y gradiente */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-300`} />
                
                {/* Contenido */}
                <CardContent className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                  <div>
                    <FloatingElement delay={index * 100} amplitude={3}>
                      <service.icon 
                        size={32} 
                        className="mb-4 text-white/90 group-hover:text-white transition-colors duration-300" 
                      />
                    </FloatingElement>
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-white/80 text-sm mb-4 line-clamp-3 group-hover:text-white/90 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Features como badges */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <Badge 
                        key={idx}
                        variant="secondary" 
                        className="text-xs bg-white/20 text-white border-white/30 backdrop-blur-sm mr-2 mb-1"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight size={20} className="text-white" />
                  </div>
                </CardContent>
              </Card>
            </MagneticCard>
          ))}
        </div>

        {/* Sección de especializaciones con layout asimétrico */}
        <div className="text-center mb-12">
          <AnimatedText
            text="Sectores que Transformamos"
            variant="splitWords"
            className="text-4xl font-bold mb-4"
            delay={600}
          />
          <AnimatedText
            text="Especializados en diferentes industrias y segmentos"
            variant="fadeUp"
            className="text-muted-foreground text-lg"
            delay={800}
          />
        </div>

        {/* Grid asimétrico de especializaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-container">
          {specializations.map((spec, index) => (
            <FloatingElement key={index} delay={index * 150} amplitude={8}>
              <MagneticCard strength={0.15}>
                <Card 
                  className={`
                    glass-card hover-lift border-0 relative overflow-hidden group cursor-pointer
                    transition-all duration-500 hover:bg-primary/10
                    ${index % 2 === 0 ? 'md:mt-8' : 'md:mb-8'}
                  `}
                  onMouseEnter={() => setHoveredSpecialization(index)}
                  onMouseLeave={() => setHoveredSpecialization(null)}
                >
                  <CardContent className="p-8 text-center relative z-10">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                        <spec.icon 
                          size={28} 
                          className="text-primary group-hover:scale-110 transition-transform duration-300" 
                        />
                      </div>
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 w-16 h-16 mx-auto rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {spec.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {spec.description}
                    </p>

                    {/* Decorative element */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </CardContent>
                </Card>
              </MagneticCard>
            </FloatingElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernServicesSection;