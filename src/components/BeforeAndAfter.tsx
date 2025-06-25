"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import Autoplay from "embla-carousel-autoplay";
import { Element } from "react-scroll";

type BeforeAndAfterProps = {
  subheadline: string;
};

// Interface for carousel data
type CarouselDataType = {
  Image: string;
  tratamiento: string;
};

export const BeforeAndAfter = ({ subheadline }: BeforeAndAfterProps) => {
  // Static data with placeholder images and predefined treatment names
  const data: CarouselDataType[] = [
    {
      Image: "/vacio.jpg",
      tratamiento: "Instalación de grifo",
    },
    {
      Image: "/vacio.jpg",
      tratamiento: "Instalación de inodoro",
    },
    {
      Image: "/vacio.jpg",
      tratamiento: "Limpieza de desagüe",
    },
    {
      Image: "/vacio.jpg",
      tratamiento: "Reemplazo de bola principal",
    },
    {
      Image: "/vacio.jpg",
      tratamiento: "Instalación de bomba de agua",
    },
    {
      Image: "/vacio.jpg",
      tratamiento: "Montaje de tubería subterránea",
    },
  ];

  return (
    <Element
      name="antes/despues"
      className="w-full overflow-hidden bg-[#EDF3FC] pb-8"
    >
      <section className="flex flex-col pt-10 pb-10 justify-center items-center">
        <div className="flex flex-col w-full justify-center items-center mb-8">
          <h2 className="text-center max-md:mt-1">Resultados Increíbles</h2>
          <p className="md:text-center max-w-md text-[#555555] max-lg:text-center">
            {subheadline}
          </p>
        </div>
        <div className="w-5/6 sm:w-11/12 max-w-7xl">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="cursor-grab active:cursor-grabbing"
          >
            <CarouselContent>
              {data.map((item) => (
                <CarouselItem
                  key={item.tratamiento}
                  className="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="flex flex-col aspect-video py-4 px-3 md:py-6 md:px-5 lg:py-8 sm:px-7 bg-white border-2 border-primary-500 rounded-2xl">
                    <div className="flex gap-2 md:gap-4 mb-4">
                      <div>
                        <img
                          src={item.Image}
                          alt={`Antes ${item.tratamiento}`}
                          className="rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <span className="inline-block bg-[#FDAE26] text-black text-xs font-bold px-3 py-1 rounded-full">
                        {item.tratamiento}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </Element>
  );
};
