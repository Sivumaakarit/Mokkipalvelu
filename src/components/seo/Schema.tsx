import { siteConfig } from "@/lib/site-config";

export function Schema() {
    const isPremium = siteConfig.pricingStrategy === "premium";
    const preset = siteConfig.pricingPresets[siteConfig.pricingStrategy];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${siteConfig.url}/#webpage`,
                "url": siteConfig.url,
                "name": siteConfig.name || "Sivumaakarit",
                "description": siteConfig.description,
                "datePublished": "2026-05-28T09:00:00Z",
                "dateModified": new Date().toISOString(),
                "publisher": { "@id": `${siteConfig.url}/#organization` },
                "about": { "@id": `${siteConfig.url}/#business` }
            },
            {
                "@type": "Organization",
                "@id": `${siteConfig.url}/#organization`,
                "name": siteConfig.brandName || "Sivumaakarit",
                "url": siteConfig.url,
                "taxID": siteConfig.contact.businessId,
                "logo": {
                    "@type": "ImageObject",
                    "@id": `${siteConfig.url}/#logo`,
                    "url": `${siteConfig.url}/icon.png`,
                    "contentUrl": `${siteConfig.url}/icon.png`,
                    "width": "1024",
                    "height": "1024",
                    "caption": siteConfig.brandName || "Sivumaakarit"
                },
                "image": `${siteConfig.url}/icon.png`,
                "description": siteConfig.description,
                "founder": {
                    "@type": "Person",
                    "name": "Esko Mäki"
                },
                "knowsAbout": [
                    "Web Design",
                    "Search Engine Optimization",
                    "Generative Engine Optimization (GEO)",
                    "Next.js",
                    "React",
                    "WordPress Migration",
                    "Local SEO",
                    "Speed Optimization"
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": siteConfig.contact.phone,
                    "contactType": "customer service",
                    "email": siteConfig.contact.email,
                    "areaServed": "FI",
                    "availableLanguage": "Finnish"
                }
            },
            {
                "@type": "LocalBusiness",
                "@id": `${siteConfig.url}/#business`,
                "name": siteConfig.brandName || "Sivumaakarit",
                "description": siteConfig.description,
                "url": siteConfig.url,
                "telephone": siteConfig.contact.phone,
                "email": siteConfig.contact.email,
                "taxID": siteConfig.contact.businessId,
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Lohja",
                    "addressRegion": "Uusimaa",
                    "addressCountry": "FI"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "60.248",
                    "longitude": "24.066"
                },
                "knowsAbout": [
                    "Web Design",
                    "Search Engine Optimization",
                    "Generative Engine Optimization (GEO)",
                    "Next.js",
                    "React",
                    "WordPress Migration",
                    "Local SEO",
                    "Speed Optimization"
                ],
                "areaServed": ["Lohja", "Uusimaa", "Finland"],
                "image": `${siteConfig.url}/images/tarjous-hero.webp`, 
                "priceRange": "€€",
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "17:00"
                }
            },
            {
                "@type": "FAQPage",
                "@id": `${siteConfig.url}/#faq`,
                "name": `Usein kysytyt kysymykset | ${siteConfig.name}`,
                "publisher": { "@id": `${siteConfig.url}/#organization` },
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Miksi valitsisin kuukausimaksullisen ylläpidon?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": `Keskity omaan yritykseesi, me pidämme huolen tekniikasta. Helppo avaimet käteen -ratkaisu kuukausimaksulla, ilman stressiä. Kun valitset ylläpidon (esim. Perus-paketti alkaen ${preset.basicAnnual}/kk + alv), saat sivuston asennuksen ja käyttöönoton erittäin sujuvasti. Me hoidamme palvelimet, tietoturvan ja päivitykset. Sinun tehtäväksesi jää vain uusien asiakkaiden palveleminen.`
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Miksi valitsisin laajemman Plus-paketin ylläpidon?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Mieti sivustoasi firman autona. Halpa kertamaksu on se, jolla ostat uuden auton. Mutta jos et koskaan vaihda öljyjä, katso rengaspaineita tai pese sitä, se menettää arvonsa nopeasti. Jatkuva ylläpito on VIP-huoltosopimus: me pesemme auton, katsomme moottoriin ja huolehdimme jopa siitä, että oikeat asiakkaat nousevat kyytiin. Se on sijoitus siihen, että olemassa oleva sivusi tuo jatkuvasti uutta kauppaa."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Miten voitte tarjota näin nopeat toimitukset?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Keskitymme olennaiseen: selkeyteen, toimivuuteen ja löydettävyyteen. Emme rakenna raskaita himmeleitä tai kymmeniä turhia alasivuja. Nopeus perustuu siihen, että käytämme valmiiksi testattua, erittäin tehokkaasti myyvää sivustorakennetta sekä hyödynnämme työssämme huippuluokan AI-pohjaisia työkaluja. Emme aloita jokaista projektia alusta asti nollasta, mikä säästää valtavasti aikaa ja takaa, että sivustosi valmistuu nopeasti – parhaimmillaan jopa vuorokaudessa siitä, kun olemme saaneet kaikki materiaalit (kyseessä ei kuitenkaan ole sitova yleislupaus, sillä toimitusaika riippuu aina projektin koosta)."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Mikä on ylläpitosopimuksen sitovuus ja irtisanomisaika?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": `Reilun ja ${isPremium ? "asiantuntevan kumppanuuden" : `erittäin edullisen rakennusmaksun (${preset.starterSetup} + alv)`} mahdollistamiseksi ylläpito- ja turvasopimus solmitaan aluksi 12 kuukauden määräajaksi. Tämän jälkeen sopimus jatkuu joustavasti toistaiseksi voimassaolevana kuukausihinnalla (Perus: ${preset.basicMonthly} + alv, Plus: ${preset.plusMonthly} + alv) vain 3 kuukauden irtisanomisajalla (tai voit valita uuden, tuolloin tarjolla olevan vuosisopimuksen). Kun ylläpito päättyy, sivusto koodineen ja sisältöineen on täysin sinun omaisuuttasi – ei alustaloukkuja.`
                        }
                    }
                ]
            },
            {
                "@type": "ItemList",
                "@id": `${siteConfig.url}/#services`,
                "name": "Sivumaakareiden Palvelusivut",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Moderni laskeutumissivu",
                        "description": "Premium-tason myyntisivu, joka on suunniteltu muuttamaan kävijät asiakkaiksi."
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Google Lighthouse 100/100",
                        "description": "Täydelliset tekniset pisteet nopeudesta ja löydettävyydestä."
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Toimitus nopeasti",
                        "description": "Sivustot ovat valmiina nopeasti materiaalin toimittamisen jälkeen."
                    }
                ]
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
