"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { playfair, inter } from "@/lib/fonts";

export function SalesSection() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const isPremium = siteConfig.pricingStrategy === "premium";
    const preset = siteConfig.pricingPresets[siteConfig.pricingStrategy];

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch(`https://formspree.io/f/${siteConfig.formspreeKey}`, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setFormSubmitted(true);
                form.reset();
            } else {
                alert("Hups! Jotain meni pieleen. Yritä uudelleen myöhemmin.");
            }
        } catch (error) {
            alert("Hups! Jotain meni pieleen. Yritä uudelleen myöhemmin.");
        }
    };

    return (
        <div className="relative" id="sales-section">
            {/* Visual Divider - Restored & Steeper */}
            <div className="relative h-32 w-full overflow-hidden">
                <div className="absolute inset-0 bg-stone-50 z-0"></div>
                <div className="absolute inset-0 bg-slate-950 z-10" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0% 100%)" }}></div>
            </div>

            <section className="bg-slate-950 text-white py-16 relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

                <div className="container mx-auto px-4 relative z-10">

                    {/* 2. Karut Faktat (Facts First) */}
                    <div className="max-w-4xl mx-auto text-center mb-20">


                        <div className="mb-16 animate-in fade-in zoom-in duration-1000 delay-300">
                            <h3 className={`${playfair.className} text-blue-500 font-bold tracking-[0.2em] mb-8 uppercase text-lg md:text-xl italic`}>
                                Sivumaakarit - laadukkaat ja nopeat nettisivut
                            </h3>
                            <div className="relative inline-block animate-swing origin-top select-none">
                                <div className={`${playfair.className} text-4xl md:text-5xl italic text-white lowercase bg-[#0A1128] border border-blue-500/20 px-8 pt-2 pb-3.5 md:pt-3 md:pb-4.5 rounded-2xl shadow-2xl tracking-tight`}>
                                    sivumaakarit<span className="text-cyan-400">.</span>
                                </div>
                            </div>
                        </div>
                        <h2 className={`${playfair.className} text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-white tracking-tight leading-tight italic`}>
                            Karut faktat: Jos yritystäsi ei löydy heti netistä,
                            <span className="text-red-400 block sm:inline font-bold italic mt-2 md:mt-0 md:ml-2">kaupat menevät ohi.</span>
                        </h2>
                        <p className={`${inter.className} text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light`}>
                            Nykypäivän ostopolku on armoton. Jos asiakas ei löydä yritystäsi Googlesta, Mapsista tai tekoälysovelluksista (kuten ChatGPT), hän valitsee kilpailijasi. Jopa 66,7 %<sup>*</sup> varauksista tehdään suoraan yrityksen omilla sivuilla – <span className="text-white font-semibold">varmista, että oma tiesi on kunnossa.</span>
                        </p>
                        <p className={`${inter.className} text-slate-400 text-xs mt-4 max-w-2xl mx-auto italic opacity-90`}>
                            * Lähde: TrekkSoft Travel Trend Report 2019.
                        </p>
                    </div>

                    {/* 3. Selkosuomi-edut (Vibrant Image Cards) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 max-w-6xl mx-auto">
                        {/* Google Visibility */}
                        <div className="group relative overflow-hidden rounded-[2.5rem] h-[400px] border border-white/5 hover:border-cyan-500/30 transition-all duration-700 hover:-translate-y-2 shadow-2xl">
                            <Image
                                src="/images/google-visibility-cottage.webp"
                                alt="Google Näkyvyys mökillä"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-50 group-hover:opacity-70"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-10 flex flex-col justify-end">
                                <div className="p-3 bg-blue-500/20 rounded-xl w-fit mb-4 text-blue-400 backdrop-blur-md border border-blue-500/20">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                                </div>
                                <h3 className={`${playfair.className} text-2xl font-bold text-white mb-3 tracking-tight italic`}>Google-näkyvyys</h3>
                                <p className={`${inter.className} text-slate-200 text-lg leading-snug font-light`}>Löydy sieltä, mistä asiakkaat etsivät apua – vaikka laiturin nokasta puhelimella.</p>
                            </div>
                        </div>

                        {/* Google Maps */}
                        <div className="group relative overflow-hidden rounded-[2.5rem] h-[400px] border border-white/5 hover:border-green-500/30 transition-all duration-700 hover:-translate-y-2 shadow-2xl">
                            <Image
                                src="/images/google-maps-countryside.webp"
                                alt="Google Maps maaseudulla"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-50 group-hover:opacity-70"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-10 flex flex-col justify-end">
                                <div className="p-3 bg-green-500/20 rounded-xl w-fit mb-4 text-green-400 backdrop-blur-md border border-blue-500/20">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                                </div>
                                <h3 className={`${playfair.className} text-2xl font-bold text-white mb-3 tracking-tight italic`}>Google Maps</h3>
                                <p className={`${inter.className} text-slate-200 text-lg leading-snug font-medium`}>Ole paikallinen ykkönen. Me varmistamme, että reitti perille on selkeä ja kartalla.</p>
                            </div>
                        </div>

                        {/* ChatGPT Readiness */}
                        <div className="group relative overflow-hidden rounded-[2.5rem] h-[400px] border border-white/5 hover:border-purple-500/30 transition-all duration-700 hover:-translate-y-2 shadow-2xl">
                            <Image
                                src="/images/ai-readiness-person.webp"
                                alt="Tekoälyvalmius"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-50 group-hover:opacity-70"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-10 flex flex-col justify-end">
                                <div className="p-3 bg-purple-500/20 rounded-xl w-fit mb-4 text-purple-400 backdrop-blur-md border border-purple-500/20">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24.0908a6.0562 6.0562 0 0 0 5.7718-4.2058 6.034 6.034 0 0 0-.7477-7.0915l-.005-.005Zm-2.6107 10.742h-3.4682a2.0003 2.0003 0 0 1-1.314-.4924l-3.3218-2.6366 1.836-3.176L16.29 16.736v3.827ZM2.5029 18.232l1.9-3.292 3.3218 2.6366a2.0051 2.0051 0 0 1 .4969 1.2588v4.2378l-3.9877-2.3a4.103 4.103 0 0 1-1.731-2.5412Zm-1.841-8.6186A4.1 4.1 0 0 1 1.7303 7.072l3.9926-2.305v4.2427a2.0051 2.0051 0 0 1-.497 1.2588L1.9126 12.9056 6.619 9.6136ZM16.3263 7.3323 13.0045 4.6957a2.0053 2.0053 0 0 1-1.314-.4924H8.2223v-3.827l3.889.3787a4.1031 4.1031 0 0 1 2.454 1.7371l1.761 4.836ZM19.6738 8.928a2.0051 2.0051 0 0 1 .4969 1.2588v4.2378l-3.9877 2.3-3.3218-2.6366 1.9-3.292 4.9126 3.292-1.761-4.836a4.103 4.103 0 0 1 1.761 1.832ZM10.5 14.168V9.832a2.0051 2.0051 0 0 1 .4969-1.2588l3.3218-2.6366 1.9 3.292-3.3218 2.6366a2.0051 2.0051 0 0 1-1.314.4924H8.083l1.9-3.292 3.3218 2.6366c.2045.161.4678.2378.7282.2132Z" /></svg>
                                </div>
                                <h3 className={`${playfair.className} text-2xl font-bold text-white mb-3 tracking-tight italic`}>ChatGPT-valmius</h3>
                                <p className={`${inter.className} text-slate-200 text-lg leading-snug font-light`}>Uusi sukupolvi hakee tietoa toisin. Ole se yritys, jota tekoäly suosittelee vastauksissaan.</p>
                            </div>
                        </div>
                    </div>

                    {/* 4. Speed Divider */}
                    <div className="text-center mb-16 relative">
                        <div className="absolute top-1/2 left-0 w-full h-px bg-slate-800 -z-10"></div>
                        <div className="inline-block bg-slate-950 px-6">
                            <div className="inline-block mb-6 select-none">
                                <div className={`${playfair.className} text-2xl md:text-3xl italic text-white lowercase bg-[#0A1128] border border-blue-500/20 px-6 pt-1.5 pb-2.5 md:pt-2 md:pb-3 rounded-xl shadow-lg tracking-tight`}>
                                    sivumaakarit<span className="text-cyan-400">.</span>
                                </div>
                            </div>
                            <h2 className={`${playfair.className} text-2xl md:text-6xl font-bold tracking-tight text-white leading-tight italic`}>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-cyan-300 block">
                                    Teemme sivuistasi huippuunsa viritetyn myyntikoneen.
                                </span>
                            </h2>
                        </div>
                    </div>

                    {/* 5. Refined Lighthouse Cards (The 100s) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
                        {/* SEO Card */}
                        <div className="group relative p-1 rounded-2xl transition-all duration-500 hover:scale-105 shadow-[0_0_15px_rgba(34,211,238,0.1)] hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl animate-shimmer opacity-30 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '1px', backgroundSize: '200% 200%' }}></div>
                            <div className="relative bg-slate-950 p-8 rounded-2xl h-full flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full border-4 border-green-400 flex items-center justify-center text-green-400 font-black text-3xl mb-6 shadow-[0_0_20px_rgba(74,222,128,0.6)] bg-green-400/5">
                                    100
                                </div>
                                <h3 className={`${playfair.className} text-xl font-bold text-white mb-4 text-center italic`}>Tekoäly- ja hakukonelöytyvyys</h3>
                                <p className={`${inter.className} text-slate-300 text-sm md:text-base text-center leading-relaxed font-light`}>
                                    Tekninen 100/100 SEO-takuu. Varmistamme, että yrityksesi on täydellinen sekä Googlelle että tekoälysovelluksille (kuten ChatGPT ja Gemini).
                                </p>
                            </div>
                        </div>

                        {/* Accessibility Card */}
                        <div className="group relative p-1 rounded-2xl transition-all duration-500 hover:scale-105 shadow-[0_0_15px_rgba(74,222,128,0.1)] hover:shadow-[0_0_40px_rgba(74,222,128,0.3)]">
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl animate-shimmer opacity-30 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '1px', backgroundSize: '200% 200%' }}></div>
                            <div className="relative bg-slate-950 p-8 rounded-2xl h-full flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full border-4 border-cyan-400 flex flex-col items-center justify-center text-cyan-400 font-black mb-6 shadow-[0_0_20px_rgba(34,211,238,0.6)] animate-glitter bg-cyan-400/5">
                                    <span className="text-[10px] uppercase tracking-tighter opacity-70">Eliitti</span>
                                    <span className="text-xl leading-none">85-100</span>
                                </div>
                                <h3 className={`${playfair.className} text-xl font-bold text-white mb-4 text-center italic`}>Esteettömyys</h3>
                                <p className={`${inter.className} text-slate-300 text-sm md:text-base text-center leading-relaxed font-light`}>
                                    Lupaamme vähintään 85+ tason. Sivusi noudattaa Googlen käytettävyysstandardeja, jotta kaikki asiakkaat pääsevät perille ilman esteitä.
                                </p>
                            </div>
                        </div>

                        {/* Best Practices Card */}
                        <div className="group relative p-1 rounded-2xl transition-all duration-500 hover:scale-105 shadow-[0_0_15px_rgba(192,132,252,0.1)] hover:shadow-[0_0_40px_rgba(192,132,252,0.3)]">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-2xl animate-shimmer opacity-30 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '1px', backgroundSize: '200% 200%' }}></div>
                            <div className="relative bg-slate-950 p-8 rounded-2xl h-full flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full border-4 border-purple-400 flex flex-col items-center justify-center text-purple-400 font-black mb-6 shadow-[0_0_20px_rgba(192,132,252,0.6)] animate-glitter bg-purple-400/5">
                                    <span className="text-[10px] uppercase tracking-tighter opacity-70">Eliitti</span>
                                    <span className="text-xl leading-none">95-100</span>
                                </div>
                                <h3 className={`${playfair.className} text-xl font-bold text-white mb-4 text-center italic`}>Parhaat käytännöt</h3>
                                <p className={`${inter.className} text-slate-300 text-sm md:text-base text-center leading-relaxed font-light`}>
                                    Teollisuuden kärkeä. Käytämme vain moderneinta ja turvallisinta tekniikkaa. Sivusi on aina teknisesti aikaansa edellä.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 6. High-Impact Speed Section (Elite Tier 85-100) - Revised for Transparency */}
                    <div className="bg-slate-900/50 backdrop-blur-xl border-4 border-white/5 p-8 md:p-16 rounded-[2.5rem] max-w-6xl mx-auto mb-32 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10 select-none">
                            <span className="text-9xl font-black text-emerald-500 leading-none">Vauhti</span>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                            <div className="flex flex-col items-center lg:items-start">
                                <div className="relative mb-8 group">
                                    {/* Guarantee Badge */}
                                    <div className="absolute -top-6 -right-6 z-20 animate-bounce">
                                        <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-black font-black text-[10px] md:text-xs px-3 py-1 rounded-full border-2 border-black shadow-[0_0_20px_rgba(234,179,8,0.5)] rotate-12 flex items-center gap-1">
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 13.17l7.59-7.59L19 7l-9 10z" /></svg>
                                            TAKUU
                                        </div>
                                    </div>

                                    {/* Google Pulse Effect */}
                                    <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full blur-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
                                    <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full border-[8px] border-emerald-500 flex items-center justify-center bg-slate-950 shadow-[0_0_50px_rgba(16,185,129,0.4)] transition-transform duration-500 group-hover:rotate-6">
                                        <div className="text-center">
                                            <div className="text-sm font-black text-emerald-400 uppercase tracking-[0.2em] mb-1">Status</div>
                                            <div className="text-xs uppercase tracking-tighter text-slate-400 font-bold mb-1">Pisteet</div>
                                            <div className="text-xl font-black text-white uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">Eliitti</div>
                                            <div className="text-[10px] uppercase tracking-[0.3em] text-emerald-500 font-bold mt-2">Toimitus</div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className={`${playfair.className} text-3xl md:text-5xl font-bold text-white mb-6 text-center lg:text-left leading-tight tracking-tight italic`}>Nopeus ja löydettävyys ovat myyntivalttisi</h3>
                            </div>
                            <div>
                                <p className={`${inter.className} text-white text-xl md:text-2xl font-bold leading-relaxed mb-8 italic opacity-90`}>
                                    &quot;Lupaamme teknisestä löydettävyydestä täyden kympin ja mobiilisuorituskyvyn, joka pysyy aina 85–100 pisteen eliittiluokassa.&quot;
                                </p>
                                <p className={`${inter.className} text-slate-300 text-lg leading-relaxed mb-6 font-light`}>
                                    Toimitamme jokaisen sivuston mukana virallisen raportin*, joka vahvistaa täydet 100 pistettä hakukonelöytyvyydestä ja teknisestä kunnosta. Mobiilissa nopeus on optimoitu tasolle, jota useimmat pörssiyhtiöt eivät saavuta.
                                </p>
                                <p className={`${inter.className} text-slate-300 text-sm leading-relaxed opacity-80`}>
                                    Sivu, joka latautuu heti ja on selkeä käyttää, muuttaa kävijät maksaviksi asiakkaiksi. Älä anna hitaan tekniikan karkottaa asiakkaitasi kuoppaiselle hiekkattielle.
                                </p>
                                <p className="text-slate-400 text-[10px] mt-8 uppercase tracking-widest">
                                    * Varmistettu riippumattomalla Google PageSpeed Insights -työkalulla.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Pricing Card Section */}
                    <div className="max-w-5xl mx-auto" id="tarjous">
                        <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-1 rounded-3xl shadow-2xl hover:shadow-cyan-900/30 hover:-translate-y-1 transition-all duration-500">
                            <div className="bg-slate-900 rounded-[22px] p-8 md:p-16 border border-slate-700 relative overflow-hidden before:content-['2026'] before:absolute before:top-4 before:right-4 before:text-white/5 before:text-[clamp(100px,12vw,160px)] before:font-bold before:leading-none before:select-none before:pointer-events-none">

                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 mt-12">
                                    <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap min-w-0 select-none">
                                        <div className={`${playfair.className} text-xl md:text-2xl italic text-white lowercase bg-[#0A1128] border border-blue-500/20 px-5 pt-1 pb-2 md:pt-1.5 md:pb-2.5 rounded-xl shadow-md tracking-tight`}>
                                            sivumaakarit<span className="text-cyan-400">.</span>
                                        </div>
                                        <h3 className={`${playfair.className} text-xl md:text-2xl font-bold text-slate-400 break-words min-w-0 italic`}>2026</h3>
                                    </div>
                                    <span className={`${inter.className} px-4 py-1 rounded-full bg-cyan-900/30 border border-cyan-800 text-cyan-400 text-sm font-semibold whitespace-nowrap`}>
                                        Moderni teknologia
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
                                    <div className="md:pr-8">
                                        <div className="text-center md:text-left mb-8">
                                            <h4 className={`${playfair.className} text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight italic flex items-baseline justify-center md:justify-start gap-1.5`}>
                                                {isPremium ? (
                                                    <>
                                                        Alkaen {preset.starterSetup} <span className="text-xs font-sans font-normal text-slate-400 lowercase tracking-normal"> + alv</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        Alkaen 33 €/kk <span className="text-xs font-sans font-normal text-slate-400 lowercase tracking-normal"> + alv</span>
                                                    </>
                                                )}
                                            </h4>
                                            <div className="w-16 h-1 bg-cyan-500 mb-6 hidden md:block"></div>
                                        </div>
                                        <p className={`${inter.className} text-slate-300 mb-8 text-lg leading-relaxed`}>
                                            {isPremium ? "Käytämme pohjana valmiiksi optimoitua ja testattua sivustorakennetta, jonka mukautamme juuri sinun yrityksesi ilmeeseen ja palveluihin." : "Meiltä et saa pelkkää \"tonttia\" netistä, vaan kovan luokan myyntimoottorin."}
                                        </p>
                                        <ul className="space-y-6">
                                            {isPremium ? (
                                                <>
                                                    <li className={`${inter.className} flex items-start text-slate-300`}>
                                                        <svg className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                        <span><strong className="text-white">Verkkosivuston rakennus (alkaen {preset.starterSetup} + alv):</strong> Kattaa sivuston yksilöllisen suunnittelun, myyntioptimoidun rakenteen ja julkaisun nettiin.</span>
                                                    </li>
                                                    <li className={`${inter.className} flex items-start text-slate-300`}>
                                                        <svg className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                        <span><strong className="text-white">Ylläpito & Turva (Perus alkaen {preset.basicAnnual}/kk + alv):</strong> Kattaa huippunopean palvelimen, SSL-salauksen, varmuuskopiot ja jatkuvan teknisen valvonnan.</span>
                                                    </li>
                                                    <li className={`${inter.className} flex items-start text-slate-300`}>
                                                        <svg className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                        <span><strong className="text-white">Haluatko yrityksesi takaisin kartalle?</strong> Nettisivu on työntekijä, joka ei nuku koskaan. Ammattimainen ja nopea sivusto maksaa itsensä takaisin jo muutaman uuden asiakkaan myötä – sen jälkeen kaikki on puhdasta voittoa.</span>
                                                    </li>
                                                </>
                                            ) : (
                                                <>
                                                    <li className={`${inter.className} flex items-start text-slate-300`}>
                                                        <svg className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                        <span><strong className="text-white">Sivuston rakennus (499 € + alv, vuositilauksella 399 € + alv):</strong> Sisältää teknisen rakennuksen, 100/100-laadunvarmistuksen ja modernin ulkoasun.</span>
                                                    </li>
                                                    <li className={`${inter.className} flex items-start text-slate-300`}>
                                                        <svg className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                        <span><strong className="text-white">Ylläpito (50 €/kk + alv):</strong> Sisältää domainin, teknisen huolenpidon ja takuun siitä, että sivusi pysyy salamannopeana vuodesta toiseen.</span>
                                                    </li>
                                                    <li className={`${inter.className} flex items-start text-slate-300`}>
                                                        <svg className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                        <span><strong className="text-white">Haluatko yrityksesi takaisin kartalle?</strong> Nettisivu on työntekijä, joka ei nuku koskaan. Pienyrittäjälle (esim. LVI tai puutarhuri) sivu maksaa itsensä takaisin jo 3–4 uuden asiakkaan myötä – sen jälkeen kaikki on puhdasta voittoa.</span>
                                                    </li>
                                                </>
                                            )}
                                        </ul>
                                    </div>

                                    <div className="flex flex-col justify-center">
                                        <h4 className={`${playfair.className} text-2xl font-bold text-white mb-2 italic`}>Valmiina nopeasti<span className="text-cyan-400">*</span></h4>
                                        <p className={`${inter.className} text-xs text-slate-400 mb-4 italic`}>
                                            * Toimitamme sivut nopeasti – parhaimmillaan jopa vuorokaudessa siitä, kun olet toimittanut meille kaiken materiaalin, eikä kyseessä ole poikkeuksellisen laaja kokonaisuus.
                                        </p>
                                        <div className="mb-10">
                                            <h4 className={`${playfair.className} text-base font-bold text-cyan-400 mb-6 tracking-wide border-b border-slate-800 pb-2 italic`}>Hinnoittelu – ei piilokuluja</h4>
                                            <div className="space-y-4">
                                                <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-lg bg-slate-900/40 border border-slate-800/50 ${inter.className}`}>
                                                    <div>
                                                        <div className="font-bold text-white text-lg">Sivuston rakennus</div>
                                                        <div className="text-sm text-slate-400">Avaimet käteen -laskeutumissivu.</div>
                                                    </div>
                                                    <div className="text-2xl font-bold text-white mt-2 sm:mt-0 whitespace-nowrap sm:pl-4 flex items-baseline gap-1">
                                                        {isPremium ? (
                                                            <>
                                                                alkaen {preset.starterSetup} <span className="text-xs font-normal text-slate-500 lowercase">+ alv</span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                499 € <span className="text-xs font-normal text-slate-500 lowercase">+ alv</span> <span className="text-sm font-normal text-slate-400">(Vuositilauksella 399 € <span className="text-xs lowercase">+ alv</span>)</span>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
 
                                                <div className="mt-6 mb-2">
                                                    <span className={`${playfair.className} text-sm font-bold text-cyan-500 tracking-wide italic`}>Ylläpitovaihtoehdot:</span>
                                                </div>
 
                                                <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-lg bg-slate-900/40 border border-slate-800/50 ${inter.className}`}>
                                                    <div>
                                                        <div className="font-bold text-white text-lg">Ylläpito & Turva – Perus</div>
                                                        <div className="text-sm text-slate-400">Tekninen ylläpito ja pieni päivitys (15min) kerran kuukaudessa.</div>
                                                    </div>
                                                    <div className="text-xl font-bold text-cyan-400 mt-2 sm:mt-0 whitespace-nowrap sm:pl-4">
                                                        {preset.basicMonthly} <span className="text-sm font-normal text-slate-400">/ kk + alv</span> <span className="text-xs font-normal text-slate-400">({isPremium ? "vuositilauksella 49 €/kk" : "vuositilauksella 33 €/kk"})</span>
                                                    </div>
                                                </div>
                                                <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-lg bg-slate-900/40 border border-slate-800/50 ${inter.className}`}>
                                                    <div>
                                                        <div className="font-bold text-white text-lg">Ylläpito & Turva – Plus</div>
                                                        <div className="text-sm text-slate-400">Sisältää 2 h asiantuntijatyötä kuukaudessa.</div>
                                                    </div>
                                                    <div className="text-xl font-bold text-blue-400 mt-2 sm:mt-0 whitespace-nowrap sm:pl-4">
                                                        {preset.plusMonthly} <span className="text-sm font-normal text-slate-400">/ kk + alv</span> <span className="text-xs font-normal text-slate-400">({isPremium ? "vuositilauksella 129 €/kk" : "vuositilauksella 99 €/kk"})</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                            <Link
                                                href="/tarjous#hinnasto"
                                                className={`${playfair.className} flex-1 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-center rounded-2xl transition-all shadow-[0_20px_40px_rgba(37,99,235,0.25)] hover:scale-[1.02] active:scale-95 text-xl italic`}
                                            >
                                                Katso paketit
                                            </Link>
                                            <Link
                                                href="/tarjous#pelkka-sivu"
                                                className={`${playfair.className} flex-1 py-5 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-all rounded-2xl flex items-center justify-center hover:scale-[1.02] active:scale-95 text-xl italic`}
                                            >
                                                Mitä sillä saa?
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-xl mx-auto mt-24 border-t border-slate-800 pt-16">
                        {!formSubmitted ? (
                            <>
                                <div className="text-center mb-10">
                                    <h3 className={`${playfair.className} text-3xl md:text-4xl font-bold text-white mb-4 italic`}>Kysy lisää tai pyydä <span className="text-cyan-400">ilmainen kartoitus</span></h3>
                                    <p className={`${inter.className} text-slate-400 text-lg font-light italic`}>
                                        {isPremium ? (
                                            "Teemme kanssasi aina maksuttoman 15 minuutin arviointipuhelun, jossa katsomme tarpeesi ja jonka perusteella annamme sinulle pitävän, kiinteän tarjouksen. Näin maksat vain siitä, mitä todella tarvitset."
                                        ) : (
                                            "Yhteydenotto ei sido sinua mihinkään. Vastaamme pian – katsotaan yhdessä miten voimme auttaa yritystäsi löytymään paremmin."
                                        )}
                                    </p>
                                </div>
                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input aria-label="Nimi / Yritys" type="text" name="name" placeholder="Nimi / Yritys" required className="bg-slate-900/50 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 outline-none w-full min-w-0" />
                                        <input aria-label="Sähköposti" type="email" name="email" placeholder="Sähköposti" required className="bg-slate-900/50 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 outline-none w-full min-w-0" />
                                    </div>
                                    <textarea aria-label="Viesti" name="message" rows={3} placeholder="Miten voin auttaa?" className="w-full min-w-0 bg-slate-900/50 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 outline-none" defaultValue="Olen kiinnostunut kuulemaan lisää. Tämä on alustava kysely eikä sido vielä mihinkään."></textarea>
                                    <button type="submit" className={`${playfair.className} w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl transition-all shadow-[0_15px_30px_rgba(37,99,235,0.3)] hover:scale-[1.01] active:scale-[0.99] text-xl italic`}>
                                        Pyydä lisätietoja tai arvio
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="bg-slate-900 border border-cyan-500/30 p-12 rounded-[2rem] text-center shadow-2xl animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-cyan-500 text-slate-950 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/30">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Kiitos viestistäsi!</h3>
                                <p className="text-cyan-400 text-lg font-medium">Laitoimme viestin eteenpäin. Olemme sinuun yhteydessä pian!</p>
                            </div>
                        )}
                    </div>

                </div>
            </section >
        </div >
    );
}
