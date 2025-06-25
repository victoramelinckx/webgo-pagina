// components/How.tsx
"use client";
import { Element } from "react-scroll";
import Carta1 from "./Cartas/carta1";
import Carta2 from "./Cartas/carta2";
import Carta3 from "./Cartas/carta3";
import Carta4 from "./Cartas/carta4";
import Carta5 from "./Cartas/carta5";
import Carta6 from "./Cartas/carta6";
import Carta7 from "./Cartas/carta7";
import Carta8 from "./Cartas/carta8";
import { CartaSeguridad } from "./Cartas/carta-seguridad";
import Carta9 from "./Cartas/carta9";
import Carta10 from "./Cartas/carta10";
import CartaCTA from "./Cartas/cartaCTA";

interface HowProps {
  title: string;
  subtitle: string;
}

export const How = ({ title, subtitle }: HowProps) => {
  return (
    <Element name="como-trabajamos" className="w-full bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-7xl">{title}</h2>
        </div>

        {/* Bento Grid - 2 columns max */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mt-10">
          {/* Row 1: AI Integration - Full Width (replicando exactamente image.png) */}
          <Carta1 />

          {/* Row 2: Sales Machine */}
          <Carta2 />

          {/* Row 2: 14 Days */}
          <Carta3 />

          {/* Row 3: Technology Stack */}
          <Carta4 />

          {/* Row 3: Captura Leads */}
          <Carta6 />

          {/* Row 4: Lead Capture */}
          <Carta7 />


          {/* Row 4: Chat */}
          <Carta5 />

          {/* Row 5: Security - Full Width with Large Text */}
          <Carta8 />

          <CartaSeguridad />

          {/* Row 6: E-commerce */}
          <Carta9 />



          <Carta10 />

          {/* Row 6: CTA */}
          <CartaCTA />
        </div>
      </div>
    </Element>
  );
};
