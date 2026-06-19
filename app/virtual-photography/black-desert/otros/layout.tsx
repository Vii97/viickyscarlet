import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Otros | Black Desert | Virtual Photography | Viicky Scarlet",
  description:
    "Fotografía virtual (screenshots) de otras clases y personajes de Black Desert por Viicky Scarlet (EruScarlet / SonicOfHyrule).",
  path: "/virtual-photography/black-desert/otros",
  keywords: ["Black Desert", "BDO", "fotografía virtual", "screenshots", "Viicky Scarlet"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
