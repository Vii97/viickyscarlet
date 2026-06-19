import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Otros | Cosplay | Viicky Scarlet",
  description:
    "Más cosplays de Viicky Scarlet. Where Winds Meet, Vi, Yandere-chan, Erza, Juvia...",
  path: "/cosplay/otros",
  keywords: ["cosplay", "Pokémon", "Vampire Knight", "League of Legends", "Viicky Scarlet"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
