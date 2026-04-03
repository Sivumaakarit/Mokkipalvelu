"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function DemoBadge() {
    const pathname = usePathname();
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const salesSection = document.getElementById("sales-section");
            if (salesSection) {
                const rect = salesSection.getBoundingClientRect();
                // Hide if sales section is entering the viewport
                if (rect.top <= window.innerHeight * 0.5) {
                    setIsHidden(true);
                } else {
                    setIsHidden(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Show only on the mokkipalvelu demo page
    if (!pathname?.startsWith("/mokkipalvelu")) return null;

    return (
        <>
            <style jsx>{`
                @keyframes slowBlink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                .animate-slow-blink {
                    animation: slowBlink 4s ease-in-out infinite;
                }
            `}</style>
            <div
                className={`fixed top-[85px] md:top-24 left-2 md:left-4 z-50 bg-white/95 backdrop-blur-sm border-2 border-dashed border-cyan-500 shadow-xl rounded-xl p-2 md:p-4 flex flex-col gap-2 transition-all duration-500 cursor-default select-none pointer-events-auto origin-top-left max-w-[120px] md:max-w-[200px] hover:scale-105 animate-slow-blink ${isHidden ? 'opacity-0 -translate-x-full pointer-events-none' : ''}`}
            >
                <div className="flex items-center gap-2 md:gap-3">
                    <div className="relative w-5 h-5 md:w-8 md:h-8 flex-shrink-0">
                        <Image
                            src="/images/sivumaakarit.webp"
                            alt="Sivumaakarit"
                            fill
                            className="object-contain drop-shadow-md"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[9px] md:text-sm uppercase tracking-wider font-black text-cyan-600 leading-none">DEMOSIVU</span>
                        <span className="text-[6px] md:text-[10px] font-bold text-slate-500 leading-tight">Esittely</span>
                    </div>
                </div>
            </div>
        </>
    );
}
