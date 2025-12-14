"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface Servicio {
    referencia: string;
    cliente_nombre: string;
    dispositivo: string;
    descripcion_problema: string;
    servicio_seleccionado: string;
    estado: string;
    fecha_ingreso: string;
    fecha_estimada: string;
    notas_tecnicas: string;
    precio_estimado: number;
}

export function ClientTrackingSection() {
    const [referencia, setReferencia] = useState("");
    const [servicio, setServicio] = useState<Servicio | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const buscarServicio = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setServicio(null);

        const { data, error: supabaseError } = await supabase
            .from("servicios")
            .select("*")
            .eq("referencia", referencia.toUpperCase().trim())
            .single();

        if (supabaseError || !data) {
            setError("No se encontró ningún servicio con ese código. Verifica e intenta nuevamente.");
        } else {
            setServicio(data);
        }

        setLoading(false);
    };

    const getEstadoInfo = (estado: string) => {
        const estados: { [key: string]: { color: string; icon: string; descripcion: string } } = {
            "Recibido": { color: "from-blue-500 to-blue-600", icon: "📦", descripcion: "Hemos recibido tu dispositivo y está en cola para diagnóstico." },
            "En diagnóstico": { color: "from-yellow-500 to-yellow-600", icon: "🔍", descripcion: "Nuestros técnicos están evaluando tu dispositivo." },
            "Diagnóstico completado": { color: "from-purple-500 to-purple-600", icon: "✅", descripcion: "El diagnóstico está completo." },
            "En reparación": { color: "from-orange-500 to-orange-600", icon: "🔧", descripcion: "Tu dispositivo está siendo reparado." },
            "En espera de repuestos": { color: "from-red-500 to-red-600", icon: "⏳", descripcion: "Esperando repuestos necesarios." },
            "Reparación completada": { color: "from-green-500 to-green-600", icon: "✨", descripcion: "¡Reparación completa! Haciendo pruebas finales." },
            "Listo para entrega": { color: "from-teal-500 to-teal-600", icon: "🎉", descripcion: "¡Listo para recoger!" },
            "Entregado": { color: "from-gray-500 to-gray-600", icon: "✅", descripcion: "Entregado exitosamente." },
        };
        return estados[estado] || estados["Recibido"];
    };

    const formatearFecha = (fecha: string) => {
        if (!fecha) return "No especificada";

        // Parsear la fecha como UTC y obtener solo la parte de la fecha (YYYY-MM-DD)
        const fechaUTC = new Date(fecha);
        const year = fechaUTC.getUTCFullYear();
        const month = fechaUTC.getUTCMonth();
        const day = fechaUTC.getUTCDate();

        // Crear una nueva fecha usando los componentes UTC pero en hora local
        const fechaLocal = new Date(year, month, day);

        return fechaLocal.toLocaleDateString("es-CO", {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "America/Bogota"
        });
    };

    const getProgreso = (estado: string) => {
        const estados = ["Recibido", "En diagnóstico", "Diagnóstico completado", "En reparación", "Reparación completada", "Listo para entrega", "Entregado"];
        const index = estados.indexOf(estado);
        return ((index + 1) / estados.length) * 100;
    };

    return (
        <section id="cliente" className="py-20 px-4 bg-gradient-to-b from-brand-cream to-white">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-bold text-brand-black mb-4">Consulta tu Servicio</h2>
                    <p className="text-xl text-brand-black/70 max-w-2xl mx-auto">Ingresa tu código de referencia para ver el estado de tu dispositivo</p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-xl mb-8">
                    <form onSubmit={buscarServicio} className="space-y-6">
                        <div>
                            <label htmlFor="referencia" className="block text-lg font-semibold text-brand-black mb-3">Código de Referencia</label>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input type="text" id="referencia" value={referencia} onChange={(e) => setReferencia(e.target.value)} placeholder="Ej: LT-2024-001" className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:border-brand-blue transition-colors uppercase" required />
                                <button type="submit" disabled={loading} className="px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-green text-white rounded-xl font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 whitespace-nowrap">
                                    {loading ? "Buscando..." : "Consultar"}
                                </button>
                            </div>
                            <p className="text-sm text-brand-black/60 mt-2">💡 Encuentra tu código en el comprobante que te entregamos</p>
                        </div>
                        {error && <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl text-red-700">{error}</div>}
                    </form>
                </div>

                {servicio && (
                    <div className="space-y-6">
                        <div className={`bg-gradient-to-r ${getEstadoInfo(servicio.estado).color} rounded-3xl p-8 text-white shadow-xl`}>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="text-6xl">{getEstadoInfo(servicio.estado).icon}</div>
                                <div>
                                    <h3 className="text-3xl font-bold mb-1">{servicio.estado}</h3>
                                    <p className="text-white/90 text-lg">{getEstadoInfo(servicio.estado).descripcion}</p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <div className="flex justify-between text-sm mb-2">
                                    <span>Progreso del servicio</span>
                                    <span>{Math.round(getProgreso(servicio.estado))}%</span>
                                </div>
                                <div className="w-full bg-white/30 rounded-full h-3">
                                    <div className="bg-white rounded-full h-3 transition-all duration-500" style={{ width: `${getProgreso(servicio.estado)}%` }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <h4 className="text-xl font-bold text-brand-black mb-4">💻 Información del Dispositivo</h4>
                                <div className="space-y-3">
                                    <div><span className="text-sm text-brand-black/60">Dispositivo:</span><p className="font-semibold text-brand-black">{servicio.dispositivo}</p></div>
                                    <div><span className="text-sm text-brand-black/60">Servicio:</span><p className="font-semibold text-brand-green">{servicio.servicio_seleccionado}</p></div>
                                    <div><span className="text-sm text-brand-black/60">Código:</span><p className="font-mono font-bold text-brand-blue">{servicio.referencia}</p></div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <h4 className="text-xl font-bold text-brand-black mb-4">📅 Fechas Importantes</h4>
                                <div className="space-y-3">
                                    <div><span className="text-sm text-brand-black/60">Fecha de Ingreso:</span><p className="font-semibold text-brand-black">{formatearFecha(servicio.fecha_ingreso)}</p></div>
                                    <div><span className="text-sm text-brand-black/60">Entrega Estimada:</span><p className="font-semibold text-brand-green">{formatearFecha(servicio.fecha_estimada)}</p></div>
                                    {servicio.precio_estimado && <div><span className="text-sm text-brand-black/60">Precio Estimado:</span><p className="font-bold text-brand-blue text-xl">${servicio.precio_estimado.toLocaleString("es-CO")}</p></div>}
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <h4 className="text-xl font-bold text-brand-black mb-4">📋 Problema Reportado</h4>
                            <p className="text-brand-black/80 leading-relaxed">{servicio.descripcion_problema}</p>
                        </div>

                        {servicio.notas_tecnicas && (
                            <div className="bg-gradient-to-br from-brand-blue/10 to-brand-green/10 rounded-2xl p-6 border-2 border-brand-blue/20">
                                <h4 className="text-xl font-bold text-brand-black mb-4">🔧 Notas del Técnico</h4>
                                <p className="text-brand-black/80 leading-relaxed">{servicio.notas_tecnicas}</p>
                            </div>
                        )}

                        <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                            <p className="text-brand-black/70 mb-4">¿Tienes alguna pregunta sobre tu servicio?</p>
                            <a href="#contacto" className="inline-block px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-green text-white rounded-xl font-semibold hover:shadow-xl transition-all transform hover:scale-105">Contáctanos</a>
                        </div>
                    </div>
                )}

                {!servicio && !error && !loading && (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">🔍</div>
                        <p className="text-xl text-brand-black/70">Ingresa tu código de referencia arriba para ver el estado de tu dispositivo</p>
                    </div>
                )}
            </div>
        </section>
    );
}