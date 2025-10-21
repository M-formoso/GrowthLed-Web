// Modern GROWTHLED website - Responsive LED lighting company site

import Header from "@/components/Header";
import ModernHeroSection from "@/components/ModernHeroSection";
import CorporateVideoSection from "@/components/CorporateVideoSection";
import FeaturedProductLines from "@/components/FeaturedProductLines";
import ModernProductsGrid from "@/components/ModernProductsGrid";
import ModernServicesSection from "@/components/ModernServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ModernHeroSection />
        <CorporateVideoSection />
        
        {/* Products Section */}
        <section id="productos" className="py-20">
          <FeaturedProductLines />
          <ModernProductsGrid />
        </section>
        
        {/* Services Section */}
        <section id="servicios">
          <ModernServicesSection />
        </section>
        
        {/* About Section */}
        <section id="nosotros">
          <AboutSection />
        </section>
        
        {/* Contact Section */}
        <section id="contacto">
          <ContactSection />
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;