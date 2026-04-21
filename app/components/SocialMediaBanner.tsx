interface SocialMediaProps {
    social: string;
    name: string;
    url: string;
    icon: React.ReactNode;
}

export default function SocialMediaBanner ({ social, name, url, icon }: SocialMediaProps) {
    return ( 
        <section className="pt-10">
            <div className="py-6 border-t border-white/10" />
            <p className="text-white text-center">{social}</p>
            <div className="text-center p-5">
                <a 
                    href={url}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white border border-white/30 bg-black hover:bg-[#9D50BB]/70 px-4 py-2 transition-colors duration-300 inline-flex items-center justify-center gap-2"
                >
                    {icon}
                    <span>{name}</span>
                </a>
            </div>
        </section>
    );
}