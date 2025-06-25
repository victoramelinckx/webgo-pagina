"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Users, Minus, Info, X, Plus, Dot, ChevronDown } from "lucide-react"
import { Boton } from "./boton"

interface PricingPlan {
    id: string
    name: string
    price: string
    mantenimiento: string
    description: string
    gradient: string
    tooltipText: string
    services: Array<{
        name: string
        individualPrice?: string
    }>
}

const PRICING_PLANS: PricingPlan[] = [
    {
        id: "individual",
        name: "Sitio Estándar",
        price: "$0/mo.",
        mantenimiento: "$0/mo.**",
        description: "Pagina web gratuita hasta que te generemos 3X dinero.",
        gradient: "from-orange-400 to-rose-500",
        tooltipText: "Gratis hasta 10 contactos o 3 compras.",
        services: [
            { name: "Entrega en 24 horas", individualPrice: "$500" },
            { name: "1 página", individualPrice: "$300" },
            { name: "Venta de 1 producto/servicio", individualPrice: "$200" },
            { name: "Diseño profesional", individualPrice: "$1000" },
            { name: "Dominio gratis", individualPrice: "$20" },
            { name: "Hosting gratis", individualPrice: "$15/mo." },
            { name: "Formulario de contacto", individualPrice: "$50" },
            { name: "Optimización de imágenes", individualPrice: "$100" },
            { name: "Estadísticas simples", individualPrice: "$50" },
        ],
    },
    {
        id: "family",
        name: "Sitio Pro",
        price: "$1470",
        mantenimiento: "$250/mo.**",
        description: "Pagina web mas avanzada con funcionalidades personalizadas y diseño profesional.",
        gradient: "from-purple-500 to-indigo-600",
        tooltipText: "Variable.",
        services: [
            { name: "Entrega en 10 días" },
            { name: "4 páginas", individualPrice: "$1200" },
            { name: "Reunión con nuestro equipo", individualPrice: "$250" },
            { name: "Branding (logo, fuentes, colores corporativos)", individualPrice: "$1500" },
            { name: "Diseño profesional", individualPrice: "$1000" },
            { name: "AI Chat", individualPrice: "$30/mo." },
            { name: "Pasarela de pago", individualPrice: "$500" },
            { name: "Reservas en línea", individualPrice: "$400" },
            { name: "Hosting (1 año)", individualPrice: "$180" },
            { name: "Dominio personalizado (1 año)", individualPrice: "$20" },
            { name: "Seguridad (SSL)", individualPrice: "$50" },
            { name: "3 e-mails personalizados", individualPrice: "$15/mo." },
            { name: "Formulario de contacto", individualPrice: "$50" },
            { name: "SEO optimizado", individualPrice: "$800" },
            { name: "Optimización de imágenes", individualPrice: "$100" },
            { name: "Estadísticas completas", individualPrice: "$150" },
            { name: "Pixels", individualPrice: "$100" },
            { name: "Flujos emails automatizados", individualPrice: "$300" },
        ],
    },
    {
        id: "premier",
        name: "Sitio Premier",
        price: "$3700",
        mantenimiento: "$550/mo.**",
        description: "Ferrari de paginas web que generan 100X dinero.",
        gradient: "from-teal-400 to-blue-500",
        tooltipText: "Variable",
        services: [
            { name: "Entrega en 12 días" },
            { name: "10 páginas", individualPrice: "$3000" },
            { name: "Reunión con nuestro equipo", individualPrice: "$250" },
            { name: "Branding (logo, fuentes, colores corporativos)", individualPrice: "$1500" },
            { name: "Diseño profesional", individualPrice: "$1000" },
            { name: "AI Chat", individualPrice: "$30/mo." },
            { name: "Pasarela de pago", individualPrice: "$500" },
            { name: "Reservas en línea", individualPrice: "$400" },
            { name: "Hosting", individualPrice: "$180" },
            { name: "Dominio personalizado", individualPrice: "$20" },
            { name: "Seguridad (SSL)", individualPrice: "$50" },
            { name: "3 e-mails personalizados", individualPrice: "$15/mo." },
            { name: "Formulario de contacto", individualPrice: "$50" },
            { name: "SEO optimizado", individualPrice: "$800" },
            { name: "Optimización de imágenes", individualPrice: "$100" },
            { name: "Estadísticas completas", individualPrice: "$150" },
            { name: "Pixels", individualPrice: "$100" },
            { name: "Carga inicial de 15 productos", individualPrice: "$300" },
            { name: "Tutoriales personalizados para agregar y quitar productos", individualPrice: "$200" },
            { name: "API de envios", individualPrice: "$500" },
            { name: "Flujos emails automatizados", individualPrice: "$300" },
        ],
    },
]

export default function Precios() {
    const [expandedPlans, setExpandedPlans] = useState<Set<string>>(new Set())
    const [showAllServices, setShowAllServices] = useState<Set<string>>(new Set())

    const togglePriceBreakdown = (planId: string) => {
        const newExpanded = new Set(expandedPlans)
        if (newExpanded.has(planId)) {
            newExpanded.delete(planId)
        } else {
            newExpanded.add(planId)
        }
        setExpandedPlans(newExpanded)
    }

    const toggleShowAllServices = (planId: string) => {
        const newShowAll = new Set(showAllServices)
        if (newShowAll.has(planId)) {
            newShowAll.delete(planId)
        } else {
            newShowAll.add(planId)
        }
        setShowAllServices(newShowAll)
    }

    const calculateTotal = (services: PricingPlan["services"]) => {
        return services
            .reduce((total, service) => {
                const price = Number.parseFloat(service.individualPrice?.replace(/[$/mo.]/g, "") || "0")
                return total + price
            }, 0)
            .toFixed(2)
    }

    return (
        <section className="py-10 px-4 bg-gray-100">
            <TooltipProvider>
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="max-w-3xl mx-auto text-center mb-10">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-7xl">
                            ¿Cómo puedes trabajar con nosotros?
                        </h2>
                    </div>

                    {/* Pricing Cards Container */}
                    <div className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {PRICING_PLANS.map((plan) => {
                                const isExpanded = expandedPlans.has(plan.id)
                                const isShowingAllServices = showAllServices.has(plan.id)
                                const servicesToShow = isShowingAllServices ? plan.services : plan.services.slice(0, 6)
                                const totalPrice = calculateTotal(plan.services)

                                return (
                                    <Card
                                        key={plan.id}
                                        className={`shadow-lg rounded-3xl h-full overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "bg-gradient-to-b from-gray-100 to-white shadow-xl" : "bg-white hover:shadow-xl"
                                            }`}
                                    >
                                        <CardContent className="p-8 py-6 relative flex flex-col h-full">
                                            {/* Diagonal gradient for expanded view */}
                                            {isExpanded && (
                                                <div className="absolute top-0 right-0 z-20 w-1/4 h-1/4 bg-gradient-to-bl from-b-200/50 via-gray-200/10 to-transparent pointer-events-none" />
                                            )}

                                            {/* Individual Close Button */}
                                            {isExpanded && (
                                                <button
                                                    onClick={() => togglePriceBreakdown(plan.id)}
                                                    className="absolute hover:cursor-pointer top-4 right-4 w-6 h-6 bg-gray-300 hover:bg-gray-400 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
                                                >
                                                    <X className="w-3 h-3 text-gray-600" />
                                                </button>
                                            )}

                                            {/* Header */}
                                            <div className="mb-6">
                                                <h3 className="text-2xl font-semibold text-black mb-0">{plan.name}</h3>
                                                <div className={`text-4xl font-bold mb-3 bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>{plan.price}</div>
                                                <p className="text-gray-700 leading-tight">

                                                    {plan.description}{" "}Mantenimiento{" "}
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <span className={`font-semibold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent underline decoration-dotted decoration-gray-400 cursor-pointer`}>
                                                                {plan.mantenimiento}
                                                            </span>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>{plan.tooltipText}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </p>
                                            </div>

                                            {/* Divider */}
                                            <div className="border-t border-gray-600 mb-6"></div>

                                            {/* Services */}
                                            <div className="space-y-0 mb-8 flex flex-col flex-grow w-full">
                                                {servicesToShow.map((service, index) => (
                                                    <div key={index} className="flex items-center justify-between w-full">
                                                        <div className="flex items-center gap-0">
                                                            <Dot className="w-8 h-8 text-gray-700" />
                                                            <span className="text-gray-700 text-sm font-medium -ml-1">{service.name}</span>
                                                        </div>
                                                        {isExpanded && service.individualPrice && (
                                                            <span
                                                                className="text-gray-500 text-xs opacity-0 translate-y-0"
                                                                style={{
                                                                    animation: `slideUpFadeIn 0.4s ease-out ${index * 0.1}s both`,
                                                                }}
                                                            >
                                                                {service.individualPrice}
                                                            </span>
                                                        )}
                                                    </div>
                                                ))}

                                                {plan.services.length > 6 && !isShowingAllServices && !isExpanded && (
                                                    <div className="flex items-center justify-center my-2">
                                                        <div className="border-t border-gray-300 flex-grow"></div>
                                                        <button onClick={() => toggleShowAllServices(plan.id)} className="text-xs hover:cursor-pointer text-gray-500 hover:text-black mx-4 flex items-center gap-1">
                                                            Mostrar más <ChevronDown className="w-3 h-3" />
                                                        </button>
                                                        <div className="border-t border-gray-300 flex-grow"></div>
                                                    </div>
                                                )}

                                                {/* Total Breakdown for expanded plans */}
                                                {isExpanded && (
                                                    <div
                                                        className="border-t pt-3 mt-4 opacity-0 translate-y-2"
                                                        style={{
                                                            animation: `slideUpFadeIn 0.5s ease-out ${plan.services.length * 0.1}s both`,
                                                        }}
                                                    >
                                                        <div className="flex items-center justify-end">
                                                            <span className="text-gray-500 text-sm line-through">${totalPrice}/mo.</span>
                                                        </div>
                                                        <div className="flex items-center justify-end">
                                                            <span className="font-bold text-black">{plan.price}</span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="space-y-3">
                                                {!isExpanded && (
                                                    <Boton
                                                        onClick={() => togglePriceBreakdown(plan.id)}
                                                        className="flex justify-between w-full rounded-full text-lg py-1 border-2 border-black hover:bg-black hover:text-white hover:border-gray-400 text-gray-700 transition-all duration-200"
                                                    >
                                                        <span>Ver desglose del precio</span>
                                                        <Plus className="w-4 h-4" />
                                                    </Boton>
                                                )}
                                                <Boton
                                                    className={`flex justify-center w-full rounded-full text-lg py-1 border-2 border-transparent bg-gradient-to-r ${plan.gradient} text-white transition-all duration-200 hover:opacity-90`}
                                                >
                                                    <span>Comprar</span>
                                                </Boton>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </TooltipProvider>

            <style jsx>{`
        @keyframes slideUpFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </section>
    )
}
