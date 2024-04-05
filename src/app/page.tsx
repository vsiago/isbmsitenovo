"use client";
import { Metadata } from "next";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const { ref, inView } = useInView({
    threshold: 0.5, // Quando 50% do elemento estiver visível
  });

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="flex-1  flex items-center md:items-start md:pt-40 bg-image-section">
        <div
          ref={ref}
          className={` items-start justify-start  flex-col gap-6 md:flex-row-reverse container w-full  ${
            inView ? "animate" : ""
          }`}
        >
          <div className="text-center md:text-start ">
            <p className="mb-3 ml-1 uppercase tracking-[5px] text-lg text-[#e0234e] font-bold">
              Bem-vindo ao
            </p>
            <h1 className="text-5xl font-bold text-center md:text-start">
              Nosso Instituto Social <br className="hidden sm:block" />
              Bezerra de Menezes
            </h1>
            <p className="text-xl/6 md:text-2xl text-center w-full mt-2 lg:mt-4 text-[#BFAFB8]">
              Transformando vidas através do esporte, cultura e da arte.
            </p>

            <a href="/doar" className="py-2 scale-105 px-10 inline-block mt-10 md:px-8 border-2 bg-white sm:bg-inherit text-lg text-[#7B1930] md:border-white rounded-full font-medium sm:text-white hover:bg-white hover:text-[#e0234e] duration-300">
              Doar
            </a>
          </div>
        </div>
      </section>
      <section className=" h-[18vh] w-full container mx-auto relative overflow-hidden bg-white">
  <p className="py-3 text-[#B6B6B7] md:text-start text-center text-sm lg:text-lg lg:py-4 font-medium tracking-[1px]">
    NOSSOS APOIADORES:
  </p>
  <div className="flex items-center w-full justify-center lg:inset-0 lg:overflow-hidden">
    <div className="relative w-full h-[200px] lg:h-[320px] overflow-hidden">
      <div className="animate-marquee flex absolute md:h-[80px] h-[60px]  gap-6 md:gap-32 mt-2">
        <img className="h-full mx-4" src="./SVG/oplan-care.svg" alt="Logo Oplan Care" />
        <img className="h-full mx-4" src="./SVG/hgi-logo.svg" alt="Logo HGI" />
        <img className="h-full mx-4" src="./SVG/oplan-logo.svg" alt="Logo Oplan" />
        <img className="h-full mx-4" src="./SVG/oplan-care.svg" alt="Logo Oplan Care" />
        <img className="h-full mx-4" src="./SVG/hgi-logo.svg" alt="Logo HGI" />
        <img className="h-full mx-4" src="./SVG/oplan-logo.svg" alt="Logo Oplan" />
        <img className="h-full mx-4" src="./SVG/oplan-care.svg" alt="Logo Oplan Care" />
        <img className="h-full mx-4" src="./SVG/hgi-logo.svg" alt="Logo HGI" />
        <img className="h-full mx-4" src="./SVG/oplan-logo.svg" alt="Logo Oplan" />
        <img className="h-full mx-4" src="./SVG/oplan-care.svg" alt="Logo Oplan Care" />
        <img className="h-full mx-4" src="./SVG/hgi-logo.svg" alt="Logo HGI" />
        <img className="h-full mx-4" src="./SVG/oplan-logo.svg" alt="Logo Oplan" />
        <img className="h-full mx-4" src="./SVG/oplan-care.svg" alt="Logo Oplan Care" />
        <img className="h-full mx-4" src="./SVG/hgi-logo.svg" alt="Logo HGI" />
        <img className="h-full mx-4" src="./SVG/oplan-logo.svg" alt="Logo Oplan" />
        <img className="h-full mx-4" src="./SVG/oplan-care.svg" alt="Logo Oplan Care" />
        <img className="h-full mx-4" src="./SVG/hgi-logo.svg" alt="Logo HGI" />
        <img className="h-full mx-4" src="./SVG/oplan-logo.svg" alt="Logo Oplan" />
        <img className="h-full mx-4" src="./SVG/oplan-care.svg" alt="Logo Oplan Care" />
        <img className="h-full mx-4" src="./SVG/hgi-logo.svg" alt="Logo HGI" />
        <img className="h-full mx-4" src="./SVG/oplan-logo.svg" alt="Logo Oplan" />
        <img className="h-full mx-4" src="./SVG/oplan-care.svg" alt="Logo Oplan Care" />
        <img className="h-full mx-4" src="./SVG/hgi-logo.svg" alt="Logo HGI" />
        <img className="h-full mx-4" src="./SVG/oplan-logo.svg" alt="Logo Oplan" />
        <img className="h-full mx-4" src="./SVG/oplan-care.svg" alt="Logo Oplan Care" />
        <img className="h-full mx-4" src="./SVG/hgi-logo.svg" alt="Logo HGI" />
        <img className="h-full mx-4" src="./SVG/oplan-logo.svg" alt="Logo Oplan" />
        <img className="h-full mx-4" src="./SVG/oplan-care.svg" alt="Logo Oplan Care" />
        <img className="h-full mx-4" src="./SVG/hgi-logo.svg" alt="Logo HGI" />
        <img className="h-full mx-4" src="./SVG/oplan-logo.svg" alt="Logo Oplan" />
        <img className="h-full mx-4" src="./SVG/oplan-care.svg" alt="Logo Oplan Care" />
        <img className="h-full mx-4" src="./SVG/hgi-logo.svg" alt="Logo HGI" />
        <img className="h-full mx-4" src="./SVG/oplan-logo.svg" alt="Logo Oplan" />
        <img className="h-full mx-4" src="./SVG/oplan-care.svg" alt="Logo Oplan Care" />
        <img className="h-full mx-4" src="./SVG/hgi-logo.svg" alt="Logo HGI" />
        <img className="h-full mx-4" src="./SVG/oplan-logo.svg" alt="Logo Oplan" />
        <img className="h-full mx-4" src="./SVG/oplan-care.svg" alt="Logo Oplan Care" />
        <img className="h-full mx-4" src="./SVG/hgi-logo.svg" alt="Logo HGI" />
        <img className="h-full mx-4" src="./SVG/oplan-logo.svg" alt="Logo Oplan" />
        <img className="h-full mx-4" src="./SVG/oplan-care.svg" alt="Logo Oplan Care" />
        <img className="h-full mx-4" src="./SVG/hgi-logo.svg" alt="Logo HGI" />
        <img className="h-full mx-4" src="./SVG/oplan-logo.svg" alt="Logo Oplan" />
        <img className="h-full mx-4" src="./SVG/oplan-care.svg" alt="Logo Oplan Care" />
        <img className="h-full mx-4" src="./SVG/hgi-logo.svg" alt="Logo HGI" />
        <img className="h-full mx-4" src="./SVG/oplan-logo.svg" alt="Logo Oplan" />
        <img className="h-full mx-4" src="./SVG/oplan-care.svg" alt="Logo Oplan Care" />
        <img className="h-full mx-4" src="./SVG/hgi-logo.svg" alt="Logo HGI" />
        <img className="h-full mx-4" src="./SVG/oplan-logo.svg" alt="Logo Oplan" />
        <img className="h-full mx-4" src="./SVG/oplan-care.svg" alt="Logo Oplan Care" />
        <img className="h-full mx-4" src="./SVG/hgi-logo.svg" alt="Logo HGI" />
        <img className="h-full mx-4" src="./SVG/oplan-logo.svg" alt="Logo Oplan" />
        <img className="h-full mx-4" src="./SVG/oplan-care.svg" alt="Logo Oplan Care" />
        <img className="h-full mx-4" src="./SVG/hgi-logo.svg" alt="Logo HGI" />
        <img className="h-full mx-4" src="./SVG/oplan-logo.svg" alt="Logo Oplan" />
      </div>
    </div>
  </div>
  
</section>
      <Footer />
    </main>
  );
}
