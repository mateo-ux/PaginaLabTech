"use client";

import { Timeline } from "@/components/ui/timeline";

const timelineData = [
    {
        year: "2014",
        title: "Nace LapTech",
        description: "Iniciamos como un pequeño taller especializado en reparación de equipos Apple, con la visión de ofrecer servicios de calidad y sostenibles.",
        icon: "🌱"
    },
    {
        year: "2017",
        title: "Certificación Apple",
        description: "Obtuvimos certificaciones oficiales que nos posicionaron como referentes en reparación y mantenimiento de dispositivos Macintosh.",
        icon: "🏆"
    },
    {
        year: "2019",
        title: "Economía Circular",
        description: "Implementamos nuestro programa de economía circular, enfocándonos en la restauración y remanufacturación de equipos para reducir el impacto ambiental.",
        icon: "♻️"
    },
    {
        year: "2021",
        title: "Expansión de Servicios",
        description: "Ampliamos nuestra oferta con servicios de repotenciación y recuperación de datos, convirtiéndonos en un centro integral de soluciones Apple.",
        icon: "⚡"
    },
    {
        year: "2024",
        title: "Líderes en Sostenibilidad",
        description: "Más de 5,000 dispositivos restaurados, evitando toneladas de residuos electrónicos. Reconocidos por nuestro compromiso ambiental.",
        icon: "🌍"
    }
];

const values = [
    {
        icon: "♻️",
        title: "Economía Circular",
        description: "Comprometidos con extender la vida útil de los dispositivos y reducir el desperdicio electrónico."
    },
    {
        icon: "🌿",
        title: "Sostenibilidad",
        description: "Cada reparación es un paso hacia un planeta más verde y un futuro más sostenible."
    },
    {
        icon: "🔧",
        title: "Calidad Certificada",
        description: "Técnicos especializados y certificados que garantizan trabajos de la más alta calidad."
    },
    {
        icon: "💚",
        title: "Pasión por Apple",
        description: "Expertos apasionados por el ecosistema Apple y su tecnología innovadora."
    }
];

export function AboutSection() {
    return (
        <section id="nosotros" className="py-20 px-4 bg-gradient-to-b from-brand-cream to-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-brand-black mb-4">
                        Quiénes Somos
                    </h2>
                    <p className="text-xl text-brand-black/70 max-w-3xl mx-auto">
                        Una historia de pasión por la tecnología Apple y compromiso con el medio ambiente
                    </p>
                </div>

                {/* Mission Statement */}
                <div className="max-w-4xl mx-auto mb-20">
                    <div className="bg-gradient-to-br from-brand-blue to-brand-green p-1 rounded-3xl">
                        <div className="bg-white p-8 md:p-12 rounded-3xl">
                            <h3 className="text-3xl font-bold text-brand-black mb-6 text-center">
                                Nuestra Misión
                            </h3>
                            <p className="text-lg text-brand-black/80 leading-relaxed text-center">
                                Somos especialistas en <span className="font-bold text-brand-blue">Macintosh</span> comprometidos
                                con la <span className="font-bold text-brand-green">economía circular</span> y la sostenibilidad.
                                Restauramos, remanufacturamos y repotenciamos dispositivos Apple,
                                dándoles una segunda vida mientras reducimos el impacto ambiental.
                                Con más de <span className="font-bold">10 años de experiencia</span>,
                                hemos ayudado a miles de clientes a mantener sus equipos funcionando como nuevos.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Timeline */}
                <div className="mb-20">
                    <h3 className="text-3xl md:text-4xl font-bold text-center text-brand-black mb-12">
                        Nuestra Trayectoria
                    </h3>
                    <Timeline data={timelineData} />
                </div>

                {/* Values */}
                <div className="mb-16">
                    <h3 className="text-3xl md:text-4xl font-bold text-center text-brand-black mb-12">
                        Nuestros Valores
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-brand-blue"
                            >
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {value.icon}
                                </div>
                                <h4 className="text-xl font-bold text-brand-black mb-3 group-hover:text-brand-blue transition-colors">
                                    {value.title}
                                </h4>
                                <p className="text-brand-black/70 text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Impact Stats */}
                <div className="bg-gradient-to-r from-brand-blue to-brand-green p-1 rounded-3xl">
                    <div className="bg-brand-black p-8 md:p-12 rounded-3xl">
                        <h3 className="text-3xl font-bold text-center text-white mb-8">
                            Nuestro Impacto Ambiental
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-5xl font-bold text-brand-green mb-2">5,000+</div>
                                <p className="text-brand-cream/80">Dispositivos restaurados</p>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl font-bold text-brand-blue mb-2">12 Ton</div>
                                <p className="text-brand-cream/80">Residuos electrónicos evitados</p>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl font-bold text-brand-green mb-2">85%</div>
                                <p className="text-brand-cream/80">Tasa de éxito en recuperación</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}