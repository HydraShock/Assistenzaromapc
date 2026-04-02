"use client";

import { useState } from "react";

type IconName =
  | "repair"
  | "speed"
  | "shield"
  | "wifi"
  | "printer"
  | "data"
  | "upgrade"
  | "boot"
  | "help";

type ProblemCategory = {
  id: string;
  title: string;
  description: string;
  icon: IconName;
};

const categories: readonly ProblemCategory[] = [
  {
    id: "riparazione-pc-mac",
    title: "Riparazione PC / Mac",
    description: "Diagnosi e interventi su hardware o software.",
    icon: "repair",
  },
  {
    id: "pc-lento-ottimizzazione",
    title: "PC lento / ottimizzazione",
    description: "Pulizia sistema, startup e prestazioni generali.",
    icon: "speed",
  },
  {
    id: "rimozione-virus-malware",
    title: "Rimozione virus / malware",
    description: "Bonifica completa e messa in sicurezza.",
    icon: "shield",
  },
  {
    id: "internet-wifi-rete",
    title: "Internet / Wi-Fi / rete",
    description: "Problemi di connessione, modem e rete domestica.",
    icon: "wifi",
  },
  {
    id: "stampanti-periferiche",
    title: "Stampanti e periferiche",
    description: "Installazione, configurazione e risoluzione errori.",
    icon: "printer",
  },
  {
    id: "recupero-dati",
    title: "Recupero dati",
    description: "Recupero file da dischi e supporti danneggiati.",
    icon: "data",
  },
  {
    id: "assemblaggio-upgrade-pc",
    title: "Assemblaggio / upgrade PC",
    description: "Upgrade componenti e ottimizzazione post-installazione.",
    icon: "upgrade",
  },
  {
    id: "schermo-nero-mancato-avvio",
    title: "Schermo nero / mancato avvio",
    description: "Diagnosi avvio critico e ripristino operativo.",
    icon: "boot",
  },
] as const;

const unsureOption: ProblemCategory = {
  id: "non-so-quale-scegliere",
  title: "Non so quale scegliere",
  description: "Se non sei sicuro, seleziona questa opzione: ti aiutiamo noi a capire il problema.",
  icon: "help",
};

function IconGlyph({ name, className }: { name: IconName; className?: string }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  switch (name) {
    case "repair":
      return (
        <svg {...commonProps}>
          <path d="M14.6 6.4a3.1 3.1 0 0 0-4.1 4.1L4.2 16.8a1.3 1.3 0 1 0 1.9 1.9l6.3-6.3a3.1 3.1 0 0 0 4.1-4.1l-2.1 2.1-1.8-1.8z" />
        </svg>
      );
    case "speed":
      return (
        <svg {...commonProps}>
          <path d="M4 14a8 8 0 1 1 16 0" />
          <path d="m12 14 3.9-3.9" />
          <path d="M12 14h.01" />
        </svg>
      );
    case "shield":
      return (
        <svg {...commonProps}>
          <path d="M12 3 5.1 6v5c0 5 3.4 8.2 6.9 10 3.5-1.8 6.9-5 6.9-10V6z" />
          <path d="m9.4 12.3 1.8 1.8 3.3-3.3" />
        </svg>
      );
    case "wifi":
      return (
        <svg {...commonProps}>
          <path d="M3 9a14.2 14.2 0 0 1 18 0" />
          <path d="M6.2 12.3a9.4 9.4 0 0 1 11.6 0" />
          <path d="M9.5 15.7a4.9 4.9 0 0 1 5 0" />
          <circle cx="12" cy="19" r="1.1" />
        </svg>
      );
    case "printer":
      return (
        <svg {...commonProps}>
          <path d="M7 8V4h10v4" />
          <rect x="5" y="8" width="14" height="8" rx="2" />
          <path d="M8 14h8v6H8z" />
        </svg>
      );
    case "data":
      return (
        <svg {...commonProps}>
          <ellipse cx="12" cy="6" rx="6.5" ry="2.5" />
          <path d="M5.5 6v6c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5V6" />
          <path d="M5.5 12v6c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5v-6" />
        </svg>
      );
    case "upgrade":
      return (
        <svg {...commonProps}>
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M12 20V9" />
          <path d="m8.7 12.3 3.3-3.3 3.3 3.3" />
        </svg>
      );
    case "boot":
      return (
        <svg {...commonProps}>
          <rect x="4" y="4" width="16" height="12" rx="2" />
          <path d="M8 20h8" />
          <path d="M12 16v4" />
          <path d="m10.1 10.2 1.9-1.9 1.9 1.9" />
        </svg>
      );
    case "help":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9.9 9.2a2.5 2.5 0 0 1 5 .8c0 1.7-2 2.1-2.6 3.2" />
          <circle cx="12" cy="16.9" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return null;
  }
}

function SelectionMark({ selected }: { selected: boolean }) {
  return (
    <span
      className={`inline-flex h-7 w-7 items-center justify-center rounded-full border transition-all ${
        selected
          ? "border-[#ff8ead]/90 bg-[rgba(255,23,79,0.24)] text-[#ffe8ef]"
          : "border-[#7b4555]/55 bg-[rgba(10,3,6,0.7)] text-[#8f6470]"
      }`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="m4 10 4 4 8-8" />
      </svg>
    </span>
  );
}

export function ProblemTriageLuxuryGrid() {
  const [selectedId, setSelectedId] = useState<string>(unsureOption.id);

  return (
    <section className="relative space-y-6 md:space-y-7">
      <header className="space-y-3">
        <h3 className="text-[1.95rem] font-semibold leading-tight tracking-[-0.02em] text-[#fff6f3] md:text-[2.35rem]">
          In cosa possiamo aiutarti?
        </h3>
        <p className="max-w-3xl text-[0.98rem] leading-relaxed text-[rgba(255,230,236,0.86)] md:text-[1.04rem]">
          Seleziona l&apos;opzione piu vicina al problema. Se non sei sicuro, va benissimo lo stesso.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        {categories.map((category) => {
          const isSelected = selectedId === category.id;

          return (
            <button
              key={category.id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setSelectedId(category.id)}
              className={`group relative overflow-hidden rounded-3xl border p-6 text-left transition-all duration-300 md:p-7 ${
                isSelected
                  ? "border-[rgba(255,146,176,0.88)] bg-[linear-gradient(155deg,rgba(34,8,15,0.97),rgba(136,13,39,0.68)_60%,rgba(30,7,13,0.96))] shadow-[0_16px_34px_rgba(120,9,34,0.44),0_0_0_1px_rgba(255,118,156,0.3)]"
                  : "border-[rgba(255,108,146,0.34)] bg-[linear-gradient(155deg,rgba(18,5,10,0.92),rgba(80,11,28,0.48)_58%,rgba(17,5,9,0.9))] shadow-[0_12px_28px_rgba(0,0,0,0.36),inset_0_1px_0_rgba(255,255,255,0.04)] hover:-translate-y-0.5 hover:border-[rgba(255,118,156,0.62)] hover:shadow-[0_18px_34px_rgba(102,8,30,0.42)]"
              }`}
            >
              <span
                className={`pointer-events-none absolute inset-x-6 top-0 h-16 bg-gradient-to-b ${
                  isSelected ? "from-[rgba(255,166,194,0.28)] to-transparent" : "from-[rgba(255,166,194,0.16)] to-transparent"
                }`}
                aria-hidden="true"
              />

              <div className="relative flex h-full flex-col gap-5">
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${
                      isSelected
                        ? "border-[rgba(255,170,195,0.75)] bg-[rgba(66,10,23,0.9)] text-[#ffd9e4]"
                        : "border-[rgba(255,126,162,0.34)] bg-[rgba(20,7,12,0.75)] text-[rgba(255,224,235,0.9)]"
                    }`}
                  >
                    <IconGlyph name={category.icon} className="h-6 w-6" />
                  </span>
                  <SelectionMark selected={isSelected} />
                </div>

                <div className="space-y-2">
                  <h4 className="text-[1.24rem] font-semibold leading-tight text-[#fff8f5]">{category.title}</h4>
                  <p className="text-[0.95rem] leading-relaxed text-[rgba(255,226,233,0.84)]">{category.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        aria-pressed={selectedId === unsureOption.id}
        onClick={() => setSelectedId(unsureOption.id)}
        className={`group relative w-full overflow-hidden rounded-3xl border p-6 text-left transition-all duration-300 md:p-7 ${
          selectedId === unsureOption.id
            ? "border-[rgba(255,169,196,0.9)] bg-[linear-gradient(130deg,rgba(255,26,86,0.28),rgba(120,12,39,0.46)_42%,rgba(24,8,13,0.96)_100%)] shadow-[0_20px_40px_rgba(130,10,38,0.5),0_0_0_1px_rgba(255,122,160,0.38)]"
            : "border-[rgba(255,115,152,0.46)] bg-[linear-gradient(130deg,rgba(255,42,96,0.16),rgba(96,11,32,0.34)_42%,rgba(22,7,12,0.94)_100%)] shadow-[0_14px_30px_rgba(0,0,0,0.32)] hover:-translate-y-0.5 hover:border-[rgba(255,137,170,0.7)]"
        }`}
      >
        <span
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(72%_130%_at_0%_0%,rgba(255,170,196,0.28),rgba(255,170,196,0)_62%)]"
          aria-hidden="true"
        />

        <div className="relative flex items-start gap-4">
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[rgba(255,178,202,0.66)] bg-[rgba(58,10,21,0.82)] text-[#ffe0ea]">
            <IconGlyph name={unsureOption.icon} className="h-6 w-6" />
          </span>

          <div className="min-w-0 flex-1 space-y-2">
            <span className="inline-flex rounded-full border border-[rgba(255,182,205,0.52)] bg-[rgba(73,11,27,0.5)] px-3 py-1 text-[0.69rem] font-semibold uppercase tracking-[0.09em] text-[rgba(255,226,235,0.96)]">
              Consigliata se non sei sicuro
            </span>
            <h4 className="text-[1.34rem] font-semibold leading-tight text-[#fff8f5]">{unsureOption.title}</h4>
            <p className="max-w-3xl text-[0.98rem] leading-relaxed text-[rgba(255,230,236,0.9)]">{unsureOption.description}</p>
          </div>

          <SelectionMark selected={selectedId === unsureOption.id} />
        </div>
      </button>

      <div className="flex items-start gap-3 rounded-2xl border border-[rgba(255,118,156,0.28)] bg-[linear-gradient(155deg,rgba(17,6,10,0.72),rgba(74,10,26,0.34))] px-4 py-3.5">
        <span className="mt-[2px] inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(255,23,79,0.2)] text-[rgba(255,212,223,0.95)]">
          <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
            <path d="M3 10h14" />
            <path d="m10 3 7 7-7 7" />
          </svg>
        </span>
        <p className="text-[0.92rem] leading-relaxed text-[rgba(255,224,232,0.88)]">
          Dopo la richiesta ti ricontattiamo rapidamente per confermare e capire i dettagli.
        </p>
      </div>
    </section>
  );
}
