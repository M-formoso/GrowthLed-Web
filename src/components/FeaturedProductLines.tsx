import { Card } from "@/components/ui/card";
import { MagneticCard } from "@/components/ui/magnetic-card";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Download, Sparkles, Palette } from "lucide-react";

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
      images: [ufoDeco1, ufoDeco2, ufoDeco3, ufoDecoSpecs]
    },
    {
      id: "ufo-industrial-100w",
      name: "UFO INDUSTRIAL 100W",
      category: "Línea Industrial",
      description: "Luminaria LED 100W de alto rendimiento. 16,000 Lm con eficiencia superior a 160Lm/W.",
      image: ufoIndustrial100w,
      images: [ufoIndustrial100w]
    },
    {
      id: "ufo-industrial-150w",
      name: "UFO INDUSTRIAL 150W",
      category: "Línea Industrial",
      description: "Luminaria LED 150W de alto rendimiento. 24,000 Lm con eficiencia superior a 160Lm/W.",
      image: ufoIndustrial150w,
      images: [ufoIndustrial150w, ufoIndustrial150wDetail1, ufoIndustrial150wDetail2]
    },
    {
      id: "ufo-industrial-200w",
      name: "UFO INDUSTRIAL 200W",
      category: "Línea Industrial",
      description: "Luminaria LED 200W de alto rendimiento. 32,000 Lm con eficiencia superior a 160Lm/W.",
      image: ufoIndustrial200w,
      images: [ufoIndustrial200w, ufoIndustrial200wDetail]
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

  const handleOpenImage = (images: string[]) => {
    // Abrir la primera imagen en una nueva pestaña
    if (images && images.length > 0) {
      window.open(images[0], '_blank');
    }
  };

  const renderCategorySection = (category: "deco" | "industrial") => {
    const intro = categoryIntros[category];
    const Icon = intro.icon;
    const categoryProducts = ufoProducts.filter(p => 
      category === "deco" ? p.id === "ufo-deco" : p.id.includes("industrial")
    );

    return (
      <div key={category} className="mb-20">
        {/* Intro Text */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon className="w-8 h-8 text-primary" />
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
            containerClassName="max-w-3xl mx-auto"
            textClassName="text-lg text-muted-foreground"
          >
            {intro.description}
          </ScrollReveal>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-8 ${categoryProducts.length === 1 ? 'md:grid-cols-1 max-w-2xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
          {categoryProducts.map((product) => (
            <MagneticCard key={product.id} strength={0.15}>
              <Card 
                className="group overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50"
                onClick={() => handleOpenImage(product.images)}
              >
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-muted/30 to-muted/10">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Overlay with info */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.description}</p>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <Download className="w-5 h-5" />
                      <span>Ver Detalles</span>
                    </div>
                  </div>
                </div>

                {/* Card footer */}
                <div className="p-4 bg-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                      <h3 className="font-semibold text-foreground">{product.name}</h3>
                    </div>
                    <Download className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </Card>
            </MagneticCard>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Línea UFO DECO */}
        {renderCategorySection("deco")}

        {/* Línea UFO INDUSTRIAL */}
        {renderCategorySection("industrial")}
      </div>
    </section>
  );
};

export default FeaturedProductLines;
