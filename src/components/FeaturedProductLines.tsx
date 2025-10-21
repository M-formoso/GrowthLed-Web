import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { AnimatedText } from "@/components/ui/animated-text";
import { Sparkles, ChevronRight } from "lucide-react";

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
  const [activeTab, setActiveTab] = useState<"deco" | "industrial">("deco");

  const productLines = {
    deco: {
      name: "UFO DECO",
      subtitle: "Línea Deco adaptable a todos los ambientes",
      description: "Iluminación LED elegante y eficiente para espacios comerciales y residenciales. Diseño minimalista que se adapta perfectamente a cualquier ambiente.",
      gradient: "from-amber-500 via-orange-500 to-red-500",
      images: [ufoDeco1, ufoDeco2, ufoDeco3, ufoDecoSpecs],
      features: [
        "Exterior blanco o negro a elección",
        "Frente opalino con sensor de presencia",
        "Potencia seleccionable: alta-media-baja",
        "Ángulo dinámico: 60-90-120°",
        "Color seleccionable: blanco cálido, neutro o frío"
      ]
    },
    industrial: {
      name: "UFO INDUSTRIAL",
      subtitle: "Potencia y durabilidad para grandes espacios",
      description: "Luminarias industriales de alto rendimiento diseñadas para naves, depósitos y espacios que requieren máxima iluminación y resistencia.",
      gradient: "from-blue-600 via-cyan-500 to-teal-500",
      images: [
        ufoIndustrial100w, 
        ufoIndustrial150w, 
        ufoIndustrial200w,
        ufoIndustrial150wDetail1,
        ufoIndustrial150wDetail2,
        ufoIndustrial200wDetail
      ],
      features: [
        "Potencias disponibles: 100W, 150W, 200W",
        "Alta eficiencia energética",
        "Diseño robusto y duradero",
        "Ideal para grandes alturas",
        "Protección IP65"
      ]
    }
  };

  const currentLine = productLines[activeTab];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            Líneas Destacadas
          </Badge>
          
          <AnimatedText
            text="Nuestras Líneas UFO"
            variant="gradient"
            className="text-4xl md:text-5xl font-bold mb-4"
            delay={200}
          />
          
          <AnimatedText
            text="Tecnología LED de última generación para cada necesidad"
            variant="fadeUp"
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            delay={400}
          />
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <Button
            size="lg"
            variant={activeTab === "deco" ? "default" : "outline"}
            onClick={() => setActiveTab("deco")}
            className={`
              px-8 py-6 text-lg font-semibold transition-all duration-300
              ${activeTab === "deco" 
                ? `bg-gradient-to-r ${productLines.deco.gradient} text-white border-0 shadow-lg` 
                : 'hover:bg-muted'
              }
            `}
          >
            UFO DECO
          </Button>
          <Button
            size="lg"
            variant={activeTab === "industrial" ? "default" : "outline"}
            onClick={() => setActiveTab("industrial")}
            className={`
              px-8 py-6 text-lg font-semibold transition-all duration-300
              ${activeTab === "industrial" 
                ? `bg-gradient-to-r ${productLines.industrial.gradient} text-white border-0 shadow-lg` 
                : 'hover:bg-muted'
              }
            `}
          >
            UFO INDUSTRIAL
          </Button>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Carrusel de imágenes */}
          <div className="relative">
            <Card className="overflow-hidden border-2 shadow-2xl">
              <Carousel className="w-full">
                <CarouselContent>
                  {currentLine.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-square">
                        <img
                          src={image}
                          alt={`${currentLine.name} - ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${currentLine.gradient} opacity-10`} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </Card>
            
            {/* Badge flotante */}
            <div className={`absolute -top-4 -right-4 bg-gradient-to-r ${currentLine.gradient} text-white px-6 py-3 rounded-full shadow-lg font-bold text-lg z-10`}>
              {currentLine.name}
            </div>
          </div>

          {/* Información del producto */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-2">{currentLine.name}</h3>
              <p className="text-xl text-muted-foreground mb-4">
                {currentLine.subtitle}
              </p>
              <p className="text-base leading-relaxed">
                {currentLine.description}
              </p>
            </div>

            {/* Características */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Características Principales
              </h4>
              <ul className="space-y-2">
                {currentLine.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button 
                size="lg"
                className={`bg-gradient-to-r ${currentLine.gradient} text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                Solicitar Información
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductLines;
