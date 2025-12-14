"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const ADMIN_PASSWORD = "LapTech2025!Admin";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        setTimeout(() => {
            if (password === ADMIN_PASSWORD) {
                localStorage.setItem("adminAuthenticated", "true");
                localStorage.setItem("adminLoginTime", Date.now().toString());
                router.push("/admin-laptech-2025");
            } else {
                setError("Contraseña incorrecta");
                setIsLoading(false);
            }
        }, 300);
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

                    <form onSubmit={handleSubmit} className="space-y-6" autoComplete="on">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-brand-black mb-2">
                                Usuario
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                defaultValue="admin"
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-brand-blue transition-colors bg-gray-50"
                                readOnly
                                autoComplete="username"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-brand-black mb-2">
                                Contraseña de Administrador
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-brand-blue transition-colors"
                                    placeholder="Ingresa tu contraseña"
                                    required
                                    autoFocus
                                    autoComplete="current-password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-brand-blue transition-colors"
                                    tabIndex={-1}
                                >
                                    {showPassword ? (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <div className="p-3 bg-red-50 border-2 border-red-200 rounded-xl text-red-700 text-sm">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full py-3 rounded-xl font-semibold text-white transition-all ${isLoading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-gradient-to-r from-brand-blue to-brand-green hover:shadow-xl transform hover:scale-105"
                                }`}
                        >
                            {isLoading ? "Verificando..." : "Acceder al Panel"}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <a href="/" className="text-sm text-brand-black/60 hover:text-brand-blue transition-colors">
                            ← Volver al sitio web
                        </a>
                    </div>
                </div>

                <div className="mt-6 text-center text-white/80 text-sm">
                    <p>🔒 Acceso protegido - Solo personal autorizado</p>
                </div>
            </div>
        </div>
    );
}