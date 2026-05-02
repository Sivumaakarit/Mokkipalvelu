import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export function ProofSection() {
    return (
        <section className={`py-24 px-4 bg-white ${inter.className}`}>
            <div className="max-w-5xl mx-auto">
                {/* Lighthouse Todisteet - Katseenvangitsija */}
                <div className="bg-slate-50 rounded-[2.5rem] border border-slate-200 shadow-xl relative overflow-hidden flex flex-col lg:flex-row gap-8 lg:gap-12 items-center p-8 md:p-12 lg:p-16">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 p-8 opacity-5 select-none pointer-events-none">
                        <span className="text-9xl font-black text-slate-900 leading-none">100</span>
                    </div>
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

                    {/* Text & Orbs Section */}
                    <div className="flex-1 relative z-10 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
                        <h3 className={`${playfair.className} text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight`}>
                            Todisteet puhuvat puolestaan
                        </h3>
                        <p className="text-slate-600 mb-10 text-lg md:text-xl leading-relaxed max-w-2xl">
                            Olemme ylpeitä laadustamme. <strong className="text-emerald-600 font-semibold">Takaamme teknisen täydellisyyden.</strong> Jokaiselle sivulle ajetaan automatisoitu laatutarkastus, joka varmistaa eliittiluokan tuloksen.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center lg:justify-start gap-8 sm:gap-12 mb-8">
                            {/* Prominent Elite Performance Orb */}
                            <div className="group relative flex flex-col items-center">
                                <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full border-[6px] border-emerald-500 flex items-center justify-center bg-white shadow-[0_0_50px_rgba(16,185,129,0.5)] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 animate-pulse z-0"></div>
                                    <div className="text-center z-10">
                                        <div className="text-xs md:text-sm uppercase tracking-tighter text-slate-500 font-bold mb-1">Status</div>
                                        <div className="text-xl md:text-3xl font-black text-emerald-600 uppercase tracking-widest leading-none">Eliitti</div>
                                    </div>
                                </div>
                                <span className="text-base md:text-lg font-bold text-slate-900 text-center uppercase tracking-widest mt-5 bg-emerald-50 px-4 py-1 rounded-full text-emerald-800 border border-emerald-100">Suorituskyky</span>
                            </div>
                        </div>
                        
                        <div className="mt-2 mb-6 w-full flex justify-center lg:justify-start">
                            <Link href="/mokkipalvelu" className="group flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-4 rounded-xl font-bold transition-all shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5 w-full sm:w-auto justify-center">
                                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                Katso esimerkkisivua
                            </Link>
                        </div>

                        <p className="text-slate-400 text-xs italic mt-4">
                            * Suorituskykytakuu 85–100 pistettä (mobiili) – valovuosia edellä tavallisia kotisivuja.
                        </p>
                    </div>

                    {/* Authentic PageSpeed Mockup Desktop UI */}
                    <div className="relative transform lg:scale-105 transition-transform duration-700 hover:scale-[1.08] w-full max-w-lg lg:max-w-xl xl:max-w-2xl xl:ml-4 z-10 shrink-0">
                        {/* Realistic Macbook Shadow/Glow */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/20 to-blue-600/20 rounded-[2rem] blur-2xl opacity-70 animate-pulse transition-opacity"></div>
                        
                        {/* Device Frame */}
                        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-300 border-t-slate-200 bg-white flex flex-col">
                            {/* Chrome Browser Bar */}
                            <div className="h-10 bg-[#f1f3f4] flex items-center px-4 border-b border-slate-200 gap-4">
                                <div className="flex gap-1.5 shrink-0">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]"></div>
                                </div>
                                <div className="flex-1 bg-white h-7 rounded-full flex items-center px-4 shadow-sm border border-slate-200 max-w-sm hidden sm:flex">
                                    <svg className="w-3.5 h-3.5 text-slate-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                    <span className="text-[11px] text-slate-600 font-sans tracking-tight truncate">pagespeed.web.dev/report</span>
                                </div>
                            </div>
                            
                            {/* PageSpeed Content Area */}
                            <div className="p-4 sm:p-6 lg:p-8 bg-white font-sans">
                                {/* Top Header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 shrink-0">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl sm:text-2xl text-slate-700 tracking-tight" style={{ fontWeight: 400 }}>PageSpeed Insights</h4>
                                </div>

                                {/* Analyze Bar Setup */}
                                <div className="mb-6">
                                    <div className="text-sm md:text-base text-slate-800 mb-3" style={{ fontWeight: 400 }}>Raportti: Juuri päivitetty</div>
                                    <div className="flex flex-col sm:flex-row gap-2">
                                        <div className="flex-1 border border-slate-400 rounded px-4 py-2 sm:py-2.5 text-sm text-slate-800 bg-white truncate shadow-inner">
                                            https://asiakas-verkkosivut.fi/
                                        </div>
                                        <div className="bg-blue-600 text-white px-6 py-2 sm:py-2.5 rounded text-sm font-medium shadow-sm flex items-center justify-center shrink-0">
                                            Analysoi
                                        </div>
                                    </div>
                                </div>

                                {/* Tabs */}
                                <div className="flex justify-center border-b border-slate-200 mb-8 sm:gap-2">
                                    <div className="flex items-center gap-2 pb-3 px-6 text-slate-600 font-medium text-sm">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                                        <span className="hidden sm:inline">Mobiili</span>
                                    </div>
                                    <div className="flex items-center gap-2 pb-3 px-6 text-blue-700 font-medium text-sm border-b-[3px] border-blue-600 bg-blue-50/70 rounded-t-sm">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        Tietokone
                                    </div>
                                </div>

                                {/* Metrics Title */}
                                <div className="flex items-center gap-2 mb-8">
                                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                       <svg className="w-3.5 h-3.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                    </div>
                                    <h5 className="text-sm md:text-base font-medium text-slate-800">Diagnosoi toimivuusongelmia</h5>
                                </div>

                                {/* The 3 Metrics */}
                                <div className="grid grid-cols-3 gap-2 sm:gap-6 px-2 sm:px-8">
                                    {[
                                        { label: "Esteettömyys", score: 100 },
                                        { label: "Parhaat käytännöt", score: 100 },
                                        { label: "Hakukoneoptimointi", score: 100 }
                                    ].map((metric) => (
                                        <div key={metric.label} className="flex flex-col items-center justify-start gap-4">
                                            <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-[72px] lg:h-[72px] shrink-0 group-hover:scale-105 transition-transform duration-500">
                                                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                                    <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#e2e8f0" strokeWidth="2.5" />
                                                    <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#0cce6b" strokeWidth="2.5" strokeDasharray={`${metric.score}, 100`} />
                                                </svg>
                                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#0cce6b] font-medium text-[15px] sm:text-[22px] lg:text-[26px] font-mono tracking-tighter mix-blend-multiply">
                                                    {metric.score}
                                                </div>
                                            </div>
                                            <span className="text-[9px] sm:text-xs font-medium text-slate-800 text-center leading-[1.3] w-full px-1" style={{ wordBreak: 'break-word', hyphens: 'auto' }}>
                                                {metric.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
