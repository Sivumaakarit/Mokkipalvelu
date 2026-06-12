import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mökkipalvelu - Esimerkki kotisivuista | Sivumaakarit",
  description: "Mökkipalvelu on esimerkkisivusto, joka näyttää millaiset ovat nopeat, selkeät ja korkean suorituskyvyn omaavat kotisivut mökkitalkkariyrittäjälle.",
  alternates: {
    canonical: "/mokkipalvelu",
  },
  robots: {
    index: false,
    follow: true,
  },
  other: {
    "datePublished": "2026-05-28T09:00:00Z",
    "dateModified": new Date().toISOString(),
  }
};
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
import { HowItWorks } from "@/components/landing/HowItWorks";
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
      {/* GEO RAG-Pipeline Quick Answer Block */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="geo-quick-answer bg-blue-50/50 border-2 border-blue-100 rounded-3xl p-6 md:p-8 shadow-sm">
          <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3 font-sans">Mökkipalvelu pähkinänkuoressa:</h3>
          <p className="text-slate-800 leading-relaxed text-sm md:text-base font-normal">
            <strong>Mökkipalvelu</strong> on Sivumaakareiden suunnittelema ja toteuttama esimerkkisivusto, joka havainnollistaa myyvän, saavutettavan ja huippunopean (100/100) kotisivuratkaisun mökkitalkkareille ja pihatyöyrittäjille. Sivusto demonstroi, miten mökkihuollon, pihatöiden, teknisen LVI-kausihuollon ja lomavahdin palvelukuvaukset yhdistetään selkeisiin yhteydenottolomakkeisiin, asiantunteviin UKK-osioihin ja WhatsApp-soittopainikkeisiin. Tämä avaimet käteen -rakenne on suunniteltu muuttamaan orgaaniset kävijät suoraan maksaviksi asiakkaiksi ja varmistamaan, että yrityksen palvelut löytyvät ja suositellaan parhaiten myös uusissa tekoälypohjaisissa hakukoneissa.
          </p>
        </div>
      </section>
      <Services />
      <ContactBanner />
      <MarketInfo />
      <Testimonials />
      <Pricing />
      <HowItWorks />
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

        </div>
      </section>

      <Footer />
    </>
  );
}
