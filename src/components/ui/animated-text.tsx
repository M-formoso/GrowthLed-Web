import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  variant?: "typewriter" | "fadeUp" | "splitWords" | "gradient";
}

export const AnimatedText = ({ 
  text, 
  className, 
  delay = 0, 
  variant = "fadeUp" 
}: AnimatedTextProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  if (variant === "splitWords") {
    return (
      <div
        ref={ref}
        className={cn("split-words", className)}
        style={{ "--delay": `${delay}ms` } as React.CSSProperties}
      >
        {text.split(" ").map((word, index) => (
          <span
            key={index}
            className="inline-block opacity-0 transform translate-y-4 transition-all duration-700 ease-out"
            style={{
              animationDelay: `${delay + index * 100}ms`,
            }}
          >
            {word}&nbsp;
          </span>
        ))}
      </div>
    );
  }

  if (variant === "gradient") {
    return (
      <div
        ref={ref}
        className={cn(
          "animated-gradient-text bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-size-200 bg-pos-0 transition-all duration-1000",
          className
        )}
        style={{ "--delay": `${delay}ms` } as React.CSSProperties}
      >
        {text}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn(
        "animated-text opacity-0 transform translate-y-8 transition-all duration-800 ease-out",
        variant === "typewriter" && "typewriter",
        className
      )}
      style={{ "--delay": `${delay}ms` } as React.CSSProperties}
    >
      {text}
    </div>
  );
};