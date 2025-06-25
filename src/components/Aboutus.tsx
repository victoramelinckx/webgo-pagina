"use client";

import Image from "next/image";
import { Element } from "react-scroll";

interface AboutUsProps {
  headline: string;
  subheadline: string;
  beneficiotitulo1: string;
  beneficio1: string;
  beneficiotitulo2: string;
  beneficio2: string;
}

export const Aboutus = ({
  headline,
  subheadline,
  beneficiotitulo1,
  beneficio1,
  beneficiotitulo2,
  beneficio2,
}: AboutUsProps) => {
  return (
    <Element name="acerca" className="w-full flex justify-center">
      <div className="my-6">
        <section className="flex flex-col lg:flex-row justify-center lg:items-stretch items-center py-10 max-h-max-[700px] gap-8 lg:gap-12 max-w-6xl">
          <div className="w-full lg:w-1/2 flex">
            <Image
              src={"/vacio.jpg"}
              alt=""
              width={0}
              height={0}
              className="w-full h-fill object-fill rounded-2xl"
            />
          </div>
          <div className="w-full lg:w-1/2 h-full flex flex-col space-y-8 lg:space-y-12">
            <div>
              <h3 className="max-lg:text-[28px] max-lg:mt-1 leading-tight">
                {headline}
              </h3>
              <p className=" pt-5 text-[#555555] leading-normal">
                {subheadline}
              </p>
            </div>
            <div className="flex flex-row space-x-10">
              <div className="space-y-4 w-1/2">
                <img
                  src="icons/easy.svg"
                  className="w-[3.5rem] p-3 rounded-lg bg-primary-500"
                />
                <p className="font-bold">{beneficiotitulo1}</p>
                <p className=" mt-3 text-[#555555]">{beneficio1}</p>
              </div>
              <div className="space-y-4 w-1/2">
                <img
                  src="icons/people.svg"
                  className="w-[3.5rem] p-3 rounded-2xl bg-primary-500"
                />
                <p className="font-bold">{beneficiotitulo2}</p>
                <p className=" mt-3 text-[#555555]">{beneficio2}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Element>
  );
};
