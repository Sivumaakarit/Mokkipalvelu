"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";
import { CaseStudyShowcase } from "@/components/landing/CaseStudyShowcase";
import { Footer } from "@/components/layout/Footer";

  const projects = [
    {
      id: "roboline",
      title: "Roboline Group",
      category: "Brändi ja verkkosivusto",
      description: "Innovaatioiden digitaalinen koti. Painopiste asiantuntijuuden esiintuomisessa ja palveluiden uskottavassa esittelyssä.",
      tags: ["UX-SUUNNITTELU", "SISÄLLÖNTUOTANTO", "SUORITUSKYKY"],
      desktopImage: "/images/roboline-desktop.webp",
      mobileImage: "/images/roboline-mobile2.webp",
      tabletImage: "/images/roboline-tablet.webp",
      accentColor: "blue-600",
      accentBorder: "border-blue-600",
      link: "https://www.roboline.fi",
      linkText: "Tutustu Robolineen →",
      mobileBgColor: "#ffffff",
      tabletBgColor: "#ffffff"
    },
    {
      id: "molarit",
      title: "Mölyapinat",
      category: "Yhteisö ja esiintyminen",
      description: "Lastenmusiikkibändin iloinen ja värikäs yhteisö. Painopiste bändin energian välittämisessä ja keikkatietojen selkeässä esittämisessä.",
      tags: ["MOBIILI EDELLÄ", "YHTEISÖ", "NOPEA LATAUS"],
      desktopImage: "/images/molarit-desktop.webp",
      mobileImage: "/images/molarit-mobile2.webp",
      tabletImage: "/images/molarit-tablet.webp",
      accentColor: "blue-600",
      accentBorder: "border-blue-600",
      link: "https://molyapinat.fi",
      linkText: "Katso Mölyapinat-sivusto →",
      mobileBgColor: "#d3f0db",
      tabletBgColor: "#fefce8"
    },
    {
      id: "mokkipalvelu",
      title: "Mokkipalvelu",
      category: "Huoltopalvelut & Digi",
      description: "Mökkihuollon moderni brändi-uudistus. Painopiste tilaamisen vaivattomuudessa ja luotettavuuden vahvistamisessa.",
      tags: ["100/100 SUORITUSKYKY", "KÄYTTÖKOKEMUS", "IDENTITEETTI"],
      desktopImage: "/images/mokkipalvelu_desktop.webp",
      mobileImage: "/images/mokkipalvelu_mobile.webp",
      tabletImage: "/images/mokkipalvelu_tablet.webp",
      accentColor: "blue-600",
      accentBorder: "border-blue-600",
      link: "/mokkipalvelu",
      linkText: "Mokkipalvelu-sivustolle →",
      mobileBgColor: "#ffffff",
      tabletBgColor: "#ffffff"
    }
  ];

export default function ReferenssitPage() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-0 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-900 mb-8 leading-[1.05] tracking-tight">
              Selkeä viesti, enemmän asiakkaita.
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 mb-6 leading-relaxed font-sans max-w-2xl">
              Digitaalisia kokemuksia, jotka on hiottu lopputulos edellä. Katso valitut palat projekteistamme.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Study - Dynamic 3D Mockup */}
      <section className="pt-0 pb-12 bg-white overflow-hidden" id="showcase">
        <div className="container mx-auto">
          <CaseStudyShowcase
            title={selectedProject.title}
            description={selectedProject.description}
            desktopImage={selectedProject.desktopImage}
            mobileImage={selectedProject.mobileImage}
            tabletImage={selectedProject.tabletImage}
            link={selectedProject.link}
            accentColorClass={selectedProject.accentColor}
            accentBorderClass={selectedProject.accentBorder}
            mobileBgColor={selectedProject.mobileBgColor}
            tabletBgColor={selectedProject.tabletBgColor}
            linkText={(selectedProject as any).linkText}
          />
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-serif text-stone-900">Poimintoja töistämme</h2>
            <div className="text-stone-400 text-sm font-medium tracking-widest uppercase">Klikkaa nähdäksesi 3D-esittely</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedProject(project);
                  document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`group text-left bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 flex flex-col ${selectedProject.id === project.id ? 'ring-2 ring-offset-4 ring-blue-600/20' : ''}`}
              >
                {/* Image Container with Padding and Frame */}
                <div className="p-6 bg-stone-50/50">
                  <div className="aspect-[16/10] relative rounded-xl overflow-hidden shadow-lg border border-stone-200/50 bg-white group-hover:shadow-2xl transition-all duration-500">
                    {/* Browser Header Bar */}
                    <div className="absolute top-0 left-0 right-0 h-6 bg-stone-100/80 border-b border-stone-200/50 flex items-center px-3 gap-1 z-20">
                      <div className="w-1.5 h-1.5 rounded-full bg-stone-300"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-stone-300"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-stone-300"></div>
                    </div>
                    
                    {/* The Website Image */}
                    <div className="absolute inset-0 pt-6 overflow-hidden">
                      <img
                        src={project.desktopImage}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transform scale-[1.05] origin-top group-hover:scale-[1.10] transition-transform duration-700"
                        style={{ imageRendering: "-webkit-optimize-contrast" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-8 pb-10 flex-grow flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`h-1.5 w-1.5 rounded-full bg-${project.accentColor}`}></span>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-serif text-stone-900 mb-4 tracking-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-stone-500 text-sm leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[9px] px-2.5 py-1 bg-white text-stone-400 border border-stone-100 rounded-lg font-bold uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-20 bg-white text-stone-900 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 max-w-4xl mx-auto leading-tight">
            Kysy lisää tai pyydä <span className="text-[#1d4ed8]">maksuton arvio</span>
          </h2>
          <p className="text-stone-500 mb-14 max-w-2xl mx-auto text-xl leading-relaxed font-sans italic">
            Yhteydenotto ei sido sinua mihinkään. Vastaamme pian – katsotaan yhdessä, miten voimme auttaa yritystäsi löytymään paremmin.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
            <Link
              href="/tarjous"
              className="px-12 py-6 bg-[#1d4ed8] text-white font-bold rounded-2xl hover:bg-[#1e40af] transition-all shadow-[0_20px_40px_rgba(29,78,216,0.3)] text-xl tracking-tight"
            >
              Pyydä lisätietoja tai arvio
            </Link>
            <Link
              href="/metodi"
              className="text-stone-500 hover:text-stone-900 transition-colors border-b border-stone-200 hover:border-stone-900 py-1 font-medium font-serif italic"
            >
              Lue lisää työtavoistamme &rarr;
            </Link>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);
}
