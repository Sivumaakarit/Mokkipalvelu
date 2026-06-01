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
import { Footer } from "@/components/layout/Footer";
import { Playfair_Display, Inter } from "next/font/google";
import { CrispChat } from "@/components/seo/CrispChat";
import { CustomChatButton } from "@/components/ui/CustomChatButton";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function MokkipalveluPage() {
  return (
    <>
      <CrispChat />
      <CustomChatButton />
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
      <section className="pt-12 pb-16 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-500/10 transform skew-y-3 origin-top-right scale-110 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className={`${playfair.className} text-3xl md:text-5xl font-black mb-8 tracking-tight italic`}>
            Haluatko kuulla lisää?
          </h2>
          <p className={`${inter.className} text-xl md:text-2xl mb-12 text-slate-400 max-w-2xl mx-auto font-light leading-relaxed`}>
            Älä jätä kauppoja kilpailijoillesi. Ota ensimmäinen askel kohti <span className="text-white font-bold">100/100 suorituskykyä</span> jo tänään.
          </p>
          <Link
            href="/tarjous"
            className={`${inter.className} inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xl md:text-2xl uppercase tracking-tighter py-6 px-12 rounded-2xl hover:brightness-110 transition-all shadow-[0_20px_50px_rgba(6,182,212,0.3)] hover:shadow-none hover:translate-y-1 transform active:scale-95 italic`}
          >
            KYSY LISÄÄ TAI PYYDÄ ARVIO
          </Link>
          <p className="mt-6 text-sm text-slate-400/80 max-w-sm mx-auto leading-relaxed">
            <strong className="text-slate-300">Ei määräaikaisia lukkovuosia.</strong><br/>Kuukausitilauksen voi perua milloin tahansa (1 kk irtisanomisaika). Yhteydenotto ei sido sinua tilaamaan.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
