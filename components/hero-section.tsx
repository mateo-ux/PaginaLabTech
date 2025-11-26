"use client";

import { useState, useEffect } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";

// Importar la fuente Space Age
const spaceAgeStyle = {
    fontFamily: '"Space Age", sans-serif',
};

export function HeroSection() {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        "/images/gallery/repair-1.jpg",
        "/images/gallery/repair-2.jpg",
        "/images/gallery/repair-3.jpg",
        "/images/gallery/repair-4.jpg",
        "/images/gallery/repair-5.jpg",
        "/images/gallery/repair-6.jpg",
        "/images/gallery/repair-7.jpg",
        "/images/gallery/repair-8.jpg",
        "/images/gallery/repair-9.jpg",
        "/images/gallery/repair-10.jpg",
        "/images/gallery/repair-11.jpg",
        "/images/gallery/repair-12.jpg",
        "/images/gallery/repair-13.jpg",
        "/images/gallery/repair-14.jpg",
        "/images/gallery/repair-15.jpg",
        "/images/gallery/repair-16.jpg",
        "/images/gallery/repair-17.jpg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 4500);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section id="inicio" className="relative min-h-screen pt-24 flex items-center justify-center bg-brand-black overflow-hidden">
            <div className="absolute inset-0">
                {images.map((image, index) => (
                    <div key={index} className={`absolute inset-0 transition-opacity duration-4000 ease-in-out ${index === currentImage ? "opacity-100" : "opacity-0"}`}>
                        <Image src={image} alt={`Reparación ${index + 1}`} fill className="object-cover" sizes="100vw" priority={index === 0} quality={100} />
                    </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-brand-black/50 to-brand-black/70" />
            </div>

            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#6095bd" />
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="#69bba5" />
            <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="#6095bd" />

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <h1 style={spaceAgeStyle} className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-6 animate-fade-in drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                    Expertos en <span

                        className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent drop-shadow-none font-light"
                    >
                        Macintosh
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-white mb-4 max-w-3xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">Diagnóstico, reparación y mantenimiento de calidad</p>
                <p className="text-lg md:text-xl text-brand-green mb-10 font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">Comprometidos con la economía circular y sostenibilidad</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="#contacto" className="px-8 py-4 bg-brand-blue text-white rounded-full font-semibold text-lg hover:bg-brand-blue/90 transition-all transform hover:scale-105 shadow-2xl">Solicitar Diagnóstico Gratis</a>
                    <a href="#servicios" className="px-8 py-4 border-2 border-brand-green text-brand-green bg-brand-black/60 backdrop-blur-md rounded-full font-semibold text-lg hover:bg-brand-green hover:text-white transition-all transform hover:scale-105 shadow-2xl">Ver Servicios</a>
                </div>

                <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto p-4">
                    <div className="text-center backdrop-blur-lg bg-brand-black/60 p-6 rounded-2xl border border-white/30 shadow-2xl">
                        <h3 className="text-4xl font-bold text-brand-blue mb-2">5+</h3>
                        <p className="text-white font-medium">Años de experiencia</p>
                    </div>
                    <div className="text-center backdrop-blur-lg bg-brand-black/60 p-6 rounded-2xl border border-white/30 shadow-2xl">
                        <h3 className="text-4xl font-bold text-brand-green mb-2">1,800+</h3>
                        <p className="text-white font-medium">Dispositivos restaurados</p>
                    </div>
                    <div className="text-center backdrop-blur-lg bg-brand-black/60 p-6 rounded-2xl border border-white/30 shadow-2xl">
                        <h3 className="text-4xl font-bold text-brand-blue mb-2">98%</h3>
                        <p className="text-white font-medium">Clientes satisfechos</p>
                    </div>
                </div>
            </div>
        </section>
    );
}