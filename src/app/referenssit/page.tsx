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
    description: "Innovaatioiden digitaalinen koti. Fokus asiantuntijuuden esiintuomisessa ja palveluiden uskottavassa esittelyssä.",
    tags: ["UX Design", "Copywriting", "Performance"],
    desktopImage: "/images/roboline-desktop.webp",
    mobileImage: "/images/roboline-mobile2.webp",
    tabletImage: "/images/roboline-tablet.webp",
    accentColor: "amber-600",
    accentBorder: "border-amber-600",
    mobileBgColor: "#ffffff",
    tabletBgColor: "#ffffff",
    link: "https://roboline-innovations.fi",
    linkText: "Tutustu Robolineen →"
  },
  {
    id: "molarit",
    title: "Mölyapinat",
    category: "Yhteisö ja esiintyminen",
    description: "Mölyapinat on energinen lastenmusiikkibändi, joka tarjoaa osallistavia esityksiä ja tarttuvaa musiikkia koko perheelle.",
    tags: ["Mobile First", "Community", "Fast Load"],
    desktopImage: "/images/molarit-desktop.webp",
    mobileImage: "/images/molarit-mobile2.webp",
    tabletImage: "/images/molarit-tablet.webp",
    accentColor: "teal-600",
    accentBorder: "border-teal-600",
    mobileBgColor: "#d5ecd9",
    tabletBgColor: "#fefbe9",
    link: "https://molyapinat.fi",
    linkText: "Katso mölyapinat.fi →"
  },
  {
    id: "mokkipalvelu",
    title: "Mokkipalvelu",
    category: "Huoltopalvelut & Digi",
    description: "Nykyaikainen mökkihuollon tilausjärjestelmä ja brändi-ilme. Toteutus, jossa huippunopea suorituskyky kohtaa luotettavan ja helposti lähestyttävän palvelumuotoilun.",
    tags: ["100/100 Performance", "User Experience", "Identity"],
    desktopImage: "/images/mokkipalvelu_desktop.webp",
    mobileImage: "/images/mokkipalvelu_mobile.webp",
    tabletImage: "/images/mokkipalvelu_tablet.webp",
    accentColor: "blue-600",
    accentBorder: "border-blue-600",
    mobileBgColor: "#ffffff",
    tabletBgColor: "#ffffff",
    link: "/mokkipalvelu",
    linkText: "Mokkipalvelu-sivustolle →"
  }
];

export default function ReferenssitPage() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-0 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="text-stone-400 text-sm font-bold uppercase tracking-[0.2em] mb-4">
              Tekoälyavusteisen muotoilun showcase
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-stone-900 mb-6 leading-[1.1]">
              Katso työmme – autamme yrityksiä <span className="italic text-stone-500">loistamaan verkossa</span>.
            </h1>
            <p className="text-xl text-stone-600 mb-6 leading-relaxed font-sans">
              Emme vain koodaa sivuja. Me muotoilemme kokemuksia, jotka ovat sisällöllisesti kirkkaita. Tässä poimintoja töistämme.
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
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="w-full border-t border-stone-200 mb-12"></div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-serif text-stone-900">Kaikki projektit</h2>
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
                className={`group text-left bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border-2 ${selectedProject.id === project.id ? project.accentBorder : 'border-stone-200'}`}
              >
                <div className="aspect-[16/10] bg-stone-100 relative overflow-hidden">
                  {/* Background pattern for placeholder */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-900 via-transparent to-transparent"></div>
                  <img
                    src={project.desktopImage}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                    style={{ imageRendering: "-webkit-optimize-contrast" }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 z-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                    <span className={`px-6 py-3 rounded-full bg-white/95 backdrop-blur text-stone-900 text-xs font-bold uppercase tracking-widest shadow-xl transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ring-1 ring-white/20`}>
                      Katso esittely
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className={`text-xs uppercase tracking-widest font-bold mb-3 text-${project.accentColor}`}>
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-serif text-stone-900 mb-4 group-hover:text-stone-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-stone-600 mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] px-2 py-1 bg-stone-100 text-stone-500 rounded-full font-bold uppercase tracking-tighter">
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
