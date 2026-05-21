"use client";

import { useState } from "react";
import { Inter, Playfair_Display } from 'next/font/google';
import { siteConfig } from "@/lib/site-config";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export default function TilaaPelkkaSivu() {
    const [formSubmitted, setFormSubmitted] = useState(false);

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
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none"></div>

                            <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-blue-400/30">Hanki täysi omistajuus</span>

                            <h1 className={`${playfair.className} text-3xl md:text-5xl font-bold text-white mb-6 leading-tight`}>
                                Pelkkä sivu <span className="text-blue-400">(990 €)</span>
                            </h1>

                            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                                Huippunopea ja moderni sivu kertamaksulla. Hoidat itse julkaisun ja ylläpidon – me toimitamme täydellisen koodipaketin.
                            </p>
                        </div>

                        {/* Content section */}
                        <div className="p-8 md:p-12">
                            <div className="prose prose-slate max-w-none text-lg leading-relaxed mb-10 text-slate-600">
                                <p>
                                    Paras valinta, jos yritykselläsi on jo teknistä osaamista tai haluat hallinnoida sivustoa täysin itsenäisesti. Kertamaksu. Sivut toimitetaan tiedostopakettina. Hoidat itse julkaisun ja ylläpidon.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 md:p-8 mb-10">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                                    Mitä on luvassa:
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex gap-3 text-slate-700">
                                        <svg className="w-6 h-6 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span><strong>1–3 myyntioptimoitua sivua:</strong> Tehokas kokonaisuus: esim. etusivu, palvelukuvaukset ja yhteystiedot.</span>
                                    </li>
                                    <li className="flex gap-3 text-slate-700">
                                        <svg className="w-6 h-6 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span><strong>Harkittu tekstirakenne:</strong> Myyvä sisältömuotoilu, joka ohjaa asiakkaan suoraan yhteydenottoon.</span>
                                    </li>
                                    <li className="flex gap-3 text-slate-700">
                                        <svg className="w-6 h-6 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span><strong>Huippuunsa viritetty nopeus:</strong> Salama-nopea latausaika parantaa käyttäjäkokemusta ja Google-näkyvyyttä.</span>
                                    </li>
                                    <li className="flex gap-3 text-slate-700">
                                        <svg className="w-6 h-6 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span><strong>Moderni & mobiilioptimoitu:</strong> Sivusto toimii upeasti puhelimella, tabletilla ja tietokoneella.</span>
                                    </li>
                                    <li className="flex gap-3 text-slate-700">
                                        <svg className="w-6 h-6 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span><strong>Someliitännät & yhteydenotto:</strong> Integroidut some-painikkeet (esim. FB/IG) ja ammattimainen lomake.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Order Form */}
                            <div>
                                {!formSubmitted ? (
                                    <>
                                        <h2 className={`${playfair.className} text-2xl font-bold mb-6 text-slate-900`}>Kysy lisää &quot;Pelkkä sivu&quot; -vaihtoehdosta</h2>
                                        <form className="space-y-4" onSubmit={handleSubmit}>
                                            <div>
                                                <label className="block text-sm font-semibold mb-1 text-slate-700">Nimi</label>
                                                <input type="text" name="name" className="w-full min-w-0 p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="Matti Meikäläinen" required />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold mb-1 text-slate-700">Sähköposti</label>
                                                <input type="email" name="email" className="w-full min-w-0 p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="matti@yritys.fi" required />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold mb-1 text-slate-700">Viesti</label>
                                                <textarea 
                                                    name="message"
                                                    className="w-full min-w-0 p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 outline-none h-32" 
                                                    defaultValue={`Hei! Olen kiinnostunut Pelkkä sivu -paketista (990 €). Haluaisin kuulla lyhyesti lisää, miten tämä toimisi meidän yrityksellemme. Yhteydenotto ei sido minua mihinkään.\n\nTarvitsen nettisivut: (kirjoita esim. yrityksen nimi, toimiala ja paikkakunta. Voit myös kirjoittaa lyhyesti toiveistasi, jotta osaamme tarjota juuri sinulle parasta ratkaisua)`}
                                                ></textarea>
                                            </div>
                                            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-600/30">
                                                Pyydä lisätietoja tai arvio
                                            </button>
                                            <p className="text-center text-xs text-slate-500 mt-4 leading-relaxed">
                                                Ei sitoutumispakkoa. Otamme yhteyttä yksityiskohtien vahvistamiseksi.<br />
                                                Laskutus tapahtuu vasta kun olemme sopineet projektin käynnistyksestä.
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
