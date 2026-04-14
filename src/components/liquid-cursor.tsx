"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Soft “water puddle” trail: outer slow blob + mid layer + tight core.
 * Fine pointer only; hidden on touch / reduced motion.
 */
export default function LiquidCursor() {
  const [active, setActive] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const outerX = useSpring(x, { stiffness: 120, damping: 22, mass: 0.9 });
  const outerY = useSpring(y, { stiffness: 120, damping: 22, mass: 0.9 });

  const midX = useSpring(x, { stiffness: 220, damping: 26, mass: 0.55 });
  const midY = useSpring(y, { stiffness: 220, damping: 26, mass: 0.55 });

  const coreX = useSpring(x, { stiffness: 420, damping: 32, mass: 0.35 });
  const coreY = useSpring(y, { stiffness: 420, damping: 32, mass: 0.35 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const motionOk = window.matchMedia("(prefers-reduced-motion: no-preference)");
    const ok = () => fine.matches && motionOk.matches;
    const apply = () => setActive(ok());
    apply();
    fine.addEventListener("change", apply);
    motionOk.addEventListener("change", apply);
    return () => {
      fine.removeEventListener("change", apply);
      motionOk.removeEventListener("change", apply);
    };
  }, []);

  useEffect(() => {
    if (!active) return;
    document.documentElement.classList.add("liquid-cursor-active");
    return () => {
      document.documentElement.classList.remove("liquid-cursor-active");
    };
  }, [active]);

  useEffect(() => {
    if (!active) return;
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [active, x, y]);

  if (!active) return null;

  const blobBase =
    "pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full";

  return (
    <>
      <motion.div
        aria-hidden
        className={`${blobBase} h-36 w-36`}
        style={{
          x: outerX,
          y: outerY,
          background:
            "radial-gradient(circle closest-side, rgba(34,211,238,0.22) 0%, rgba(56,189,248,0.1) 42%, rgba(167,139,250,0.06) 65%, transparent 78%)",
          filter: "blur(18px)",
          mixBlendMode: "screen",
        }}
      />
      <motion.div
        aria-hidden
        className={`${blobBase} h-24 w-24`}
        style={{
          x: midX,
          y: midY,
          background:
            "radial-gradient(circle closest-side, rgba(34,211,238,0.35) 0%, rgba(125,211,252,0.15) 50%, transparent 72%)",
          filter: "blur(8px)",
          mixBlendMode: "screen",
        }}
      />
      <motion.div
        aria-hidden
        className={`${blobBase} h-3 w-3 bg-cyan-200/90 shadow-[0_0_16px_4px_rgba(34,211,238,0.55)]`}
        style={{
          x: coreX,
          y: coreY,
          mixBlendMode: "screen",
        }}
      />
    </>
  );
}
