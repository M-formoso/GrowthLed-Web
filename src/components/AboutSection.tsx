import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award, Zap, Factory, Lightbulb, Shield } from "lucide-react";
import industrialComplex from "@/assets/large-industrial-complex.jpg";
import electricalInstallation from "@/assets/electrical-installation.jpg";
import logisticsCenter from "@/assets/logistics-center.jpg";

const AboutSection = () => {
  const stats = [
    { number: "2M+", label: "m² Iluminados Industriales", icon: Factory },
    { number: "150+", label: "Plantas Industriales", icon: CheckCircle },
    { number: "15", label: "Años Especializados", icon: Award },
    { number: "24/7", label: "Servicio Industrial", icon: Shield },
  ];

  const industrialCapabilities = [
    {
      title: "Grandes Complejos Industriales",
      description: "Especializados en iluminación LED para plantas de producción de más de 50,000 m², parques industriales y centros de manufactura con demandas energéticas críticas.",
      image: industrialComplex,
    },
    {
      title: "Instalaciones Eléctricas de Media Tensión",
      description: "Diseño e instalación de redes eléctricas industriales, subestaciones transformadoras y sistemas de distribución para grandes consumos energéticos.",
      image: electricalInstallation,
    },
    {
      title: "Centros Logísticos y Distribución",
      description: "Soluciones integrales para almacenes automatizados, centros de distribución de gran altura y facilidades logísticas con operación 24/7.",
      image: logisticsCenter,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nosotros
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            GROWTHLED es el especialista líder en Argentina para iluminación LED industrial de gran escala y redes eléctricas de media tensión. 
            Transformamos complejos industriales de más de 50,000 m² con tecnología de vanguardia y máxima eficiencia energética.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-brand-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Especialistas en Gran Industria
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Desde 2008, GROWTHLED se ha consolidado como el líder indiscutido en iluminación LED para grandes complejos industriales en Argentina. 
                Nuestro enfoque exclusivo en proyectos de gran envergadura nos ha posicionado como socios estratégicos de las principales industrias del país.
              </p>
              <p>
                Hemos transformado más de 2 millones de metros cuadrados en plantas de producción, parques industriales y centros logísticos, 
                implementando soluciones que reducen hasta un 70% el consumo energético mientras mejoran significativamente la productividad.
              </p>
              <p>
                Nuestro equipo especializado incluye ingenieros en alta tensión, diseñadores de sistemas industriales 
                y técnicos certificados en instalaciones críticas que operan bajo los más altos estándares de seguridad industrial.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center p-8">
                <Factory className="w-16 h-16 text-primary mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-foreground mb-2">Gran Industria</h4>
                <p className="text-muted-foreground">Iluminando la industria argentina desde 2008</p>
              </div>
            </div>
          </div>
        </div>

        {/* Industrial Capabilities */}
        <div>
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Nuestras Especialidades Industriales
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {industrialCapabilities.map((capability, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-brand-glow transition-all duration-300 overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={capability.image} 
                    alt={capability.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-foreground mb-4">
                    {capability.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {capability.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;