"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { usePathname } from "next/navigation";
import { CabinLogo } from "@/components/landing/CabinLogo";
import { Manrope, Urbanist, Playfair_Display } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "700"] });
const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700", "900"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [showBlueHeader, setShowBlueHeader] = useState(false);
    const [showGreenHeader, setShowGreenHeader] = useState(true);
    const [showPlainHeader, setShowPlainHeader] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);
    
    const scrollToHinnasto = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (isMainPage) {
            e.preventDefault();
            const el = document.getElementById("hinnasto");
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
            }
        }
    };

    const isDemoPage = pathname === "/mokkipalvelu";
    const isMainPage = pathname === "/tarjous" || pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            
            if (isDemoPage) {
                const demoContact = document.getElementById("demo-contact");
                const swapThreshold = demoContact ? demoContact.offsetTop - 600 : 2500;
                setShowGreenHeader(currentScroll < swapThreshold);
                setShowBlueHeader(currentScroll >= swapThreshold);
                setShowPlainHeader(false);
            } else if (isMainPage) {
                // Main page: switch from white header to blue header after 400px
                const threshold = 400;
                setShowPlainHeader(currentScroll < threshold);
                setShowBlueHeader(currentScroll >= threshold);
                setShowGreenHeader(false);
            } else {
                // For other pages, we can default to showing the blue header or nothing
                setShowBlueHeader(true);
                setShowGreenHeader(false);
                setShowPlainHeader(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isDemoPage, isMainPage]);

    return (
        <>
            {/* 1. Green Header (Initial Demo Context) */}
            {isDemoPage && (
                <header
                    className={`bg-green-900 shadow-md fixed top-0 left-0 w-full z-40 transition-transform duration-500 ease-in-out ${showGreenHeader ? "translate-y-0" : "-translate-y-full"
                        }`}
                >
                    <div className="container mx-auto px-4 text-white">
                        <div className="flex justify-between items-center h-16">
                            {/* Logo */}
                            <Link href="/" className="flex-1 min-w-0 flex items-center gap-2 md:gap-4 mr-2">
                                <div className="flex-shrink-0 scale-90 md:scale-100">
                                    <CabinLogo />
                                </div>
                                <div className="flex flex-col text-left">
                                    <span className={`${urbanist.className} text-xl sm:text-2xl md:text-3xl text-white leading-none font-bold tracking-tight`}>
                                        Etelä-Suomen
                                    </span>
                                    <span className={`${manrope.className} text-[10px] sm:text-[11px] md:text-xs text-stone-200 tracking-widest font-medium`}>
                                        Mökkihuolto & Vahti
                                    </span>
                                </div>
                            </Link>

                            {/* Desktop Navigation */}
                            <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-bold">
                                <Link href="#hero" className="hover:text-amber-400 transition-colors">Etusivu</Link>
                                <Link href="#services" className="hover:text-amber-400 transition-colors">Palvelut</Link>
                                <Link href="#pricing" className="hover:text-amber-400 transition-colors">Hinnasto</Link>
                                <Link href="#demo-contact" className="hover:text-amber-400 transition-colors">Ota yhteyttä</Link>
                                 <Link
                                     href="/tarjous#hinnasto"
                                     className="bg-white hover:bg-green-50 text-green-900 px-6 py-2 rounded-lg font-bold transition-colors shadow-sm normal-case tracking-normal"
                                 >
                                     Osta nyt 990 €
                                 </Link>
                            </nav>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={toggleMenu}
                                className="md:hidden p-2 text-green-50 focus:outline-none"
                                aria-label="Avaa valikko"
                            >
                                {isOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu (Green Dropdown) */}
                    {isOpen && showGreenHeader && (
                        <div className="md:hidden absolute top-16 left-0 w-full bg-green-900 border-t border-green-800 shadow-xl py-6 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
                            <Link href="#hero" onClick={() => setIsOpen(false)} className="text-lg font-medium text-green-50 py-4 border-b border-green-800 hover:text-white transition-all block text-center uppercase tracking-widest">Etusivu</Link>
                            <Link href="#services" onClick={() => setIsOpen(false)} className="text-lg font-medium text-green-50 py-4 border-b border-green-800 hover:text-white transition-all block text-center uppercase tracking-widest">Palvelut</Link>
                            <Link href="#pricing" onClick={() => setIsOpen(false)} className="text-lg font-medium text-green-50 py-4 border-b border-green-800 hover:text-white transition-all block text-center uppercase tracking-widest">Hinnasto</Link>
                            <Link href="#demo-contact" onClick={() => setIsOpen(false)} className="text-lg font-medium text-green-50 py-4 border-b border-green-800 hover:text-white transition-all block text-center uppercase tracking-widest">Ota yhteyttä</Link>
                            <Link
                                href="/tarjous"
                                onClick={() => setIsOpen(false)}
                                className="mt-4 w-full bg-white text-green-900 py-3.5 rounded-xl font-bold text-center shadow-sm"
                            >
                                Osta nyt 990 €
                            </Link>
                        </div>
                    )}
                </header>
            )}

            {/* 2. Plain White Header (Initial Main context) */}
            {isMainPage && (
                <header 
                    className={`py-4 md:py-6 px-4 md:px-12 flex justify-between items-center bg-white shadow-sm fixed top-0 left-0 w-full z-40 transition-transform duration-500 ease-in-out ${showPlainHeader ? "translate-y-0" : "-translate-y-full"}`}
                >
                    <div className={`text-lg md:text-2xl font-bold text-blue-900 ${playfair.className} tracking-tight leading-tight min-w-0 pr-2`}>
                        <span className="whitespace-nowrap">Sivumaakareiden</span> <span className="text-blue-600 block sm:inline whitespace-nowrap">Palvelusivut</span>
                    </div>
                    <Link 
                        href={isMainPage ? "#hinnasto" : "/tarjous#hinnasto"}
                        onClick={scrollToHinnasto}
                        className="flex-shrink-0 bg-blue-700 hover:bg-blue-800 text-white px-4 md:px-6 py-3 rounded-full font-bold transition text-sm md:text-base whitespace-nowrap shadow-md"
                    >
                        Osta nyt 990 €
                    </Link>
                </header>
            )}

            {/* 3. Dark Premium Header (Brand Reveal - Unified) */}
            <header
                className={`bg-[#0A1128]/95 backdrop-blur-lg shadow-[0_8px_30px_rgba(0,0,0,0.5)] border-b border-blue-500/20 fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out ${showBlueHeader ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-16 md:h-20">
                        {/* Logo - Dark Theme */}
                        <Link href="/" className="min-w-0 flex items-center gap-3 mr-4 group">
                            <div className={`${urbanist.className} font-bold text-xl md:text-3xl text-white tracking-widest uppercase line-clamp-1 group-hover:text-cyan-400 transition-colors opacity-90`}>
                                Sivumaakarit
                            </div>
                        </Link>

                        {/* Promotional Content - Desktop */}
                        <div className="hidden md:flex items-center gap-8">
                            <span className="text-blue-100 text-lg font-medium">
                                Tarjous: Kotisivut nyt vain <span className="text-cyan-400 font-bold text-2xl">990€</span>
                            </span>

                            {/* Animated Arrow pointing to button */}
                            <svg className="w-8 h-8 text-cyan-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>

                             <Link
                                 href={isMainPage ? "#hinnasto" : "/tarjous#hinnasto"}
                                 onClick={scrollToHinnasto}
                                 className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg hover:shadow-cyan-500/25 hover:scale-105 text-lg"
                             >
                                 Osta nyt 990 €
                             </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 text-blue-100 hover:text-white focus:outline-none flex-shrink-0"
                            aria-label="Avaa valikko"
                        >
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu (Dropdown/Slide) */}
                {isOpen && showBlueHeader && (
                    <div className="md:hidden absolute top-16 left-0 w-full bg-[#0A1128] border-t border-blue-900/50 shadow-2xl py-8 px-6 flex flex-col gap-6 animate-in slide-in-from-top-2 duration-250 text-center">
                        <span className="text-blue-100 text-xl font-medium block">
                            Tarjous: Kotisivut nyt vain <span className="text-cyan-400 font-bold">990€</span>
                        </span>
                        <div className="flex justify-center">
                            <svg className="w-6 h-6 text-cyan-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                        <Link
                            href={isMainPage ? "#hinnasto" : "/tarjous#hinnasto"}
                            onClick={scrollToHinnasto}
                            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white py-4 rounded-xl font-bold text-center shadow-lg block text-xl"
                        >
                            Osta nyt 990 €
                        </Link>
                    </div>
                )}
            </header>
        </>
    );
}
