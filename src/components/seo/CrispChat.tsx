"use client";

import { useEffect } from "react";
import { siteConfig } from "@/lib/site-config";

export function CrispChat() {
    useEffect(() => {
        const websiteId = siteConfig.crispWebsiteId;
        if (!websiteId) return;

        // Initialize Crisp globals with type casting for TypeScript safety
        (window as any).$crisp = [];
        (window as any).CRISP_WEBSITE_ID = websiteId;

        // Estetään sähköpostipyynnön (email prompt) ilmestyminen liian nopeasti / automaattisesti
        (window as any).$crisp.push(["set", "chat:email:prompt", false]);

        // Piilotetaan oletusarvoinen sininen chat-kuvake, jotta voimme käyttää omaa painiketta
        (window as any).$crisp.push(["do", "chat:hide"]);

        // Dynamically inject the Crisp script into the head
        const d = document;
        const s = d.createElement("script");
        s.src = "https://client.crisp.chat/l.js";
        s.async = true;
        
        const head = d.getElementsByTagName("head")[0];
        if (head) {
            head.appendChild(s);
        }
    }, []);

    return null;
}
