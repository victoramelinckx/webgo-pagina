"use client";

import { Element } from "react-scroll";
import { Boton } from "./boton";
import { FormEvent, useRef, useState, FC } from "react";
import toast from "react-hot-toast";

// Notificaciones en español
const notifySuccess = () =>
  toast.success(
    "¡Sus datos han sido enviados exitosamente!\nNos pondremos en contacto pronto.😁"
  );
const notifyError = () =>
  toast.error(
    "Lo sentimos 😕, hubo un error al enviar sus datos. Por favor, intente más tarde."
  );

// Interfaz para los props del componente
interface BookAppointmentProps {
  heading?: string;
  description?: string;
  formPostUrl?: string;
  siteOwnerId?: string;
}

export const BookAppointment: FC<BookAppointmentProps> = ({
  heading = "Contáctenos",
  description = "Estamos aquí para ayudarle con sus necesidades.",
  formPostUrl = "/api/sendForm",
  siteOwnerId,
}) => {
  const [enviando, setEnviando] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviando(true);

    // Get data directly from form elements
    const currentForm = e.currentTarget;
    const nameInput = currentForm.elements.namedItem("name") as HTMLInputElement | null;
    const emailInput = currentForm.elements.namedItem("email") as HTMLInputElement | null;
    const phoneInput = currentForm.elements.namedItem("phone") as HTMLInputElement | null;
    const mensajeInput = currentForm.elements.namedItem("mensaje") as HTMLTextAreaElement | null;

    const submissionPayload = {
      name: nameInput?.value,
      email: emailInput?.value,
      phone: phoneInput?.value,
      mensaje: mensajeInput?.value,
      siteOwnerId: siteOwnerId,
    };

    if (!siteOwnerId) {
      console.error("BookAppointment: siteOwnerId is missing. Cannot submit form correctly.");
      notifyError();
      setEnviando(false);
      return;
    }

    console.log("Submitting to:", formPostUrl, "Payload:", submissionPayload);

    try {
      const response = await fetch(formPostUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionPayload),
      });

      const responseData = await response.json();

      if (!response.ok || responseData.error) {
        console.error("Error from sendForm API:", responseData.error || response.statusText);
        notifyError();
      } else {
        formRef.current?.reset();
        notifySuccess();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      notifyError();
    } finally {
      setEnviando(false);
    }
  };

  return (
    <Element name="contacto" className="w-full">
      <section className="bg-blue-500 w-full flex flex-col justify-center items-center z-20 h-full py-10">
        <div className="flex gap-6 px-8 rounded-lg w-full max-w-6xl text-white h-full">
          <div className="flex flex-col justify-center lg:max-xl:w-7/12 gap-4 max-sm:py-10 lg:w-1/2">
            <h2>{heading}</h2>
            <p>{description}</p>
            <form
              ref={formRef}
              onSubmit={handleForm}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs"
            >
              <div className="flex flex-col gap-1">
                <label htmlFor="name">Nombre</label>
                <input
                  id="name"
                  name="name"
                  placeholder="Nombre y apellido"
                  className="py-2 sm:py-3 rounded-lg max-w-96 text-black"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phone">Número de teléfono</label>
                <input
                  id="phone"
                  name="phone"
                  placeholder="+7868901911"
                  className="py-2 sm:py-3 rounded-lg max-w-96 text-black"
                  type="tel"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  id="email"
                  name="email"
                  placeholder="contacto@example.com"
                  className="py-2 sm:py-3 rounded-lg max-w-96 text-black"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-1 sm:col-span-2">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="Cuéntenos sobre su consulta"
                  className="py-2 sm:py-3 rounded-lg w-full text-black"
                  rows={2}
                />
              </div>
              <Boton
                variant="normal"
                className="sm:col-span-2 xs:max-w-56 mt-4 text-base"
                type="submit"
                disabled={enviando}
              >
                {enviando ? "Enviando..." : "Enviar mensaje"}
              </Boton>
            </form>
          </div>
          <div className="flex grow justify-end items-end h-[37rem] max-lg:hidden lg:w-1/2">
            <img
              src="/vacio.jpg"
              alt="Mapa de ubicación"
              className="h-[95%] w-auto rounded-2xl"
            />
          </div>
        </div>
      </section>
    </Element>
  );
};
