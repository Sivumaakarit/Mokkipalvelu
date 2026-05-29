"use client";

import { useState, useEffect } from "react";
import { Inter, Playfair_Display } from 'next/font/google';
import { siteConfig } from "@/lib/site-config";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export default function TilaaPerus() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [billing, setBilling] = useState<'kuukausi' | 'vuosi'>('kuukausi');
    const isPremium = siteConfig.pricingStrategy === "premium";
    const preset = siteConfig.pricingPresets[siteConfig.pricingStrategy];

    // Helper functions for dynamic pricing
    const parsePrice = (priceStr: string) => {
        return parseInt(priceStr.replace(/[^0-9]/g, ""), 10);
    };

    const formatPrice = (val: number) => {
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " €";
    };

    const annualYllapitoSum = parsePrice(preset.basicAnnual) * 12;
    const starterSetupVal = parsePrice(preset.starterSetup);
    const annualTotalSum = annualYllapitoSum + starterSetupVal;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            if (params.get('billing') === 'vuosi') {
                setBilling('vuosi');
            }
        }
    }, []);

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
        <div className={`min-h-screen bg-slate-50 relative ${inter.variable} ${playfair.variable} font-sans`}>

            <main className="pt-32 pb-24 px-4 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                        {/* Hero Section of the card */}
                        <div className="bg-slate-900 border-b border-slate-800 p-8 md:p-12 text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent pointer-events-none"></div>

                            <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-cyan-400/30">Huoleton Arki</span>

                            <h1 className={`${playfair.className} text-3xl md:text-5xl font-bold text-white mb-6 leading-tight`}>
                                Perus-paketti <span className="text-cyan-400">({billing === 'vuosi' ? `${preset.basicAnnual}/kk + rakennusmaksu alkaen ${preset.starterSetup} + alv` : `${preset.basicMonthly}/kk + rakennusmaksu alkaen ${preset.growthSetup} + alv`})</span>
                            </h1>

                            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                                Kaikki mitä tarvitset sivuston turvalliseen ja nopeaan toimintaan. Me hoidamme tekniikan ja koodauksen, sinä hoidat liiketoimintasi.
                            </p>
                        </div>

                        {/* Content section */}
                        <div className="p-8 md:p-12">
                            <div className="prose prose-slate max-w-none text-lg leading-relaxed mb-10 text-slate-600">
                                <p>
                                    Tämä paketti on tarkoitettu yrittäjälle, joka haluaa unohtaa domainit, palvelimet ja SSL-sertifikaatit. Me pidämme huolen, että sivustosi on saavutettavissa 24/7 ja pysyy teknisesti ajan tasalla.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 md:p-8 mb-10">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                    Mitä paketti sisältää:
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex gap-3 text-slate-700">
                                        <svg className="w-6 h-6 text-cyan-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span><strong>Täysi asennus nettiin:</strong> Hoidamme domainin, web-hotellin ja julkaisun puolestasi avaimet käteen -periaatteella.</span>
                                    </li>
                                    <li className="flex gap-3 text-slate-700">
                                        <svg className="w-6 h-6 text-cyan-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span><strong>Tekninen suojaus ja palvelin:</strong> Sivustosi toimii turvallisella ja huippunopealla pilvipalvelimella. Hoidamme SSL-salauksen ja varmuuskopiot.</span>
                                    </li>
                                    <li className="flex gap-3 text-slate-700">
                                        <svg className="w-6 h-6 text-cyan-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span><strong>Päivitystuki:</strong> Sisältää yhden pienen kuukausittaisen päivityksen (esim. aukioloaikojen muutos tai uusi kuva) sekä luotettavan tuen.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Order Form */}
                            <div>
                                {!formSubmitted ? (
                                    <>
                                        <h2 className={`${playfair.className} text-2xl font-bold mb-6 text-slate-900`}>Kysy lisää Perus-paketista</h2>
                                        <form key={billing} className="space-y-4" onSubmit={handleSubmit}>
                                            <div>
                                                <label className="block text-sm font-semibold mb-1 text-slate-700">Nimi</label>
                                                <input type="text" name="name" className="w-full min-w-0 p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none" placeholder="Matti Meikäläinen" required />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold mb-1 text-slate-700">Sähköposti</label>
                                                <input type="email" name="email" className="w-full min-w-0 p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none" placeholder="matti@yritys.fi" required />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold mb-1 text-slate-700">Viesti</label>
                                                <textarea 
                                                    name="message"
                                                    className="w-full min-w-0 p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 outline-none h-32" 
                                                    defaultValue={`Hei! Olen kiinnostunut Sivu + Perusturva -paketista (${billing === 'vuosi' ? `${preset.basicAnnual}/kk vuosilaskutuksella` : `${preset.basicMonthly}/kk kuukausilaskutuksella`}). Haluaisin kuulla lisää avaimet käteen -toteutuksesta. Ymmärrän, että tämä viesti ei sido minua mihinkään.\n\nTarvitsen nettisivut: (kirjoita esim. yrityksen nimi, toimiala ja paikkakunta. Voit myös kirjoittaa lyhyesti toiveistasi, jotta osaamme tarjota juuri sinulle parasta ratkaisua)`}
                                                ></textarea>
                                            </div>
                                            <button type="submit" className="w-full bg-cyan-600 text-white font-bold py-4 rounded-xl hover:bg-cyan-700 transition shadow-lg shadow-cyan-600/30">
                                                Pyydä lisätietoja tai arvio
                                            </button>
                                            <p className="text-center text-xs text-slate-500 mt-4 leading-relaxed">
                                                <strong className="text-slate-600">
                                                     {billing === 'vuosi' 
                                                         ? `Vuositilaus laskutetaan 12 kk erässä (ylläpito ${preset.basicAnnual}/kk + rakennusmaksu alkaen ${preset.starterSetup} + alv, lopullinen hinta määräytyy tarpeiden ja laajuuden mukaan).` 
                                                         : `Kuukausitilaus laskutetaan kuukausittain (ylläpito ${preset.basicMonthly}/kk + rakennusmaksu alkaen ${preset.growthSetup} + alv, lopullinen hinta määräytyy tarpeiden ja laajuuden mukaan).`}
                                                </strong>
                                                <br />
                                                Määräaikaisen 12 kk kauden jälkeen sopimus jatkuu toistaiseksi voimassa olevana 3 kk irtisanomisajalla hintaan {preset.basicMonthly}/kk + alv (tai voit valita uuden, tuolloin tarjolla olevan vuosisopimuksen). Yhteydenotto tai tarjouspyyntö ei sido sinua mihinkään.
                                            </p>
                                        </form>
                                    </>
                                ) : (
                                    <div className="bg-emerald-50 border border-emerald-100 p-12 rounded-[2rem] text-center shadow-xl">
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
                </div>
            </main>
            <Footer />
        </div>
    );
}
