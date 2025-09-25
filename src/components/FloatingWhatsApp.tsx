import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const phoneNumber = "+573001234567"; // Cambiar por el número real de la empresa
  const message = "Hola, me interesa conocer más sobre los servicios de GROWTHLED";
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none hover:scale-105"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="hidden md:inline-block font-medium">
        ¡Contáctanos!
      </span>
      
      {/* Animación de ondas */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
    </button>
  );
};

export default FloatingWhatsApp;