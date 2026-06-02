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
            const contactSection = document.getElementById("demo-contact");
            if (contactSection) {
                const rect = contactSection.getBoundingClientRect();
                // Hide if the fake contact form section starts entering the viewport
                if (rect.top <= window.innerHeight * 0.8) {
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
                    animation: slowBlink 8s ease-in-out infinite;
                }
                .demo-badge-card {
                    transform: rotate(-2.5deg);
                    opacity: 1;
                    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease-in-out;
                }
                .demo-badge-card.is-hidden {
                    transform: rotate(-12deg) translateX(-280%) !important;
                    opacity: 0 !important;
                    pointer-events: none !important;
                    animation: none !important;
                }
                .demo-badge-card:hover:not(.is-hidden) {
                    transform: rotate(0deg) scale(1.05) !important;
                }
            `}</style>
            <div
                className={`fixed top-[74px] md:top-[76px] left-[14px] md:left-[26px] z-50 bg-white/95 backdrop-blur-sm border border-dashed border-[#0A1128]/35 shadow-md rounded-lg p-2.5 md:p-3 flex flex-col gap-1.5 items-center cursor-default select-none pointer-events-auto origin-top-left demo-badge-card ${isHidden ? 'is-hidden' : 'animate-slow-blink'}`}
            >
                <div className={`${playfair.className} text-[11px] md:text-[12px] italic text-white lowercase bg-[#0A1128] border border-blue-500/20 px-2.5 py-1 rounded tracking-tight w-fit flex items-center justify-center`}>
                    <span className="relative -top-[1px]">
                        sivumaakarit<span className="text-cyan-400">.</span>
                    </span>
                </div>
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-black text-[#0A1128] leading-none px-0.5">DEMOSIVU</span>
            </div>
        </>
    );
}
