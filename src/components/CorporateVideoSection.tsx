import { Card } from "@/components/ui/card";
import ScrollReveal from "@/components/ui/ScrollReveal";

const CorporateVideoSection = () => {
  

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
        <div className="space-y-12">
          {/* Video Section - Full Width */}
          <div className="relative max-w-6xl mx-auto">
            <Card className="relative overflow-hidden rounded-3xl shadow-2xl hover-lift group">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary-glow/20 relative">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/videos/corporate-b2grow.mp4" type="video/mp4" />
                </video>
                
                {/* Overlay text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                  <p className="text-white text-xl font-semibold">Innovación en Iluminación LED</p>
                  <p className="text-white/80 text-sm">Soluciones inteligentes para cada proyecto</p>
                </div>
              </div>
            </Card>

            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-xl hover:rotate-12 transition-transform duration-300 z-10">
              <span className="text-3xl font-bold">15+</span>
              <span className="text-sm">Años de</span>
              <span className="text-sm font-semibold">Experiencia</span>
            </div>
          </div>

          {/* Content Section - Below Video */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4 text-center">
              <ScrollReveal
                baseOpacity={0.2}
                enableBlur={true}
                baseRotation={2}
                blurStrength={6}
                textClassName="text-3xl md:text-4xl lg:text-5xl font-bold"
              >
                Fabricamos luminarias world class con TECNOLOGÍAS LED
              </ScrollReveal>
            </div>

            <div className="space-y-4">
              <ScrollReveal
                baseOpacity={0.3}
                enableBlur={true}
                baseRotation={1}
                blurStrength={4}
                textClassName="text-2xl font-semibold"
              >
                ATENDEMOS A:
              </ScrollReveal>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateVideoSection;
