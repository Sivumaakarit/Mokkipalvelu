"use client";

import { siteConfig } from "@/lib/site-config";

export function WhatsAppButton() {
    const rawPhone = siteConfig.contact.phone;
    const cleanPhone = rawPhone.replace(/[^0-9]/g, "");
    
    // Default message that goes to the WhatsApp chat
    const defaultMessage = encodeURIComponent("Hei! Haluaisin kysyä lisää palveluistanne.");
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${defaultMessage}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-24 md:bottom-20 right-6 z-40 group flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA56] text-white p-3.5 md:px-5 md:py-3.5 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_35px_rgba(37,211,102,0.4)] hover:-translate-y-1 active:scale-95 transition-all duration-300 select-none cursor-pointer"
            aria-label="Ota yhteyttä WhatsAppilla"
            id="whatsapp-floating-button"
        >
            {/* Pulsing ripple effect to capture attention subtly */}
            <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping group-hover:animate-none -z-10 pointer-events-none"></span>

            {/* Premium, High-Fidelity WhatsApp SVG Icon */}
            <svg 
                className="w-6 h-6 md:w-5 md:h-5 fill-current shrink-0" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M12.004 0C5.378 0 .002 5.376.002 12.004c0 2.112.551 4.17 1.597 5.978L0 24l6.183-1.623a11.962 11.962 0 0 0 5.821 1.503h.005c6.623 0 12.002-5.376 12.002-12.004C24.011 5.376 18.63 0 12.004 0zm0 1.902c5.567 0 10.1 4.532 10.1 10.102 0 5.566-4.533 10.096-10.1 10.096-1.767 0-3.486-.464-5.006-1.341l-.358-.212-3.725.976.994-3.633-.233-.371c-.963-1.534-1.47-3.3-1.468-5.114.004-5.57 4.537-10.102 10.1-10.102zM8.498 6.969c-.198 0-.424.047-.621.233-.301.282-.99.967-.99 2.36 0 1.393 1.011 2.738 1.155 2.929.141.191 1.992 3.042 4.83 4.266.674.292 1.201.468 1.611.598.678.214 1.294.184 1.782.111.545-.081 1.678-.686 1.914-1.35.234-.664.234-1.233.164-1.35-.07-.117-.257-.184-.543-.326l-2.556-1.258c-.282-.14-.492-.093-.68.187l-.927 1.134c-.187.234-.379.257-.665.117a8.435 8.435 0 0 1-2.47-1.528 9.308 9.308 0 0 1-1.71-2.128c-.167-.282-.016-.437.126-.578l.68-.788c.14-.164.187-.282.282-.47.094-.187.047-.35-.023-.492l-1.258-3.031c-.201-.486-.411-.476-.621-.476z"/>
            </svg>

            {/* Desktop only text label */}
            <span className="hidden md:inline font-bold text-sm tracking-wide leading-none select-none">
                Kysy WhatsAppilla
            </span>
        </a>
    );
}
