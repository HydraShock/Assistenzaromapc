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

const problemCategories: readonly ProblemCategory[] = [
  {
    id: "riparazione-pc-mac",
    title: "Riparazione PC / Mac",
    description: "Diagnosi e interventi su hardware o software.",
    icon: "repair",
  },
  {
    id: "pc-lento",
    title: "PC lento / ottimizzazione",
    description: "Pulizia sistema, startup e prestazioni generali.",
    icon: "speed",
  },
  {
    id: "rimozione-virus",
    title: "Rimozione virus / malware",
    description: "Bonifica completa e messa in sicurezza.",
    icon: "shield",
  },
  {
    id: "internet-rete",
    title: "Internet / Wi-Fi / rete",
    description: "Problemi di connessione, modem e rete domestica.",
    icon: "wifi",
  },
  {
    id: "stampanti",
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
    id: "upgrade-pc",
    title: "Assemblaggio / upgrade PC",
    description: "Upgrade componenti e ottimizzazione post-installazione.",
    icon: "upgrade",
  },
  {
    id: "schermo-nero",
    title: "Schermo nero / mancato avvio",
    description: "Diagnosi avvio critico e ripristino operativo.",
    icon: "boot",
  },
] as const;

const unsureCategory: ProblemCategory = {
  id: "non-so",
  title: "Non so quale scegliere",
  description: "Se non sei sicuro, seleziona questa opzione: ti aiutiamo noi a capire il problema.",
  icon: "help",
};

const quickChips = [
  "Non si accende",
  "Schermo nero",
  "Molto lento",
  "Connessione assente",
  "Rumori strani",
  "Stampante non funziona",
  "Non so individuare il problema",
] as const;

function CategoryIcon({ name, className }: { name: IconName; className?: string }) {
  const common = {
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
        <svg {...common}>
          <path d="M14.7 6.3a3.2 3.2 0 0 0-4.2 4.2L4.2 16.8a1.3 1.3 0 1 0 1.8 1.8l6.3-6.3a3.2 3.2 0 0 0 4.2-4.2l-2.1 2.1-1.6-1.6z" />
        </svg>
      );
    case "speed":
      return (
        <svg {...common}>
          <path d="M4 14a8 8 0 1 1 16 0" />
          <path d="m12 14 4-4" />
          <path d="M12 14h.01" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3 5 6v5c0 5 3.5 8.3 7 10 3.5-1.7 7-5 7-10V6z" />
          <path d="m9.5 12.5 1.8 1.8 3.2-3.2" />
        </svg>
      );
    case "wifi":
      return (
        <svg {...common}>
          <path d="M3 9a14 14 0 0 1 18 0" />
          <path d="M6 12.5a9.5 9.5 0 0 1 12 0" />
          <path d="M9.5 16a5 5 0 0 1 5 0" />
          <circle cx="12" cy="19" r="1" />
        </svg>
      );
    case "printer":
      return (
        <svg {...common}>
          <path d="M7 8V4h10v4" />
          <rect x="5" y="8" width="14" height="8" rx="2" />
          <path d="M8 14h8v6H8z" />
        </svg>
      );
    case "data":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="6" rx="6.5" ry="2.5" />
          <path d="M5.5 6v6c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5V6" />
          <path d="M5.5 12v6c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5v-6" />
        </svg>
      );
    case "upgrade":
      return (
        <svg {...common}>
          <path d="M12 20V8" />
          <path d="m8.5 11.5 3.5-3.5 3.5 3.5" />
          <rect x="4" y="4" width="16" height="16" rx="3" />
        </svg>
      );
    case "boot":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="12" rx="2" />
          <path d="M8 20h8" />
          <path d="M12 16v4" />
          <path d="m10 10 2-2 2 2" />
        </svg>
      );
    case "help":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9.8 9.2a2.6 2.6 0 0 1 5.1.8c0 1.8-2 2.2-2.6 3.3" />
          <circle cx="12" cy="16.8" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return null;
  }
}

function SelectionCheck({ active }: { active: boolean }) {
  return (
    <span
      className={`inline-flex h-6 w-6 items-center justify-center rounded-full border transition ${
        active
          ? "border-[#FF4D73]/90 bg-[#FF174F]/20 text-[#FFD7DF]"
          : "border-[#77545f]/55 bg-[#16090d]/70 text-[#77545f]"
      }`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="m4 10 4 4 8-8" />
      </svg>
    </span>
  );
}

export function ProblemSelectionLuxurySection() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(unsureCategory.id);
  const [selectedChip, setSelectedChip] = useState<string>("Non so individuare il problema");

  return (
    <section className="w-full rounded-[28px] bg-[#F6F1EE] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto w-full max-w-5xl rounded-[28px] border border-[#4a1828]/45 bg-[radial-gradient(120%_90%_at_50%_-5%,rgba(255,77,115,0.16)_0%,rgba(255,77,115,0)_52%),linear-gradient(160deg,#12070B_0%,#1B0A10_48%,#2A0D16_100%)] p-5 text-[#FFF6F3] shadow-[0_28px_80px_-38px_rgba(7,1,3,0.95)] sm:p-7 lg:p-9">
        <header className="space-y-3">
          <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#FFF6F3] sm:text-[2rem]">In cosa possiamo aiutarti?</h3>
          <p className="max-w-3xl text-sm leading-relaxed text-[rgba(255,240,235,0.82)] sm:text-base">
            Seleziona la situazione più vicina al problema. Se non sei sicuro, va benissimo lo stesso.
          </p>
        </header>

        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[#FF4D73]/28 bg-[linear-gradient(160deg,rgba(255,77,115,0.12),rgba(255,77,115,0.04))] px-4 py-3.5 sm:px-5">
          <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#FF4D73]/38 bg-[#220c14] text-[#FF8BA4]">
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
              <path d="M10 2.5 3 6.2v4.4c0 3.7 2.6 6.2 7 7.9 4.4-1.7 7-4.2 7-7.9V6.2z" />
              <path d="m7.8 10 1.6 1.6 2.8-2.8" />
            </svg>
          </span>
          <p className="text-sm leading-relaxed text-[rgba(255,240,235,0.9)]">
            Non serve una diagnosi precisa: scegli l&apos;opzione più vicina e ti ricontattiamo noi per capire il resto.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {problemCategories.map((category) => {
            const isSelected = selectedCategoryId === category.id;

            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedCategoryId(category.id)}
                className={`group relative overflow-hidden rounded-[24px] border p-5 text-left transition-all duration-300 sm:p-6 ${
                  isSelected
                    ? "border-[#FF4D73]/75 bg-[linear-gradient(160deg,#251019_0%,#2f111c_100%)] shadow-[0_20px_50px_-30px_rgba(255,23,79,0.72)]"
                    : "border-[#6e2a3d]/45 bg-[linear-gradient(160deg,#14080C_0%,#1C0B11_55%,#260D16_100%)] hover:-translate-y-0.5 hover:border-[#FF4D73]/62 hover:shadow-[0_20px_40px_-30px_rgba(255,77,115,0.55)]"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-x-6 top-0 h-14 bg-gradient-to-b transition-opacity ${
                    isSelected ? "from-[#ff7c9a]/24 to-transparent" : "from-[#ff7c9a]/12 to-transparent"
                  }`}
                />

                <div className="relative flex items-start gap-4">
                  <span
                    className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${
                      isSelected
                        ? "border-[#FF4D73]/70 bg-[#2d0f19] text-[#FF9BB2]"
                        : "border-[#7f3348]/45 bg-[#1A0A10] text-[#F4C8D3]"
                    }`}
                  >
                    <CategoryIcon name={category.icon} className="h-5 w-5" />
                  </span>

                  <span className="min-w-0 flex-1 space-y-1.5 pr-2">
                    <span className="block text-base font-semibold leading-snug text-[#FFF6F3]">{category.title}</span>
                    <span className="block text-sm leading-relaxed text-[rgba(255,240,235,0.8)]">{category.description}</span>
                  </span>

                  <SelectionCheck active={isSelected} />
                </div>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          aria-pressed={selectedCategoryId === unsureCategory.id}
          onClick={() => setSelectedCategoryId(unsureCategory.id)}
          className={`group relative mt-6 w-full overflow-hidden rounded-[24px] border p-5 text-left transition-all duration-300 sm:p-6 ${
            selectedCategoryId === unsureCategory.id
              ? "border-[#FF6A8D]/90 bg-[linear-gradient(120deg,rgba(255,23,79,0.26),rgba(255,77,115,0.12)_45%,rgba(34,12,20,0.9)_100%)] shadow-[0_24px_56px_-30px_rgba(255,23,79,0.75)]"
              : "border-[#935061]/50 bg-[linear-gradient(120deg,rgba(255,77,115,0.16),rgba(255,77,115,0.06)_42%,rgba(34,12,20,0.85)_100%)] hover:-translate-y-0.5 hover:border-[#FF6A8D]/75"
          }`}
        >
          <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_130%_at_0%_0%,rgba(255,141,167,0.25),rgba(255,141,167,0))]" aria-hidden="true" />

          <div className="relative flex items-start gap-4">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#FF8CA7]/55 bg-[#2a0d17] text-[#FFD3DE]">
              <CategoryIcon name={unsureCategory.icon} className="h-5 w-5" />
            </span>

            <div className="min-w-0 flex-1 space-y-2">
              <span className="inline-flex items-center rounded-full border border-[#FF9CB3]/45 bg-[#451321]/50 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-[#FFD3DE]">
                Consigliata se non sei sicuro
              </span>
              <h4 className="text-lg font-semibold leading-snug text-[#FFF6F3]">{unsureCategory.title}</h4>
              <p className="text-sm leading-relaxed text-[rgba(255,240,235,0.88)]">{unsureCategory.description}</p>
            </div>

            <SelectionCheck active={selectedCategoryId === unsureCategory.id} />
          </div>
        </button>

        <div className="mt-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[rgba(255,240,235,0.72)]">Problemi frequenti</p>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {quickChips.map((chip) => {
              const isSelected = selectedChip === chip;

              return (
                <button
                  key={chip}
                  type="button"
                  onClick={() => setSelectedChip((current) => (current === chip ? "" : chip))}
                  aria-pressed={isSelected}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all sm:text-sm ${
                    isSelected
                      ? "border-[#FF4D73]/75 bg-[linear-gradient(160deg,rgba(255,23,79,0.25),rgba(255,77,115,0.16))] text-[#FFE5EC]"
                      : "border-[#6d3444]/45 bg-[#1a0b10] text-[rgba(255,240,235,0.85)] hover:border-[#FF4D73]/55 hover:text-[#FFF1F5]"
                  }`}
                >
                  {chip}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-7 flex items-start gap-3 rounded-2xl border border-[#FF4D73]/26 bg-[linear-gradient(160deg,rgba(255,77,115,0.11),rgba(255,77,115,0.03))] px-4 py-3">
          <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2a0d16] text-[#FF96AE]">
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
              <path d="M3 10h14" />
              <path d="m10 3 7 7-7 7" />
            </svg>
          </span>
          <p className="text-sm leading-relaxed text-[rgba(255,240,235,0.9)]">
            Prenota ora: ti ricontattiamo rapidamente per confermare e raccogliere i dettagli mancanti.
          </p>
        </div>
      </div>
    </section>
  );
}
