"use client";

import { useState } from "react";

const services = [
    {
        icon: "🔍",
        title: "Diagnóstico Profesional",
        description: "Evaluación completa y detallada de tu dispositivo Apple. Identificamos el problema con precisión utilizando herramientas especializadas.",
        features: [
            "Revisión exhaustiva de hardware",
            "Diagnóstico en 24-48 horas",
            "Sin cargo si decides no reparar",
            "Reporte técnico detallado"
        ],
        color: "blue"
    },
    {
        icon: "♻️",
        title: "Restauración Completa",
        description: "Devolvemos la vida a tu dispositivo con técnicas de restauración profesional y componentes certificados.",
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
        description: "Mejora el rendimiento de tu Mac con actualizaciones de RAM, SSD y optimización del sistema operativo.",
        features: [
            "Upgrade de memoria RAM",
            "Instalación de SSD NVMe",
            "Optimización de macOS",
            "Mejora de velocidad hasta 300%"
        ],
        color: "blue"
    },
    {
        icon: "🔧",
        title: "Remanufacturación",
        description: "Proceso completo de reacondicionamiento que incluye reparación, limpieza y certificación de calidad.",
        features: [
            "Proceso certificado",
            "Componentes originales Apple",
            "6 meses de garantía",
            "Como nuevo, mejor precio"
        ],
        color: "green"
    },
    {
        icon: "🛡️",
        title: "Mantenimiento Preventivo",
        description: "Prevención y cuidado continuo para alargar la vida útil de tus dispositivos Apple.",
        features: [
            "Limpieza de ventiladores",
            "Cambio de pasta térmica",
            "Actualización de software",
            "Revisión de batería"
        ],
        color: "blue"
    },
    {
        icon: "💾",
        title: "Recuperación de Datos",
        description: "Rescatamos tu información valiosa de dispositivos dañados con tecnología de punta.",
        features: [
            "Recuperación de SSD/HDD",
            "Hasta 98% de éxito",
            "Proceso seguro y confidencial",
            "Sin recuperación, sin cargo"
        ],
        color: "green"
    }
];

export function ServicesSection() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="servicios" className="py-20 px-4 bg-brand-cream relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-brand-black mb-4">
                        Nuestros Servicios
                    </h2>
                    <p className="text-xl text-brand-black/70 max-w-3xl mx-auto">
                        Soluciones completas de restauración, remanufacturación y repotenciación
                        para todos tus dispositivos Apple
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-2">
                        <span className="inline-block w-20 h-1 bg-brand-blue rounded-full" />
                        <span className="inline-block w-3 h-3 bg-brand-green rounded-full" />
                        <span className="inline-block w-20 h-1 bg-brand-blue rounded-full" />
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className="group relative"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className={`h-full bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 border-2 ${hoveredIndex === index
                                    ? service.color === "blue"
                                        ? "border-brand-blue shadow-2xl -translate-y-2 shadow-brand-blue/20"
                                        : "border-brand-green shadow-2xl -translate-y-2 shadow-brand-green/20"
                                    : "border-transparent"
                                }`}>

                                {/* Icon */}
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 text-4xl transition-all duration-500 ${hoveredIndex === index
                                        ? service.color === "blue"
                                            ? "bg-brand-blue text-white scale-110 rotate-6"
                                            : "bg-brand-green text-white scale-110 rotate-6"
                                        : "bg-gray-100"
                                    }`}>
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${hoveredIndex === index
                                        ? service.color === "blue" ? "text-brand-blue" : "text-brand-green"
                                        : "text-brand-black"
                                    }`}>
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-brand-black/70 mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-3">
                                    {service.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start text-sm text-brand-black/60 transition-all duration-300"
                                            style={{
                                                transform: hoveredIndex === index ? 'translateX(4px)' : 'translateX(0)',
                                                transitionDelay: `${i * 50}ms`
                                            }}
                                        >
                                            <span className={`mr-2 mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${service.color === "blue" ? "bg-brand-blue" : "bg-brand-green"
                                                }`} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <button className={`mt-6 w-full py-3 rounded-xl font-semibold transition-all duration-300 ${service.color === "blue"
                                        ? "bg-brand-blue/10 text-brand-blue hover:bg-brand-blue hover:text-white"
                                        : "bg-brand-green/10 text-brand-green hover:bg-brand-green hover:text-white"
                                    }`}>
                                    Más información →
                                </button>

                                {/* Hover glow effect */}
                                {hoveredIndex === index && (
                                    <div className={`absolute inset-0 -z-10 rounded-2xl blur-xl opacity-20 ${service.color === "blue" ? "bg-brand-blue" : "bg-brand-green"
                                        }`} />
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <p className="text-lg text-brand-black/70 mb-6">
                        ¿No encuentras lo que buscas? Contáctanos para una solución personalizada
                    </p>
                    <a
                        href="#contacto"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-green text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105"
                    >
                        Solicitar Cotización Gratis
                    </a>
                </div>
            </div>
        </section>
    );
}