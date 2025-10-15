import { Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const CorporateVideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const services = [
    "Empresas e Industrias",
    "Parques Industriales y Centros Logísticos",
    "Municipalidades y Espacios Públicos",
    "Retail y Centros Comerciales",
    "Countries y Barrios Cerrados",
    "Instituciones Deportivas y Educativas",
    "Hoteles y Centros Culturales",
    "Clínicas y Hospitales"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Fabricamos luminarias world class con{" "}
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  TECNOLOGÍAS LED
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">ATENDEMOS A:</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right side - Video */}
          <div className="relative">
            <Card className="relative overflow-hidden rounded-3xl shadow-2xl hover-lift group">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary-glow/20 relative">
                {!isPlaying ? (
                  <>
                    {/* Video Thumbnail Placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-background/60 flex items-center justify-center">
                      <Button
                        size="lg"
                        onClick={() => setIsPlaying(true)}
                        className="w-24 h-24 rounded-full bg-primary hover:bg-primary-glow shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-110"
                      >
                        <Play className="w-10 h-10 ml-1" fill="currentColor" />
                      </Button>
                    </div>
                    
                    {/* Overlay text */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                      <p className="text-white text-xl font-semibold">Video Corporativo</p>
                      <p className="text-white/80 text-sm">Años de obra en instalaciones eléctricas industriales</p>
                    </div>
                  </>
                ) : (
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="Video Corporativo GROWTHLED"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </Card>

            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-xl hover:rotate-12 transition-transform duration-300">
              <span className="text-3xl font-bold">15+</span>
              <span className="text-sm">Años de</span>
              <span className="text-sm font-semibold">Experiencia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateVideoSection;
