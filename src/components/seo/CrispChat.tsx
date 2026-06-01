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
