"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Header from "../components/Header";
import { useInView } from "react-intersection-observer";

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
}

export default function Home() {
  const cursoOficiais = [
    "Cabelereiro",
    "Pintura em Tela",
    "Teatro Adaptado",
    "Barbeiro",
    "Crochê",
    "Teatro",
    "Manicure",
    "Dança de Salão",
    "JazzBallet",
  ];

  // Referência para acessar o ID da seção

  const quemSomosRef = useRef(null);

  const [show1000Delay, setShow1000Delay] = useState(false);
  const [show2000Delay, setShow2000Delay] = useState(false);

  useEffect(() => {
    const timer1000 = setTimeout(() => {
      setShow1000Delay(true); // Após 1000ms (1 segundo), mostrar os textos
    }, 1000);

    const timer2000 = setTimeout(() => {
      setShow2000Delay(true); // Após 1000ms (1 segundo), mostrar os textos
    }, 2000);

    return () => clearTimeout(timer1000, timer2000); // Limpa o temporizador se o componente for desmontado
  }, []); // Executa uma vez após a montagem do componente

  // Configuração do Intersection Observer para o h1
  const { ref, inView, entry } = useInView({
    /* Configurações do Intersection Observer */
    threshold: 0.5, // Define a porcentagem de visibilidade necessária para acionar o callback
    triggerOnce: true, // Ação será disparada apenas uma vez
  });

  return (
    <main className="relative">
      <Header />

      <section className="h-[90vh] -mb-1 relative  flex items-center justify-center bg-gradient-to-tr from-[#311818] via-[#BE2B4E] via-70% to-[#8A0000]/60">
        <div className="background-indian-texture  h-full w-full">
          <div className="container flex items-center justify-between flex-col h-full md:flex-row">
            <div className=" h-[50%] md:h-full w-full md:w-[50%] flex items-end justify-end order-1  md:order-2 overflow-hidden">
              <Image
                ref={ref} // Ref para o Intersection Observer
                width={700}
                height={700}
                src="/menina-art-1.png"
                alt="Algo"
                className={`h-full md:h-[90%] w-full object-contain ${
                  inView ? "slide-in-bottom" : "hidden-bottom"
                }`}
                objectFit="cover"
              />
            </div>

            <div className=" h-[50%] md:order-1 md:w-[50%] flex flex-col items-start justify-end">
              <span
                className={`hidden mx-auto md:mx-0 text-center md:block text-xs tracking-[3px] mb-2 md:mb-5 text-[#f7bfbf] font-bai-jamjuree font-bold md:text-start md:text-xl ${
                  show2000Delay ? "slide-in-bottom" : "hidden-bottom"
                }`}
              >
                BEM-VINDO AO NOSSO
              </span>
              <h1
                ref={ref} // Ref para o Intersection Observer
                className={`tracking-wider text-center w-full font-life-savers text-5xl md:mb-3 text-white font-black md:text-[5rem] md:leading-[80px] md:text-start ${
                  show1000Delay ? "slide-in-bottom " : "hidden-bottom "
                }`}
              >
                Instituto Social <br /> Bezerra de Menezes
              </h1>
              <p
                className={`font-lato text-lg w-full text-center leading-5 tracking-wide md:tracking-normal md:text-start md:text-3xl md:pr-32 text-[#f7bfbf] ${
                  show2000Delay ? "slide-in-bottom" : "hidden-bottom"
                }`}
              >
                Transformando vidas através da <br /> cultura e da arte 🎨💃
              </p>
              <div
                className={` flex gap-x-3 items-center justify-center mt-3 md:justify-start md:mt-6 w-full mb:mt-6 ${
                  show2000Delay ? "slide-in-bottom" : "hidden-bottom"
                }`}
              >
                <a
                  href="/doar"
                  className="block text-#E0234E px-5 md:px-12 py-2 md:py-4 bg-[#E0234E] rounded-full text-white font-bold"
                >
                  APOIAR
                </a>
                <a
                  href="#quem-somos"
                  className="block text-white font-bold px-5 md:px-6 py-2 md:py-4 border-2 border-[#E0234E] rounded-full"
                  onClick={(e) => {
                    e.preventDefault(); // Evita o comportamento padrão de scroll imediato
                    scrollToSection("quem-somos"); // Função para rolar suavemente até a seção
                  }}
                >
                  Quem Somos
                </a>
              </div>
            </div>
          </div>
          <div class="custom-shape-divider-bottom-1718321215 relative">
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
          ;
        </div>
      </section>
      <section
        id="quem-somos"
        className="py-20 md:py-40  bg-gradient-to-r bg-[#F0E0E0]"
      ></section>
      <section className="bg-[#F0E0E0] flex items-center justify-center relative">
        <div className="bg-gradient-to-tr from-[#621628] via-[#BE2B4E] via-70% to-[#8A0000]/60 container  rounded-[3rem] md:rounded-[5rem]   drop-shadow-2xl z-[3]">
          <h2 className="absolute z-20 md:-top-24 -top-16 left-1/2 transform -translate-x-1/2 font-life-savers text-3xl md:text-7xl text-[#68172A] text-center w-full">
            Quem Somos
          </h2>
          <div
            className="w-full  flex flex-col md:grid md:grid-cols-12 md:px-8 md:py-10 "
            style={{ gridTemplateRows: "60% 40%" }}
          >
            <div className="col-start-1 col-span-5 row-start-1 w-full mb-2 flex flex-col justify-end order-2">
              <p className="text-white text-xl md:text-start text-center md:text-2xl md:pt-10">
                Instituto Bezerra de Menezes:
              </p>
              <p className="text-3xl text-center md:text-start md:text-4xl text-[#FFEBB8] font-semibold mt-2">
                8 Anos de Atendimento Filantrópico em Bangu
              </p>
              <div className="flex md:block items-center justify-center gap-x-2 mt-6 mb-2">
                <div className="p-3 px-6 bg-[#69172B]/70 md:w-[70%]  rounded-lg md:mt-6">
                  <p className="text-white text-lg md:text-xl">Localização:</p>
                  <p className="text-xs md:text-lg text-[#F6B3B3]">
                    Bairro de Bangu e áreas adjacentes
                  </p>
                </div>
                <div className="p-3 px-6 bg-[#69172B]/70 md:w-[70%] rounded-lg md:mt-2 md:mb-2">
                  <p className="text-white text-lg md:text-xl">Público:</p>
                  <p className="text-xs md:text-lg text-[#F6B3B3]">
                    Famílias, Crianças, Jovens, Adultos
                  </p>
                </div>
              </div>
            </div>
            <div className="col-start-1 col-span-5 row-start-2 border-t pb-10 md:pb-0 border-t-[#69172B] mt-2 pt-6 order-3 md:block flex flex-col items-center justify-start">
              <div className="flex items-center justify-start gap-x-4 ">
                <Image
                  src="/icon-mission.png"
                  width={60}
                  height={60}
                  alt="Ícone Missão"
                />
                <p className="font-life-savers text-white text-3xl">
                  Nossa Missão
                </p>
              </div>
              <p className="text-sm md:text-lg text-[#F6B3B3]  text-center md:text-start">
                Oferecer reabilitação especializada, cursos profissionalizantes,
                esportes e artesanato, promovendo filantropia com ética e
                responsabilidade social, visando autossustentabilidade e
                integração comunitária.
              </p>
            </div>

            <div className="col-start-6 col-span-full row-start-1 row-span-2 flex items-center justify-center  rounded-3xl order-1 pt-8 md:pt-0">
              <Image
                src="/foto-isbm.png"
                width={800}
                height={500}
                alt="Foto de pessoas no instituto"
                className="h-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:block bg-gradient-to-tr from-[#621628] scale-[1.07] opacity-10 z-[1] via-[#BE2B4E] via-70% to-[#8A0000]/50 h-[95%] container  rounded-[5rem] translate-y-5 rotate-2 absolute drop-shadow-2xl"></div>
        <div className="hidden md:block bg-gradient-to-tr from-[#621628] scale-[1.07] scale-y-[1.10] opacity-10 z-[2] via-[#BE2B4E] via-70% to-[#8A0000]/30 h-[90%] container  rounded-[5rem] -rotate-2 absolute drop-shadow-2xl"></div>
      </section>
      <section className="bg-gradient-to-r bg-[#F0E0E0] py-20">
        <div className="container mx-auto">
          <h3 className="text-center text-5xl font-life-savers text-[#68172A]">
            Nossos Serviços
          </h3>
          <div className="flex items-center justify-center gap-3 md:gap-6 mt-8 flex-wrap">
            <div className="flex flex-col items-center justify-center w-[48%] md:w-48 h-48 bg-gradient-to-br from-white to-white/50 rounded-xl drop-shadow-red-lg">
              <Image
                src="/icon-reabilitacao.png"
                width={90}
                height={90}
                alt="Ícone Reabilitação"
                className="mx-auto mb-1"
              />
              <p className="text-[#BB6266] font-bold text-lg text-center">
                Reabilitação
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-[48%] md:w-48 h-48 bg-gradient-to-tl from-white to-white/50 rounded-xl drop-shadow-red-lg">
              <Image
                src="/icon-social-service.png"
                width={90}
                height={90}
                alt="Ícone Serviço Social"
                className="mx-auto mb-1"
              />
              <p className="text-[#BB6266] font-bold text-lg text-center">
                Serviço Social
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-[48%] md:w-48 h-48 bg-gradient-to-br from-white to-white/50 rounded-xl drop-shadow-red-lg">
              <Image
                src="/icon-pisicologia.png"
                width={90}
                height={90}
                alt="Ícone Psicologia"
                className="mx-auto mb-1"
              />
              <p className="text-[#BB6266] font-bold text-lg text-center">
                Psicologia
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-[48%] md:w-48 h-48 bg-gradient-to-tl from-white to-white/50 rounded-xl drop-shadow-red-lg">
              <Image
                src="/icon-psicopedagogia.png"
                width={90}
                height={90}
                alt="Ícone Psicopedagogia"
                className="mx-auto mb-1"
              />
              <p className="text-[#BB6266] font-bold text-lg text-center">
                Psicopedagogia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/********** Cursos e Oficinas **********/}

      <section className="bg-[#F0E0E0] text-center text-3xl text-pink-950/80 py-20">
        <h5 className="mb-10">Cursos e Oficinas</h5>
        <ul className="container mx-auto flex items-start justify-center gap-2 flex-wrap text-base max-w-3xl">
          {cursoOficiais.map((curso, index) => (
            <li key={index}>
              <a
                href="#lorem"
                className="block p-2 px-4 bg-white rounded-full hover:bg-white/60 text-[#8B6875]"
              >
                {curso}
              </a>
            </li>
          ))}
        </ul>
      </section>
      {/*********** Colabore com o Nosso Projeto ***********/}

      <section className="bg-[#F0E0E0] text-pink-950/80 py-20 pb-40">
        <div className="flex items-end container md:px-52 mx-auto flex-wrap md:flex-nowrap text-center md:text-start">
          <div className="w-full">
            <div className="flex items-center justify-center md:justify-start">
              <Image
                src="/icon-colabore.png"
                width={130}
                height={130}
                alt="Ícone Doação"
                className="border"
              />
              <h6 className="text-2xl sm:text-3xl text-start md:text-4xl font-bold">
                Colabore com <br /> o Nosso Projeto
              </h6>
            </div>
            <p className="text-[#A46A78] text-2xl md:max-w-[80%] font-semibold pl-5">
              Uma contribuicao ajuda a construir um mundo mais solidário e
              justo.
            </p>
          </div>
          <div className="w-full  relative scale-110 md:ml-10 mt-2 flex justify-center items-center">
            <Image
              src="/criancas-felizes.png"
              width={300}
              height={300}
              alt="Crianças felizes"
            />
            <a
              href="/doar"
              className="absolute bottom-3 block bg-[#E0234E] bg-gradient-to-br from-[#E0234E] to-[#a52240] w-[300px] p-3 py-4 text-center text-white font-bold text-xl rounded-full hover:scale-110 hover:border-2 hover:border-white hover:drop-shadow-xl hover:shadow-red-950/30 transform ease-linear duration-200"
            >
              Doar ou ser apoiador
            </a>
          </div>
        </div>
      </section>
      <section className=" rotate-180  relative  flex items-center justify-center bg-gradient-to-tr from-[#311818] via-[#BE2B4E] via-70% to-[#8A0000]/60">
        <div className="container rotate-180 pt-10">
          <div className="flex flex-col md:flex-row items-end justify-center w-full">
            <div className=" w-full md:w-[50%] h-72 flex flex-col md:items-start justify-end items-center">
              <div className="flex items-center gap-x-6">
                <a href="/">
                  <Image
                    src="/logo-isbm.svg"
                    width={180}
                    height={20}
                    alt="Logo ISBM"
                  />
                </a>
                <a
                  href="/doar"
                  className="block mt-3 text-[#E0234E] px-5 md:px-12 py-2 md:py-3 bg-white rounded-full font-bold"
                >
                  APOIAR
                </a>
              </div>
              <p className="text-white mt-3">Horário de funcionamento:</p>
              <p className="text-xs text-[#FFC1D0] text-center">
                Segunda a quinta-feira: 08:00 - 17:00 Sexta-feira: 08:00 - 16:00
              </p>
            </div>
            <div className=" w-full md:w-[50%]   flex h-32 md:h-44 flex-col items-center justify-end mt-6 -mb-4">
              <p className="text-white text-bold mb-3">Falar com a ISBM</p>
              <div className="flex items-center gap-x-1">
                <a href="/">
                  <Image
                    src="/icon-whatsapp.png"
                    width={80}
                    height={80}
                    alt="Ícone WhatsApp"
                    className="mx-auto mb-1"
                  />
                </a>
                <a href="/">
                  <Image
                    src="/icon-email.png"
                    width={80}
                    height={80}
                    alt="Ícone E-mail"
                    className="mx-auto mb-1"
                  />
                </a>
                <a href="/">
                  <Image
                    src="/icon-telefone.png"
                    width={80}
                    height={80}
                    alt="Ícone Telefone"
                    className="mx-auto mb-1"
                  />
                </a>
                <a href="/">
                  <Image
                    src="/icon-enedeco.png"
                    width={80}
                    height={80}
                    alt="Ícone Endereço"
                    className="mx-auto mb-1"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full">
            <p className="text-white text-xs text-center my-16">
              Copyright © 2024 Instituto Social Bezerra de Menezes Todos os
              direitos reservados.
            </p>
          </div>
        </div>

        <div class="custom-shape-divider-bottom-1718321215 relative">
          <div className="h-2 w-full bg-[#F0E0E0] absolute -top-1 z-[1000]"></div>
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
      </section>
    </main>
  );
}
