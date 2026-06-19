"use client";

import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const dot    = dotRef.current;
    if (!canvas || !dot) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type Point = { x: number; y: number; age: number };
    const trail: Point[] = [];
    let lastX = -999, lastY = -999;

    const onMouseMove = (e: MouseEvent) => {
      dot.style.opacity = "1";
      dot.style.left = `${e.clientX - 4}px`;
      dot.style.top  = `${e.clientY - 4}px`;

      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      if (dx * dx + dy * dy > 9) {
        trail.push({ x: e.clientX, y: e.clientY, age: 0 });
        lastX = e.clientX;
        lastY = e.clientY;
      }
    };

    const onMouseLeave = () => { dot.style.opacity = "0"; };
    const onMouseEnter = () => { dot.style.opacity = "1"; };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.body.style.cursor = "none";

    const MAX_AGE = 40;
    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = trail.length - 1; i >= 0; i--) {
        trail[i].age++;
        if (trail[i].age > MAX_AGE) trail.splice(i, 1);
      }

      trail.forEach(p => {
        const t = 1 - p.age / MAX_AGE;
        const radius = 16 * t;
        if (radius <= 0) return;

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
        grad.addColorStop(0,   `rgba(200, 120, 255, ${0.75 * t})`);
        grad.addColorStop(0.4, `rgba(157,  80, 187, ${0.35 * t})`);
        grad.addColorStop(1,    "rgba(157,  80, 187, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };
    animId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animId);
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9998]"
      />
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] w-2 h-2 rounded-full bg-white opacity-0"
        style={{ transition: "opacity 0.15s" }}
      />
    </>
  );
}
