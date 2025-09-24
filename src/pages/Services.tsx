import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <ServicesSection />
      </main>
    </div>
  );
};

export default Services;