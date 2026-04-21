
import FadeInSection from "@/app/components/FadeInSection";
import { ArtGallery } from "@/app/components/ArtGallery";

export const artSonic = [
    {
        id: 1,
        src: "https://pbs.twimg.com/media/EElqqa5WkAAul1K?format=jpg&name=4096x4096",
        alt: "sonic megadrive",
    },
    {
        id: 2,
        src: "https://pbs.twimg.com/media/DmbS2BEW4AEfEIt?format=jpg&name=large",   
        alt: "sonic mania emerald",
    },
    {
        id: 3,
        src: "https://pbs.twimg.com/media/D4IIS0JWAAApq2R?format=jpg&name=4096x4096",   
        alt: "sonic mania poster",
    },
        {
        id: 4,
        src: "https://pbs.twimg.com/media/Eazpv7eWoAADwjs?format=jpg&name=4096x4096",   
        alt: "sonic mania cap",
    },
    {
        id: 5,
        src: "https://pbs.twimg.com/media/EdNr3p6XoAAhQWa?format=jpg&name=4096x4096",   
        alt: "sonic friends",
    },
    {
        id: 6,
        src: "https://pbs.twimg.com/media/FRWhb53XEAANFjN?format=jpg&name=4096x4096",   
        alt: "kunckles",
    },
    {
        id: 7,
        src: "https://pbs.twimg.com/media/DsXoiFoXgAE_jFV?format=jpg&name=large",   
        alt: "wereheog",
    },
    {
        id: 8,
        src: "https://pbs.twimg.com/media/DrzqT1EX4AEsuaD?format=jpg&name=large",   
        alt: "supersonic",
    }
]

export default function LeagueOfLegends() {
  return (
    <div className="min-h-screen">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-25">
        <div className="container mx-auto px-4">
          <FadeInSection>
          <h1 className="py-8 title text-center text-balance text-6xl leading-none tracking-tighter md:text-8xl">
            Sonic The Hedgehog
          </h1>
            <div className="mx-5 md:mx-16 pb-6 border-t border-white/10" />
         </FadeInSection>
          
          <ArtGallery imageSets={[artSonic]} /> 

        </div>
      </section>
    </div>
  );
}