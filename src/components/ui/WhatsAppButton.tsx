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

            {/* Official WhatsApp SVG Icon */}
            <svg 
                className="w-6 h-6 md:w-5 md:h-5 fill-current shrink-0" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.437 0 9.862-4.41 9.866-9.83.002-2.628-1.02-5.1-2.881-6.958C16.388 1.949 13.91 1.921 11.279 1.92c-5.44 0-9.866 4.41-9.87 9.83-.001 2.012.528 3.978 1.529 5.708l-.991 3.616 3.71-.973zm11.238-6.163c-.301-.15-1.782-.88-2.059-.98-.277-.1-.478-.15-.68.15-.202.3-.779.98-.956 1.18-.178.2-.356.225-.657.075-.301-.15-1.27-.467-2.42-1.493-.895-.798-1.5-1.785-1.277-2.185.223-.4.024-.615-.126-.764-.135-.134-.301-.35-.452-.525-.15-.175-.201-.3-.3-.5-.099-.2-.05-.375.025-.525.075-.15.68-1.65.93-2.15.244-.5.489-.4.68-.4.177-.008.38-.01.58-.01.201 0 .528.075.802.375.277.3 1.056 2.575 1.147 2.762.091.188.152.4.025.65-.125.25-.264.4-.415.575-.15.175-.306.35-.438.475-.145.138-.297.288-.126.58.172.292.763 1.258 1.636 2.035.725.645 1.336.938 1.783 1.125.447.188.765.138.966-.088.201-.225.779-.98.986-1.325.207-.35.415-.3.716-.15.301.15 1.907.9 2.236 1.05.33.15.55.225.63.35.08.125.08.725-.22 1.375-.302.65-1.783 1.275-2.457 1.325-.675.05-1.35-.125-4.55-1.375z" />
            </svg>

            {/* Desktop only text label */}
            <span className="hidden md:inline font-bold text-sm tracking-wide leading-none select-none">
                Kysy WhatsAppilla
            </span>
        </a>
    );
}
