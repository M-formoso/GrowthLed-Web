import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Factory, Zap, Lightbulb, Sun, Activity, Shield, Eye, X } from "lucide-react";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import campanasLed from "@/assets/productos/campanas-led.jpg";
import proyectoresDeportivos from "@/assets/productos/proyectores-deportivos.jpg";
import farolasUrbanas from "@/assets/productos/farolas-urbanas.jpg";
import solares from "@/assets/productos/solares.jpg";
import lineales from "@/assets/productos/lineales.jpg";
import antiexplosion from "@/assets/productos/antiexplosion.jpg";
import productCatalogHero from "@/assets/product-catalog-hero.jpg";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const productCategories = [
    {
      id: 1,
      title: "CAMPANAS LED INDUSTRIALES",
      subtitle: "Para Naves y Almacenes de Gran Altura",
      description: "Sistemas de iluminación LED de alta potencia diseñados para instalaciones industriales de gran envergadura. Ideales para naves, almacenes, centros logísticos y plantas de producción que requieren iluminación uniforme y eficiente a más de 8 metros de altura.",
      image: campanasLed,
      icon: <Factory className="h-8 w-8" />,
      gradient: "from-blue-600/80 to-cyan-500/80",
      specs: ["Potencias: 100W - 500W", "Altura óptima: 8-25m", "Eficiencia: >140 lm/W", "IP65 - Antipolvo/agua"],
      applications: ["Centros logísticos", "Plantas industriales", "Almacenes de gran altura", "Centros de distribución"],
      catalogs: [
        { name: "B2GHB12 CAMPANA LED GROWTHLED", file: "B2GHB12CAMPANA LED GROWTHLED.pdf" },
        { name: "Catálogo GROWTHLED CAMPANAS ECO", file: "Catalogo GROWTHLED CAMPANAS ECO _pages-to-jpg-0001 (1) (1)-11-12.pdf" },
        { name: "CAT 100W GROWTHLED FICHA TÉCNICA", file: "CAT 100W GROWTHLED.FICHA TECNICA PDF.pdf" }
      ]
    },
    {
      id: 2,
      title: "PROYECTORES DEPORTIVOS",
      subtitle: "Iluminación de Alto Rendimiento",
      description: "Proyectores LED de última generación especialmente diseñados para instalaciones deportivas profesionales. Garantizan niveles de iluminación superiores a 500 lux con uniformidad excepcional, cumpliendo normativas FIFA, UEFA y otras federaciones internacionales.",
      image: proyectoresDeportivos,
      icon: <Zap className="h-8 w-8" />,
      gradient: "from-orange-600/80 to-red-500/80",
      specs: ["Potencias: 200W - 1000W", "Luminosidad: >500 lux", "Control individual", "Resistencia UV superior"],
      applications: ["Estadios de fútbol", "Canchas de tenis", "Complejos deportivos", "Pistas de atletismo"],
      catalogs: [
        { name: "HPI GROWTH LED DEPORTIVO Y INDUSTRIA", file: "HPI GROWTH LED DEPORTIVO Y INDUSTRIA.pdf" },
        { name: "HPI GROWTH LED DEPORTIVO", file: "HPI GROWTH LED DEPORTIVO..pdf" },
        { name: "GROWTH LED Proyector Deportivo HF", file: "GROWTH LEDFicha Técnica - PROYECTOR DEP HF.pdf" },
        { name: "Catálogo Deportivo GROWTH LED", file: "Catálogo-Deportivo- GROWTH LED.pdf" }
      ]
    },
    {
      id: 3,
      title: "FAROLAS URBANAS LED",
      subtitle: "Iluminación Pública Eficiente",
      description: "Soluciones completas de alumbrado público LED con tecnología fotométrica avanzada. Diseñadas para reducir hasta 70% el consumo energético manteniendo niveles óptimos de seguridad vial y peatonal en entornos urbanos e industriales.",
      image: farolasUrbanas,
      icon: <Lightbulb className="h-8 w-8" />,
      gradient: "from-green-600/80 to-teal-500/80",
      specs: ["Potencias: 50W - 300W", "Altura: 4-12 metros", "Control inteligente", "Vida útil: >50,000h"],
      applications: ["Alumbrado público", "Parques industriales", "Avenidas principales", "Zonas peatonales"],
      catalogs: [
        { name: "FAROLA GROWTH LED NEW2025", file: "FAROLA GROWTH LED NEW2025.pdf" }
      ]
    },
    {
      id: 4,
      title: "SISTEMAS SOLARES",
      subtitle: "Energía Renovable Autónoma",
      description: "Sistemas de iluminación LED completamente autónomos alimentados por energía solar. Ideales para ubicaciones remotas o proyectos sustentables. Incluyen baterías de litio de larga duración y paneles solares de alta eficiencia.",
      image: solares,
      icon: <Sun className="h-8 w-8" />,
      gradient: "from-yellow-600/80 to-orange-500/80",
      specs: ["Autonomía: 5-10 días", "Panel: 80W-200W", "Batería litio", "Instalación sin cableado"],
      applications: ["Zonas rurales", "Parques y plazas", "Rutas sin electrificación", "Proyectos sustentables"],
      catalogs: [
        { name: "EVEREST All in One SOLAR", file: "EVEREST All in One  SOLAR_page-0001.pdf" },
        { name: "LUMINARIA SOLAR", file: "LUMINARIA  SOLAR_page-0001.pdf" }
      ]
    },
    {
      id: 5,
      title: "LINEALES INDUSTRIALES",
      subtitle: "Iluminación Continua y Uniforme",
      description: "Sistemas de iluminación lineal LED diseñados para proporcionar luz continua y uniforme en espacios industriales extensos. Perfectos para líneas de producción, pasillos largos y áreas que requieren iluminación específica sin sombras.",
      image: lineales,
      icon: <Activity className="h-8 w-8" />,
      gradient: "from-purple-600/80 to-indigo-500/80",
      specs: ["Longitudes: 0.6m - 2.4m", "Conectables en serie", "Difusor opalino", "Montaje versátil"],
      applications: ["Líneas de producción", "Pasillos industriales", "Áreas de inspección", "Talleres especializados"],
      catalogs: [
        { name: "LEDSTATION LINEAL GROWTH LED", file: "LEDSTATION LINEAL GROWTH LED..pdf" },
        { name: "Catálogo Iluminación Grandes Superficies", file: "Catálogo-Iluminación-Grandes-Superficies-GROWTH LED.pdf" },
        { name: "GEA 70W GROWTH", file: "GEA 70W GROWTH.pdf" },
        { name: "GEA PI 32 100W GROWTH LED", file: "GEA PI 32 100W GROWTH LED.pdf" },
        { name: "GEA PI 32 70W GROWTH LED", file: "GEA PI 32 70W GROWTH LED.pdf" }
      ]
    },
    {
      id: 6,
      title: "ANTIEXPLOSIÓN / ATEX",
      subtitle: "Seguridad en Ambientes Peligrosos",
      description: "Luminarias LED certificadas para ambientes con riesgo de explosión. Cumplen normativas ATEX y están diseñadas para operar de forma segura en presencia de gases, vapores o polvos combustibles en instalaciones petroquímicas y mineras.",
      image: antiexplosion,
      icon: <Shield className="h-8 w-8" />,
      gradient: "from-red-600/80 to-pink-500/80",
      specs: ["Certificación ATEX", "Zona 1 y Zona 2", "Carcasa reforzada", "Sellado hermético"],
      applications: ["Plantas petroquímicas", "Refinerías", "Instalaciones mineras", "Ambientes explosivos"],
      catalogs: [
        { name: "Ledstation Zona 2 EESS GNC GROWTH LED", file: "Ledstation Zona 2 EESS GNC GROWTH LED..pdf" },
        { name: "LEDSTATION 100W LIQUIDO GROWTH LED", file: "LEDSTATION 100W LIQUIDO GROWTH LED.pdf" }
      ]
    }
  ];

  const handleDownload = (filename: string) => {
    console.log(`Downloading: ${filename}`);
    // Aquí irá la lógica para descargar el PDF desde public/catalogs/
    const link = document.createElement('a');
    link.href = `/catalogos/${filename}`;
    link.download = filename;
    link.click();
  };

  const openModal = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  const closeModal = () => {
    setSelectedCategory(null);
  };

  const selectedCategoryData = productCategories.find(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={productCatalogHero} 
              alt="Productos LED Industriales GROWTH LED"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          
          {/* Content */}
          <div className="relative container mx-auto px-4">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white">
                <Factory className="h-6 w-6" />
                <span className="font-semibold">Productos Industriales</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
                Catálogos de Productos
                <span className="block text-3xl md:text-4xl font-normal mt-2 text-white/90">
                  LED Industriales GROWTH LED
                </span>
              </h1>
              <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
                Explora nuestra línea completa de productos LED industriales de alta tecnología. Cada categoría está 
                específicamente diseñada para satisfacer las demandas más exigentes de grandes complejos industriales, 
                plantas de producción y proyectos de infraestructura crítica.
              </p>
              
              <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>+15 años de experiencia</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Certificaciones internacionales</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Proyectos en +20 países</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories Grid */}
        <section className="py-20 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Card 
                key={category.id} 
                className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer animate-fade-in bg-card border-border"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => openModal(category.id)}
              >
                {/* Background Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-90`} />
                  
                  {/* Category Number */}
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                      {category.id.toString().padStart(2, '0')}
                    </div>
                  </div>

                  {/* View Icon */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                      <Eye className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-6 left-6">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                      {category.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-primary font-semibold mb-4">{category.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {category.description}
                  </p>
                  
                  <div className="mt-6 flex items-center text-primary font-semibold">
                    <span>Ver detalles</span>
                    <Activity className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Modal */}
        {selectedCategory && selectedCategoryData && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
              {/* Header */}
              <div className="relative h-64">
                <img 
                  src={selectedCategoryData.image} 
                  alt={selectedCategoryData.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${selectedCategoryData.gradient}`} />
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 text-white hover:bg-white/20"
                  onClick={closeModal}
                >
                  <X className="h-6 w-6" />
                </Button>

                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      {selectedCategoryData.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">{selectedCategoryData.title}</h2>
                      <p className="text-xl opacity-90">{selectedCategoryData.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Descripción</h3>
                    <p className="text-muted-foreground leading-relaxed">{selectedCategoryData.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Especificaciones</h3>
                    <ul className="space-y-2">
                      {selectedCategoryData.specs.map((spec, index) => (
                        <li key={index} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Aplicaciones</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {selectedCategoryData.applications.map((app, index) => (
                      <div key={index} className="bg-muted/50 rounded-lg p-3 text-center">
                        <span className="text-sm font-medium text-foreground">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Catálogos Disponibles</h3>
                  <div className="grid gap-4">
                    {selectedCategoryData.catalogs.map((catalog, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-primary" />
                          <span className="font-medium text-foreground">{catalog.name}</span>
                        </div>
                        <Button
                          onClick={() => handleDownload(catalog.file)}
                          className="bg-primary hover:bg-primary/90"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Descargar PDF
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Products;