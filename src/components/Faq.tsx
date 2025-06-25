"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";

// Define the interface for each FAQ item
interface FaqItem {
  pregunta: string;
  respuesta: string;
}

// Define the props interface for the Faq component
interface FaqProps {
  faqs: FaqItem[];
}

// Update the component to accept faqs as a prop with a default empty array
export const Faq: React.FC<FaqProps> = ({ faqs = [] }) => {
  return (
    <section className="flex flex-col w-full justify-center items-center bg-black">
      <div className="flex flex-col w-full lg:w-11/12 max-w-6xl lg:py-10 max-md:px-5 md:max-lg:px-12 gap-6">
        <section className="flex flex-col lg:flex-row justify-center lg:items-stretch items-center py-10 max-h-max-[700px] gap-8 lg:gap-12 max-w-6xl">
          <div className="w-full lg:w-1/2 h-full flex flex-col lg:sticky lg:top-24">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-7xl">
                Preguntas? Respuestas.
              </h2>
            </div>

          </div>
          <div className="w-full lg:w-1/2 flex">
            <Accordion className="w-full" type="single" collapsible>
              <div className="h-px w-full border-b border-white px-8" />
              {faqs.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="font-semibold text-base text-left md:text-xl p-6 text-white">
                    {item.pregunta || "Pregunta por defecto"}
                  </AccordionTrigger>
                  <AccordionContent className="pl-4 pr-8 md:pr-16 tracking-wide text-sm md:text-base font-medium text-white">
                    {item.respuesta || "Respuesta por defecto"}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
    </section>
  );
};
