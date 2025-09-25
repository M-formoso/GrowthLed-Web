import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { HyperSpeed } from "@/components/ui/reactbits-backgrounds";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Dirección",
      content: "Buenos Aires, Argentina",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      content: "+54 11 1234-5678",
      gradient: "from-green-500/20 to-teal-500/20"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "info@growthled.com",
      gradient: "from-purple-500/20 to-indigo-500/20"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horarios",
      content: "Lun - Vie: 10:00 AM - 5:00 PM",
      gradient: "from-orange-500/20 to-yellow-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden bg-background">
          <HyperSpeed 
            lineCount={100}
            speed={1.5}
            colors={["hsl(20, 91%, 58%)", "hsl(25, 85%, 65%)", "#00ff88", "#0088ff", "#ff0088"]}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80 z-10" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
          </div>

          <div className="relative container mx-auto px-4 text-center z-20">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-primary/10 backdrop-blur-sm rounded-full text-primary animate-fade-in">
              <MessageSquare className="h-5 w-5" />
              <span className="font-semibold">Contacto Directo</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Hablemos de tu <span className="text-gradient-primary">Proyecto</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Nuestro equipo de expertos está listo para desarrollar soluciones eléctricas e iluminación LED 
              personalizadas para tu industria. Contactanos para una consultoría gratuita.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-in bg-card/80 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <CardContent className="relative p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-white transition-colors">
                      {info.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-white/90 transition-colors">
                      {info.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <div className="max-w-4xl mx-auto">
              <Card className="relative overflow-hidden bg-card/80 backdrop-blur-sm border-border/50">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
                <CardContent className="relative p-8 md:p-12">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      Solicita tu <span className="text-gradient-secondary">Consultoría Gratuita</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Nombre Completo *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Tu nombre completo"
                          className="bg-background/50 border-border/50 focus:border-primary"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Email *</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="tu@email.com"
                          className="bg-background/50 border-border/50 focus:border-primary"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Teléfono</label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+54 11 1234-5678"
                          className="bg-background/50 border-border/50 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Empresa</label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Nombre de tu empresa"
                          className="bg-background/50 border-border/50 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Mensaje *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Cuéntanos sobre tu proyecto, necesidades específicas y cualquier detalle relevante..."
                        className="bg-background/50 border-border/50 focus:border-primary min-h-[120px]"
                        required
                      />
                    </div>

                    <div className="text-center pt-6">
                      <Button 
                        type="submit"
                        size="lg"
                        className="px-12 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Enviar Consulta
                      </Button>
                      <p className="text-sm text-muted-foreground mt-4">
                        * Campos obligatorios
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Original Contact Section */}
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Contact;