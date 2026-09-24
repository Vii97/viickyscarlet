import Image from "next/image";
import Link from "next/link";

type CategoryItem = {
  label: string;
  href: string;
  image: string;
};

export default function CategoryIndex({
  title,
  items,
}: {
  title: string;
  items: CategoryItem[];
}) {
  return (
    <main className="min-h-screen px-6 pb-20 pt-28 lg:px-20">
      <h1 className="title mb-10 text-4xl uppercase">{title}</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="group">
            <div className="relative aspect-3/4 overflow-hidden border border-white/10 group-hover:border-purple-500/50">
              <Image
                src={item.image}
                alt=""
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <span className="mt-3 block text-center text-sm uppercase tracking-widest text-white/70 group-hover:text-purple-400">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
