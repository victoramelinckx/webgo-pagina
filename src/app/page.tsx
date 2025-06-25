"use client";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Footer } from "@/components/Footer";
import { Proyectos } from "@/components/Proyectos";
import Pasos from "@/components/Pasos";
import VideosTestimonios from "@/components/VideosTestimonios";
import Precios from "@/components/Precios";
import { Faq } from "@/components/Faq";
import TestimonialsSection from "@/components/Testimonios";
import Cta from "@/components/Cta";

export default function Home() {
  const howData = {
    title: "Todo lo que necesitas para crecer",
    subtitle: "Beneficios de trabajar con WebGo.",
  };

  const faqs = [
    {
      pregunta: "¿Qué tecnología usan para desarrollar los sitios web?",
      respuesta: "Usamos herramientas como React, Next.js, WordPress, Shopify, Webflow y React, según lo que necesites."
    },
    {
      pregunta: "¿Qué métodos de pago aceptan?",
      respuesta: "Aceptamos una variedad de métodos de pago, incluyendo tarjetas de crédito, débito y transferencias bancarias para tu comodidad."
    },
    {
      pregunta: "¿Quiénes de su equipo están involucrados en el trabajo?",
      respuesta: "Un equipo de expertos, incluyendo diseñadores, desarrolladores y especialistas en marketing, colaborará en tu proyecto para asegurar los mejores resultados."
    },
    {
      pregunta: "¿Ofrecen soporte después de la entrega del sitio web?",
      respuesta: "Sí, ofrecemos planes de soporte y mantenimiento para asegurar que tu sitio web se mantenga actualizado, seguro y funcionando a la perfección."
    },
    {
      pregunta: "¿El diseño del sitio web es personalizado?",
      respuesta: "Totalmente. Creamos diseños únicos y a la medida de tu marca para que tu sitio web destaque y conecte con tu audiencia."
    },
    {
      pregunta: "¿Pueden hacer actualizaciones o cambios después de la entrega?",
      respuesta: "¡Claro que sí! Ofrecemos servicios de actualización y podemos realizar los cambios que necesites para que tu sitio evolucione con tu negocio."
    },
    {
      pregunta: "¿Cuánto debo saber para crear la web?",
      respuesta: "No necesitas saber nada de programación. Nosotros nos encargamos de toda la parte técnica para que tú puedas enfocarte en tu negocio."
    }
  ];

  return (
    <main>

      <Hero headline="Impulsa tu negocio con páginas web que venden." subheadline="Diseño y desarrollo web.
E-commerce seguro y eficiente: vende 24/7 con confianza.
Software a medida: automatiza y crece tu empresa." cta1="Obten tu Sitio Web" />
      <How title={howData.title} subtitle={howData.subtitle} />
      <Proyectos />
      <Pasos />
      <Precios />
      <VideosTestimonios />
      <TestimonialsSection />
      <Faq faqs={faqs} />
      <Cta />
      <Footer />
    </main>
  );
}
