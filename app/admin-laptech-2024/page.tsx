"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

interface Servicio {
    id: number;
    referencia: string;
    cliente_nombre: string;
    cliente_email: string;
    cliente_telefono: string;
    dispositivo: string;
    descripcion_problema: string;
    servicio_seleccionado: string;
    estado: string;
    fecha_ingreso: string;
    fecha_estimada: string;
    notas_tecnicas: string;
    precio_estimado: number;
    created_at: string;
}

export default function AdminPage() {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isChecking, setIsChecking] = useState(true);

    const [servicios, setServicios] = useState<Servicio[]>([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [editingServicio, setEditingServicio] = useState<Servicio | null>(null);

    const [formData, setFormData] = useState({
        cliente_nombre: "",
        cliente_email: "",
        cliente_telefono: "",
        dispositivo: "",
        descripcion_problema: "",
        servicio_seleccionado: "",
        estado: "Recibido",
        fecha_estimada: "",
        notas_tecnicas: "",
        precio_estimado: 0,
    });

    useEffect(() => {
        const checkAuth = () => {
            const authenticated = localStorage.getItem("adminAuthenticated");
            const loginTime = localStorage.getItem("adminLoginTime");

            if (!authenticated || authenticated !== "true") {
                router.push("/admin-laptech-2024/login");
                return false;
            }

            if (loginTime) {
                const twentyFourHours = 24 * 60 * 60 * 1000;
                const timePassed = Date.now() - parseInt(loginTime);

                if (timePassed > twentyFourHours) {
                    localStorage.removeItem("adminAuthenticated");
                    localStorage.removeItem("adminLoginTime");
                    router.push("/admin-laptech-2024/login");
                    return false;
                }
            }

            return true;
        };

        const isAuth = checkAuth();
        if (isAuth) {
            setIsAuthenticated(true);
            setIsChecking(false);
            cargarServicios();
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("adminAuthenticated");
        localStorage.removeItem("adminLoginTime");
        router.push("/admin-laptech-2024/login");
    };

    const cargarServicios = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from("servicios")
            .select("*")
            .order("created_at", { ascending: false });

        if (!error && data) {
            setServicios(data);
        }
        setLoading(false);
    };

    const generarReferencia = () => {
        const year = new Date().getFullYear();
        const random = Math.floor(Math.random() * 9000) + 1000;
        return `LT-${year}-${random}`;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (editingServicio) {
            const { error } = await supabase
                .from("servicios")
                .update(formData)
                .eq("id", editingServicio.id);

            if (!error) {
                alert("Servicio actualizado exitosamente");
                resetForm();
                cargarServicios();
            }
        } else {
            const { error } = await supabase.from("servicios").insert([
                {
                    ...formData,
                    referencia: generarReferencia(),
                    fecha_ingreso: new Date().toISOString().split("T")[0],
                },
            ]);

            if (!error) {
                alert("Servicio creado exitosamente");
                resetForm();
                cargarServicios();
            }
        }
    };

    const handleEdit = (servicio: Servicio) => {
        setEditingServicio(servicio);
        setFormData({
            cliente_nombre: servicio.cliente_nombre,
            cliente_email: servicio.cliente_email,
            cliente_telefono: servicio.cliente_telefono,
            dispositivo: servicio.dispositivo,
            descripcion_problema: servicio.descripcion_problema,
            servicio_seleccionado: servicio.servicio_seleccionado,
            estado: servicio.estado,
            fecha_estimada: servicio.fecha_estimada,
            notas_tecnicas: servicio.notas_tecnicas || "",
            precio_estimado: servicio.precio_estimado || 0,
        });
        setShowForm(true);
    };

    const handleDelete = async (id: number) => {
        if (confirm("¿Estás seguro de eliminar este servicio?")) {
            const { error } = await supabase.from("servicios").delete().eq("id", id);
            if (!error) {
                alert("Servicio eliminado");
                cargarServicios();
            }
        }
    };

    const resetForm = () => {
        setFormData({
            cliente_nombre: "",
            cliente_email: "",
            cliente_telefono: "",
            dispositivo: "",
            descripcion_problema: "",
            servicio_seleccionado: "",
            estado: "Recibido",
            fecha_estimada: "",
            notas_tecnicas: "",
            precio_estimado: 0,
        });
        setEditingServicio(null);
        setShowForm(false);
    };

    if (isChecking) {
        return (
            <div className="min-h-screen bg-brand-black flex items-center justify-center">
                <div className="text-white text-xl">Verificando acceso...</div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className="min-h-screen bg-brand-cream p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-brand-black">
                        Panel de Administración - LapTech
                    </h1>
                    <div className="flex gap-4">
                        <button
                            onClick={() => setShowForm(!showForm)}
                            className="px-6 py-3 bg-brand-blue text-white rounded-xl font-semibold hover:bg-brand-green transition-all"
                        >
                            {showForm ? "Ver Lista" : "+ Nuevo Servicio"}
                        </button>
                        <button
                            onClick={handleLogout}
                            className="px-6 py-3 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition-all"
                        >
                            Cerrar Sesión
                        </button>
                    </div>
                </div>

                {showForm ? (
                    <div className="bg-white rounded-3xl p-8 shadow-xl">
                        <h2 className="text-2xl font-bold text-brand-black mb-6">
                            {editingServicio ? "Editar Servicio" : "Crear Nuevo Servicio"}
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-brand-black mb-2">
                                        Nombre del Cliente
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.cliente_nombre}
                                        onChange={(e) =>
                                            setFormData({ ...formData, cliente_nombre: e.target.value })
                                        }
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-brand-blue"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-brand-black mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        value={formData.cliente_email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, cliente_email: e.target.value })
                                        }
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-brand-blue"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-brand-black mb-2">
                                        Teléfono
                                    </label>
                                    <input
                                        type="tel"
                                        value={formData.cliente_telefono}
                                        onChange={(e) =>
                                            setFormData({ ...formData, cliente_telefono: e.target.value })
                                        }
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-brand-blue"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-brand-black mb-2">
                                        Dispositivo
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.dispositivo}
                                        onChange={(e) =>
                                            setFormData({ ...formData, dispositivo: e.target.value })
                                        }
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-brand-blue"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-brand-black mb-2">
                                        Servicio
                                    </label>
                                    <select
                                        value={formData.servicio_seleccionado}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                servicio_seleccionado: e.target.value,
                                            })
                                        }
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-brand-blue"
                                        required
                                    >
                                        <option value="">Selecciona un servicio</option>
                                        <option value="Diagnóstico">Diagnóstico</option>
                                        <option value="Restauración">Restauración</option>
                                        <option value="Repotenciación">Repotenciación</option>
                                        <option value="Remanufacturación">Remanufacturación</option>
                                        <option value="Mantenimiento">Mantenimiento</option>
                                        <option value="Recuperación de Datos">
                                            Recuperación de Datos
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-brand-black mb-2">
                                        Estado
                                    </label>
                                    <select
                                        value={formData.estado}
                                        onChange={(e) =>
                                            setFormData({ ...formData, estado: e.target.value })
                                        }
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-brand-blue"
                                        required
                                    >
                                        <option value="Recibido">Recibido</option>
                                        <option value="En diagnóstico">En diagnóstico</option>
                                        <option value="Diagnóstico completado">
                                            Diagnóstico completado
                                        </option>
                                        <option value="En reparación">En reparación</option>
                                        <option value="En espera de repuestos">
                                            En espera de repuestos
                                        </option>
                                        <option value="Reparación completada">
                                            Reparación completada
                                        </option>
                                        <option value="Listo para entrega">Listo para entrega</option>
                                        <option value="Entregado">Entregado</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-brand-black mb-2">
                                        Fecha Estimada
                                    </label>
                                    <input
                                        type="date"
                                        value={formData.fecha_estimada}
                                        onChange={(e) =>
                                            setFormData({ ...formData, fecha_estimada: e.target.value })
                                        }
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-brand-blue"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-brand-black mb-2">
                                        Precio Estimado
                                    </label>
                                    <input
                                        type="number"
                                        value={formData.precio_estimado}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                precio_estimado: parseFloat(e.target.value),
                                            })
                                        }
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-brand-blue"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-brand-black mb-2">
                                    Descripción del Problema
                                </label>
                                <textarea
                                    value={formData.descripcion_problema}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            descripcion_problema: e.target.value,
                                        })
                                    }
                                    rows={3}
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-brand-blue resize-none"
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-brand-black mb-2">
                                    Notas Técnicas
                                </label>
                                <textarea
                                    value={formData.notas_tecnicas}
                                    onChange={(e) =>
                                        setFormData({ ...formData, notas_tecnicas: e.target.value })
                                    }
                                    rows={3}
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-brand-blue resize-none"
                                ></textarea>
                            </div>
                            <div className="flex gap-4">
                                <button
                                    type="submit"
                                    className="flex-1 py-3 bg-gradient-to-r from-brand-blue to-brand-green text-white rounded-xl font-semibold hover:shadow-xl transition-all"
                                >
                                    {editingServicio ? "Actualizar" : "Crear Servicio"}
                                </button>
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="px-8 py-3 bg-gray-300 text-brand-black rounded-xl font-semibold hover:bg-gray-400 transition-all"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="bg-white rounded-3xl p-8 shadow-xl overflow-x-auto">
                        {loading ? (
                            <div className="text-center py-8">Cargando servicios...</div>
                        ) : servicios.length === 0 ? (
                            <div className="text-center py-8 text-brand-black/60">
                                No hay servicios registrados
                            </div>
                        ) : (
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b-2 border-brand-blue">
                                        <th className="text-left p-4 font-semibold">Referencia</th>
                                        <th className="text-left p-4 font-semibold">Cliente</th>
                                        <th className="text-left p-4 font-semibold">Dispositivo</th>
                                        <th className="text-left p-4 font-semibold">Estado</th>
                                        <th className="text-left p-4 font-semibold">Fecha</th>
                                        <th className="text-left p-4 font-semibold">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {servicios.map((servicio) => (
                                        <tr key={servicio.id} className="border-b border-gray-200">
                                            <td className="p-4 font-mono text-brand-blue">
                                                {servicio.referencia}
                                            </td>
                                            <td className="p-4">{servicio.cliente_nombre}</td>
                                            <td className="p-4">{servicio.dispositivo}</td>
                                            <td className="p-4">
                                                <span className="px-3 py-1 bg-brand-green/20 text-brand-green rounded-full text-sm">
                                                    {servicio.estado}
                                                </span>
                                            </td>
                                            <td className="p-4">
                                                {new Date(servicio.fecha_ingreso).toLocaleDateString()}
                                            </td>
                                            <td className="p-4 flex gap-2">
                                                <button
                                                    onClick={() => handleEdit(servicio)}
                                                    className="px-4 py-2 bg-brand-blue text-white rounded-lg hover:bg-brand-blue/80"
                                                >
                                                    Editar
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(servicio.id)}
                                                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                                >
                                                    Eliminar
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}