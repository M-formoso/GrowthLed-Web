import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AuroraBackground, FluidGradient } from "@/components/ui/reactbits-backgrounds";

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
      <section id="contacto" className="relative py-20 overflow-hidden">
        <AuroraBackground 
          colorStops={["hsl(20, 91%, 58%)", "hsl(25, 85%, 65%)", "hsl(20, 91%, 58%)"]}
          speed={0.5}
          blend={0.2}
        />
        <div className="container mx-auto px-4 relative z-10">
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
                <Card key={index} className="hover:scale-105 transition-transform bg-background/80 backdrop-blur-sm border-border">
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

    </>
  );
};

export default ContactSection;