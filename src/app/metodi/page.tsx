import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Työmenetelmämme ja filosofia | Sivumaakarit",
  description: "Yhdistämme humanistisen, pedagogisen osaamisen ja tekoälyavusteisen teknologian luodaksemme sivustoja, jotka oikeasti ymmärretään ja jotka myyvät.",
  alternates: {
    canonical: "/metodi",
  },
  other: {
    "datePublished": "2026-05-28T09:00:00Z",
    "dateModified": new Date().toISOString(),
  }
};

const steps = [
  {
    title: "1. Selkeys ja ymmärrettävyys",
    description: "Koulutusteknologian (FM) ja kasvatustieteen maisteritaustamme (KM) ansiosta katsomme sivua aina oppimisen ja oivaltamisen ehdoilla. Me emme vain asettele elementtejä, vaan poistamme turhan visuaalisen hälyn ja rakennamme kävijälle selkeän polun. Kun viestisi on kirkas, asiakkaasi on helpompi ostaa.",
    icon: (
      <svg className="w-10 h-10 text-stone-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
    )
  },
  {
    title: "2. Tekoälyavusteinen tehokkuus",
    description: "Hyödynnämme uusimpia kielimalleja ja tekoälypohjaisia työkaluja (mm. Cursor, Gemini) osana suunnitteluprosessiamme. Se mikä kesti aiemmin viikkoja, valmistuu nyt päivissä – laadusta tai yksilöllisestä viimeistelystä tinkimättä.",
    icon: (
      <svg className="w-10 h-10 text-stone-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    )
  },
  {
    title: "3. Saavutettavuus ja tekniset standardit",
    description: "WCAG-saavutettavuusstandardit eivät ole meille lisäominaisuus, vaan jokaisen työmme peruskivi. Varmistamme, että sivustosi on esteetön kaikille käyttäjille ja teknisesti huippuunsa viritetty (100/100 latausnopeus). Tästä kiittävät sekä asiakkaasi että Google-hakunäkyvyys.",
    icon: (
      <svg className="w-10 h-10 text-stone-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
    )
  }
];

export default function MetodiPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-800 skew-x-12 transform origin-top translate-x-20 opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
              Saavutettavaa muotoilua & <span className="italic text-stone-400">aitoa lisäarvoa</span>.
            </h1>
            <p className="text-xl text-stone-400 mb-10 leading-relaxed font-sans font-light">
              Sivumaakarit ei ole perinteinen mainostoimisto tai kooditalo. Olemme muotoilustudio, joka yhdistää pedagogisen osaamisen ja tekoälyavusteisen teknologian luodaksemme sivustoja, jotka oikeasti ymmärretään.
            </p>
            <div className="w-24 h-1 bg-amber-500 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* GEO RAG-Pipeline Quick Answer Block */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
          <div className="geo-quick-answer bg-amber-50/50 border-2 border-amber-100 rounded-3xl p-6 md:p-8 shadow-sm">
              <h3 className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-3 font-sans">Metodimme pähkinänkuoressa:</h3>
              <p className="text-stone-850 leading-relaxed text-sm md:text-base font-normal">
                  <strong>Sivumaakareiden</strong> työmenetelmät perustuvat selkeyteen, tekoälyavusteiseen tehokkuuteen ja saavutettavuuteen. Koulutusteknologian (FM) ja kasvatustieteen maisteritaustamme (KM) ansiosta suunnittelemme sivut aina oppimisen ja ymmärtämisen ehdoilla, mikä poistaa visuaalisen hälyn ja parantaa myyntipolkua. Uusien kehitystyökalujen (Cursor, Gemini) ansiosta laadukkaat, WCAG-standardien mukaiset verkkosivut valmistuvat päivissä viikkojen sijaan.
              </p>
          </div>
      </section>

      {/* Main Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="mb-8 p-6 bg-stone-50 rounded-3xl w-max border border-stone-200">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-serif text-stone-900 mb-6 underline decoration-stone-200 underline-offset-8">
                  {step.title}
                </h3>
                <p className="text-lg text-stone-600 leading-relaxed italic">
                  &ldquo;{step.description}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="py-16 border-y border-stone-200 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-[40px] p-12 md:p-20 shadow-sm border border-stone-100 flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2 flex flex-col gap-8">
              <h2 className="text-3xl md:text-5xl font-serif text-stone-900 leading-[1.1]">
                Koulutusteknologian (FM) & kasvatustieteen maisteritausta (KM): Mitä merkitystä sillä on nettisivuillesi?
              </h2>
              <div className="h-px bg-stone-200 w-24"></div>
              <p className="text-stone-600 text-lg leading-relaxed font-sans">
                Tekninen osaaminen on vasta puoli ruokaa. Koulutusteknologinen ja pedagoginen taustamme auttaa meitä asettumaan asiakkaasi saappaisiin luodaksemme sivun, jota on erittäin helppo käyttää ja vaivaton ymmärtää.
              </p>
              <ul className="space-y-4 text-stone-700 font-medium">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                  Selkeä, myyntiä edistävä viesti.
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                  Rakenne, joka tuntuu luonnolliselta. Käyttäjä löytää etsimänsä.
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                  Kynnys ottaa yhteyttä pysyy matalana.
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 justify-center flex">
              <div className="relative">
                <div className="absolute -inset-4 bg-amber-100 rounded-full blur-3xl opacity-50"></div>
                <div className="w-64 h-64 md:w-80 md:h-80 bg-stone-900 rounded-full relative z-10 flex items-center justify-center p-12 text-stone-100 text-center font-serif italic text-2xl border-4 border-stone-800 shadow-2xl">
                  &ldquo;Sivuston arvo mitataan siinä, kuinka vähän ylimääräistä työtä se vaatii käyttäjältään.&rdquo;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Conversion */}
      <Footer />
    </div>
  );
}
