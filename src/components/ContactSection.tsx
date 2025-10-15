import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HyperSpeed } from "@/components/ui/reactbits-backgrounds";

const ContactSection = () => {
  const clients = [
    { name: "YPF", logo: "/logos/ypf-logo.png" },
    { name: "Shell", logo: "/logos/shell-logo.png" },
    { name: "Argentinos Juniors", logo: "/logos/argentinos-juniors-logo.png" },
    { name: "Gulf", logo: "/logos/gulf-logo.png" },
    { name: "Puma Energy", logo: "/logos/puma-logo.png" },
  ];

  const benefits = [
    "Envíos a todo el país",
    "Asesoramiento sin cargo", 
    "Sucursal en La Plata!"
  ];

  return (
    <>
      {/* Contact CTA Section */}
      <section id="contacto" className="relative py-20 bg-gradient-to-r from-primary/10 to-primary-glow/10">
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-center">
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