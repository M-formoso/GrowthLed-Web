import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animated-text";
import { MagneticCard } from "@/components/ui/magnetic-card";
import { FloatingElement, ParticleBackground } from "@/components/ui/floating-elements";
import { Eye, Download, Star, ArrowRight, Zap } from "lucide-react";

// Importar imágenes de productos
import campanasLed from "@/assets/productos/campanas-led.jpg";
import proyectoresDeportivos from "@/assets/productos/proyectores-deportivos.jpg";
import farolasUrbanas from "@/assets/productos/farolas-urbanas.jpg";
import lineales from "@/assets/productos/lineales.jpg";
import solares from "@/assets/productos/solares.jpg";
import antiexplosion from "@/assets/productos/antiexplosion.jpg";

const ModernProductsGrid = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Todos los Productos", color: "from-primary to-primary/80" },
    { id: "industrial", name: "Industrial", color: "from-blue-500 to-blue-600" },
    { id: "deportivo", name: "Deportivo", color: "from-green-500 to-green-600" },
    { id: "urbano", name: "Urbano", color: "from-purple-500 to-purple-600" },
    { id: "solar", name: "Solar", color: "from-yellow-500 to-orange-500" }
  ];

  const products = [
    {
      id: 1,
      name: "Campanas LED Industriales",
      description: "Iluminación de alta potencia para naves industriales y almacenes. Eficiencia energética superior con tecnología LED de última generación.",
      image: campanasLed,
      category: "industrial",
      rating: 4.8,
      power: "100W - 200W",
      efficiency: "130 lm/W",
      lifespan: "50,000h",
      features: ["IP65", "5 años garantía", "Regulable"],
      gradient: "from-blue-600 to-cyan-500",
      position: "col-span-2 row-span-2",
      catalogUrl: "/catalogos/B2GHB12CAMPANA LED GROWTHLED.pdf"
    },
    {
      id: 2,
      name: "Proyectores Deportivos",
      description: "Iluminación profesional para instalaciones deportivas.",
      image: proyectoresDeportivos,
      category: "deportivo", 
      rating: 4.9,
      power: "400W - 1000W",
      efficiency: "140 lm/W",
      lifespan: "60,000h",
      features: ["Anti-deslumbramiento", "Control DMX"],
      gradient: "from-green-600 to-emerald-500",
      position: "col-span-1 row-span-1",
      catalogUrl: "/catalogos/GROWTH LEDFicha Técnica - PROYECTOR DEP HF.pdf"
    },
    {
      id: 3,
      name: "Farolas Urbanas LED",
      description: "Soluciones de alumbrado público eficientes y estéticas.",
      image: farolasUrbanas,
      category: "urbano",
      rating: 4.7,
      power: "50W - 150W",
      efficiency: "120 lm/W", 
      lifespan: "50,000h",
      features: ["Fotocélula", "Diseño moderno"],
      gradient: "from-purple-600 to-pink-500",
      position: "col-span-1 row-span-1",
      catalogUrl: "/catalogos/FAROLA GROWTH LED NEW2025.pdf"
    },
    {
      id: 4,
      name: "Luminarias Lineales",
      description: "Iluminación lineal versátil para espacios comerciales.",
      image: lineales,
      category: "industrial",
      rating: 4.6,
      power: "20W - 80W",
      efficiency: "110 lm/W",
      lifespan: "45,000h", 
      features: ["Conexión continua", "Múltiples acabados"],
      gradient: "from-indigo-600 to-blue-500",
      position: "col-span-1 row-span-2",
      catalogUrl: "/catalogos/LEDSTATION LINEAL GROWTH LED..pdf"
    },
    {
      id: 5,
      name: "Sistemas Solares",
      description: "Soluciones autónomas con energía solar fotovoltaica.",
      image: solares,
      category: "solar",
      rating: 4.8,
      power: "30W - 100W",
      efficiency: "125 lm/W",
      lifespan: "50,000h",
      features: ["Batería LiFePO4", "Panel monocristalino"],
      gradient: "from-yellow-500 to-orange-500",
      position: "col-span-2 row-span-1",
      catalogUrl: "/catalogos/EVEREST All in One  SOLAR_page-0001.pdf"
    },
    {
      id: 6,
      name: "Antiexplosión",
      description: "Luminarias certificadas para ambientes peligrosos.",
      image: antiexplosion,
      category: "industrial",
      rating: 4.9,
      power: "60W - 150W",
      efficiency: "115 lm/W",
      lifespan: "60,000h",
      features: ["ATEX/IECEx", "Acero inoxidable"],
      gradient: "from-red-600 to-orange-600",
      position: "col-span-1 row-span-1",
      catalogUrl: "/catalogos/Ledstation Zona 2 EESS GNC GROWTH LED..pdf"
    }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="relative py-24 bg-gradient-to-br from-background via-background/98 to-background overflow-hidden">
      <ParticleBackground particleCount={25} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <FloatingElement delay={0} amplitude={5}>
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium">
              <Zap className="w-4 h-4 mr-2" />
              Catálogo de Productos
            </Badge>
          </FloatingElement>
          
          <AnimatedText
            text="Tecnología LED de Vanguardia"
            variant="gradient"
            className="text-5xl md:text-6xl font-bold mb-6"
            delay={200}
          />
          
          <AnimatedText
            text="Descubrí nuestra amplia gama de productos LED diseñados para cada necesidad específica"
            variant="fadeUp"
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            delay={400}
          />
        </div>

        {/* Filtros de categorías */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <FloatingElement key={category.id} delay={600 + index * 100} amplitude={3}>
              <MagneticCard strength={0.1}>
                <Button
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`
                    px-6 py-3 rounded-full transition-all duration-300
                    ${selectedCategory === category.id 
                      ? `bg-gradient-to-r ${category.color} text-white border-0 shadow-lg` 
                      : 'glass-card hover:bg-primary/10'
                    }
                  `}
                >
                  {category.name}
                </Button>
              </MagneticCard>
            </FloatingElement>
          ))}
        </div>

        {/* Grid de productos con layout dinámico */}
        <div className="grid grid-cols-4 gap-6 auto-rows-[250px] stagger-container">
          {filteredProducts.map((product) => (
            <MagneticCard
              key={product.id}
              className={`${product.position} group`}
              strength={0.15}
            >
              <Card 
                className="h-full glass-card hover-lift overflow-hidden border-0 relative group"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Background con imagen */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                
                {/* Overlay con gradiente */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-85 group-hover:opacity-75 transition-opacity duration-300`} />
                
                {/* Contenido */}
                <CardContent className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                  <div>
                    {/* Rating */}
                    <div className="flex items-center mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-white/40'}`} 
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-white/80">{product.rating}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-white/80 text-sm mb-4 line-clamp-3 group-hover:text-white/90 transition-colors">
                      {product.description}
                    </p>

                    {/* Specs rápidas */}
                    <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                      <div className="bg-white/10 rounded px-2 py-1 backdrop-blur-sm">
                        <span className="text-white/70">Potencia:</span>
                        <div className="font-semibold">{product.power}</div>
                      </div>
                      <div className="bg-white/10 rounded px-2 py-1 backdrop-blur-sm">
                        <span className="text-white/70">Eficiencia:</span>
                        <div className="font-semibold">{product.efficiency}</div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <Badge 
                        key={idx}
                        variant="secondary" 
                        className="text-xs bg-white/20 text-white border-white/30 backdrop-blur-sm mr-1"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* Botones de acción */}
                  <div className={`
                    flex gap-2 transition-all duration-300 transform
                    ${hoveredProduct === product.id ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}
                  `}>
                    <Button 
                      size="sm" 
                      variant="secondary"
                      className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm"
                    >
                      <Eye size={14} className="mr-1" />
                      Ver
                    </Button>
                    <Button 
                      size="sm" 
                      variant="secondary"
                      className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm"
                      onClick={() => window.open(product.catalogUrl, '_blank')}
                    >
                      <Download size={14} className="mr-1" />
                      PDF
                    </Button>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight size={20} className="text-white" />
                  </div>
                </CardContent>
              </Card>
            </MagneticCard>
          ))}
        </div>

        {/* CTA final */}
        <div className="text-center mt-16">
          <FloatingElement delay={1000} amplitude={8}>
            <MagneticCard strength={0.2}>
              <Button 
                size="lg" 
                className="px-8 py-6 text-lg font-semibold hover-lift group"
              >
                Ver Catálogo Completo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </MagneticCard>
          </FloatingElement>
        </div>
      </div>
    </section>
  );
};

export default ModernProductsGrid;