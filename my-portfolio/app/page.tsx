"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="relative flex flex-col items-start justify-center min-h-[80vh] overflow-hidden bg-[--base-colour]">
      <style jsx>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          15% { transform: rotate(16deg); }
          30% { transform: rotate(-6deg); }
          40% { transform: rotate(16deg); }
          50% { transform: rotate(-2deg); }
          60% { transform: rotate(12deg); }
          70% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        /* Changed to trigger when the hand itself is hovered */
        .hand:hover {
          animation: wave 1.8s 0.3s;
          transform-origin: 75% 75%;
          display: inline-block;
        }
      `}</style>

      <div 
        className="pointer-events-none fixed z-0 rounded-full blur-[100px] opacity-60"
        style={{
          width: '300px',
          height: '300px',
          backgroundColor: 'var(--accent-color)',
          left: mousePos.x - 150,
          top: mousePos.y - 150,
        }}
      />

      <h1 className="relative z-10 text-6xl md:text-8xl font-bold text-left leading-tight tracking-tight pl-[10vw] pr-[10vw] select-none cursor-default">
        <span>hello<span className="hand inline-block ml-2 cursor-pointer">👋</span>,</span><br /> 
        i'm<span className="text-(--accent-color) select-text cursor-text selection:bg-(--accent-color) selection:text-white"> joshua defredes</span>.<br />
        welcome to my website!
      </h1>
    </main>
  );
}