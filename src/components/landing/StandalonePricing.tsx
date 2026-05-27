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
                            Mitä saat alkaen 33 € /kk + 399 € avausmaksu? <br />
                            <span className="text-xl md:text-2xl text-slate-500 font-normal mt-2 block">(Ensimmäisenä vuonna yhteensä vain 795 € + alv)</span>
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

                {/* Hinnoittelun jakautuminen ja perustelu */}
                <div className="mb-24 bg-slate-50 border border-slate-200/60 rounded-3xl p-6 md:p-8 max-w-4xl mx-auto shadow-sm">
                    <h4 className={`${playfair.className} text-2xl font-bold text-blue-900 mb-6 text-center flex items-center justify-center gap-2`}>
                        ⚖️ Miten hinnoittelu jakautuu – ja miksi se on reilu?
                    </h4>
                    <div className="grid md:grid-cols-2 gap-8 items-stretch">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                                </div>
                                <h5 className="font-bold text-slate-900 text-lg">🛠️ Avausmaksu (alkaen 399 €*)</h5>
                            </div>
                            <p className="text-slate-600 text-sm md:text-base leading-relaxed flex-grow">
                                Kattaa sivuston <strong>suunnittelun, ammattimaisen koodauksen, hakukoneoptimoinnin (SEO) ja täyden asennuksen nettiin</strong>. Tämä on kertaluontoinen investointi itse sivuston rakennustyöhön.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-cyan-50 text-cyan-600 rounded-xl">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                </div>
                                <h5 className="font-bold text-slate-900 text-lg">☁️ Kuukausimaksu (alkaen 33 € /kk*)</h5>
                            </div>
                            <p className="text-slate-600 text-sm md:text-base leading-relaxed flex-grow">
                                Kattaa <strong>huippunopean palvelimen (hosting), SSL-salausturvan, automaattiset varmuuskopiot, jatkuvan laadunvalvonnan ja yhden pienen (esim. tarjousmainos) kuukausittaisen päivityksen</strong>. Sivusi pysyy aina turvassa ja toiminnassa ilman omaa vaivaasi.
                            </p>
                        </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-100 text-center text-slate-700 text-sm md:text-base font-medium">
                        👉 <strong>Yhteenveto:</strong> Ensimmäisen vuoden kokonaiskustannuksesi on vain <strong>795 € + alv</strong> (vuosilaskutuksella) tai <strong>1099 € + alv</strong> (kuukausilaskutuksella). Tämän jälkeen ylläpito jatkuu toistaiseksi voimassa olevana kuukausilaskutuksella (nyt 50 €/kk + alv) tai voit valita uuden, tuolloin tarjolla olevan vuosisopimuskauden.
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
