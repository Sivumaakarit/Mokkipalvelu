import { siteConfig } from "@/lib/site-config";

export function Schema() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": `${siteConfig.url}/#organization`,
                "name": siteConfig.brandName || "Sivumaakarit",
                "url": siteConfig.url,
                "logo": {
                    "@type": "ImageObject",
                    "@id": `${siteConfig.url}/#logo`,
                    "url": `${siteConfig.url}/icon.webp`,
                    "contentUrl": `${siteConfig.url}/icon.webp`,
                    "width": "1024",
                    "height": "1024",
                    "caption": siteConfig.brandName || "Sivumaakarit"
                },
                "image": `${siteConfig.url}/icon.webp`,
                "description": siteConfig.description,
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
                            "text": "Keskity omaan yritykseesi, me pidämme huolen tekniikasta. Helppo avaimet käteen -ratkaisu kuukausimaksulla, ilman stressiä. Kun valitset ylläpidon, saat sivuston avausmaksun reilusti alennettuun hintaan. Me hoidamme palvelimet, tietoturvan ja päivitykset."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Miksi maksaisin kuukausittaista ylläpitoa?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Jatkuva ylläpito on VIP-huoltosopimus: me pesemme auton, katsomme moottoriin ja huolehdimme, että oikeat asiakkaat nousevat kyytiin. Se on sijoitus siihen, että sivusi tuo jatkuvasti uutta kauppaa."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Miten voitte tarjota näin nopeat toimitukset?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Keskitymme olennaiseen: selkeyteen, toimivuuteen ja löydettävyyteen. Emme rakenna raskaita himmeleitä, vaan hyödynnämme huippuluokan AI-pohjaisia työkaluja ja työskentelemme erittäin tehokkaasti heti kun materiaalit ovat kasassa. Sivustosi valmistuu nopeasti – parhaimmillaan jopa vuorokaudessa, joskin toimitusaika riippuu aina projektin laajuudesta ja materiaaleistasi."
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
