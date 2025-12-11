"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
    {
        quote: "Mi MacBook Pro 2024 estaba lentísima y pensé que era hora de cambiarla. LapTech la repotenciaron con un SSD y más RAM, ahora funciona como nueva. Ahorré más de $3 millones y además ayudé al planeta. ¡Increíble servicio!",
        name: "María González",
        title: "Diseñadora Gráfica",
    },
    {
        quote: "Excelente atención y rapidez. Mi iMac dejó de encender y en 48 horas ya estaba listo. El diagnóstico fue preciso y el precio justo. Lo mejor es que recuperaron todos mis archivos de trabajo. 100% recomendados.",
        name: "Carlos Ramírez",
        title: "Arquitecto",
    },
    {
        quote: "Llevé mi MacBook Air con la pantalla rota y pensé que sería muy costoso. Me sorprendió el precio accesible y la calidad del repuesto. Quedó perfecta y además me explicaron todo el proceso. Profesionales de verdad.",
        name: "Andrea López",
        title: "Fotógrafa",
    },
    {
        quote: "Como empresa comprometida con la sostenibilidad, encontrar LapTech fue perfecto. Han restaurado más de 10 equipos para nuestra oficina, ahorrando costos y reduciendo nuestra huella de carbono. Servicio corporativo excelente.",
        name: "Roberto Méndez",
        title: "Diseñador de TI - StartupCO",
    },
    {
        quote: "Mi Mac Mini 2019 estaba obsoleto para edición de video. Después de la repotenciación con SSD NVMe, ahora edito 4K sin problemas. Es como tener un equipo nuevo por una fracción del precio. Trabajo impecable.",
        name: "Juan Pablo Torres",
        title: "Editor de Video",
    },
    {
        quote: "Derramé café en mi MacBook y pensé que estaba perdido. LapTech no solo lo reparó sino que recuperó todos mis documentos. La transparencia en el proceso y los costos fue excepcional. Eternamente agradecida.",
        name: "Valentina Ruiz",
        title: "Estudiante de Medicina",
    },
];

export function TestimonialsSection() {
    return (
        <section className="py-20 px-4 bg-gradient-to-b from-white to-brand-cream relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-brand-black mb-4">
                        Lo Que Dicen Nuestros Clientes
                    </h2>
                    <p className="text-xl text-brand-black/70 max-w-3xl mx-auto">
                        Más de 1,800 clientes satisfechos confían en nosotros para el
                        cuidado de sus dispositivos Mac, iMac o multimarca
                    </p>
                </div>

                {/* Infinite Scroll Testimonials */}
                <div className="relative">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="left"
                        speed="slow"
                    />
                </div>



                {/* CTA */}
                <div className="mt-16 text-center">
                    <p className="text-lg text-brand-black/70 mb-6">
                        ¿Listo para unirte a miles de clientes satisfechos?
                    </p>
                    <a
                        href="#contacto"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-green text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105"
                    >
                        Solicita tu Diagnóstico Gratis
                    </a>
                </div>
            </div>
        </section>
    );
}