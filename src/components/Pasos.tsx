import { ArrowRight, ArrowDown } from "lucide-react"

export default function Pasos() {
    return (
        <section className=" bg-gray-100 py-16 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Main Heading */}
                <div className="text-center mb-10">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#BE649C] to-[#6D80BE] bg-clip-text text-transparent leading-tight">
                        Súper rápido, súper fácil.
                    </h1>
                </div>

                {/* Process Steps */}
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-md:px-4">
                    {/* Step 1 */}
                    <div className="bg-white rounded-4xl p-8 max-md:pt-10 max-md:pb-20 shadow-lg relative">
                        <div className="text-9xl font-bold bg-[linear-gradient(to_bottom,rgba(240,104,68,1)_0%,rgba(238,76,84,0.75)_25%,rgba(212,94,149,0.5)_50%,rgba(156,108,166,0.25)_75%,rgba(101,131,193,0)_100%)] bg-clip-text text-transparent -mb-10 text-center">
                            <span className=" text-[142px]">1</span>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                            <span className="bg-gradient-to-r from-[#F06844] to-[#EE4C54] bg-clip-text text-transparent">Despega tu idea</span>
                        </h3>
                        <p className="text-gray-600 text-sm leading-tight max-md:px-8">
                            Llena un breve formulario con los datos clave de tu negocio. Así, podemos capturar su esencia y darle
                            forma en tu nuevo sitio web.
                        </p>
                        <div className="md:hidden absolute -bottom-7 left-1/2 -translate-x-1/2">
                            <ArrowDown className="w-12 h-12 text-gray-600 animate-bounce" strokeWidth={3} />
                        </div>
                    </div>

                    {/* Arrow 1 - Absolute positioned between cards */}
                    <div className="hidden md:block absolute top-1/2 left-[29%] transform -translate-y-1/2 translate-x-4 z-20">
                        <ArrowRight className="w-14 h-14 text-gray-400" strokeWidth={3} />
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white rounded-4xl p-8 max-md:pt-10 max-md:pb-20 shadow-lg relative">
                        <div className="text-9xl font-bold bg-[linear-gradient(to_bottom,rgba(190,100,156,1)_0%,rgba(190,100,156,0.75)_25%,rgba(109,128,190,0.5)_50%,rgba(109,128,190,0.25)_75%,rgba(109,128,190,0)_100%)] bg-clip-text text-transparent -mb-10 text-center">
                            <span className=" text-[142px]">2</span>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                            <span className="bg-gradient-to-r from-[#BE649C] to-[#6D80BE] bg-clip-text text-transparent">Ajustamos el rumbo</span>
                        </h3>
                        <p className="text-gray-600 text-sm leading-tight max-md:px-8">
                            Analizamos tu mercado y clientes ideales. Creamos un diseño atractivo y textos persuasivos que conviertan.
                            Todo lo necesario para que tu marca sobresalga y venda más.
                        </p>
                        <div className="md:hidden absolute -bottom-7  left-1/2 -translate-x-1/2">
                            <ArrowDown className="w-12 h-12 text-gray-600 animate-bounce" strokeWidth={3} />
                        </div>
                    </div>

                    {/* Arrow 2 - Absolute positioned between cards */}
                    <div className="hidden md:block absolute top-0 md:top-1/2 right-1/2 md:right-[29%] transform md:-translate-y-1/2 md:-translate-x-4 z-20">
                        <ArrowRight className="w-14 h-14 text-gray-400" strokeWidth={3} />
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white rounded-4xl p-8 max-md:pt-10 max-md:pb-20 shadow-lg relative">
                        <div className="text-9xl font-bold bg-[linear-gradient(to_bottom,rgba(109,128,190,1)_0%,rgba(109,128,190,0.75)_25%,rgba(0,219,113,0.5)_50%,rgba(0,219,113,0.25)_75%,rgba(0,219,113,0)_100%)] bg-clip-text text-transparent -mb-10 text-center">
                            <span className=" text-[142px]">3</span>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                            <span className="bg-gradient-to-r from-[#6D80BE] to-[#00DB71] bg-clip-text text-transparent">Lanzamiento</span>
                        </h3>
                        <p className="text-gray-600 text-sm leading-tight max-md:px-8 mb-4">
                            En solo 7 días hábiles*, te entregamos una web lista para lanzar. Revisamos juntos los detalles finales, y
                            nos aseguramos de que todo esté perfecto para hacer crecer tu negocio.
                        </p>
                        <p className="text-gray-500 text-xs leading-none max-md:px-8">Dependiendo de tu plan*.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}
