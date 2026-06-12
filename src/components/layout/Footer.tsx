"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const Footer = () => {
  return (
    <footer className="bg-white py-20 border-t border-stone-100 text-stone-600 font-sans">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-4 lg:gap-8 mb-16">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4 md:col-span-3">
            <Link href="/" className="group flex flex-col gap-1 w-max -mt-1.5">
              <span className="text-2xl italic font-serif text-stone-850 lowercase block leading-none">
                sivumaakarit<span className="text-blue-600">.</span>
              </span>
            </Link>
            <p className="text-sm text-stone-500 leading-relaxed font-light mt-2">
              Kirkas viesti, myyvä rakenne ja 100/100 nopeus. Avointa ja ammattitaitoista verkkosivumuotoilua suomalaisille yrittäjille.
            </p>
          </div>

          {/* Column 2: Yritystiedot */}
          <div className="flex flex-col gap-4 md:col-span-2 md:col-start-5">
            <h4 className="text-xs uppercase tracking-widest font-bold text-stone-900">Yritystiedot</h4>
            <div className="flex flex-col gap-2 text-sm text-stone-600 font-light">
              <span>Sivumaakarit</span>
              <span>Yritysmuoto: Toiminimi</span>
              <span>Y-tunnus: <strong className="text-stone-900 font-bold">{siteConfig.contact.businessId}</strong></span>
              <span>Kotipaikka: Lohja</span>
            </div>
          </div>

          {/* Column 3: Yhteystiedot */}
          <div className="flex flex-col gap-4 md:col-span-2 md:col-start-8">
            <h4 className="text-xs uppercase tracking-widest font-bold text-stone-900">Ota yhteyttä</h4>
            <div className="flex flex-col gap-2 text-sm text-stone-600 font-light">
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="hover:text-stone-900 transition-colors font-medium">{siteConfig.contact.phone}</a>
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-stone-900 transition-colors">{siteConfig.contact.email}</a>
            </div>
          </div>

          {/* Column 4: Navigaatio */}
          <div className="flex flex-col gap-4 md:col-span-2 md:col-start-11">
            <h4 className="text-xs uppercase tracking-widest font-bold text-stone-900">Sivukartta</h4>
            <div className="flex flex-col gap-2 text-sm uppercase tracking-wider font-bold text-stone-400">
              <Link href="/referenssit" className="hover:text-stone-900 transition-colors w-max">Töitämme</Link>
              <Link href="/metodi" className="hover:text-stone-900 transition-colors w-max">Metodi</Link>
              <Link href="/tarjous" className="hover:text-stone-900 transition-colors w-max">Pyydä tarjous</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400 font-light">
          <span>© 2026 {siteConfig.brandName}. Kaikki oikeudet pidätetään.</span>
          <span>Päivitetty viimeksi: 2026-06-12 | Suomalaista työtä Lohjalta käsin.</span>
        </div>
      </div>
    </footer>
  );
};
