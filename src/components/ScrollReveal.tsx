"use client";

import * as React from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollReveal({ children, className = "" }: ScrollRevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.05, // Trigger when at least 5% of the element is visible
      }
    );

    const el = ref.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isIntersecting
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-95 translate-y-6 pointer-events-none"
      } ${className}`}
    >
      {children}
    </div>
  );
}
