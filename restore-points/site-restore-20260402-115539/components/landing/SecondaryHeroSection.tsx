"use client";

import { motion } from "framer-motion";

import { GlowingButton } from "./GlowingButton";
import { PhoneIcon, ServiceIcon, WhatsAppIcon } from "./icons";

const featureBadges = [
  { label: "PC Lento", icon: "wrench" as const },
  { label: "Rimozione Virus", icon: "shield" as const },
  { label: "Recupero Dati", icon: "database" as const },
  { label: "PC & Mac", icon: "wrench" as const },
  { label: "Wi-Fi", icon: "router" as const },
  { label: "Stampanti", icon: "router" as const },
];

export function SecondaryHeroSection() {
  return (
    <section className="relative overflow-hidden border-y border-[#ff4a4a]/20 py-20 md:py-24">
      <div className="absolute inset-0 bg-[url('/backgrounds/red-nebula.svg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2c0202]/65 via-[#2f0202]/80 to-[#090101]/95" />
      <div className="absolute left-1/2 top-[74%] h-12 w-[88%] -translate-x-1/2 bg-[linear-gradient(90deg,rgba(255,34,34,0.1),rgba(255,84,84,0.9),rgba(255,34,34,0.1))] blur-md" />

      <div className="pointer-events-none absolute inset-0 z-0">
        {Array.from({ length: 72 }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute rounded-full bg-[#ff4040]"
            style={{
              left: `${(index * 17) % 100}%`,
              top: `${(index * 29) % 88}%`,
              width: `${((index % 4) + 1) * 2}px`,
              height: `${((index % 4) + 1) * 2}px`,
              boxShadow: "0 0 18px rgba(255,30,30,0.6)",
            }}
            animate={{ opacity: [0.15, 0.85, 0.15], y: [0, -12, 0], x: [0, (index % 7) - 3, 0] }}
            transition={{ duration: 4 + (index % 8), repeat: Number.POSITIVE_INFINITY, delay: (index % 10) * 0.2 }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 md:px-10 lg:grid-cols-[1fr_1.05fr] lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="inline-flex rounded-full border border-[#ff6d6d]/55 bg-black/30 px-5 py-2 text-sm font-semibold tracking-[0.22em] text-white/90">
            DA TE IN TUTTA ROMA
          </p>
          <h2 className="mt-5 text-[clamp(2.3rem,6vw,5rem)] font-extrabold uppercase leading-[0.94] text-white">
            Tecnico PC
            <span className="block text-[#ffe9e9]">A domicilio</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90 md:text-[1.35rem]">
            Riparazione PC e Mac, rimozione virus, recupero dati e assistenza rapida a domicilio in tutta Roma.
          </p>
          <p className="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl">3421872127</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <GlowingButton href="tel:+393421872127" label="Chiama ora" icon={<PhoneIcon />} />
            <GlowingButton href="https://wa.me/393421872127" label="Scrivi su WhatsApp" variant="ghost" icon={<WhatsAppIcon />} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-[680px]"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6.5, repeat: Number.POSITIVE_INFINITY }}
            className="relative ml-auto w-[90%] rounded-[28px] border border-[#ff6666]/40 bg-[#120202]/90 p-3 shadow-[0_24px_65px_rgba(0,0,0,0.65)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] border border-[#ff5151]/30 bg-[#0d0707]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_35%,rgba(255,40,40,0.5),transparent_48%),radial-gradient(circle_at_75%_70%,rgba(139,0,0,0.55),transparent_55%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_40%)]" />
              <div className="relative z-10 flex h-full items-center justify-center text-center text-[clamp(2.2rem,6vw,5rem)] font-extrabold uppercase leading-none text-white">
                <span>
                  PC
                  <br />
                  DOCTOR
                </span>
              </div>
            </div>
            <div className="mx-auto mt-2 h-3 w-[90%] rounded-b-2xl bg-gradient-to-b from-[#4c3d3d] to-[#160505]" />
            <div className="mx-auto h-1.5 w-20 rounded-b-full bg-[#0f0f0f]" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0], rotate: [-1.5, 0, -1.5] }}
            transition={{ duration: 6.5, repeat: Number.POSITIVE_INFINITY }}
            className="absolute -bottom-8 left-0 w-[58%] rounded-[20px] border border-[#ff5959]/40 bg-[#120202]/90 p-2 shadow-[0_20px_55px_rgba(0,0,0,0.62)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] border border-[#ff5555]/30 bg-black">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_45%,rgba(255,40,40,0.45),transparent_48%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-xl border-2 border-[#ff3f3f] px-8 py-6 shadow-[0_0_30px_rgba(255,55,55,0.55)]">
                  <span className="text-4xl font-extrabold tracking-[0.16em] text-[#ff5f5f]">BUG</span>
                </div>
              </div>
            </div>
            <div className="mx-auto mt-2 h-2.5 w-[92%] rounded-b-xl bg-gradient-to-b from-[#2f1a1a] to-[#120707]" />
          </motion.div>

        </motion.div>
      </div>

      <div className="relative z-10 mx-auto mt-20 flex w-full max-w-7xl flex-wrap gap-3 px-6 md:px-10 lg:px-12">
        {featureBadges.map((item) => (
          <span
            key={item.label}
            className="inline-flex items-center gap-2 rounded-full border border-[#ff5a5a]/45 bg-black/30 px-4 py-2 text-base font-medium text-white/95 shadow-[0_0_14px_rgba(255,20,20,0.22)]"
          >
            <ServiceIcon name={item.icon} className="h-4 w-4 text-[#ff6666]" />
            {item.label}
          </span>
        ))}
      </div>
    </section>
  );
}
