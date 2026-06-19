"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

//   Data                 

type BootLine = { kind: "cmd" | "out" | "ok"; text: string };

// Boot secuence: cada comando se "teclea" y su salida aparece 1s después
const BOOT_SEQUENCE: { cmd: string; out: BootLine[] }[] = [
  {
    cmd: "git clone https://github.com/Vii97/viickyscarlet",
    out: [{ kind: "out", text: "Cloning into 'viickyscarlet'...  done." }],
  },
  {
    cmd: "cd viickyscarlet && npm install",
    out: [{ kind: "out", text: "added 420 packages in 13.2s" }],
  },
  {
    cmd: "npm run dev",
    out: [
      { kind: "out", text: "▲ Next.js  ready on http://localhost:3000" },
      { kind: "ok",  text: "console.log('hello world ✦')" },
    ],
  },
];

const TYPE_SPEED = 45;    // ms por carácter tecleado
const OUT_DELAY  = 1000;  // 1s antes de que aparezca la salida
const NEXT_PAUSE = 450;   // pausa antes de empezar el siguiente comando

const ANUBIS = `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
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

const COSPLAY = [
  { label: "Eru (Archero)", href: "/cosplay/eru" },
  { label: "Sova (Valorant)", href: "/cosplay/sova" },
  { label: "Ezreal (LoL)", href: "/cosplay/ezreal" },
  { label: "Link (Zelda)", href: "/cosplay/link" },
  { label: "Sonic", href: "/cosplay/sonic" },
  { label: "Silk (Marvel)", href: "/cosplay/silk" },
  { label: "Akali (LoL)", href: "/cosplay/akali" },
  { label: "Otros", href: "/cosplay/otros" },
];

const ART = [
  { label: "Black Desert", href: "/art/black-desert" },
  { label: "Valorant", href: "/art/valorant" },
  { label: "League Of Legends", href: "/art/league-of-legends" },
  { label: "Sonic The Hedgehog", href: "/art/sonic-the-hedgehog" },
  { label: "Yzhel", href: "/art/yzhel" },
  { label: "Otros", href: "/art/otros" },
];

const VP = [
  { label: "Black Desert", href: "/virtual-photography/black-desert" },
  { label: "Where Winds Meet", href: "/virtual-photography/where-winds-meet" },
];

const HELP_CMDS = [
  "help / man", "ls", "clear", "viicky", "sudo", "hola",
  "black desert/ archer / eru / aguacate / avocado",
  "contact",
  "cosplay", "art", "virtual photography",
  "akame / inuyasha", "valencia / anubis",
  "sonic", "link / zelda", "sova / valorant",
  "cd / mkdir / touch / git",
];

const CMDS = [
  "virtual photography", "black desert", "git commit",
  "help", "man", "ls", "clear", "contact",
  "cosplay", "art",
  "viicky", "sudo", "hola",
  "archer", "eru", "aguacate", "avocado",
  "akame", "inuyasha",
  "valencia", "anubis",
  "sonic", "link", "zelda",
  "thehuntersova", "valorant", "sova",
  "cd", "mkdir", "touch", "git",
];

//   Types                       ──

type OutputLine =
  | { t: "text"; text: string; color?: "gold" | "purple" | "dim" | "err" | "ok" }
  | { t: "links"; items: { label: string; href: string }[] }
  | { t: "ascii"; text: string }
  | { t: "img"; src: string; alt: string };

interface HistoryEntry { cmd: string; out: OutputLine[] }

//   Component                      ─

export default function InteractiveTerminal() {
  const [ready, setReady] = useState(false);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [idleVisible, setIdleVisible] = useState(false);

  // Sova ult overlay: 0 = oculto, 1 = "I", 2 = "AM", 3 = "THE HUNTER"
  const [hunterPhase, setHunterPhase] = useState(0);
  const hunterTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Boot sequence (typewriter): committed lines + the command currently being typed
  const [bootLines, setBootLines] = useState<BootLine[]>([]);
  const [typing, setTyping] = useState<string | null>(null);

  // Refs for values accessed inside the keydown handler (no stale closures)
  const inputRef   = useRef("");
  const histIdxRef = useRef(-1);
  const cmdHistRef = useRef<string[]>([]);
  const focusedRef = useRef(false);
  const readyRef   = useRef(false);
  const termRef    = useRef<HTMLDivElement>(null);
  const bodyRef    = useRef<HTMLDivElement>(null);

  // State mirrors for rendering only
  const [input, _setInput]   = useState("");
  const [focused, _setFocused] = useState(false);

  const setInput = useCallback((v: string) => {
    inputRef.current = v;
    _setInput(v);
  }, []);

  const setFocused = useCallback((v: boolean) => {
    focusedRef.current = v;
    _setFocused(v);
    if (v) document.body.dataset.terminalFocused = "1";
    else   delete document.body.dataset.terminalFocused;
  }, []);

  // Boot: type each command char-by-char, then reveal its output 1s later
  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) =>
      new Promise<void>(res => { timers.push(setTimeout(res, ms)); });

    (async () => {
      for (const step of BOOT_SEQUENCE) {
        // teclear el comando carácter a carácter
        for (let i = 1; i <= step.cmd.length; i++) {
          if (cancelled) return;
          setTyping(step.cmd.slice(0, i));
          await wait(TYPE_SPEED);
        }
        if (cancelled) return;
        // fijar el comando ya tecleado y limpiar la línea de typing
        setBootLines(prev => [...prev, { kind: "cmd", text: step.cmd }]);
        setTyping(null);
        // esperar 1s y mostrar la salida
        await wait(OUT_DELAY);
        if (cancelled) return;
        setBootLines(prev => [...prev, ...step.out]);
        await wait(NEXT_PAUSE);
      }
      if (cancelled) return;
      readyRef.current = true;
      setReady(true);
    })();

    return () => { cancelled = true; timers.forEach(clearTimeout); };
  }, []);

  // Idle hint from EasterEggs
  useEffect(() => {
    const show = () => { if (readyRef.current) setIdleVisible(true); };
    const hide = () => setIdleVisible(false);
    window.addEventListener("ee:idle", show);
    const actEvents = ["mousemove", "keydown", "click", "touchstart"] as const;
    actEvents.forEach(e => window.addEventListener(e, hide));
    return () => {
      window.removeEventListener("ee:idle", show);
      actEvents.forEach(e => window.removeEventListener(e, hide));
    };
  }, []);

  // Scroll terminal body to bottom (not the whole page)
  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [history, input, bootLines, typing]);

  // Click outside ↠ deactivate
  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (!termRef.current?.contains(e.target as Node)) setFocused(false);
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [setFocused]);

  //   Confetti (delegado a EasterEggs via custom event)        ─

  const spawnConfetti = useCallback((emoji: string) => {
    window.dispatchEvent(new CustomEvent("ee:confetti", { detail: { emoji } }));
  }, []);

  //   Glitch   

  const triggerGlitch = useCallback(() => {
    const frames = [
      "hue-rotate(90deg) saturate(2.5)", "none",
      "hue-rotate(-90deg) contrast(2)",  "none",
      "hue-rotate(270deg) saturate(3)",  "none", "none",
    ];
    let i = 0;
    const totalSteps = frames.length * 6; // 6vueltas
    const id = setInterval(() => {
      document.body.style.filter = frames[i % frames.length] ?? "none";
      i++;
      if (i >= totalSteps) { clearInterval(id); document.body.style.filter = ""; }
    }, 110);
  }, []);

  //   Sova

  const triggerHunter = useCallback(() => {
    hunterTimers.current.forEach(clearTimeout);
    hunterTimers.current = [];
    const t = (ms: number, fn: () => void) => hunterTimers.current.push(setTimeout(fn, ms));

    setHunterPhase(1);            // "I"
    t(1000, () => setHunterPhase(2));   // "AM"
    t(2000, () => setHunterPhase(3));   // "THE HUNTER"
    t(5000, () => setHunterPhase(0));   // desaparece 3s tras completarse
  }, []);

  useEffect(() => () => hunterTimers.current.forEach(clearTimeout), []);

  //   Command processor                   ─

  const processCommand = useCallback((raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const out: OutputLine[] = [];

    if (cmd) {
      const match = CMDS.find(c => cmd === c);
      if (!match) {
        out.push({ t: "text", text: `command not found: ${cmd}  try another one`, color: "err" });
      } else {
        switch (match) {
          case "help": case "man": case "ayuda":
            out.push({ t: "text", text: "available commands:", color: "dim" });
            HELP_CMDS.forEach(l => out.push({ t: "text", text: `  ↠ ${l}`, color: "dim" }));
            break;
          case "ls":
            ["/cosplay", "/art", "/virtual-photography", "/web"].forEach(s =>
              out.push({ t: "text", text: s, color: "gold" })
            );
            break;
          case "clear":
            setHistory([]);
            setInput("");
            histIdxRef.current = -1;
            return;
          case "contact":
            out.push({ t: "text", text: "redirigiendo a contacto... 📨", color: "ok" });
            setTimeout(() => window.open("https://viickyscarlet-contact.viickyscarlet.workers.dev/", "_blank"), 500);
            break;
          case "cosplay":
            out.push({ t: "text", text: "cosplay/", color: "gold" });
            out.push({ t: "links", items: COSPLAY });
            break;
          case "art":
            out.push({ t: "text", text: "art/", color: "gold" });
            out.push({ t: "links", items: ART });
            break;
          case "virtual photography":
            out.push({ t: "text", text: "virtual-photography/", color: "gold" });
            out.push({ t: "links", items: VP });
            break;
          case "viicky":
            triggerGlitch();
            out.push({ t: "text", text: "viicky.exe has stopped working (╯°□°)╯ ┻━┻", color: "purple" });
            break;
          case "sudo":
            out.push({ t: "text", text: "Permission denied. (soy yo quien manda aquí mueheh)", color: "err" });
            break;
          case "hola":
            out.push({ t: "text", text: "heeeey! ✨", color: "ok" });
            break;
          case "black desert": case "archer": case "eru": case "aguacate": case "avocado":
            spawnConfetti("🥑");
            out.push({ t: "text", text: "🥑🥑🥑", color: "ok" });
            break;
          case "akame": case "inuyasha":
            out.push({ t: "text", text: "abriendo... 🎵", color: "ok" });
            setTimeout(() => window.open("https://www.youtube.com/watch?v=lSCHU3kwrm8", "_blank"), 500);
            break;
          case "anubis": case "valencia":
            out.push({ t: "ascii", text: ANUBIS });
            break;
          case "sonic":
            out.push({ t: "text", text: "gotta go fast! 🌀", color: "ok" });
            out.push({ t: "img", src: "/icons/sonic.gif", alt: "sonic" });
            break;
          case "link": case "zelda":
            out.push({ t: "text", text: "It's dangerous to go alone! Take this. 🗡️", color: "gold" });
            break;
          case "sova": case "valorant": case "thehuntersova":
            triggerHunter();
            out.push({ t: "text", text: "I... AM... THE HUNTER 🏹", color: "ok" });
            break;
          case "cd": case "mkdir": case "touch": case "git": case "git commit":
            out.push({ t: "text", text: "¡A dónde te crees que vas, listillo! 😤", color: "err" });
            break;
        }
      }
    }

    if (raw.trim()) cmdHistRef.current = [raw, ...cmdHistRef.current].slice(0, 50);
    histIdxRef.current = -1;
    setHistory(prev => [...prev, { cmd: raw, out }]);
    setInput("");
  }, [spawnConfetti, triggerGlitch, triggerHunter, setInput]);

  //   Keyboard handler     

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!focusedRef.current || !readyRef.current) return;
      if (e.ctrlKey || e.metaKey) return;
      e.preventDefault();

      if (e.key === "Enter") {
        processCommand(inputRef.current);
        return;
      }
      if (e.key === "Backspace") {
        const next = inputRef.current.slice(0, -1);
        inputRef.current = next; _setInput(next);
        return;
      }
      if (e.key === "ArrowUp") {
        const hist = cmdHistRef.current;
        const next = Math.min(histIdxRef.current + 1, hist.length - 1);
        histIdxRef.current = next;
        const val = hist[next] ?? "";
        inputRef.current = val; _setInput(val);
        return;
      }
      if (e.key === "ArrowDown") {
        const next = Math.max(histIdxRef.current - 1, -1);
        histIdxRef.current = next;
        const val = next === -1 ? "" : (cmdHistRef.current[next] ?? "");
        inputRef.current = val; _setInput(val);
        return;
      }
      if (e.key === "Escape") { setFocused(false); return; }
      if (e.key.length === 1) {
        const next = inputRef.current + e.key;
        inputRef.current = next; _setInput(next);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [processCommand, setFocused]);

  //   Color helper                     

  const tc = (c?: Extract<OutputLine, { t: "text" }>["color"]) => {
    if (c === "gold")   return "text-[#E6BE8A]";
    if (c === "purple") return "text-[#9D50BB]";
    if (c === "ok")     return "text-[#9D50BB]";
    if (c === "err")    return "text-red-400/80";
    return "text-white/50";
  };

  //   Render                       

  return (
    <div
      ref={termRef}
      className="relative max-w-2xl mb-12 overflow-hidden cursor-text transition-colors duration-300"
      style={{ border: `1px solid ${focused ? "rgba(157,80,187,0.5)" : "rgba(255,255,255,0.1)"}` }}
      onClick={() => setFocused(true)}
    >
      {/* Chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 bg-white/2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
        </div>
        <span className="flex-1 text-center text-white/40 text-xs font-mono tracking-widest">
          bash — viicky@scarlet
        </span>
        <span className="text-[10px] font-mono text-white/20 min-w-22.5 text-right">
          {ready ? (focused ? "" : "") : ""}
        </span>
      </div>

      {/* Body */}
      <div ref={bodyRef} className="p-5 font-mono text-base space-y-0.5 bg-black/20 max-h-96 overflow-y-auto terminal-scroll">

        {/* Boot sequence */}
        {bootLines.map((line, i) => (
          <motion.div
            key={i}
            initial={line.kind === "cmd" ? false : { opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={
              line.kind === "cmd" ? "text-white/80" :
              line.kind === "ok"  ? "text-[#9D50BB]" :
              "text-white/50"
            }
          >
            {line.kind === "cmd"
              ? <span className="text-[#E6BE8A] mr-2 select-none">$</span>
              : <span className="text-white/30 mr-2 select-none">↠</span>
            }
            {line.text}
          </motion.div>
        ))}

        {/* Command currently being typed */}
        {typing !== null && (
          <div className="flex items-center text-white/80">
            <span className="text-[#E6BE8A] mr-2 select-none">$</span>
            <span>{typing}</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.9 }}
              className="inline-block w-2 h-[1.1em] bg-[#9D50BB] ml-px"
            />
          </div>
        )}

        {/* Command history */}
        {ready && history.map((entry, i) => (
          <div key={i} className="pt-1">
            <div className="flex">
              <span className="text-[#E6BE8A] mr-2 select-none">$</span>
              <span className="text-white/80">{entry.cmd || " "}</span>
            </div>
            {entry.out.map((line, j) => (
              <div key={j}>
                {line.t === "text" && (
                  <div className={`flex ${tc(line.color)}`}>
                    <span className="text-white/20 mr-2 select-none shrink-0">↠</span>
                    <span>{line.text}</span>
                  </div>
                )}
                {line.t === "links" && (
                  <div className="space-y-0.5 mt-0.5">
                    {line.items.map(item => (
                      <div key={item.href} className="flex items-center">
                        <span className="text-[#E6BE8A]/50 mr-2 select-none shrink-0">↠</span>
                        <Link
                          href={item.href}
                          className="text-white/55 hover:text-[#9D50BB] transition-colors duration-200"
                          onClick={() => setFocused(false)}
                        >
                          {item.label}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
                {line.t === "ascii" && (
                  <pre className="text-[#E6BE8A]/70 text-[7px] leading-[1.15] mt-1 overflow-x-auto">
                    {line.text}
                  </pre>
                )}
                {line.t === "img" && (
                  <div className="mt-1.5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={line.src}
                      alt={line.alt}
                      className="max-w-10 w-full h-auto select-none pointer-events-none"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}

        {/* Active input line */}
        {ready && (
          <div className="flex items-center pt-1 text-white/80">
            <span className="text-[#E6BE8A] mr-2 select-none">$</span>
            <span>{input}</span>
            <motion.span
              animate={{ opacity: focused ? [1, 0, 1] : [0.3] }}
              transition={focused ? { repeat: Infinity, duration: 0.9 } : { duration: 0 }}
              className="inline-block w-2 h-[1.1em] bg-[#9D50BB] ml-px"
            />
          </div>
        )}

        {/* Idle hint */}
        <AnimatePresence>
          {idleVisible && (
            <motion.div
              className="flex items-center pt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white/20 mr-2 select-none shrink-0">↠</span>
              <span className="text-white/40 font-mono text-sm">¿estás ahí? 👀</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.9 }}
                className="inline-block w-2 h-[1em] bg-[#9D50BB]/50 ml-1"
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Sova ult  */}
      <AnimatePresence>
        {hunterPhase > 0 && (
          <motion.div
            className="fixed inset-0 z-9998 flex items-center justify-center pointer-events-none select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <motion.span
              key={hunterPhase}
              className="relative font-mono font-black tracking-tight text-center px-6"
              style={{
                color: "#30c8fc",
                textShadow: "0 0 30px #30c8fc, 0 0 60px rgba(48,200,252,0.6)",
                fontSize: hunterPhase === 3 ? "clamp(3rem, 16vw, 14rem)" : "clamp(2.5rem, 11vw, 9rem)",
              }}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              {hunterPhase === 1 ? "I" : hunterPhase === 2 ? "AM" : "THE HUNTER"}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
