"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { playfair } from "@/lib/fonts";

export function ContactForm() {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch(`https://formspree.io/f/${siteConfig.formspreeKey}`, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setFormSubmitted(true);
                form.reset();
            } else {
                alert("Hups! Jotain meni pieleen. Yritä uudelleen myöhemmin.");
            }
        } catch (error) {
            alert("Hups! Jotain meni pieleen. Yritä uudelleen myöhemmin.");
        }
    };

    if (formSubmitted) {
        return (
            <div id="success-msg" className="bg-emerald-50 border border-emerald-100 p-12 rounded-[2rem] text-center shadow-xl">
                <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/30">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-3xl font-black text-emerald-900 mb-4 tracking-tight">Kiitos viestistäsi!</h3>
                <p className="text-emerald-700 text-lg font-medium">Olemme sinuun yhteydessä pian aloituskokousta varten.</p>
            </div>
        );
    }

    return (
        <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-slate-100 relative group/form transition-all duration-500 hover:shadow-2xl">
            <div className="absolute -inset-px bg-gradient-to-r from-blue-100 to-cyan-100 rounded-[2rem] -z-10 group-hover/form:opacity-100 opacity-0 transition-opacity"></div>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-slate-700 ml-1">Nimi</label>
                        <input type="text" name="name" className="w-full min-w-0 p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400" placeholder="Matti Meikäläinen" required />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-slate-700 ml-1">Sähköposti</label>
                        <input type="email" name="email" className="w-full min-w-0 p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400" placeholder="matti@yritys.fi" required />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700 ml-1">Viesti / Yrityksesi ala</label>
                    <textarea name="message" className="w-full min-w-0 p-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all h-48 placeholder:text-slate-400" placeholder="Kerro lyhyesti mitä teet..." defaultValue={`Hei! Haluan kysyä lisää nettisivuista tai pyytää maksuttoman arvion. Ymmärrän, että tämä ei sido minua mihinkään.

Toimialani ja lyhyt kuvaus yrityksestäni: (esim. LVI, siivous tai puutarhuri, ja paikkakunta)`}></textarea>
                </div>
                <button type="submit" className={`${playfair.className} w-full bg-blue-700 text-white font-bold py-5 rounded-2xl hover:bg-blue-800 transition-all shadow-[0_15px_30px_rgba(29,78,216,0.3)] hover:shadow-none hover:translate-y-0.5 transform active:scale-95 text-xl tracking-tight`}>
                    Pyydä lisätietoja tai arvio
                </button>
                <p className="text-center text-xs text-slate-400 mt-4 leading-relaxed">
                    Yhteydenotto ei sido sinua tilaamaan. <br />
                    Sopimuskumppanina toimii suomalainen Tmi Sivumaakarit (Y-tunnus: {siteConfig.contact.businessId}).
                </p>
            </form>
        </div>
    );
}
