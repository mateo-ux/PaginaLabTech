"use client";

import { useState } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const educationalContent = [
    {
        title: "¿Qué es la Economía Circular?",
        description: "Un modelo económico que busca mantener productos y materiales en uso el mayor tiempo posible, reduciendo residuos y el consumo de recursos naturales.",
        icon: "♻️",
        className: "md:col-span-2",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-brand-green/20 to-brand-blue/20 items-center justify-center">
                <div className="text-6xl">🌍</div>
            </div>
        ),
    },
    {
        title: "Impacto Positivo",
        description: "Cada dispositivo restaurado evita aproximadamente 2.4 kg de CO2 y reduce la demanda de nuevos recursos.",
        icon: "🌱",
        className: "md:col-span-1",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-green/20 items-center justify-center">
                <div className="text-6xl">📉</div>
            </div>
        ),
    },
    {
        title: "Restauración vs Compra Nueva",
        description: "Restaurar un dispositivo consume hasta 10 veces menos energía que fabricar uno nuevo, reduciendo significativamente la huella de carbono.",
        icon: "⚡",
        className: "md:col-span-1",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-brand-green/20 to-brand-blue/20 items-center justify-center">
                <div className="text-6xl">💚</div>
            </div>
        ),
    },
    {
        title: "Ciclo de Vida Extendido",
        description: "Con el mantenimiento adecuado, un Mac, una iMac u otro dispositivo de cualquier marca puede durar 5+ años. La repotenciación puede hacerlo funcionar como nuevo.",
        icon: "🔄",
        className: "md:col-span-2",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-green/20 items-center justify-center">
                <div className="text-6xl">⏱️</div>
            </div>
        ),
    },
    {
        title: "Residuos Electrónicos",
        description: "Cada año se generan 50 millones de toneladas de e-waste. La reparación y restauración son clave para reducir este problema.",
        icon: "🗑️",
        className: "md:col-span-1",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 items-center justify-center">
                <div className="text-6xl">⚠️</div>
            </div>
        ),
    },
    {
        title: "Tu Aporte al Planeta",
        description: "Al elegir reparar en lugar de desechar, contribuyes directamente a la reducción de contaminación y extracción de recursos.",
        icon: "🌟",
        className: "md:col-span-2",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-brand-green/20 to-brand-blue/20 items-center justify-center">
                <div className="text-6xl">🤝</div>
            </div>
        ),
    },
];

const guides = [
    {
        title: "Guía de Mantenimiento",
        description: "Aprende a cuidar tu Mac para maximizar su vida útil",
        color: "blue",
        fullContent: {
            intro: "El mantenimiento preventivo es clave para alargar la vida útil de tus dispositivos.",
            sections: [
                {
                    title: "Limpieza Regular",
                    content: "Limpia la pantalla con un paño de microfibra suave. Evita productos químicos agresivos. Limpia el teclado con aire regularmente."
                },
                {
                    title: "Actualizaciones",
                    content: "Mantén tu sistema operativo actualizado. Instala las actualizaciones de seguridad tan pronto estén disponibles. Actualiza tus aplicaciones regularmente."
                },
                {
                    title: "Gestión de Batería",
                    content: "Evita dejar tu Mac conectado al cargador todo el tiempo. Mantén la batería entre 20% y 80% cuando sea posible."
                },
                {
                    title: "Temperatura",
                    content: "Usa tu Mac en superficies duras y planas. Evita bloquear las rejillas de ventilación. No lo expongas a temperaturas extremas."
                }
            ]
        }
    },
    {
        title: "Señales de Alerta",
        description: "Identifica cuándo tu dispositivo necesita atención profesional",
        color: "green",
        fullContent: {
            intro: "Reconocer los problemas a tiempo puede evitar daños mayores y costos más altos.",
            sections: [
                {
                    title: "Rendimiento Lento",
                    content: "Si tu Mac tarda más de lo normal en encender o abrir aplicaciones, puede necesitar mantenimiento. El disco duro podría estar lleno o dañado."
                },
                {
                    title: "Sobrecalentamiento",
                    content: "Si tu dispositivo se calienta excesivamente o los ventiladores funcionan constantemente a máxima velocidad, necesitas limpieza interna o cambio de pasta térmica."
                },
                {
                    title: "Problemas de Batería",
                    content: "Si la batería se descarga rápidamente o no carga correctamente, es momento de reemplazarla. No ignores estos signos."
                },
                {
                    title: "Ruidos Extraños",
                    content: "Clicks, zumbidos o ruidos inusuales pueden indicar problemas con el disco duro o ventiladores. Requiere atención inmediata."
                }
            ]
        }
    },
    {
        title: "Repotenciación Inteligente",
        description: "Descubre cómo mejorar el rendimiento de tu Mac",
        color: "blue",
        fullContent: {
            intro: "La repotenciación puede hacer que tu Mac funcione como nuevo sin necesidad de comprar uno nuevo.",
            sections: [
                {
                    title: "Upgrade de RAM",
                    content: "Aumentar la memoria RAM mejora significativamente el rendimiento multitarea. Ideal si trabajas con programas pesados como edición de video o diseño gráfico. Puede duplicar o triplicar la velocidad."
                },
                {
                    title: "SSD en lugar de HDD",
                    content: "Reemplazar un disco duro tradicional por un SSD es la mejora más impactante. Arranque hasta 10 veces más rápido. Apertura instantánea de aplicaciones. Mayor durabilidad sin partes móviles."
                },
                {
                    title: "Limpieza y Mantenimiento",
                    content: "Una limpieza profunda interna puede mejorar el rendimiento hasta un 40%. Cambio de pasta térmica reduce temperaturas. Limpieza de ventiladores mejora el flujo de aire."
                },
                {
                    title: "Actualización de macOS",
                    content: "Mantener el sistema actualizado optimiza el rendimiento. Nuevas funciones de eficiencia energética. Mejor compatibilidad con aplicaciones modernas."
                }
            ]
        }
    }
];

export function EducationSection() {
    const [selectedGuide, setSelectedGuide] = useState<number | null>(null);

    return (
        <section id="educacion" className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-brand-black mb-4">Educación y Sostenibilidad</h2>
                    <p className="text-xl text-brand-black/70 max-w-3xl mx-auto">Conoce el impacto positivo de la economía circular y cómo contribuyes al cuidado del planeta</p>
                </div>

                <BentoGrid className="mb-16">
                    {educationalContent.map((item, i) => (
                        <BentoGridItem key={i} title={item.title} description={item.description} header={item.header} icon={<div className="text-4xl">{item.icon}</div>} className={item.className} />
                    ))}
                </BentoGrid>

                <div>
                    <h3 className="text-3xl font-bold text-center text-brand-black mb-8">Guías y Recursos</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        {guides.map((guide, index) => (
                            <div key={index} onClick={() => setSelectedGuide(index)} className={`cursor-pointer w-full md:w-[calc(33.333%-1rem)] max-w-sm group p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent ${guide.color === "blue" ? "hover:border-brand-blue" : "hover:border-brand-green"}`}>
                                <div className={`text-4xl mb-4 group-hover:scale-110 transition-transform ${guide.color === "blue" ? "text-brand-blue" : "text-brand-green"}`}>📚</div>
                                <h4 className={`text-lg font-bold mb-2 ${guide.color === "blue" ? "text-brand-blue" : "text-brand-green"}`}>{guide.title}</h4>
                                <p className="text-sm text-brand-black/70 mb-4">{guide.description}</p>
                                <span className={`text-sm font-semibold ${guide.color === "blue" ? "text-brand-blue" : "text-brand-green"}`}>Leer más →</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {selectedGuide !== null && (
                <div className="fixed inset-0 bg-brand-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedGuide(null)}>
                    <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <div className={`relative p-8 rounded-t-3xl ${guides[selectedGuide].color === "blue" ? "bg-gradient-to-r from-brand-blue to-brand-blue/80" : "bg-gradient-to-r from-brand-green to-brand-green/80"}`}>
                            <button onClick={() => setSelectedGuide(null)} className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl hover:bg-gray-100 transition-colors shadow-lg">×</button>
                            <div className="text-6xl mb-4">📚</div>
                            <h2 className="text-3xl font-bold text-white mb-2">{guides[selectedGuide].title}</h2>
                            <p className="text-white/90 text-lg">{guides[selectedGuide].fullContent.intro}</p>
                        </div>

                        <div className="p-8">
                            {guides[selectedGuide].fullContent.sections.map((section, i) => (
                                <div key={i} className="mb-8 last:mb-0">
                                    <h3 className={`text-xl font-bold mb-3 ${guides[selectedGuide].color === "blue" ? "text-brand-blue" : "text-brand-green"}`}>{section.title}</h3>
                                    <p className="text-brand-black/80 leading-relaxed">{section.content}</p>
                                </div>
                            ))}

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <p className="text-center text-brand-black/60 mb-4">¿Necesitas ayuda profesional con tu dispositivo?</p>
                                <div className="flex gap-4">
                                    <a href="#contacto" onClick={() => setSelectedGuide(null)} className={`flex-1 py-3 text-center rounded-xl font-semibold text-white transition-all hover:shadow-xl ${guides[selectedGuide].color === "blue" ? "bg-brand-blue hover:bg-brand-blue/90" : "bg-brand-green hover:bg-brand-green/90"}`}>Contactar a LapTech</a>
                                    <button onClick={() => setSelectedGuide(null)} className="px-6 py-3 border-2 border-gray-300 rounded-xl font-semibold text-brand-black hover:bg-gray-50 transition-all">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}