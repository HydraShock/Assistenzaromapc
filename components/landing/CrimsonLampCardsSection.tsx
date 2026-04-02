"use client";

import { Check, GaugeCircle, MapPinned, ShieldCheck } from "lucide-react";
import { CometCard } from "@/components/ui/comet-card";

type HighlightCard = {
  id: string;
  badge: string;
  icon: "shield" | "map" | "speed";
  title: string;
  points: readonly string[];
  href: string;
  featured?: boolean;
};

type CrimsonLampCardsSectionProps = {
  variant?: "burgundy" | "super-red";
};

const highlightCards: readonly HighlightCard[] = [
  {
    id: "esperto-affidabile",
    badge: "Esperienza",
    icon: "shield",
    title: "Tecnico esperto e affidabile",
    points: ["Esperienza pratica", "Spiegazioni semplici", "Soluzioni mirate"],
    href: "#servizi",
  },
  {
    id: "domicilio-roma",
    badge: "A domicilio",
    icon: "map",
    title: "Vengo io da te in tutta Roma",
    points: ["Interventi a domicilio", "Copertura in molte zone", "Disponibilita sera e weekend"],
    href: "#zone-di-roma",
    featured: true,
  },
  {
    id: "interventi-rapidi",
    badge: "Rapidita",
    icon: "speed",
    title: "Interventi rapidi e organizzati",
    points: ["Priorita alle urgenze", "Risposta rapida", "Organizzazione chiara"],
    href: "#contatti",
  },
] as const;

function CardIcon({ type }: { type: HighlightCard["icon"] }) {
  if (type === "shield") return <ShieldCheck className="h-10 w-10 text-[#ffd1de]" />;
  if (type === "map") return <MapPinned className="h-10 w-10 text-[#ffd1de]" />;
  return <GaugeCircle className="h-10 w-10 text-[#ffd1de]" />;
}

export function CrimsonLampCardsSection({
  variant = "burgundy",
}: CrimsonLampCardsSectionProps) {
  const styles =
    variant === "super-red"
      ? {
          section: "bg-[#120001]",
          photo: "opacity-64 saturate-[1.48] contrast-[1.16]",
          tone: "bg-[linear-gradient(180deg,rgba(42,1,1,0.56),rgba(18,0,0,0.7))]",
          radial: "bg-[radial-gradient(120%_85%_at_50%_6%,rgba(255,0,0,0.56),rgba(255,0,0,0)_62%)]",
          beam1: "bg-[rgba(255,0,0,0.72)]",
          beam2: "bg-[linear-gradient(90deg,rgba(255,0,0,0),rgba(255,38,38,0.98),rgba(255,0,0,0))]",
          beam3: "bg-[radial-gradient(55%_75%_at_50%_0%,rgba(255,20,20,0.7),rgba(255,20,20,0))]",
          beam4: "bg-[rgba(255,82,82,0.46)]",
          panel:
            "border-[rgba(255,68,68,0.9)] bg-[linear-gradient(165deg,rgba(18,1,1,0.98),rgba(56,3,3,0.96)_62%,rgba(14,1,1,0.98))] shadow-[0_0_0_1px_rgba(255,78,78,0.5),0_0_56px_rgba(255,0,0,0.58),0_34px_90px_rgba(0,0,0,0.76)]",
          panelLine: "bg-[linear-gradient(90deg,rgba(255,74,74,0),rgba(255,96,96,0.98),rgba(255,74,74,0))]",
          panelGlow: "bg-[rgba(255,24,24,0.7)]",
          featuredCard:
            "border-[rgba(255,120,120,0.98)] bg-[linear-gradient(160deg,rgba(255,10,10,0.42),rgba(163,4,4,0.75)_54%,rgba(28,4,6,0.96))] shadow-[0_18px_40px_rgba(164,10,10,0.62),0_0_0_1px_rgba(255,104,104,0.38),0_0_34px_rgba(255,18,18,0.52)]",
          baseCard:
            "border-[rgba(255,98,98,0.68)] bg-[linear-gradient(160deg,rgba(24,4,6,0.96),rgba(108,6,6,0.58)_58%,rgba(18,4,6,0.96))] shadow-[0_14px_30px_rgba(0,0,0,0.35),0_0_22px_rgba(255,18,18,0.3)]",
          badge:
            "border-[rgba(255,174,174,0.58)] bg-[rgba(72,6,9,0.62)] text-[rgba(255,238,238,0.96)]",
          icon:
            "border-[rgba(255,164,164,0.64)] bg-[linear-gradient(145deg,rgba(255,18,18,0.56),rgba(106,5,5,0.74))]",
          check: "text-[#ff1f1f]",
          button:
            "border-[rgba(255,152,152,0.85)] bg-[linear-gradient(145deg,#ff0000,#8f0000)] shadow-[0_14px_30px_rgba(170,8,8,0.66),0_0_38px_rgba(255,12,12,0.56)] hover:shadow-[0_16px_36px_rgba(170,8,8,0.74),0_0_46px_rgba(255,12,12,0.66)]",
        }
      : {
          section: "bg-[#060205]",
          photo: "opacity-45",
          tone: "bg-[linear-gradient(180deg,rgba(7,2,5,0.46),rgba(7,2,5,0.62))]",
          radial: "bg-[radial-gradient(120%_85%_at_50%_6%,rgba(255,35,90,0.22),rgba(255,35,90,0)_62%)]",
          beam1: "bg-[rgba(255,34,91,0.45)]",
          beam2: "bg-[linear-gradient(90deg,rgba(255,56,107,0),rgba(255,86,134,0.95),rgba(255,56,107,0))]",
          beam3: "bg-[radial-gradient(55%_75%_at_50%_0%,rgba(255,46,102,0.48),rgba(255,46,102,0))]",
          beam4: "bg-[rgba(255,96,144,0.32)]",
          panel:
            "border-[rgba(255,82,126,0.78)] bg-[linear-gradient(165deg,rgba(9,2,6,0.98),rgba(28,6,12,0.95)_62%,rgba(10,2,6,0.98))] shadow-[0_0_0_1px_rgba(255,98,141,0.36),0_0_34px_rgba(255,32,92,0.45),0_34px_90px_rgba(0,0,0,0.76)]",
          panelLine: "bg-[linear-gradient(90deg,rgba(255,84,128,0),rgba(255,98,141,0.95),rgba(255,84,128,0))]",
          panelGlow: "bg-[rgba(255,36,94,0.55)]",
          featuredCard:
            "border-[rgba(255,132,166,0.9)] bg-[linear-gradient(160deg,rgba(255,24,80,0.22),rgba(126,11,35,0.62)_54%,rgba(18,6,11,0.95))] shadow-[0_18px_40px_rgba(142,10,38,0.54),0_0_0_1px_rgba(255,126,160,0.3),0_0_22px_rgba(255,42,98,0.35)]",
          baseCard:
            "border-[rgba(255,96,138,0.5)] bg-[linear-gradient(160deg,rgba(18,6,11,0.95),rgba(78,11,28,0.45)_58%,rgba(14,5,9,0.95))] shadow-[0_14px_30px_rgba(0,0,0,0.35),0_0_14px_rgba(255,34,92,0.16)]",
          badge:
            "border-[rgba(255,172,197,0.45)] bg-[rgba(48,9,19,0.52)] text-[rgba(255,223,233,0.95)]",
          icon:
            "border-[rgba(255,170,196,0.52)] bg-[linear-gradient(145deg,rgba(255,37,93,0.34),rgba(78,11,29,0.6))]",
          check: "text-[#ff3f70]",
          button:
            "border-[rgba(255,160,188,0.7)] bg-[linear-gradient(145deg,#ff225e,#b40a2f)] shadow-[0_14px_30px_rgba(150,10,39,0.54),0_0_24px_rgba(255,32,92,0.34)] hover:shadow-[0_16px_36px_rgba(150,10,39,0.62),0_0_30px_rgba(255,32,92,0.42)]",
        };

  return (
    <section
      id="perche-scegliere"
      aria-labelledby="perche-scegliere-heading"
      className={`crimson-equal-section relative overflow-hidden ${styles.section} py-16 md:py-20`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-0 bg-[url('/backgrounds/chat.png')] bg-cover bg-center ${styles.photo}`}
      />
      <div aria-hidden="true" className={`pointer-events-none absolute inset-0 z-0 ${styles.tone}`} />
      <div aria-hidden="true" className={`pointer-events-none absolute inset-0 z-0 ${styles.radial}`} />

      <div className="mx-auto w-full max-w-[1180px] px-6 md:px-10 lg:px-12">
        <div className="pointer-events-none relative z-0 mx-auto mb-[-62px] h-36 w-full max-w-[980px] md:mb-[-72px] md:h-44">
          <div className={`absolute left-1/2 top-0 h-20 w-[46%] -translate-x-1/2 rounded-full ${styles.beam1} blur-3xl md:h-24`} />
          <div className={`absolute left-1/2 top-8 h-px w-[62%] -translate-x-1/2 ${styles.beam2}`} />
          <div className={`absolute left-1/2 top-9 h-20 w-[70%] -translate-x-1/2 ${styles.beam3} blur-xl`} />
          <div className={`absolute left-1/2 top-6 h-10 w-[16%] -translate-x-1/2 rounded-full ${styles.beam4} blur-xl`} />
        </div>

        <div className={`relative z-10 overflow-hidden rounded-[34px] border ${styles.panel} px-5 pb-8 pt-12 md:px-8 md:pb-10 md:pt-14`}>
          <div className={`pointer-events-none absolute inset-x-16 top-0 z-30 h-px ${styles.panelLine}`} />
          <div className={`pointer-events-none absolute left-1/2 top-0 z-30 h-16 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full ${styles.panelGlow} blur-2xl`} />

          <div className="mx-auto w-full max-w-6xl">
            <header className="text-center">
              <h2
                id="perche-scegliere-heading"
                className="text-3xl font-semibold tracking-[-0.02em] text-[#fff5f2] md:text-5xl"
              >
                Perche scegliere me?
              </h2>
              <p className="mx-auto mt-4 max-w-[64ch] text-[0.98rem] leading-relaxed text-[rgba(255,214,225,0.82)] md:text-[1.04rem]">
                Assistenza informatica a domicilio a Roma con approccio pratico, tempi rapidi e comunicazione chiara.
              </p>
            </header>

            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {highlightCards.map((card) => (
                <CometCard key={card.id} rotateDepth={9} translateDepth={10} className="h-full">
                  <article
                    className={`group relative h-full overflow-hidden rounded-[22px] border p-5 md:p-6 ${
                      card.featured ? styles.featuredCard : styles.baseCard
                    }`}
                  >
                    <div className="relative z-10">
                      <div className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold ${styles.badge}`}>
                        {card.badge}
                      </div>

                      <div className="mt-4 flex justify-center">
                        <span className={`inline-flex h-16 w-16 items-center justify-center rounded-full border ${styles.icon}`}>
                          <CardIcon type={card.icon} />
                        </span>
                      </div>

                      <h4 className="mt-4 text-center text-[2.05rem] font-semibold leading-[1.05] tracking-[-0.02em] text-[#fff5f2]">
                        {card.title}
                      </h4>

                      <ul className="mt-5 space-y-2.5">
                        {card.points.map((point) => (
                          <li key={point} className="flex items-start gap-2.5 text-sm text-[rgba(255,221,229,0.88)]">
                            <Check className={`mt-0.5 h-[18px] w-[18px] shrink-0 ${styles.check}`} />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href={card.href}
                        className="mt-5 block text-center text-sm font-medium text-[rgba(255,210,223,0.9)] transition-colors hover:text-[rgba(255,238,243,0.98)]"
                      >
                        Scopri di piu -&gt;
                      </a>
                    </div>
                  </article>
                </CometCard>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href="#contatti"
                className={`inline-flex h-12 items-center justify-center rounded-full border px-8 text-lg font-semibold text-[#fff6f3] transition-all hover:scale-[1.01] ${styles.button}`}
              >
                Richiedi assistenza ora
              </a>
            </div>

            <p className="mt-4 text-center text-sm text-[rgba(255,214,225,0.82)]">
              Ti ricontatto rapidamente per organizzare l&apos;intervento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
