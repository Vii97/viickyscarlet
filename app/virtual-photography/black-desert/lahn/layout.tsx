import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Lahn | Black Desert | Virtual Photography | Viicky Scarlet",
  description:
    "Fotografía virtual (screenshots) de la clase Lahn de Black Desert por Viicky Scarlet (EruScarlet / SonicOfHyrule).",
  path: "/virtual-photography/black-desert/lahn",
  keywords: ["Lahn", "Black Desert", "BDO", "fotografía virtual", "screenshots", "Viicky Scarlet"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
