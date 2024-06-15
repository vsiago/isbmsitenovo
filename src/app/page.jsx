"use client";
import { Metadata } from "next";
import Image from "next/image";
import Header from "../components/Header";
import { useInView } from "react-intersection-observer";
import Footer from "@/components/Footer";
// import { Image } from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <Header />

      <section className="h-[88vh] -mb-1 relative  flex items-center justify-center bg-gradient-to-tr from-[#311818] via-[#BE2B4E] via-70% to-[#8A0000]/60">
        <div className="background-indian-texture  h-full w-full">
          <div className="container flex items-center justify-between flex-col h-full md:flex-row">
            <div className=" h-[45%] md:h-full w-full md:w-[50%] flex items-end justify-end order-1 md:order-2">
              <Image
                width={700}
                height={700}
                src="/menina-art-1.png"
                alt="Algo"
                className="h-full md:h-[90%] w-full object-contain"
                objectFit="cover"
              />
            </div>

            <div className=" h-[55%] md:order-1 md:w-[50%] flex flex-col items-start justify-end  pb-4">
              <span className="mx-auto md:mx-0 text-center block   text-xs tracking-[4px] mb-3 text-[#ffbecd] font-bai-jamjuree font-bold md:text-start md:text-xl">
                BEM-VINDO AO NOSSO
              </span>
              <h1 className="text-center font-life-savers text-4xl mb-3 text-white font-black md:text-[6rem] md:leading-[90px] md:text-start">
                Instituto Social Bezerra de Menezes
              </h1>
              <p className="font-lato text-lg text-center mx-12 md:mx-0 leading-5 tracking-wide md:tracking-normal md:text-start md:text-3xl md:pr-32 text-[#D8A0A0]">
                Transformando vidas através da, cultura e da arte 🎨💃
              </p>
              <div className="flex gap-x-3 items-center justify-center mt-3 md:justify-start md:mt-6 w-full">
                <a
                  href="/"
                  className="block text-#E0234E px-5 md:px-6 py-3 md:py-4 bg-[#E0234E] rounded-full text-white font-bold"
                >
                  APOIAR
                </a>
                <a
                  href="/"
                  className="block text-white font-bold px-5 md:px-6 py-3 md:py-4 border-2 border-[#E0234E] rounded-full"
                >
                  Quem Somos
                </a>
              </div>
            </div>
          </div>
          <div class="custom-shape-divider-bottom-1718321215">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="gradient" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stop-color="#F0E0E0" />
                  <stop offset="50%" stop-color="#F0E0E0" />
                  <stop offset="100%" stop-color="#F0E0E0" />
                </linearGradient>
              </defs>

              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                fill="url(#gradient)"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                fill="url(#gradient)"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                fill="url(#gradient)"
              ></path>
            </svg>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="gradient" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stop-color="#F0E0E0" />
                  <stop offset="50%" stop-color="#F0E0E0" />
                  <stop offset="100%" stop-color="#F0E0E0" />
                </linearGradient>
              </defs>

              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                fill="url(#gradient)"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                fill="url(#gradient)"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                fill="url(#gradient)"
              ></path>
            </svg>
          </div>
        </div>
      </section>
      <section className="-mt-[2px] h-96 bg-[#F0E0E0]"></section>
      <section className="-mt-1 h-96 bg-gradient-to-r bg-[#F0E0E0]"></section>
      <Footer />
    </main>
  );
}
