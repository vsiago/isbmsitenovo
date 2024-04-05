"use client"
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const donates = [
  {
    amount: "Doar R$100",
    image: "../../public/img/qr-code-donate.png",
    pixKey: "23.801.260/0001-61",
  },
  {
    amount: "Doar R$200",
    image: "../../public/img/qr-code-donate.png",
    pixKey: "23.801.260/0001-61",
  },
  {
    amount: "Doar R$300",
    image: "../../public/img/qr-code-donate.png",
    pixKey: "23.801.260/0001-61",
  },
  {
    amount: "Valor Personalizado",
    image: "../../public/img/qr-code-donate.png",
    pixKey: "23.801.260/0001-61",
  },
];



export default function Doar() {
  const [itemActive, setItemActive] = useState(Array(donates.length).fill(false));
  const [copiedIndex, setCopiedIndex] = useState(null);

  const toggleItemActive = (index) => {
    const newActiveState = [...itemActive];
    newActiveState[index] = !newActiveState[index];
    setItemActive(newActiveState);
  };

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000); // Resetar o estado após 2 segundos
    });
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <main className="bg-red-50 h-screen py-10 flex-1 text-black pt-20">
        <div className="mt-10 flex flex-col items-center justify-center w-full">
          <Image src="/SVG/icon-donate.svg" alt="icon-donate" width={120} height={120}/>
          <p className="text-[#E0234E] text-2xl text-center font-bold uppercase">
            Apoie Famílias
            <br /> em Necessidade
          </p>
        </div>
        <section className="w-full p-8 flex flex-col">
          <ul>
            {donates.map((donate, index) => (
              <React.Fragment key={index}>
                <li
                  onClick={() => toggleItemActive(index)}
                  className="bg-[#E0234E] text-white flex justify-between items-center rounded-t-md px-6 py-4 mt-3"
                >
                  <div />
                  <p className="font-bold text-xl">{donate.amount}</p>
                  <Image src="/SVG/arrow-white.svg" alt="arrow" width={10} height={10} />
                </li>

                {/* Renderizar esse em baixo do item correspondente essa */}
                
                  <div className={`${itemActive[index] ? 'visible opacity-100 h-full' : 'invisible opacity-0 h-0'} transition-all ease-in-out duration-200 bg-red-900/10 w-full py-5 rounded-b-md flex flex-col border-2 border-[#E0234E] items-center justify-center drop-shadow-xl shadow-md`}>
                    <div className="bg-red-500/80 w-[250px] h-[250px] rounded-xl flex flex-col items-center justify-center px-3 py-7 l shadow-2xl">
                      <p className="text-white text-lg mb-1">
                        Faça sua doação agora!
                      </p>
                      <img
                        className="h-full w-full rounded-sm"
                        src="/qr-code-donate.png"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col items-center gap-2 justify-center mt-3">
                      <img
                        src="../../public/img/SVG/icon-pix.svg"
                        alt=""
                        className="h-6"
                      />
                      <p className="text-[#69313F] uppercase text-lg font-bold">
                        Chave pix: CNPJ
                      </p>
                      <div
                        className={`bg-white/50 border-2 border-white p-3 px-7 rounded-full drop-shadow-xl shadow-2xl ${copiedIndex === index ? 'bg-green-500' : ''}`}
                        onClick={() => copyToClipboard(donate.pixKey, index)}
                        style={{ cursor: "pointer" }}
                      >
                        <p className={`text-[#E0234E] font-bold text-xl tracking-wide text-center ${copiedIndex === index ? 'text-white' : ''}`}>
                          {copiedIndex === index ? "Chave copiada!" : donate.pixKey}
                        </p>
                      </div>
                      <p className="text-[#813545]">Aperte para copiar</p>
                    </div>
                  </div>
              </React.Fragment>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </main>
  );
}
