"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function CustomChatButton() {
    const pathname = usePathname();
    const isMokkiPage = pathname?.startsWith("/mokkipalvelu");

    const [isScrolled, setIsScrolled] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        // Synkronoidaan painikkeen näkyvyys Crisp-keskusteluikkunan avaamisen/sulkemisen kanssa
        if (typeof window !== "undefined") {
            (window as any).$crisp = (window as any).$crisp || [];
            (window as any).$crisp.push(["on", "chat:opened", () => setIsChatOpen(true)]);
            (window as any).$crisp.push(["on", "chat:closed", () => {
                setIsChatOpen(false);
                // Kun chat suljetaan, piilotetaan se uudelleen taustalle
                (window as any).$crisp.push(["do", "chat:hide"]);
            }]);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    if (!mounted) return null;

    const handleOpenChat = (e: React.MouseEvent) => {
        e.preventDefault();
        if (typeof window !== "undefined") {
            // Varmistetaan, että $crisp-taulukko on alustettu ja komentojono toimii heti latautuessa
            (window as any).$crisp = (window as any).$crisp || [];
            (window as any).$crisp.push(["do", "session:reset"]);
            (window as any).$crisp.push(["do", "chat:show"]);
            (window as any).$crisp.push(["do", "chat:open"]);
        }
    };

    // Teemakohtaiset tyylit
    const buttonStyles = isMokkiPage
        ? {
              container: "bg-[#2C4A3E]/95 hover:bg-[#1E332A] text-[#F5F2EB] border border-emerald-500/20 shadow-[0_10px_30px_rgba(44,74,62,0.3)] hover:shadow-[0_15px_35px_rgba(44,74,62,0.4)]",
              ripple: "bg-[#2C4A3E]/40",
              label: "text-[#F5F2EB]/90 font-medium",
              labelText: "Kysy talkkarilta",
              iconColor: "text-[#F5F2EB]"
          }
        : {
              container: "bg-slate-950/95 hover:bg-slate-900 text-white border border-cyan-500/30 shadow-[0_10px_30px_rgba(6,182,212,0.15)] hover:shadow-[0_15px_35px_rgba(6,182,212,0.25)]",
              ripple: "bg-cyan-500/20",
              label: "text-cyan-400 font-bold",
              labelText: "Kysy kotisivuista",
              iconColor: "text-cyan-400"
          };

    return (
        <button
            onClick={handleOpenChat}
            className={`fixed z-40 group flex items-center p-3.5 rounded-full backdrop-blur-md hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-in-out select-none cursor-pointer ${buttonStyles.container} ${
                isScrolled 
                    ? 'md:p-3.5 group-hover:md:px-5 group-hover:md:py-3.5' 
                    : 'md:px-5 md:py-3.5'
            } ${
                isChatOpen 
                    ? 'opacity-0 scale-90 pointer-events-none' 
                    : 'opacity-100 scale-100'
            } ${
                isMokkiPage 
                    ? 'bottom-40 right-6 md:bottom-[136px]' 
                    : 'bottom-[88px] right-6'
            }`}
            aria-label="Avaa asiakaspalveluchat"
            id="crisp-custom-chat-button"
            style={{
                transitionProperty: "all",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            }}
        >
            {/* Pulsing ripple effect - natively stopped at exactly 3 iterations by the browser with forwards fill-mode */}
            <span 
                className={`absolute inset-0 rounded-full animate-ping -z-10 pointer-events-none ${buttonStyles.ripple}`}
                style={{
                    animationIterationCount: 3,
                    animationFillMode: "forwards"
                }}
            ></span>

            {/* Premium Messaging SVG Icon */}
            <svg 
                className={`w-6 h-6 md:w-5 md:h-5 shrink-0 ${buttonStyles.iconColor}`} 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>

            {/* Text label - collapses on scroll, expands beautifully on hover */}
            <span className={`hidden md:inline font-bold text-sm tracking-wide leading-none select-none transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap ${
                isScrolled 
                    ? 'max-w-0 opacity-0 ml-0 group-hover:max-w-[150px] group-hover:opacity-100 group-hover:ml-2' 
                    : 'max-w-[150px] opacity-100 ml-2'
            } ${buttonStyles.label}`}>
                {buttonStyles.labelText}
            </span>
        </button>
    );
}
