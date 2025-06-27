import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "Productos",
    links: [
      { label: "Áreas", href: "/#areas" },
      { label: "Servicios", href: "/#servicios" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Nosotros", href: "/acerca" },
      { label: "Contacto", href: "/contacto" },
      { label: "Términos de Uso", href: "/terminos" },
      { label: "Política de Privacidad", href: "/privacidad" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="w-full bg-white/80 backdrop-blur-xl px-6 py-2 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto ">



        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center py-2 ">
          <p className="text-[#1c1c1c] font-semibold text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Derechos reservados.
          </p>
          <img src="/Webgo-logo.webp" alt="Logo Opencode" className="w-28 h-auto" />
          <div className="flex space-x-6">
            <a href="https://facebook.com">
              <FaInstagram className="w-6 h-6 text-[#1C1C1C99] transition-all ease-out hover:text-primary-500" />
            </a>
            <a href="https://facebook.com">
              <FaFacebook className="w-6 h-6 text-[#1C1C1C99] transition-all ease-out hover:text-primary-500" />
            </a>
            <a href="https://facebook.com">
              <FaYoutube className="w-6 h-6 text-[#1C1C1C99] transition-all ease-out hover:text-primary-500" />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};
