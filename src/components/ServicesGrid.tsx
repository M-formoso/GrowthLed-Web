import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroBackground from "@/assets/hero-background.jpg";
import industrialImage from "@/assets/industrial-lighting.jpg";
import sportsImage from "@/assets/sports-lighting.jpg";
import renewableImage from "@/assets/renewable-energy.jpg";

const ServicesGrid = () => {
  const services = [
    {
      title: "Industrial / Grandes Obras",
      image: industrialImage,
      gradient: "bg-service-gradient-1",
    },
    {
      title: "Parques Industriales", 
      image: industrialImage,
      gradient: "bg-service-gradient-2",
    },
    {
      title: "Centros Logísticos",
      image: heroBackground,
      gradient: "bg-service-gradient-3",
    },
    {
      title: "Comercial / Retail",
      image: heroBackground,
      gradient: "bg-service-gradient-4",
    },
    {
      title: "Deportiva / Institucional",
      image: sportsImage,
      gradient: "bg-service-gradient-5",
    },
    {
      title: "Energías Renovables",
      image: renewableImage,
      gradient: "bg-service-gradient-6",
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden group hover:scale-105 transition-all duration-300 bg-transparent border-0 h-80"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 ${service.gradient} opacity-80 group-hover:opacity-90 transition-opacity`} />
              
              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {service.title}
                </h3>
                
                <Button 
                  variant="secondary"
                  className="self-start bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 backdrop-blur-sm"
                >
                  Ver más
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;