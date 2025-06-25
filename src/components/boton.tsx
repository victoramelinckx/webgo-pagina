"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

// Definimos las variantes posibles del botón
type Variant = "default" | "normal" | "invertido";

// Props del componente, extendiendo las props nativas de un button
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

export const Boton = ({
  variant = "default",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  // Clases base compartidas por todas las variantes
  const baseClasses = "px-5 py-3 rounded-full h-fit flex items-center gap-2 hover:cursor-pointer";

  // Clases específicas por variante
  const variantClasses = {
    default: "bg-primary-500 text-white hover:opacity-70 active:opacity-70",
    normal: "border border-black/10 text-black bg-white shadow-sm",
    invertido: "bg-black text-white shadow-sm",
  };

  return (
    <button
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
