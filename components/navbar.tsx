"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        { name: "Consultar", href: "#cliente" },
        { name: "Contacto", href: "#contacto" },
    ];

    const handleNavClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-19">
                        <div className="flex-shrink-0">
                            <a href="#inicio" className="flex items-center">
                                {scrolled ? (
                                    <Image src="/images/logoPrin.png" alt="LapTech Logo" width={280} height={95} className="h-13 w-auto transition-all duration-300" priority />
                                ) : (
                                    <Image src="/images/logoSecun.png" alt="LapTech" width={380} height={130} className="h-8 w-auto transition-all duration-300" priority />
                                )}
                            </a>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <a key={item.name} href={item.href} className={`font-medium transition-colors duration-200 ${scrolled ? "text-brand-black hover:text-brand-blue" : "text-white hover:text-brand-green"}`}>{item.name}</a>
                            ))}
                            <a href="#contacto" className="px-6 py-2 bg-brand-blue text-white rounded-full font-semibold hover:bg-brand-green transition-all duration-300">Cotizar</a>
                        </div>

                        <div className="md:hidden">
                            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`p-2 rounded-lg ${scrolled ? "text-brand-black" : "text-white"}`} aria-label="Abrir menú">
                                {mobileMenuOpen ? (
                                    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>
                                ) : (
                                    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {mobileMenuOpen && (
                <div className={`md:hidden fixed inset-0 z-40 ${scrolled ? "bg-white/80" : "bg-brand-black/80"} backdrop-blur-md flex items-start justify-center pt-24`} onClick={handleNavClick}>
                    <div className="w-full max-w-md px-4" onClick={(e) => e.stopPropagation()}>
                        <div className="flex flex-col items-center space-y-6 py-8">
                            {navItems.map((item) => (
                                <a key={item.name} href={item.href} onClick={handleNavClick} className={`font-semibold text-xl transition-colors duration-200 ${scrolled ? "text-brand-black hover:text-brand-blue" : "text-white hover:text-brand-green"}`}>{item.name}</a>
                            ))}
                            <a href="#contacto" onClick={handleNavClick} className="px-10 py-4 bg-brand-blue text-white rounded-full font-semibold text-lg hover:bg-brand-green transition-all duration-300 shadow-lg">Cotizar</a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}