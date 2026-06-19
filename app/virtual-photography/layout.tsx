import type { Metadata } from "next";
import { buildMetadata } from "../lib/seo";
import SocialMediaBanner from "../components/SocialMediaBanner";

export const metadata: Metadata = buildMetadata({
  title: "Virtual Photography | Viicky Scarlet",
  description:
    "Fotografía virtual (virtual photography / screenshots) de Viicky Scarlet en videojuegos como Black Desert y Where Winds Meet.",
  path: "/virtual-photography",
  keywords: ["fotografía virtual", "virtual photography", "screenshots", "Black Desert", "Where Winds Meet"],
});

const xIcon = (
  <svg role="img" className="h-4 w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white">
    <title>X</title>
    <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"/>
  </svg>
);

export default function LayoutPhotography({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="grow">
        {children}
      </main>
      
      <SocialMediaBanner
        social="¡Puedes ver más fotos en mi Twitter!"
        name="@EUSonicOfHyrule"
        url="https://x.com/EUSonicOfHyrule"
        icon={xIcon}
      />
    </div>
  );
}