export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-black border-t border-white/10 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-4">LapTech</h3>
                        <p className="text-white/70 mb-4">
                            Expertos en Macintosh comprometidos con la economía circular
                            y la sostenibilidad. Más de 10 años restaurando dispositivos Apple.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://instagram.com/lap.tech_" target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 bg-brand-blue hover:bg-brand-green rounded-lg flex items-center justify-center transition-colors">
                                <span className="text-xl">📷</span>
                            </a>
                            <a href="#" className="w-10 h-10 bg-brand-blue hover:bg-brand-green rounded-lg flex items-center justify-center transition-colors">
                                <span className="text-xl">👍</span>
                            </a>
                            <a href="#" className="w-10 h-10 bg-brand-green hover:bg-brand-blue rounded-lg flex items-center justify-center transition-colors">
                                <span className="text-xl">💬</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Enlaces Rápidos</h4>
                        <ul className="space-y-2">
                            <li><a href="#inicio" className="text-white/70 hover:text-brand-green transition-colors">Inicio</a></li>
                            <li><a href="#servicios" className="text-white/70 hover:text-brand-green transition-colors">Servicios</a></li>
                            <li><a href="#nosotros" className="text-white/70 hover:text-brand-green transition-colors">Quiénes Somos</a></li>
                            <li><a href="#educacion" className="text-white/70 hover:text-brand-green transition-colors">Educación</a></li>
                            <li><a href="#contacto" className="text-white/70 hover:text-brand-green transition-colors">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Servicios</h4>
                        <ul className="space-y-2">
                            <li className="text-white/70">Diagnóstico</li>
                            <li className="text-white/70">Restauración</li>
                            <li className="text-white/70">Repotenciación</li>
                            <li className="text-white/70">Remanufacturación</li>
                            <li className="text-white/70">Mantenimiento</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-white/60 text-sm mb-4 md:mb-0">
                        © {currentYear} LapTech. Todos los derechos reservados.
                    </p>
                    <div className="flex space-x-6 text-sm">
                        <a href="#" className="text-white/60 hover:text-brand-green transition-colors">
                            Política de Privacidad
                        </a>
                        <a href="#" className="text-white/60 hover:text-brand-green transition-colors">
                            Términos y Condiciones
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}