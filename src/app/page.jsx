"use client";
import { Metadata } from "next";
import Image from "next/image";
import Header from "../components/Header";
import { useInView } from "react-intersection-observer";
import Footer from "@/components/Footer";
// import { Image } from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      {/* <Image
        width={20}
        height={20}
        src="bg-criancas.png"
        alt="Algo"
        className="h-6"
      /> */}
      <section className="h-[70vh] -mb-1 relative bg-gradient-to-tr from-[#140D10] via-[#621628] via-50% to-[#621628]">
        <div className="flex flex-col h-full">
          <div className=" h-[30%] flex items-center justify-center">Img</div>
          <div className=" h-[50%]">
            <span className="text-center block font-sans font-semibold text-xs tracking-[4px] mb-3 text-[#ff7a99]">
              BEM-VINDO AO NOSSO
            </span>
            <h1 className="text-center font-life-savers text-4xl mb-3 text-white font-black md:text-7xl">
              Instituto Social Bezerra de Menezes
            </h1>
            <p className="font-lato text-lg text-center mx-12 leading-5 tracking-wide">
              💃 Transformando vidas através da, cultura e da arte 🎨
            </p>
            <div className="flex gap-x-3 items-center justify-center mt-3">
              <a className="block text-#E0234E">APOIAR</a>
              <a className="block">Quem Somos</a>
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
                <stop offset="0%" stop-color="#FBE2E2" />
                <stop offset="50%" stop-color="#F6E5E5" />
                <stop offset="100%" stop-color="#908686" />
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
      </section>
      <section className="-mt-[2px] h-96 bg-gradient-to-r from-custom-red via-custom-pink to-custom-gray"></section>
      <section className="-mt-1 h-96 bg-gradient-to-r from-custom-red via-custom-pink to-custom-gray"></section>
      <Footer />
    </>
  );
}
