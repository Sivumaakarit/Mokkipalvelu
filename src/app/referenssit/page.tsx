"use client";

import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

const projects = [
  {
    title: "Roboline",
    category: "Brändi ja verkkosivusto",
    description: "Teollisuuden asiantuntijapalvelun digitaalinen koti. Fokus asiantuntijuuden esiintuomisessa ja kalliiden palveluiden uskottavassa esittelyssä.",
    tags: ["UX Design", "Copywriting", "Performance"],
    image: "/images/ref_roboline.webp", // Placeholders for now, user can replace
  },
  {
    title: "Mölärit",
    category: "Yhteisö ja harrastus",
    description: "Mölkky-yhteisön kohtauspaikka. Painopiste helppokäyttöisyydessä ja mobiilioptimoinnissa kenttäolosuhteisiin.",
    tags: ["Mobile First", "Community", "Fast Load"],
    image: "/images/ref_molarit.webp",
  },
  {
    title: "RastiOhje",
    category: "Oppaat ja ohjeet",
    description: "Suunnistuksen aloittamisen kynnystä madaltava tietopankki. Pedagoginen ote tiedon järjestämiseen.",
    tags: ["EdTech", "Instructional Design", "SEO"],
    image: "/images/ref_rastiohje.webp",
  }
];

export default function ReferenssitPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white border-b border-stone-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif text-stone-900 mb-6 leading-tight">
              Tekoälyavusteisen muotoilun <span className="italic text-stone-500 underline decoration-amber-500/30">showcase</span>.
            </h1>
            <p className="text-xl text-stone-600 mb-10 leading-relaxed font-sans">
              Emme vain koodaa sivuja. Me muotoilemme kokemuksia, jotka ovat teknisesti ylivertaisia ja sisällöllisesti kirkkaita. Tässä poimintoja töistämme.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, idx) => (
              <div key={idx} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-stone-200">
                <div className="aspect-[4/3] bg-stone-200 relative overflow-hidden">
                   {/* Background pattern for placeholder */}
                   <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-900 via-transparent to-transparent"></div>
                   <div className="absolute inset-0 flex items-center justify-center text-stone-400 font-serif italic text-2xl">
                     {project.title}
                   </div>
                </div>
                <div className="p-8">
                  <div className="text-xs uppercase tracking-widest text-amber-600 font-bold mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-serif text-stone-900 mb-4 group-hover:text-amber-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-stone-600 mb-6 leading-relaxed">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-24 bg-stone-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 max-w-3xl mx-auto leading-tight">
            Haluatko vastaavan lopputuloksen omalle yrityksellesi?
          </h2>
          <p className="text-stone-400 mb-12 max-w-xl mx-auto text-lg leading-relaxed">
            Otamme uusia projekteja vastaan rajoitetun määrän kuukaudessa varmistaaksemme jokaisen työn korkean laadun.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              href="/tarjous"
              className="px-10 py-5 bg-stone-50 text-stone-900 font-bold rounded-2xl hover:bg-white transition-all shadow-xl text-lg uppercase tracking-tight"
            >
              Pyydä suunnittelutarjous
            </Link>
            <Link
              href="/metodi"
              className="text-stone-300 hover:text-white transition-colors border-b border-stone-700 hover:border-white py-1 font-medium"
            >
              Lue lisää työtavoistamme &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
