"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
    {
        icon: "🔍",
        title: "Diagnóstico Profesional",
        description: "Evaluación completa y detallada de tu dispositivo Mac, iMac o Multimarca. Identificamos el problema con precisión utilizando herramientas especializadas.",
        image: "/images/services/diagnostico.jpg",
        features: [
            "Revisión exhaustiva de hardware",
            "Diagnóstico en 48 a 72 horas",
            "Reporte técnico detallado",
            "Remplazo de partes",
            "Reparaciones electrónicas"
        ],
        color: "blue"
    },
    {
        icon: "♻️",
        title: "Restauración Completa",
        description: "Devolvemos la vida a tu dispositivo con técnicas de restauración profesional y componentes originales.",
        image: "/images/services/restauracion.jpg",
        features: [
            "Restauración de componentes",
            "Limpieza profunda interna",
            "Reemplazo de partes dañadas",
            "Pruebas de calidad exhaustivas"
        ],
        color: "green"
    },
    {
        icon: "⚡",
        title: "Repotenciación",
        description: "Mejora el rendimiento de tu Mac iMac o pc gamer con actualizaciones de RAM y SSD.",
        image: "/images/services/repotenciacion.jpg",
        features: [
            "Upgrade de memoria RAM",
            "Instalación de SSD",
            "Mejora de velocidad hasta 300%"
        ],
        color: "blue"
    },
    {
        icon: "🔧",
        title: "Remanufacturación",
        description: "Proceso completo de reacondicionamiento que incluye reparación, limpieza y calidad garantizada.",
        image: "/images/services/remanufacturacion.jpg",
        features: [
            "Proceso de calidad",
            "Componentes originales",
            "6 meses de garantía",
            "Como nuevo, mejor precio"
        ],
        color: "green"
    },
    {
        icon: "🛡️",
        title: "Mantenimiento Preventivo",
        description: "Prevención y cuidado continuo para alargar la vida útil de tus dispositivos Mac, iMac o Multimarca.",
        image: "/images/services/mantenimiento.jpg",
        features: [
            "Limpieza de ventiladores",
            "Cambio de pasta térmica",
            "Actualización de software",
            "Revisión de batería"
        ],
        color: "blue"
    }
];

export function ServicesSection() {
    const [selectedService, setSelectedService] = useState<number | null>(null);

    return (
        <section id="servicios" className="py-20 px-4 bg-brand-cream relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-brand-black mb-4">Nuestros Servicios</h2>
                    <p className="text-xl text-brand-black/70 max-w-3xl mx-auto">Soluciones completas de restauración, remanufacturación y repotenciación para todos tus dispositivos Mac, iMac o Multimarca</p>
                    <div className="mt-6 flex items-center justify-center gap-2">
                        <span className="inline-block w-20 h-1 bg-brand-blue rounded-full" />
                        <span className="inline-block w-3 h-3 bg-brand-green rounded-full" />
                        <span className="inline-block w-20 h-1 bg-brand-blue rounded-full" />
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {services.map((service, index) => (
                        <div key={service.title} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] group relative cursor-pointer" onClick={() => setSelectedService(index)}>
                            <div className="h-full bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-brand-blue">
                                <div className="relative h-48 overflow-hidden">
                                    <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-lg">{service.icon}</div>
                                    <div className="absolute bottom-4 left-4">
                                        <h3 className="text-2xl font-bold text-white drop-shadow-lg">{service.title}</h3>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-brand-black/70 mb-4 line-clamp-2">{service.description}</p>
                                    <button className={`w-full py-3 rounded-xl font-semibold transition-all ${service.color === "blue" ? "bg-brand-blue text-white hover:bg-brand-blue/90" : "bg-brand-green text-white hover:bg-brand-green/90"}`}>Ver detalles →</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-lg text-brand-black/70 mb-6">¿No encuentras lo que buscas? Contáctanos para una solución personalizada</p>
                    <a href="#contacto" className="inline-block px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-green text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105">Solicitar Cotización Gratis</a>
                </div>
            </div>

            {selectedService !== null && (
                <div className="fixed inset-0 bg-brand-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedService(null)}>
                    <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <div className="relative h-64 md:h-96">
                            <Image src={services[selectedService].image} alt={services[selectedService].title} fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/40 to-transparent" />
                            <button onClick={() => setSelectedService(null)} className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl hover:bg-gray-100 transition-colors shadow-lg">×</button>
                            <div className="absolute bottom-8 left-8">
                                <div className="text-6xl mb-4">{services[selectedService].icon}</div>
                                <h2 className="text-4xl font-bold text-white drop-shadow-lg">{services[selectedService].title}</h2>
                            </div>
                        </div>
                        <div className="p-8 md:p-12">
                            <p className="text-xl text-brand-black/80 mb-8 leading-relaxed">{services[selectedService].description}</p>
                            <h3 className={`text-2xl font-bold mb-6 ${services[selectedService].color === "blue" ? "text-brand-blue" : "text-brand-green"}`}>¿Qué incluye este servicio?</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                {services[selectedService].features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 ${services[selectedService].color === "blue" ? "bg-brand-blue" : "bg-brand-green"}`}>✓</span>
                                        <span className="text-brand-black/80">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#contacto" onClick={() => setSelectedService(null)} className={`flex-1 py-4 text-center rounded-xl font-semibold text-white transition-all hover:shadow-xl ${services[selectedService].color === "blue" ? "bg-brand-blue hover:bg-brand-blue/90" : "bg-brand-green hover:bg-brand-green/90"}`}>Solicitar este servicio</a>
                                <button onClick={() => setSelectedService(null)} className="px-8 py-4 border-2 border-gray-300 rounded-xl font-semibold text-brand-black hover:bg-gray-50 transition-all">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}