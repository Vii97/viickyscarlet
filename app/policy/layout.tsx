import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Política de privacidad | Viicky Scarlet",
    description: "Política de privacidad del sitio de Viicky Scarlet.",
    path: "/policy",
  }),
  robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
