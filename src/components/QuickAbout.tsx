const QuickAbout = () => {
    return (
        <div className="bg-white ">
            <div className="max-w-5xl mx-auto px-6 pb-16">
                {/* Mission Section */}
                <section className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#00a6a2] mb-8">Unsere Mission</h2>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                        Pflegefachkräften echte Perspektiven bieten. Einrichtungen verlässliche Unterstützung ermöglichen. Und
                        Menschen auf beiden Seiten langfristig zusammenbringen.
                    </p>
                </section>

                {/* Services Section */}
                <section className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#00a6a2] mb-8">Was wir tun</h2>

                    <div className="space-y-8 max-w-3xl">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Viele Vermittlungsagenturen enden mit einem unterschriebenen Vertrag. Unsere Arbeit beginnt dort erst
                            richtig.
                        </p>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            Wir bereiten Pflegefachkräfte sprachlich, fachlich und persönlich auf das Leben und Arbeiten in
                            Deutschland vor. Und wir unterstützen Einrichtungen dabei, motivierte Fachkräfte zu gewinnen – die nicht
                            nur kompetent sind, sondern auch kulturell und menschlich passen.
                        </p>

                        <div className="pt-4">
                            <p className="text-lg text-[#00a6a2] font-medium leading-relaxed">
                                Alles, was wir tun, ist auf eines ausgerichtet:
                                <br />
                                Verantwortungsvoll verbinden. Für eine starke Pflege.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default QuickAbout
