export const siteConfig = {
    name: "Kotisivut yrittäjälle | Sivumaakarit",
    brandName: "Sivumaakarit",
    slogan: "Uskottava palvelusivu yrittäjälle – Valmiina 7 päivässä",
    description: "Löydy Googlesta ja tekoälystä. Kotisivut yrittäjälle 100/100-suorituskyvyllä. Valmis viikossa – ammattitaidolla.",
    url: "https://sivumaakarit.fi",

    // Yhteystiedot (NAP - Name, Address, Phone)
    contact: {
        phone: "+358 50 540 3661",
        email: "info@sivumaakarit.fi",
        address: "Etelä-Suomi",
        openingHours: "Ma-Pe 09-17",
        googleMapsEmbedUrl: ""
    },

    // Navigaatio
    nav: [
        { label: "Etusivu", href: "/" },
        { label: "Palvelut", href: "#services" },
        { label: "Hinnasto", href: "#pricing" },
        { label: "Usein kysyttyä", href: "#faq" },
        { label: "Ota yhteyttä", href: "#contact" },
    ],
    sivumaakaritNav: [
        { label: "Kotisivut", href: "/" },
        { label: "Referenssit", href: "/referenssit" },
        { label: "Metodi", href: "/metodi" },
        { label: "Ota yhteyttä", href: "/#contact" },
    ],

    // SEO & AIO
    keywords: ["Sivumaakarit", "Kodikotkot", "LVI-verkkosivut", "Yrittäjän kotisivut", "Huippunopeat kotisivut", "Sivustot 7 päivässä"],

    // Lomake-integraatio
    formspreeKey: "mvzvbrby",
    web3formsKey: "YOUR_WEB3FORMS_KEY_HERE",

    // Niche-kohtaiset palvelut
    services: [
        {
            title: "Mökkitalkkari ja pihatyöt",
            desc: "Nurmikonleikkuu, haravointi, rännien puhdistus ja polttopuiden teko. Hoidamme pihan ja kiinteistön kuntoon, jotta sinä voit rentoutua.",
            price: "Alk. 46 €/h",
            image: "/images/service_caretaker.webp"
        },
        {
            title: "Tekninen kausihuolto (LVI)",
            desc: "Vesijärjestelmien, pumppujen ja varaajien tyhjennys talveksi jäätymisvaurioiden estämiseksi. Ammattitaitoinen tarkastus takaa mielenrauhan.",
            image: "/images/service_hvac.webp"
        },
        {
            title: "Lomavahti ja turvallisuus",
            desc: "Säännölliset tarkastuskäynnit, raportointi ja mökin lämmitys ennen saapumistasi. Varmistamme kiinteistösi turvallisuuden poissaollessasi.",
            image: "/images/service_winter.webp"
        }
    ]
};
