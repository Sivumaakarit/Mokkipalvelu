import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export function PricingTiers() {
    return (
        <section className={`py-24 px-4 bg-slate-50 ${inter.className}`} id="hinnasto">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-4 text-blue-900`}>
                        Mitä saat tällä hinnalla?
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Valitse tarpeisiisi sopiva malli. Ei piilokuluja.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
                    {/* Tier 1: Pelkkä sivu */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative flex flex-col cursor-default">
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Pelkkä sivu</h3>
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-4xl md:text-5xl font-extrabold text-blue-900">990 €</span>
                            </div>
                            <p className="text-slate-500 text-sm">Kertamaksu. Sivut toimitetaan tiedostopakettina. Hoidat itse julkaisun ja ylläpidon.</p>
                        </div>

                        <div className="space-y-4 flex-grow mb-8">
                            <ul className="space-y-4">
                                {[
                                    "Moderni, huomiota herättävä ja mobiilioptimoitu sivusto.",
                                    "Huippuunsa viritetty latausnopeus (Google tykkää).",
                                    <><strong className="text-slate-900">Maksaa itsensä takaisin nopeasti!</strong> Esim. jo kahdella uudella palveluasiakkaalla.</>,
                                    "Valmiiksi optimoitu tekstirakenne ja hakukonenäkyvyys.",
                                    "Yhteydenottolomake ja painikkeet tai upotukset Facebookiin, Instagramiin ja muihin sosiaalisiin medioihin.",
                                    <><strong className="text-slate-900">Täysi omistajuus</strong> kaikkeen työhön.</>
                                ].map((feature, idx) => (
                                    <li key={idx} className="flex gap-3 text-slate-700 text-sm items-start">
                                        <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        <span className="leading-snug">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Link href="/tilaa-pelkka-sivu" className="w-full block text-center py-4 rounded-xl border-2 border-slate-200 text-slate-700 font-bold hover:border-blue-900 hover:text-blue-900 transition-colors mt-auto">
                            Tilaa pelkkä sivu
                        </Link>
                    </div>

                    {/* Tier 2: 50 malli (Suositelluin) */}
                    <div className="bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-700 relative flex flex-col cursor-default transform lg:-translate-y-4 hover:lg:-translate-y-6 hover:shadow-cyan-500/10 transition-all duration-300">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
                            <span className="bg-cyan-500 text-slate-900 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                                Suosituin valinta
                            </span>
                        </div>
                        <div className="mb-8 mt-2">
                            <h3 className="text-xl font-bold text-white mb-2">Ylläpito & Turva – Perus</h3>
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-4xl md:text-5xl font-extrabold text-white">50 €</span>
                                <span className="text-slate-400 text-base md:text-lg">/ kk</span>
                            </div>

                            <div className="bg-slate-800/80 rounded-xl p-4 border border-cyan-900/40 mb-4 shadow-inner">
                                <div className="flex justify-between items-center mb-1 gap-2">
                                    <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider">Sivuston toteutus</span>
                                    <span className="text-lg font-bold text-white whitespace-nowrap">990 €</span>
                                </div>
                                <p className="text-xs text-slate-400">Kertamaksu, ei erillistä aloitusmaksua.</p>
                            </div>

                            <p className="text-slate-400 text-sm">Huoleton arki sen jälkeen, kun sivut on julkaistu.</p>
                        </div>

                        <div className="space-y-4 flex-grow mb-8">
                            <ul className="space-y-4">
                                {[
                                    <><strong className="text-white">Hoidamme kaiken julkaisuun ja ylläpitoon:</strong> Domain, web-hotelli ja täysin avaimet käteen -asennus nettiin. Sinun ei tarvitse tehdä mitään.</>,
                                    <><strong className="text-white">Tekninen sydän:</strong> SSL-salaus, tietoturva, automaattiset varmuuskopiot ja nopeusseuranta.</>,
                                    <><strong className="text-white">1 pieni päivitys/kk:</strong> Uusi kuva tai tekstinmuutos esim. &quot;Nyt kesätarjous:&quot; (max 15min).</>,
                                    "Tukipyyntöjen vasteaika max kaksi arkipäivää (lisätyöt 75 €/h)."
                                ].map((feature, idx) => (
                                    <li key={idx} className="flex gap-3 text-slate-300 text-sm items-start">
                                        <svg className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        <span className="leading-snug">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Link href="/tilaa-perus" className="w-full block text-center bg-cyan-500 text-slate-900 font-bold py-4 rounded-xl hover:bg-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all mt-auto transform hover:-translate-y-0.5">
                            Valitse Sivu + Perusturva
                        </Link>
                    </div>

                    {/* Tier 3: 150 malli */}
                    <div className="bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-600 relative flex flex-col cursor-default group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-white mb-2">Ylläpito & Turva – Plus</h3>
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-4xl md:text-5xl font-extrabold text-blue-400">150 €</span>
                                <span className="text-slate-400 text-base md:text-lg">/ kk</span>
                            </div>

                            <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/50 mb-4 shadow-inner">
                                <div className="flex justify-between items-center mb-1 gap-2">
                                    <span className="text-xs text-blue-400 font-bold uppercase tracking-wider">Sivuston toteutus</span>
                                    <span className="text-lg font-bold text-white whitespace-nowrap">990 €</span>
                                </div>
                                <p className="text-xs text-slate-400">Kertamaksu, ei erillistä aloitusmaksua.</p>
                            </div>

                            <p className="text-slate-400 text-sm">Aktiivista näkyvyyttä ja jatkuvaa tukea kasvulle.</p>
                        </div>

                        <div className="space-y-4 flex-grow mb-8">
                            <ul className="space-y-4">
                                {[
                                    "Sisältää kaikki Perus-tason huolenpitopalvelut.",
                                    <><strong className="text-white">Asiantuntijapankki (2 h/kk):</strong> Käytä aika sisältöjen päivitykseen, visuaalisen ilmeen viilaukseen tai analytiikkatukeen.</>,
                                    <><strong className="text-white">Jatkuva SEO ja valvonta:</strong> Tsekkaamme kuukausittain Google-sijoitukset ja tekniikan, jotta pysyt kisassa kärjessä.</>,
                                    "Tieto hyvissä ajoin ajan loppumisesta (lisätyöt 75 €/h).",
                                    <><strong className="text-white">Priorisoitu vasteaika max 24h.</strong></>
                                ].map((feature, idx) => (
                                    <li key={idx} className="flex gap-3 text-slate-300 text-sm items-start">
                                        <svg className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        <span className="leading-snug">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Link href="/tilaa-plus" className="w-full block text-center py-4 rounded-xl border border-slate-500 text-slate-300 font-bold hover:bg-slate-700 hover:text-white transition-colors mt-auto">
                            Ota Sivu + Plus-paketti
                        </Link>
                    </div>

                </div>

                {/* Delivery Terms */}
                <div className="max-w-4xl mx-auto mt-16 text-sm text-slate-500 space-y-4">
                    <p className="font-semibold text-slate-700">Tärkeää tietoa hinnoittelusta:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Kaikkiin hintoihin lisätään voimassa oleva arvonlisävero (alv 25,5 %).</li>
                        <li>Ylläpito- ja Turvapaketit saatetaan laskuttaa aloitusmaksulla yrityksen tarpeiden mukaan. 7 päivän toimitusaika koskee normaaleja onepagereita heti materiaalien saavuttua.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
