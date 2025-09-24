import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GL</span>
              </div>
              <h3 className="text-xl font-bold">GROWTHLED</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Especialistas en iluminación LED industrial y soluciones energéticas. 
              Potenciamos tu energía con tecnología de vanguardia.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Enlaces Rápidos</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-slate-300 hover:text-primary transition-colors text-sm">
                Inicio
              </Link>
              <Link to="/nosotros" className="block text-slate-300 hover:text-primary transition-colors text-sm">
                Nosotros
              </Link>
              <Link to="/productos" className="block text-slate-300 hover:text-primary transition-colors text-sm">
                Productos
              </Link>
              <Link to="/servicios" className="block text-slate-300 hover:text-primary transition-colors text-sm">
                Servicios
              </Link>
              <Link to="/proyectos" className="block text-slate-300 hover:text-primary transition-colors text-sm">
                Proyectos
              </Link>
              <Link to="/contacto" className="block text-slate-300 hover:text-primary transition-colors text-sm">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Servicios</h4>
            <nav className="space-y-2">
              <div className="text-slate-300 text-sm">Redes Eléctricas</div>
              <div className="text-slate-300 text-sm">Energía Solar</div>
              <div className="text-slate-300 text-sm">Centros de Transformación</div>
              <div className="text-slate-300 text-sm">Grandes Clientes</div>
              <div className="text-slate-300 text-sm">Gestión Energética</div>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <div className="text-slate-300 text-sm">
                  Buenos Aires, Argentina
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <div className="text-slate-300 text-sm">
                  +54 11 1234-5678
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <div className="text-slate-300 text-sm">
                  info@growthled.com
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © 2024 GROWTHLED. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/20 to-transparent rounded-tl-full" />
      <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-secondary/20 to-transparent rounded-br-full" />
    </footer>
  );
};

export default Footer;