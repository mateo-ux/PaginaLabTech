"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Inicio", href: "#inicio" },
        { name: "Servicios", href: "#servicios" },
        { name: "Quiénes Somos", href: "#nosotros" },
        { name: "Educación", href: "#educacion" },
        { name: "Consultar", href: "#cliente" },  // ← Agregar esta línea
        { name: "Contacto", href: "#contacto" },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <a href="#inicio" className="flex items-center space-x-2">
                            <Image src="/images/logo.png" alt="LapTech Logo" width={150} height={50} className="h-12 w-auto" />
                        </a>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a key={item.name} href={item.href} className={`font-medium transition-colors duration-200 ${scrolled ? "text-brand-black hover:text-brand-blue" : "text-white hover:text-brand-green"}`}>
                                {item.name}
                            </a>
                        ))}

                        <a href="#contacto" className="px-6 py-2 bg-brand-blue text-white rounded-full font-semibold hover:bg-brand-green transition-all duration-300">
                            Cotizar
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button className={`p-2 rounded-lg ${scrolled ? "text-brand-black" : "text-white"}`}>
                            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}