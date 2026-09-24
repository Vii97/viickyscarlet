import CategoryIndex from "../components/CategoryIndex";
import { buildMetadata } from "../lib/seo";

export const metadata = buildMetadata({
  title: "Cosplay",
  description: "Explora los cosplays de Viicky Scarlet.",
  path: "/cosplay",
});

const items = [
  { label: "Eru", href: "/cosplay/eru", image: "/menu/cosplay/archer.webp" },
  { label: "Sova", href: "/cosplay/sova", image: "/menu/cosplay/sova.webp" },
  { label: "Ezreal", href: "/cosplay/ezreal", image: "/menu/cosplay/ezreal.webp" },
  { label: "Link", href: "/cosplay/link", image: "/menu/cosplay/link.webp" },
  { label: "Sonic", href: "/cosplay/sonic", image: "/menu/cosplay/sonic.webp" },
  { label: "Silk", href: "/cosplay/silk", image: "/menu/cosplay/silk.webp" },
  { label: "Akali", href: "/cosplay/akali", image: "/menu/cosplay/akali.webp" },
  { label: "Otros", href: "/cosplay/otros", image: "/menu/cosplay/juvia.webp" },
];

export default function CosplayPage() {
  return <CategoryIndex title="Cosplay" items={items} />;
}
