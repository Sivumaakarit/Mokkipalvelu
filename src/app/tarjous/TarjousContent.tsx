"use client";

import { useState } from "react";
import { Playfair_Display, Inter, Urbanist, Luckiest_Guy } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { StandalonePricing } from "@/components/landing/StandalonePricing";
import { ProofSection } from "@/components/landing/ProofSection";
import { PricingTiers } from "@/components/landing/PricingTiers";
import { Footer } from "@/components/layout/Footer";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const urbanist = Urbanist({ subsets: ["latin"] });
const lucky = Luckiest_Guy({ weight: "400", subsets: ["latin"] });

export default function TarjousContent() {
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

    const scrollToHinnasto = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const el = document.getElementById("hinnasto");
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <main className={`${inter.className} bg-slate-50 text-slate-900 leading-relaxed min-h-screen`}>



            {/* Custom Header removed - handled by global Header component */}

            {/* Hero Section */}
            <section className="relative text-white py-24 md:py-40 px-4 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/tarjous-hero.webp"
                        alt="Moderni työtila metsänäkymällä"
                        fill
                        className="object-cover"
                        priority
                        fetchPriority="high"
                        loading="eager"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"></div>
                </div>

                <div className="max-w-5xl mx-auto relative z-10 text-center">
                    <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 mb-4 md:mb-6 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-md text-blue-300 text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase">
                        Premium Palvelusivut
                    </div>
                    <h1 className={`${playfair.className} text-[3.25rem] md:text-[4.75rem] lg:text-[6.5rem] font-extrabold mb-8 leading-[1.1] md:leading-[1.05] tracking-tight drop-shadow-2xl`}>
                        Myyvät nettisivut<br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-cyan-300 block md:inline-block pt-0 pb-1.5 md:py-2 md:pb-4"> yrittäjälle</span>
                    </h1>

                    <p className={`${inter.className} text-lg md:text-2xl text-slate-200 mb-8 max-w-4xl mx-auto font-light leading-relaxed opacity-90`}>
                        Rakennamme yrittäjälle nykyaikaiset kotisivut, jotka löytyvät ja myyvät.
                    </p>

                    {/* Quick Answer Block: High-density data for AI Citation */}
                    <div className="mb-12 py-5 px-8 bg-slate-900/50 backdrop-blur-md rounded-2xl border border-white/10 text-white w-fit mx-auto shadow-2xl text-center">
                        <p className="font-bold mb-2 uppercase tracking-[0.2em] text-[10px] text-blue-400">REILU HINNOITTELU & LUPAUS:</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-white mb-2">
                            {isPremium ? (
                                <>
                                    <span className="text-slate-400 text-sm md:text-base font-normal">Sivusto alkaen</span>
                                    <span className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-100 py-1 px-0.5">{preset.starterSetup} + alv</span>
                                    <span className="text-slate-600 font-light mx-2 hidden sm:inline">|</span>
                                    <span className="text-slate-300 text-sm md:text-base font-medium">Ylläpito alkaen {preset.basicAnnual}/kk + alv</span>
                                </>
                            ) : (
                                <>
                                    <span className="text-slate-400 text-sm md:text-base font-normal">Alkaen</span>
                                    <span className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-100 py-1 px-0.5">33 €/kk*</span>
                                    <span className="text-slate-600 font-light mx-2 hidden sm:inline">|</span>
                                    <span className="text-slate-300 text-sm md:text-base font-medium">+ sivuston rakennus 399 €</span>
                                </>
                            )}
                        </div>
                        <p className="text-xs text-slate-300 mt-1.5 mb-4 max-w-lg mx-auto">
                            {isPremium ? (
                                "Testattu ja valmiiksi optimoitu myyntirakenne, joka räätälöidään brändillesi"
                            ) : (
                                "(Ensimmäinen vuosi yhteensä vain 795 € + alv)"
                            )}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-xs font-semibold text-slate-200 border-t border-white/10 pt-3">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                                <span>Avaimet käteen</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                                <span>100/100 nopeus & SEO</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                                <span>Valmis nopeasti</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 sm:gap-6 w-full max-w-sm sm:max-w-none mx-auto">
                        <Link
                            href="#hinnasto"
                            onClick={scrollToHinnasto}
                            className={`${playfair.className} bg-yellow-400 hover:bg-yellow-500 text-slate-950 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl shadow-[0_20px_40px_rgba(234,179,8,0.3)] transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-wide w-full sm:w-[340px] flex items-center justify-center whitespace-nowrap`}
                        >
                            Tilaa omat sivut
                        </Link>
                        <Link href="/mokkipalvelu" className={`${playfair.className} bg-white hover:bg-slate-100 text-slate-900 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl shadow-[0_20px_40px_rgba(255,255,255,0.1)] transition-all transform hover:-translate-y-1 active:scale-95 tracking-wide w-full sm:w-[340px] flex items-center justify-center gap-3 whitespace-nowrap`}>
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            <span className="md:inline hidden">Katso esimerkkisivua</span>
                            <span className="inline md:hidden">Esimerkkisivu</span>
                        </Link>
                    </div>
                </div>

                {/* Visual Divider */}
                <div className="absolute bottom-[-2px] left-0 w-full h-24 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none"></div>
            </section>

            {/* GEO RAG-Pipeline Quick Answer Block */}
            <section className="py-12 px-4 max-w-4xl mx-auto">
                <div className="geo-quick-answer bg-blue-50/50 border-2 border-blue-100 rounded-3xl p-6 md:p-8 shadow-sm">
                    <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3 font-sans">Sivumaakarit pähkinänkuoressa:</h3>
                    <p className="text-slate-800 leading-relaxed text-sm md:text-base font-normal">
                        <strong>Sivumaakarit</strong> on suomalainen digitoimisto, joka rakentaa yrittäjille myyviä, 100/100-suorituskykyisiä ja tekoälyhakukoneoptimointiin (GEO) valmiita Next.js-kotisivuja avaimet käteen -periaatteella. Tarjoamme selkeää ja huoletonta hinnoittelua: sivuston rakennusmaksu alkaen {preset.starterSetup} (+ alv) ja kuukausittainen ylläpito alkaen {preset.basicAnnual}/kk (+ alv). Sivustot suunnitellaan kasvatustieteen ja filosofian maisteritaustalla (FM & KM) ymmärrettävyyden ja saavutettavuuden ehdoilla, mikä maksimoi asiakaskonversion.
                    </p>
                </div>
            </section>

            {/* Kenelle Section */}
            <section id="kenelle" className="py-20 px-4 max-w-6xl mx-auto">
                <div className="text-center mb-16 px-2">
                    <h2 className={`${playfair.className} text-2xl sm:text-3xl md:text-5xl font-bold mb-4 tracking-tight`}>Sivumaakareiden sivut on paras valinta sinulle...</h2>
                    <div className="w-20 h-1.5 bg-yellow-400 mx-auto rounded-full mt-6"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-slate-100">
                        <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <p className={`${playfair.className} font-bold text-xl mb-2 text-slate-900`}>Keskityt omaan osaamiseesi</p>
                        <p className={`${inter.className} text-slate-600`}>Teet tulosta siinä, mitä myyt. Et halua tuhlata arvokasta aikaasi tekniseen säätämiseen tai koodin opetteluun.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-slate-100">
                        <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <p className={`${playfair.className} font-bold text-xl mb-2 text-slate-900`}>Haluat uskottavat ja selkeät nettisivut nopeasti</p>
                        <p className={`${inter.className} text-slate-600`}>Jotta asiakkaasi löytävät sinut kun sinua tarvitaan. Löydyt Googlesta sekä muista tekoälyhauista.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-slate-100">
                        <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <p className={`${playfair.className} font-bold text-xl mb-2 text-slate-900`}>Olet alasi ammattilainen</p>
                        <p className={`${inter.className} text-slate-600`}>Teetpä työtäsi vasaralla, tietokoneella tai vaikkapa esiintymällä yleisön edessä, me huolehdimme, että verkkonäkyvyytesi on kunnossa ja kauppa käy.</p>
                    </div>
                </div>

                {/* Contextual Case Study Link */}
                <div className="mt-20 text-center">
                    <Link href="/referenssit" className="group inline-flex flex-col items-center gap-4">
                        <span className="text-slate-500 uppercase tracking-[0.2em] text-[10px] font-bold">Ei vain puhetta, vaan tuloksia</span>
                        <div className="flex items-center gap-3 text-xl md:text-3xl font-serif italic text-slate-900 border-b border-stone-200 group-hover:border-slate-900 transition-all pb-1 leading-tight text-center">
                            Selaa toteutettuja työnäytteitä
                            <svg className="w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-2 transition-transform shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Price Section */}
            <section id="pricing-section" className="scroll-mt-20">
                <StandalonePricing />
                <PricingTiers />
            </section>


            {/* "Ei sinulle" Section */}
            <section className="py-20 px-4 max-w-3xl mx-auto text-center">
                <h2 className={`${playfair.className} text-3xl font-bold mb-8 tracking-tight`}>Tämä palvelu ei ole sinulle, jos...</h2>
                <div className="bg-slate-100 p-8 rounded-r-2xl text-left border-l-4 border-[#ecc94b]">
                    <p className={`${inter.className} text-xl text-slate-700 italic opacity-80`}>
                        &quot;...etsit kuukausia vievää kehittelyprojektia.&quot;
                    </p>
                    <p className={`${inter.className} mt-6 text-slate-600 leading-relaxed`}>
                        Jos tavoitteesi on kuukausia vievä erikoisratkaisu, tämä ei ole oikea valinta. Me tarjoamme suoran tien tuloksiin ilman hämmentävää ”digitaalista polkua”, tyylikkäästi ja ammattimaisesti.
                    </p>
                </div>
            </section>

            {/* Miksi Sivumaakarit Section */}
            <section className="py-24 px-4 bg-slate-900 text-white border-t border-slate-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className={`${playfair.className} text-4xl md:text-6xl font-bold mb-8 tracking-tight`}>
                        Miksi Sivumaakarit?
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed font-light">
                        <strong className="text-white font-semibold">Olemme 100 % suomalainen yritys Lohjalta.</strong> Palvelemme yrittäjiä joustavasti ympäri Suomen – Hangosta Utsjoelle – aina nopeasti ja ilman turhaa koodijargonia. Tapaamme kasvotusten toimistollamme Lohjalla, tai sujuvasti etänä missä päin Suomea tahansa.
                        <br /><br />
                        <strong className="text-white font-semibold">Me emme puhu sinulle koodia</strong> (vaikka osaamme sitä lukea kuin sanomalehteä). Me puhumme liiketoimintaa. Haluamme tehdä sinulle verkkosivut, joiden kautta asiakkaat löytävät sinut ja palvelusi ilman turhia mutkia.
                    </p>

                    {/* Subtle Portfolio Picks */}
                    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 mb-16 opacity-40 hover:opacity-100 transition-opacity duration-700">
                        <div className="text-white font-sans font-black text-2xl tracking-tighter">PuhdasPutki</div>
                        <div className={`${lucky.className} text-white text-2xl tracking-wider`}>Mölyapinat</div>
                        <div className={`${urbanist.className} text-white font-black text-2xl tracking-[0.2em] uppercase`}>Roboline Group</div>
                        <div className="text-white font-serif italic text-xl tracking-tight">sivumaakarit.</div>
                    </div>
                    <div className="bg-slate-800/50 p-8 md:p-12 rounded-3xl border border-slate-700/50 mb-12 shadow-2xl">
                        <h3 className={`${playfair.className} text-2xl md:text-4xl font-bold text-white mb-6 tracking-tight`}>
                            Oletko valmis nostamaan<br />
                            kaupankäyntisi uudelle tasolle?
                        </h3>
                        <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-sm md:text-base">
                            Ammattitaitosi ansaitsee arvoisensa näyteikkunan. Otetaan yhdessä askel kohti tuloksellisempaa arkea.
                        </p>
                        <Link
                            href="#hinnasto"
                            onClick={scrollToHinnasto}
                            className={`${playfair.className} inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 px-10 rounded-xl transition-all shadow-lg text-lg ring-4 ring-slate-900/10`}
                        >
                            Tilaa omat sivut
                        </Link>
                    </div>

                    {/* ROI Laskelma */}
                    <div className="mt-20 mb-8 text-left">
                        <div className="text-center mb-10">
                            <h3 className={`${playfair.className} text-3xl font-bold text-white mb-4`}>
                                Laskelma: Kuinka nopeasti sivut maksavat itsensä takaisin?
                            </h3>
                            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                                Sivut maksavat itsensä takaisin nopeammin kuin uskotkaan – usein jo ensimmäisellä yhteydenotolla.
                            </p>
                        </div>

                        <div className="overflow-hidden rounded-2xl border border-slate-800 shadow-xl bg-slate-950/40 backdrop-blur-sm">
                            <table className="w-full text-left border-collapse block md:table">
                                <thead className="hidden md:table-header-group">
                                    <tr className="bg-slate-900/80 border-b border-slate-800">
                                        <th className="p-5 font-bold text-slate-200 border-r border-slate-800">Yritys / Tilanne</th>
                                        <th className="p-5 font-bold text-slate-200 border-r border-slate-800 w-1/4">Keskimääräinen keikka</th>
                                        <th className="p-5 font-bold text-slate-200">Milloin sivu on maksettu?</th>
                                    </tr>
                                </thead>
                                <tbody className="block md:table-row-group">
                                    <tr className="block md:table-row border-b border-slate-800 hover:bg-slate-900/20 transition-colors">
                                        <td className="block md:table-cell p-4 md:p-5 border-b md:border-b-0 md:border-r border-slate-800">
                                            <span className="md:hidden text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Yritys / Tilanne</span>
                                            <div className="text-slate-200 font-medium">Yhden hengen tehopakkaus</div>
                                            <div className="text-sm text-slate-400 mt-1">(esim. puutarhuri tai LVI)</div>
                                        </td>
                                        <td className="block md:table-cell p-4 md:p-5 border-b md:border-b-0 md:border-r border-slate-800">
                                            <span className="md:hidden text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Keskimääräinen keikka</span>
                                            <div className="text-emerald-400 font-bold">n. 250 € - 400 €</div>
                                        </td>
                                        <td className="block md:table-cell p-4 md:p-5 text-yellow-400 font-medium bg-yellow-950/10 md:bg-transparent">
                                            <span className="md:hidden text-xs font-bold text-yellow-500 uppercase tracking-wider block mb-1">Milloin sivu on maksettu?</span>
                                            <div className="mb-1 italic text-yellow-400 font-bold">3–4 uutta asiakasta vuodessa.</div>
                                            <div className="text-sm text-yellow-300/80 font-normal mt-1">Tämän jälkeen kaikki on puhdasta voittoa.</div>
                                        </td>
                                    </tr>
                                    <tr className="block md:table-row hover:bg-slate-900/20 transition-colors">
                                        <td className="block md:table-cell p-4 md:p-5 border-b md:border-b-0 md:border-r border-slate-800">
                                            <span className="md:hidden text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Yritys / Tilanne</span>
                                            <div className="text-slate-200 font-medium">Hieman isompi tiimi</div>
                                            <div className="text-sm text-slate-400 mt-1">(esim. kattoremontit tai urakointi)</div>
                                        </td>
                                        <td className="block md:table-cell p-4 md:p-5 border-b md:border-b-0 md:border-r border-slate-800">
                                            <span className="md:hidden text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Keskimääräinen keikka</span>
                                            <div className="text-emerald-400 font-bold">n. 1 500 €+</div>
                                        </td>
                                        <td className="block md:table-cell p-4 md:p-5 text-yellow-400 font-medium bg-yellow-950/10 md:bg-transparent">
                                            <span className="md:hidden text-xs font-bold text-yellow-500 uppercase tracking-wider block mb-1">Milloin sivu on maksettu?</span>
                                            <div className="mb-1 text-yellow-400 font-bold">Heti ensimmäisestä kaupasta.</div>
                                            <div className="text-sm text-yellow-300/80 font-normal mt-1">Sivu on tienannut itsensä ja ylikin kerralla.</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <ProofSection />

            {/* Sivumaakarit FAQ */}
            <section className="py-24 px-4 bg-white scroll-mt-20" id="ukk">

                <div className="max-w-3xl mx-auto">
                    <h2 className={`${playfair.className} text-3xl md:text-5xl font-bold mb-12 text-center text-slate-900 tracking-tight`}>
                        Usein kysyttyjä kysymyksiä
                    </h2>

                    <div className="space-y-4">
                        <details className="group bg-slate-50 border border-slate-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-bold">
                                <span>Miksi valitsisin kuukausimaksullisen ylläpidon?</span>
                                <span className="relative size-5 shrink-0">
                                    <svg className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                                    <svg className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
                                </span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 mt-2 pt-4">
                                <p>Keskity omaan yritykseesi, me pidämme huolen tekniikasta. Helppo avaimet käteen -ratkaisu kuukausimaksulla, ilman stressiä.</p>
                                <p className="mt-2 text-slate-600">
                                    {isPremium ? (
                                        `Kun valitset ylläpidon (esim. Perus-paketti alkaen ${preset.basicAnnual}/kk + alv), saat sivuston asennuksen ja käyttöönoton erittäin sujuvasti. Me hoidamme palvelimet, tietoturvan ja päivitykset. Sinun tehtäväksesi jää vain uusien asiakkaiden palveleminen.`
                                    ) : (
                                        `Kun valitset ylläpidon (esim. Perus-paketti alkaen 33 €/kk + alv), saat sivuston rakennusmaksun reilusti alennettuun hintaan (399 € + alv). Me hoidamme palvelimet, tietoturvan ja päivitykset. Sinun tehtäväksesi jää vain uusien asiakkaiden palveleminen.`
                                    )}
                                </p>
                            </div>
                        </details>

                        <details className="group bg-slate-50 border border-slate-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-bold">
                                <span>Miksi valitsisin laajemman Plus-paketin ylläpidon?</span>
                                <span className="relative size-5 shrink-0">
                                    <svg className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                                    <svg className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
                                </span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 mt-2 pt-4">
                                <p>Mieti sivustoasi firman autona. Halpa kertamaksu on se, jolla ostat uuden auton. Mutta jos et koskaan vaihda öljyjä, katso rengaspaineita tai pese sitä, se menettää arvonsa nopeasti.</p>
                                <p className="mt-2 text-slate-600">Jatkuva ylläpito on VIP-huoltosopimus: me pesemme auton, katsomme moottoriin ja huolehdimme jopa siitä, että oikeat asiakkaat nousevat kyytiin. Se on sijoitus siihen, että olemassa oleva sivusi tuo jatkuvasti uutta kauppaa.</p>
                            </div>
                        </details>

                        <details className="group bg-slate-50 border border-slate-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-bold">
                                <span>Miten voitte tarjota näin nopeat toimitukset?</span>
                                <span className="relative size-5 shrink-0">
                                    <svg className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                                    <svg className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
                                </span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 mt-2 pt-4">
                                Keskitymme olennaiseen: selkeyteen, toimivuuteen ja löydettävyyteen. Emme rakenna raskaita himmeleitä tai kymmeniä turhia alasivuja. Nopeus perustuu siihen, että käytämme valmiiksi testattua, erittäin tehokkaasti myyvää sivustorakennetta sekä hyödynnämme työssämme huippuluokan AI-pohjaisia työkaluja. Emme aloita jokaista projektia alusta asti nollasta, mikä säästää valtavasti aikaa ja takaa, että sivustosi valmistuu nopeasti – parhaimmillaan jopa vuorokaudessa siitä, kun olemme saaneet kaikki materiaalit (kyseessä ei kuitenkaan ole sitova yleislupaus, sillä toimitusaika riippuu aina projektin koosta).
                            </div>
                        </details>

                        <details className="group bg-slate-50 border border-slate-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-bold">
                                <span>Mikä on ylläpitosopimuksen sitovuus ja irtisanomisaika?</span>
                                <span className="relative size-5 shrink-0">
                                    <svg className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                                    <svg className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
                                </span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 mt-2 pt-4">
                                {isPremium ? (
                                    `Reilun ja asiantuntevan kumppanuuden mahdollistamiseksi ylläpito- ja turvasopimus solmitaan aluksi 12 kuukauden määräajaksi. Tämän jälkeen sopimus jatkuu joustavasti toistaiseksi voimassaolevana kuukausihinnalla (Perus: ${preset.basicMonthly} + alv, Plus: ${preset.plusMonthly} + alv) vain 3 kuukauden irtisanomisajalla (tai voit valita uuden, tuolloin tarjolla olevan vuosisopimuksen). Kun ylläpito päättyy, sivusto koodineen ja sisältöineen on täysin sinun omaisuuttasi – ei alustaloukkuja.`
                                ) : (
                                    `Reilun ja erittäin edullisen rakennusmaksun (399 € + alv) mahdollistamiseksi ylläpito- ja turvasopimus solmitaan aluksi 12 kuukauden määräajaksi. Tämän jälkeen sopimus jatkuu joustavasti toistaiseksi voimassaolevana kuukausihinnalla (Perus: 50 €/kk + alv, Plus: 150 €/kk + alv) vain 3 kuukauden irtisanomisajalla (tai voit valita uuden, tuolloin tarjolla olevan vuosisopimuksen). Kun ylläpito päättyy, sivusto koodineen ja sisältöineen on täysin sinun omaisuuttasi – ei alustaloukkuja.`
                                )}
                            </div>
                        </details>
                    </div>
                </div>
            </section>

            {/* Tarina: Esimerkki arjesta */}
            <section className="py-24 px-4 bg-blue-50">
                <details className="group bg-white border border-blue-100 rounded-[2.5rem] shadow-xl [&_summary::-webkit-details-marker]:hidden transition-all duration-500 overflow-hidden">
                    <summary className="flex cursor-pointer flex-col items-center justify-center p-12 text-center hover:bg-slate-50 transition-colors">
                        <div className="w-24 h-24 bg-blue-600 text-white rounded-full flex items-center justify-center mb-8 shadow-2xl group-open:scale-90 transition-transform duration-500">
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                        <h3 className={`${playfair.className} text-3xl md:text-5xl font-bold text-blue-900 tracking-tight mb-4`}>
                            Miten kauppa oikeasti käy nykypäivänä?
                        </h3>
                        <p className="text-slate-500 text-lg md:text-xl font-medium flex items-center gap-2">
                            <span>Lue tosielämän esimerkki tarpeesta kauppaan</span>
                            <svg className="w-6 h-6 text-blue-600 transition-transform duration-500 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </p>
                    </summary>

                    <div className="px-6 md:px-12 pb-16 space-y-6 animate-in fade-in slide-in-from-top-4 duration-700">
                        <div className="grid grid-cols-1 gap-6">
                            {/* Step 1 */}
                            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                <p className="text-blue-900 font-bold text-xl mb-4">1. Tilanne: Äkillinen tarve mökillä</p>
                                <p className="text-slate-700 leading-relaxed">
                                    On perjantai-ilta. Mökkiläisen pihalla on iso koivu, joka näyttää vaaralliselta ja uhkaa kaatua katon päälle syysmyrskyssä. Mitä hän tekee? Hän ei hae puhelinluetteloa. Hän kaivaa puhelimen taskusta.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                <p className="text-blue-900 font-bold text-xl mb-4">2. Etsintä: Google tai tekoälysovellus</p>
                                <p className="text-slate-700 leading-relaxed">
                                    Mökkiläinen kirjoittaa hakuun: <em>&quot;Puunkaato mökkitien varrelta nopeasti&quot;</em>. Hakutuloksiin nousee useita yrityksiä. Ensimmäinen sivusto latautuu hitaasti pätkien. Toinen sivusto näyttää sekavalta, eikä puhelinnumeroa löydy.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="bg-blue-600 p-8 rounded-3xl border border-blue-500 shadow-lg text-white">
                                <p className="font-bold text-xl mb-4">3. Ratkaisu: Sinun sivustollesi siirtyminen</p>
                                <p className="text-blue-50 leading-relaxed">
                                    <strong className="text-white">Sitten hän klikkaa sinun sivuasi.</strong> Se aukeaa silmänräpäyksessä. Heti ensimmäisenä ruudulla lukee isolla: <em>&quot;Ammattitaitoinen puunkaatopalvelu. Turvallisesti ja nopeasti.&quot;</em> Alla on selkeä vihreä nappi: <em>&quot;Soita heti&quot;</em>.
                                </p>
                            </div>

                            {/* Step 4 */}
                            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                <p className="text-blue-900 font-bold text-xl mb-4">4. Lopputulos: Kaupat on sovittu</p>
                                <p className="text-slate-700 leading-relaxed">
                                    Mökkiläinen painaa nappia, sinun puhelimesi soi ja keikka on sovittu. <strong>Siksi myyvä, nopea ja löydettävä nettisivu on yrityksesi tärkein työntekijä.</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </details>

            </section>

            {/* CTA / Contact Section */}
            <section id="tilaa" className="py-24 px-4 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        <div className="relative group/image lg:-mt-12">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-cyan-500/20 rounded-[2.5rem] blur-2xl opacity-10 group-hover/image:opacity-100 transition-opacity duration-700"></div>
                            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white transition-transform duration-700 group-hover/image:scale-[1.01]">
                                <Image
                                    src="/images/tarjous-tilaa.webp"
                                    alt="Mökkilaituri ja tabletti"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover/image:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-60"></div>
                            </div>

                            {/* Blue Glass Button under the image */}
                            <div className="mt-10 flex justify-center">
                                <Link
                                    href="/mokkipalvelu"
                                    className="w-full max-w-sm bg-blue-600/10 backdrop-blur-3xl border-2 border-blue-500/20 text-slate-800 px-8 py-5 rounded-2xl font-bold text-lg md:text-xl transition-all shadow-[0_20px_40px_rgba(59,130,246,0.1)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 hover:border-blue-500/40 hover:-translate-y-1 transform active:scale-95 text-center flex items-center justify-center gap-4 group/glass"
                                >
                                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center border border-white/30 shadow-lg group-hover/glass:scale-110 transition-transform">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <span>Katso esimerkkitoteutus</span>
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col pt-2 pb-10">
                            <div className="text-center lg:text-left mb-10">
                                <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-[1.1] tracking-tight`}>
                                    Kysy lisää tai pyydä <br />
                                    <span className="text-blue-700">maksuton arvio</span>
                                </h2>
                                <p className="text-slate-600 text-lg md:text-xl font-light italic">Yhteydenotto ei sido sinua mihinkään. Vastaamme pian – katsotaan yhdessä, miten voimme auttaa yritystäsi löytymään paremmin.</p>
                            </div>

                            {!formSubmitted ? (
                                <>
                                    <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-slate-100 relative group/form transition-all duration-500 hover:shadow-2xl">
                                        <div className="absolute -inset-px bg-gradient-to-r from-blue-100 to-cyan-100 rounded-[2rem] -z-10 group-hover/form:opacity-100 opacity-0 transition-opacity"></div>
                                        <form className="space-y-6" onSubmit={handleSubmit}>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="block text-sm font-bold text-slate-700 ml-1">Nimi</label>
                                                    <input type="text" name="name" className="w-full min-w-0 p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400" placeholder="Matti Meikäläinen" required />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="block text-sm font-bold text-slate-700 ml-1">Sähköposti</label>
                                                    <input type="email" name="email" className="w-full min-w-0 p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400" placeholder="matti@yritys.fi" required />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="block text-sm font-bold text-slate-700 ml-1">Viesti / Yrityksesi ala</label>
                                                <textarea name="message" className="w-full min-w-0 p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all h-48 placeholder:text-slate-400" placeholder="Kerro lyhyesti mitä teet..." defaultValue={`Hei! Haluan kysyä lisää nettisivuista tai pyytää maksuttoman arvion. Ymmärrän, että tämä ei sido minua mihinkään.

Toimialani ja lyhyt kuvaus yrityksestäni: (esim. LVI, siivous tai puutarhuri, ja paikkakunta)`}></textarea>
                                            </div>
                                            <button type="submit" className={`${playfair.className} w-full bg-blue-700 text-white font-bold py-5 rounded-2xl hover:bg-blue-800 transition-all shadow-[0_15px_30px_rgba(29,78,216,0.3)] hover:shadow-none hover:translate-y-0.5 transform active:scale-95 text-xl tracking-tight`}>
                                                Pyydä lisätietoja tai arvio
                                            </button>
                                            <p className="text-center text-xs text-slate-400 mt-4 leading-relaxed">
                                                Yhteydenotto ei sido sinua tilaamaan. <br />
                                                Sopimuskumppanina toimii suomalainen Tmi Sivumaakarit (Y-tunnus: {siteConfig.contact.businessId}).
                                            </p>
                                        </form>
                                    </div>
                                    <div className="mt-10 pt-10 border-t border-slate-200/50 flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-400 text-sm font-bold uppercase tracking-widest">
                                        <a href="mailto:info@sivumaakarit.fi" className="hover:text-blue-600 transition-colors flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                            info@sivumaakarit.fi
                                        </a>
                                        <span className="hidden sm:block w-1.5 h-1.5 bg-slate-200 rounded-full"></span>
                                        <a href="tel:+358505403661" className="hover:text-blue-600 transition-colors flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                            050 540 3661
                                        </a>
                                    </div>
                                </>
                            ) : (
                                <div id="success-msg" className="bg-emerald-50 border border-emerald-100 p-12 rounded-[2rem] text-center shadow-xl">
                                    <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/30">
                                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <h3 className="text-3xl font-black text-emerald-900 mb-4 tracking-tight">Kiitos viestistäsi!</h3>
                                    <p className="text-emerald-700 text-lg font-medium">Olemme sinuun yhteydessä pian aloituskokousta varten.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* E-E-A-T Author Profile Section */}
            <section className="py-20 px-4 bg-slate-50 border-t border-slate-200/60" id="asiantuntija">
                <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-12 shadow-md border border-slate-100 flex flex-col md:flex-row gap-10 items-center">
                    <div className="relative shrink-0">
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-30"></div>
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-100 border-4 border-white shadow-xl overflow-hidden relative flex items-center justify-center">
                            <span className="text-4xl md:text-5xl font-serif italic text-blue-600 font-bold select-none">EM</span>
                        </div>
                    </div>
                    <div className="flex-grow flex flex-col gap-4 text-center md:text-left">
                        <div className="flex flex-col md:flex-row md:items-baseline gap-2 justify-center md:justify-start">
                            <h3 className={`${playfair.className} text-2xl md:text-3xl font-bold text-slate-900`}>Esko Mäki</h3>
                            <span className="text-xs uppercase tracking-widest font-bold text-blue-600">Perustaja, Sivumaakarit</span>
                        </div>
                        <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider leading-none">
                            Koulutustausta: Filosofian maisteri (FM) & Kasvatustieteen maisteri (KM)
                        </p>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed font-normal">
                            Asiantuntemukseni yhdistää humanistisen ymmärryksen, pedagogisen viestinnän ja modernin verkkokehityksen (Next.js & React). Suunnittelen jokaisen sivuston oppimisen ja ymmärtämisen ehdoilla, poistaen teknisen jargonin ja luoden selkeitä myyntipolkuja yrittäjille. Suorituskykytakuumme varmistaa, että sivustot saavuttavat 100/100 Google Lighthouse -pisteet ja ovat täysin valmiita tekoälyhakukoneiden (GEO) viittauksia varten.
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-xs font-bold text-slate-500 border-t border-slate-100 pt-4 mt-2">
                            <span>✓ Yli 10 vuotta digitaalista suunnittelua</span>
                            <span>✓ 100% Suomalaista työtä</span>
                            <span>✓ WCAG 2.2 Saavutettavuusosaaminen</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Toimialue ja valtakunnallinen kattavuus (SEO/GEO) */}
            <section className="py-16 px-4 bg-white border-t border-slate-100" id="toimialue">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        Toimialue & Kattavuus
                    </div>
                    <h3 id="operating-area-title" className={`${playfair.className} text-2xl md:text-3xl font-bold text-slate-900 mb-4`}>
                        Luotettavaa verkkosivupalvelua koko Suomessa
                    </h3>
                    <p className="text-slate-600 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
                        Toimistomme sijaitsee Uudellamaalla Lohjalla, mutta teemme yhteistyötä yrittäjien kanssa <strong className="text-slate-800 font-semibold">ympäri Suomen</strong>. Tapaamme joustavasti joko etänä tai kasvotusten toimistollamme Lohjalla. Palvelemme yrittäjiä muun muassa seuraavilla alueilla:
                    </p>

                    {/* Alue-kapselit */}
                    <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto mb-8">
                        {["Lohja", "Helsinki", "Espoo", "Vantaa", "Vihti", "Kirkkonummi", "Siuntio", "Karkkila", "Uusimaa"].map((city) => (
                            <span key={city} className="px-4 py-2 bg-slate-50 border border-slate-200/80 rounded-full text-slate-700 text-xs font-semibold hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all cursor-default shadow-sm hover:-translate-y-0.5 transform">
                                {city}
                            </span>
                        ))}
                    </div>

                    <div className="inline-flex items-center gap-3 p-4 bg-gradient-to-r from-blue-600/5 to-cyan-500/5 border border-blue-500/10 rounded-2xl text-slate-800 text-xs md:text-sm font-medium shadow-sm">
                        <span className="flex h-2.5 w-2.5 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </span>
                        <span>
                            <strong>Palvelemme etänä Hangosta Utsjoelle!</strong> Ota yhteyttä ja aloitetaan yhteistyö sijainnistasi riippumatta.
                        </span>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
