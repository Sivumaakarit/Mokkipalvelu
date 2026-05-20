"use client";

import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";
import { useState } from "react";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export function PricingTiers() {
    const [isAnnual, setIsAnnual] = useState(false);
    return (
        <section className={`py-24 px-4 bg-slate-50 ${inter.className}`} id="hinnasto">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-4 text-blue-900`}>
                        Mitä saat tällä hinnalla?
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Valitse tarpeisiisi sopiva malli. Säästä valitsemalla vuosilaskutus.
                    </p>
                </div>

                {/* Features Box First */}
                <div className="max-w-4xl mx-auto bg-slate-100/50 rounded-2xl p-6 md:p-8 mb-12 border border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Kaikkiin ylläpitopaketteihin sisältyy huippuunsa viritetty sivusto:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex gap-3 text-slate-700 text-sm items-start">
                            <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <span className="leading-snug"><strong className="text-slate-900">1–3 myyntioptimoitua sivua:</strong> Etusivu, palvelut ja yhteystiedot, valmiina tekemään tulosta.</span>
                        </div>
                        <div className="flex gap-3 text-slate-700 text-sm items-start">
                            <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <span className="leading-snug"><strong className="text-slate-900">Huippuunsa viritetty nopeus:</strong> Salama-nopea latausaika takaa paremman Google-näkyvyyden.</span>
                        </div>
                        <div className="flex gap-3 text-slate-700 text-sm items-start">
                            <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <span className="leading-snug"><strong className="text-slate-900">Täysi mobiilioptimointi:</strong> Toimii upeasti puhelimella, tabletilla ja tietokoneella.</span>
                        </div>
                        <div className="flex gap-3 text-slate-700 text-sm items-start">
                            <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <span className="leading-snug"><strong className="text-slate-900">Helpot yhteydenottotavat:</strong> Ammattimainen lomake ja suorat painikkeet tekevät yhteydenotosta asiakkaalle vaivatonta.</span>
                        </div>
                    </div>
                </div>

                {/* Toggle Kytkin */}
                <div className="flex flex-col items-center justify-center mb-16">
                    <div className="bg-slate-200/70 p-1.5 rounded-full inline-grid grid-cols-2 relative shadow-[inset_0_2px_6px_rgba(0,0,0,0.06)] mb-3 group">
                        <button 
                            onClick={() => setIsAnnual(false)}
                            className={`relative z-10 px-6 sm:px-8 py-3 rounded-full text-sm font-bold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 flex items-center justify-center ${!isAnnual ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            Kuukausittain
                        </button>
                        <button 
                            onClick={() => setIsAnnual(true)}
                            className={`relative z-10 px-6 sm:px-8 py-3 rounded-full text-sm font-bold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 flex items-center justify-center gap-2 ${isAnnual ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            Vuosittain 
                            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold transition-colors duration-300 ${isAnnual ? 'bg-green-100 text-green-700 shadow-sm' : 'bg-slate-300/50 text-slate-500 group-hover:bg-slate-300/80 group-hover:text-slate-700'}`}>
                                -33%
                            </span>
                        </button>
                        {/* Aktiivisen napin tausta */}
                        <div 
                            className={`absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-0.375rem)] bg-white rounded-full transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_2px_8px_rgba(0,0,0,0.12)] border border-slate-200/80 ${isAnnual ? 'translate-x-full' : 'translate-x-0'}`}
                        />
                    </div>
                    <div className={`text-sm font-medium transition-all duration-300 ${isAnnual ? 'text-green-600 opacity-100 scale-100' : 'text-slate-500 opacity-80 scale-95'}`}>
                        {isAnnual ? '✨ Etusi valittuna: Avausmaksu -100 € & kuukausimaksu -33 %' : 'Vinkki: Vuosilaskutuksella säästät myös avausmaksusta 100 €!'}
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
                    {/* Tier 2: 50 malli (Suositelluin) */}
                    <div className="bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-700 relative flex flex-col cursor-default group hover:shadow-xl hover:-translate-y-2 hover:shadow-cyan-500/10 transition-all duration-300">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
                            <span className="bg-cyan-500 text-slate-900 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                                Suosituin valinta
                            </span>
                        </div>
                        <div className="mb-8 mt-2">
                            <h3 className="text-xl font-bold text-white mb-2">Ylläpito & Turva – Perus</h3>
                            <div className="flex flex-col mb-4">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl md:text-5xl font-extrabold text-white">{isAnnual ? "33 €" : "50 €"}</span>
                                    <span className="text-slate-400 text-base md:text-lg">/ kk</span>
                                </div>
                                <span className="text-cyan-400/80 text-xs mt-1 font-medium">{isAnnual ? "Laskutetaan kerralla 399 € / vuosi. (Säästä 201 €/v)." : "12 kk sopimuskausi."}</span>
                            </div>

                            <div className="bg-slate-800/80 rounded-xl p-4 border border-cyan-900/40 mb-4 shadow-inner relative overflow-hidden">
                                {isAnnual && (
                                   <div className="absolute top-0 right-0 bg-green-500 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">ALE</div> 
                                )}
                                <div className="flex justify-between items-center mb-1 gap-2">
                                    <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider">Sivuston avausmaksu</span>
                                    <span className="text-lg font-bold text-white whitespace-nowrap">{isAnnual ? "399 €" : "499 €"}</span>
                                </div>
                                <p className="text-xs text-slate-400 line-through decoration-slate-500 mr-2 inline-block">Norm. 990 €</p>
                                <p className="text-xs text-slate-400 inline-block">Kertamaksu.</p>
                            </div>

                            <p className="text-slate-400 text-sm">Huoleton avaimet käteen -ratkaisu julkaisun jälkeen.</p>
                        </div>

                        <div className="space-y-4 flex-grow mb-8">
                            <ul className="space-y-4">
                                <li className="flex gap-3 text-slate-300 text-sm items-start">
                                    <svg className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span className="leading-snug"><strong className="text-white">Täysi palvelin & webhotelli:</strong> Sivustosi toimii turvallisella ja huippunopealla pilvipalvelimella.</span>
                                </li>
                                <li className="flex gap-3 text-slate-300 text-sm items-start">
                                    <svg className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span className="leading-snug"><strong className="text-white">Täysi asennus nettiin:</strong> Hoidamme domainin, web-hotellin ja julkaisun puolestasi.</span>
                                </li>
                                <li className="flex gap-3 text-slate-300 text-sm items-start">
                                    <svg className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span className="leading-snug"><strong className="text-white">Tekninen suojaus:</strong> SSL-salaus, tietoturva, automaattiset varmuuskopiot ja valvonta.</span>
                                </li>
                                <li className="flex gap-3 text-slate-300 text-sm items-start">
                                    <svg className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span className="leading-snug"><strong className="text-white">Kuukausittainen päivitys:</strong> Sisältää yhden pienen muutoksen (esim. uusi kuva tai teksti).</span>
                                </li>
                                <li className="flex gap-3 text-slate-300 text-sm items-start">
                                    <svg className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span className="leading-snug"><strong className="text-white">Luotettava tuki:</strong> Henkilökohtainen tuki ja vasteaika max 2 arkipäivää (lisätyöt 75 €/h).</span>
                                </li>
                            </ul>
                        </div>

                        <Link href={`/tilaa-perus?billing=${isAnnual ? 'vuosi' : 'kuukausi'}`} className="w-full block text-center bg-cyan-500 text-slate-900 font-bold py-4 rounded-xl hover:bg-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all mt-auto transform hover:-translate-y-0.5">
                            Valitse Sivu + Perusturva
                        </Link>
                    </div>

                    {/* Tier 3: 150 malli */}
                    <div className="bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-600 relative flex flex-col cursor-default group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-white mb-2">Ylläpito & Turva – Plus</h3>
                            <div className="flex flex-col mb-4">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl md:text-5xl font-extrabold text-blue-500">{isAnnual ? "99 €" : "150 €"}</span>
                                    <span className="text-slate-400 text-base md:text-lg">/ kk</span>
                                </div>
                                <span className="text-blue-500/80 text-xs mt-1 font-medium">{isAnnual ? "Laskutetaan kerralla 1 188 € / vuosi. (Säästä 612 €/v)." : "12 kk sopimuskausi."}</span>
                            </div>

                            <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/50 mb-4 shadow-inner relative overflow-hidden">
                                {isAnnual && (
                                   <div className="absolute top-0 right-0 bg-green-500 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">ALE</div> 
                                )}
                                <div className="flex justify-between items-center mb-1 gap-2">
                                    <span className="text-xs text-blue-500 font-bold uppercase tracking-wider">Sivuston avausmaksu</span>
                                    <span className="text-lg font-bold text-white whitespace-nowrap">{isAnnual ? "399 €" : "499 €"}</span>
                                </div>
                                <p className="text-xs text-slate-400 line-through decoration-slate-500 mr-2 inline-block">Norm. 990 €</p>
                                <p className="text-xs text-slate-400 inline-block">Kertamaksu.</p>
                            </div>

                            <p className="text-slate-400 text-sm">Aktiivista näkyvyyttä ja jatkuvaa tukea kasvulle.</p>
                        </div>

                        <div className="space-y-4 flex-grow mb-8">
                            <ul className="space-y-4">
                                <li className="flex gap-3 text-slate-300 text-sm items-start">
                                    <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span className="leading-snug"><strong className="text-white">Kaikki Perus-tason edut:</strong> Sisältää kaiken domain-asennuksesta ja tietoturvasta varmuuskopioihin.</span>
                                </li>
                                <li className="flex gap-3 text-slate-300 text-sm items-start">
                                    <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span className="leading-snug"><strong className="text-white">Asiantuntijapankki (2 h/kk):</strong> Oma ”digiassistenttisi” – käytä aika sisältöjen päivitykseen, ilmeen viilaukseen tai analytiikkaan.</span>
                                </li>
                                <li className="flex gap-3 text-slate-300 text-sm items-start">
                                    <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span className="leading-snug"><strong className="text-white">Jatkuva laadunvalvonta:</strong> Varmistamme säännöllisesti sivustosi nopeuden ja teknisen kunnon (SEO), jotta näkyvyys Googlessa ja tekoälyhauissa säilyy vahvana.</span>
                                </li>
                                <li className="flex gap-3 text-slate-300 text-sm items-start">
                                    <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span className="leading-snug"><strong className="text-white">Priorisoitu tuki:</strong> Olet aina jonon kärjessä. Vasteaikamme on erittäin nopea, max 24 tuntia.</span>
                                </li>
                                <li className="flex gap-3 text-slate-300 text-sm items-start">
                                    <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span className="leading-snug"><strong className="text-white">Läpinäkyvä seuranta:</strong> Saat tiedon tuntien käytöstä hyvissä ajoin (lisätyöt 75 €/h).</span>
                                </li>
                            </ul>
                        </div>

                        <Link href={`/tilaa-plus?billing=${isAnnual ? 'vuosi' : 'kuukausi'}`} className="w-full block text-center py-4 rounded-xl bg-blue-500 text-white font-bold hover:bg-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all mt-auto transform hover:-translate-y-0.5">
                            Valitse Sivu + Plus-paketti
                        </Link>
                    </div>

                </div>

                <div className="max-w-4xl mx-auto mt-10 text-center">
                    <Link href="/tilaa-pelkka-sivu" className="text-sm text-slate-500 hover:text-blue-600 underline underline-offset-4 transition-colors">
                        Haluatko hoitaa julkaisun, palvelimet ja koodin päivitykset täysin itse? Katso Pelkkä sivu -koodipaketti (kertamaksu 990 €).
                    </Link>
                </div>

                {/* Delivery Terms */}
                <div className="max-w-4xl mx-auto mt-16 text-sm text-slate-500 space-y-4">
                    <p className="font-semibold text-slate-700">Tärkeää tietoa hinnoittelusta:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Kaikkiin hintoihin lisätään voimassa oleva arvonlisävero (alv 25,5 %).</li>
                        <li><strong className="text-slate-700">Sopimuskausi:</strong> Alennettu avausmaksu (399 €) edellyttää 12 kuukauden ylläpitosopimusta valitulla tasolla.</li>
                        <li>Ylläpito- ja Turvapaketit voidaan laskuttaa aloitusmaksulla yrityksen tarpeiden mukaan. 7 päivän toimitusaika koskee normaaleja onepagereita heti materiaalien saavuttua.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
