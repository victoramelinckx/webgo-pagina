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
    <footer className="w-full bg-white px-6 py-12 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          {/* Logo and Subscribe Section */}
          <div className="mb-12 md:mb-0 md:max-w-sm">
            <a href="/" className="inline-block mb-6">
              {/* <img
                src="/vacio.jpg"
                alt="Logo Opencode"
                className="h-16 w-auto"
              /> */}
              <p className="font-bold text-3xl">LOGO</p>
            </a>
            <p className="text-[#1C1C1C99] font-semibold mb-8">
              Slogan va aqui.
            </p>
            {/* <div className="space-y-4">
              <h3 className="text-xl font-semibold">Join our mailing list</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="px-6 py-2 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div> */}
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-8 lg:gap-16">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[#1C1C1C99] font-semibold hover:text-primary-500 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <p className="text-[#1c1c1c] font-semibold text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Premad. Todos los derechos reservados.
          </p>
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
            <a href="https://facebook.com">
              <FaLinkedin className="w-6 h-6 text-[#1C1C1C99] transition-all ease-out hover:text-primary-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
