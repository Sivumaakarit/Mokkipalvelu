import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });


export function StandalonePricing() {
    return (
        <section className={`pt-24 pb-16 px-4 bg-white ${inter.className}`} id="pelkka-sivu">
            <div className="max-w-5xl mx-auto">
                {/* Päälupaus */}
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <h2 className={`${playfair.className} text-3xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-blue-950 leading-tight break-words`}>
                        Me haluamme, että sinun kova työsi ja ammattitaitosi <span className="text-blue-600">ovat asiakkaittesi saatavilla.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
                        Nettisivu ei ole menoerä. Se on paras työntekijäsi, joka ei nuku koskaan. Kuukausimaksulla ilman piilokuluja.
                    </p>
                </div>

                {/* Mitä saat tällä hinnalla? */}
                <div className="mb-24 flex flex-col justify-center items-center max-w-4xl mx-auto">
                    <div className="text-center w-full">
                        <h3 className={`${playfair.className} text-3xl md:text-4xl font-bold text-blue-900 mb-6`}>
                            Mitä saat alkaen 33 € /kk? <br />
                            <span className="text-xl md:text-2xl text-slate-500 font-normal mt-2 block">(Sitä, mitä muut eivät pysty tarjoamaan)</span>
                        </h3>
                        <p className="text-lg md:text-xl text-slate-700 mb-12 leading-relaxed max-w-3xl mx-auto">
                            Useimmat tekevät &quot;nättejä&quot; sivuja. Me teemme teknisesti täydellisiä myyntikoneita. Tähän hintaan et saa muualta tätä teknistä ylivertaisuutta:
                        </p>

                        <ul className="grid sm:grid-cols-3 gap-8 text-left">
                            <li className="flex flex-col items-center text-center gap-4 bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
                                <div className="bg-blue-100 text-blue-700 p-4 rounded-full h-fit">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                                </div>
                                <div>
                                    <strong className="text-slate-900 text-xl block mb-2">AI-valmius</strong>
                                    <p className="text-slate-600 text-sm md:text-base">Jotta asiakkaasi löytävät sinut Googlesta, Mapsista ja uusista tekoälysovelluksista (esim. ChatGPT).</p>
                                </div>
                            </li>
                            <li className="flex flex-col items-center text-center gap-4 bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
                                <div className="bg-green-100 text-green-700 p-4 rounded-full h-fit">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                </div>
                                <div>
                                    <strong className="text-slate-900 text-xl block mb-2">Elite-suorituskyky</strong>
                                    <p className="text-slate-600 text-sm md:text-base">Sivusi latautuu silmänräpäyksessä ja pysyy aina 85–100 pisteen eliittiluokassa.</p>
                                </div>
                            </li>
                            <li className="flex flex-col items-center text-center gap-4 bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
                                <div className="bg-purple-100 text-purple-700 p-4 rounded-full h-fit">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <div>
                                    <strong className="text-slate-900 text-xl block mb-2">Tekniikka-takuu</strong>
                                    <p className="text-slate-600 text-sm md:text-base">Tekninen 100/100-varmistus on leivottu sisään jokaiseen koodiriviin ja tekstiin.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* ROI Laskelma */}
                <div className="mb-16">
                    <div className="text-center mb-10">
                        <h3 className={`${playfair.className} text-3xl font-bold text-blue-900 mb-4`}>
                            Laskelma: Kuinka nopeasti sivut maksavat itsensä takaisin?
                        </h3>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            Sivut maksavat itsensä takaisin nopeammin kuin uskotkaan – usein jo ensimmäisellä yhteydenotolla.
                        </p>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white">
                        <table className="w-full text-left border-collapse block md:table">
                            <thead className="hidden md:table-header-group">
                                <tr className="bg-slate-50 border-b border-slate-200">
                                    <th className="p-5 font-bold text-slate-800 border-r border-slate-200">Yritys / Tilanne</th>
                                    <th className="p-5 font-bold text-slate-800 border-r border-slate-200 w-1/4">Keskimääräinen keikka</th>
                                    <th className="p-5 font-bold text-slate-800">Milloin sivu on maksettu?</th>
                                </tr>
                            </thead>
                            <tbody className="block md:table-row-group">
                                <tr className="block md:table-row border-b border-slate-200 md:border-slate-100 hover:bg-slate-50/50 transition-colors">
                                    <td className="block md:table-cell p-4 md:p-5 border-b md:border-b-0 md:border-r border-slate-100">
                                        <span className="md:hidden text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Yritys / Tilanne</span>
                                        <div className="text-slate-700 font-medium">Yhden hengen tehopakkaus</div>
                                        <div className="text-sm text-slate-500 mt-1">(esim. talkkari tai LVI)</div>
                                    </td>
                                    <td className="block md:table-cell p-4 md:p-5 border-b md:border-b-0 md:border-r border-slate-100">
                                        <span className="md:hidden text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Keskimääräinen keikka</span>
                                        <div className="text-slate-900 font-bold">n. 250 € - 400 €</div>
                                    </td>
                                    <td className="block md:table-cell p-4 md:p-5 text-green-700 font-medium bg-green-50/30 md:bg-transparent">
                                        <span className="md:hidden text-xs font-bold text-green-800 uppercase tracking-wider block mb-1">Milloin sivu on maksettu?</span>
                                        <div className="mb-1 italic">3–4 uutta asiakasta.</div>
                                        <div className="text-sm text-green-600 font-normal mt-1">Tämän jälkeen kaikki on puhdasta voittoa.</div>
                                    </td>
                                </tr>
                                <tr className="block md:table-row hover:bg-slate-50/50 transition-colors">
                                    <td className="block md:table-cell p-4 md:p-5 border-b md:border-b-0 md:border-r border-slate-100">
                                        <span className="md:hidden text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Yritys / Tilanne</span>
                                        <div className="text-slate-700 font-medium">Hieman isompi tiimi</div>
                                        <div className="text-sm text-slate-500 mt-1">(esim. kattoremontit tai urakointi)</div>
                                    </td>
                                    <td className="block md:table-cell p-4 md:p-5 border-b md:border-b-0 md:border-r border-slate-100">
                                        <span className="md:hidden text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Keskimääräinen keikka</span>
                                        <div className="text-slate-900 font-bold">n. 1 500 €+</div>
                                    </td>
                                    <td className="block md:table-cell p-4 md:p-5 text-green-700 font-medium bg-green-50/30 md:bg-transparent">
                                        <span className="md:hidden text-xs font-bold text-green-800 uppercase tracking-wider block mb-1">Milloin sivu on maksettu?</span>
                                        <div className="mb-1">Heti ensimmäisestä kaupasta.</div>
                                        <div className="text-sm text-green-600 font-normal mt-1">Sivu on tienannut itsensä ja ylikin kerralla.</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="text-center mt-12 mb-8">
                    <Link href="#hinnasto" className="inline-block bg-transparent text-slate-600 font-bold py-4 px-10 rounded-xl hover:bg-slate-100 transition-all text-lg border-2 border-slate-200">
                        Katso jatkuvat paketit alta
                    </Link>
                </div>
            </div>
        </section>
    );
}
