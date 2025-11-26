"use client";

import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

const timelineData = [
    {
        year: "2019",
        title: "Nace LapTech",
        description: "Iniciamos como un pequeño taller especializado en reparación de equipos Mac, iMac y multimarca, con la visión de ofrecer servicios de calidad y sostenibles.",
        icon: "🌱"
    },
    {
        year: "2020",
        title: "Economía Circular",
        description: "Implementamos nuestro programa de economía circular, enfocándonos en la restauración y remanufacturación de equipos para reducir el impacto ambiental.",
        icon: "♻️"
    },
    {
        year: "2022",
        title: "Expansión de Servicios",
        description: "Ampliamos nuestra oferta con servicios de repotenciación, convirtiéndonos en un centro especializado de soluciones Mac, iMac y multimarca.",
        icon: "⚡"
    },
    {
        year: "2024",
        title: "Reconocimiento Fondo Emprender",
        description: "Fuimos seleccionados como empresa beneficiaria del Fondo Emprender SENA, validando nuestro modelo de negocio sostenible y compromiso con la economía circular.",
        icon: "🏅"
    },
    {
        year: "2025",
        title: "Líderes en Sostenibilidad",
        description: "Más de 1,800 dispositivos restaurados, evitando toneladas de residuos electrónicos. Reconocidos como referentes en tecnología circular en Colombia.",
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
        title: "Calidad",
        description: "Técnicos especializados que garantizan trabajos de la más alta calidad."
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
                                Somos especialistas en
                                <span className="font-bold text-brand-blue"> Macintosh y
                                    Multimarca </span>
                                comprometidos con la
                                <span className="font-bold text-brand-green"> economía circular y
                                    sostenibilidad</span>
                                ; restauramos, remanufacturados y repotenciamos dispositivos, dándoles una segunda vida mientras reducimos el impacto ambiental.
                                Con más de <span className="font-bold">5 años de experiencia</span>,
                                hemos ayudado a miles de clientes a mantener sus equipos funcionando como nuevos.
                                <br />
                                <br />
                                Queremos ser una alternativa diferente en el mercado, ofreciendo un servicio profesional, con garantía y a un precio justo.
                                <br />
                                <br />
                                Nos caracteriza contar con la tecnología y la experiencia necesarias para brindar soluciones a los problemas más complejos de tus dispositivos.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Fondo Emprender */}
                <div className="max-w-4xl mx-auto mb-20">
                    <div className="bg-gradient-to-br from-brand-blue to-brand-green p-1 rounded-3xl">
                        <div className="bg-white p-8 md:p-12 rounded-3xl">
                            {/* Logo */}
                            <div className="flex-shrink-0">
                                <Image
                                    src="/images/fondo-emprender.png"
                                    alt="SENA Fondo Emprender"
                                    width={400}
                                    height={120}
                                    className="w-full max-w-md"
                                />
                            </div>

                            {/* Contenido */}
                            <div className="flex-1">
                                <h3 className="text-3xl font-bold text-brand-black mb-4">
                                    Respaldados por Fondo Emprender
                                </h3>
                                <p className="text-lg text-brand-black/80 leading-relaxed mb-4">
                                    LapTech es actualmente una empresa beneficiaria del <span className="font-bold text-brand-green">Fondo Emprender del SENA</span>,
                                    un programa del gobierno colombiano que impulsa emprendimientos innovadores con alto impacto social y ambiental.
                                </p>
                                <p className="text-brand-black/70 leading-relaxed mb-4">
                                    Este respaldo nos ha permitido consolidarnos como referentes en la restauración y Re manufacturación de dispositivos Mac, iMac
                                    y multimarca en Colombia, fortaleciendo nuestro compromiso con la economía circular y generando empleo especializado de calidad
                                    en nuestra región.

                                </p>
                                <div className="flex flex-wrap gap-4 mt-6">
                                    <div className="flex items-center gap-2 bg-brand-green/10 px-4 py-2 rounded-lg">
                                        <span className="text-2xl">✅</span>
                                        <span className="font-semibold text-brand-green">Beneficiarios 2024-2025</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-brand-blue/10 px-4 py-2 rounded-lg">
                                        <span className="text-2xl">🇨🇴</span>
                                        <span className="font-semibold text-brand-blue">Emprendimiento colombiano</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-brand-green/10 px-4 py-2 rounded-lg">
                                        <span className="text-2xl">🌱</span>
                                        <span className="font-semibold text-brand-green">Impacto social y ambiental</span>
                                    </div>
                                </div>
                            </div>
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
            </div>
        </section>
    );
}