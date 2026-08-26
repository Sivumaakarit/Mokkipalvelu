"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { manrope, urbanist } from "@/lib/fonts";

export function Hero() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center bg-stone-900 text-white overflow-hidden" id="hero">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div 
                    className="w-full h-full relative"
                    style={{
                        transform: `translateY(${scrollY * 0.25}px)`,
                        willChange: "transform"
                    }}
                >
                    <Image
                        src="/images/mokkimaisema.webp"
                        alt="Moderni suomalainen mökki järven rannalla sumuisena aamuna"
                        fill
                        className="object-cover opacity-60 scale-110 origin-top"
                        priority
                        fetchPriority="high"
                        loading="eager"
                        sizes="100vw"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/20 to-stone-900/80 z-10" />
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center pt-20 md:pt-24">
                <h1 className={`${urbanist.className} text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight drop-shadow-2xl leading-tight mt-16 md:mt-0 px-2 animate-fade-in-up animation-delay-200`}>
                    Mielenrauhaa <br className="hidden md:block" /> mökkilomalle
                </h1>
                <p className={`${manrope.className} text-lg md:text-2xl text-stone-100 mb-12 max-w-2xl mx-auto drop-shadow-md font-light tracking-wide opacity-95 px-4 animate-fade-in-up animation-delay-400`}>
                    Ammattitaitoinen mökkitalkkari huolehtii kiinteistöstäsi, kun olet poissa. <br className="hidden md:block" />
                    Nauti vapaa-ajasta – me hoidamme loput.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-sm md:max-w-none mx-auto animate-fade-in-up animation-delay-600">
                    <Link
                        href="#contact"
                        className="w-full md:w-auto flex items-center justify-center px-6 md:px-8 py-4 text-base md:text-lg font-bold text-stone-900 bg-white rounded-full hover:bg-stone-100 transition-all hover:scale-105 shadow-xl"
                    >
                        Pyydä ilmainen arviokäynti
                    </Link>
                    <Link
                        href="#pricing"
                        className="w-full md:w-auto flex items-center justify-center px-6 md:px-8 py-4 text-base md:text-lg font-medium text-white border-2 border-white/30 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all hover:scale-105 shadow-lg"
                    >
                        Katso palveluhinnasto
                    </Link>
                </div>
            </div>

        </section>
    );
}
