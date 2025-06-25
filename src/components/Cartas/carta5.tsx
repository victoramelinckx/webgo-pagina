"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Plus } from "lucide-react";

export default function Carta5() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [showTyping, setShowTyping] = useState(false)
    const [showFinalMessage, setShowFinalMessage] = useState(false)

    useEffect(() => {
        if (inView) {
            // Mostrar indicador de escritura después de 2 segundos
            const typingTimer = setTimeout(() => {
                setShowTyping(true)
            }, 2000)

            // Mostrar mensaje final después de 4 segundos
            const messageTimer = setTimeout(() => {
                setShowTyping(false)
                setShowFinalMessage(true)
            }, 4000)

            return () => {
                clearTimeout(typingTimer)
                clearTimeout(messageTimer)
            }
        }
    }, [inView])

    return (
        <div ref={ref} className="bg-white rounded-[2rem] p-8 md:py-[90px] md:px-[80px] relative overflow-hidden shadow-xl">
            <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-black">
                Soporte 24/7.
                <br />
                <span className="text-gray-500">Solo escríbenos.</span>
            </h3>

            <div className="mt-10 space-y-3">
                <div className="flex justify-end">
                    <div className="bg-blue-500 text-white px-4 py-3 rounded-2xl rounded-tr-md max-w-xs shadow-lg">
                        <div className="text-sm">¿Cómo optimizo mi sitio para más ventas?</div>
                    </div>
                </div>

                <div className="flex justify-start">
                    <div className="bg-gray-100 text-black px-4 py-3 rounded-2xl rounded-tl-md max-w-xs shadow-md">
                        <div className="text-sm">Te ayudo ahora mismo. Analicemos tu sitio actual.</div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <div className="bg-blue-500 text-white px-4 py-3 rounded-2xl rounded-tr-md max-w-xs shadow-lg">
                        <div className="text-sm font-mono">www.mipagina.com</div>
                    </div>
                </div>

                {/* Espacio reservado para evitar expansión */}
                <div className="min-h-[60px] flex flex-col justify-start">
                    {/* Indicador de escritura */}
                    {showTyping && (
                        <div className="flex justify-start">
                            <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-tl-md shadow-md">
                                <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                    <div
                                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                        style={{ animationDelay: "0.1s" }}
                                    ></div>
                                    <div
                                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                        style={{ animationDelay: "0.2s" }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Mensaje final */}
                    {showFinalMessage && (
                        <div className="flex justify-start motion-safe:animate-fadeIn">
                            <div className="bg-gray-100 text-black px-4 py-3 rounded-2xl rounded-tl-md max-w-xs shadow-md">
                                <div className="text-sm">¡Perfecto! Veo 3 mejoras clave que duplicarán tus conversiones.</div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Estado del mensaje */}
                <div className="text-xs text-gray-500 text-right mt-4">{showFinalMessage ? "Entregado" : "Visto"}</div>
            </div>
            <div className="absolute bottom-8 right-8 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <Plus className="w-5 h-5 text-white" />
            </div>
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateX(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 1s ease-out;
                }
            `}</style>
        </div>
    )
}
