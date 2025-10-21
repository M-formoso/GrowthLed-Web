import Header from "@/components/Header";
import FeaturedProductLines from "@/components/FeaturedProductLines";
import ModernProductsGrid from "@/components/ModernProductsGrid";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section Unificado */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Catálogo de Productos
              </Badge>
              
              <ScrollReveal
                baseOpacity={0.1}
                enableBlur={true}
                baseRotation={3}
                blurStrength={8}
                containerClassName="mb-6"
                textClassName="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent"
              >
                Tecnología LED de Vanguardia
              </ScrollReveal>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Descubrí nuestra amplia gama de productos LED diseñados para cada necesidad específica
              </p>
            </div>
          </div>
        </section>

        {/* Secciones de Productos */}
        <FeaturedProductLines />
        <ModernProductsGrid />
      </main>
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Products;