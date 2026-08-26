"use client";

import { useState, useRef, useEffect } from "react";
import { urbanist, manrope } from "@/lib/fonts";

const testimonials = [
    {
        text: "Vihdoinkin mökkihuolto, joka vastaa nopeasti. Putket tyhjennettiin ajallaan ja raportti tuli heti puhelimeen. Suosittelen!",
        author: "Lauri, Lohja",
        initials: "LL",
        color: "bg-emerald-100 text-emerald-700"
    },
    {
        text: "Piha on aina priimakunnossa, kun saavumme paikalle. Tuntihinta on reilu ja työn jälki erinomaista.",
        author: "Sari, Espoo",
        initials: "SE",
        color: "bg-blue-100 text-blue-700"
    },
    {
        text: "Lomavahti antoi mielenrauhan talven kovilla pakkasilla. Luotettava ja paikallinen kumppani.",
        author: "Matti, Helsinki",
        initials: "MH",
        color: "bg-orange-100 text-orange-700"
    },
    {
        text: "Katto lumityöt hoituivat sujuvasti jopa haastavien sääolosuhteiden keskellä. Helppo suositella.",
        author: "Kari, Vihti",
        initials: "KV",
        color: "bg-purple-100 text-purple-700"
    },
    {
        text: "Huipputekijöitä. Ovat pitäneet huolta mökistämme jo kaksi vuotta putkeen ilman mitään ongelmia.",
        author: "Anna, Raasepori",
        initials: "AR",
        color: "bg-pink-100 text-pink-700"
    },
    {
        text: "Säännölliset tarkastuskäynnit pelastivat jäätymisvaurioilta. Tekivät nopean ensiavun omin päin ja ilmoittivatheti.",
        author: "Petteri, Helsinki",
        initials: "PH",
        color: "bg-teal-100 text-teal-700"
    }
];

export function Testimonials() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showHint, setShowHint] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleScroll = () => {
        if (showHint && scrollContainerRef.current) {
            if (scrollContainerRef.current.scrollLeft > 20) {
                setShowHint(false);
            }
        }
    };

    // Automated "nudge" to show it's scrollable
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && showHint && !isDragging) {
                    setTimeout(() => {
                        if (scrollContainerRef.current && showHint) {
                            scrollContainerRef.current.scrollTo({ left: 60, behavior: 'smooth' });
                            setTimeout(() => {
                                if (scrollContainerRef.current && showHint) {
                                    scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                                }
                            }, 400);
                        }
                    }, 500);
                    observer.disconnect();
                }
            });
        }, { threshold: 0.5 });

        if (scrollContainerRef.current) {
            observer.observe(scrollContainerRef.current);
        }

        return () => observer.disconnect();
    }, [showHint, isDragging]);

    const onMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setShowHint(false);
        if (scrollContainerRef.current) {
            setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
            setScrollLeft(scrollContainerRef.current.scrollLeft);
        }
    };

    const onMouseLeave = () => {
        setIsDragging(false);
    };

    const onMouseUp = () => {
        setIsDragging(false);
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast multiplier
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    // Style to completely hide scrollbar but keep functionality
    const hideScrollbarStyle = {
        msOverflowStyle: 'none' as const,
        scrollbarWidth: 'none' as const,
    };

    return (
        <section className="pt-24 pb-12 bg-stone-50 overflow-hidden relative" id="testimonials">
            <div className="container mx-auto px-4 mb-16 relative z-20">
                <h2 className={`${urbanist.className} text-4xl md:text-6xl font-bold text-center text-slate-900 break-words tracking-tight`}>
                    Mitä asiakkaamme sanovat
                </h2>
                <div className="w-20 h-1.5 bg-green-700 mx-auto mt-8 rounded-full"></div>
            </div>

            <div className="relative max-w-[1400px] mx-auto">
                {/* Elegant fade masks */}
                <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-stone-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-stone-50 to-transparent z-10 pointer-events-none"></div>

                {/* Animated Scroll Hint Overlay */}
                <div className={`absolute right-8 md:right-32 top-1/2 -translate-y-1/2 z-30 pointer-events-none transition-opacity duration-700 ${showHint ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex items-center gap-2 bg-slate-900/80 text-white px-5 py-3 rounded-full backdrop-blur-md shadow-2xl border border-white/10">
                        <span className="text-sm font-bold tracking-wide">Pyyhkäise</span>
                        <svg className="w-5 h-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                </div>

                {/* Interactive Scroll Container */}
                <div 
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    onMouseDown={onMouseDown}
                    onMouseLeave={onMouseLeave}
                    onMouseUp={onMouseUp}
                    onMouseMove={onMouseMove}
                    className="flex overflow-x-auto gap-6 px-4 md:px-16 pb-12 pt-4 snap-x snap-mandatory relative z-20"
                    style={hideScrollbarStyle}
                >
                    {/* Add invisible style block to handle webkit scrollbar hiding specifically to this component to ensure it scales safely */}
                    <style dangerouslySetInnerHTML={{__html: `
                        #testimonials div::-webkit-scrollbar { display: none; }
                    `}} />

                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className={`w-[72vw] max-w-[380px] flex-none snap-center bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-stone-100 border-b-4 border-b-green-700/20 flex flex-col justify-between h-auto select-none transition-all duration-300 ${isDragging ? 'cursor-grabbing scale-[0.99] shadow-md' : 'cursor-grab hover:shadow-xl hover:-translate-y-1'}`}
                        >
                            <div>
                                <div className="flex items-center gap-1 mb-6 text-amber-400 drop-shadow-sm pointer-events-none">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className={`${manrope.className} text-slate-600 text-lg md:text-xl italic mb-8 leading-relaxed font-light pointer-events-none`}>
                                    &quot;{item.text}&quot;
                                </p>
                            </div>

                            <div className="flex items-center gap-4 mt-auto pt-5 border-t border-stone-100 pointer-events-none">
                                <div className={`${manrope.className} w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm ${item.color} shadow-inner`}>
                                    {item.initials}
                                </div>
                                <span className={`${manrope.className} font-bold text-slate-800 text-lg`}>{item.author}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
