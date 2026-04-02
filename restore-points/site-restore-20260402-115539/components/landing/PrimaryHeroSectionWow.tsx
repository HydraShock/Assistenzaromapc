"use client";

import { motion } from "framer-motion";
import { Clock3, PhoneCall, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";

import { WaveDivider } from "./WaveDivider";
import { trustBadges } from "./data";
import { WhatsAppIcon } from "./icons";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

type PrimaryHeroSectionWowProps = {
  showWaveDivider?: boolean;
};

export function PrimaryHeroSectionWow({ showWaveDivider = false }: PrimaryHeroSectionWowProps) {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#12030a] pt-24 sm:pt-28">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,92,124,0.44),transparent_42%),radial-gradient(circle_at_82%_20%,rgba(188,26,58,0.34),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(78,10,30,0.5),transparent_62%),linear-gradient(180deg,#19040d_0%,#12030a_58%,#0a0206_100%)]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(108deg, rgba(255,126,162,0.08) 0%, rgba(255,126,162,0.02) 32%, rgba(0,0,0,0) 56%), radial-gradient(circle at 76% 72%, rgba(255,76,118,0.18), transparent 36%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-[0.2]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,228,236,0.9) 0.6px, transparent 0.6px)",
          backgroundSize: "8px 8px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(130%_110%_at_50%_54%,rgba(0,0,0,0)_48%,rgba(0,0,0,0.86)_100%)]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-[1380px] items-center gap-10 px-6 pb-16 md:px-10 lg:grid-cols-[1.03fr_0.97fr] lg:px-14">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative z-20 w-full max-w-[670px]"
        >
          <motion.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-[#ffb8cb]/44 bg-[linear-gradient(140deg,rgba(48,9,21,0.62),rgba(22,6,14,0.7))] px-4 py-1.5 text-[0.72rem] font-semibold tracking-[0.2em] text-[#ffe5ed]"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#ff92b2]" />
            STUDIO TECNICO A DOMICILIO - ROMA
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-6 text-[clamp(2.7rem,6.5vw,6.1rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.03em] text-[#fff6f9]"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Assistenza PC
            <span className="mt-3 block">
              con stile
              <span className="ml-3 inline-flex rounded-2xl border border-[#ffadc6]/58 bg-[linear-gradient(148deg,rgba(184,22,62,0.84),rgba(98,10,34,0.86))] px-4 py-1.5 text-[0.64em] shadow-[0_0_36px_rgba(236,46,90,0.48)]">
                ultra-rapido
              </span>
            </span>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-7 max-w-[56ch] text-[1.08rem] leading-relaxed text-[#ffe6ee]/92 md:text-[1.2rem]">
            Riparazioni, ottimizzazione, rete Wi-Fi, stampanti e recupero dati direttamente a casa tua.
            Esperienza tecnica reale, comunicazione semplice e intervento organizzato in tutta Roma.
          </motion.p>

          <motion.p variants={fadeUp} className="mt-8 text-[clamp(2.8rem,4.4vw,4rem)] font-extrabold tracking-[-0.03em] text-[#fff8fb]">
            342 187 2127
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3.5">
            <motion.a
              href="tel:+393421872127"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="inline-flex min-w-[260px] items-center justify-center gap-2 rounded-[14px] border border-[#ffd2df]/74 bg-[linear-gradient(155deg,#ef3a67_0%,#bc1442_58%,#7f0b25_100%)] px-7 py-3.5 text-[0.95rem] font-semibold tracking-[0.02em] text-[#fff8fa] shadow-[0_18px_36px_rgba(102,14,34,0.72),0_0_28px_rgba(238,56,94,0.42)]"
            >
              <PhoneCall className="h-4.5 w-4.5" />
              Chiama ora
            </motion.a>

            <motion.a
              href="https://wa.me/393421872127"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="inline-flex min-w-[220px] items-center justify-center gap-2 rounded-[14px] border border-[#ff9db8]/40 bg-[linear-gradient(155deg,rgba(58,12,24,0.76),rgba(20,6,14,0.84))] px-6 py-3.5 text-[0.95rem] font-semibold tracking-[0.02em] text-[#ffeef3]"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#72ebb2]/42 bg-[#29d46f]/26 text-[#a6ffd0]">
                <WhatsAppIcon className="h-3.5 w-3.5" />
              </span>
              WhatsApp diretto
            </motion.a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2.5">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-[11px] border border-[#ff9eba]/34 bg-[linear-gradient(145deg,rgba(66,12,28,0.58),rgba(20,6,14,0.62))] px-3.5 py-1.5 text-[0.84rem] font-semibold text-[#ffe5ee]/94"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-9 grid max-w-[620px] gap-3 sm:grid-cols-3"
          >
            <div className="rounded-[16px] border border-[#ff9fba]/34 bg-[linear-gradient(155deg,rgba(42,10,20,0.7),rgba(20,8,14,0.74))] p-3.5 shadow-[0_14px_28px_rgba(0,0,0,0.4)]">
              <div className="flex items-center gap-2 text-[#ffe8ef]">
                <Clock3 className="h-4.5 w-4.5 text-[#ff8bb0]" />
                <span className="text-[0.76rem] uppercase tracking-[0.12em]">Tempo medio</span>
              </div>
              <p className="mt-2 text-[1.3rem] font-semibold text-white">In giornata</p>
            </div>

            <div className="rounded-[16px] border border-[#ff9fba]/34 bg-[linear-gradient(155deg,rgba(42,10,20,0.7),rgba(20,8,14,0.74))] p-3.5 shadow-[0_14px_28px_rgba(0,0,0,0.4)]">
              <div className="flex items-center gap-2 text-[#ffe8ef]">
                <ShieldCheck className="h-4.5 w-4.5 text-[#ff8bb0]" />
                <span className="text-[0.76rem] uppercase tracking-[0.12em]">Affidabilita</span>
              </div>
              <p className="mt-2 text-[1.3rem] font-semibold text-white">Supporto reale</p>
            </div>

            <div className="rounded-[16px] border border-[#ff9fba]/34 bg-[linear-gradient(155deg,rgba(42,10,20,0.7),rgba(20,8,14,0.74))] p-3.5 shadow-[0_14px_28px_rgba(0,0,0,0.4)]">
              <div className="flex items-center gap-2 text-[#ffe8ef]">
                <Sparkles className="h-4.5 w-4.5 text-[#ff8bb0]" />
                <span className="text-[0.76rem] uppercase tracking-[0.12em]">Copertura</span>
              </div>
              <p className="mt-2 text-[1.3rem] font-semibold text-white">Tutta Roma</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[700px] lg:mr-0"
        >
          <div className="pointer-events-none absolute -left-10 top-14 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(255,96,136,0.44),rgba(255,96,136,0)_70%)] blur-2xl" />
          <div className="pointer-events-none absolute -right-12 bottom-12 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,70,114,0.34),rgba(255,70,114,0)_72%)] blur-2xl" />

          <div className="relative overflow-hidden rounded-[34px] border border-[#ffb5c8]/30 bg-[linear-gradient(160deg,rgba(24,8,14,0.72),rgba(14,5,11,0.82))] p-4 shadow-[0_36px_82px_rgba(0,0,0,0.68),0_0_40px_rgba(255,70,112,0.2)]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,226,236,0.14),rgba(255,226,236,0)_34%)]" />
            <div className="pointer-events-none absolute inset-[1px] rounded-[31px] border border-[#ffe7ef]/16" />

            <Image
              src="/hero/senza-titolo.png"
              alt="Postazione assistenza PC a domicilio"
              width={860}
              height={860}
              priority
              className="h-auto w-full rounded-[28px] object-cover object-center"
            />

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -left-4 bottom-8 rounded-[16px] border border-[#ffd0de]/40 bg-[linear-gradient(155deg,rgba(236,62,102,0.92),rgba(164,18,50,0.9))] px-4 py-3 text-[#fff9fb] shadow-[0_16px_30px_rgba(112,14,36,0.56)]"
            >
              <p className="text-[0.7rem] uppercase tracking-[0.16em] text-[#ffe8ef]/88">Disponibile</p>
              <p className="mt-1 text-[1.02rem] font-semibold">Anche sera e weekend</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.4 }}
              className="absolute -right-4 top-10 rounded-[16px] border border-[#ffc8d8]/40 bg-[linear-gradient(155deg,rgba(30,10,18,0.94),rgba(18,8,13,0.9))] px-4 py-3 text-[#ffeaf1] shadow-[0_16px_30px_rgba(0,0,0,0.42)]"
            >
              <p className="text-[0.7rem] uppercase tracking-[0.16em] text-[#ffc9d9]/82">Metodo</p>
              <p className="mt-1 text-[1.02rem] font-semibold">Diagnosi + soluzione chiara</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 border-t border-[#ff9db8]/20 bg-[linear-gradient(180deg,rgba(16,4,10,0.74),rgba(10,3,7,0.88))]">
        <div className="mx-auto flex w-full max-w-[1380px] flex-wrap items-center justify-center gap-x-5 gap-y-2 px-6 py-3.5 text-[0.8rem] font-medium tracking-[0.08em] text-[#ffdbe7]/86 md:justify-between md:px-10 lg:px-14">
          <span>ASSISTENZA A DOMICILIO</span>
          <span className="hidden h-3 w-px bg-[#ff9fbb]/24 md:inline-block" />
          <span>ROMA NORD &middot; ROMA SUD &middot; ROMA EST &middot; ROMA OVEST</span>
          <span className="hidden h-3 w-px bg-[#ff9fbb]/24 md:inline-block" />
          <span>RISPOSTA RAPIDA</span>
        </div>
      </div>

      {showWaveDivider ? <WaveDivider className="absolute bottom-0 left-0 z-20" /> : null}
    </section>
  );
}

