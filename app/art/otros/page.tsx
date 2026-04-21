import { ArtGallery } from "@/app/components/ArtGallery";
import FadeInSection from "@/app/components/FadeInSection";

export const artOtros = [
    {
        id: 1,
        src: "https://pbs.twimg.com/media/Gcv6TR-XgAEcjwH?format=jpg&name=4096x4096",
        alt: "ororon",
    },
    {
        id: 2,
        src: "https://pbs.twimg.com/media/FzTkT8pWIAMG-9X?format=jpg&name=large",   
        alt: "kaminari",
    },
    {
        id: 3,
        src: "https://pbs.twimg.com/media/Fv2cK8pWcAEr1qT?format=jpg&name=large",   
        alt: "zelda",
    },
        {
        id: 4,
        src: "https://pbs.twimg.com/media/EYsqZfiWkAAZpcf?format=jpg&name=4096x4096",   
        alt: "zelink",
    },
    {
        id: 5,
        src: "https://pbs.twimg.com/media/HC1sXWfXgAAD5DL?format=jpg&name=4096x4096",   
        alt: "wwm moon",
    },
]

export default function OtrosArts() {
  return (
    <div className="min-h-screen">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-25">
        <div className="container mx-auto px-4">
          <FadeInSection>
          <h1 className="py-8 title text-center text-balance text-6xl leading-none tracking-tighter md:text-8xl">
            Otros
          </h1>
           <div className="mx-5 md:mx-16 pb-6 border-t border-white/10" />
         </FadeInSection>

          <ArtGallery imageSets={[artOtros]} />

        </div>
      </section>
    </div>
  );
}