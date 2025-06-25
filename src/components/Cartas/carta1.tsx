import { Bot, Plus, Users, Sparkles, Zap } from "lucide-react";
import IphoneMockup from "../Iphone-mockup";

export default function Carta1() {
    return (
        <div className="md:col-span-2 bg-white rounded-[2rem] h-[600px] p-8 md:p-12 relative overflow-hidden shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 h-full mt-20">
                {/* iPhone Mockup - Left Side */}
                <div className="relative flex justify-center md:w-1/2 h-full">
                    <IphoneMockup />
                </div>

                {/* Content - Right Side */}
                <div className="flex flex-col md:w-1/2 h-full">
                    <h2 className="text-4xl md:text-[42px]  font-extrabold mb-2 leading-tight text-black">
                        Maquina de ventas 24/7.
                        <br />
                        <span className="text-black">Potenciado con IA.</span>
                    </h2>

                    {/* Apple Card Style */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 mt-8 relative w-[90%] shadow-lg border border-gray-200/50">
                        <div className="absolute top-4 left-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                                <Bot className="w-5 h-5 text-white" />
                            </div>
                        </div>
                        <div className="text-right mb-6">
                            <div className="text-gray-500 text-sm mb-1">Automatización IA</div>
                            <div className="absolute top-4 right-4">
                                <div className="flex gap-1">
                                    <div className="w-3 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-sm"></div>
                                    <div className="w-3 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-sm"></div>
                                    <div className="w-3 h-2 bg-gradient-to-r from-pink-400 to-red-400 rounded-sm"></div>
                                    <div className="w-3 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-sm"></div>
                                </div>
                            </div>
                        </div>

                        {/* AI Features with Glass Effect */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">

                            {/* Chatbots IA */}
                            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-sm hover:bg-white/50 transition-all duration-300">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                                        <Bot className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-gray-800 font-semibold text-sm">Chatbots IA</span>
                                </div>
                                <div className="text-gray-600 text-xs leading-normal">
                                    Conversaciones inteligentes 24/7.
                                </div>
                            </div>


                            {/* Personalización */}
                            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-sm hover:bg-white/50 transition-all duration-300">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                        <Sparkles className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-gray-800 font-semibold text-xs">Creación de contenido IA</span>
                                </div>
                                <div className="text-gray-600 text-xs leading-normal">
                                    Crea contenido único para cada visitante.
                                </div>
                            </div>

                            {/*  Inteligentes */}
                            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-sm hover:bg-white/50 transition-all duration-300">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                                        <Users className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-gray-800 font-semibold text-xs">Campañas de marketing IA</span>
                                </div>
                                <div className="text-gray-600 text-xs leading-normal">
                                    Nutrir proceso de ventas a traves de emails.
                                </div>
                            </div>

                            {/* Optimización Automática */}
                            <div className="bg-white/40 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-sm hover:bg-white/50 transition-all duration-300">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                                        <Zap className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-gray-800 font-semibold text-xs">Imagenes de producto IA</span>
                                </div>
                                <div className="text-gray-600 text-xs leading-normal">
                                    Crea imágenes de producto únicas para cada visitante.
                                </div>
                            </div>
                        </div>

                        {/* Subtitle */}
                        <div className="mt-4 text-center">
                            <p className="text-gray-600 text-xs leading-relaxed">
                                Inteligencia artificial que convierte mientras duermes
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 right-8 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <Plus className="w-5 h-5 text-white" />
            </div>
        </div>
    );
}