"use client";

import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export function PricingTiers() {
    const [isAnnual, setIsAnnual] = useState(true);
    const isPremium = siteConfig.pricingStrategy === "premium";
    const preset = siteConfig.pricingPresets[siteConfig.pricingStrategy];

    // Helper functions for dynamic pricing
    const parsePrice = (priceStr: string) => {
        return parseInt(priceStr.replace(/[^0-9]/g, ""), 10);
    };

    const formatPrice = (val: number) => {
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " €";
    };

    const setupPriceVal = isAnnual ? parsePrice(preset.starterSetup) : parsePrice(preset.growthSetup);
    
    // Perus calculations
    const basicYllapitoVal = isAnnual ? parsePrice(preset.basicAnnual) : parsePrice(preset.basicMonthly);
    const basicTotalVal = (basicYllapitoVal * 12) + setupPriceVal;

    // Plus calculations
    const plusYllapitoVal = isAnnual ? parsePrice(preset.plusAnnual) : parsePrice(preset.plusMonthly);
    const plusTotalVal = (plusYllapitoVal * 12) + setupPriceVal;

    return (
        <section className={`py-24 px-4 bg-slate-50 ${inter.className}`} id="hinnasto">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-4 text-blue-950`}>
                        {isPremium ? (
                            <>
                                Verkkosivustot ja ylläpito
                                <span className="block text-xl font-medium text-slate-500 mt-2 font-sans tracking-wide">
                                    Reilulla & läpinäkyvällä hinnoittelulla
                                </span>
                            </>
                        ) : (
                            <>
                                Alkaen 33 € /kk <span className="text-xl font-normal text-slate-500 lowercase">(+ alv)</span>
                            </>
                        )}
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        {isPremium ? (
                            <>
                                Säästä vuosisopimuksella ja varmista yrityksellesi salamannopea sekä luotettava nettinäkyvyys. Me hoidamme kaiken tekniikan ja asennukset puolestasi, jotta sinä voit keskittyä omaan ydinosaamiseesi.
                                <span className="text-slate-900 font-bold block mt-2 text-lg md:text-xl">
                                    Sivuston rakennusmaksu alkaen 990 € (+ alv) – lopullinen hinta määräytyy aina tarpeiden ja laajuuden mukaan.
                                </span>
                                <span className="text-slate-600 block mt-4 text-base md:text-lg italic border-t border-slate-200/60 pt-4 max-w-2xl mx-auto">
                                    Teemme kanssasi aina maksuttoman 15 minuutin arviointipuhelun, jossa katsomme tarpeesi ja jonka perusteella annamme sinulle pitävän, kiinteän tarjouksen. Näin maksat vain siitä, mitä todella tarvitset.
                                </span>
                            </>
                        ) : "Valitse tarpeisiisi sopiva malli. Säästä valitsemalla vuosilaskutus."}
                    </p>
                    {isPremium && (
                        <div className="mt-6 flex justify-center">
                            <Link href="#tilaa" className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-slate-950 px-6 py-3.5 rounded-xl font-bold text-base shadow-md transition-all transform hover:-translate-y-0.5 active:scale-95 uppercase tracking-wider">
                                <svg className="w-5 h-5 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                Varaa maksuton arviointi
                            </Link>
                        </div>
                    )}
                </div>

                {/* Features Box First */}
                <div className="max-w-4xl mx-auto bg-slate-100/50 rounded-2xl p-6 md:p-8 mb-12 border border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Kaikkiin ylläpitopaketteihin sisältyy huippuunsa viritetty sivusto:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex gap-3 text-slate-700 text-sm items-start">
                            <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <span className="leading-snug"><strong className="text-slate-900">Myyntioptimoidut sivut:</strong> Etusivu, palvelut, tarinasi, referenssisi, yhteystiedot, hinnastosi jne. Kaikki valmiina tekemään tulosta.</span>
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
                    <div className="bg-slate-200/60 p-1.5 rounded-full inline-grid grid-cols-2 relative shadow-[inset_0_2px_8px_rgba(0,0,0,0.08)] border border-slate-300/30 mb-3 group cursor-pointer hover:scale-[1.02] hover:border-slate-300/60 transition-all duration-300">
                        <button 
                            onClick={() => setIsAnnual(false)}
                            className={`relative z-10 px-6 sm:px-8 py-3 rounded-full text-sm font-bold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 flex items-center justify-center cursor-pointer ${!isAnnual ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            Kuukausittain
                        </button>
                        <button 
                            onClick={() => setIsAnnual(true)}
                            className={`relative z-10 px-6 sm:px-8 py-3 rounded-full text-sm font-bold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 flex items-center justify-center gap-2 cursor-pointer ${isAnnual ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            Vuosittain 
                            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold transition-colors duration-300 ${isAnnual ? 'bg-green-100 text-green-700 shadow-sm' : 'bg-slate-300/50 text-slate-500 group-hover:bg-slate-300/80 group-hover:text-slate-700'}`}>
                                {isPremium ? "-30%" : "-33%"}
                            </span>
                        </button>
                        {/* Aktiivisen napin tausta */}
                        <div 
                            className={`absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-0.375rem)] bg-white rounded-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_4px_12px_rgba(0,0,0,0.15)] border ${isAnnual ? 'border-green-300/80 translate-x-full' : 'border-slate-200/90 translate-x-0'}`}
                        />
                    </div>
                    <p className="text-sm font-medium text-slate-500 max-w-2xl text-center mt-3 leading-relaxed">
                        Ylläpito- ja Turvapaketit voidaan laskuttaa kuukausittain tai kerralla vuodeksi eteenpäin, jolloin <span className="text-green-600 font-semibold">vuosittainen laskutus säästää huomattavasti</span> kuukausihinnoissa.
                    </p>
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
                                <div className="flex flex-wrap items-center gap-3">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl md:text-5xl font-extrabold text-white">{isAnnual ? preset.basicAnnual : preset.basicMonthly}</span>
                                        <span className="text-slate-400 text-base md:text-lg">/ kk <span className="text-xs font-normal text-slate-500 lowercase">(+ alv)</span></span>
                                    </div>
                                    {isAnnual && !isPremium && (
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-slate-400 line-through">Norm. {preset.basicMonthly}</span>
                                            <span className="bg-green-500 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Ale</span>
                                        </div>
                                    )}
                                </div>
                                 <span className="text-cyan-400/80 text-xs mt-1.5 font-medium">{isAnnual ? (isPremium ? `Vuosimaksulla (49 € × 12 + rakennusmaksu 990 €). Jatkossa ylläpito jatkuu toistaiseksi voimassaolevana 69 €/kk + alv (tai voit valita uuden vuosijakson).` : `Säästö-ale 1. vuosi kerralla (33 € × 12 + rakennusmaksu). Jatkossa ylläpito jatkuu toistaiseksi voimassaolevana 50 €/kk + alv (tai voit valita uuden vuosijakson).`) : `12 kk sopimuskausi, jonka jälkeen jatkuu ${preset.basicMonthly}/kk + alv.`}</span>
                            </div>

                            <div className="bg-slate-800/80 rounded-xl p-4 border border-cyan-900/40 mb-4 shadow-inner relative overflow-hidden">
                                <div className="flex justify-between items-center mb-1 gap-2">
                                    <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider">Sivuston rakennusmaksu</span>
                                    <span className="text-lg font-bold text-white whitespace-nowrap">
                                        {isPremium ? "Alk. " : ""}{isAnnual ? preset.starterSetup : preset.growthSetup} <span className="text-xs font-normal text-slate-400 lowercase">+ alv</span>
                                    </span>
                                </div>
                                <p className="text-xs text-slate-400 inline-block">{isPremium ? "Kertamaksuesimerkki." : "Kertamaksu."}</p>
                            </div>

                            {/* Ensimmäisen vuoden kokonaiskustannus */}
                            <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/50 mb-4 shadow-inner">
                                <div className="flex justify-between items-center text-xs text-slate-400 mb-1">
                                    <span>{isPremium ? "1. vuoden esimerkkihinta:" : "1. vuoden kokonaishinta:"}</span>
                                    <span className="font-semibold text-slate-300">({isAnnual ? `12 × ${preset.basicAnnual} + ${preset.starterSetup}` : `12 × ${preset.basicMonthly} + ${preset.growthSetup}`}) + alv</span>
                                </div>
                                <div className="flex justify-between items-baseline">
                                    <span className="text-xs font-bold text-slate-300">{isPremium ? "Yhteensä 1. vuosi (alk.):" : "Yhteensä 1. vuosi:"}</span>
                                    <span className="text-lg font-extrabold text-emerald-400">{formatPrice(basicTotalVal)} <span className="text-[10px] text-slate-400 font-normal font-sans">+ alv</span></span>
                                </div>
                            </div>

                            <p className="text-slate-400 text-sm">Huoleton avaimet käteen -ratkaisu julkaisun jälkeen.</p>
                        </div>

                        <div className="space-y-4 flex-grow mb-8">
                            <ul className="space-y-4">
                                <li className="flex gap-3 text-slate-300 text-sm items-start">
                                    <svg className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span className="leading-snug"><strong className="text-white">Täyden palvelun webhotelli:</strong> Sivustosi toimii turvallisella ja huippunopealla pilvipalvelimella.</span>
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
                                    <span className="leading-snug"><strong className="text-white">Kuukausittainen päivitys:</strong> Sisältää yhden pienen muutoksen (esim. uusi kuva, teksti tai vaikkapa "tarjousmainos").</span>
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
                                <div className="flex flex-wrap items-center gap-3">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl md:text-5xl font-extrabold text-blue-400">{isAnnual ? preset.plusAnnual : preset.plusMonthly}</span>
                                        <span className="text-slate-400 text-base md:text-lg">/ kk <span className="text-xs font-normal text-slate-500 lowercase">(+ alv)</span></span>
                                    </div>
                                    {isAnnual && !isPremium && (
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-slate-400 line-through">Norm. {preset.plusMonthly}</span>
                                            <span className="bg-green-500 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Ale</span>
                                        </div>
                                    )}
                                </div>
                                <span className="text-blue-400/80 text-xs mt-1.5 font-medium">{isAnnual ? (isPremium ? `Vuosimaksulla (129 € × 12 + rakennusmaksu 990 €). Jatkossa ylläpito jatkuu toistaiseksi voimassaolevana 149 €/kk + alv (tai voit valita uuden vuosijakson).` : `Säästö-ale 1. vuosi kerralla (99 € × 12 + rakennusmaksu). Jatkossa ylläpito jatkuu toistaiseksi voimassaolevana 150 €/kk + alv (tai voit valita uuden vuosijakson).`) : `12 kk sopimuskausi, jonka jälkeen jatkuu ${preset.plusMonthly}/kk + alv.`}</span>
                            </div>

                            <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/50 mb-4 shadow-inner relative overflow-hidden">
                                <div className="flex justify-between items-center mb-1 gap-2">
                                    <span className="text-xs text-blue-400 font-bold uppercase tracking-wider">Sivuston rakennusmaksu</span>
                                    <span className="text-lg font-bold text-white whitespace-nowrap">
                                        {isPremium ? "Alk. " : ""}{isAnnual ? preset.starterSetup : preset.growthSetup} <span className="text-xs font-normal text-slate-400 lowercase">+ alv</span>
                                    </span>
                                </div>
                                <p className="text-xs text-slate-400 inline-block">{isPremium ? "Kertamaksuesimerkki." : "Kertamaksu."}</p>
                            </div>

                            {/* Ensimmäisen vuoden kokonaiskustannus */}
                            <div className="bg-slate-700/20 rounded-xl p-4 border border-slate-650/40 mb-4 shadow-inner">
                                <div className="flex justify-between items-center text-xs text-slate-400 mb-1">
                                    <span>{isPremium ? "1. vuoden esimerkkihinta:" : "1. vuoden kokonaishinta:"}</span>
                                    <span className="font-semibold text-slate-300">({isAnnual ? `12 × ${preset.plusAnnual} + ${preset.starterSetup}` : `12 × ${preset.plusMonthly} + ${preset.growthSetup}`}) + alv</span>
                                </div>
                                <div className="flex justify-between items-baseline">
                                    <span className="text-xs font-bold text-slate-300">{isPremium ? "Yhteensä 1. vuosi (alk.):" : "Yhteensä 1. vuosi:"}</span>
                                    <span className="text-lg font-extrabold text-emerald-400">{formatPrice(plusTotalVal)} <span className="text-[10px] text-slate-400 font-normal font-sans">+ alv</span></span>
                                </div>
                            </div>

                            <p className="text-slate-400 text-sm">Aktiivista näkyvyyttä ja jatkuvaa tukea kasvulle.</p>
                        </div>

                        <div className="space-y-4 flex-grow mb-8">
                            <ul className="space-y-4">
                                <li className="flex gap-3 text-slate-300 text-sm items-start">
                                    <svg className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span className="leading-snug"><strong className="text-white">Kaikki Perus-tason edut:</strong> Sisältää kaiken domain-asennuksesta ja tietoturvasta varmuuskopioihin.</span>
                                </li>
                                <li className="flex gap-3 text-slate-300 text-sm items-start">
                                    <svg className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span className="leading-snug">
                                        <strong className="text-white">Asiantuntijapankki (2 h/kk):</strong> Oma ”digiassistenttisi” – käytä aika sisältöjen päivitykseen, ilmeen viilaukseen tai analytiikkaan.
                                        <span className="text-slate-400 block mt-1 text-xs leading-normal">
                                            Laskettu erittäin edulliseksi osaksi kuukausipakettia (säästät erillisiin, tyypillisesti 75–120 €/h kehittäjähintoihin ja aloitusmaksuihin verrattuna). Saat oman luottotekijäsi ilman lisälaskutuksen huolia.
                                        </span>
                                    </span>
                                </li>
                                <li className="flex gap-3 text-slate-300 text-sm items-start">
                                    <svg className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span className="leading-snug"><strong className="text-white">Jatkuva laadunvalvonta:</strong> Varmistamme säännöllisesti sivustosi nopeuden ja teknisen kunnon (SEO), jotta näkyvyys Googlessa ja tekoälyhauissa säilyy vahvana.</span>
                                </li>
                                <li className="flex gap-3 text-slate-300 text-sm items-start">
                                    <svg className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span className="leading-snug"><strong className="text-white">Priorisoitu tuki:</strong> Olet aina jonon kärjessä. Vasteaikamme on erittäin nopea, max 24 tuntia arkipäivisin.</span>
                                </li>
                                <li className="flex gap-3 text-slate-300 text-sm items-start">
                                    <svg className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
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
                        <li>Erilliset lisätyöt ja ylläpitopaketin ylittävät asiantuntijatunnit (lisätyöhinnasto 75 €/h + alv) veloitetaan aina alkavalta tunnilta.</li>
                        <li><strong className="text-slate-700">Vasteajat ja loma-ajat:</strong> Ilmoitetut vasteajat (Perus max 2 arkipäivää, Plus max 24 h) koskevat arkipäiviä. Mahdollisista loma-ajoista (kuten kesälomat tai arkipyhät) ilmoitetaan asiakkaille aina hyvissä ajoin etukäteen.</li>
                        <li><strong className="text-slate-700">Sopimuskausi:</strong> Rakennusmaksu on kertaluonteinen sivuston yksilöllisen suunnittelun ja koodauksen kustannus. Ylläpitosopimus solmitaan 12 kuukauden määräajaksi, jonka jälkeen se jatkuu toistaiseksi voimassaolevana 3 kuukauden irtisanomisajalla kuukausihintaan (Perus: {preset.basicMonthly}, Plus: {preset.plusMonthly} + alv), tai voit valita uuden, tuolloin tarjolla olevan vuosisopimuksen.</li>
                        <li>Ylläpito- ja Turvapaketit voidaan laskuttaa kuukausittain tai kerralla vuodeksi eteenpäin, jolloin vuosittainen laskutus säästää huomattavasti kuukausihinnoissa ja vähentää rakennusmaksua 100 €.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
