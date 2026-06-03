import { Urbanist, Manrope } from "next/font/google";
import { MessageSquare, Wrench, CheckCircle } from "lucide-react";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["700"] });
const manrope = Manrope({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

export function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Ota yhteyttä",
            desc: "Kerro mökkisi tarpeista ja toiveista. Olipa kyseessä nurmikon leikkuu, lumityöt tai säännöllinen valvonta, me kuuntelemme ja laadimme sinulle tarjouksen.",
            icon: MessageSquare
        },
        {
            number: "02",
            title: "Talkkari hoitaa homman",
            desc: "Talkkarimme saapuu sovitusti paikalle ja tekee työt tarkasti ja siististi. Voit keskittyä vain nauttimaan vapaa-ajastasi.",
            icon: Wrench
        },
        {
            number: "03",
            title: "Maksat vain valmiista",
            desc: "Lähetämme laskun vasta kun kaikki on valmista ja olet tyytyväinen. Saat kuitin, jolla voit hyödyntää 35 % kotitalousvähennyksen verotuksessa.",
            icon: CheckCircle
        }
    ];

    return (
        <section className="py-24 bg-white" id="how-it-works">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className={`${urbanist.className} text-4xl md:text-6xl font-bold text-stone-900 mb-6 tracking-tight`}>
                        Näin se hoituu
                    </h2>
                    <p className={`${manrope.className} text-xl text-stone-600 max-w-2xl mx-auto font-light`}>
                        Teemme vapaa-ajastasi astetta rentouttavampaa.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                    {steps.map((step, index) => {
                        const IconComponent = step.icon;
                        return (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div className="relative mb-6">
                                    {/* Badge */}
                                    <div className="absolute -top-2 -left-2 bg-green-700 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center shadow-md z-10">
                                        {step.number}
                                    </div>
                                    {/* Icon Container */}
                                    <div className="w-20 h-20 bg-green-50 rounded-2xl flex items-center justify-center text-green-700 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                        <IconComponent className="w-10 h-10" />
                                    </div>
                                </div>
                                <h3 className={`${urbanist.className} text-2xl font-bold mb-3 text-stone-900`}>
                                    {step.title}
                                </h3>
                                <p className={`${manrope.className} text-stone-600 leading-relaxed max-w-xs font-light`}>
                                    {step.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
