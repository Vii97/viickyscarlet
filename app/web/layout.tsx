import type { Metadata } from "next";
import { buildMetadata } from "../lib/seo";
import EasterEggs from "../components/EasterEggs";
import CursorTrail from "./CursorTrail";

export const metadata: Metadata = buildMetadata({
  title: "Web | Viicky Scarlet",
  description:
    "Desarrollo de aplicaciones web con Viicky Scarlet. Proyectos en Next.js, React, Astro, Node.js, TypeScript, WordPress y más.",
  path: "/web",
  keywords: ["desarrolladora web", "Next.js", "React", "TypeScript", "Node.js", "portfolio web"],
});

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <EasterEggs />
      <CursorTrail />
    </>
  );
}
