"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        const ADMIN_PASSWORD = "LapTech2024!Admin";

        if (password === ADMIN_PASSWORD) {
            localStorage.setItem("adminAuthenticated", "true");
            localStorage.setItem("adminLoginTime", Date.now().toString());
            router.push("/admin-laptech-2024");
        } else {
            setError("Contraseña incorrecta");
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-brand-black via-brand-blue/20 to-brand-green/20 flex items-center justify-center p-4">
            <div className="max-w-md w-full">
                <div className="bg-white rounded-3xl shadow-2xl p-8">
                    <div className="text-center mb-8">
                        <div className="text-5xl mb-4">🔐</div>
                        <h1 className="text-3xl font-bold text-brand-black mb-2">Panel de Administración</h1>
                        <p className="text-brand-black/60">LapTech - Acceso Restringido</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-brand-black mb-2">Contraseña de Administrador</label>
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-brand-blue transition-colors" placeholder="Ingresa tu contraseña" required autoFocus />
                        </div>

                        {error && (
                            <div className="p-3 bg-red-50 border-2 border-red-200 rounded-xl text-red-700 text-sm">{error}</div>
                        )}

                        <button type="submit" disabled={isLoading} className={`w-full py-3 rounded-xl font-semibold text-white transition-all ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-brand-blue to-brand-green hover:shadow-xl transform hover:scale-105"}`}>
                            {isLoading ? "Verificando..." : "Acceder al Panel"}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <a href="/" className="text-sm text-brand-black/60 hover:text-brand-blue transition-colors">← Volver al sitio web</a>
                    </div>
                </div>

                <div className="mt-6 text-center text-white/80 text-sm">
                    <p>🔒 Acceso protegido - Solo personal autorizado</p>
                </div>
            </div>
        </div>
    );
}