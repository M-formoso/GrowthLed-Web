import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  Sun, 
  Settings, 
  Home, 
  Users, 
  Building,
  Wrench,
  Lightbulb 
} from "lucide-react";

const ServicesDetails = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Proyectos, dirección y ejecución de obras de Redes eléctricas de BT y MT",
      gradient: "bg-service-gradient-1",
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Agente oficial de venta y instalación de Paneles Solares y Sistema de Energía Renovables",
      gradient: "bg-service-gradient-2",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Extensión de Redes de MT y Centros de Transformación (plataformas o Cámaras)",
      gradient: "bg-service-gradient-3",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Instalación eléctrica de Grandes y Medianos Clientes",
      gradient: "bg-service-gradient-4",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Consultoría Energética / uso racional de energía",
      gradient: "bg-service-gradient-5",
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Proyecto de Instalación eléctrica de Edificios residenciales y Hoteles",
      gradient: "bg-service-gradient-6",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Diseño de red eléctrica de Barrios y Loteos - abiertos o cerrados -, de red subterránea o aérea",
      gradient: "bg-service-gradient-1",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Gestiones de abastecimiento de Energía – Profesionales",
      gradient: "bg-service-gradient-2",
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Profesionales formados en el rubro con 20 años de experiencia desarrollan Ingeniería y Obras eléctricas 
            específicas y a la medida de las necesidades de los clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:scale-105 transition-all duration-300 hover:shadow-lg border-0 bg-card"
            >
              <CardContent className="p-6 text-center">
                <div className={`w-20 h-20 rounded-full ${service.gradient} flex items-center justify-center mx-auto mb-4 group-hover:animate-glow`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-foreground leading-tight">
                  {service.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDetails;