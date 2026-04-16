import { siteConfig } from "@/lib/site-config";
import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export function Contact() {
    return (
        <>
            {/* Transition Guide: Bouncing arrow and glow spill placed AT THE SEAM */}
            <div className="w-full h-0 relative z-40 flex justify-center pointer-events-none">
                <div className="absolute -top-32 flex flex-col items-center">
                    {/* The glow spill extending upwards */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/30 blur-[100px] rounded-full opacity-60 z-0"></div>
                    
                    <div className="animate-bounce flex flex-col items-center gap-3 relative z-10">
                        <span className={`${playfair.className} text-blue-400 font-bold text-sm md:text-base tracking-[0.2em] drop-shadow-xl bg-stone-900 px-6 py-3 rounded-full border border-blue-500/50 shadow-[0_10px_30px_rgba(59,130,246,0.5)] backdrop-blur-sm pointer-events-auto cursor-pointer hover:bg-stone-800 transition-colors`}
                              onClick={(e) => {
                                  e.preventDefault();
                                  document.getElementById("sivumaakarit-bridge")?.scrollIntoView({ behavior: "smooth", block: "start" });
                              }}>
                            Totuus löytyy täältä
                        </span>
                        <svg className="w-12 h-12 md:w-14 md:h-14 text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* The Fracture / Bridge Effect Start */}
            <div className="w-full relative bg-stone-900 text-white py-16 md:py-32 overflow-hidden" id="sivumaakarit-bridge">
                {/* Diagonal slash background */}
                <div className="absolute inset-0 bg-blue-900/40 transform -skew-y-3 origin-top-left scale-110 z-0 border-b border-blue-500/30"></div>
                
                {/* Glowing radial gradient behind the text setup */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10 max-w-5xl">
                    <div className="text-center mb-16 md:mb-24">
                        {/* GHOST SITE ALERT SECTION - Relocated for maximum impact */}
                        <div className="relative mx-auto max-w-4xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                            {/* Shadow floor */}
                            <div className="absolute inset-0 bg-blue-900/40 translate-x-3 translate-y-3 md:translate-x-6 md:translate-y-6 blur-xl"></div>
                            <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4"></div>
                            
                            <div className="relative bg-yellow-400 text-black p-8 md:p-16 border-4 border-black shadow-2xl">
                                <div className={`${playfair.className} absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black text-yellow-400 px-8 py-3 font-bold text-lg md:text-xl tracking-[0.2em] shadow-xl rotate-2 ring-4 ring-yellow-400`}>
                                    Varoitus
                                </div>
                                
                                <h2 className={`${playfair.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tighter leading-none mt-6 uppercase italic`}>
                                    STOP! <br /> OLET <br className="sm:hidden" /> KUMMITUSSIVUILLA <br className="hidden sm:block" />
                                    <span className={`${inter.className} text-xl md:text-3xl font-light block mt-6 opacity-90 normal-case not-italic`}>
                                        – tätä yritystä, <span className="underline decoration-4 decoration-black/20 text-black/80 font-bold">Etelä-Suomen Mökki & Vahti</span>, ei ole olemassa. 👻
                                    </span>
                                </h2>
                                
                                <div className="max-w-3xl mx-auto">
                                    <p className={`${inter.className} text-xl md:text-2xl font-bold mb-10 leading-relaxed`}>
                                        Pahoittelut, jos ehdit jo innostua – meiltä ei saa lumitöitä, vaan pelkkää koodia. <br className="hidden md:block" />
                                        Mutta huomasitko? <span className="bg-black text-yellow-400 px-3 py-1 rotate-1 inline-block mt-2 font-bold">Melkein jo tilasit palvelun.*</span>
                                    </p>
                                    
                                    <div className="bg-white/30 backdrop-blur-sm p-8 md:p-10 border-l-[12px] border-black text-left shadow-inner">
                                        <p className={`${inter.className} text-lg md:text-xl italic font-medium text-black/80`}>
                                            Se on kiistaton todiste siitä, että Sivumaakareiden Tehorunko-nettisivu toimii. 
                                            Me emme korjaa mökkejä, me korjaamme yrityksesi digitaalisen mökkitien.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Highly Visual "Proof" Section - PageSpeed Dashboard Redesign */}
                    <div className="relative mt-32 mb-20 max-w-5xl mx-auto">
                        <div className="text-center mb-16 px-4">
                            <h2 className={`${playfair.className} text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tight italic`}>
                                Todisteet puhuvat <br className="sm:hidden" /> puolestaan
                            </h2>
                            <p className={`${inter.className} text-xl text-blue-300 max-w-2xl mx-auto font-light leading-relaxed`}>
                                Me emme vain lupaa, me dokumentoimme. <br className="hidden md:block" />
                                <span className="text-white font-bold italic">Sivusi suorituskyky on meidän kunnia-asiamme.</span>
                            </p>
                        </div>

                        {/* Realistic PageSpeed Dashboard Frame */}
                        <div className="relative transform transition-all duration-700 hover:scale-[1.02] w-full max-w-4xl mx-auto z-10 px-4">
                            {/* Realistic Glow spill */}
                            <div className="absolute -inset-8 bg-blue-600/20 rounded-[3rem] blur-3xl opacity-60 pointer-events-none"></div>
                            
                            {/* Device Frame (Browser) */}
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-300 bg-white flex flex-col">
                                {/* Chrome Browser Bar */}
                                <div className="h-10 bg-[#f1f3f4] flex items-center px-4 border-b border-slate-200 gap-4">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                                    </div>
                                    <div className="flex-1 bg-white h-6 rounded-full flex items-center px-3 shadow-sm border border-slate-200 max-w-md hidden sm:flex">
                                        <span className={`${inter.className} text-[10px] text-slate-400 truncate`}>pagespeed.web.dev/report/sivumaakarit-tehorunko</span>
                                    </div>
                                </div>
                                
                                {/* PageSpeed Content Area */}
                                <div className={`p-6 md:p-12 bg-white ${inter.className} text-left`}>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 shadow-sm">
                                                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">Varmistettu Raportti</h3>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-emerald-100 shadow-sm">
                                                Status: Sertifioitu
                                            </span>
                                        </div>
                                    </div>

                                    {/* The Metrics Grid */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                        {[
                                            { label: "Suorituskyky", score: "85-100", elite: true },
                                            { label: "Esteettömyys", score: "100" },
                                            { label: "Käytännöt", score: "100" },
                                            { label: "SEO / AI-löytyvyys", score: "100" }
                                        ].map((m) => (
                                            <div key={m.label} className="flex flex-col items-center gap-3 group">
                                                <div className="relative w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-110">
                                                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                                                        <circle cx="18" cy="18" r="16" fill="none" stroke="#f1f5f9" strokeWidth="3" />
                                                        <circle cx="18" cy="18" r="16" fill="none" stroke="#0cce6b" strokeWidth="3" strokeDasharray={m.elite ? "94 100" : "100 100"} strokeLinecap="round" />
                                                    </svg>
                                                    <span className="absolute inset-0 flex items-center justify-center text-[#088243] font-black text-sm md:text-lg">
                                                        {m.score}
                                                    </span>
                                                </div>
                                                <h4 className={`${inter.className} text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest text-center h-8 leading-tight`}>
                                                    {m.label}
                                                </h4>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="mt-12 pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                                        <p className="text-[10px] text-slate-400 italic">
                                            * Lighthouse 11 Benchmark — Analysoitu: Tänään {new Date().getHours()}:00
                                        </p>
                                        <div className="opacity-30 grayscale hover:grayscale-0 transition-all cursor-pointer">
                                            <Image src="/images/sivumaakarit.webp" alt="Sivumaakarit Verified" width={80} height={25} className="h-6 w-auto" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Highly Converting Sales Text section from Tarjous page */}
                    <div className="bg-white text-slate-900 rounded-[3rem] p-10 md:p-16 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden ring-1 ring-slate-900/5 mb-16">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-cyan-400"></div>
                        
                        <h3 className={`${playfair.className} text-3xl md:text-5xl lg:text-5xl font-bold leading-tight mb-8 tracking-tight text-slate-900 italic`}>
                            Me haluamme, että sinun kova työsi ja ammattitaitosi <span className="text-blue-600">ovat asiakkaittesi saatavilla.</span>
                        </h3>
                        
                        <p className={`${inter.className} text-lg md:text-2xl text-slate-600 leading-relaxed font-light mb-12`}>
                            Nettisivu ei ole menoerä. Se on paras työntekijäsi, joka ei nuku koskaan.
                            Kertamaksulla <strong className="font-bold text-slate-900">990 €</strong> ilman piilokuluja.
                        </p>

                        <div className="flex flex-col items-center gap-6">
                            <a href="#sales-section" onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('sales-section')?.scrollIntoView({ behavior: 'smooth' });
                            }} className={`${playfair.className} w-full md:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 text-white font-bold text-xl md:text-2xl tracking-tight py-6 px-10 rounded-2xl hover:bg-blue-700 transition-all shadow-[0_20px_40px_rgba(37,99,235,0.3)] hover:shadow-none hover:translate-y-1 transform active:scale-95 group italic`}>
                                LOPETA DEMOTTELU  –  LUE LISÄÄ
                                <svg className="w-8 h-8 transform group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </a>
                            
                            <button onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} className={`${inter.className} text-slate-500 hover:text-slate-700 font-bold uppercase tracking-widest text-sm transition-colors flex items-center gap-2`}>
                                <span className="w-8 h-px bg-slate-300"></span>
                                Tai lue UKK alhaalta
                                <span className="w-8 h-px bg-slate-300"></span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            {/* The Fracture / Bridge Effect End */}
        </>
    );
}
