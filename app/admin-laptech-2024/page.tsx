"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface Servicio {
    id: string;
    referencia: string;
    cliente_nombre: string;
    cliente_telefono: string;
    cliente_email: string;
    dispositivo: string;
    descripcion_problema: string;
    servicio_seleccionado: string;
    estado: string;
    fecha_ingreso: string;
    fecha_estimada: string;
    notas_tecnicas: string;
    precio_estimado: number;
}

export default function AdminPanel() {
    const [servicios, setServicios] = useState<Servicio[]>([]);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [editando, setEditando] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [dbConnected, setDbConnected] = useState<boolean | null>(null);

    const [formData, setFormData] = useState({
        cliente_nombre: "",
        cliente_telefono: "",
        cliente_email: "",
        dispositivo: "",
        descripcion_problema: "",
        servicio_seleccionado: "Diagnóstico",
        estado: "Recibido",
        fecha_estimada: "",
        notas_tecnicas: "",
        precio_estimado: "",
    });

    const serviciosDisponibles = [
        "Diagnóstico",
        "Restauración",
        "Repotenciación",
        "Remanufacturación",
        "Mantenimiento",
        "Recuperación de Datos",
    ];

    const estadosDisponibles = [
        "Recibido",
        "En diagnóstico",
        "Diagnóstico completado",
        "En reparación",
        "En espera de repuestos",
        "Reparación completada",
        "Listo para entrega",
        "Entregado",
    ];

    useEffect(() => {
        verificarConexion();
        cargarServicios();
    }, []);

    const verificarConexion = async () => {
        try {
            const { error } = await supabase.from("servicios").select("count").limit(1);
            setDbConnected(!error);
        } catch (err) {
            setDbConnected(false);
        }
    };

    const cargarServicios = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from("servicios")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) {
            console.error("Error:", error);
        } else {
            setServicios(data || []);
        }
        setLoading(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const datos = {
            ...formData,
            precio_estimado: formData.precio_estimado ? parseFloat(formData.precio_estimado) : null,
            fecha_estimada: formData.fecha_estimada || null,
        };

        if (editando) {
            const { error } = await supabase
                .from("servicios")
                .update(datos)
                .eq("id", editando);

            if (error) {
                alert("Error al actualizar: " + error.message);
            } else {
                alert("Servicio actualizado exitosamente");
                resetForm();
                cargarServicios();
            }
        } else {
            const { error } = await supabase.from("servicios").insert([datos]);

            if (error) {
                alert("Error al crear: " + error.message);
            } else {
                alert("Servicio creado exitosamente");
                resetForm();
                cargarServicios();
            }
        }
        setLoading(false);
    };

    const editarServicio = (servicio: Servicio) => {
        setFormData({
            cliente_nombre: servicio.cliente_nombre,
            cliente_telefono: servicio.cliente_telefono,
            cliente_email: servicio.cliente_email || "",
            dispositivo: servicio.dispositivo,
            descripcion_problema: servicio.descripcion_problema,
            servicio_seleccionado: servicio.servicio_seleccionado,
            estado: servicio.estado,
            fecha_estimada: servicio.fecha_estimada || "",
            notas_tecnicas: servicio.notas_tecnicas || "",
            precio_estimado: servicio.precio_estimado?.toString() || "",
        });
        setEditando(servicio.id);
        setMostrarFormulario(true);
    };

    const eliminarServicio = async (id: string) => {
        if (!confirm("¿Estás seguro de eliminar este servicio?")) return;

        const { error } = await supabase.from("servicios").delete().eq("id", id);

        if (error) {
            alert("Error al eliminar: " + error.message);
        } else {
            alert("Servicio eliminado");
            cargarServicios();
        }
    };

    const resetForm = () => {
        setFormData({
            cliente_nombre: "",
            cliente_telefono: "",
            cliente_email: "",
            dispositivo: "",
            descripcion_problema: "",
            servicio_seleccionado: "Diagnóstico",
            estado: "Recibido",
            fecha_estimada: "",
            notas_tecnicas: "",
            precio_estimado: "",
        });
        setEditando(null);
        setMostrarFormulario(false);
    };

    const getEstadoColor = (estado: string) => {
        const colores: { [key: string]: string } = {
            "Recibido": "bg-blue-100 text-blue-800",
            "En diagnóstico": "bg-yellow-100 text-yellow-800",
            "Diagnóstico completado": "bg-purple-100 text-purple-800",
            "En reparación": "bg-orange-100 text-orange-800",
            "En espera de repuestos": "bg-red-100 text-red-800",
            "Reparación completada": "bg-green-100 text-green-800",
            "Listo para entrega": "bg-teal-100 text-teal-800",
            "Entregado": "bg-gray-100 text-gray-800",
        };
        return colores[estado] || "bg-gray-100 text-gray-800";
    };

    return (
        <div className="min-h-screen bg-brand-cream p-4 md:p-8">
            {/* Indicador de Conexión */}
            <div className="fixed top-4 right-4 z-50">
                {dbConnected === null ? (
                    <div className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                        <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                        <span className="font-medium">Conectando...</span>
                    </div>
                ) : dbConnected ? (
                    <div className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">Base de datos conectada</span>
                    </div>
                ) : (
                    <div className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">Error de conexión</span>
                    </div>
                )}
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="bg-gradient-to-r from-brand-blue to-brand-green p-6 rounded-2xl mb-8 text-white">
                    <h1 className="text-3xl font-bold mb-2">Panel de Administración - LapTech</h1>
                    <p className="text-white/90">Gestión de servicios y seguimiento de equipos</p>
                </div>

                {/* Botón Nuevo Servicio */}
                <div className="mb-6">
                    <button
                        onClick={() => setMostrarFormulario(!mostrarFormulario)}
                        className="px-6 py-3 bg-brand-blue text-white rounded-xl font-semibold hover:bg-brand-green transition-colors"
                    >
                        {mostrarFormulario ? "Cancelar" : "+ Nuevo Servicio"}
                    </button>
                </div>

                {/* Formulario */}
                {mostrarFormulario && (
                    <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg">
                        <h2 className="text-2xl font-bold text-brand-black mb-6">
                            {editando ? "Editar Servicio" : "Nuevo Servicio"}
                        </h2>
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-brand-black mb-2">
                                    Nombre del Cliente *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.cliente_nombre}
                                    onChange={(e) => setFormData({ ...formData, cliente_nombre: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-blue"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-brand-black mb-2">
                                    Teléfono *
                                </label>
                                <input
                                    type="tel"
                                    required
                                    value={formData.cliente_telefono}
                                    onChange={(e) => setFormData({ ...formData, cliente_telefono: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-blue"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-brand-black mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={formData.cliente_email}
                                    onChange={(e) => setFormData({ ...formData, cliente_email: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-blue"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-brand-black mb-2">
                                    Dispositivo *
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="ej: MacBook Pro 2019"
                                    value={formData.dispositivo}
                                    onChange={(e) => setFormData({ ...formData, dispositivo: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-blue"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-brand-black mb-2">
                                    Descripción del Problema *
                                </label>
                                <textarea
                                    required
                                    rows={3}
                                    value={formData.descripcion_problema}
                                    onChange={(e) => setFormData({ ...formData, descripcion_problema: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-blue"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-brand-black mb-2">
                                    Servicio *
                                </label>
                                <select
                                    required
                                    value={formData.servicio_seleccionado}
                                    onChange={(e) => setFormData({ ...formData, servicio_seleccionado: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-blue"
                                >
                                    {serviciosDisponibles.map((servicio) => (
                                        <option key={servicio} value={servicio}>
                                            {servicio}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-brand-black mb-2">
                                    Estado *
                                </label>
                                <select
                                    required
                                    value={formData.estado}
                                    onChange={(e) => setFormData({ ...formData, estado: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-blue"
                                >
                                    {estadosDisponibles.map((estado) => (
                                        <option key={estado} value={estado}>
                                            {estado}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-brand-black mb-2">
                                    Fecha Estimada de Entrega
                                </label>
                                <input
                                    type="date"
                                    value={formData.fecha_estimada}
                                    onChange={(e) => setFormData({ ...formData, fecha_estimada: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-blue"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-brand-black mb-2">
                                    Precio Estimado ($)
                                </label>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={formData.precio_estimado}
                                    onChange={(e) => setFormData({ ...formData, precio_estimado: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-blue"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-brand-black mb-2">
                                    Notas Técnicas
                                </label>
                                <textarea
                                    rows={3}
                                    value={formData.notas_tecnicas}
                                    onChange={(e) => setFormData({ ...formData, notas_tecnicas: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-blue"
                                />
                            </div>

                            <div className="md:col-span-2 flex gap-4">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="px-6 py-3 bg-brand-green text-white rounded-xl font-semibold hover:bg-brand-blue transition-colors disabled:opacity-50"
                                >
                                    {loading ? "Guardando..." : editando ? "Actualizar" : "Crear Servicio"}
                                </button>
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="px-6 py-3 bg-gray-300 text-brand-black rounded-xl font-semibold hover:bg-gray-400 transition-colors"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Lista de Servicios */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h2 className="text-2xl font-bold text-brand-black mb-6">
                        Servicios Activos ({servicios.length})
                    </h2>

                    {loading ? (
                        <p className="text-center text-brand-black/70">Cargando...</p>
                    ) : servicios.length === 0 ? (
                        <p className="text-center text-brand-black/70">No hay servicios registrados</p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Referencia</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cliente</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Dispositivo</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Servicio</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estado</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {servicios.map((servicio) => (
                                        <tr key={servicio.id} className="hover:bg-gray-50">
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <span className="font-mono font-bold text-brand-blue">
                                                    {servicio.referencia}
                                                </span>
                                            </td>
                                            <td className="px-4 py-4">
                                                <div className="text-sm font-medium text-brand-black">
                                                    {servicio.cliente_nombre}
                                                </div>
                                                <div className="text-sm text-gray-500">{servicio.cliente_telefono}</div>
                                            </td>
                                            <td className="px-4 py-4 text-sm text-brand-black">
                                                {servicio.dispositivo}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-brand-black">
                                                {servicio.servicio_seleccionado}
                                            </td>
                                            <td className="px-4 py-4">
                                                <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getEstadoColor(servicio.estado)}`}>
                                                    {servicio.estado}
                                                </span>
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap text-sm">
                                                <button
                                                    onClick={() => editarServicio(servicio)}
                                                    className="text-brand-blue hover:text-brand-green mr-3 font-medium"
                                                >
                                                    Editar
                                                </button>
                                                <button
                                                    onClick={() => eliminarServicio(servicio.id)}
                                                    className="text-red-600 hover:text-red-800 font-medium"
                                                >
                                                    Eliminar
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}