import CategoryIndex from "../components/CategoryIndex";
import { buildMetadata } from "../lib/seo";

export const metadata = buildMetadata({
  title: "Virtual Photography",
  description: "Explora la fotografía virtual de Viicky Scarlet.",
  path: "/virtual-photography",
});

const items = [
  { label: "Black Desert", href: "/virtual-photography/black-desert", image: "/menu/photography/bdo.webp" },
  { label: "Where Winds Meet", href: "/virtual-photography/where-winds-meet", image: "/menu/photography/wwm.webp" },
];

export default function VirtualPhotographyPage() {
  return <CategoryIndex title="Virtual Photography" items={items} />;
}
