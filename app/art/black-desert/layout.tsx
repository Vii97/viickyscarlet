import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Black Desert | Art | Viicky Scarlet",
  description:
    "Galería de dibujo digital y fan art de Black Desert por Viicky Scarlet. Clases y OCs.",
  path: "/art/black-desert",
  keywords: ["fan art Black Desert", "BDO", "OC", "dibujo digital", "Viicky Scarlet"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
