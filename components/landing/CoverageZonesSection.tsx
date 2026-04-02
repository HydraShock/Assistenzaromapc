"use client";

import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import akaObject from "@/aka.webp";
import { cn } from "@/lib/utils";

const premiumZoneGroups = [
  {
    title: "CENTRO E ZONE STORICHE",
    zones: "Prati, Trastevere, Monti, Colosseo, Piazza di Spagna, Campo de' Fiori.",
  },
  {
    title: "ZONE RESIDENZIALI E COMMERCIALI",
    zones: "Nomentano, Trieste, Eur, Appio, Flaminio, Parioli, Monteverde, Garbatella.",
  },
  {
    title: "ALTRI QUARTIERI SERVITI",
    zones: "Tiburtina, Pigneto, San Lorenzo, Ostia, Marconi, Laurentina, Bufalotta e molte altre.",
  },
];

const legacyTopBadges = ["Intervento in giornata", "Copertura completa Roma", "7 giorni su 7"] as const;

type LegacyCoverageCard = {
  id: string;
  badge: string;
  title: string;
  points: readonly string[];
  desktopClass: string;
  href: string;
  featured?: boolean;
};

const legacyCoverageCards: readonly LegacyCoverageCard[] = [
  {
    id: "centro",
    badge: "ROMA CENTRO STORICO",
    title: "Prati • Trastevere • Monti",
    points: ["Campo de' Fiori", "Piazza Navona", "Colosseo"],
    desktopClass: "left-[4%] top-[8%] -rotate-[1.2deg] xl:left-[6%]",
    href: "/zone/roma-centro",
    featured: true,
  },
  {
    id: "nord",
    badge: "ROMA NORD",
    title: "Parioli • Trieste • Nomentano",
    points: ["Flaminio", "Talenti", "Bufalotta"],
    desktopClass: "left-[36%] top-[7%] rotate-[1deg]",
    href: "/zone/roma-nord",
  },
  {
    id: "nord-est",
    badge: "ROMA NORD EST",
    title: "Fidene • Labaro • Prima Porta",
    points: ["Conca d'Oro", "Giustiniana", "Vigna Clara"],
    desktopClass: "right-[4%] top-[8%] -rotate-[1deg] xl:right-[6%]",
    href: "/zone/roma-nord-est",
  },
  {
    id: "est",
    badge: "ROMA EST",
    title: "Tiburtina • Pietralata • Centocelle",
    points: ["Prenestina", "Pigneto", "Tor Bella Monaca"],
    desktopClass: "right-[8%] top-[36%] rotate-[0.8deg]",
    href: "/zone/roma-est",
  },
  {
    id: "sud-est",
    badge: "ROMA SUD EST",
    title: "Appio • Tuscolano • Cinecitta",
    points: ["Re di Roma", "Colli Albani", "Don Bosco"],
    desktopClass: "right-[4%] top-[63%] -rotate-[0.9deg]",
    href: "/zone/roma-sud-est",
  },
  {
    id: "sud",
    badge: "ROMA SUD",
    title: "Eur • Garbatella • Ostiense",
    points: ["Laurentina", "San Paolo", "Tor Marancia"],
    desktopClass: "left-[35%] top-[64%] rotate-[0.9deg]",
    href: "/zone/roma-sud",
  },
  {
    id: "ovest",
    badge: "ROMA OVEST",
    title: "Monteverde • Portuense • Magliana",
    points: ["Aurelio", "Boccea", "Balduina"],
    desktopClass: "left-[10%] top-[36%] -rotate-[1.1deg]",
    href: "/zone/roma-ovest",
  },
  {
    id: "litorale",
    badge: "LITORALE",
    title: "Ostia • Acilia • Infernetto",
    points: ["Casal Palocco", "Axa", "Dragona"],
    desktopClass: "left-[4%] top-[63%] rotate-[0.7deg] xl:left-[6%]",
    href: "/zone/roma-litorale",
  },
];

const legacyFullCoverageByArea = [
  {
    area: "Centro e semicentro",
    zones: ["Testaccio", "Esquilino", "San Giovanni", "Aventino"],
  },
  {
    area: "Roma Nord e Nord Est",
    zones: ["Monte Sacro", "Saxa Rubra", "Grottarossa", "Ponte Milvio"],
  },
  {
    area: "Roma Sud",
    zones: ["Cecchignola", "Ardeatino", "Marconi", "Porta San Paolo"],
  },
  {
    area: "Roma Est",
    zones: ["Casilina", "Tor Vergata", "Colli Aniene", "Casal Bertone"],
  },
  {
    area: "Roma Ovest e Litorale",
    zones: ["Ottavia", "Acilia Sud", "Vitinia", "Infernetto"],
  },
] as const;

const legacyZoneCloud = [
  "Piazza Bologna",
  "Flaminio",
  "San Lorenzo",
  "Ottavia",
  "Acilia Sud",
  "Vitinia",
  "Infernetto",
  "Monte Sacro",
] as const;

const legacyWavePaths = [
  "M100 110 C 260 45, 420 60, 560 105 S 850 170, 1020 130",
  "M120 245 C 260 190, 430 195, 560 240 S 850 320, 1020 275",
  "M100 420 C 250 380, 420 390, 560 430 S 840 500, 1010 455",
  "M210 80 C 150 165, 160 255, 220 345 S 290 485, 350 525",
  "M880 80 C 945 165, 945 265, 900 355 S 830 480, 730 525",
] as const;

const legacyLampNodes = [
  { left: "16%", size: 8, delay: 0.1, duration: 3.6 },
  { left: "50%", size: 10, delay: 0.4, duration: 3.9 },
  { left: "84%", size: 8, delay: 0.7, duration: 3.5 },
] as const;

const premiumParticles = [
  { top: "7%", left: "4%", size: 2.2, duration: 7.4, delay: 0.2, shiftX: 4, peakOpacity: 0.28 },
  { top: "16%", left: "10%", size: 1.8, duration: 6.8, delay: 0.7, shiftX: -3, peakOpacity: 0.24 },
  { top: "24%", left: "94%", size: 2.5, duration: 8.6, delay: 0.4, shiftX: -5, peakOpacity: 0.32 },
  { top: "32%", left: "88%", size: 2, duration: 7.2, delay: 1.1, shiftX: 3, peakOpacity: 0.26 },
  { top: "38%", left: "6%", size: 1.6, duration: 6.4, delay: 0.9, shiftX: 2, peakOpacity: 0.2 },
  { top: "49%", left: "92%", size: 2.1, duration: 8.8, delay: 1.3, shiftX: -4, peakOpacity: 0.29 },
  { top: "58%", left: "5%", size: 2.4, duration: 7.7, delay: 1.8, shiftX: 4, peakOpacity: 0.28 },
  { top: "68%", left: "95%", size: 1.9, duration: 7.1, delay: 0.6, shiftX: -3, peakOpacity: 0.22 },
  { top: "78%", left: "8%", size: 2.3, duration: 8, delay: 1.5, shiftX: 5, peakOpacity: 0.27 },
  { top: "88%", left: "93%", size: 2.6, duration: 9.1, delay: 0.3, shiftX: -6, peakOpacity: 0.31 },
  { top: "12%", left: "84%", size: 1.5, duration: 6.2, delay: 2, shiftX: 2, peakOpacity: 0.18 },
  { top: "84%", left: "14%", size: 1.7, duration: 6.9, delay: 2.2, shiftX: -2, peakOpacity: 0.21 },
] as const;

type CoverageZonesSectionProps = {
  backgroundImage?: StaticImageData | string;
  className?: string;
  compactText?: boolean;
  premium?: boolean;
};

export function CoverageZonesSection({
  backgroundImage = "/backgrounds/chat-zones-v2.webp",
  className,
  compactText = false,
  premium = false,
}: CoverageZonesSectionProps) {
  if (premium) {
    return <PremiumCoverageZonesSection backgroundImage={backgroundImage} className={className} />;
  }

  return (
    <LegacyCoverageZonesSection
      backgroundImage={backgroundImage}
      className={className}
      compactText={compactText}
    />
  );
}

type LegacyCoverageZonesSectionProps = {
  backgroundImage: StaticImageData | string;
  className?: string;
  compactText: boolean;
};

function LegacyCoverageZonesSection({
  backgroundImage,
  className,
  compactText,
}: LegacyCoverageZonesSectionProps) {
  return (
    <section
      id="zone-coperte"
      aria-labelledby="coverage-roma-heading"
      className={cn(
        "relative overflow-hidden bg-[#1a0002]",
        compactText ? "py-8 md:py-10 lg:py-12" : "py-10 md:py-12 lg:py-14",
        className,
      )}
    >
      <div className="pointer-events-none absolute left-1/2 top-0 z-[2] h-56 w-[86%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,42,42,0.72),rgba(255,42,42,0)_74%)] blur-[36px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-40 bg-[radial-gradient(68%_100%_at_50%_0%,rgba(255,34,34,0.78),rgba(255,34,34,0.18)_52%,rgba(255,34,34,0)_76%)]" />
      <div className="pointer-events-none absolute inset-x-[18%] top-10 z-[3] h-px bg-[linear-gradient(90deg,rgba(255,126,126,0),rgba(255,206,206,0.98),rgba(255,126,126,0))]" />
      <div className="pointer-events-none absolute left-[13%] top-[38px] z-[3] h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(255,72,72,0.46),rgba(255,72,72,0)_74%)] blur-xl" />
      <div className="pointer-events-none absolute right-[13%] top-[38px] z-[3] h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(255,72,72,0.46),rgba(255,72,72,0)_74%)] blur-xl" />
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          sizes="100vw"
          quality={75}
          className="object-cover object-center opacity-34 blur-[1px] scale-[1.02] saturate-[1.45]"
          priority={false}
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          sizes="100vw"
          quality={75}
          className="coverage-main-photo object-cover object-center saturate-[1.62] contrast-[1.2] brightness-[0.44]"
          priority={false}
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(98%_72%_at_50%_2%,rgba(255,30,30,0.74),rgba(184,8,8,0.66)_40%,rgba(20,0,0,0.9)_88%)]" />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(42,0,0,0.16)_0%,rgba(34,1,2,0.58)_40%,rgba(8,0,0,0.9)_100%)]" />
      <div
        className="pointer-events-none absolute inset-0 z-[2] opacity-[0.42] mix-blend-screen"
        style={{
          backgroundImage: "url('/backgrounds/hero-bg-red.webp')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "saturate(1.95) contrast(1.28) brightness(0.7)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_82%_20%,rgba(255,78,78,0.44),rgba(255,78,78,0)_44%),radial-gradient(circle_at_20%_76%,rgba(245,36,36,0.36),rgba(245,36,36,0)_48%)]" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(180deg,rgba(70,0,0,0.08),rgba(22,0,0,0.52)_44%,rgba(0,0,0,0.76)_100%)] mix-blend-multiply" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_58%,rgba(0,0,0,0.78)_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1260px] px-5 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.32 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-[940px] text-center"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <p className="inline-flex rounded-full border border-[rgba(255,162,162,0.52)] bg-[linear-gradient(145deg,rgba(64,4,8,0.78),rgba(28,2,5,0.72))] px-4 py-1 text-[0.62rem] font-semibold tracking-[0.17em] text-[rgba(255,224,224,0.96)] shadow-[0_0_12px_rgba(255,44,44,0.25)]">
            ZONE DI ROMA COPERTE
          </p>
          <h2
            id="coverage-roma-heading"
            className="mx-auto mt-3 max-w-[15ch] text-[clamp(1.75rem,4vw,3.25rem)] font-extrabold leading-[0.94] tracking-[-0.02em] text-[#fff5f5]"
            style={{ fontFamily: "var(--font-space)" }}
          >
            INTERVENGO IN TUTTE LE ZONE DI ROMA
          </h2>
          <p className="mx-auto mt-3 max-w-[62ch] text-[clamp(0.88rem,0.98vw,1rem)] leading-[1.5] text-[rgba(255,220,220,0.9)]">
            Dal centro alla periferia, organizzo interventi a domicilio rapidi e professionali in tutta Roma.
            Qui sotto trovi le aree principali con i quartieri sparsi in stile mappa premium.
          </p>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[0.66rem] font-semibold tracking-[0.12em] text-[rgba(255,220,220,0.9)] uppercase">
            {legacyTopBadges.map((badge, index) => (
              <span key={badge} className="inline-flex items-center">
                {index > 0 && <span className="mr-3 text-[rgba(255,138,138,0.82)]">•</span>}
                {badge}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.52, ease: "easeOut", delay: 0.04 }}
          className="relative mt-5 overflow-hidden rounded-[26px] border border-[rgba(255,112,112,0.84)] bg-[linear-gradient(166deg,rgba(22,1,4,0.98),rgba(10,0,2,0.98)_58%,rgba(4,0,0,0.99)_100%)] px-3 py-3 shadow-[0_0_0_1px_rgba(255,112,112,0.28),0_0_42px_rgba(255,34,34,0.36),0_20px_42px_rgba(0,0,0,0.62)] md:px-4 md:py-4 lg:px-6 lg:py-6"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <span className="pointer-events-none absolute inset-x-[16%] top-0 h-px bg-[linear-gradient(90deg,rgba(255,112,112,0),rgba(255,196,196,0.95),rgba(255,112,112,0))]" />
          <span className="pointer-events-none absolute left-1/2 top-0 z-[1] h-20 w-[56%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(255,64,64,0.46),rgba(255,64,64,0)_72%)] blur-xl" />
          <span className="pointer-events-none absolute -left-8 top-8 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(255,42,42,0.42),rgba(255,42,42,0)_74%)] blur-xl" />
          <span className="pointer-events-none absolute -right-8 bottom-9 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(255,42,42,0.34),rgba(255,42,42,0)_74%)] blur-xl" />

          <div className="relative hidden h-[540px] lg:block">
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 1120 540"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="coverage-wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,130,130,0.0)" />
                  <stop offset="35%" stopColor="rgba(255,148,148,0.66)" />
                  <stop offset="65%" stopColor="rgba(255,92,92,0.84)" />
                  <stop offset="100%" stopColor="rgba(255,110,110,0.0)" />
                </linearGradient>
              </defs>
              {legacyWavePaths.map((path, index) => (
                <motion.path
                  key={path}
                  d={path}
                  fill="none"
                  stroke="url(#coverage-wave-gradient)"
                  strokeLinecap="round"
                  strokeWidth={index % 2 === 0 ? 2.2 : 1.7}
                  strokeDasharray="10 14"
                  initial={{ opacity: 0.18 }}
                  animate={{ opacity: [0.18, 0.55, 0.18], strokeDashoffset: [0, -180] }}
                  transition={{
                    duration: 13 + index * 1.2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                    delay: index * 0.35,
                  }}
                />
              ))}
            </svg>

            {legacyLampNodes.map((lamp) => (
              <motion.span
                key={lamp.left}
                className="pointer-events-none absolute rounded-full"
                style={{
                  left: lamp.left,
                  top: "2.2%",
                  width: `${lamp.size}px`,
                  height: `${lamp.size}px`,
                  background: "rgba(255,188,188,0.95)",
                  boxShadow: "0 0 10px rgba(255,162,162,0.9), 0 0 26px rgba(255,54,54,0.58)",
                }}
                animate={{ opacity: [0.45, 1, 0.45], scale: [0.88, 1.28, 0.88] }}
                transition={{
                  duration: lamp.duration,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: lamp.delay,
                }}
              />
            ))}

            {[
              { left: "18%", top: "20%", delay: 0.2 },
              { left: "41%", top: "16%", delay: 0.7 },
              { left: "67%", top: "24%", delay: 1.1 },
              { left: "30%", top: "49%", delay: 0.4 },
              { left: "56%", top: "58%", delay: 0.9 },
              { left: "78%", top: "51%", delay: 1.3 },
            ].map((node) => (
              <motion.span
                key={`${node.left}-${node.top}`}
                className="pointer-events-none absolute h-2.5 w-2.5 rounded-full bg-[#ff9393]"
                style={{
                  left: node.left,
                  top: node.top,
                  boxShadow: "0 0 10px rgba(255,120,120,0.8), 0 0 24px rgba(255,50,50,0.55)",
                }}
                animate={{ scale: [0.85, 1.2, 0.85], opacity: [0.42, 0.95, 0.42] }}
                transition={{
                  duration: 3.8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: node.delay,
                }}
              />
            ))}

            {legacyCoverageCards.map((card, index) => (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.04 }}
                whileHover={{ y: -5, scale: 1.015, rotate: 0 }}
                className={cn(
                  "group absolute overflow-hidden rounded-[16px] border px-3.5 pb-3.5 pt-3.5 backdrop-blur-[2px]",
                  "border-[rgba(255,118,118,0.84)] bg-[radial-gradient(136%_130%_at_50%_0%,rgba(255,46,46,0.62),rgba(126,8,15,0.9)_44%,rgba(22,1,4,0.99)_100%)]",
                  "shadow-[0_0_18px_rgba(255,40,40,0.34),0_12px_22px_rgba(0,0,0,0.5)] transition-all duration-300",
                  card.featured ? "z-[3] w-[236px] [box-shadow:0_0_34px_rgba(255,54,54,0.56),0_16px_24px_rgba(0,0,0,0.56)]" : "z-[2] w-[206px]",
                  card.desktopClass,
                )}
              >
                <span className="pointer-events-none absolute inset-x-4 top-0 h-px bg-[linear-gradient(90deg,rgba(255,126,126,0),rgba(255,154,154,0.9),rgba(255,126,126,0))]" />
                <span className="pointer-events-none absolute -top-7 right-2 h-16 w-16 rounded-full bg-[radial-gradient(circle,rgba(255,86,86,0.52),rgba(255,86,86,0)_72%)] blur-lg transition-opacity duration-300 group-hover:opacity-100 opacity-80" />
                <p className="inline-flex rounded-full border border-[rgba(255,155,155,0.46)] bg-[rgba(39,2,5,0.62)] px-2.5 py-0.5 text-[0.6rem] font-semibold tracking-[0.09em] text-[rgba(255,225,225,0.92)]">
                  {card.badge}
                </p>
                <h3 className="mt-2 text-[clamp(1.03rem,1.18vw,1.22rem)] font-extrabold leading-[1.05] tracking-[-0.01em] text-[#fff8f8]">
                  {card.title}
                </h3>
                <div className="mt-2.5 flex flex-wrap gap-1">
                  {card.points.map((point) => (
                    <span
                      key={point}
                      className="rounded-full border border-[rgba(255,126,126,0.68)] bg-[rgba(255,26,26,0.24)] px-2 py-0.5 text-[0.64rem] font-semibold text-[rgba(255,236,236,0.98)]"
                    >
                      {point}
                    </span>
                  ))}
                </div>
                <Link
                  href={card.href}
                  className="mt-3 inline-flex items-center rounded-full border border-[rgba(255,138,138,0.66)] bg-[rgba(255,28,28,0.18)] px-2.5 py-1 text-[0.62rem] font-semibold text-[rgba(255,236,236,0.96)] transition hover:border-[rgba(255,174,174,0.9)] hover:bg-[rgba(255,44,44,0.28)]"
                >
                  Dettagli zona
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
            {legacyCoverageCards.map((card, index) => (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.36, ease: "easeOut", delay: index * 0.04 }}
                whileHover={{ y: -3 }}
                className={cn(
                  "relative overflow-hidden rounded-[16px] border px-3.5 pb-3.5 pt-3.5",
                  "border-[rgba(255,118,118,0.84)] bg-[radial-gradient(136%_130%_at_50%_0%,rgba(255,46,46,0.62),rgba(126,8,15,0.9)_44%,rgba(22,1,4,0.99)_100%)]",
                  card.featured ? "shadow-[0_0_24px_rgba(255,54,54,0.5),0_16px_28px_rgba(0,0,0,0.5)]" : "shadow-[0_0_16px_rgba(255,44,44,0.36),0_14px_26px_rgba(0,0,0,0.46)]",
                )}
              >
                <span className="pointer-events-none absolute inset-x-4 top-0 h-px bg-[linear-gradient(90deg,rgba(255,126,126,0),rgba(255,154,154,0.9),rgba(255,126,126,0))]" />
                <p className="inline-flex rounded-full border border-[rgba(255,155,155,0.46)] bg-[rgba(39,2,5,0.62)] px-2.5 py-0.5 text-[0.6rem] font-semibold tracking-[0.09em] text-[rgba(255,225,225,0.92)]">
                  {card.badge}
                </p>
                <h3 className="mt-2 text-[1.12rem] font-extrabold leading-[1.05] text-[#fff8f8]">{card.title}</h3>
                <div className="mt-2.5 flex flex-wrap gap-1">
                  {card.points.map((point) => (
                    <span
                      key={point}
                      className="rounded-full border border-[rgba(255,126,126,0.68)] bg-[rgba(255,26,26,0.24)] px-2 py-0.5 text-[0.66rem] font-semibold text-[rgba(255,236,236,0.98)]"
                    >
                      {point}
                    </span>
                  ))}
                </div>
                <Link
                  href={card.href}
                  className="mt-3 inline-flex items-center rounded-full border border-[rgba(255,138,138,0.66)] bg-[rgba(255,28,28,0.18)] px-2.5 py-1 text-[0.66rem] font-semibold text-[rgba(255,236,236,0.96)] transition hover:border-[rgba(255,174,174,0.9)] hover:bg-[rgba(255,44,44,0.28)]"
                >
                  Dettagli zona
                </Link>
              </motion.article>
            ))}
          </div>

          <details className="group mt-3 overflow-hidden rounded-[14px] border border-[rgba(255,112,112,0.58)] bg-[linear-gradient(150deg,rgba(46,4,8,0.86),rgba(15,1,3,0.92))]">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-3 py-2 text-[0.66rem] font-semibold tracking-[0.12em] text-[rgba(255,214,214,0.92)] uppercase [&::-webkit-details-marker]:hidden">
              <span>Copertura estesa su tutta Roma</span>
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[rgba(255,136,136,0.66)] bg-[rgba(255,22,22,0.28)] text-[0.82rem] leading-none transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="border-t border-[rgba(255,102,102,0.24)] px-3 pb-3 pt-2">
              <ul className="grid gap-1.5 md:grid-cols-2 xl:grid-cols-3">
                {legacyFullCoverageByArea.map((area) => (
                  <li key={area.area} className="text-[0.72rem] leading-[1.3] text-[rgba(255,223,223,0.9)]">
                    <span className="font-semibold text-[rgba(255,236,236,0.95)]">{area.area}: </span>
                    {area.zones.join(" • ")}
                  </li>
                ))}
              </ul>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {legacyZoneCloud.map((zone) => (
                  <span
                    key={zone}
                    className="rounded-full border border-[rgba(255,132,132,0.46)] bg-[rgba(255,34,34,0.14)] px-2 py-0.5 text-[0.66rem] font-semibold text-[rgba(255,229,229,0.94)]"
                  >
                    {zone}
                  </span>
                ))}
              </div>
            </div>
          </details>
        </motion.div>

        <div className="relative mt-4 flex justify-center">
          <span className="pointer-events-none absolute -top-3 h-6 w-44 rounded-full bg-[radial-gradient(circle,rgba(255,58,58,0.56),rgba(255,58,58,0)_74%)] blur-md" />
          <a
            href="#contatti"
            className="inline-flex items-center justify-center rounded-full border border-[rgba(255,144,144,0.74)] bg-[linear-gradient(145deg,#ff2626,#c00616_58%,#6f030c)] px-6 py-2 text-[0.9rem] font-bold text-[#fff9f9] shadow-[0_8px_18px_rgba(110,0,0,0.56),0_0_22px_rgba(255,32,32,0.56)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(110,0,0,0.62),0_0_30px_rgba(255,36,36,0.62)]"
          >
            Richiedi assistenza ora
          </a>
        </div>
      </div>
    </section>
  );
}

type PremiumCoverageZonesSectionProps = {
  backgroundImage: StaticImageData | string;
  className?: string;
};

function PremiumCoverageZonesSection({ backgroundImage, className }: PremiumCoverageZonesSectionProps) {
  return (
    <section className={cn("relative overflow-hidden bg-[#080304] py-20 md:py-24", className)}>
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          sizes="100vw"
          quality={75}
          className="object-cover object-center opacity-35 blur-[1.5px] scale-[1.04]"
          priority={false}
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          sizes="100vw"
          quality={75}
          className="object-cover object-center saturate-[1.18] contrast-[1.08]"
          priority={false}
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_35%,rgba(255,46,46,0.14),rgba(39,0,0,0.18)_58%,rgba(8,0,0,0.3)_100%)]" />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.18)_52%,rgba(0,0,0,0.34)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_56%,rgba(0,0,0,0.62)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-[2] opacity-[0.085] mix-blend-soft-light [background-image:radial-gradient(rgba(255,255,255,0.75)_0.48px,transparent_0.48px)] [background-size:3px_3px]" />

      <div className="pointer-events-none absolute inset-0 z-[2]">
        {premiumParticles.map((particle) => (
          <motion.span
            key={`${particle.top}-${particle.left}`}
            className="absolute rounded-full bg-[#f7d7ab]"
            style={{
              top: particle.top,
              left: particle.left,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              boxShadow: "0 0 12px rgba(247, 201, 146, 0.54)",
            }}
            animate={{
              opacity: [0.06, particle.peakOpacity, 0.06],
              y: [0, -8, 0],
              x: [0, particle.shiftX, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1380px] items-center gap-12 px-6 md:px-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative max-w-[710px]"
        >
          <div className="pointer-events-none absolute -inset-[2px] rounded-[34px] bg-[radial-gradient(150px_78px_at_14%_0%,rgba(246,171,113,0.36),transparent_74%),radial-gradient(136px_70px_at_89%_6%,rgba(235,146,99,0.24),transparent_76%),radial-gradient(128px_72px_at_91%_98%,rgba(223,117,84,0.2),transparent_78%)] blur-[11px]" />

          <div className="relative overflow-hidden rounded-[32px] border border-[#f5dfcb]/20 bg-[linear-gradient(160deg,rgba(13,8,9,0.78)_0%,rgba(10,5,6,0.7)_42%,rgba(18,7,10,0.66)_76%,rgba(10,4,5,0.74)_100%)] px-7 py-8 shadow-[0_40px_95px_rgba(0,0,0,0.62),0_12px_36px_rgba(61,8,12,0.3),inset_0_1px_0_rgba(255,245,230,0.11)] backdrop-blur-[10px] md:px-11 md:py-11 lg:px-12">
            <div
              className="pointer-events-none absolute inset-0 bg-[url('/backgrounds/sfondocard.webp')] bg-[position:center_18%] bg-no-repeat opacity-[0.58] mix-blend-screen [background-size:auto_140%]"
              style={{ filter: "saturate(1.5) hue-rotate(-14deg) contrast(1.08) brightness(0.8)" }}
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,243,227,0.09)_0%,rgba(255,243,227,0)_34%),radial-gradient(circle_at_66%_0%,rgba(204,86,72,0.2),transparent_44%),radial-gradient(circle_at_14%_88%,rgba(119,21,32,0.34),transparent_52%)]" />
            <div className="pointer-events-none absolute inset-[1px] rounded-[31px] border border-white/[0.05]" />
            <div className="pointer-events-none absolute inset-[1px] rounded-[31px] [box-shadow:inset_0_0_0_1px_rgba(246,201,160,0.07),inset_0_28px_50px_rgba(255,210,167,0.03),inset_0_-34px_58px_rgba(49,9,12,0.35)]" />
            <div className="pointer-events-none absolute -inset-[1px] rounded-[33px] [box-shadow:0_0_0_1px_rgba(248,222,189,0.14)]" />
            <div className="pointer-events-none absolute -inset-[3px] rounded-[35px] [box-shadow:0_0_26px_rgba(222,130,81,0.22)]" />

            <div className="relative z-10">
              <p className="inline-flex rounded-full border border-[#efc694]/38 bg-[linear-gradient(145deg,rgba(17,9,10,0.72),rgba(10,4,5,0.64))] px-4 py-1.5 text-[0.65rem] font-semibold tracking-[0.28em] text-[#f8ddbb]/90 [box-shadow:inset_0_1px_0_rgba(255,255,255,0.09)]">
                ASSISTENZA RAPIDA • ROMA
              </p>

              <h2
                className="mt-6 max-w-[12ch] text-[clamp(2.1rem,4.6vw,4.7rem)] font-extrabold leading-[0.93] tracking-[-0.024em] text-[#fff5e8] [text-shadow:0_10px_30px_rgba(0,0,0,0.5)]"
                style={{ fontFamily: "var(--font-space)" }}
              >
                Riparazione PC
                <br />
                a domicilio
                <br />
                in tutta Roma,
                <br />
                quartiere per
                <br />
                quartiere.
              </h2>

              <span className="mt-7 block h-px w-32 bg-gradient-to-r from-[#d3a16b] via-[#f7debf]/70 to-transparent" />

              <p className="mt-6 max-w-[51ch] text-[clamp(1rem,1.12vw,1.2rem)] font-medium leading-[1.56] text-[#f5eee6]/90 [text-shadow:0_4px_16px_rgba(0,0,0,0.32)]">
                Effettuo assistenza informatica a domicilio in tutta Roma, dal centro alla periferia.
              </p>

              <div className="mt-9 space-y-5 md:space-y-6">
                {premiumZoneGroups.map((group, index) => (
                  <article
                    key={group.title}
                    className={cn(
                      "relative border-l border-[#f2dbc0]/18 pl-4 md:pl-5",
                      index > 0 ? "border-t border-[#f1e3ce]/8 pt-5" : "",
                    )}
                  >
                    <span className="absolute -left-px top-1 h-6 w-px bg-gradient-to-b from-[#efc99a] to-transparent opacity-65" />
                    <h3 className="text-[0.68rem] font-semibold tracking-[0.24em] text-[#efc99d]/90">{group.title}</h3>
                    <p className="mt-2 text-[clamp(0.97rem,1.03vw,1.08rem)] leading-[1.5] text-[#f2e9df]/84 [text-shadow:0_2px_12px_rgba(0,0,0,0.3)]">
                      {group.zones}
                    </p>
                  </article>
                ))}
              </div>

              <p className="mt-8 max-w-[47ch] text-[clamp(1rem,1.08vw,1.15rem)] font-semibold leading-[1.45] text-[#fff3e4] [text-shadow:0_4px_16px_rgba(0,0,0,0.34)]">
                Supporto rapido e professionale, direttamente a casa tua.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[640px] lg:max-w-[700px]"
        >
          <div className="pointer-events-none absolute -right-8 top-8 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(230,152,83,0.28),rgba(230,152,83,0)_74%)] blur-2xl" />
          <div className="pointer-events-none absolute -left-10 bottom-6 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(158,31,40,0.38),rgba(158,31,40,0)_72%)] blur-2xl" />

          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, -0.8, 0] }}
            transition={{ duration: 8.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="relative ml-auto w-[90%] rounded-[30px] border border-white/14 bg-white/[0.05] p-3 shadow-[0_32px_85px_rgba(0,0,0,0.64)] backdrop-blur-md"
          >
            <div className="relative overflow-hidden rounded-[24px] border border-[#f0c58d]/18 bg-[linear-gradient(162deg,rgba(17,7,9,0.84)_0%,rgba(31,10,13,0.62)_56%,rgba(13,5,6,0.86)_100%)] px-5 pb-4 pt-6">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.17)_0%,rgba(255,255,255,0)_35%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_74%_22%,rgba(224,149,79,0.24),transparent_44%),radial-gradient(circle_at_36%_86%,rgba(171,27,37,0.34),transparent_52%)]" />
              <div className="relative z-10">
                <p className="mb-4 inline-flex rounded-full border border-[#f3d9b5]/32 bg-black/26 px-3 py-1 text-[0.62rem] font-semibold tracking-[0.17em] text-[#fbe5c7]/90 uppercase">
                  Copertura Roma completa
                </p>
                <Image
                  src={akaObject}
                  alt="Icone assistenza tecnica e checklist domicilio"
                  width={akaObject.width}
                  height={akaObject.height}
                  sizes="(max-width: 1024px) 88vw, 560px"
                  quality={75}
                  className="h-auto w-full scale-[1.02] drop-shadow-[0_22px_42px_rgba(0,0,0,0.54)]"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 7.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.4 }}
            className="relative mt-4 w-[82%] rounded-[22px] border border-[#f0c58d]/22 bg-[linear-gradient(155deg,rgba(17,8,10,0.84),rgba(11,5,6,0.72))] px-4 py-4 shadow-[0_16px_40px_rgba(0,0,0,0.5)] backdrop-blur-md md:absolute md:-bottom-8 md:left-3 md:mt-0 md:w-[48%] md:px-5"
          >
            <p className="text-[0.62rem] font-semibold tracking-[0.19em] text-[#f7d4a8]/85 uppercase">Tempi medi</p>
            <p className="mt-2 text-[clamp(1.25rem,2.2vw,1.8rem)] font-bold leading-none text-white">Intervento in giornata</p>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              Assistenza rapida e mirata con copertura estesa su tutta la citta.
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0], rotate: [0, 0.9, 0] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.9 }}
            className="relative mt-4 ml-auto w-[72%] rounded-[20px] border border-white/16 bg-[linear-gradient(150deg,rgba(14,7,8,0.86),rgba(11,5,6,0.7))] px-4 py-4 shadow-[0_18px_45px_rgba(0,0,0,0.54)] backdrop-blur-md md:absolute md:-top-7 md:right-4 md:mt-0 md:w-[42%] md:px-5"
          >
            <p className="text-[0.62rem] font-semibold tracking-[0.18em] text-[#f5d8b5]/85 uppercase">Standard premium</p>
            <ul className="mt-2.5 space-y-1.5 text-sm leading-[1.35] text-white/82">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f4c98f] shadow-[0_0_8px_rgba(244,201,143,0.75)]" />
                Interventi professionali
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f4c98f] shadow-[0_0_8px_rgba(244,201,143,0.75)]" />
                Comunicazione chiara
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f4c98f] shadow-[0_0_8px_rgba(244,201,143,0.75)]" />
                Copertura quartiere per quartiere
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
