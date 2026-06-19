"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// ─── Constants ────────────────────────────────────────────────────────────────

const ANUBIS_ASCII = `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⢸⣿⡟⠁⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⢸⡟⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⢸⡇⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⢿⣦⣤⣼⣧⣄⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣯⣥⠤⠤⠾⢿⣆⠀⠀⠉⠉⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠟⠋⣉⣀⣤⣤⣤⣤⣤⣿⡄⠀⠀⠛⠿⠦⠈⠿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⠷⠾⠛⠋⠉⣉⣀⣀⣀⣀⣸⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠙⠛⢻⣿
⣿⣿⣯⣤⡶⠶⠟⠛⠛⠉⠉⠉⠉⠙⣿⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣤⣶⣿⣿
⣿⣿⢁⣤⣶⣶⣶⣦⣄⡀⠀⠀⠀⠀⢿⡆⢀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⡇⢸⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⢸⣧⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⡇⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⢸⣿⠁⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⣼⣿⡀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⣿⣿⣇⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣦⣿⣿⣿⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿`;

const COSPLAY_PAGES = [
  { label: "Eru (Archero)", href: "/cosplay/eru" },
  { label: "Sova (Valorant)", href: "/cosplay/sova" },
  { label: "Ezreal (League of Legends)", href: "/cosplay/ezreal" },
  { label: "Link (The Legend of Zelda)", href: "/cosplay/link" },
  { label: "Sonic", href: "/cosplay/sonic" },
  { label: "Silk (Marvel)", href: "/cosplay/silk" },
  { label: "Akali (League of Legends)", href: "/cosplay/akali" },
  { label: "Otros", href: "/cosplay/otros" },
];

const ART_PAGES = [
  { label: "Black Desert", href: "/art/black-desert" },
  { label: "Valorant", href: "/art/valorant" },
  { label: "League Of Legends", href: "/art/league-of-legends" },
  { label: "Sonic The Hedgehog", href: "/art/sonic-the-hedgehog" },
  { label: "Yzhel", href: "/art/yzhel" },
  { label: "Otros", href: "/art/otros" },
];

const VP_PAGES = [
  { label: "Black Desert", href: "/virtual-photography/black-desert" },
  { label: "Where Winds Meet", href: "/virtual-photography/where-winds-meet" },
];

const LS_SECTIONS = [
  { label: "/cosplay", href: "/cosplay" },
  { label: "/art", href: "/art" },
  { label: "/virtual-photography", href: "/virtual-photography" },
  { label: "/web", href: "/web" },
  ...COSPLAY_PAGES,
  ...ART_PAGES,
  ...VP_PAGES,
];

// Multi-word patterns must come before their sub-words in this array
const COMMANDS = [
  "virtual photography",
  "black desert",
  "git commit",
  "help", "man", "ls", "contact",
  "cosplay", "art",
  "viicky", "sudo", "hola",
  "archer", "eru", "aguacate", "avocado",
  "akame", "inuyasha",
  "valencia", "anubis",
  "cd", "mkdir", "touch", "git",
];

// ─── Types ────────────────────────────────────────────────────────────────────

interface ToastItem {
  id: number;
  content: React.ReactNode;
}

interface ConfettiParticle {
  id: number;
  emoji: string;
  x: number;
  delay: number;
  duration: number;
  size: number;
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function EasterEggs() {
  const bufferRef = useRef("");
  const clearTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const scrollBottomTimeRef = useRef(0);

  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const [confetti, setConfetti] = useState<ConfettiParticle[]>([]);
  const [overlay, setOverlay] = useState<React.ReactNode>(null);
  const [glitch, setGlitch] = useState(false);

  // ─── Toast ────────────────────────────────────────────────────────────────

  const addToast = useCallback((content: React.ReactNode, duration = 5000) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, content }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), duration);
  }, []);

  // ─── Confetti ─────────────────────────────────────────────────────────────

  const triggerConfetti = useCallback((emoji: string, count = 40) => {
    const particles: ConfettiParticle[] = Array.from({ length: count }, (_, i) => ({
      id: Date.now() + i,
      emoji,
      x: Math.random() * 95 + 2,
      delay: Math.random() * 1,
      duration: 2.5 + Math.random() * 1.8,
      size: 14 + Math.random() * 22,
    }));
    setConfetti(particles);
    setTimeout(() => setConfetti([]), 5000);
  }, []);

  // ─── Glitch effect ────────────────────────────────────────────────────────

  useEffect(() => {
    if (!glitch) return;
    const filters = [
      "hue-rotate(90deg) saturate(2.5)",
      "none",
      "hue-rotate(-90deg) contrast(2)",
      "none",
      "hue-rotate(270deg) saturate(3)",
      "none",
      "none",
    ];
    let i = 0;
    const id = setInterval(() => {
      document.body.style.filter = filters[i % filters.length] ?? "none";
      i++;
      if (i >= filters.length) {
        clearInterval(id);
        document.body.style.filter = "";
        setGlitch(false);
      }
    }, 110);
    return () => {
      clearInterval(id);
      document.body.style.filter = "";
    };
  }, [glitch]);

  // ─── Command handler ──────────────────────────────────────────────────────

  const handleCommand = useCallback((cmd: string) => {
    if (cmd === "viicky") {
      setGlitch(true);
      return;
    }
    if (cmd === "sudo") {
      addToast(<span>Permission denied. <span className="text-white/55">(soy yo quien manda aquí mueheh)</span></span>);
      return;
    }
    if (cmd === "hola") {
      addToast(<span>heeeey! ✨</span>);
      return;
    }
    if (["black desert","archer","eru","aguacate","avocado"].includes(cmd)) {
      triggerConfetti("🥑");
      return;
    }
    if (cmd === "contact") {
      window.open("https://viickyscarlet-contact.viickyscarlet.workers.dev/", "_blank");
      return;
    }
    if (cmd === "cosplay") {
      setOverlay(<ListOverlay title="cosplay/" items={COSPLAY_PAGES} onClose={() => setOverlay(null)} />);
      return;
    }
    if (cmd === "art") {
      setOverlay(<ListOverlay title="art/" items={ART_PAGES} onClose={() => setOverlay(null)} />);
      return;
    }
    if (cmd === "virtual photography") {
      setOverlay(<ListOverlay title="virtual-photography/" items={VP_PAGES} onClose={() => setOverlay(null)} />);
      return;
    }
    if (cmd === "help" || cmd === "man") {
      setOverlay(
        <ListOverlay
          title="commands"
          items={COMMANDS.map(c => ({ label: c, href: null }))}
          onClose={() => setOverlay(null)}
        />
      );
      return;
    }
    if (cmd === "ls") {
      setOverlay(<ListOverlay title="/" items={LS_SECTIONS} onClose={() => setOverlay(null)} />);
      return;
    }
    if (["cd","mkdir","touch","git","git commit"].includes(cmd)) {
      addToast(<span>¡A dónde te crees que vas, listillo! 😤</span>);
      return;
    }
    if (cmd === "akame" || cmd === "inuyasha") {
      window.open("https://www.youtube.com/watch?v=lSCHU3kwrm8", "_blank");
      return;
    }
    if (cmd === "valencia" || cmd === "anubis") {
      setOverlay(<AsciiOverlay ascii={ANUBIS_ASCII} onClose={() => setOverlay(null)} />);
      return;
    }
  }, [addToast, triggerConfetti]);

  // ─── Keyboard listener ────────────────────────────────────────────────────

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || (e.target as HTMLElement).isContentEditable) return;
      if (document.body.dataset.terminalFocused === "1") return;

      // Close overlay on Escape
      if (e.key === "Escape") { setOverlay(null); return; }

      // Don't process text commands when overlay is open
      if (overlay) return;

      // Text buffer (printable chars only)
      if (e.key.length === 1) {
        bufferRef.current = (bufferRef.current + e.key.toLowerCase()).slice(-30);
        clearTimeout(clearTimerRef.current);
        clearTimerRef.current = setTimeout(() => { bufferRef.current = ""; }, 1800);

        const buf = bufferRef.current;
        const match = COMMANDS.find(cmd => buf.endsWith(cmd));
        if (match) {
          bufferRef.current = "";
          clearTimeout(clearTimerRef.current);
          handleCommand(match);
        }
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleCommand, overlay]);

  // ─── Confetti desde terminal ─────────────────────────────────────────────

  useEffect(() => {
    const onConfetti = (e: Event) => {
      triggerConfetti((e as CustomEvent<{ emoji: string }>).detail.emoji);
    };
    window.addEventListener("ee:confetti", onConfetti);
    return () => window.removeEventListener("ee:confetti", onConfetti);
  }, [triggerConfetti]);

  // ─── Idle detection ───────────────────────────────────────────────────────

  const startIdle = useCallback(() => {
    clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => {
      window.dispatchEvent(new CustomEvent("ee:idle"));
    }, 30_000);
  }, []);

  useEffect(() => {
    startIdle();
    const events = ["mousemove", "touchstart", "scroll", "keydown", "click"] as const;
    events.forEach(ev => window.addEventListener(ev, startIdle));
    return () => {
      clearTimeout(idleTimerRef.current);
      events.forEach(ev => window.removeEventListener(ev, startIdle));
    };
  }, [startIdle]);

  // ─── Speedrunner detection ────────────────────────────────────────────────

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const pct = y / max;

      if (pct > 0.85) scrollBottomTimeRef.current = Date.now();

      if (pct < 0.08 && scrollBottomTimeRef.current > 0) {
        if (Date.now() - scrollBottomTimeRef.current < 4000) {
          scrollBottomTimeRef.current = 0;
          addToast(<span>Speedrunner detected!! 🦔🌀</span>);
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [addToast]);

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <>
  

      {/* Confetti */}
      <div className="fixed inset-0 pointer-events-none z-9990 overflow-hidden" aria-hidden="true">
        {confetti.map(p => (
          <motion.span
            key={p.id}
            className="absolute top-0 select-none leading-none"
            style={{ left: `${p.x}%`, fontSize: `${p.size}px` }}
            initial={{ y: -50, opacity: 1 }}
            animate={{ y: "105vh", opacity: [1, 1, 1, 0] }}
            transition={{ duration: p.duration, delay: p.delay, ease: "easeIn" }}
          >
            {p.emoji}
          </motion.span>
        ))}
      </div>

      {/* Toasts */}
      <div className="fixed bottom-6 right-6 z-9995 flex flex-col gap-2 items-end pointer-events-none" aria-live="polite">
        <AnimatePresence>
          {toasts.map(t => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 24, scale: 0.92 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 24, scale: 0.92 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="bg-black/92 border border-white/15 px-4 py-3 text-sm text-white font-mono max-w-xs backdrop-blur-sm shadow-lg"
            >
              <span className="text-[#E6BE8A] mr-2 select-none">$</span>
              {t.content}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Overlay (cosplay list, art list, help, ls, anubis...) */}
      <AnimatePresence>
        {overlay && (
          <motion.div
            className="fixed inset-0 z-9997 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setOverlay(null)}
          >
            <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" />
            <div onClick={e => e.stopPropagation()} className="relative z-10 w-full max-w-md">
              {overlay}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function ListOverlay({
  title,
  items,
  onClose,
}: {
  title: string;
  items: { label: string; href: string | null }[];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.97 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="bg-black/96 border border-white/15 p-6 font-mono text-sm max-h-[70vh] overflow-y-auto shadow-2xl"
    >
      <div className="flex items-center justify-between gap-0 mb-5 pb-3 border-b border-white/10">
        <span className="text-white/40 text-xs">$ ls ./{title}</span>
        <div className="flex">
          <button className="w-8 h-6 text-white/50 hover:text-white hover:bg-white/10 text-xs flex items-center justify-center transition-colors">─</button>
          <button className="w-8 h-6 text-white/50 hover:text-white hover:bg-white/10 text-xs flex items-center justify-center transition-colors">□</button>
          <button onClick={onClose} className="w-8 h-6 text-white/50 hover:text-white hover:bg-red-600 text-xs flex items-center justify-center transition-colors">✕</button>
        </div>
      </div>

      <div className="space-y-2">
        {items.map(item => (
          <div key={item.label} className="flex items-center gap-2">
            <span className="text-[#E6BE8A]/60 select-none">→</span>
            {item.href ? (
              <Link
                href={item.href}
                onClick={onClose}
                className="text-white/65 hover:text-[#9D50BB] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-white/45">{item.label}</span>
            )}
          </div>
        ))}
      </div>
      <p className="mt-5 text-white/20 text-xs border-t border-white/10 pt-3">
        click fuera o ESC para cerrar
      </p>
    </motion.div>
  );
}

function AsciiOverlay({ ascii, onClose }: { ascii: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="bg-black/96 border border-white/15 p-6 font-mono shadow-2xl"
    >
      <div className="flex items-center justify-between gap-0 mb-4 pb-3 border-b border-white/10">
        <span className="text-white/40 text-xs">anubis.txt</span>
        <div className="flex">
          <button className="w-8 h-6 text-white/50 hover:text-white hover:bg-white/10 text-xs flex items-center justify-center transition-colors">─</button>
          <button className="w-8 h-6 text-white/50 hover:text-white hover:bg-white/10 text-xs flex items-center justify-center transition-colors">□</button>
          <button onClick={onClose} className="w-8 h-6 text-white/50 hover:text-white hover:bg-red-600 text-xs flex items-center justify-center transition-colors">✕</button>
        </div>
      </div>
      <pre className="text-[#E6BE8A]/75 text-[9px] leading-[1.2] overflow-x-auto">{ascii}</pre>
      <p className="mt-4 text-white/20 text-xs border-t border-white/10 pt-3">
        click fuera o ESC para cerrar
      </p>
    </motion.div>
  );
}
