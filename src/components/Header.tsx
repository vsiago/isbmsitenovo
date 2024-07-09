"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  changeHeaderBgColor: string;
}

export default function Header({changeHeaderBgColor}: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [apparencyOff, setApparencyOff] = useState(false);

  const menuItems = [
    {
      nome: "Início",
      link: "/",
    },
    {
      nome: "Doar",
      link: "/doar",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const isScrolled = currentScrollPos > 0;
  
        setScrolled(isScrolled);
  
        if (currentScrollPos > prevScrollPos) {
          // Scrolling down
          setPrevScrollPos(currentScrollPos);
          setOpen(false);
        } else {
          // Scrolling up
          setPrevScrollPos(currentScrollPos);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [prevScrollPos]);

  return (
    <header
      className={`${
        scrolled
          ? "z-[2000] bg-gradient-to-r from-[#441f27] from-10% via-[#E0234E] to-[#E0234E] py-10 fixed top-0  h-16 flex w-full translate-y-0 duration-300 ease-in-out bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90"
          : `py-4 md:py-0  bg-gradient-to-r  h-20 w-full from-[#140D10]/0 absolute top-0 z-20 left-0 via-[#621628]/0 to-[#621628]/0 ${changeHeaderBgColor || open ? 'bg-[#621628] h-10' : 'bg-[#621628]/0 '}`}
      } `}
    >
      <nav className="min-h-full px-6 flex w-full justify-between items-center md:container mx-auto ">
        <a href="/">
          <Image src="/logo-isbm.svg" width={150} height={20} alt="Logo ISBM" />
        </a>
        <ul
          onClick={() => setOpen(!open)}
          className="md:hidden relative flex h-10 w-10 flex-col items-center justify-center gap-3 cursor-pointer hover:bg-[#E0234E] rounded transition duration-150 ease-in hover:transform hover:scale-105"
        >
          <li
            className={`${
              open ? "transform rotate-45 absolute" : ""
            } w-7 h-[3px] rounded-[2px] bg-white transition duration-150 ease-in-out`}
          ></li>
          <li
            className={`${
              open ? "transform -rotate-45 absolute" : ""
            } w-7 h-[3px] rounded-[2px] bg-white transition duration ease-in-out`}
          ></li>
        </ul>
        <ul
          className={`${
            open
              ? "bg-gradient-to-r from-[#140D10]/60 via-[#E0234E] to-[#E0234E]/70 flex opacity-100 w-full h-screen left-0 z-[50] backdrop-blur-lg mt-4"
              : "w-full h-0"
          } fixed ${
            scrolled ? "top-16" : "top-16"
          } right-0 flex flex-col transition duration-200 ease-out opacity-0 flex-1`}
        >
          {menuItems.map((item, index) => (
            <li
              key={item.nome}
              style={{ transitionDelay: `${open ? index * 70 : 0}ms` }}
              className={`px-6 ${
                open
                  ? "opacity-100 transform translate-x-0 "
                  : "opacity-0 transform -translate-x-10"
              } transition-all ease-out duration-500`}
            >
              <a
                className={`${
                  open
                    ? "inline-block ml-0 pointer-events-auto transition ease-in py-6"
                    : "py-0 opacity-0 ml-6 hidden pointer-events-none"
                } text-red-200 border-b-[1px] border-red-950 w-full focus:text-white focus:font-semibold`}
                href={`${item.link}`}
              >
                {item.nome}
              </a>
            </li>
          ))}
        </ul>
        <ul className="hidden md:flex gap-6 items-center justify-center">
          {menuItems.map((item, intex) => (
            <li
              className={`${
                item.nome === "Doar"
                  ? "bg-[#E0234E] p-3 px-6 text-white rounded-full hover:scale-110 cursor-pointer transition-all ease-in-out  hover:shadow-2xl hover:drop-shadow-2xl hover:bg-red-600/40 hover:border-4 hover:border-red-500"
                  : ""
              }`}
              key={item.nome}
            >
              <Link
                className={`${
                  scrolled ? "text-text-white" : ""
                } h-20 px-2 py-1 text-white hover:text-white  text-xl active:text-red-400 ${
                  item.nome === "Doar" ? "text-white font-bold" : ""
                }`}
                href={item.link}
              >
                {item.nome}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
