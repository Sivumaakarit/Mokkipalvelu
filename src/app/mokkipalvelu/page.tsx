"use client";

import Link from "next/link";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { MarketInfo } from "@/components/landing/MarketInfo";
import { FAQ } from "@/components/landing/FAQ";
import { Contact } from "@/components/landing/Contact";
import { FakeContact } from "@/components/landing/FakeContact";
import { ContactBanner } from "@/components/landing/ContactBanner";
import { SalesSection } from "@/components/landing/SalesSection";
import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function MokkipalveluPage() {
  return (
    <>
      <Hero />
      <Services />
      <ContactBanner />
      <MarketInfo />
      <Testimonials />
      <Pricing />
      <FakeContact />
      <Contact />
      <SalesSection />
      <FAQ />

      {/* FINAL CONVERSION SECTION */}
      <section className="pt-12 pb-24 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/10 transform skew-y-3 origin-top-right scale-110 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className={`${playfair.className} text-3xl md:text-5xl font-black mb-8 tracking-tight italic`}>
            Valmis aloittamaan kasvun?
          </h2>
          <p className={`${inter.className} text-xl md:text-2xl mb-12 text-slate-400 max-w-2xl mx-auto font-light leading-relaxed`}>
            Älä jätä kauppoja kilpailijoillesi. Ota ensimmäinen askel kohti <span className="text-white font-bold">100/100 suorituskykyä</span> jo tänään.
          </p>
          <Link
            href="/tarjous"
            className={`${inter.className} inline-block bg-white text-slate-950 font-black text-xl md:text-2xl uppercase tracking-tighter py-6 px-12 rounded-2xl hover:bg-slate-100 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-none hover:translate-y-1 transform active:scale-95`}
          >
            PYYDÄ TARJOUS – ALOITA TÄSTÄ
          </Link>
        </div>
      </section>

      <footer className="w-full py-16 text-center bg-stone-900 text-stone-400">
        <div className="container mx-auto px-4">
          <p className={`${inter.className} text-xl font-bold text-white mb-6 uppercase tracking-[0.3em] italic`}>Sivumaakarit</p>
          <p className={`${inter.className} max-w-xl mx-auto mb-10 text-slate-400 text-sm md:text-base leading-relaxed opacity-80`}>
            Me haluamme, että sinun kova työsi ja ammattitaitosi <span className="text-blue-400">ovat asiakkaittesi saatavilla.</span>
          </p>

          <div className={`${inter.className} flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-12 text-stone-200 font-medium`}>
            <a href="tel:+358505403661" className="hover:text-amber-400 transition-colors flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              050 540 3661
            </a>
            <a href="mailto:info@sivumaakarit.fi" className="hover:text-amber-400 transition-colors flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              info@sivumaakarit.fi
            </a>
          </div>

          <div className="h-px bg-white/10 w-24 mx-auto mb-10"></div>
          <p className="text-xs opacity-50">© {new Date().getFullYear()} Sivumaakarit. Kaikki oikeudet pidätetään.</p>
        </div>
      </footer>
    </>
  );
}
