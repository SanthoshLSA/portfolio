"use client";

import * as React from "react";

export default function CursorGlow() {
  const [position, setPosition] = React.useState({ x: -100, y: -100 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed rounded-full bg-primary/8 blur-[100px] z-30 -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ease-out hidden sm:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: "350px",
        height: "350px",
      }}
    />
  );
}
