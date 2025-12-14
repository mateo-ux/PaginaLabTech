export default function PoliticaPrivacidad() {
    return (
        <div className="min-h-screen bg-brand-cream">
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-blue to-brand-green py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Política de Tratamiento de Datos Personales
                    </h1>
                    <p className="text-white/90 text-lg">
                        LAPTECH SAS
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                    <div className="prose prose-lg max-w-none text-brand-black/80">

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-brand-black mb-4">1. Identificación del responsable del Tratamiento</h2>
                            <p className="mb-2"><strong>Razón Social:</strong> LAPTECH SAS</p>
                            <p className="mb-2"><strong>NIT:</strong> 901911083-9</p>
                            <p className="mb-2"><strong>Dirección:</strong> CRA 24B # 61A – 37</p>
                            <p className="mb-2"><strong>Correo electrónico:</strong> laptechmac@gmail.com</p>
                            <p className="mb-2"><strong>Teléfono:</strong> 310 408 3923</p>
                            <p className="mb-4"><strong>Página web:</strong> laptechmac</p>
                            <p>LAPTECH SAS (en adelante, "la Empresa"), en su calidad de responsable del Tratamiento, se encarga de recolectar, almacenar, usar, circular, suprimir y en general realizar cualquier operación sobre los datos personales suministrados por los usuarios a través de su sitio web, medios digitales y otros canales de contacto.</p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-brand-black mb-4">2. Marco Normativo Aplicable</h2>
                            <p className="mb-2">Esta Política se desarrolla conforme a:</p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Ley Estatutaria 1581 de 2012</li>
                                <li>Decreto 1377 de 2013</li>
                                <li>Decreto 1074 de 2015</li>
                                <li>Lineamientos y guías de la Superintendencia de Industria y Comercio (SIC)</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-brand-black mb-4">3. Definiciones</h2>
                            <p className="mb-2">Para efectos de esta Política, aplican:</p>
                            <ul className="space-y-2">
                                <li><strong>Dato personal:</strong> Información asociada a una persona natural.</li>
                                <li><strong>Dato sensible:</strong> Información íntima o susceptible de generar discriminación.</li>
                                <li><strong>Autorización:</strong> Consentimiento previo, expreso e informado del titular.</li>
                                <li><strong>Titular:</strong> Persona natural cuyos datos son objeto de tratamiento.</li>
                                <li><strong>Tratamiento:</strong> Cualquier operación sobre datos personales.</li>
                                <li><strong>Responsable:</strong> Quien decide sobre la base de datos.</li>
                                <li><strong>Encargado:</strong> Quien realiza el tratamiento por cuenta del responsable.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-brand-black mb-4">4. Datos Personales Recolectados</h2>
                            <p className="mb-2">LAPTECH SAS podrá recolectar:</p>
                            <ul className="space-y-2">
                                <li><strong>Datos de identificación:</strong> nombre, apellidos, tipo y número de identificación.</li>
                                <li><strong>Datos de contacto:</strong> correo electrónico, dirección, teléfono.</li>
                                <li><strong>Datos de navegación:</strong> dirección IP, ubicación aproximada, cookies, dispositivo utilizado.</li>
                                <li>Datos suministrados en formularios de contacto o solicitudes de servicio.</li>
                                <li>Datos necesarios para procesos comerciales, cotizaciones o prestación de servicios técnicos.</li>
                            </ul>
                            <p className="mt-4">No se recolectarán datos sensibles excepto cuando sea estrictamente necesario y con autorización expresa.</p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-brand-black mb-4">5. Finalidades del Tratamiento</h2>
                            <p className="mb-2">Los datos personales se tratarán para:</p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Gestionar consultas, solicitudes y comunicaciones enviadas a través de la página web</li>
                                <li>Establecer contacto comercial, enviar cotizaciones y brindar soporte técnico.</li>
                                <li>Realizar procesos de atención al cliente.</li>
                                <li>Enviar información sobre servicios, ofertas y contenido promocional (previa autorización).</li>
                                <li>Gestionar la prestación de servicios de mantenimiento técnico y reparación.</li>
                                <li>Cumplir obligaciones contractuales, legales y regulatorias.</li>
                                <li>Actualizar bases de datos y realizar actividades administrativas internas.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-brand-black mb-4">6. Tratamiento de Datos de Menores de Edad</h2>
                            <p className="mb-2">LAPTECH SAS no dirige su sitio web a menores de edad.</p>
                            <p>En caso de recibir datos de menores, se dará estricto cumplimiento al artículo 12 de la Ley 1581 de 2012 y se solicitará autorización de los titulares de patria potestad.</p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-brand-black mb-4">7. Derechos de los Titulares</h2>
                            <p className="mb-2">Los titulares podrán ejercer los siguientes derechos:</p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Conocer, actualizar y rectificar sus datos personales.</li>
                                <li>Solicitar prueba de la autorización.</li>
                                <li>Ser informados sobre el uso dado a sus datos.</li>
                                <li>Presentar quejas ante la SIC.</li>
                                <li>Revocar la autorización o solicitar la supresión de los datos cuando corresponda.</li>
                                <li>Acceder de manera gratuita a sus datos.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-brand-black mb-4">8. Procedimientos para Ejercer Derechos</h2>
                            <p className="mb-2">Los titulares podrán presentar consultas, peticiones o reclamos a través de:</p>
                            <p className="mb-2">📧 Correo: laptechmac@gmail.com</p>
                            <p className="mb-4">📞 Teléfono: 310 408 3923</p>

                            <h3 className="text-xl font-bold text-brand-black mb-2">Consultas</h3>
                            <p className="mb-1">Tiempo máximo de respuesta: 10 días hábiles.</p>
                            <p className="mb-4">Si no es posible responder dentro del plazo, se notificará la razón y se responderá dentro de los 5 días hábiles siguientes.</p>

                            <h3 className="text-xl font-bold text-brand-black mb-2">Reclamos</h3>
                            <p className="mb-1">Tiempo máximo de respuesta: 15 días hábiles.</p>
                            <p>Si se requiere ampliación del plazo, se notificará al titular y se responderá dentro de los 8 días hábiles siguientes.</p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-brand-black mb-4">9. Medidas de Seguridad</h2>
                            <p className="mb-2">LAPTECH SAS implementa medidas técnicas, administrativas y humanas para garantizar la seguridad, integridad y confidencialidad de los datos personales, tales como:</p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Certificados de seguridad (HTTPS/SSL).</li>
                                <li>Políticas de acceso restringido a la información.</li>
                                <li>Uso de contraseñas seguras.</li>
                                <li>Copias de seguridad periódicas.</li>
                                <li>Acuerdos de confidencialidad con contratistas, colaboradores y proveedores tecnológicos.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-brand-black mb-4">10. Transferencia y Transmisión de Datos Personales</h2>
                            <p className="mb-2 font-bold">No vendemos los datos personales</p>
                            <p className="mb-2">LAPTECH SAS podrá compartir datos con:</p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Encargados del tratamiento que actúen en nombre de la Empresa.</li>
                                <li>Autoridades administrativas, judiciales o de control cuando exista obligación legal.</li>
                            </ul>
                            <p className="mt-4">Con los encargados se establecen acuerdos contractuales que contienen las obligaciones de confidencialidad y seguridad necesarias para la protección de datos.</p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-brand-black mb-4">12. Vigencia y Modificaciones</h2>
                            <p className="mb-2">La presente Política rige a partir de diciembre de 2025 y permanecerá vigente mientras se mantengan los datos en tratamiento.</p>
                            <p className="mb-1">Cualquier modificación será publicada en el sitio web.</p>
                            <p>No se harán cambios retroactivos sin autorización del titular cuando corresponda.</p>
                        </section>

                    </div>

                    {/* Botón volver */}
                    <div className="mt-8 text-center">
                        <a
                            href="/"
                            className="inline-block px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-green text-white rounded-xl font-semibold hover:shadow-xl transition-all transform hover:scale-105"
                        >
                            ← Volver al inicio
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}