"use client";

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
        description: "Con el mantenimiento adecuado, un Mac puede durar 10+ años. La repotenciación puede hacerlo funcionar como nuevo.",
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
    { title: "Guía de Mantenimiento", description: "Aprende a cuidar tu Mac para maximizar su vida útil", link: "#", color: "blue" },
    { title: "Señales de Alerta", description: "Identifica cuándo tu dispositivo necesita atención profesional", link: "#", color: "green" },
    { title: "Repotenciación Inteligente", description: "Descubre cómo mejorar el rendimiento de tu Mac", link: "#", color: "blue" },
    { title: "Economía Circular en Acción", description: "Casos de éxito y testimonios de restauración", link: "#", color: "green" }
];

export function EducationSection() {
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

                <div className="bg-gradient-to-br from-brand-green/10 to-brand-blue/10 rounded-3xl p-8 md:p-12 mb-16">
                    <h3 className="text-3xl font-bold text-center text-brand-black mb-8">Beneficios Ambientales para Nuestros Clientes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <div className="text-4xl mb-4">💰</div>
                            <h4 className="text-xl font-bold text-brand-blue mb-2">Ahorro Económico</h4>
                            <p className="text-brand-black/70">Restaurar puede costar hasta un 70% menos que comprar nuevo, manteniendo la misma calidad y rendimiento.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <div className="text-4xl mb-4">🌿</div>
                            <h4 className="text-xl font-bold text-brand-green mb-2">Reducción de Huella</h4>
                            <p className="text-brand-black/70">Cada restauración evita la emisión de gases equivalente a plantar 3 árboles.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <div className="text-4xl mb-4">🔋</div>
                            <h4 className="text-xl font-bold text-brand-blue mb-2">Eficiencia Energética</h4>
                            <p className="text-brand-black/70">La remanufacturación usa 90% menos energía que producir un dispositivo nuevo.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <div className="text-4xl mb-4">♻️</div>
                            <h4 className="text-xl font-bold text-brand-green mb-2">Menos Residuos</h4>
                            <p className="text-brand-black/70">Contribuyes a reducir los 2.5 millones de toneladas de e-waste que genera Colombia anualmente.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-3xl font-bold text-center text-brand-black mb-8">Guías y Recursos</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {guides.map((guide, index) => (
                            <a key={index} href={guide.link} className={`group p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent ${guide.color === "blue" ? "hover:border-brand-blue" : "hover:border-brand-green"}`}>
                                <div className={`text-4xl mb-4 group-hover:scale-110 transition-transform ${guide.color === "blue" ? "text-brand-blue" : "text-brand-green"}`}>📚</div>
                                <h4 className={`text-lg font-bold mb-2 ${guide.color === "blue" ? "text-brand-blue" : "text-brand-green"}`}>{guide.title}</h4>
                                <p className="text-sm text-brand-black/70 mb-4">{guide.description}</p>
                                <span className={`text-sm font-semibold ${guide.color === "blue" ? "text-brand-blue" : "text-brand-green"}`}>Leer más →</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}