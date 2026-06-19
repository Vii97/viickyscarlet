import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Yzhel (OC) | Viicky Scarlet",
  description:
    "Dibujos de Yzhel, personaje original (OC) de Viicky Scarlet",
  path: "/art/yzhel",
  keywords: ["Yzhel", "OC", "personaje original", "dibujo digital", "Viicky Scarlet"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
