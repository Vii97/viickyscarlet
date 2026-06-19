import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Hashashin | Black Desert | Virtual Photography | Viicky Scarlet",
  description:
    "Fotografía virtual (screenshots) de la clase Hashashin de Black Desert por Viicky Scarlet (EruScarlet / SonicOfHyrule).",
  path: "/virtual-photography/black-desert/hashashin",
  keywords: ["Hashashin", "Black Desert", "BDO", "fotografía virtual", "screenshots", "Viicky Scarlet"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
