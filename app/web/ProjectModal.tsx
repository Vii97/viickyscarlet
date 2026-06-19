"use client";

import { useState, useEffect } from "react";
import { motion} from "framer-motion";



export interface Project {
  id: number;
  title: string;
  subtitle: string;
  url: string | null;
  stack: string[];
  type: string;
  description: string;
}

type WinStyle = "win98" | "winxp" | "vista" | "win10";
const WIN_STYLES: WinStyle[] = ["win98", "winxp", "vista", "win10"];


export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [winStyle] = useState<WinStyle>(
    () => WIN_STYLES[Math.floor(Math.random() * WIN_STYLES.length)]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!project) return null;

  const projectUrl = project.url;
  const onMaximize = projectUrl
    ? () => window.open(projectUrl, "_blank", "noopener,noreferrer")
    : undefined;

  return (
    <motion.div
      className="fixed inset-0 z-[9996] flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      <motion.div
        className="relative z-10 w-full max-w-5xl"
        initial={{ scale: 0.9, y: 24 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 24, opacity: 0 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        onClick={e => e.stopPropagation()}
      >
        <WindowChrome style={winStyle} title={project.title} onClose={onClose} onMaximize={onMaximize}>
          {/* Content */}
          <div className="bg-[#0D0D0D]">
            {project.url ? (
              <div className="w-full overflow-hidden" style={{ height: 540 }}>
                <iframe
                  src={project.url}
                  scrolling="no"
                  style={{ width: "100%", height: "100%", border: "none", pointerEvents: "none" }}
                  loading="lazy"
                  title={project.title}
                />
              </div>
            ) : (
              <div className="flex items-center justify-center font-mono text-white/20 text-sm" style={{ height: 180 }}>
                {"<WordPress />"} {"<WooCommerce />"}
              </div>
            )}

            {/* Info strip */}
            <div className="px-6 py-5 border-t border-white/8">
              <p className="text-white/50 text-[11px] font-mono uppercase tracking-widest mb-1">{project.type}</p>
              <p className="text-white font-light mb-3">{project.subtitle}</p>
              <p className="text-white/80 text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map(t => (
                  <span key={t} className="text-[12px] font-mono text-[#9D50BB] border border-[#9D50BB]/30 px-2 py-0.5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </WindowChrome>
      </motion.div>
    </motion.div>
  );
}

//  Chrome switcher 

function WindowChrome({
  style,
  title,
  onClose,
  onMaximize,
  children,
}: {
  style: WinStyle;
  title: string;
  onClose: () => void;
  onMaximize?: () => void;
  children: React.ReactNode;
}) {
  if (style === "win98")  return <Win98  title={title} onClose={onClose} onMaximize={onMaximize}>{children}</Win98>;
  if (style === "winxp")  return <WinXP  title={title} onClose={onClose} onMaximize={onMaximize}>{children}</WinXP>;
  if (style === "vista")  return <Vista  title={title} onClose={onClose} onMaximize={onMaximize}>{children}</Vista>;
  return                         <Win10  title={title} onClose={onClose} onMaximize={onMaximize}>{children}</Win10>;
}

// ─── Windows 98 ───────────────────────────────────────────────────────────────

function Win98({ title, onClose, onMaximize, children }: { title: string; onClose: () => void; onMaximize?: () => void; children: React.ReactNode }) {
  return (
    <div style={{
      background: "#c0c0c0",
      border: "2px solid",
      borderColor: "#ffffff #808080 #808080 #ffffff",
      boxShadow: "inset 1px 1px 0 #dfdfdf, 4px 4px 0 #000000",
    }}>
      {/* Title bar */}
      <div style={{
        background: "linear-gradient(to right, #000080, #1084d0)",
        padding: "3px 4px",
        display: "flex",
        alignItems: "center",
        gap: "3px",
        userSelect: "none",
      }}>
        <span style={{ fontSize: "12px", marginRight: 4 }}>🖥</span>
        <span style={{ color: "white", fontSize: "11px", fontWeight: "bold", flex: 1, fontFamily: "Tahoma, Arial, sans-serif", letterSpacing: 0 }}>
          {title}
        </span>
        <Btn98 label="─" />
        <Btn98 label="□" onClick={onMaximize} />
        <Btn98 label="✕" onClick={onClose} />
      </div>
      {/* Body */}
      <div style={{ padding: "3px", background: "#c0c0c0" }}>
        <div style={{ border: "2px solid", borderColor: "#808080 #ffffff #ffffff #808080" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function Btn98({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: 18, height: 16,
        background: "#c0c0c0",
        border: "2px solid",
        borderColor: "#ffffff #808080 #808080 #ffffff",
        fontSize: 9,
        fontFamily: "Tahoma, Arial, sans-serif",
        fontWeight: "bold",
        cursor: "default",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 0, color: "#000", lineHeight: 1, flexShrink: 0,
      }}
    >
      {label}
    </button>
  );
}

//  Windows XP 

function WinXP({ title, onClose, onMaximize, children }: { title: string; onClose: () => void; onMaximize?: () => void; children: React.ReactNode }) {
  return (
    <div style={{
      borderRadius: "8px 8px 0 0",
      overflow: "hidden",
      border: "1px solid #1e50b0",
      boxShadow: "0 6px 24px rgba(0,0,0,0.6)",
    }}>
      <div style={{
        background: "linear-gradient(180deg, #5ba3f5 0%, #2360d0 40%, #1b50be 50%, #2360d0 100%)",
        padding: "4px 6px 4px 8px",
        display: "flex", alignItems: "center", gap: 4,
        borderBottom: "1px solid #1e50b0",
        userSelect: "none",
      }}>
        <span style={{ fontSize: 13, marginRight: 4 }}>🖥</span>
        <span style={{
          color: "white", fontSize: 12, fontWeight: "bold", flex: 1,
          fontFamily: "Tahoma, Arial, sans-serif",
          textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
        }}>
          {title}
        </span>
        <BtnXP label="─" />
        <BtnXP label="□" onClick={onMaximize} />
        <BtnXP label="✕" onClick={onClose} close />
      </div>
      <div style={{ borderLeft: "1px solid #2360d0", borderRight: "1px solid #2360d0" }}>
        {children}
      </div>
      <div style={{ height: 4, background: "linear-gradient(180deg, #2360d0, #1b50be)", borderTop: "1px solid #1e50b0" }} />
    </div>
  );
}

function BtnXP({ label, onClick, close }: { label: string; onClick?: () => void; close?: boolean }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: 22, height: 18,
        background: close
          ? "linear-gradient(180deg, #f87070 0%, #d03030 50%, #b82020 51%, #e04545 100%)"
          : "linear-gradient(180deg, #6eb5ff 0%, #3a6fd8 50%, #2e62cc 51%, #4d85e8 100%)",
        border: "1px solid",
        borderColor: close ? "#8a1010" : "#1a3d9e",
        borderRadius: 4,
        fontSize: 10, color: "white",
        fontWeight: "bold", cursor: "default",
        textShadow: "1px 1px 0 rgba(0,0,0,0.4)",
        padding: 0, display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {label}
    </button>
  );
}

// Windows Vista / 7 (Aero) 

function Vista({ title, onClose, onMaximize, children }: { title: string; onClose: () => void; onMaximize?: () => void; children: React.ReactNode }) {
  return (
    <div style={{
      borderRadius: "8px 8px 0 0",
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.14)",
      boxShadow: "0 8px 40px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)",
    }}>
      <div style={{
        background: "rgba(20, 20, 32, 0.88)",
        backdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        padding: "8px 6px 8px 12px",
        display: "flex", alignItems: "center", gap: 6,
        userSelect: "none",
      }}>
        <span style={{ fontSize: 13, marginRight: 4 }}>🖥</span>
        <span style={{
          color: "rgba(255,255,255,0.9)", fontSize: 13, flex: 1,
          fontFamily: "Segoe UI, Arial, sans-serif",
          textShadow: "0 1px 3px rgba(0,0,0,0.6)",
        }}>
          {title}
        </span>
        <BtnVista label="─" />
        <BtnVista label="□" onClick={onMaximize} />
        <BtnVista label="✕" onClick={onClose} close />
      </div>
      {children}
    </div>
  );
}

function BtnVista({ label, onClick, close }: { label: string; onClick?: () => void; close?: boolean }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: 26, height: 20,
        background: close
          ? "rgba(180, 30, 30, 0.7)"
          : "rgba(255,255,255,0.08)",
        border: "1px solid",
        borderColor: close ? "rgba(255,80,80,0.5)" : "rgba(255,255,255,0.15)",
        borderRadius: 4,
        fontSize: 11, color: "rgba(255,255,255,0.85)",
        cursor: "default",
        padding: 0, display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {label}
    </button>
  );
}

// Windows 10 

function Win10({ title, onClose, onMaximize, children }: { title: string; onClose: () => void; onMaximize?: () => void; children: React.ReactNode }) {
  return (
    <div style={{
      border: "1px solid rgba(255,255,255,0.12)",
      overflow: "hidden",
      boxShadow: "0 16px 48px rgba(0,0,0,0.7)",
    }}>
      <div style={{
        background: "#1f1f1f",
        height: 32,
        display: "flex", alignItems: "center",
        paddingLeft: 12,
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        userSelect: "none",
      }}>
        <span style={{ fontSize: 12, marginRight: 8 }}>🖥</span>
        <span style={{
          color: "rgba(255,255,255,0.75)", fontSize: 12, flex: 1,
          fontFamily: "Segoe UI, Arial, sans-serif",
        }}>
          {title}
        </span>
        <Btn10 label="─" />
        <Btn10 label="□" onClick={onMaximize} />
        <Btn10 label="✕" onClick={onClose} close />
      </div>
      {children}
    </div>
  );
}

function Btn10({ label, onClick, close }: { label: string; onClick?: () => void; close?: boolean }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: 46, height: 32,
        background: "transparent",
        border: "none",
        fontSize: 12, color: "rgba(255,255,255,0.7)",
        cursor: "default",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "background 0.1s",
        flexShrink: 0,
      }}
      onMouseEnter={e => {
        (e.target as HTMLElement).style.background = close ? "#c42b1c" : "rgba(255,255,255,0.08)";
        (e.target as HTMLElement).style.color = "rgba(255,255,255,1)";
      }}
      onMouseLeave={e => {
        (e.target as HTMLElement).style.background = "transparent";
        (e.target as HTMLElement).style.color = "rgba(255,255,255,0.7)";
      }}
    >
      {label}
    </button>
  );
}
