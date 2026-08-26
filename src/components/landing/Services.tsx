import { siteConfig } from "@/lib/site-config";
import Image from "next/image";
import { urbanist, manrope } from "@/lib/fonts";

export function Services() {
    return (
        <section className="py-24 bg-stone-50" id="services">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className={`${urbanist.className} text-4xl md:text-6xl font-bold text-stone-900 mb-6 tracking-tight`}>
                        Palvelumme
                    </h2>
                    <p className={`${manrope.className} text-xl text-stone-600 max-w-2xl mx-auto font-light`}>
                        Kattavat huolto- ja valvontapalvelut mökillesi ympäri vuoden.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {siteConfig.services.map((service, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-stone-100 group">
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={service.image || "/images/placeholder.webp"}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className={`${urbanist.className} text-2xl font-bold mb-3 text-green-900`}>{service.title}</h3>
                                <p className={`${manrope.className} text-stone-600 leading-relaxed mb-6`}>
                                    {service.desc}
                                </p>
                                {service.price && (
                                    <div className="border-t border-stone-100 pt-4">
                                        <p className={`${manrope.className} text-lg font-semibold text-stone-800`}>
                                            Hinta: <span className="text-green-700 font-bold">{service.price}</span>
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
