"use client";

import Image from "next/image";

import futureBackground from "@/future.png";

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

export function LuxuryFooterSection() {
  return (
    <footer className="relative overflow-hidden bg-[#050305] pt-20 text-white sm:pt-24">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={futureBackground}
          alt=""
          fill
          quality={100}
          sizes="100vw"
          className="object-cover object-center saturate-[1.22] contrast-[1.08] brightness-[0.86]"
          aria-hidden="true"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(255,66,86,0.26),rgba(24,0,0,0.42)_42%,rgba(8,2,4,0.88)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,2,4,0.4)_0%,rgba(8,2,4,0.56)_48%,rgba(5,1,3,0.84)_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.17] [background-image:radial-gradient(rgba(255,212,222,0.9)_0.58px,transparent_0.58px)] [background-size:4px_4px] [mask-image:radial-gradient(70%_58%_at_50%_40%,black_0%,rgba(0,0,0,0.86)_38%,rgba(0,0,0,0.2)_66%,transparent_100%)] [-webkit-mask-image:radial-gradient(70%_58%_at_50%_40%,black_0%,rgba(0,0,0,0.86)_38%,rgba(0,0,0,0.2)_66%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.09] [background-image:radial-gradient(rgba(255,208,220,0.86)_0.58px,transparent_0.58px)] [background-size:4.5px_4.5px] [mask-image:radial-gradient(58%_52%_at_32%_70%,black_0%,rgba(0,0,0,0.66)_56%,transparent_100%)] [-webkit-mask-image:radial-gradient(58%_52%_at_32%_70%,black_0%,rgba(0,0,0,0.66)_56%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(130%_110%_at_50%_50%,rgba(0,0,0,0)_42%,rgba(4,1,2,0.94)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(64%_42%_at_8%_0%,rgba(4,1,3,0.7),transparent_74%),radial-gradient(58%_38%_at_95%_3%,rgba(4,1,3,0.68),transparent_74%),radial-gradient(60%_46%_at_96%_96%,rgba(4,1,3,0.8),transparent_76%),radial-gradient(66%_46%_at_6%_96%,rgba(4,1,3,0.78),transparent_76%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.52)_0%,rgba(0,0,0,0.12)_28%,rgba(0,0,0,0.12)_72%,rgba(0,0,0,0.52)_100%)]" />
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-[linear-gradient(90deg,rgba(255,144,170,0),rgba(255,198,210,0.9),rgba(255,144,170,0))]" />
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(255,244,248,0.08),rgba(255,244,248,0))]" />

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="relative border-b border-[#ff9ab0]/18 pb-14 text-center sm:pb-16">
          <div className="pointer-events-none absolute left-1/2 top-7 h-28 w-[min(92%,760px)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(223,46,76,0.38),rgba(223,46,76,0)_72%)] blur-2xl" />
          <h2
            className="relative mx-auto max-w-[23ch] text-[clamp(2rem,4vw,3.35rem)] font-semibold leading-[1.06] text-[#fff8fa]"
            style={{ fontFamily: "var(--font-cinzel), serif" }}
          >
            Hai bisogno di assistenza tecnica a domicilio a Roma?
          </h2>
          <p className="relative mx-auto mt-5 max-w-[72ch] text-[1rem] leading-relaxed text-[#f4d6de]/90 sm:text-[1.08rem]">
            Intervengo rapidamente su PC, notebook, stampanti, Wi-Fi e rete, anche la sera e nel weekend.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="tel:+393421872127"
              className="group relative inline-flex min-w-[220px] items-center justify-center overflow-hidden rounded-[14px] border border-[#ffc2d0]/66 bg-[linear-gradient(156deg,#c72343_0%,#770f24_100%)] px-7 py-3.5 text-sm font-semibold tracking-[0.02em] text-[#fff8fa] shadow-[0_18px_36px_rgba(176,30,56,0.46),inset_0_1px_0_rgba(255,235,241,0.34)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ffe4ea]/86 hover:shadow-[0_24px_48px_rgba(214,42,72,0.58),0_0_34px_rgba(238,66,98,0.38)]"
            >
              <span className="pointer-events-none absolute inset-x-6 top-[1px] h-px bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,247,249,0.95),rgba(255,255,255,0))]" />
              <span className="relative">Contattaci ora</span>
            </a>
            <a
              href="https://wa.me/393421872127"
              className="group relative inline-flex min-w-[220px] items-center justify-center gap-2 overflow-hidden rounded-[14px] border border-[#ff9cb5]/34 bg-[linear-gradient(156deg,rgba(45,12,22,0.92),rgba(19,7,12,0.96))] px-7 py-3.5 text-sm font-semibold tracking-[0.02em] text-[#ffe6ed] shadow-[0_14px_28px_rgba(0,0,0,0.46),inset_0_1px_0_rgba(255,229,236,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ffc8d7]/58 hover:text-[#fff7fa] hover:shadow-[0_20px_36px_rgba(148,24,44,0.46),0_0_28px_rgba(220,52,84,0.3)]"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#6ce79c]/44 bg-[#26d267]/22 text-[#9dffbf]">
                <WhatsAppIcon className="h-3.5 w-3.5" />
              </span>
              <span>Scrivici su WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="grid gap-10 py-12 sm:py-14 lg:grid-cols-[1.35fr_repeat(3,minmax(0,1fr))] lg:gap-8">
          <div className="max-w-[46ch]">
            <h3 className="text-[1.42rem] font-semibold tracking-[-0.01em] text-[#fff6f9]" style={{ fontFamily: "var(--font-cinzel), serif" }}>
              Assistenza Roma PC
            </h3>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-[#f0d2da]/88">
              Assistenza informatica a domicilio a Roma per computer, notebook, rete Wi-Fi, stampanti e supporto tecnico rapido.
            </p>
            <p className="mt-5 inline-flex rounded-[12px] border border-[#ff9eb5]/26 bg-[linear-gradient(150deg,rgba(108,18,35,0.46),rgba(46,10,19,0.34))] px-4 py-2 text-[0.82rem] font-medium text-[#ffdce4]/92 shadow-[0_10px_22px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,233,238,0.16)]">
              7 giorni su 7 {"\u00B7"} A domicilio {"\u00B7"} Roma e dintorni {"\u00B7"} Risposta rapida
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#ffcfda]">Servizi</h4>
            <ul className="mt-4 space-y-2.5">
              {footerServices.map((service) => (
                <li key={service}>
                  <a href="#servizi" className="group inline-flex items-center gap-2 text-[0.94rem] text-[#f8dde4]/82 transition-colors duration-300 hover:text-[#fff5f8]">
                    <span className="h-[5px] w-[5px] rounded-full bg-[#ff5d82]/76 shadow-[0_0_12px_rgba(255,93,130,0.56)] transition-transform duration-300 group-hover:scale-125" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#ffcfda]">Zone</h4>
            <ul className="mt-4 space-y-2.5">
              {footerZones.map((zone) => (
                <li key={zone}>
                  <a href="#zone-coperte" className="group inline-flex items-center gap-2 text-[0.94rem] text-[#f8dde4]/82 transition-colors duration-300 hover:text-[#fff5f8]">
                    <span className="h-[5px] w-[5px] rounded-full bg-[#ff5d82]/68 shadow-[0_0_12px_rgba(255,93,130,0.5)] transition-transform duration-300 group-hover:scale-125" />
                    <span>{zone}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#ffcfda]">Contatti</h4>
            <ul className="mt-4 space-y-2.5 text-[0.94rem] text-[#f8dde4]/84">
              <li>
                <a href="tel:+393421872127" className="group inline-flex items-center gap-2 transition-colors duration-300 hover:text-[#fff5f8]">
                  <PhoneIcon className="h-4 w-4 text-[#ff88a5]/86 transition-transform duration-300 group-hover:-translate-y-px" />
                  <span>3421872127</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/393421872127" className="group inline-flex items-center gap-2 transition-colors duration-300 hover:text-[#fff5f8]">
                  <WhatsAppIcon className="h-4 w-4 text-[#ff88a5]/86 transition-transform duration-300 group-hover:-translate-y-px" />
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

      <div className="relative z-10 border-t border-[#ff95ab]/14 bg-[linear-gradient(180deg,rgba(11,4,7,0.92),rgba(8,3,5,0.96))]">
        <div className="mx-auto flex w-full max-w-[1320px] flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 py-3 text-[0.74rem] text-[#f2d0d9]/72 sm:px-6 lg:justify-between lg:px-8">
          <span>&copy; Assistenza Roma PC</span>
          <span className="hidden h-3 w-px bg-[#ff9db4]/26 lg:inline-block" />
          <a href="#privacy" className="transition-colors duration-300 hover:text-[#fff2f6]">
            Privacy Policy
          </a>
          <span className="hidden h-3 w-px bg-[#ff9db4]/26 lg:inline-block" />
          <a href="#cookie" className="transition-colors duration-300 hover:text-[#fff2f6]">
            Cookie Policy
          </a>
          <span className="hidden h-3 w-px bg-[#ff9db4]/26 lg:inline-block" />
          <span>Assistenza tecnica a domicilio in tutta Roma</span>
        </div>
      </div>
    </footer>
  );
}

