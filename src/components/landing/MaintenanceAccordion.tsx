
"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle, Clock, Shield, Activity, Headphones, FileText } from "lucide-react";
import { urbanist, manrope } from "@/lib/fonts";

type AccordionItemProps = {
    title: string;
    price: string;
    description: string;
    children: React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
    highlight?: boolean;
};

function AccordionItem({ title, price, description, children, isOpen, onClick, highlight }: AccordionItemProps) {
    return (
        <div className={`border rounded-xl transition-all duration-300 overflow-hidden ${highlight
            ? "bg-slate-900 border-slate-700 shadow-lg shadow-cyan-900/20"
            : "bg-white border-slate-200 shadow-sm hover:shadow-md"
            }`}>
            <button
                onClick={onClick}
                className="w-full flex flex-col sm:flex-row sm:items-center justify-between p-5 text-left gap-4"
            >
                <div className="flex-1">
                    <h3 className={`${urbanist.className} font-bold text-lg mb-1 flex items-center gap-2 ${highlight ? "text-white" : "text-slate-900"}`}>
                        {title}
                        {highlight && <span className="text-[10px] bg-cyan-900 text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-800 uppercase tracking-wider font-bold">Suositus</span>}
                    </h3>
                    <p className={`${manrope.className} text-sm ${highlight ? "text-slate-400" : "text-slate-500"} font-light`}>{description}</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className={`${urbanist.className} font-bold text-xl whitespace-nowrap ${highlight ? "text-cyan-400" : "text-blue-700"}`}>
                        {price}
                    </div>
                    {isOpen ? (
                        <ChevronUp className={`w-5 h-5 ${highlight ? "text-slate-400" : "text-slate-400"}`} />
                    ) : (
                        <ChevronDown className={`w-5 h-5 ${highlight ? "text-slate-400" : "text-slate-400"}`} />
                    )}
                </div>
            </button>

            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <div className={`p-5 pt-0 border-t ${highlight ? "border-slate-800 text-slate-300" : "border-slate-100 text-slate-600"}`}>
                        <div className="pt-4 space-y-4">
                            {children}
                        </div>
                    </div>
                </div>
            </div>

            {!isOpen && (
                <div
                    onClick={onClick}
                    className={`${urbanist.className} px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest text-center cursor-pointer border-t transition-colors ${highlight
                        ? "bg-slate-800 border-slate-800 text-cyan-400 hover:bg-slate-700"
                        : "bg-slate-50 border-slate-100 text-blue-600 hover:bg-blue-50"
                        }`}
                >
                    Klikkaa ja lue tarkemmat tiedot ›
                </div>
            )}
        </div>
    );
}

export function MaintenanceAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4 max-w-3xl mx-auto">
            {/* Perus Tier */}
            <AccordionItem
                title="Ylläpito & Turva – Perus"
                price="50 € / kk"
                description="Valitse huoleton jatko. Tekninen turva + 1 pieni päivitys."
                isOpen={openIndex === 0}
                onClick={() => toggle(0)}
            >
                <div className="space-y-4">
                    <div className="flex gap-4">
                        <div className="bg-blue-100 p-2 rounded-lg h-fit">
                            <Shield className="w-5 h-5 text-blue-700" />
                        </div>
                        <div>
                            <h4 className={`${urbanist.className} font-bold text-slate-900 text-sm mb-1 uppercase tracking-tight`}>Tekninen sydän</h4>
                            <p className={`${manrope.className} text-sm text-slate-600 font-light`}>Sisältää SSL-sertifikaatin, tietoturvapäivitykset, automaattiset varmuuskopiot (GitHub-versiointi) ja nopeuden jatkuvan seurannan.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="bg-green-100 p-2 rounded-lg h-fit">
                            <Clock className="w-5 h-5 text-green-700" />
                        </div>
                        <div>
                            <h4 className={`${urbanist.className} font-bold text-slate-900 text-sm mb-1 uppercase tracking-tight`}>1 pieni päivitys/kk</h4>
                            <p className={`${manrope.className} text-sm text-slate-600 font-light`}>Voit lähettää meille kerran kuussa pienen muutoksen (esim. uusi kuva galleriaan, yhteystiedon päivitys tai lyhyt uutisteksti). Max 15min työ.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="bg-slate-100 p-2 rounded-lg h-fit">
                            <Activity className="w-5 h-5 text-slate-700" />
                        </div>
                        <div>
                            <h4 className={`${urbanist.className} font-bold text-slate-900 text-sm mb-1 uppercase tracking-tight`}>Vasteaika</h4>
                            <p className={`${manrope.className} text-sm text-slate-600 font-light`}>Vastaamme tukipyyntöihin 48 tunnin sisällä (arkisin).</p>
                        </div>
                    </div>
                </div>
            </AccordionItem>

            {/* Plus Tier */}
            <AccordionItem
                title="Ylläpito & Turva – Plus"
                price="150 € / kk"
                description="Aktiivinen ylläpito & sisältöapu. Yritykselle, joka haluaa näkyä ja kehittyä."
                isOpen={openIndex === 1}
                onClick={() => toggle(1)}
                highlight={true}
            >
                <div className="space-y-4">
                    <div className="flex gap-4">
                        <div className="bg-cyan-900/50 p-2 rounded-lg h-fit border border-cyan-800">
                            <CheckCircle className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-sm mb-1">Kaikki Perus-palvelut</h4>
                            <p className="text-sm text-slate-400">Sisältää täyden teknisen ylläpidon ja turvan.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="bg-purple-900/50 p-2 rounded-lg h-fit border border-purple-800">
                            <FileText className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-sm mb-1">Aktiivinen asiantuntijatuki</h4>
                            <p className="text-sm text-slate-400">Sisältää max 2 h asiantuntijatyötä kuukaudessa (sisällön päivitykset, optimoinnit, uudet lohkot).</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="bg-orange-900/50 p-2 rounded-lg h-fit border border-orange-800">
                            <Clock className="w-5 h-5 text-orange-400" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-sm mb-1">Lisätyöt</h4>
                            <p className="text-sm text-slate-400">Jos kehitystarpeet ylittävät 2 h kuukaudessa, veloitamme ylittäviltä tunneilta 75 € / alkava h.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="bg-blue-900/50 p-2 rounded-lg h-fit border border-blue-800">
                            <Shield className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-sm mb-1">Ennakoitavuus</h4>
                            <p className="text-sm text-slate-400">Saat aina ilmoituksen (kerromme hyvissä ajoin), jos pyyntösi on ylittämässä pakettiin kuuluvan ajan.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="bg-green-900/50 p-2 rounded-lg h-fit border border-green-800">
                            <Headphones className="w-5 h-5 text-green-400" />
                        </div>
                        <div>
                            <h4 className={`${urbanist.className} font-bold text-white text-sm mb-1 uppercase tracking-tight`}>Vasteaika</h4>
                            <p className={`${manrope.className} text-sm text-slate-400 font-light`}>Priorisoitu tuki – vastaamme ja reagoimme 24 tunnin sisällä (arkisin).</p>
                        </div>
                    </div>
                </div>
            </AccordionItem>
        </div>
    );
}
