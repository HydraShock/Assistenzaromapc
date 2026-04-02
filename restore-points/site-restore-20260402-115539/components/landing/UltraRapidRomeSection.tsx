"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircleMore } from "lucide-react";
import { useSyncExternalStore } from "react";

import { cn } from "@/lib/utils";
import romaGiriBackground from "@/ROMAGIRI.png";
import cazzo2Background from "@/cazzo2.png";

const assistanceChips = ["7 giorni su 7", "Anche la sera", "Weekend", "PC e stampanti", "Reti Wi-Fi", "A domicilio"];

const trustItems = ["7 giorni su 7", "Interventi a domicilio", "Roma e dintorni", "Risposta rapida"];

const floatingPanels = [
  {
    title: "A domicilio in tutta Roma",
    points: ["Interventi rapidi", "Copertura ampia", "Disponibilita flessibile"],
    desktopLayout: "lg:absolute lg:left-0 lg:top-0 lg:w-[76%] lg:-rotate-[0.6deg]",
  },
  {
    title: "Supporto immediato",
    points: ["PC lenti", "Wi-Fi instabile", "Stampanti bloccate"],
    desktopLayout: "lg:absolute lg:right-0 lg:top-[102px] lg:w-[72%] lg:rotate-[0.8deg]",
  },
  {
    title: "Servizio chiaro e organizzato",
    points: ["Risposta rapida", "Intervento mirato", "Comunicazione semplice"],
    desktopLayout: "lg:absolute lg:bottom-0 lg:left-[8%] lg:w-[78%] lg:-rotate-[0.4deg]",
  },
] as const;

const panelDepthStyles = [
  "lg:z-30 lg:backdrop-blur-[14px] lg:shadow-[0_38px_78px_rgba(2,0,0,0.62),0_0_42px_rgba(234,48,74,0.3),inset_0_1px_0_rgba(255,255,255,0.16)]",
  "lg:z-10 lg:translate-y-3 lg:scale-[0.976] lg:backdrop-blur-[8px] lg:shadow-[0_26px_56px_rgba(1,0,0,0.78),0_0_10px_rgba(128,16,34,0.08),inset_0_1px_0_rgba(255,255,255,0.04)]",
  "lg:z-20 lg:backdrop-blur-[11px] lg:shadow-[0_30px_62px_rgba(3,0,0,0.62),0_0_24px_rgba(210,34,58,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]",
] as const;

const panelToneStyles = [
  "border-[#ffbcc6]/56 bg-[linear-gradient(162deg,rgba(52,12,22,0.9)_0%,rgba(92,22,36,0.84)_56%,rgba(24,7,13,0.94)_100%)]",
  "border-[#874656]/18 bg-[linear-gradient(162deg,rgba(7,2,5,0.96)_0%,rgba(12,4,8,0.9)_56%,rgba(5,2,4,0.98)_100%)]",
  "border-[#d78a99]/30 bg-[linear-gradient(162deg,rgba(20,6,11,0.9)_0%,rgba(40,10,18,0.8)_56%,rgba(12,3,8,0.94)_100%)]",
] as const;

const panelTitleStyles = ["text-[#fff8fa]", "text-[#d7bcc4]", "text-[#fff0f4]"] as const;
const panelTextStyles = ["text-[#ffeaf0]/94", "text-[#cfb9c1]/78", "text-[#fbe2e8]/92"] as const;

export function UltraRapidRomeSection() {
  const reducedMotion = useReducedMotion();
  const hasHydrated = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const shouldReduceMotion = hasHydrated && reducedMotion === true;

  return (
    <section className="relative overflow-hidden bg-[#050102] py-14 md:py-18 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={romaGiriBackground}
          alt=""
          fill
          quality={100}
          sizes="100vw"
          className="object-cover object-center saturate-[1.32] contrast-[1.06]"
          aria-hidden="true"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,62,62,0.24),rgba(24,0,0,0.42)_46%,rgba(7,0,1,0.82)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,0,1,0.2)_0%,rgba(7,0,1,0.5)_60%,rgba(7,0,1,0.8)_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-14 [background-image:radial-gradient(rgba(255,204,214,0.72)_0.52px,transparent_0.52px)] [background-size:3px_3px] [mask-image:radial-gradient(circle_at_50%_48%,transparent_36%,black_76%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-18 [background-image:radial-gradient(rgba(255,172,186,0.68)_0.5px,transparent_0.5px)] [background-size:4px_4px] [mask-image:radial-gradient(circle_at_50%_48%,transparent_0%,transparent_40%,black_78%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(130%_90%_at_50%_52%,rgba(0,0,0,0)_56%,rgba(26,2,9,0.74)_100%)]" />

      <div className="relative mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 isolate overflow-hidden rounded-[34px] border border-[rgba(255,92,136,0.72)] shadow-[0_0_0_1px_rgba(255,112,152,0.34),0_0_44px_rgba(255,32,92,0.4),0_36px_92px_rgba(0,0,0,0.76)]">
          <div className="pointer-events-none absolute -inset-x-8 -top-10 z-0 h-[96px] bg-[radial-gradient(ellipse_at_center,rgba(255,56,96,0.52)_0%,rgba(255,56,96,0.18)_42%,rgba(255,56,96,0)_76%)] blur-2xl" />
          <div className="pointer-events-none absolute inset-0 z-0">
            <Image
              src={cazzo2Background}
              alt=""
              fill
              quality={100}
              sizes="(max-width: 1024px) 100vw, 1320px"
              className="object-cover object-center saturate-[1.06] contrast-[1.03]"
              aria-hidden="true"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(156deg,rgba(10,2,6,0.42)_0%,rgba(8,2,5,0.48)_44%,rgba(5,1,3,0.62)_100%)]" />
          <div className="pointer-events-none absolute inset-0 z-[1] opacity-[0.05] [background-image:radial-gradient(rgba(255,220,228,0.9)_0.58px,transparent_0.58px)] [background-size:4.5px_4.5px]" />
          <div className="pointer-events-none absolute inset-0 z-[1] opacity-[0.18] [background-image:radial-gradient(rgba(255,232,238,0.98)_0.62px,transparent_0.62px)] [background-size:4px_4px] [mask-image:radial-gradient(72%_66%_at_31%_40%,black_0%,rgba(0,0,0,0.88)_34%,rgba(0,0,0,0.28)_60%,transparent_100%)] [-webkit-mask-image:radial-gradient(72%_66%_at_31%_40%,black_0%,rgba(0,0,0,0.88)_34%,rgba(0,0,0,0.28)_60%,transparent_100%)]" />
          <div className="pointer-events-none absolute inset-0 z-[1] opacity-[0.08] [background-image:radial-gradient(rgba(255,220,228,0.9)_0.58px,transparent_0.58px)] [background-size:4px_4px] [mask-image:radial-gradient(56%_50%_at_30%_74%,black_0%,rgba(0,0,0,0.66)_52%,transparent_100%)] [-webkit-mask-image:radial-gradient(56%_50%_at_30%_74%,black_0%,rgba(0,0,0,0.66)_52%,transparent_100%)]" />

          <div className="pointer-events-none absolute left-[32%] top-[34%] z-[2] h-[364px] w-[452px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(248,52,80,0.74)_0%,rgba(206,34,58,0.42)_32%,rgba(82,16,30,0.16)_58%,rgba(26,7,12,0)_82%)] blur-3xl" />
          <div className="pointer-events-none absolute left-[31%] top-[33%] z-[2] h-[82px] w-[82px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,126,146,0.5)_0%,rgba(235,62,92,0.3)_42%,rgba(186,28,52,0)_76%)] blur-[6px]" />
          <div className="pointer-events-none absolute left-[31%] top-[78%] z-[2] h-[148px] w-[286px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(196,28,49,0.2),rgba(196,28,49,0)_74%)] blur-2xl" />
          <div className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(112deg,rgba(9,2,5,0.2)_0%,rgba(7,2,4,0.3)_42%,rgba(5,1,3,0.4)_72%,rgba(4,1,3,0.5)_100%)]" />
          <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(90%_86%_at_34%_76%,rgba(8,2,5,0.08),rgba(5,1,3,0.8))]" />
          <div className="pointer-events-none absolute right-0 top-0 z-[2] h-full w-[56%] bg-[linear-gradient(90deg,rgba(8,2,5,0.06)_0%,rgba(7,2,4,0.26)_38%,rgba(5,1,3,0.44)_100%)]" />
          <div className="pointer-events-none absolute inset-0 z-[2] hidden bg-[radial-gradient(74%_88%_at_84%_48%,rgba(7,2,4,0.34),rgba(5,1,3,0)_74%)] lg:block" />
          <div className="pointer-events-none absolute inset-0 z-[3] bg-[radial-gradient(138%_114%_at_50%_50%,rgba(0,0,0,0)_40%,rgba(5,1,3,0.94)_100%)]" />
          <div className="pointer-events-none absolute inset-0 z-[3] bg-[radial-gradient(64%_42%_at_8%_0%,rgba(4,1,3,0.72),transparent_74%),radial-gradient(58%_38%_at_95%_3%,rgba(4,1,3,0.7),transparent_74%),radial-gradient(60%_46%_at_96%_96%,rgba(4,1,3,0.82),transparent_76%),radial-gradient(66%_46%_at_6%_96%,rgba(4,1,3,0.8),transparent_76%)]" />
          <div className="pointer-events-none absolute -left-[17%] top-[3%] z-[4] h-[48%] w-[58%] rotate-[9deg] bg-[linear-gradient(120deg,rgba(255,76,104,0)_0%,rgba(255,76,104,0.06)_44%,rgba(255,76,104,0)_100%)] blur-[18px]" />
          <div className="pointer-events-none absolute -right-[10%] top-[9%] z-[4] h-[34%] w-[40%] -rotate-[11deg] bg-[linear-gradient(118deg,rgba(255,72,98,0)_0%,rgba(255,72,98,0.05)_48%,rgba(255,72,98,0)_100%)] blur-[20px]" />
          <div className="pointer-events-none absolute inset-0 z-[5] rounded-[inherit] border border-[rgba(255,118,158,0.34)] [box-shadow:inset_0_1px_0_rgba(255,176,204,0.24),0_0_28px_rgba(255,32,92,0.2)]" />
          <div className="pointer-events-none absolute inset-x-[4%] top-[1px] z-[5] h-px bg-[linear-gradient(90deg,rgba(255,108,146,0)_0%,rgba(255,108,146,0.94)_50%,rgba(255,108,146,0)_100%)]" />
          <div className="pointer-events-none absolute left-[1px] top-[12%] z-[5] h-[42%] w-px bg-[linear-gradient(180deg,rgba(255,104,142,0),rgba(255,104,142,0.86),rgba(255,104,142,0))]" />

          <div className="relative z-10 px-5 py-9 sm:px-8 sm:py-11 lg:px-12 lg:py-14">
            <div className="relative grid items-start gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-14">
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative max-w-[680px] lg:pt-2"
              >
                <div className="pointer-events-none absolute -left-10 top-[4px] h-[296px] w-[414px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(248,50,78,0.66)_0%,rgba(196,30,54,0.3)_38%,rgba(58,12,22,0)_76%)] blur-3xl" />
                <div className="pointer-events-none absolute left-[30%] top-[28%] h-[58px] w-[58px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,132,152,0.62)_0%,rgba(244,62,92,0.28)_44%,rgba(240,60,90,0)_78%)] blur-[5px]" />

                <span className="inline-flex items-center rounded-full border border-[#ff8fa0]/38 bg-[linear-gradient(150deg,rgba(92,16,28,0.58),rgba(46,9,16,0.72))] px-3.5 py-1.5 text-[0.72rem] font-semibold tracking-[0.2em] text-[#ffe6eb] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                  OFFRIAMO
                </span>

                <h2 className="mt-7 text-balance text-[clamp(2.35rem,6.8vw,5.25rem)] font-extrabold leading-[0.9] tracking-[-0.03em] text-[#fff7f8] drop-shadow-[0_0_36px_rgba(255,72,98,0.42)]">
                  Assistenza
                  <br />
                  Ultra-Rapida in
                  <br />
                  tutta Roma.
                </h2>

                <p className="mt-8 max-w-[60ch] text-[clamp(1rem,1.25vw,1.14rem)] font-medium leading-[1.66] text-[#ffe4ea]/94">
                  Riparazione PC e assistenza informatica a domicilio a Roma, disponibile 7 giorni su 7, anche la sera e
                  nei weekend. Offriamo interventi rapidi su PC, stampanti e reti Wi-Fi, garantendo supporto immediato
                  quando ne hai davvero bisogno.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  {assistanceChips.map((chip) => (
                    <Link
                      key={chip}
                      href="#prenota-assistenza"
                      className="group inline-flex items-center rounded-[12px] border border-[#ffacb8]/24 bg-[linear-gradient(160deg,rgba(58,11,19,0.58),rgba(22,5,10,0.76))] px-3.5 py-1.5 text-[0.78rem] font-semibold tracking-[0.02em] text-[#ffe8ed]/90 shadow-[0_10px_22px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-250 hover:-translate-y-[1px] hover:border-[#ffc1cb]/44 hover:bg-[linear-gradient(160deg,rgba(68,13,22,0.66),rgba(24,6,11,0.8))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffacb8]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#120307]"
                    >
                      <span className="pointer-events-none mr-2 h-[5px] w-[5px] rounded-full bg-[#ff7086]/72 opacity-0 shadow-[0_0_8px_rgba(255,92,116,0.7)] transition-opacity duration-250 group-hover:opacity-100" />
                      {chip}
                    </Link>
                  ))}
                </div>

                <div className="relative mt-11 flex flex-wrap items-center gap-4">
                  <div className="pointer-events-none absolute -left-12 top-[52%] h-24 w-48 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,74,96,0.42),rgba(255,74,96,0)_72%)] blur-2xl" />
                  <div className="pointer-events-none absolute left-[10%] top-[97%] h-12 w-[58%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(132,16,36,0.82),rgba(132,16,36,0)_74%)] blur-lg" />

                  <div className="group relative">
                    <div className="pointer-events-none absolute -inset-x-10 -inset-y-6 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(246,42,70,0.38),rgba(246,42,70,0)_74%)] blur-2xl" />
                    <div className="pointer-events-none absolute left-1/2 top-[104%] h-7 w-[76%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(116,14,33,0.82),rgba(116,14,33,0)_74%)] blur-md transition-all duration-300 group-hover:opacity-100" />
                    <Link
                      href="#prenota-assistenza"
                      className="group relative inline-flex min-h-[54px] items-center justify-center overflow-hidden rounded-[15px] border border-[#ff9dad]/62 px-7 text-[1.02rem] font-semibold text-white shadow-[0_22px_44px_rgba(112,12,30,0.62),0_0_28px_rgba(240,40,68,0.42)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_58px_rgba(112,12,30,0.7),0_0_40px_rgba(248,52,80,0.58)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff9fb0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#120307] active:translate-y-[1px]"
                    >
                      <span className="absolute inset-0 bg-[linear-gradient(150deg,#ff5369_0%,#e11a3a_42%,#860a1d_100%)]" />
                      <span className="absolute inset-[1px] rounded-[14px] bg-[linear-gradient(150deg,#ff4a61_0%,#d41435_48%,#780a18_100%)]" />
                      <span className="pointer-events-none absolute inset-x-[14%] top-[2px] h-[36%] rounded-full bg-[linear-gradient(180deg,rgba(255,142,160,0.52),rgba(255,142,160,0)_100%)]" />
                      <span className="relative z-10 inline-flex items-center gap-2">
                        Contattaci ora
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  </div>

                  <Link
                    href="https://wa.me/393421872127"
                    className="inline-flex min-h-[50px] items-center justify-center rounded-[14px] border border-[#ff9ca9]/38 bg-[linear-gradient(155deg,rgba(58,10,18,0.58),rgba(23,5,10,0.76))] px-6 text-[0.95rem] font-semibold text-[#ffe6eb]/92 shadow-[0_12px_24px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ffb3be]/56 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff98a7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#110307]"
                  >
                    <MessageCircleMore className="mr-2 h-4 w-4" />
                    Scrivici su WhatsApp
                  </Link>
                </div>
              </motion.div>

              <div className="relative lg:min-h-[498px]">
                <div className="pointer-events-none absolute inset-y-[5%] right-[1%] hidden w-[88%] rounded-[28px] bg-[linear-gradient(180deg,rgba(8,2,5,0.38),rgba(8,2,5,0.64))] [mask-image:linear-gradient(180deg,transparent_0%,black_16%,black_84%,transparent_100%)] lg:block" />
                <div className="pointer-events-none absolute left-[14%] top-[22%] hidden h-20 w-[72%] rounded-full bg-[linear-gradient(90deg,rgba(255,82,102,0),rgba(255,82,102,0.24),rgba(255,82,102,0))] blur-xl lg:block" />
                <div className="pointer-events-none absolute left-[18%] top-[48%] hidden h-20 w-[64%] rounded-full bg-[linear-gradient(90deg,rgba(255,88,108,0),rgba(255,88,108,0.2),rgba(255,88,108,0))] blur-xl lg:block" />
                <div className="grid gap-4 sm:grid-cols-2 lg:block">
                  {floatingPanels.map((panel, index) => (
                    <motion.article
                      key={panel.title}
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 0.55, delay: 0.09 * index, ease: [0.22, 1, 0.36, 1] }}
                      animate={shouldReduceMotion ? undefined : { y: [0, -6 + (index % 2), 0] }}
                      whileHover={{ y: -6 }}
                      className={cn(
                        "group relative isolate overflow-hidden rounded-[24px] border p-5 transition-all duration-300 sm:col-span-2 lg:col-span-1",
                        index === 0 &&
                          "shadow-[0_24px_52px_rgba(0,0,0,0.54),0_0_34px_rgba(232,42,68,0.3),inset_0_1px_0_rgba(255,255,255,0.12)] hover:border-[#ffacba]/62 hover:shadow-[0_30px_62px_rgba(0,0,0,0.58),0_0_46px_rgba(242,50,76,0.4),inset_0_1px_0_rgba(255,255,255,0.14)]",
                        index === 1 &&
                          "shadow-[0_22px_48px_rgba(0,0,0,0.72),0_0_10px_rgba(136,16,34,0.08),inset_0_1px_0_rgba(255,255,255,0.04)] hover:border-[#a45c6c]/28 hover:shadow-[0_24px_50px_rgba(0,0,0,0.74),0_0_14px_rgba(150,20,40,0.1),inset_0_1px_0_rgba(255,255,255,0.05)]",
                        index === 2 &&
                          "shadow-[0_22px_48px_rgba(0,0,0,0.52),0_0_20px_rgba(214,34,60,0.16),inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-[#ff9fae]/52 hover:shadow-[0_28px_58px_rgba(0,0,0,0.58),0_0_30px_rgba(228,42,68,0.24),inset_0_1px_0_rgba(255,255,255,0.12)]",
                        panelToneStyles[index],
                        panelDepthStyles[index],
                        panel.desktopLayout,
                      )}
                    >
                      <div
                        className={cn(
                          "pointer-events-none absolute -inset-3 rounded-[28px] bg-[radial-gradient(ellipse_at_center,rgba(234,42,68,0.22),rgba(234,42,68,0)_74%)] blur-xl transition-opacity duration-300",
                          index === 0 && "opacity-[0.72] group-hover:opacity-[0.98]",
                          index === 1 && "opacity-[0.16] group-hover:opacity-[0.3]",
                          index === 2 && "opacity-[0.47] group-hover:opacity-[0.74]",
                        )}
                      />
                      <div
                        className={cn(
                          "pointer-events-none absolute inset-0 rounded-[inherit] border transition-colors duration-300",
                          index === 0 && "border-[#ff95a5]/26 group-hover:border-[#ffafbd]/62",
                          index === 1 && "border-[#ff95a5]/0 group-hover:border-[#a45b6a]/24",
                          index === 2 && "border-[#ff95a5]/0 group-hover:border-[#ffa7b6]/48",
                        )}
                      />
                      <div
                        className={cn(
                          "pointer-events-none absolute inset-[1px] rounded-[22px] transition-opacity duration-300",
                          index === 0 &&
                            "[box-shadow:inset_0_0_34px_rgba(252,74,102,0.22)] opacity-[0.52] group-hover:opacity-[0.78]",
                          index === 1 &&
                            "[box-shadow:inset_0_0_22px_rgba(150,20,40,0.07)] opacity-[0.22] group-hover:opacity-[0.34]",
                          index === 2 &&
                            "[box-shadow:inset_0_0_26px_rgba(234,56,84,0.14)] opacity-[0.34] group-hover:opacity-[0.62]",
                        )}
                      />
                      <div
                        className={cn(
                          "pointer-events-none absolute inset-0",
                          index === 0 && "bg-[linear-gradient(170deg,rgba(15,4,9,0.4),rgba(10,2,6,0.46))]",
                          index === 1 && "bg-[linear-gradient(170deg,rgba(7,2,4,0.58),rgba(6,1,4,0.64))]",
                          index === 2 && "bg-[linear-gradient(170deg,rgba(10,3,7,0.38),rgba(7,2,4,0.46))]",
                        )}
                      />
                      <div
                        className={cn(
                          "pointer-events-none absolute inset-0",
                          index === 0 &&
                            "bg-[radial-gradient(circle_at_84%_18%,rgba(255,98,120,0.32),transparent_42%),radial-gradient(circle_at_18%_90%,rgba(176,20,42,0.2),transparent_46%)]",
                          index === 1 &&
                            "bg-[radial-gradient(circle_at_84%_18%,rgba(164,34,54,0.08),transparent_42%),radial-gradient(circle_at_18%_90%,rgba(100,14,28,0.1),transparent_46%)]",
                          index === 2 &&
                            "bg-[radial-gradient(circle_at_84%_18%,rgba(248,92,114,0.16),transparent_42%),radial-gradient(circle_at_18%_90%,rgba(156,18,36,0.14),transparent_46%)]",
                        )}
                      />
                      <div
                        className={cn(
                          "pointer-events-none absolute inset-0 [background:conic-gradient(from_206deg_at_86%_18%,rgba(255,82,104,0.22),transparent_38%,transparent_100%)] [mask-image:radial-gradient(circle_at_82%_22%,black_26%,transparent_78%)]",
                          index === 0 && "opacity-30",
                          index === 1 && "opacity-[0.12]",
                          index === 2 && "opacity-[0.22]",
                        )}
                      />
                      <div
                        className={cn(
                          "pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(255,218,224,0.62)_0.6px,transparent_0.6px)] [background-size:8px_8px] [mask-image:linear-gradient(125deg,transparent_0%,black_34%,transparent_100%)]",
                          index === 0 && "opacity-[0.16]",
                          index === 1 && "opacity-[0.09]",
                          index === 2 && "opacity-[0.12]",
                        )}
                      />
                      <span className="pointer-events-none absolute bottom-5 left-[2px] top-5 w-[1px] bg-[linear-gradient(180deg,rgba(255,173,184,0),rgba(255,153,167,0.58),rgba(255,173,184,0))] opacity-[0.45] transition-opacity duration-300 group-hover:opacity-[0.9]" />
                      <span className="pointer-events-none absolute bottom-5 right-[2px] top-5 w-[1px] bg-[linear-gradient(180deg,rgba(255,173,184,0),rgba(255,138,152,0.54),rgba(255,173,184,0))] opacity-[0.32] transition-opacity duration-300 group-hover:opacity-[0.75]" />

                      <div className="relative z-10">
                        <h3 className={cn("text-[1.16rem] font-semibold tracking-[-0.01em]", panelTitleStyles[index])}>
                          {panel.title}
                        </h3>

                        <ul className="mt-4 space-y-2.5">
                          {panel.points.map((point) => (
                            <li key={point} className={cn("flex items-start gap-2.5 text-[0.92rem] leading-relaxed", panelTextStyles[index])}>
                              <span
                                className={cn(
                                  "mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full",
                                  index === 0 && "bg-[#ff6e84] shadow-[0_0_12px_rgba(255,92,116,0.78)]",
                                  index === 1 && "bg-[#ff637d]/86 shadow-[0_0_10px_rgba(255,84,108,0.5)]",
                                  index === 2 && "bg-[#ff6b83]/90 shadow-[0_0_11px_rgba(255,90,114,0.62)]",
                                )}
                              />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.article>
                  ))}
                </div>

                <div className="pointer-events-none absolute -left-8 top-[16%] hidden h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(255,62,84,0.32),rgba(255,62,84,0)_72%)] blur-2xl lg:block" />
                <div className="pointer-events-none absolute -right-10 bottom-[18%] hidden h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(255,52,76,0.28),rgba(255,52,76,0)_72%)] blur-2xl lg:block" />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.55 }}
              transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative mt-11 overflow-hidden rounded-[12px] border border-[#ff8b9d]/26 bg-[linear-gradient(160deg,rgba(34,8,14,0.66),rgba(14,4,8,0.84))] px-3 py-2 shadow-[0_12px_26px_rgba(0,0,0,0.36),0_0_16px_rgba(214,34,60,0.12),inset_0_1px_0_rgba(255,255,255,0.07)] sm:px-4"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_120%,rgba(190,22,44,0.2),transparent_34%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,220,228,0.1)_0%,rgba(255,220,228,0)_44%)]" />
              <ul className="relative z-10 flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1.5 sm:justify-between">
                {trustItems.map((item, index) => (
                  <li key={item} className="inline-flex items-center gap-1.5 text-[0.76rem] font-semibold tracking-[0.075em] text-[#ffe6ec]/94 sm:text-[0.8rem]">
                    {index > 0 && (
                      <span
                        aria-hidden="true"
                        className="hidden h-3 w-px bg-[linear-gradient(180deg,rgba(255,168,180,0),rgba(255,132,146,0.42),rgba(255,168,180,0))] sm:block"
                      />
                    )}
                    <span className="h-[4px] w-[4px] rounded-full bg-[#ff6b80]/92 shadow-[0_0_8px_rgba(255,98,122,0.56)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
