"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Database,
  Gauge,
  House,
  PackageCheck,
  Printer,
  Wifi,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";
import { BackgroundGradient } from "@/components/ui/background-gradient";

type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const serviceItems: ServiceItem[] = [
  {
    title: "Riparazione PC e MAC",
    description: "Diagnosi e riparazioni hardware/software per desktop e notebook.",
    icon: Wrench,
  },
  {
    title: "Velocizzazione Computer Lenti",
    description: "Ottimizzazione completa per avvio rapido e prestazioni piu stabili.",
    icon: Gauge,
  },
  {
    title: "Problemi WI-Fi e Reti Domestiche",
    description: "Configurazione router, Wi-Fi e rete casa con copertura affidabile.",
    icon: Wifi,
  },
  {
    title: "Config. e Assistenza Stampanti",
    description: "Installazione, rete e risoluzione errori di stampa e scansione.",
    icon: Printer,
  },
  {
    title: "Recupero Dati e Backup",
    description: "Recupero file e backup protetti su disco esterno o cloud.",
    icon: Database,
  },
  {
    title: "Assistenza a Domicilio",
    description: "Intervento rapido direttamente a casa tua, su appuntamento.",
    icon: House,
  },
  {
    title: "Lezioni e Supporto Informatico Base",
    description: "Supporto pratico per usare PC, internet, email e programmi base.",
    icon: BookOpen,
  },
  {
    title: "Installazione Programmi, Antivirus, Cloud",
    description: "Setup software essenziali con protezione antivirus e sync cloud.",
    icon: PackageCheck,
  },
];

export function ServicesGridSection() {
  return (
    <section id="servizi" className="services-luxury-section relative overflow-hidden py-20 md:py-24" style={{ fontFamily: "var(--font-space)" }}>
      <Image
        src="/backgrounds/sfondotest.png"
        alt=""
        fill
        quality={95}
        sizes="100vw"
        loading="lazy"
        className="pointer-events-none absolute inset-0 z-0 object-cover object-center"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.36))]" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-12">
        <header className="mx-auto max-w-3xl text-center">
          <p className="luxury-heading-pill relative isolate inline-flex rounded-[14px] px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-white md:text-sm">
            I NOSTRI SERVIZI
          </p>
          <h2 className="mt-5 text-balance text-[clamp(1.9rem,4.1vw,3rem)] font-bold leading-tight text-[#3a1814]">
            Assistenza completa per PC, Mac e rete domestica
          </h2>
          <p className="mt-4 text-pretty text-[0.97rem] leading-relaxed text-[#5f3e39] md:text-[1.03rem]">
            Soluzioni rapide e professionali con intervento in laboratorio o a domicilio.
          </p>
        </header>

        <div className="luxury-cards-grid mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {serviceItems.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="luxury-service-card relative isolate min-h-[220px] sm:min-h-[236px]"
              >
                <BackgroundGradient
                  containerClassName="service-red-glow h-full rounded-[22px]"
                  className="luxury-service-card-inner group relative z-10 flex h-full min-h-[220px] flex-col items-center rounded-[20px] p-4 text-center text-white sm:min-h-[236px] sm:p-5"
                >
                  <span aria-hidden="true" className="luxury-card-star luxury-card-star-tl" />
                  <span aria-hidden="true" className="luxury-card-star luxury-card-star-tr" />
                  <span aria-hidden="true" className="luxury-card-star luxury-card-star-bl" />
                  <span aria-hidden="true" className="luxury-card-star luxury-card-star-br" />

                  <div className="luxury-service-icon relative z-10 inline-flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                    <Icon className="h-6 w-6 text-[#fff7e8]" strokeWidth={2.25} aria-hidden="true" />
                  </div>

                  <h3 className="relative z-10 mt-4 text-balance text-[20px] font-semibold leading-tight text-white">
                    {item.title}
                  </h3>
                  <p className="relative z-10 mt-3 text-pretty text-[14px] leading-relaxed text-[#ffdede]/75">
                    {item.description}
                  </p>

                  <span aria-hidden="true" className="luxury-card-line luxury-card-line-top" />
                  <span aria-hidden="true" className="luxury-card-line luxury-card-line-bottom" />
                </BackgroundGradient>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
