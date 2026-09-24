import CategoryIndex from "../components/CategoryIndex";
import { buildMetadata } from "../lib/seo";

export const metadata = buildMetadata({
  title: "Art",
  description: "Explora las ilustraciones de Viicky Scarlet.",
  path: "/art",
});

const items = [
  { label: "Black Desert", href: "/art/black-desert", image: "/menu/art/black-desert.webp" },
  { label: "Valorant", href: "/art/valorant", image: "/menu/art/sova.webp" },
  { label: "League of Legends", href: "/art/league-of-legends", image: "/menu/art/lol.webp" },
  { label: "Sonic the Hedgehog", href: "/art/sonic-the-hedgehog", image: "/menu/art/sonic.webp" },
  { label: "Yzhel", href: "/art/yzhel", image: "/menu/art/yzhel.webp" },
  { label: "Otros", href: "/art/otros", image: "/menu/art/zelda.webp" },
];

export default function ArtPage() {
  return <CategoryIndex title="Art" items={items} />;
}
