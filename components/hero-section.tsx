"use client";

import { Spotlight } from "@/components/ui/spotlight";

export function HeroSection() {
    return (
        <section id="inicio" className="relative h-screen flex items-center justify-center bg-brand-black overflow-hidden">
            {/* Spotlights con tus colores corporativos */}
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#6095bd" />
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="#69bba5" />
            <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="#6095bd" />

            {/* Grid background sutil */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

            {/* Contenido */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-brand-cream mb-6 animate-fade-in">
                    Expertos en{" "}
                    <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                        Macintosh
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-brand-cream/80 mb-4 max-w-3xl mx-auto">
                    Diagnóstico, reparación y mantenimiento de calidad
                </p>

                <p className="text-lg md:text-xl text-brand-green/90 mb-10 font-medium">
                    Comprometidos con la economía circular y sostenibilidad
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="#contacto"
                        className="px-8 py-4 bg-brand-blue text-white rounded-full font-semibold text-lg hover:bg-brand-blue/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-brand-blue/50"
                    >
                        Solicitar Diagnóstico Gratis
                    </a>

                    <a
                        href="#servicios"
                        className="px-8 py-4 border-2 border-brand-green text-brand-green rounded-full font-semibold text-lg hover:bg-brand-green hover:text-white transition-all transform hover:scale-105"
                    >
                        Ver Servicios
                    </a>
                </div>

                {/* Stats */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="text-center">
                        <h3 className="text-4xl font-bold text-brand-blue mb-2">10+</h3>
                        <p className="text-brand-cream/60">Años de experiencia</p>
                    </div>

                    <div className="text-center">
                        <h3 className="text-4xl font-bold text-brand-green mb-2">5,000+</h3>
                        <p className="text-brand-cream/60">Dispositivos restaurados</p>
                    </div>

                    <div className="text-center">
                        <h3 className="text-4xl font-bold text-brand-blue mb-2">98%</h3>
                        <p className="text-brand-cream/60">Clientes satisfechos</p>
                    </div>
                </div>
            </div>
        </section>
    );
}