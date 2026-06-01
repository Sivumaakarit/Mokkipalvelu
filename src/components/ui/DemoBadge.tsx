"use client";

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
                className={`fixed top-[74px] md:top-[92px] left-3 md:left-6 z-50 bg-white/95 backdrop-blur-sm border border-dashed border-blue-600 shadow-md rounded-full py-1.5 md:py-2 px-3.5 md:px-5 flex items-center justify-center transition-all duration-500 cursor-default select-none pointer-events-auto origin-top-left hover:scale-105 animate-slow-blink ${isHidden ? 'opacity-0 -translate-x-full pointer-events-none' : ''}`}
            >
                <span className="text-[9px] md:text-xs uppercase tracking-[0.2em] font-black text-blue-700 leading-none">DEMOSIVU</span>
            </div>
        </>
    );
}
