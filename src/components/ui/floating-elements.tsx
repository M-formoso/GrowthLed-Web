import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  amplitude?: number;
  duration?: number;
}

export const FloatingElement = ({ 
  children, 
  className, 
  delay = 0, 
  amplitude = 10,
  duration = 3000
}: FloatingElementProps) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const startTime = Date.now() + delay;
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = (elapsed % duration) / duration;
      const newOffset = Math.sin(progress * Math.PI * 2) * amplitude;
      setOffset(newOffset);
      requestAnimationFrame(animate);
    };

    const timeoutId = setTimeout(() => {
      animate();
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [delay, amplitude, duration]);

  return (
    <div
      className={cn("floating-element transition-transform duration-100", className)}
      style={{
        transform: `translateY(${offset}px)`,
      }}
    >
      {children}
    </div>
  );
};

interface ParticleBackgroundProps {
  particleCount?: number;
  className?: string;
}

export const ParticleBackground = ({ 
  particleCount = 50, 
  className 
}: ParticleBackgroundProps) => {
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary/20 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};