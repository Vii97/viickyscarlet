import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Where Winds Meet | Virtual Photography | Viicky Scarlet",
  description:
    "Fotografía virtual (screenshots) en Where Winds Meet por Viicky Scarlet: capturas y paisajes del juego.",
  path: "/virtual-photography/where-winds-meet",
  keywords: ["Where Winds Meet", "fotografía virtual", "virtual photography", "screenshots", "Viicky Scarlet"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
