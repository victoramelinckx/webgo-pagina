"use client";

import { useState, useEffect } from "react";
import { ServicesItem } from "./ServicesItem";
import { Element } from "react-scroll";
import { Link } from "react-scroll";
import { Boton } from "./boton";

interface Service {
  name: string;
  icon: string;
  description: string;
}

interface ServicesProps {
  heading: string;
  description: string;
  services: Service[];
}

export const Services: React.FC<ServicesProps> = ({
  heading,
  description,
  services = [],
}) => {
  const [showMoreDental, setShowMoreDental] = useState(false);
  const [initialItemsToShow, setInitialItemsToShow] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setInitialItemsToShow(6);
      } else {
        setInitialItemsToShow(6);
      }
    };

    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Element name="servicios" className="w-full">
      <section className="bg-[#1d65d1] w-full flex flex-col justify-center items-center pt-8 md:pt-16">
        <div className="flex flex-col gap-6 items-center p-8 rounded-lg w-full max-w-7xl">
          <div className="flex flex-col items-center lg:mb-6 text-white">
            <h3 className="max-md:text-[30px] max-md:mt-1">{"Our Services"}</h3>
            <p className="text-center max-w-md mt-2">
              {description ||
                "We offer a comprehensive range of plumbing services designed to address all your plumbing needs."}
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 max-lg:gap-y-6 gap-y-14 mt-6">
            {services
              .slice(0, showMoreDental ? services.length : initialItemsToShow)
              .map((service) => (
                <ServicesItem
                  key={service.name}
                  name={service.name}
                  icon={service.icon}
                  description={service.description}
                />
              ))}
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 pb-32 pt-10">
          <p className="text-white text-3xl font-bold text-center">
            Contactanos
          </p>
          <Link to="contacto" smooth>
            <Boton variant="default" className="px-10">
              Llamar!
            </Boton>
          </Link>
        </div>
      </section>
    </Element>
  );
};
