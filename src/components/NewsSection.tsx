import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      date: "30 de Junio",
      title: "COVID-19",
      description: "Sistemas de desinfección sin contacto",
      image: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=400&h=300&fit=crop",
    },
    {
      date: "5 de Febrero", 
      title: "Supermercado en La Plata",
      description: "Proyecto eléctrico, instalación y provisión de luminarias LED para supermercado en la ciudad de La Plata",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=400&h=300&fit=crop",
    },
    {
      date: "15 de Enero",
      title: "Centro Comercial LED",
      description: "Instalación completa de sistema LED para centro comercial con control inteligente",
      image: "https://images.unsplash.com/photo-1555529669-2269763671c0?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Novedades</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {news.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {item.date}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{item.description}</p>
                <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                  Leer más
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Info Section */}
        <div className="bg-card rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Fabricamos luminarias world class con TECNOLOGÍAS LED
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-8">
            <div className="space-y-4 text-left">
              <h4 className="text-lg font-semibold text-foreground mb-4">ATENDEMOS A:</h4>
              <ul className="space-y-2">
                {[
                  "Empresas e Industrias",
                  "Parques Industriales y Centros Logísticos", 
                  "Municipalidades y Espacios Públicos",
                  "Retail y Centros Comerciales",
                  "Countries y Barrios Cerrados",
                  "Instituciones Deportivas y Educativas",
                  "Hoteles y Centros Culturales",
                  "Clínicas y Hospitales"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-l-6 border-r-6 border-b-10 border-transparent border-b-white ml-1"></div>
                </div>
                <p className="text-muted-foreground">Video Corporativo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;