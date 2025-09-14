// Modern GROWTHLED website - Responsive LED lighting company site

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import NewsSection from "@/components/NewsSection";
import ServicesDetails from "@/components/ServicesDetails";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesGrid />
        <NewsSection />
        <ServicesDetails />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;