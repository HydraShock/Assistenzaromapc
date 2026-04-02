"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

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

type PrimaryHeroSectionProps = {
  showWaveDivider?: boolean;
};

export function PrimaryHeroSection({ showWaveDivider = false }: PrimaryHeroSectionProps) {
  const fogRef = useRef<HTMLDivElement | null>(null);
  const fogEffectRef = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    let cancelled = false;

    const initFog = async () => {
      if (typeof window === "undefined" || !fogRef.current || fogEffectRef.current) {
        return;
      }

      if (!("WebGLRenderingContext" in window)) {
        return;
      }

      try {
        const THREE = await import("three");
        const fogModule = await import("vanta/dist/vanta.fog.min");
        const FOG = fogModule.default;

        if (cancelled || !fogRef.current || fogEffectRef.current) {
          return;
        }

        fogEffectRef.current = FOG({
          el: fogRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          highlightColor: 0xff0000,
          midtoneColor: 0xfc1919,
          lowlightColor: 0xf21111,
          baseColor: 0x9b1414,
          blurFactor: 0.51,
          zoom: 0.7,
          speed: 1,
        });
      } catch (error) {
        console.error("Vanta fog failed to initialize:", error);
      }
    };

    void initFog();

    return () => {
      cancelled = true;
      fogEffectRef.current?.destroy();
      fogEffectRef.current = null;
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#9b1414]">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_28%_22%,rgba(255,70,70,0.44),transparent_44%),radial-gradient(circle_at_75%_56%,rgba(131,0,0,0.48),transparent_48%),linear-gradient(180deg,#9b1414_0%,#8c0d11_56%,#64070a_100%)]" />
      <div ref={fogRef} className="absolute inset-0 z-0" />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-65"
        style={{
          background:
            "radial-gradient(circle at 16% 20%, rgba(255,110,110,0.34), transparent 34%), radial-gradient(circle at 85% 38%, rgba(255,46,46,0.24), transparent 35%), radial-gradient(circle at 44% 84%, rgba(255,120,90,0.16), transparent 42%)",
          animation: "fog-float 12s ease-in-out infinite alternate",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-50"
        style={{
          background:
            "radial-gradient(circle at 80% 14%, rgba(255,75,75,0.24), transparent 34%), radial-gradient(circle at 28% 70%, rgba(255,80,30,0.16), transparent 45%)",
          animation: "fog-float 17s ease-in-out infinite alternate-reverse",
        }}
      />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.22)_1.1px,transparent_0)] [background-size:56px_56px]" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_22%_46%,rgba(0,0,0,0.22),transparent_40%),radial-gradient(circle_at_74%_58%,rgba(0,0,0,0.36),transparent_44%)]" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.36)_100%)]" />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-6 pb-14 pt-6 md:px-10 lg:px-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/45 bg-black/22 px-4 py-1.5 text-xs font-semibold tracking-[0.08em] text-white md:text-sm"
        >
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm border border-white/65 bg-transparent text-[0.95rem] leading-none text-white">
            +
          </span>
          ASSISTENZA ROMA PC
        </motion.div>

        <div className="relative flex flex-1 items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="relative z-20 w-full max-w-[640px] lg:ml-[9%] lg:pt-10"
          >
            <motion.p
              variants={fadeUp}
              className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.28em] text-[#efb1b1] md:text-sm"
            >
              <span className="h-px w-7 bg-[#f0b0b0]/70" />
              DA TE IN TUTTA ROMA
              <span className="h-px w-7 bg-[#f0b0b0]/70" />
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-[clamp(3rem,6.3vw,5.45rem)] font-extrabold uppercase leading-[0.92] text-white"
              style={{ fontFamily: "var(--font-space)" }}
            >
              SONO LA TUA
              <span className="mt-3 block w-max rounded-2xl border border-[#ff5f5f]/90 bg-[#860004]/58 px-6 py-1 text-white shadow-[0_0_30px_rgba(255,37,37,0.52),inset_0_0_24px_rgba(255,98,98,0.2)]">
                SOLUZIONE
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-7 max-w-[545px] text-[1.03rem] leading-relaxed text-white/92 md:text-[1.23rem]">
              Riparazioni PC e laptop, rimozione virus, recupero dati e assistenza a domicilio in tutta Roma.
              <br />
              Preventivo chiaro, intervento professionale,
            </motion.p>

            <motion.p variants={fadeUp} className="mt-9 text-[3.25rem] font-extrabold tracking-tight text-white md:text-[3.6rem]">
              3421872127
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                href="tel:+393421872127"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                className="inline-flex min-w-[270px] items-center justify-center rounded-[12px] border border-white bg-black/10 px-8 py-3 text-[0.95rem] font-bold tracking-wide text-white"
              >
                RICHIEDI ASSISTENZA
              </motion.a>
              <motion.a
                href="https://wa.me/393421872127"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                className="inline-flex min-w-[220px] items-center justify-center gap-2 rounded-[12px] border border-[#ff3f3f] bg-[#5c0003]/84 px-7 py-3 text-[0.95rem] font-bold tracking-wide text-white"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#22c45e] text-white">
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                </span>
                WHATSAPP
              </motion.a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-[9px] border border-[#ff4b4b]/60 bg-[#3a0000]/36 px-4 py-2 text-[0.93rem] font-semibold text-white/95"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="pointer-events-none absolute right-[-1%] top-1/2 hidden h-[760px] w-[640px] -translate-y-1/2 lg:block xl:right-[3%] xl:h-[800px] xl:w-[700px]"
          >
            <div className="absolute -right-[16%] top-[52%] w-[760px] -translate-y-1/2">
              <Image
                src="/hero/senza-titolo.png"
                alt="PC Doctor monitor laterale"
                width={800}
                height={800}
                priority
                className="h-auto w-full rotate-[-8deg] opacity-95"
                style={{ filter: "saturate(1.08) contrast(1.04) drop-shadow(0 24px 40px rgba(0,0,0,0.55)) drop-shadow(0 0 20px rgba(255,36,36,0.36))" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 border-y border-[#ff8ea6]/18 bg-[linear-gradient(180deg,rgba(28,3,12,0.84),rgba(16,2,8,0.9))]">
        <div className="mx-auto flex w-full max-w-[1600px] flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-3 text-[0.9rem] font-semibold tracking-[0.12em] text-[#ffd7e3]/90 md:justify-evenly md:px-10">
          <span>ASSISTENZA A DOMICILIO</span>
          <span className="hidden h-3.5 w-px bg-[#ff9eb4]/30 md:inline-block" />
          <span>
            ROMA NORD &middot; ROMA SUD &middot; ROMA EST &middot; ROMA OVEST
          </span>
          <span className="hidden h-3.5 w-px bg-[#ff9eb4]/30 md:inline-block" />
          <span>RISPOSTA RAPIDA</span>
        </div>
      </div>

      {showWaveDivider ? <WaveDivider className="absolute bottom-0 left-0 z-20" /> : null}
    </section>
  );
}
