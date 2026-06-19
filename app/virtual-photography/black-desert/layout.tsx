import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Virtual Photography | Black Desert | Viicky Scarlet",
  description:
    "Fotografía virtual (screenshots) en Black Desert por Viicky Scarlet (EruScarlet / SonicOfHyrule): capturas de clases, personajes y regiones en el juego.",
  path: "/virtual-photography/black-desert",
  keywords: ["Black Desert", "BDO", "fotografía virtual", "virtual photography", "screenshots", "Viicky Scarlet"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
