"use client";

import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t border-stone-100">
      <div className="container mx-auto px-4 flex flex-col items-center gap-6">
        <Link 
          href="/" 
          className="group flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity duration-700 text-center"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-900 block">
            Muotoilu
          </span>
          <span className="text-2xl italic font-serif text-stone-800 lowercase block">
            sivumaakarit.
          </span>
        </Link>
        
        <div className="flex flex-wrap justify-center gap-8 text-xs uppercase tracking-widest font-bold text-stone-400">
          <Link href="/referenssit" className="hover:text-stone-900 transition-colors">Työnäytteet</Link>
          <Link href="/metodi" className="hover:text-stone-900 transition-colors">Metodi</Link>
          <Link href="/tarjous" className="hover:text-stone-900 transition-colors">Ota yhteyttä</Link>
        </div>
        
        <div className="text-[10px] text-stone-300 uppercase tracking-widest mt-4">
          © 2026 Sivumaakarit — Kaikki oikeudet pidätetään
        </div>
      </div>
    </footer>
  );
};
