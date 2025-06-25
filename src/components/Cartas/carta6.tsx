"use client"
import { Users, Plus } from "lucide-react";
import { useEffect } from "react";
import { motion, useAnimation, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const notificationVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: -100,
        opacity: [0, 1, 1, 0],
        transition: {
            duration: 2,
            ease: "easeOut",
            times: [0, 0.2, 0.8, 1]
        },
    },
};

const badgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            delay: 1, // Appear after some notifications have floated up
            type: "spring",
            stiffness: 260,
            damping: 20,
        },
    },
};

function Counter({ to, isPercentage = false }: { to: number; isPercentage?: boolean }) {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            const animationControls = animate(0, to, {
                duration: 2,
                onUpdate(latest) {
                    const el = document.getElementById(isPercentage ? "percentage-counter" : "badge-counter");
                    if (el) {
                        el.textContent = Math.round(latest).toString() + (isPercentage ? "%" : "");
                    }
                },
            });
            return () => animationControls.stop();
        }
    }, [inView, to, isPercentage]);

    return <span ref={ref} id={isPercentage ? "percentage-counter" : "badge-counter"}>0{isPercentage ? "%" : ""}</span>;
}

export default function Carta6() {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <div ref={ref} className="bg-gradient-to-br from-blue-500/80 to-green-500/80 rounded-[2rem] p-8 md:py-[90px] md:px-[80px] relative overflow-hidden shadow-xl">
            <h3 className="text-3xl md:text-[50px] font-bold mb-6 leading-none text-white">
                Captura <Counter to={250} isPercentage /> más prospectos cada día cuando usas nuestros sistemas.
            </h3>

            <div className="mt-10 flex justify-center">
                <motion.div
                    className="w-40 h-40 flex items-center justify-center relative"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    <img src="/icons/mail.svg" alt="mail" className="w-44 h-auto" />

                    {/* Floating notifications */}
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-green-300 text-base"
                            style={{ x: (i - 2) * 20, y: 10 }} // Spread them out a bit
                            variants={notificationVariants}
                        >
                            +1
                        </motion.div>
                    ))}

                    <motion.div
                        className="absolute -top-2 -right-2 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl "
                        variants={badgeVariants}
                    >
                        <Counter to={99} />
                    </motion.div>
                </motion.div>
            </div>

            <div className="absolute bottom-8 right-8 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Plus className="w-5 h-5 text-black" />
            </div>
        </div>
    );
}