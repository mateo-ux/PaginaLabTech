"use client";

import { useState } from "react";

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        device: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulación de envío (aquí conectarías con tu backend o servicio de email)
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitMessage("¡Mensaje enviado! Te contactaremos pronto.");
            setFormData({
                name: "",
                email: "",
                phone: "",
                device: "",
                message: "",
            });

            setTimeout(() => setSubmitMessage(""), 5000);
        }, 2000);
    };

    return (
        <section id="contacto" className="py-20 px-4 bg-brand-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
            <div className="absolute top-20 left-0 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-0 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Contáctanos
                    </h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        ¿Tienes un dispositivo Apple que necesita atención? Estamos aquí para ayudarte
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-8">
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Información de Contacto
                            </h3>

                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center">
                                        <span className="text-2xl">📧</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Email</h4>
                                        <a href="mailto:contacto@laptech.com" className="text-brand-green hover:text-brand-blue transition-colors">
                                            contacto@laptech.com
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center">
                                        <span className="text-2xl">📱</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Teléfono / WhatsApp</h4>
                                        <a href="tel:+573001234567" className="text-brand-green hover:text-brand-blue transition-colors">
                                            +57 300 123 4567
                                        </a>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center">
                                        <span className="text-2xl">📍</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Dirección</h4>
                                        <p className="text-white/70">
                                            Calle 23 #45-67<br />
                                            Manizales, Caldas<br />
                                            Colombia
                                        </p>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center">
                                        <span className="text-2xl">🕐</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Horario</h4>
                                        <p className="text-white/70">
                                            Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                                            Sábados: 9:00 AM - 2:00 PM<br />
                                            Domingos: Cerrado
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="mt-8 pt-8 border-t border-white/10">
                                <h4 className="text-white font-semibold mb-4">Síguenos</h4>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://instagram.com/lap.tech_"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-brand-blue hover:bg-brand-green rounded-lg flex items-center justify-center transition-colors"
                                    >
                                        <span className="text-xl">📷</span>
                                    </a>
                                    <a
                                        href="https://facebook.com/laptech"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-brand-blue hover:bg-brand-green rounded-lg flex items-center justify-center transition-colors"
                                    >
                                        <span className="text-xl">👍</span>
                                    </a>
                                    <a
                                        href="https://wa.me/573001234567"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-brand-green hover:bg-brand-blue rounded-lg flex items-center justify-center transition-colors"
                                    >
                                        <span className="text-xl">💬</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-2 border border-white/10 overflow-hidden h-64">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15907.739603137893!2d-75.51961!3d5.06889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e476f7d5e0e89a3%3A0x8a9a2e8c7e0e89a3!2sManizales%2C%20Caldas!5e0!3m2!1ses!2sco!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: "1.5rem" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Solicita tu Diagnóstico Gratis
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-white/90 font-medium mb-2">
                                    Nombre Completo *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-brand-blue transition-colors"
                                    placeholder="Tu nombre"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-white/90 font-medium mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-brand-blue transition-colors"
                                    placeholder="tu@email.com"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label htmlFor="phone" className="block text-white/90 font-medium mb-2">
                                    Teléfono *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-brand-blue transition-colors"
                                    placeholder="+57 300 123 4567"
                                />
                            </div>

                            {/* Device */}
                            <div>
                                <label htmlFor="device" className="block text-white/90 font-medium mb-2">
                                    Dispositivo *
                                </label>
                                <select
                                    id="device"
                                    name="device"
                                    value={formData.device}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-brand-blue transition-colors"
                                >
                                    <option value="" className="bg-brand-black">Selecciona tu dispositivo</option>
                                    <option value="MacBook Air" className="bg-brand-black">MacBook Air</option>
                                    <option value="MacBook Pro" className="bg-brand-black">MacBook Pro</option>
                                    <option value="iMac" className="bg-brand-black">iMac</option>
                                    <option value="Mac Mini" className="bg-brand-black">Mac Mini</option>
                                    <option value="Mac Pro" className="bg-brand-black">Mac Pro</option>
                                    <option value="iPhone" className="bg-brand-black">iPhone</option>
                                    <option value="iPad" className="bg-brand-black">iPad</option>
                                    <option value="Otro" className="bg-brand-black">Otro</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-white/90 font-medium mb-2">
                                    Describe el problema
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-brand-blue transition-colors resize-none"
                                    placeholder="Cuéntanos qué le pasa a tu dispositivo..."
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 ${isSubmitting
                                        ? "bg-gray-500 cursor-not-allowed"
                                        : "bg-gradient-to-r from-brand-blue to-brand-green text-white hover:shadow-xl"
                                    }`}
                            >
                                {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
                            </button>

                            {/* Success Message */}
                            {submitMessage && (
                                <div className="p-4 bg-brand-green/20 border border-brand-green rounded-xl text-brand-green text-center">
                                    {submitMessage}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}