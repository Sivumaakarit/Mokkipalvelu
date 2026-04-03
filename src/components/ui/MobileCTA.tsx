"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileCTA() {
    const pathname = usePathname();

    // Show only on the mokkipalvelu demo page
    if (!pathname?.startsWith("/mokkipalvelu")) return null;

    return (
        <>
            {/* MOBILE: Large floating button */}
            <div className="fixed bottom-0 left-0 w-full z-50 p-4 md:hidden bg-gradient-to-t from-white via-white/90 to-transparent pb-6 pt-12 animate-in slide-in-from-bottom-10 fade-in duration-500">
                <Link 
                    href="/tarjous"
                    className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-lg py-4 px-6 rounded-2xl shadow-[0_10px_25px_rgba(37,99,235,0.4)] tracking-wide uppercase"
                >
                    <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="font-black">Takaisin pääsivulle</span>
                </Link>
            </div>

            {/* DESKTOP/TABLET: Slim sticky bottom bar */}
            <div className="hidden md:flex fixed bottom-0 left-0 w-full z-50 h-12 bg-slate-950/80 backdrop-blur-md border-t border-white/10 items-center justify-center text-white/90 text-sm tracking-wide">
                <span className="font-bold">Tämä on demosivu → </span>
                <Link 
                    href="/tarjous"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-1.5 rounded-full ml-4 transition-all font-black text-xs uppercase tracking-widest shadow-lg shadow-blue-600/30"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Takaisin pääsivulle
                </Link>
            </div>
        </>
    );
}
