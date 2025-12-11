"use client";

import { useState } from "react";
import emailjs from '@emailjs/browser';

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
        setSubmitMessage("");

        try {
            // Configuración de EmailJS - REEMPLAZA ESTOS VALORES
            const result = await emailjs.send(
                'service_8ict6dd',     // ← Reemplaza con tu Service ID
                //'service_a5li6xt',   // ← Reemplaza con tu Service ID
                'template_ftgtnkm',   // ← Reemplaza con tu Template ID
                //'template_oyfrkq6',     // ← Reemplaza con tu Template ID
                {
                    from_name: formData.name,
                    reply_to: formData.email,
                    phone: formData.phone,
                    device: formData.device,
                    message: formData.message,
                },
                'HRVPxCfoQY47nqH5g'
                //'Vbc48W__CAE97Cscu'       // ← Reemplaza con tu Public Key
            );

            if (result.text === 'OK') {
                setSubmitMessage("¡Mensaje enviado! Te contactaremos pronto.");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    device: "",
                    message: "",
                });
            }
        } catch (error: unknown) {
            console.error('Error:', error);
            setSubmitMessage("Error al enviar. Por favor intenta de nuevo o contáctanos por WhatsApp.");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitMessage(""), 5000);
        }
    };

    return (
        <section id="contacto" className="py-20 px-4 bg-brand-black relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
            <div className="absolute top-20 left-0 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-0 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Contáctanos</h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        ¿Tienes un dispositivo Mac, iMac o Multimarca que necesita atención? Estamos aquí para ayudarte
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center">
                                        <span className="text-2xl">📧</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Email</h4>
                                        <a href="mailto:laptechmac@gmail.com" className="text-brand-green hover:text-brand-blue transition-colors">
                                            laptechmac@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center">
                                        <span className="text-2xl">📱</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Teléfono / WhatsApp</h4>
                                        <a href="tel:+573001234567" className="text-brand-green hover:text-brand-blue transition-colors">
                                            +57 310 408 3923
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center">
                                        <span className="text-2xl">📍</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Dirección</h4>
                                        <p className="text-white/70">
                                            Carrera 24 B # 61 A 37 <br />
                                            Local 3<br />
                                            Manizales, Caldas<br />
                                            Colombia
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center">
                                        <span className="text-2xl">🕐</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Horario</h4>
                                        <p className="text-white/70">
                                            Lunes a Viernes: 8:00 AM - 5:00 PM<br />
                                            Sábados y domingos: Cerrado
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10">
                                <h4 className="text-white font-semibold mb-4">Síguenos</h4>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://instagram.com/lap.tech_"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-brand-blue hover:bg-brand-green rounded-lg flex items-center justify-center transition-colors"
                                        aria-label="Instagram"
                                    >
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://www.facebook.com/share/1BorvJWhrM/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-brand-blue hover:bg-brand-green rounded-lg flex items-center justify-center transition-colors"
                                        aria-label="Facebook"
                                    >
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://wa.me/573104083923"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-brand-green hover:bg-brand-blue rounded-lg flex items-center justify-center transition-colors"
                                        aria-label="WhatsApp"
                                    >
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-2 border border-white/10 overflow-hidden h-64">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.3024755667346!2d-75.4947!3d5.0689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e476f857f8c5e9d%3A0x1234567890abcdef!2sCarrera%2024B%20%2361A-37%2C%20Manizales%2C%20Caldas!5e0!3m2!1ses!2sco!4v1234567890123"
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: "1.5rem" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">Solicita tu Diagnóstico Gratis</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-white/90 font-medium mb-2">Nombre Completo *</label>
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

                            <div>
                                <label htmlFor="email" className="block text-white/90 font-medium mb-2">Email *</label>
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

                            <div>
                                <label htmlFor="phone" className="block text-white/90 font-medium mb-2">Teléfono *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-brand-blue transition-colors"
                                    placeholder="+57 310 408 3923"
                                />
                            </div>

                            <div>
                                <label htmlFor="device" className="block text-white/90 font-medium mb-2">Dispositivo *</label>
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

                            <div>
                                <label htmlFor="message" className="block text-white/90 font-medium mb-2">Describe el problema</label>
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

                            {submitMessage && (
                                <div className={`p-4 rounded-xl text-center font-medium ${submitMessage.includes('Error')
                                    ? 'bg-red-500/20 border border-red-500 text-red-200'
                                    : 'bg-brand-green/20 border border-brand-green text-brand-green'
                                    }`}>
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