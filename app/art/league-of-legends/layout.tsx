import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "League Of Legends | Art | Viicky Scarlet",
  description:
    "Galería de dibujo digital y fan art de League of Legends por Viicky Scarlet.",
  path: "/art/league-of-legends",
  keywords: ["fan art League of Legends", "LoL", "dibujo digital", "Viicky Scarlet"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
