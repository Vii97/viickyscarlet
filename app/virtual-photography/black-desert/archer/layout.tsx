import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Archer | Black Desert | Virtual Photography | Viicky Scarlet",
  description:
    "Fotografía virtual (screenshots) de la clase Archer de Black Desert por Viicky Scarlet (EruScarlet / SonicOfHyrule).",
  path: "/virtual-photography/black-desert/archer",
  keywords: ["Archer", "Black Desert", "BDO", "fotografía virtual", "screenshots", "Viicky Scarlet"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
