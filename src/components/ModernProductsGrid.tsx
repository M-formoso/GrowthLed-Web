import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MagneticCard } from "@/components/ui/magnetic-card";
import { FloatingElement, ParticleBackground } from "@/components/ui/floating-elements";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Download, Star, ArrowRight, Shield, Zap, Factory, Sun } from "lucide-react";

// Importar imágenes de productos
import campanasLed from "@/assets/productos/campanas-led.jpg";
import proyectoresDeportivos from "@/assets/productos/proyectores-deportivos.jpg";
import farolasUrbanas from "@/assets/productos/farolas-urbanas.jpg";
import lineales from "@/assets/productos/lineales.jpg";
import solares from "@/assets/productos/solares.jpg";
import antiexplosion from "@/assets/productos/antiexplosion.jpg";

const ModernProductsGrid = () => {
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
      catalogUrl: "catalogos/B2GHB12CAMPANA LED GROWTHLED.pdf"
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
      catalogUrl: "catalogos/GROWTH LEDFicha Técnica - PROYECTOR DEP HF.pdf"
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
      catalogUrl: "catalogos/FAROLA GROWTH LED NEW2025.pdf"
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
      catalogUrl: "catalogos/LEDSTATION LINEAL GROWTH LED..pdf"
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
      catalogUrl: "catalogos/EVEREST All in One  SOLAR_page-0001.pdf"
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
      catalogUrl: "catalogos/Ledstation Zona 2 EESS GNC GROWTH LED..pdf"
    }
  ];

  const categoryIntros = {
    industrial: {
      icon: Factory,
      title: "Soluciones Industriales de Alta Potencia",
      description: "Nuestra línea industrial está diseñada para los entornos más exigentes. Con tecnología LED de última generación, ofrecemos iluminación eficiente y duradera para naves industriales, almacenes y espacios de gran altura."
    },
    deportivo: {
      icon: Zap,
      title: "Iluminación Deportiva Profesional",
      description: "Proyectores de alto rendimiento diseñados específicamente para instalaciones deportivas. Control preciso del haz de luz y tecnología anti-deslumbramiento para garantizar la mejor experiencia tanto para atletas como para espectadores."
    },
    urbano: {
      icon: Shield,
      title: "Alumbrado Público Inteligente",
      description: "Farolas LED que combinan eficiencia energética con diseño urbano moderno. Ideales para calles, parques y espacios públicos, con sistemas de control inteligente y larga vida útil."
    },
    solar: {
      icon: Sun,
      title: "Energía Solar Sostenible",
      description: "Sistemas de iluminación completamente autónomos con paneles solares y baterías de última generación. La solución perfecta para zonas sin acceso a red eléctrica o proyectos sustentables."
    }
  };

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleOpenPDF = (catalogUrl: string) => {
    window.open(`/${catalogUrl}`, '_blank');
  };

  const getCategoryProducts = (category: string) => {
    return products.filter(p => p.category === category);
  };

  const renderCategorySection = (categoryId: string) => {
    if (categoryId === "all") return null;
    
    const categoryProducts = getCategoryProducts(categoryId);
    if (categoryProducts.length === 0) return null;

    const intro = categoryIntros[categoryId as keyof typeof categoryIntros];
    const Icon = intro.icon;

    return (
      <div key={categoryId} className="mb-16">
        {/* Intro Text */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <Icon className="mr-3 text-primary" size={32} />
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={6}
              textClassName="text-2xl md:text-3xl font-bold"
            >
              {intro.title}
            </ScrollReveal>
          </div>
          <ScrollReveal
            baseOpacity={0.3}
            enableBlur={true}
            baseRotation={1}
            blurStrength={4}
            textClassName="text-lg text-muted-foreground"
          >
            {intro.description}
          </ScrollReveal>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryProducts.map((product, index) => (
            <FloatingElement key={product.id} delay={index * 100} amplitude={5}>
              <MagneticCard strength={0.15}>
                <Card 
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                  onClick={() => handleOpenPDF(product.catalogUrl)}
                >
                  {/* Imagen del producto */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                    
                    {/* Overlay con botón */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button size="lg" className="gap-2">
                        <Download size={20} />
                        Ver Catálogo PDF
                      </Button>
                    </div>
                  </div>
                  
                  {/* Contenido */}
                  <CardContent className="p-6">
                    {/* Rating */}
                    <div className="flex items-center mb-3">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">{product.rating}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Specs */}
                    <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                      <div className="bg-muted/50 rounded p-2">
                        <span className="text-muted-foreground">Potencia:</span>
                        <div className="font-semibold">{product.power}</div>
                      </div>
                      <div className="bg-muted/50 rounded p-2">
                        <span className="text-muted-foreground">Eficiencia:</span>
                        <div className="font-semibold">{product.efficiency}</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-1">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </MagneticCard>
            </FloatingElement>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="relative py-16 bg-gradient-to-br from-background via-background/98 to-muted/20 overflow-hidden">
      <ParticleBackground particleCount={25} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <ScrollReveal
            baseOpacity={0.2}
            enableBlur={true}
            baseRotation={2}
            blurStrength={6}
            containerClassName="mb-6"
            textClassName="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent"
          >
            Catálogo Completo de Productos
          </ScrollReveal>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Descubrí nuestra amplia gama de productos LED diseñados para cada necesidad específica
          </p>
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

        {/* Productos por categoría con textos introductorios */}
        {selectedCategory === "all" ? (
          <>
            {renderCategorySection("industrial")}
            {renderCategorySection("deportivo")}
            {renderCategorySection("urbano")}
            {renderCategorySection("solar")}
          </>
        ) : (
          renderCategorySection(selectedCategory)
        )}

        {/* CTA final */}
        <div className="text-center mt-16">
          <ScrollReveal
            baseOpacity={0.2}
            enableBlur={true}
            baseRotation={2}
            blurStrength={5}
            containerClassName="mb-6"
            textClassName="text-xl md:text-2xl text-muted-foreground"
          >
            ¿Necesitás asesoramiento personalizado para tu proyecto?
          </ScrollReveal>
          <FloatingElement delay={1000} amplitude={8}>
            <MagneticCard strength={0.2}>
              <Button 
                size="lg" 
                className="px-8 py-6 text-lg font-semibold hover-lift group"
                onClick={() => window.location.href = '/contacto'}
              >
                Contactar con un Especialista
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