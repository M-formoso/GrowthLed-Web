import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Sun, 
  Settings, 
  Building2, 
  Users, 
  Home, 
  MapPin,
  FileText,
  Factory,
  ShoppingCart,
  TreePine,
  GraduationCap,
  Hotel,
  Heart,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import electricalNetworks from "@/assets/servicios/electrical-networks.jpg";
import solarEnergy from "@/assets/servicios/solar-energy.jpg";
import transformationCenters from "@/assets/servicios/transformation-centers.jpg";
import largeClients from "@/assets/servicios/large-clients.jpg";
import energyConsulting from "@/assets/servicios/energy-consulting.jpg";
import residentialHotels from "@/assets/servicios/residential-hotels.jpg";
import urbanNetworks from "@/assets/servicios/urban-networks.jpg";
import energyManagement from "@/assets/servicios/energy-management.jpg";

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoveredSpecialization, setHoveredSpecialization] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      icon: <Zap className="w-8 h-8" />,
      title: "Proyectos, dirección y ejecución de obras de Redes eléctricas de BT y MT",
      description: "Desarrollo integral de infraestructura eléctrica de baja y media tensión para complejos industriales de gran envergadura.",
      image: electricalNetworks,
      gradient: "from-blue-600/90 to-cyan-500/90",
      features: ["Redes de BT y MT", "Infraestructura completa", "Proyectos industriales"]
    },
    {
      id: 2,
      icon: <Sun className="w-8 h-8" />,
      title: "Agente oficial de venta y instalación de Paneles Solares y Sistema de Energía Renovables",
      description: "Soluciones sostenibles con tecnología fotovoltaica avanzada para la transición energética industrial.",
      image: solarEnergy,
      gradient: "from-yellow-500/90 to-orange-500/90",
      features: ["Energía renovable", "Instalación certificada", "Tecnología avanzada"]
    },
    {
      id: 3,
      icon: <Settings className="w-8 h-8" />,
      title: "Extensión de Redes de MT y Centros de Transformación (plataformas o Cámaras)",
      description: "Ampliación y modernización de sistemas de media tensión con centros de transformación de última generación.",
      image: transformationCenters,
      gradient: "from-purple-600/90 to-indigo-500/90",
      features: ["Media tensión", "Centros de transformación", "Infraestructura crítica"]
    },
    {
      id: 4,
      icon: <Building2 className="w-8 h-8" />,
      title: "Instalación eléctrica de Grandes y Medianos Clientes",
      description: "Sistemas eléctricos especializados para grandes complejos industriales y comerciales de alta demanda energética.",
      image: largeClients,
      gradient: "from-green-600/90 to-teal-500/90",
      features: ["Grandes clientes", "Alta demanda", "Sistemas especializados"]
    },
    {
      id: 5,
      icon: <Users className="w-8 h-8" />,
      title: "Consultoría Energética / uso racional de energía",
      description: "Asesoramiento especializado para optimización energética y implementación de soluciones de eficiencia.",
      image: energyConsulting,
      gradient: "from-emerald-600/90 to-green-500/90",
      features: ["Eficiencia energética", "Consultoría especializada", "Optimización"]
    },
    {
      id: 6,
      icon: <Home className="w-8 h-8" />,
      title: "Proyecto de Instalación eléctrica de Edificios residenciales y Hoteles",
      description: "Diseño e implementación de sistemas eléctricos integrales para desarrollos residenciales y hoteleros de lujo.",
      image: residentialHotels,
      gradient: "from-rose-500/90 to-pink-500/90",
      features: ["Proyectos residenciales", "Hoteles de lujo", "Diseño integral"]
    },
    {
      id: 7,
      icon: <MapPin className="w-8 h-8" />,
      title: "Diseño de red eléctrica de Barrios y Loteos - abiertos o cerrados -, de red aérea o subterránea y Alumbrado Público",
      description: "Planificación urbana integral con redes eléctricas subterráneas y sistemas de alumbrado público LED eficiente.",
      image: urbanNetworks,
      gradient: "from-slate-600/90 to-gray-500/90",
      features: ["Planificación urbana", "Alumbrado público", "Redes subterráneas"]
    },
    {
      id: 8,
      icon: <FileText className="w-8 h-8" />,
      title: "Gestiones de abastecimiento de Energía – Profesionales Matriculados para las gestiones con Distribuidoras y proveedores",
      description: "Gestión profesional certificada para trámites con distribuidoras eléctricas y proveedores de energía.",
      image: energyManagement,
      gradient: "from-amber-600/90 to-yellow-500/90",
      features: ["Profesionales matriculados", "Gestión con distribuidoras", "Trámites especializados"]
    }
  ];

  const specializations = [
    {
      id: 1,
      icon: <Factory className="w-6 h-6" />,
      title: "Empresas e Industrias",
      description: "Plantas manufactureras y complejos industriales"
    },
    {
      id: 2,
      icon: <Factory className="w-6 h-6" />,
      title: "Parques Industriales y Centros Logísticos",
      description: "Infraestructura para distribución y logística"
    },
    {
      id: 3,
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Retail y Centros Comerciales",
      description: "Espacios comerciales y de retail moderno"
    },
    {
      id: 4,
      icon: <TreePine className="w-6 h-6" />,
      title: "Municipalidades y Espacios Públicos",
      description: "Infraestructura pública y urbana"
    },
    {
      id: 5,
      icon: <Home className="w-6 h-6" />,
      title: "Countries y Barrios Cerrados",
      description: "Desarrollos residenciales premium"
    },
    {
      id: 6,
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Instituciones Deportivas y Educativas",
      description: "Complejos deportivos y centros educativos"
    },
    {
      id: 7,
      icon: <Hotel className="w-6 h-6" />,
      title: "Hoteles y Centros Culturales",
      description: "Hospitalidad y espacios culturales"
    },
    {
      id: 8,
      icon: <Heart className="w-6 h-6" />,
      title: "Clínicas y Hospitales",
      description: "Infraestructura sanitaria crítica"
    }
  ];

  return (
    <section id="servicios" className="relative py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-primary/10 backdrop-blur-sm rounded-full text-primary animate-fade-in">
            <Zap className="h-5 w-5" />
            <span className="font-semibold">Servicios Especializados</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Nuestros <span className="text-gradient-primary">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Profesionales especializados con más de 20 años de experiencia desarrollan ingeniería y obras eléctricas 
            de alta complejidad, diseñadas específicamente para satisfacer las necesidades de grandes industrias y proyectos críticos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {services.map((service, index) => (
            <Card 
              key={service.id}
              className="group relative overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 cursor-pointer animate-fade-in bg-card/80 backdrop-blur-sm border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Background Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-90`} />
                
                {/* Service Number */}
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white font-bold">
                    {service.id.toString().padStart(2, '0')}
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className={`absolute top-4 right-4 transition-all duration-300 ${
                  hoveredService === service.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}>
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3 w-3 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className={`mt-4 transition-all duration-300 ${
                  hoveredService === service.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  <Button variant="ghost" size="sm" className="w-full text-primary hover:bg-primary/10">
                    Ver más detalles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specializations Section */}
        <div className="relative">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nos <span className="text-gradient-secondary">Especializamos</span> en
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Sectores estratégicos donde aplicamos nuestra experiencia y tecnología de vanguardia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec, index) => (
              <div
                key={spec.id}
                className={`group p-6 rounded-2xl transition-all duration-500 cursor-pointer animate-fade-in ${
                  hoveredSpecialization === spec.id 
                    ? 'bg-gradient-to-br from-primary/20 to-secondary/20 shadow-2xl transform -translate-y-2' 
                    : 'bg-card/50 backdrop-blur-sm hover:bg-card/80'
                }`}
                style={{ animationDelay: `${index * 75}ms` }}
                onMouseEnter={() => setHoveredSpecialization(spec.id)}
                onMouseLeave={() => setHoveredSpecialization(null)}
              >
                <div className={`w-14 h-14 rounded-2xl mb-4 flex items-center justify-center transition-all duration-300 ${
                  hoveredSpecialization === spec.id
                    ? 'bg-primary text-white shadow-lg scale-110'
                    : 'bg-primary/10 text-primary group-hover:bg-primary/20'
                }`}>
                  {spec.icon}
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {spec.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {spec.description}
                </p>
                
                {/* Animated underline */}
                <div className={`mt-4 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${
                  hoveredSpecialization === spec.id ? 'w-full opacity-100' : 'w-0 opacity-0'
                }`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;