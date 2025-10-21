import { Card, CardContent } from "@/components/ui/card";
import { MagneticCard } from "@/components/ui/magnetic-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Sparkles, Palette, Star, ExternalLink } from "lucide-react";

// Importar imágenes UFO DECO
import ufoDeco1 from "@/assets/productos/ufo-deco-1.png";
import ufoDeco2 from "@/assets/productos/ufo-deco-2.png";
import ufoDeco3 from "@/assets/productos/ufo-deco-3.png";
import ufoDecoSpecs from "@/assets/productos/ufo-deco-specs.png";

// Importar imágenes UFO INDUSTRIAL
import ufoIndustrial100w from "@/assets/productos/ufo-industrial-100w.png";
import ufoIndustrial150w from "@/assets/productos/ufo-industrial-150w.png";
import ufoIndustrial200w from "@/assets/productos/ufo-industrial-200w.png";
import ufoIndustrial150wDetail1 from "@/assets/productos/ufo-industrial-150w-detail-1.png";
import ufoIndustrial150wDetail2 from "@/assets/productos/ufo-industrial-150w-detail-2.png";
import ufoIndustrial200wDetail from "@/assets/productos/ufo-industrial-200w-detail.png";

const FeaturedProductLines = () => {

  const ufoProducts = [
    {
      id: "ufo-deco",
      name: "UFO DECO",
      category: "Línea Deco",
      description: "Línea Deco adaptable a todos los ambientes. Diseño elegante con potencia y ángulo seleccionable.",
      image: ufoDeco1,
      images: [ufoDeco1, ufoDeco2, ufoDeco3, ufoDecoSpecs],
      rating: 4.9,
      features: [
        "Exterior blanco o negro a elección",
        "Frente opalino con sensor de presencia",
        "Potencia seleccionable: alta-media-baja",
        "Ángulo dinámico: 60-90-120°",
        "Color seleccionable: blanco cálido, neutro o frío"
      ],
      specs: [
        { label: "Potencia", value: "Seleccionable" },
        { label: "Ángulo", value: "60-90-120°" },
        { label: "CCT", value: "3000K-6500K" }
      ]
    },
    {
      id: "ufo-industrial-100w",
      name: "UFO INDUSTRIAL 100W",
      category: "Línea Industrial",
      description: "Luminaria LED 100W de alto rendimiento. 16,000 Lm con eficiencia superior a 160Lm/W.",
      image: ufoIndustrial100w,
      images: [ufoIndustrial100w],
      rating: 4.8,
      features: [
        "Potencia: 100W (16,000Lm)",
        "Eficiencia: 140-160Lm/W con LEDs Lumileds/Samsung",
        "Protección IP65 e IK10",
        "3 ángulos en una luminaria: 60°/90°/120°"
      ],
      specs: [
        { label: "Potencia", value: "100W" },
        { label: "Flujo", value: "16,000 Lm" },
        { label: "Eficiencia", value: "160Lm/W" }
      ]
    },
    {
      id: "ufo-industrial-150w",
      name: "UFO INDUSTRIAL 150W",
      category: "Línea Industrial",
      description: "Luminaria LED 150W de alto rendimiento. 24,000 Lm con eficiencia superior a 160Lm/W.",
      image: ufoIndustrial150w,
      images: [ufoIndustrial150w, ufoIndustrial150wDetail1, ufoIndustrial150wDetail2],
      rating: 4.9,
      features: [
        "Potencia: 150W (24,000Lm)",
        "Eficiencia: 140-160Lm/W con LEDs Lumileds/Samsung",
        "Protección IP65 e IK10",
        "CCT ajustable: 3000K/5500K/6500K"
      ],
      specs: [
        { label: "Potencia", value: "150W" },
        { label: "Flujo", value: "24,000 Lm" },
        { label: "Eficiencia", value: "160Lm/W" }
      ]
    },
    {
      id: "ufo-industrial-200w",
      name: "UFO INDUSTRIAL 200W",
      category: "Línea Industrial",
      description: "Luminaria LED 200W de alto rendimiento. 32,000 Lm con eficiencia superior a 160Lm/W.",
      image: ufoIndustrial200w,
      images: [ufoIndustrial200w, ufoIndustrial200wDetail],
      rating: 4.9,
      features: [
        "Potencia: 200W (32,000Lm)",
        "Eficiencia: 140-160Lm/W con LEDs Lumileds/Samsung",
        "Protección IP65 e IK10 con disipador de alta performance",
        "Garantía 5 años"
      ],
      specs: [
        { label: "Potencia", value: "200W" },
        { label: "Flujo", value: "32,000 Lm" },
        { label: "Eficiencia", value: "160Lm/W" }
      ]
    }
  ];

  const categoryIntros = {
    deco: {
      icon: Palette,
      title: "Línea UFO DECO",
      description: "Iluminación LED elegante y eficiente para espacios comerciales y residenciales. Diseño minimalista que se adapta perfectamente a cualquier ambiente con potencia y ángulo seleccionable."
    },
    industrial: {
      icon: Sparkles,
      title: "Línea UFO INDUSTRIAL",
      description: "Luminarias LED de alto rendimiento con eficiencia superior a 160Lm/W. Diseñadas para naves industriales, depósitos y espacios que requieren máxima iluminación."
    }
  };

  const handleProductClick = (product: any) => {
    // Si tiene una sola imagen, abrirla directamente
    if (product.images.length === 1) {
      window.open(product.images[0], '_blank');
    } else {
      // Si tiene múltiples imágenes, abrir la primera en una nueva pestaña
      // El usuario puede navegar desde ahí
      product.images.forEach((img: string) => {
        window.open(img, '_blank');
      });
    }
  };

  const renderCategorySection = (category: "deco" | "industrial") => {
    const intro = categoryIntros[category];
    const Icon = intro.icon;
    const categoryProducts = ufoProducts.filter(p => 
      category === "deco" ? p.id === "ufo-deco" : p.id.includes("industrial")
    );

    return (
      <div key={category} className="mb-16">
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
        <div className={`grid gap-6 ${categoryProducts.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
          {categoryProducts.map((product) => (
            <MagneticCard key={product.id} strength={0.15}>
              <Card 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                onClick={() => handleProductClick(product)}
              >
                {/* Imagen del producto */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay con botón */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="lg" className="gap-2">
                      <ExternalLink size={20} />
                      Ver Detalles
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
                    {product.specs.slice(0, 2).map((spec, idx) => (
                      <div key={idx} className="bg-muted/50 rounded p-2">
                        <span className="text-muted-foreground">{spec.label}:</span>
                        <div className="font-semibold">{spec.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature.split(':')[0]}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </MagneticCard>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="py-16 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          {/* Línea UFO DECO */}
          {renderCategorySection("deco")}

          {/* Línea UFO INDUSTRIAL */}
          {renderCategorySection("industrial")}
        </div>
      </section>

    </>
  );
};

export default FeaturedProductLines;
