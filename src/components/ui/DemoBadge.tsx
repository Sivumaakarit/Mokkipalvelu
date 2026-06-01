"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

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
                className={`fixed top-[74px] md:top-[92px] left-3 md:left-6 z-50 bg-white/95 backdrop-blur-sm border border-dashed border-blue-600 shadow-md rounded-xl p-2 md:p-3 flex flex-col gap-1.5 items-center transition-all duration-500 cursor-default select-none pointer-events-auto origin-top-left hover:scale-105 animate-slow-blink ${isHidden ? 'opacity-0 -translate-x-full pointer-events-none' : ''}`}
            >
                <div className={`${playfair.className} text-[10px] md:text-[12px] italic text-white lowercase bg-[#0A1128] border border-blue-500/20 px-2.5 py-0.5 rounded-md tracking-tight w-fit flex items-center justify-center`}>
                    <span className="relative -top-[1px]">
                        sivumaakarit<span className="text-cyan-400">.</span>
                    </span>
                </div>
                <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-black text-blue-700 leading-none px-0.5">DEMOSIVU</span>
            </div>
        </>
    );
}
