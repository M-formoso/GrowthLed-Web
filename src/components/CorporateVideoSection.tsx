import { Card } from "@/components/ui/card";

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
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/videos/estacion-shell.mp4" type="video/mp4" />
                </video>
                
                {/* Overlay text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                  <p className="text-white text-xl font-semibold">Instalaciones Eléctricas Industriales</p>
                  <p className="text-white/80 text-sm">Años de experiencia en obras de gran envergadura</p>
                </div>
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
