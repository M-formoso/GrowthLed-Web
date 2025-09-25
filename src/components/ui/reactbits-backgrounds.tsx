import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Aurora Background - inspired by ReactBits
interface AuroraBackgroundProps {
  className?: string;
  colorStops?: [string, string, string];
  speed?: number;
  blend?: number;
}

export const AuroraBackground = ({ 
  className, 
  colorStops = ["#3A29FF", "#FF94B4", "#FF3232"],
  speed = 1,
  blend = 0.5 
}: AuroraBackgroundProps) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div 
        className="aurora-effect"
        style={{
          "--aurora-color-1": colorStops[0],
          "--aurora-color-2": colorStops[1], 
          "--aurora-color-3": colorStops[2],
          "--aurora-speed": `${30 / speed}s`,
          "--aurora-blend": blend
        } as React.CSSProperties}
      />
    </div>
  );
};

// Fluid Gradient Background - ReactBits style
interface FluidGradientProps {
  className?: string;
  colors?: string[];
  speed?: number;
  blur?: number;
}

export const FluidGradient = ({ 
  className, 
  colors = ["#667eea", "#764ba2", "#f093fb"],
  speed = 1,
  blur = 60
}: FluidGradientProps) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div 
        className="fluid-gradient"
        style={{
          "--fluid-color-1": colors[0],
          "--fluid-color-2": colors[1],
          "--fluid-color-3": colors[2],
          "--fluid-speed": `${20 / speed}s`,
          "--fluid-blur": `${blur}px`
        } as React.CSSProperties}
      />
    </div>
  );
};

// Orb Background - ReactBits inspired
interface OrbBackgroundProps {
  className?: string;
  color?: string;
  size?: number;
  hoverIntensity?: number;
}

export const OrbBackground = ({ 
  className, 
  color = "#3A29FF",
  size = 400,
  hoverIntensity = 1.2
}: OrbBackgroundProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn("absolute inset-0 overflow-hidden", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={cn("orb-effect", isHovered && "orb-effect-hover")}
        style={{
          "--orb-color": color,
          "--orb-size": `${size}px`,
          "--orb-hover-scale": hoverIntensity
        } as React.CSSProperties}
      />
    </div>
  );
};

// Particle Field - CSS-based particles
interface ParticleFieldProps {
  className?: string;
  particleCount?: number;
  color?: string;
  speed?: number;
}

export const ParticleField = ({ 
  className, 
  particleCount = 50,
  color = "#ffffff",
  speed = 1
}: ParticleFieldProps) => {
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 20,
    duration: (Math.random() * 10 + 10) / speed
  }));

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            "--particle-x": `${particle.x}%`,
            "--particle-y": `${particle.y}%`,
            "--particle-size": `${particle.size}px`,
            "--particle-color": color,
            "--particle-delay": `${particle.delay}s`,
            "--particle-duration": `${particle.duration}s`
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

// Mesh Gradient - Modern gradient mesh effect
interface MeshGradientProps {
  className?: string;
  colors?: string[];
  speed?: number;
}

export const MeshGradient = ({ 
  className, 
  colors = ["#ff0080", "#7928ca", "#ff4545", "#00d4ff"],
  speed = 1
}: MeshGradientProps) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div 
        className="mesh-gradient"
        style={{
          "--mesh-color-1": colors[0],
          "--mesh-color-2": colors[1],
          "--mesh-color-3": colors[2],
          "--mesh-color-4": colors[3],
          "--mesh-speed": `${25 / speed}s`
        } as React.CSSProperties}
      />
    </div>
  );
};

// Dot Grid - Animated dot pattern
interface DotGridProps {
  className?: string;
  dotSize?: number;
  dotColor?: string;
  spacing?: number;
}

export const DotGrid = ({ 
  className, 
  dotSize = 1,
  dotColor = "rgba(255, 255, 255, 0.3)",
  spacing = 20
}: DotGridProps) => {
  return (
    <div 
      className={cn("absolute inset-0", className)}
      style={{
        "--dot-size": `${dotSize}px`,
        "--dot-color": dotColor,
        "--dot-spacing": `${spacing}px`
      } as React.CSSProperties}
    >
      <div className="dot-grid-pattern" />
    </div>
  );
};