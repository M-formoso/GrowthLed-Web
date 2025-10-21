import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
  const clients = [
    { name: "YPF", logo: "/logos/ypf-logo.png" },
    { name: "Shell", logo: "/logos/shell-logo.png" },
    { name: "Argentinos Juniors", logo: "/logos/argentinos-juniors.png" },
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
      <section id="contacto" className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={5}
              textClassName="text-4xl md:text-5xl font-bold mb-4"
            >
              ¿Necesita asesoría?
            </ScrollReveal>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Contáctenos, un representante se comunicará con usted en la brevedad.
            </p>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Button 
                size="lg"
                className="bg-brand-gradient hover:shadow-brand-glow hover:scale-105 transition-all duration-300 text-lg px-8 py-6 group"
              >
                Solicite un presupuesto
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Clients Section */}
          <div className="mb-16">
            <ScrollReveal
              baseOpacity={0.3}
              enableBlur={true}
              baseRotation={1}
              blurStrength={4}
              textClassName="text-2xl md:text-3xl font-bold text-center mb-12"
            >
              Confían en nosotros
            </ScrollReveal>
            
            {/* Infinite Scroll Logos */}
            <div className="relative overflow-hidden">
              <div className="flex animate-infinite-scroll hover:pause">
                {[...clients, ...clients, ...clients].map((client, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 w-48 h-32 flex items-center justify-center mx-4"
                  >
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-8 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-primary opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-16">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="text-center hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <span className="text-primary-foreground font-bold text-xl">
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