import Image from "next/image";
import { urbanist, manrope } from "@/lib/fonts";

export function MarketInfo() {
    return (
        <section className="py-16 bg-green-900 text-white" id="market-info">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Miksi valita ammattilainen?</h2>
                        <div className="space-y-6">
                            <div className="bg-green-800/50 p-6 rounded-xl border border-green-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <h3 className={`${urbanist.className} text-xl font-semibold mb-2 text-stone-100`}>Tiesitkö?</h3>
                                <p className={`${manrope.className} text-green-100 italic`}>
                                    &quot;Säännöllinen ja ammattitaitoinen ylläpito on paras vakuutus mökkisi arvon säilymiselle. Huollettu loma-asunto takaa, että voit keskittyä olennaiseen – nauttimaan lomastasi ilman huolta tekniikasta, lumitöistä tai pihatöistä.&quot;
                                </p>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 flex-shrink-0 bg-stone-100 rounded-full flex items-center justify-center text-green-900 font-bold text-xl">
                                    %
                                </div>
                                <div>
                                    <h3 className={`${urbanist.className} text-xl font-semibold mb-1 text-stone-100`}>Kotitalousvähennys</h3>
                                    <p className={`${manrope.className} text-green-100`}>
                                        Muistathan, että kaikki tarjoamamme huolto- ja hoitotyöt ovat kotitalousvähennyskelpoisia verotuksessa.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-stone-100 text-stone-900 p-8 pb-56 md:pb-8 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-4 text-green-900">Mielenrauhaa vapaa-aikaan</h3>
                            <p className="mb-6 text-stone-600">
                                Ulkoistamalla mökin ylläpidon säästät aikaa ja vaivaa. Me huolehdimme, että mökkisi on aina kunnossa ja turvallinen, jotta voit nauttia lomastasi heti saapuessasi.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-stone-700">
                                    <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Ammattitaitoinen työjälki
                                </li>
                                <li className="flex items-center text-stone-700">
                                    <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Raportointi kuvien kera
                                </li>
                                <li className="flex items-center text-stone-700">
                                    <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Paikallinen tuntemus
                                </li>
                            </ul>
                        </div>

                        {/* Decorative logo */}
                        <div className="absolute bottom-4 right-4 z-10 w-[180px] h-[180px] overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src="/images/mokki1.webp"
                                alt="Mökkikuva"
                                fill
                                className="object-cover scale-105 origin-top-left"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
