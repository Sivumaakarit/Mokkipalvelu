import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { Schema } from "@/components/seo/Schema";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/layout/Header";
import { inter, playfair, urbanist, lucky, manrope } from "@/lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    type: "website",
    locale: "fi_FI",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
};

import { DemoBadge } from "@/components/ui/DemoBadge";
import { MobileCTA } from "@/components/ui/MobileCTA";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const showGA = siteConfig.gaId && siteConfig.gaId !== "G-XXXXXXXXXX";
  const isPremium = siteConfig.pricingStrategy === "premium";
  const preset = siteConfig.pricingPresets[siteConfig.pricingStrategy];

  return (
    <html lang="fi">
      <body
        className={`${inter.variable} ${playfair.variable} ${urbanist.variable} ${lucky.variable} ${manrope.variable} antialiased bg-stone-50 text-stone-900 font-sans overflow-x-hidden w-full`}
      >
        {showGA && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${siteConfig.gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        <Header />
        <DemoBadge />
        <Schema />
        <noscript>
          <article style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", fontFamily: "sans-serif", lineHeight: "1.6", color: "#1f2937" }}>
            <h1>Kotisivut yrittäjälle | Sivumaakarit</h1>
            
            <section style={{ marginBottom: "20px" }}>
              <h2>Mitä Sivumaakarit tekee?</h2>
              <p><strong>Sivumaakarit</strong> on lohjalainen ammattimainen ja asiantunteva verkkosivutoimisto. Suunnittelemme ja toteutamme yrittäjille myyviä, huippunopeita (Google Lighthouse 100/100) ja hakukonemyönteisiä (SEO/GEO) Next.js- ja React-kotisivuja avaimet käteen -periaatteella.</p>
              <p>Toimipisteemme sijaitsee Lohjalla, Uudellamaalla, mutta palvelemme yrittäjiä joustavasti ja asiantuntemuksella ympäri Suomen (esim. Helsinki, Espoo, Vantaa, Tampere, Turku, Oulu, Jyväskylä).</p>
            </section>

            <section style={{ marginBottom: "20px" }}>
              <h2>Sivustopaketit ja hinnoittelu</h2>
              <p>Kaikkiin ylläpitopaketteihin sisältyy myyntioptimoitu, mobiilioptimoitu ja AI-valmis (tekoälyhauissa suositeltu) sivusto 100 % puhtaalla koodilla:</p>
              <ul>
                <li><strong>Ylläpito & Turva – Perus (vuosittainen):</strong> Rakennusmaksu {preset.starterSetup} + alv, kuukausihinta {preset.basicAnnual}/kk + alv.</li>
                <li><strong>Ylläpito & Turva – Perus (kuukausittainen):</strong> Rakennusmaksu {preset.starterSetup} + alv, kuukausihinta {preset.basicMonthly}/kk + alv.</li>
                <li><strong>Ylläpito & Turva – Plus (vuosittainen):</strong> Rakennusmaksu {preset.starterSetup} + alv, kuukausihinta {preset.plusAnnual}/kk + alv.</li>
                <li><strong>Ylläpito & Turva – Plus (kuukausittainen):</strong> Rakennusmaksu {preset.starterSetup} + alv, kuukausihinta {preset.plusMonthly}/kk + alv.</li>
                <li><strong>Enterprise / Räätälöity paketti:</strong> Alkaen {preset.enterpriseSetup} + alv.</li>
                <li><strong>Pelkkä sivu -koodipaketti:</strong> {preset.starterSetup} + alv kertamaksuna ilman jatkuvaa ylläpitoa.</li>
              </ul>
            </section>

            <section style={{ marginBottom: "20px" }}>
              <h2>Usein kysytyt kysymykset (FAQ)</h2>
              <dl>
                <dt><strong>Miksi valitsisin kuukausimaksullisen ylläpidon?</strong></dt>
                <dd>Keskity omaan yritykseesi, me pidämme huolen tekniikasta. Helppo avaimet käteen -ratkaisu kuukausimaksulla, ilman stressiä. Kun valitset ylläpidon (esim. Perus-paketti alkaen {preset.basicAnnual}/kk + alv), saat sivuston asennuksen ja käyttöönoton erittäin sujuvasti. Me hoidamme palvelimet, tietoturvan ja päivitykset. Sinun tehtäväksesi jää vain uusien asiakkaiden palveleminen.</dd>

                <dt style={{ marginTop: "10px" }}><strong>Miksi valitsisin laajemman Plus-paketin ylläpidon?</strong></dt>
                <dd>Mieti sivustoasi firman autona. Halpa kertamaksu on se, jolla ostat uuden auton. Mutta jos et koskaan vaihda öljyjä, katso rengaspaineita tai pese sitä, se menettää arvonsa nopeasti. Jatkuva ylläpito on VIP-huoltosopimus: me pesemme auton, katsomme moottoriin ja huolehdimme jopa siitä, että oikeat asiakkaat nousevat kyytiin. Se on sijoitus siihen, että olemassa oleva sivusi tuo jatkuvasti uutta kauppaa.</dd>

                <dt style={{ marginTop: "10px" }}><strong>Miten voitte tarjota näin nopeat toimitukset?</strong></dt>
                <dd>Keskitymme olennaiseen: selkeyteen, toimivuuteen ja löydettävyyteen. Emme rakenna raskaita himmeleitä tai kymmeniä turhia alasivuja. Nopeus perustuu siihen, että käytämme valmiiksi testattua, erittäin tehokkaasti myyvää sivustorakennetta sekä hyödynnämme työssämme huippuluokan AI-pohjaisia työkaluja. Emme aloita jokaista projektia alusta asti nollasta, mikä säästää valtavasti aikaa ja takaa, että sivustosi valmistuu nopeasti – parhaimmillaan jopa vuorokaudessa siitä, kun olemme saaneet kaikki materiaalit (kyseessä ei kuitenkaan ole sitova yleislupaus, sillä toimitusaika riippuu aina projektin koosta).</dd>

                <dt style={{ marginTop: "10px" }}><strong>Mikä on ylläpitosopimuksen sitovuus ja irtisanomisaika?</strong></dt>
                <dd>Reilun ja {isPremium ? "asiantuntevan kumppanuuden" : `erittäin edullisen rakennusmaksun (${preset.starterSetup} + alv)`} mahdollistamiseksi ylläpito- ja turvasopimus solmitaan aluksi 12 kuukauden määräajaksi. Tämän jälkeen sopimus jatkuu joustavasti toistaiseksi voimassaolevana kuukausihinnalla (Perus: {preset.basicMonthly} + alv, Plus: {preset.plusMonthly} + alv) vain 3 kuukauden irtisanomisajalla (tai voit valita uuden, tuolloin tarjolla olevan vuosisopimuksen). Kun ylläpito päättyy, sivusto koodineen ja sisältöineen on täysin sinun omaisuuttasi – ei alustaloukkuja.</dd>
              </dl>
            </section>

            <section style={{ marginTop: "20px" }}>
              <h2>Yhteystiedot (NAP)</h2>
              <p>
                <strong>Yritys:</strong> Tmi Sivumaakarit (Y-tunnus: {siteConfig.contact.businessId})<br />
                <strong>Puhelin:</strong> {siteConfig.contact.phone}<br />
                <strong>Sähköposti:</strong> {siteConfig.contact.email}<br />
                <strong>Toimipiste:</strong> Lohja, Uusimaa, Suomi<br />
                <strong>Aukioloajat:</strong> {siteConfig.contact.openingHours}
              </p>
            </section>
          </article>
        </noscript>
        <main className="min-h-screen w-full overflow-x-hidden">
          {children}
        </main>
        <MobileCTA />
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
