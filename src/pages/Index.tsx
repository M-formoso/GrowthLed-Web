// Modern GROWTHLED website - Responsive LED lighting company site

import Header from "@/components/Header";
import ModernHeroSection from "@/components/ModernHeroSection";
import CorporateVideoSection from "@/components/CorporateVideoSection";
import NewsSection from "@/components/NewsSection";
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
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;