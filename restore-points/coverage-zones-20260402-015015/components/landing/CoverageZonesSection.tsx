"use client";

import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";

import akaObject from "@/aka.png";
import fuck2Background from "@/fuck2.png";
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

const legacyTopBadges = [
  "Interventi a domicilio",
  "Roma Nord • Sud • Est • Ovest",
  "Risposta rapida",
] as const;

const legacyZoneCards = [
  {
    badge: "Centro storico",
    title: "Roma Centro",
    zones: ["Prati", "Trastevere", "Monti", "Colosseo", "Piazza di Spagna", "Campo de' Fiori"],
  },
  {
    badge: "Roma Nord e Nord-Est",
    title: "Roma Nord e Nord-Est",
    zones: ["Parioli", "Trieste", "Nomentano", "Flaminio", "Pietralata", "Bufalotta"],
  },
  {
    badge: "Roma Sud, Est e Ovest",
    title: "Roma Sud, Est e Ovest",
    zones: ["Eur", "Appio", "Garbatella", "Tiburtina", "Monteverde", "Laurentina"],
  },
] as const;

const legacyVisibleZones = [
  "Prati",
  "Trastevere",
  "Monti",
  "Colosseo",
  "Eur",
  "Flaminio",
  "Parioli",
  "Trieste",
  "Nomentano",
  "Appio",
  "Garbatella",
  "Monteverde",
  "Tiburtina",
  "Pigneto",
  "San Lorenzo",
  "Ostia",
  "Marconi",
  "Laurentina",
  "Re di Roma",
  "Magliana",
  "Centocelle",
  "Casilina",
  "Tor Bella Monaca",
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
  backgroundImage?: StaticImageData;
  className?: string;
  compactText?: boolean;
  premium?: boolean;
};

export function CoverageZonesSection({
  backgroundImage = fuck2Background,
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
  backgroundImage: StaticImageData;
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
        "relative overflow-hidden bg-[#120001]",
        compactText ? "py-9 md:py-10 lg:py-11" : "py-11 md:py-12 lg:py-14",
        className,
      )}
    >
      <div className="pointer-events-none absolute left-1/2 top-0 z-[2] h-56 w-[78%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,38,38,0.46),rgba(255,38,38,0)_74%)] blur-[42px]" />
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          sizes="100vw"
          quality={100}
          className="object-cover object-center opacity-33 blur-[1px] scale-[1.02]"
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
          quality={100}
          className="coverage-main-photo object-cover object-center saturate-[1.16] contrast-[1.04]"
          priority={false}
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(112%_78%_at_50%_6%,rgba(255,0,0,0.24),rgba(255,0,0,0)_62%)]" />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(10,0,0,0.24)_0%,rgba(10,0,0,0.4)_44%,rgba(8,0,0,0.62)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_65%,rgba(0,0,0,0.48)_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-6 md:px-10 lg:px-12">
        <div className="relative overflow-hidden rounded-[32px] border border-[rgba(255,88,88,0.62)] bg-[linear-gradient(165deg,rgba(18,1,1,0.96),rgba(32,2,3,0.92)_56%,rgba(10,0,0,0.95))] px-6 pb-8 pt-8 shadow-[0_0_0_1px_rgba(255,92,92,0.2),0_0_34px_rgba(255,0,0,0.23),0_24px_52px_rgba(0,0,0,0.56)] md:px-10 md:pb-10 md:pt-10">
          <div className="pointer-events-none absolute inset-x-20 top-0 h-px bg-[linear-gradient(90deg,rgba(255,84,84,0),rgba(255,128,128,0.62),rgba(255,84,84,0))]" />
          <div className="pointer-events-none absolute left-[8%] top-[6%] h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(255,44,44,0.2),rgba(255,44,44,0)_74%)] blur-3xl" />
          <div className="pointer-events-none absolute right-[6%] top-[12%] h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(255,28,28,0.16),rgba(255,28,28,0)_75%)] blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.2)_100%)]" />

          <header className="mx-auto max-w-[900px] text-center">
            <p className="inline-flex rounded-full border border-transparent bg-[rgba(64,7,10,0.58)] px-4 py-1 text-[0.64rem] font-semibold tracking-[0.18em] text-[rgba(255,236,236,0.92)] shadow-[inset_0_0_0_1px_rgba(255,194,194,0.16),0_0_12px_rgba(255,26,26,0.14)]">
              ZONE DI ROMA COPERTE
            </p>
            <h2
              id="coverage-roma-heading"
              className="mx-auto mt-4 max-w-[15ch] text-balance text-[clamp(2rem,4.7vw,3.95rem)] font-extrabold leading-[0.92] tracking-[-0.02em] text-[#fff5f2]"
              style={{ fontFamily: "var(--font-space)" }}
            >
              Interventi PC a domicilio in tutta Roma.
            </h2>
            <span className="mx-auto mt-5 block h-px w-44 bg-[linear-gradient(90deg,rgba(255,118,118,0),rgba(255,186,186,0.92),rgba(255,118,118,0))]" />
            <p className="mx-auto mt-3 max-w-[58ch] text-[clamp(0.95rem,1.14vw,1.06rem)] leading-[1.6] text-[rgba(255,218,226,0.9)]">
              Copertura quartiere per quartiere in tutta Roma, dal centro alla periferia.
            </p>
          </header>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[0.74rem] font-semibold tracking-[0.11em] text-[rgba(255,228,236,0.78)] uppercase">
            {legacyTopBadges.map((badge, index) => (
              <span key={badge} className="inline-flex items-center">
                {index > 0 && <span className="mr-3 text-[rgba(255,136,136,0.72)]">•</span>}
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-10 border-t border-[rgba(255,164,164,0.2)] pt-8">
            <h3 className="text-center text-[1.18rem] font-semibold text-[#fff4f1]">Zone di Roma in evidenza</h3>
            <p className="mx-auto mt-2 max-w-[60ch] text-center text-[0.95rem] leading-relaxed text-[rgba(255,211,223,0.88)]">
              Copertura reale in tutta la citta, con interventi a domicilio rapidi nelle zone principali.
            </p>

            <div className="mt-7 grid gap-4 lg:grid-cols-3">
              {legacyZoneCards.map((card, index) => (
                <article
                  key={card.title}
                  className={cn(
                    "relative overflow-hidden rounded-[24px] border px-5 pb-5 pt-4 shadow-[0_14px_30px_rgba(0,0,0,0.36)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_44px_rgba(0,0,0,0.45)]",
                    index === 1
                      ? "z-10 border-[rgba(255,156,156,0.78)] bg-[radial-gradient(130%_120%_at_50%_0%,rgba(255,46,46,0.42),rgba(70,6,8,0.87)_56%,rgba(24,2,3,0.92)_100%)] shadow-[0_0_30px_rgba(255,20,20,0.42),0_18px_36px_rgba(0,0,0,0.48)] lg:scale-[1.03] lg:-translate-y-1 hover:-translate-y-2"
                      : "border-[rgba(255,122,122,0.54)] bg-[radial-gradient(130%_120%_at_50%_0%,rgba(255,34,34,0.22),rgba(52,5,7,0.84)_58%,rgba(20,2,3,0.92)_100%)]",
                  )}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_36%)]" />
                  <div className="relative z-10">
                    <p className="inline-flex rounded-full border border-[rgba(255,186,186,0.42)] bg-[rgba(24,2,4,0.44)] px-3 py-1 text-[0.66rem] font-semibold tracking-[0.08em] text-[rgba(255,226,233,0.9)]">
                      {card.badge}
                    </p>
                    <h4 className="mt-4 min-h-[4.8rem] text-[clamp(1.55rem,2.15vw,2rem)] font-extrabold leading-[1.02] text-[#fff6f3]">
                      {card.title}
                    </h4>
                    <ul className="mt-4 space-y-2.5">
                      {card.zones.map((zone) => (
                        <li key={zone} className="flex items-center gap-2.5 text-[0.95rem] font-medium text-[rgba(255,234,240,0.98)]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#ff3e3e]" />
                          <span>{zone}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 border-t border-[rgba(255,150,150,0.2)] pt-6">
              <p className="text-center text-[0.72rem] font-semibold tracking-[0.13em] text-[rgba(255,231,236,0.9)] uppercase">
                Altri quartieri coperti
              </p>
              <p className="mx-auto mt-3 max-w-[56ch] text-center text-[clamp(1.06rem,1.7vw,1.4rem)] font-semibold leading-[1.8] text-[#fffdfa]">
                {legacyVisibleZones.join(" • ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type PremiumCoverageZonesSectionProps = {
  backgroundImage: StaticImageData;
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
          quality={100}
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
          quality={100}
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
              className="pointer-events-none absolute inset-0 bg-[url('/backgrounds/sfondocard.png')] bg-[position:center_18%] bg-no-repeat opacity-[0.58] mix-blend-screen [background-size:auto_140%]"
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
                  quality={100}
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
