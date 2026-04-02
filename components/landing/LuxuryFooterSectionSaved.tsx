"use client";

import Image from "next/image";

import futureBackground from "@/future.webp";

import { PhoneIcon, WhatsAppIcon } from "./icons";

const footerServices = [
  "Assistenza PC a domicilio",
  "Riparazione notebook",
  "Problemi Wi-Fi e rete",
  "Stampanti e periferiche",
] as const;

const footerZones = [
  "Roma Nord",
  "Roma Sud",
  "Roma Est",
  "Roma Ovest",
  "Quartieri principali",
] as const;

export function LuxuryFooterSectionSaved() {
  return (
    <footer className="relative overflow-hidden bg-[#050305] pt-20 text-white sm:pt-24">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={futureBackground}
          alt=""
          fill
          quality={75}
          sizes="100vw"
          className="object-cover object-center saturate-[1.12] contrast-[1.05] brightness-[0.93]"
          aria-hidden="true"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(42%_28%_at_50%_15%,rgba(236,56,88,0.42),rgba(236,56,88,0)_72%),linear-gradient(180deg,rgba(8,2,4,0.26)_0%,rgba(8,2,4,0.34)_46%,rgba(5,1,3,0.66)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(44%_14%_at_50%_33%,rgba(246,78,108,0.22),rgba(246,78,108,0)_78%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(rgba(255,212,222,0.9)_0.58px,transparent_0.58px)] [background-size:4.5px_4.5px] [mask-image:radial-gradient(66%_44%_at_50%_22%,black_0%,rgba(0,0,0,0.74)_48%,transparent_100%)] [-webkit-mask-image:radial-gradient(66%_44%_at_50%_22%,black_0%,rgba(0,0,0,0.74)_48%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:radial-gradient(rgba(255,208,220,0.86)_0.58px,transparent_0.58px)] [background-size:5px_5px] [mask-image:radial-gradient(58%_42%_at_50%_18%,black_0%,rgba(0,0,0,0.6)_44%,transparent_100%)] [-webkit-mask-image:radial-gradient(58%_42%_at_50%_18%,black_0%,rgba(0,0,0,0.6)_44%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(130%_110%_at_50%_50%,rgba(0,0,0,0)_44%,rgba(4,1,2,0.9)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(66%_46%_at_6%_0%,rgba(4,1,3,0.72),transparent_74%),radial-gradient(62%_42%_at_95%_2%,rgba(4,1,3,0.7),transparent_74%),radial-gradient(70%_48%_at_98%_96%,rgba(4,1,3,0.8),transparent_78%),radial-gradient(70%_48%_at_2%_96%,rgba(4,1,3,0.78),transparent_78%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.58)_0%,rgba(0,0,0,0.08)_28%,rgba(0,0,0,0.08)_72%,rgba(0,0,0,0.58)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[52%] bg-[linear-gradient(180deg,rgba(4,1,2,0)_0%,rgba(4,1,2,0.42)_44%,rgba(4,1,2,0.72)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-[16%] h-[24%] bg-[radial-gradient(46%_68%_at_50%_50%,rgba(255,232,238,0.08),rgba(255,232,238,0)_76%)]" />
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-[linear-gradient(90deg,rgba(255,144,170,0),rgba(255,198,210,0.9),rgba(255,144,170,0))]" />
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(255,244,248,0.08),rgba(255,244,248,0))]" />
      <div className="pointer-events-none absolute inset-x-[12%] top-[35%] h-px bg-[linear-gradient(90deg,rgba(255,116,142,0),rgba(255,116,142,0.68),rgba(255,116,142,0))] blur-[0.3px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="relative border-b border-[#ff9ab0]/16 pb-16 text-center sm:pb-20">
          <div className="pointer-events-none absolute left-1/2 top-6 h-40 w-[min(94%,820px)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(236,52,84,0.58),rgba(236,52,84,0.14)_46%,rgba(236,52,84,0)_76%)] blur-2xl" />
          <h2
            className="relative mx-auto max-w-[20ch] text-[clamp(2.05rem,4vw,3.42rem)] font-semibold leading-[1.02] tracking-[-0.018em] text-[#fff8fa]"
            style={{ fontFamily: "var(--font-cinzel), serif" }}
          >
            Hai bisogno di assistenza tecnica a domicilio a Roma?
          </h2>
          <p className="relative mx-auto mt-7 max-w-[64ch] text-[1rem] leading-[1.8] text-[#f2d6de]/86 sm:text-[1.06rem]">
            Intervengo rapidamente su PC, notebook, stampanti, Wi-Fi e rete, anche la sera e nel weekend.
          </p>
          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-[min(86%,540px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(236,52,84,0.42),rgba(236,52,84,0)_74%)] blur-xl" />
            <a
              href="tel:+393421872127"
              className="group relative inline-flex min-w-[228px] items-center justify-center overflow-hidden rounded-[14px] border border-[#ffd2db]/74 bg-[linear-gradient(156deg,#e9345b_0%,#bb163d_56%,#7a0d24_100%)] px-7 py-3.5 text-sm font-semibold tracking-[0.02em] text-[#fff8fa] shadow-[0_22px_40px_rgba(88,14,28,0.74),0_0_22px_rgba(236,60,92,0.28),inset_0_0_30px_rgba(242,74,102,0.22),inset_0_1px_0_rgba(255,242,246,0.42)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ffe8ed]/88 hover:shadow-[0_28px_48px_rgba(96,16,32,0.82),0_0_30px_rgba(242,78,108,0.4)]"
            >
              <span className="pointer-events-none absolute inset-x-6 top-[1px] h-px bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,250,252,0.98),rgba(255,255,255,0))]" />
              <span className="pointer-events-none absolute inset-x-[12%] top-[2px] h-[38%] rounded-full bg-[linear-gradient(180deg,rgba(255,210,220,0.52),rgba(255,210,220,0)_100%)]" />
              <span className="pointer-events-none absolute right-[14%] top-[30%] h-3 w-3 rounded-full bg-[radial-gradient(circle,rgba(255,206,220,0.9),rgba(255,206,220,0)_72%)] blur-[1px]" />
              <span className="relative">Contattaci ora</span>
            </a>
            <a
              href="https://wa.me/393421872127"
              className="group relative inline-flex min-w-[220px] items-center justify-center gap-2 overflow-hidden rounded-[14px] border border-[#cea0ab]/24 bg-[linear-gradient(156deg,rgba(26,11,15,0.92),rgba(13,8,10,0.96))] px-7 py-3.5 text-sm font-semibold tracking-[0.02em] text-[#f4dfe5]/86 shadow-[0_14px_24px_rgba(0,0,0,0.54),inset_0_1px_0_rgba(255,236,241,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#e6c2cb]/42 hover:text-[#fff7fa] hover:shadow-[0_18px_30px_rgba(0,0,0,0.6),0_0_14px_rgba(166,44,70,0.16)]"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#6ce79c]/44 bg-[#26d267]/22 text-[#9dffbf]">
                <WhatsAppIcon className="h-3.5 w-3.5" />
              </span>
              <span>Scrivici su WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="grid gap-12 py-12 sm:py-14 lg:grid-cols-[1.35fr_repeat(3,minmax(0,1fr))] lg:gap-11 lg:py-16">
          <div className="max-w-[48ch]">
            <h3 className="text-[1.42rem] font-semibold tracking-[-0.01em] text-[#fff6f9]" style={{ fontFamily: "var(--font-cinzel), serif" }}>
              Assistenza Roma PC
            </h3>
            <p className="mt-5 text-[1rem] leading-[1.78] text-[#f0d2da]/90">
              Assistenza informatica a domicilio a Roma per computer, notebook, rete Wi-Fi, stampanti e supporto tecnico rapido.
            </p>
            <p className="mt-6 border-t border-[#ff9cb1]/16 pt-3 text-[0.8rem] font-medium leading-relaxed text-[#ffdce4]/88">
              7 giorni su 7 {"\u00B7"} A domicilio {"\u00B7"} Roma e dintorni {"\u00B7"} Risposta rapida
            </p>
          </div>

          <div>
            <h4 className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#f6c9d3]/82">Servizi</h4>
            <ul className="mt-5 space-y-3.5">
              {footerServices.map((service) => (
                <li key={service}>
                  <a href="#servizi" className="group inline-flex items-center gap-2 text-[0.92rem] leading-relaxed text-[#f5d9e0]/76 transition-colors duration-300 hover:text-[#fff4f8]">
                    <span className="h-[5px] w-[5px] rounded-full bg-[#ff6f90]/58 shadow-[0_0_10px_rgba(255,111,144,0.28)] transition-transform duration-300 group-hover:scale-125" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#f6c9d3]/82">Zone</h4>
            <ul className="mt-5 space-y-3.5">
              {footerZones.map((zone) => (
                <li key={zone}>
                  <a href="#zone-coperte" className="group inline-flex items-center gap-2 text-[0.92rem] leading-relaxed text-[#f5d9e0]/76 transition-colors duration-300 hover:text-[#fff4f8]">
                    <span className="h-[5px] w-[5px] rounded-full bg-[#ff6f90]/52 shadow-[0_0_10px_rgba(255,111,144,0.24)] transition-transform duration-300 group-hover:scale-125" />
                    <span>{zone}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#f6c9d3]/82">Contatti</h4>
            <ul className="mt-5 space-y-3.5 text-[0.92rem] leading-relaxed text-[#f5d9e0]/76">
              <li>
                <a href="tel:+393421872127" className="group inline-flex items-center gap-2 transition-colors duration-300 hover:text-[#fff5f8]">
                  <PhoneIcon className="h-4 w-4 text-[#ff9bb1]/66 transition-transform duration-300 group-hover:-translate-y-px" />
                  <span>3421872127</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/393421872127" className="group inline-flex items-center gap-2 transition-colors duration-300 hover:text-[#fff5f8]">
                  <WhatsAppIcon className="h-4 w-4 text-[#ff9bb1]/66 transition-transform duration-300 group-hover:-translate-y-px" />
                  <span>Scrivici su WhatsApp</span>
                </a>
              </li>
              <li>
                <a href="mailto:assistenzaromapc0@gmail.com" className="transition-colors duration-300 hover:text-[#fff5f8]">
                  assistenzaromapc0@gmail.com
                </a>
              </li>
              <li>{"Disponibilit\u00E0 7/7"}</li>
              <li>Roma e dintorni</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-[#ff95ab]/12 bg-[linear-gradient(180deg,rgba(11,4,7,0.86),rgba(8,3,5,0.94))]">
        <div className="mx-auto flex w-full max-w-[1320px] flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 py-3.5 text-[0.73rem] text-[#f2d0d9]/68 sm:px-6 lg:justify-between lg:px-8">
          <span>&copy; Assistenza Roma PC</span>
          <span className="hidden h-3 w-px bg-[#ff9db4]/18 lg:inline-block" />
          <a href="#privacy" className="transition-colors duration-300 hover:text-[#fff2f6]">
            Privacy Policy
          </a>
          <span className="hidden h-3 w-px bg-[#ff9db4]/18 lg:inline-block" />
          <a href="#cookie" className="transition-colors duration-300 hover:text-[#fff2f6]">
            Cookie Policy
          </a>
          <span className="hidden h-3 w-px bg-[#ff9db4]/18 lg:inline-block" />
          <span>Assistenza tecnica a domicilio in tutta Roma</span>
        </div>
      </div>
    </footer>
  );
}

