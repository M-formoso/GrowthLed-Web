import Header from "@/components/Header";
import ModernProductsGrid from "@/components/ModernProductsGrid";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <ModernProductsGrid />
      </main>
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Products;