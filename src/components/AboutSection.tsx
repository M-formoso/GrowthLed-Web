import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award, Zap } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { number: "15+", label: "Años de Experiencia", icon: Award },
    { number: "500+", label: "Proyectos Completados", icon: CheckCircle },
    { number: "50+", label: "Especialistas", icon: Users },
    { number: "24/7", label: "Soporte Técnico", icon: Zap },
  ];

  const values = [
    {
      title: "Innovación Tecnológica",
      description: "Implementamos las últimas tecnologías LED y sistemas de control inteligente para maximizar la eficiencia energética.",
    },
    {
      title: "Experiencia Industrial",
      description: "Más de 15 años especializándonos en proyectos de gran envergadura para parques industriales y centros logísticos.",
    },
    {
      title: "Calidad Certificada",
      description: "Todos nuestros productos cumplen con las normativas internacionales más exigentes y cuentan con garantías extendidas.",
    },
    {
      title: "Soluciones Integrales",
      description: "Desde el diseño hasta la instalación y mantenimiento, ofrecemos un servicio completo llave en mano.",
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
            GROWTHLED es líder en Argentina en soluciones de iluminación LED industrial y redes eléctricas de media tensión. 
            Transformamos espacios industriales con tecnología de vanguardia y eficiencia energética.
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
              Nuestra Historia
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Fundada en 2008, GROWTHLED nació con la misión de revolucionar la iluminación industrial en Argentina. 
                Comenzamos como pioneros en la tecnología LED cuando aún era emergente en el mercado local.
              </p>
              <p>
                Hoy somos referentes en proyectos de gran escala, habiendo iluminado más de 2 millones de metros cuadrados 
                en parques industriales, centros logísticos y complejos deportivos a lo largo del país.
              </p>
              <p>
                Nuestro equipo multidisciplinario combina ingenieros eléctricos, especialistas en eficiencia energética 
                y técnicos certificados para garantizar la máxima calidad en cada proyecto.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center p-8">
                <Zap className="w-16 h-16 text-primary mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-foreground mb-2">Desde 2008</h4>
                <p className="text-muted-foreground">Iluminando el futuro de la industria argentina</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Nuestros Valores
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-brand-glow transition-all duration-300">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
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