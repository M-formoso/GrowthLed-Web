import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Factory, 
  Sun, 
  Zap, 
  MapPin, 
  Calendar,
  ArrowRight,
  Lightbulb,
  Users,
  Award
} from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Complejo Industrial Samsung",
      category: "Industria",
      location: "Buenos Aires, Argentina",
      year: "2024",
      description: "Implementación completa de sistema eléctrico y iluminación LED para planta manufacturera de 50,000 m²",
      image: "/src/assets/large-industrial-complex.jpg",
      gradient: "from-blue-600/90 to-cyan-500/90",
      features: ["Iluminación LED Industrial", "Sistema Eléctrico MT/BT", "Ahorro energético 60%"],
      stats: { area: "50,000 m²", power: "2.5 MW", savings: "60%" }
    },
    {
      id: 2,
      title: "Centro Logístico MercadoLibre",
      category: "Logística",
      location: "Córdoba, Argentina",
      year: "2024",
      description: "Diseño e instalación de infraestructura eléctrica y sistema de iluminación automatizado",
      image: "/src/assets/logistics-center.jpg",
      gradient: "from-green-600/90 to-teal-500/90",
      features: ["Automatización LED", "Sensores de Movimiento", "Control Inteligente"],
      stats: { area: "75,000 m²", power: "3.2 MW", savings: "55%" }
    },
    {
      id: 3,
      title: "Parque Solar Fotovoltaico",
      category: "Energía Renovable",
      location: "Mendoza, Argentina",
      year: "2023",
      description: "Instalación de sistema solar fotovoltaico y infraestructura eléctrica para parque de 10 MW",
      image: "/src/assets/renewable-energy.jpg",
      gradient: "from-yellow-500/90 to-orange-500/90",
      features: ["Paneles Solares", "Inversores Trifásicos", "Monitoreo Remoto"],
      stats: { power: "10 MW", panels: "25,000", co2: "15,000 ton/año" }
    },
    {
      id: 4,
      title: "Complejo Deportivo River Plate",
      category: "Deportivo",
      location: "Buenos Aires, Argentina",
      year: "2023",
      description: "Sistema de iluminación deportiva LED profesional y instalación eléctrica especializada",
      image: "/src/assets/sports-lighting.jpg",
      gradient: "from-purple-600/90 to-indigo-500/90",
      features: ["Iluminación Deportiva", "Control de Dimmer", "Transmisión HD"],
      stats: { fields: "6 canchas", lux: "2000 lux", efficiency: "40%" }
    },
    {
      id: 5,
      title: "Hospital Italiano",
      category: "Salud",
      location: "Rosario, Argentina",
      year: "2023",
      description: "Modernización completa del sistema eléctrico hospitalario con respaldo de emergencia",
      image: "/src/assets/electrical-installation.jpg",
      gradient: "from-rose-500/90 to-pink-500/90",
      features: ["Sistema de Emergencia", "UPS Hospitalario", "Iluminación Quirúrgica"],
      stats: { area: "25,000 m²", backup: "99.9%", rooms: "200 hab." }
    },
    {
      id: 6,
      title: "Shopping Alto Palermo",
      category: "Comercial",
      location: "Buenos Aires, Argentina",
      year: "2022",
      description: "Renovación completa de iluminación comercial LED y sistema eléctrico de alto tráfico",
      image: "/src/assets/industrial-lighting.jpg",
      gradient: "from-emerald-600/90 to-green-500/90",
      features: ["Iluminación Comercial", "Sistema Escalable", "Gestión Centralizada"],
      stats: { stores: "150 locales", visitors: "50k/día", savings: "65%" }
    }
  ];

  const categories = ["Todos", "Industria", "Logística", "Energía Renovable", "Deportivo", "Salud", "Comercial"];
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProjects = selectedCategory === "Todos" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const stats = [
    { icon: <Building2 className="w-8 h-8" />, number: "150+", label: "Proyectos Completados" },
    { icon: <Users className="w-8 h-8" />, number: "50+", label: "Clientes Satisfechos" },
    { icon: <Lightbulb className="w-8 h-8" />, number: "2M+", label: "m² Iluminados" },
    { icon: <Award className="w-8 h-8" />, number: "20+", label: "Años de Experiencia" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
          </div>

          <div className="relative container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-primary/10 backdrop-blur-sm rounded-full text-primary animate-fade-in">
              <Building2 className="h-5 w-5" />
              <span className="font-semibold">Proyectos Realizados</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Nuestros <span className="text-gradient-primary">Proyectos</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Más de 20 años desarrollando proyectos eléctricos e iluminación LED de gran envergadura para las 
              industrias más exigentes de Argentina y Latinoamérica.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-300"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-32">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.id}
                  className="group relative overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 cursor-pointer animate-fade-in bg-card/80 backdrop-blur-sm border-border/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-90`} />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/20">
                        {project.category}
                      </Badge>
                    </div>

                    {/* Year */}
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white text-sm font-bold">
                        {project.year}
                      </div>
                    </div>

                    {/* Location */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{project.location}</span>
                    </div>

                    {/* Hover Arrow */}
                    <div className={`absolute bottom-4 right-4 transition-all duration-300 ${
                      hoveredProject === project.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}>
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                      {Object.entries(project.stats).map(([key, value], idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-sm font-bold text-primary">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Hover Button */}
                    <div className={`mt-4 transition-all duration-300 ${
                      hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}>
                      <Button variant="ghost" size="sm" className="w-full text-primary hover:bg-primary/10">
                        Ver proyecto completo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;