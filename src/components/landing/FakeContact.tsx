"use client";

import { siteConfig } from "@/lib/site-config";
import { urbanist, manrope } from "@/lib/fonts";

export function FakeContact() {
    const handleInteraction = (e: React.MouseEvent | React.FocusEvent) => {
        e.preventDefault();
        const bridge = document.getElementById("sivumaakarit-bridge");
        if (bridge) {
            // Scroll down to the bridge section with smooth behavior
            bridge.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section className="py-24 bg-stone-100 relative overflow-hidden" id="demo-contact">
            {/* Playful background element */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-900/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="container mx-auto px-4 max-w-xl relative p-8">
                <h2 className={`${urbanist.className} text-3xl md:text-4xl font-bold text-center mb-6 text-stone-800 tracking-tight underline decoration-green-700/20 underline-offset-8`}>
                    Kutsu Mökkitalkkari paikalle!
                </h2>
                <p className={`${manrope.className} text-center text-stone-600 mb-12 text-lg`}>
                    Jätä yhteystietosi lomakkeella tai paina vihreää nappia – olemme valmiina!
                </p>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
                    <form className="space-y-6">
                        <div>
                            <label className={`${manrope.className} block text-sm font-bold text-stone-700 mb-1 opacity-80 uppercase tracking-widest`}>Nimi</label>
                            <input 
                                type="text" 
                                readOnly
                                onFocus={handleInteraction}
                                onClick={handleInteraction}
                                className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-lg cursor-not-allowed placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all group" 
                                placeholder="Kirjoita nimesi..." 
                            />
                        </div>

                        <div>
                            <label className={`${manrope.className} block text-sm font-bold text-stone-700 mb-1 opacity-80 uppercase tracking-widest`}>Sähköposti</label>
                            <input 
                                type="email" 
                                readOnly
                                onFocus={handleInteraction}
                                onClick={handleInteraction}
                                className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-lg cursor-not-allowed placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all" 
                                placeholder="esimerkki@osoite.fi" 
                            />
                        </div>

                        <div>
                            <label className={`${manrope.className} block text-sm font-bold text-stone-700 mb-1 opacity-80 uppercase tracking-widest`}>Mökin sijainti & tarve</label>
                            <textarea 
                                rows={3} 
                                readOnly
                                onFocus={handleInteraction}
                                onClick={handleInteraction}
                                className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-lg cursor-not-allowed placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all resize-none"
                                placeholder="Kirjoita viestisi..."
                            ></textarea>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button 
                                type="button"
                                onClick={handleInteraction}
                                className={`${manrope.className} flex-1 bg-stone-200 text-stone-500 font-bold py-3 px-6 rounded-lg uppercase tracking-wide cursor-not-allowed hover:bg-stone-300 transition-colors`}
                            >
                                Lähetä viesti
                            </button>
                            <a 
                                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} 
                                className={`${manrope.className} flex-1 bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg uppercase tracking-wide text-center transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2`}
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Soita Heti
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
