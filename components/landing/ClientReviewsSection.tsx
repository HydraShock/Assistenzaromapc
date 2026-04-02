"use client";

import Image from "next/image";
import { Star } from "lucide-react";

import { CometCard } from "@/components/ui/comet-card";

type Review = {
  id: string;
  text: string;
  name: string;
  zone: string;
  role: string;
  initials: string;
};

const reviews: readonly Review[] = [
  {
    id: "damiano",
    text: "Avevo chiamato alle 6 di sera per un PC lentissimo. Francesco e arrivato nello stesso pomeriggio e ha risolto tutto in meno di un'ora, velocissimo.",
    name: "Damiano",
    zone: "San Giovanni",
    role: "DJ e Artista",
    initials: "DA",
  },
  {
    id: "roberto",
    text: "Il tecnico e venuto in ufficio da me a Tiburtina per sistemare il server aziendale. Prima delle 11 aveva gia finito tutto. Perfetto come sempre.",
    name: "Roberto",
    zone: "Piazza Bologna",
    role: "Consulenza Aziendale",
    initials: "RO",
  },
  {
    id: "giulio",
    text: "Francesco e il mio tecnico di fiducia da anni, a Roma. Mi ha salvato gia diverse volte tra router e PC. Sempre disponibile di giorno e sera.",
    name: "Giulio",
    zone: "Trastevere / Monteverde",
    role: "Guida Turistica",
    initials: "GI",
  },
];

function StarsRow() {
  return (
    <div className="mb-4 flex items-center justify-center gap-1.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-5 w-5 fill-[#ffd34d] text-[#ffd34d]" />
      ))}
    </div>
  );
}

function AvatarPlaceholder({ initials }: { initials: string }) {
  return (
    <div className="mx-auto mt-5 grid h-16 w-16 place-items-center rounded-full border border-[#ffe6ad]/76 bg-[linear-gradient(145deg,rgba(255,217,132,0.95),rgba(133,78,22,0.94))] text-sm font-bold tracking-[0.12em] text-[#fff9e9] shadow-[0_0_0_1px_rgba(255,228,166,0.38),0_8px_20px_rgba(0,0,0,0.36),0_0_20px_rgba(248,194,77,0.28)]">
      {initials}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="relative h-full overflow-hidden rounded-[26px] border border-[#ffd87a]/95 shadow-[0_0_0_1px_rgba(255,228,158,0.62),0_0_16px_rgba(255,211,108,0.48),0_0_46px_rgba(233,178,54,0.42),0_26px_44px_rgba(0,0,0,0.28)]">
      <Image
        src="/backgrounds/sfondocard.webp"
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 420px"
        quality={75}
        className="pointer-events-none absolute inset-0 object-cover object-center scale-[1.08]"
        aria-hidden="true"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(168deg,rgba(17,0,0,0.9),rgba(79,6,16,0.82)_52%,rgba(24,0,0,0.92)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_62%,rgba(12,0,0,0.66)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(18,0,0,0)_0%,rgba(18,0,0,0.9)_72%,rgba(10,0,0,0.98)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,0,0,0.62)_0%,rgba(16,0,0,0)_18%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,48,48,0.22),rgba(255,48,48,0)_58%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_88%_at_50%_-18%,rgba(255,229,148,0.28),rgba(255,229,148,0)_56%),radial-gradient(50%_30%_at_12%_92%,rgba(246,180,88,0.18),rgba(246,180,88,0)_70%),radial-gradient(50%_30%_at_88%_92%,rgba(246,180,88,0.18),rgba(246,180,88,0)_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[2px] rounded-[24px] border border-[#fff4d6]/45"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-[27px] [box-shadow:inset_0_0_0_1px_rgba(255,214,126,0.34),inset_0_20px_36px_rgba(255,218,132,0.08)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-8 right-8 top-0 h-px bg-[linear-gradient(90deg,rgba(255,222,145,0),rgba(255,230,172,0.98),rgba(255,222,145,0))]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-12 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(255,215,126,0.44)] blur-xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-10 right-10 h-px bg-[linear-gradient(90deg,rgba(255,215,126,0),rgba(255,215,126,0.76),rgba(255,215,126,0))]"
      />

      <div className="relative z-10 p-6 text-center text-white">
        <StarsRow />
        <p className="mx-auto max-w-[30ch] text-[1.02rem] leading-[1.45] text-white/92">{review.text}</p>
        <AvatarPlaceholder initials={review.initials} />
        <h3 className="mt-4 text-[2rem] font-semibold leading-[1.05] tracking-[-0.015em] [text-shadow:0_2px_16px_rgba(0,0,0,0.45)]">
          {review.name} - {review.zone}
        </h3>
        <p className="mt-1 text-[1.05rem] text-white/84">{review.role}</p>
        <p className="mt-2 text-[4.4rem] font-bold leading-none text-[#ffd382]/88 [text-shadow:0_0_18px_rgba(255,208,122,0.36)]">
          &ldquo;
        </p>
      </div>
    </article>
  );
}

export function ClientReviewsSection() {
  return (
    <section
      className="relative overflow-hidden bg-white py-16 md:py-20"
      style={{
        backgroundImage: "url('/backgrounds/sfondotest.webp')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 md:px-10 lg:px-12">
        <header className="mb-10 text-center md:mb-12">
          <h2
            className="text-[clamp(2.1rem,4.6vw,4.1rem)] font-extrabold leading-[0.95] tracking-[-0.02em] text-[#1a0b0b]"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Cosa dicono i miei clienti
          </h2>
          <p className="mx-auto mt-4 max-w-[62ch] text-[1.04rem] leading-[1.56] text-[#4d2b2b]">
            Recensioni reali da quartieri e attivita diverse di Roma.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <CometCard key={review.id} rotateDepth={9} translateDepth={10} className="h-full">
              <ReviewCard review={review} />
            </CometCard>
          ))}
        </div>

        <div className="relative mx-auto mt-10 flex w-full max-w-[760px] flex-col items-center justify-center gap-3 overflow-hidden rounded-[20px] border border-[#e8c069]/90 bg-[linear-gradient(155deg,rgba(30,0,0,0.95),rgba(86,6,14,0.94))] px-6 py-4 text-white shadow-[0_0_0_1px_rgba(240,200,111,0.42),0_0_28px_rgba(232,179,67,0.32)] md:flex-row md:gap-5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[2px] rounded-[18px] border border-[#fff1cc]/32"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-8 right-8 top-0 h-px bg-[linear-gradient(90deg,rgba(255,226,160,0),rgba(255,232,186,0.95),rgba(255,226,160,0))]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-10 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(255,219,142,0.42)] blur-lg"
          />
          <div className="relative z-10 text-center md:text-left">
            <p className="text-[2.8rem] font-extrabold leading-none">
              4.9 <span className="text-[1.6rem] align-middle text-[#ffd34d]">★★★★★</span>
            </p>
            <p className="text-sm text-white/86">su Google</p>
          </div>
          <button
            type="button"
            className="relative z-10 inline-flex h-12 items-center justify-center rounded-full border border-[#f6dca4]/64 bg-[linear-gradient(145deg,#ff2d2d,#a1051e)] px-6 text-base font-semibold text-white shadow-[0_0_0_1px_rgba(247,213,138,0.26),0_12px_24px_rgba(128,6,18,0.52),0_0_24px_rgba(255,38,38,0.42)] transition-all hover:scale-[1.01]"
          >
            <span className="mr-2 text-[1.2rem] font-bold">G</span>
            Vedi tutte le recensioni su Google
          </button>
        </div>
      </div>
    </section>
  );
}

