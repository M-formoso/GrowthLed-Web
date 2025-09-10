import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const clients = [
    { name: "Grupo Zingaro", logo: "https://via.placeholder.com/120x60/333/fff?text=Zingaro" },
    { name: "TDA", logo: "https://via.placeholder.com/120x60/333/fff?text=TDA" },
    { name: "AUBASA", logo: "https://via.placeholder.com/120x60/333/fff?text=AUBASA" },
    { name: "Grupo Kopar", logo: "https://via.placeholder.com/120x60/333/fff?text=Kopar" },
    { name: "Edelap", logo: "https://via.placeholder.com/120x60/333/fff?text=Edelap" },
    { name: "Avatar", logo: "https://via.placeholder.com/120x60/333/fff?text=Avatar" },
    { name: "Infraestructura Urbana", logo: "https://via.placeholder.com/120x60/333/fff?text=IU" },
  ];

  const benefits = [
    "Envíos a todo el país",
    "Asesoramiento sin cargo", 
    "Sucursal en La Plata!"
  ];

  return (
    <>
      {/* Contact CTA Section */}
      <section id="contacto" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">¿Necesita asesoría?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contáctenos, un representante se comunicará con usted en la brevedad.
            </p>
            <Button 
              size="lg"
              className="bg-brand-gradient hover:shadow-brand-glow transition-all duration-300 text-lg px-8 py-6"
            >
              Solicite un presupuesto
            </Button>
          </div>

          {/* Clients Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">Confían en nosotros</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
              {clients.map((client, index) => (
                <Card key={index} className="hover:scale-105 transition-transform bg-background border-border">
                  <CardContent className="p-4 flex items-center justify-center">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="max-w-full h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-6 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <span className="text-primary-foreground font-semibold text-lg">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-brand-gradient rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-foreground rounded-sm"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">GROWTHLED</h3>
                  <p className="text-xs text-muted-foreground">We illuminate</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Contacto</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>📧 info@growthled.com.ar</p>
                <p>📍 Calle 26 n°1804, La PLata</p>
                <p>📍 San Martín N°66, 5to.Piso Oficina 515 CABA</p>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Horarios</h4>
              <p className="text-muted-foreground">Lunes a Viernes: 10:00 AM - 05:00 PM</p>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 GROWTHLED. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;