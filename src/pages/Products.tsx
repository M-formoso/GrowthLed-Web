import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Lightbulb, Building2, Sun, Zap, Car, Factory } from "lucide-react";
import Header from "@/components/Header";

const Products = () => {
  const productCategories = [
    {
      title: "Iluminación Deportiva",
      description: "Sistemas de iluminación LED especializados para instalaciones deportivas",
      icon: <Zap className="h-6 w-6" />,
      gradient: "from-blue-500 to-cyan-400",
      catalogs: [
        { name: "HPI GROWTH LED DEPORTIVO Y INDUSTRIA", file: "HPI-GROWTH-LED-DEPORTIVO-Y-INDUSTRIA.pdf" },
        { name: "HPI GROWTH LED DEPORTIVO", file: "HPI-GROWTH-LED-DEPORTIVO.pdf" },
        { name: "Catálogo Deportivo GROWTH LED", file: "Catalogo-Deportivo-GROWTH-LED.pdf" }
      ]
    },
    {
      title: "Iluminación Industrial",
      description: "Soluciones LED para grandes superficies e instalaciones industriales",
      icon: <Factory className="h-6 w-6" />,
      gradient: "from-orange-500 to-red-400",
      catalogs: [
        { name: "Catálogo Iluminación Grandes Superficies", file: "Catalogo-Iluminacion-Grandes-Superficies-GROWTH-LED.pdf" },
        { name: "HPI GROWTH LED DEPORTIVO Y INDUSTRIA", file: "HPI-GROWTH-LED-DEPORTIVO-Y-INDUSTRIA.pdf" }
      ]
    },
    {
      title: "Luminarias Solares",
      description: "Sistemas de iluminación solar autónomos y sostenibles",
      icon: <Sun className="h-6 w-6" />,
      gradient: "from-yellow-500 to-orange-400",
      catalogs: [
        { name: "EVEREST All in One SOLAR", file: "EVEREST-All-in-One-SOLAR.pdf" },
        { name: "LUMINARIA SOLAR", file: "LUMINARIA-SOLAR.pdf" }
      ]
    },
    {
      title: "Farolas LED",
      description: "Farolas LED urbanas de alta eficiencia energética",
      icon: <Lightbulb className="h-6 w-6" />,
      gradient: "from-green-500 to-teal-400",
      catalogs: [
        { name: "FAROLA GROWTH LED NEW2025", file: "FAROLA-GROWTH-LED-NEW2025.pdf" }
      ]
    },
    {
      title: "Campanás LED",
      description: "Campanás LED industriales para naves y almacenes",
      icon: <Building2 className="h-6 w-6" />,
      gradient: "from-purple-500 to-indigo-400",
      catalogs: [
        { name: "B2GHB12 CAMPANA LED GROWTHLED", file: "B2GHB12CAMPANA-LED-GROWTHLED.pdf" },
        { name: "Catálogo GROWTHLED CAMPANAS ECO", file: "Catalogo-GROWTHLED-CAMPANAS-ECO.pdf" }
      ]
    },
    {
      title: "Serie GEA",
      description: "Proyectores LED de la serie GEA para múltiples aplicaciones",
      icon: <Zap className="h-6 w-6" />,
      gradient: "from-teal-500 to-blue-400",
      catalogs: [
        { name: "GEA 70W GROWTH", file: "GEA-70W-GROWTH.pdf" },
        { name: "GEA PI 32 70W GROWTH LED", file: "GEA-PI-32-70W-GROWTH-LED.pdf" },
        { name: "GEA PI 32 100W GROWTH LED", file: "GEA-PI-32-100W-GROWTH-LED.pdf" }
      ]
    },
    {
      title: "Serie LEDSTATION",
      description: "Estaciones LED especializadas para diferentes aplicaciones",
      icon: <Car className="h-6 w-6" />,
      gradient: "from-indigo-500 to-purple-400",
      catalogs: [
        { name: "LEDSTATION 100W LIQUIDO GROWTH LED", file: "LEDSTATION-100W-LIQUIDO-GROWTH-LED.pdf" },
        { name: "LEDSTATION LINEAL GROWTH LED", file: "LEDSTATION-LINEAL-GROWTH-LED.pdf" },
        { name: "Ledstation Zona 2 EESS GNC GROWTH LED", file: "Ledstation-Zona-2-EESS-GNC-GROWTH-LED.pdf" }
      ]
    },
    {
      title: "Fichas Técnicas",
      description: "Especificaciones técnicas detalladas de nuestros productos",
      icon: <FileText className="h-6 w-6" />,
      gradient: "from-gray-500 to-slate-400",
      catalogs: [
        { name: "CAT 100W GROWTHLED FICHA TECNICA", file: "CAT-100W-GROWTHLED-FICHA-TECNICA-PDF.pdf" },
        { name: "GROWTH LED Ficha Técnica PROYECTOR DEP HF", file: "GROWTH-LEDFicha-Tecnica-PROYECTOR-DEP-HF.pdf" }
      ]
    }
  ];

  const handleDownload = (filename: string) => {
    // Esta función se implementará cuando los archivos estén disponibles
    console.log(`Downloading: ${filename}`);
    // Aquí irá la lógica para descargar el PDF
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Catálogos de Productos
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubre nuestra amplia gama de productos de iluminación LED. 
              Descarga nuestros catálogos técnicos y encuentra la solución perfecta para tu proyecto.
            </p>
          </div>
        </section>

        {/* Product Categories */}
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.gradient} flex items-center justify-center text-white mb-4`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  {category.catalogs.map((catalog, catalogIndex) => (
                    <div key={catalogIndex} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-foreground truncate">
                          {catalog.name}
                        </span>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDownload(catalog.file)}
                        className="hover:bg-primary hover:text-primary-foreground"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center bg-muted/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              ¿Necesitas más información?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nuestro equipo técnico está disponible para ayudarte a elegir 
              la mejor solución de iluminación LED para tu proyecto específico.
            </p>
            <Button size="lg" className="font-semibold">
              Contactar Especialista
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Products;