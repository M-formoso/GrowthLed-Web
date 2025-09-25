import Header from "@/components/Header";
import ModernServicesSection from "@/components/ModernServicesSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <ModernServicesSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Services;