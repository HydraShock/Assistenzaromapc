"use client";

import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState, useSyncExternalStore } from "react";

import { cn } from "@/lib/utils";
import ciccioBackground from "@/ciccio.webp";

type PremiumFaqItem = {
  question: string;
  answer: string;
};

const trustBadges = ["7/7", "A domicilio", "Risposta rapida"] as const;

const premiumFaqItems: PremiumFaqItem[] = [
  {
    question: "Come funziona l'assistenza PC a domicilio a Roma",
    answer:
      "Offro assistenza PC a domicilio a Roma intervenendo direttamente a casa o in ufficio per risolvere problemi su computer fissi, notebook, stampanti, Wi-Fi e rete. Il servizio è pensato per chi cerca un tecnico computer a Roma rapido, comodo e senza spostamenti inutili.",
  },
  {
    question: "Quanto costa un intervento tecnico a domicilio a Roma",
    answer:
      "Il costo di un intervento di riparazione PC a domicilio a Roma parte da 20€ per diagnosi e piccoli interventi. Il prezzo finale varia in base al problema, ai tempi di lavorazione e all'eventuale sostituzione di componenti. Prima di procedere fornisco sempre un preventivo chiaro.",
  },
  {
    question: "In quali zone di Roma intervieni",
    answer:
      "Offro assistenza tecnica a domicilio in tutta Roma, incluse zone come Centro Storico, Prati, Trastevere, San Giovanni, Parioli, Nomentano, Talenti, Appio, Tuscolano, Eur, Garbatella, Tiburtina, Centocelle, Monteverde, Aurelio, Marconi e Ostia. Se cerchi assistenza PC a Roma vicino a te, contattami e verifico subito la disponibilita nella tua zona.",
  },
  {
    question: "Ripari anche notebook e computer portatili",
    answer:
      "Sì, mi occupo anche di riparazione notebook a Roma, inclusi problemi di lentezza, avvio, aggiornamenti, configurazione, virus, schermo, batteria e collegamenti di rete. L'assistenza è disponibile sia a domicilio sia, quando utile, con diagnosi mirata sul dispositivo.",
  },
  {
    question: "Offri assistenza Wi-Fi, rete e router a Roma",
    answer:
      "Sì, offro assistenza per problemi Wi-Fi e rete a Roma, inclusi configurazione router, segnale debole, disconnessioni, Internet lenta e problemi di copertura in casa o in ufficio. Posso intervenire anche su reti mesh, access point e configurazioni cablate.",
  },
  {
    question: "Assistenza stampanti, scanner e periferiche",
    answer:
      "Sì, fornisco assistenza a domicilio a Roma anche per stampanti, scanner e periferiche collegate al PC. Mi occupo di installazione, configurazione, driver, collegamento Wi-Fi, problemi di stampa e malfunzionamenti hardware o software.",
  },
  {
    question: "Posso prenotare anche la sera o nel weekend",
    answer:
      "Sì, quando possibile organizzo interventi anche in fascia serale e nel weekend. Questo servizio è utile per chi cerca un tecnico PC a Roma disponibile in orari flessibili, soprattutto per urgenze o per chi lavora durante il giorno.",
  },
  {
    question: "Aiuti anche persone anziane o poco esperte",
    answer:
      "Sì, offro assistenza informatica a Roma anche per chi ha poca esperienza con computer, Internet o smartphone. Il supporto è chiaro, paziente e pratico, ideale per utenti anziani o per chi desidera imparare a usare meglio PC, email, stampanti e servizi online.",
  },
];

type PremiumFaqSectionProps = {
  rightCardBackground?: StaticImageData;
  idPrefix?: string;
};

export function PremiumFaqSection({
  rightCardBackground = ciccioBackground,
  idPrefix = "premium-faq",
}: PremiumFaqSectionProps) {
  const reducedMotion = useReducedMotion();
  const hasHydrated = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const shouldReduceMotion = hasHydrated && reducedMotion === true;
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section aria-labelledby={`${idPrefix}-heading`} className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <Image
        src="/backgrounds/sfondotest2.png"
        alt=""
        fill
        quality={95}
        sizes="100vw"
        loading="lazy"
        className="pointer-events-none absolute inset-0 z-0 object-cover object-center"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.38))]" />
      <div className="relative mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="relative grid items-start gap-6 lg:grid-cols-[0.84fr_1.16fr] lg:items-center lg:gap-8">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[43%] top-[56%] hidden h-[64%] w-[1.5px] -translate-y-1/2 bg-[linear-gradient(180deg,rgba(216,26,56,0),rgba(216,26,56,0.5),rgba(255,238,243,0.52),rgba(216,26,56,0))] blur-[0.4px] lg:block"
          />

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[34px] border border-[#e7bcc8]/92 bg-[linear-gradient(176deg,#ffffff_0%,#fff9fb_64%,#fff4f8_100%)] px-6 py-8 shadow-[0_34px_78px_rgba(64,16,30,0.2),0_12px_26px_rgba(122,22,46,0.12),inset_0_1px_0_rgba(255,255,255,0.96),inset_0_-18px_30px_rgba(182,34,66,0.1)] sm:px-8 sm:py-10 lg:px-10 lg:py-12"
          >
            <div className="pointer-events-none absolute left-[12%] top-[84%] h-10 w-[64%] -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(132,24,44,0.24),rgba(132,24,44,0)_72%)] blur-lg" />
            <div className="pointer-events-none absolute -left-10 top-8 h-52 w-72 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(214,28,58,0.24),rgba(214,28,58,0)_72%)] blur-3xl" />
            <div className="pointer-events-none absolute left-20 top-6 h-20 w-44 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.84),rgba(255,255,255,0)_76%)] blur-xl" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0)_34%,rgba(255,255,255,0)_100%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(124,18,38,0.34)_0.55px,transparent_0.55px)] [background-size:3.6px_3.6px]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(128deg,rgba(255,255,255,0.54)_0%,rgba(255,255,255,0)_36%,rgba(208,62,92,0.12)_62%,rgba(255,255,255,0)_100%)]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-[24%] bg-[linear-gradient(90deg,rgba(136,20,42,0),rgba(136,20,42,0.06))]" />
            <div className="pointer-events-none absolute inset-x-8 top-[1px] h-px bg-[linear-gradient(90deg,rgba(190,24,48,0),rgba(190,24,48,0.4),rgba(190,24,48,0))]" />

            <span className="relative inline-flex items-center rounded-full border border-[#b52845]/28 bg-[linear-gradient(160deg,#ffffff_0%,#fff0f4_100%)] px-3.5 py-1.5 text-[0.72rem] font-semibold tracking-[0.2em] text-[#7a1329] shadow-[0_8px_20px_rgba(110,18,36,0.14),inset_0_1px_0_rgba(255,255,255,0.95)]">
              FAQ
            </span>

            <h2
              id={`${idPrefix}-heading`}
              className="relative mt-6 max-w-[16ch] text-[clamp(2.4rem,5vw,4.6rem)] font-semibold uppercase leading-[0.88] tracking-[-0.02em] text-[#5a1020]"
              style={{ fontFamily: "var(--font-cinzel), serif" }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-8 -top-4 h-[150%] w-[120%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(196,24,52,0.22),rgba(196,24,52,0)_74%)] blur-2xl"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-2 -top-2 h-[120%] w-[88%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,220,230,0.9),rgba(255,220,230,0)_76%)] blur-xl"
              />
              Domande frequenti
            </h2>

            <p className="mt-6 max-w-[48ch] text-[1.02rem] leading-relaxed text-[#8d2940] sm:text-[1.08rem]">
              Risposte rapide ai dubbi più comuni prima di richiedere assistenza.
            </p>

            <ul className="mt-9 flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <li key={badge}>
                  <span className="relative inline-flex items-center gap-2 overflow-hidden rounded-[12px] border border-[#c43a58]/28 bg-[linear-gradient(150deg,#ffffff_0%,#fff2f5_100%)] px-3.5 py-2 text-[0.82rem] font-semibold text-[#6f1427] shadow-[0_8px_18px_rgba(103,16,32,0.12),inset_0_1px_0_rgba(255,255,255,0.95)]">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-3 top-[1px] h-px bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.95),rgba(255,255,255,0))]"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-4 bottom-[1px] h-px bg-[linear-gradient(90deg,rgba(176,28,50,0),rgba(176,28,50,0.22),rgba(176,28,50,0))]"
                    />
                    <span className="relative h-[6px] w-[6px] rounded-full bg-[#cc2748] shadow-[0_0_10px_rgba(210,36,66,0.45)]" />
                    <span className="relative">{badge}</span>
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[30px] border border-[#ffa2b5]/38 bg-[linear-gradient(164deg,rgba(20,6,11,0.93)_0%,rgba(13,4,9,0.92)_42%,rgba(10,3,7,0.95)_100%)] p-4 shadow-[0_42px_96px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,120,144,0.2),inset_0_1px_0_rgba(255,236,242,0.12),inset_0_-30px_54px_rgba(0,0,0,0.52)] sm:p-5"
          >
            <div className="pointer-events-none absolute inset-0 z-0">
              <Image
                src={rightCardBackground}
                alt=""
                fill
                quality={75}
                sizes="(max-width: 1024px) 100vw, 760px"
                className="object-cover object-center opacity-90 saturate-[1.14] contrast-[1.08] brightness-[1.06]"
                aria-hidden="true"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(160deg,rgba(14,4,8,0.46),rgba(8,2,5,0.6))]" />
            <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(58%_42%_at_76%_14%,rgba(255,194,210,0.16),rgba(255,194,210,0)_70%)]" />
            <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(84%_50%_at_18%_8%,rgba(255,108,136,0.22),rgba(255,108,136,0)_64%),radial-gradient(52%_40%_at_88%_88%,rgba(168,28,52,0.3),rgba(168,28,52,0)_70%)]" />
            <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(130%_110%_at_50%_50%,rgba(0,0,0,0)_58%,rgba(0,0,0,0.68)_100%)]" />
            <div className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit] border border-[#ffb8c8]/42 [box-shadow:inset_0_0_0_1px_rgba(255,132,156,0.2),0_0_30px_rgba(234,56,86,0.26)]" />
            <div className="pointer-events-none absolute left-[2px] top-[9%] z-[1] h-[82%] w-[2px] bg-[linear-gradient(180deg,rgba(255,182,198,0),rgba(255,118,144,0.86),rgba(255,182,198,0))] blur-[0.4px]" />
            <div className="pointer-events-none absolute right-[2px] top-[9%] z-[1] h-[82%] w-[2px] bg-[linear-gradient(180deg,rgba(255,182,198,0),rgba(255,106,136,0.82),rgba(255,182,198,0))] blur-[0.4px]" />
            <div className="pointer-events-none absolute inset-x-[7%] top-[2px] z-[1] h-[2px] bg-[linear-gradient(90deg,rgba(255,186,202,0),rgba(255,132,156,0.95),rgba(255,186,202,0))] blur-[0.35px]" />
            <div className="pointer-events-none absolute inset-x-[9%] bottom-[2px] z-[1] h-[2px] bg-[linear-gradient(90deg,rgba(255,186,202,0),rgba(255,96,128,0.82),rgba(255,186,202,0))] blur-[0.45px]" />
            <div className="pointer-events-none absolute left-0 top-0 z-[1] h-16 w-16 bg-[radial-gradient(circle_at_0%_0%,rgba(255,166,186,0.54),rgba(255,166,186,0)_72%)]" />
            <div className="pointer-events-none absolute right-0 bottom-0 z-[1] h-16 w-16 bg-[radial-gradient(circle_at_100%_100%,rgba(255,106,136,0.46),rgba(255,106,136,0)_72%)]" />
            <div className="pointer-events-none absolute right-6 top-5 z-0 h-10 w-10 rounded-full bg-[radial-gradient(circle,rgba(255,174,194,0.8)_0%,rgba(255,174,194,0)_72%)] blur-[6px]" />
            <div className="pointer-events-none absolute inset-x-[10%] top-[1px] h-px bg-[linear-gradient(90deg,rgba(255,176,190,0),rgba(255,176,190,0.9),rgba(255,176,190,0))]" />

            <div className="relative space-y-3 sm:space-y-3.5">
              {premiumFaqItems.map((item, index) => {
                const isOpen = openIndex === index;
                const contentId = `${idPrefix}-answer-${index}`;

                return (
                  <article
                    key={item.question}
                    className={cn(
                      "group relative overflow-hidden rounded-[22px] border backdrop-blur-[12px] transition-all duration-300",
                      isOpen
                        ? "border-[#ffd7df]/86 bg-[linear-gradient(158deg,rgba(102,26,40,0.8),rgba(44,12,22,0.92))] shadow-[0_40px_70px_rgba(0,0,0,0.62),0_0_68px_rgba(228,54,88,0.48),0_16px_40px_rgba(176,28,50,0.5),inset_0_1px_0_rgba(255,238,243,0.28),inset_0_-18px_28px_rgba(0,0,0,0.3),inset_0_0_54px_rgba(252,72,106,0.34)]"
                        : "border-[#ffbccb]/14 bg-[linear-gradient(158deg,rgba(28,9,15,0.52),rgba(14,5,10,0.68))] shadow-[0_6px_12px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.04)] hover:border-[#ffb9c8]/22",
                    )}
                  >
                    <div
                      className={cn(
                        "pointer-events-none absolute inset-0 transition-opacity duration-300",
                        isOpen
                          ? "opacity-100 bg-[radial-gradient(circle_at_14%_0%,rgba(255,112,136,0.34),rgba(255,112,136,0)_44%),radial-gradient(circle_at_84%_100%,rgba(172,26,48,0.24),rgba(172,26,48,0)_56%)]"
                          : "opacity-0",
                      )}
                    />

                    {isOpen ? (
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-[0.2] [background-image:radial-gradient(rgba(255,214,224,0.66)_0.55px,transparent_0.55px)] [background-size:6px_6px] [mask-image:radial-gradient(72%_84%_at_50%_52%,black_0%,rgba(0,0,0,0.58)_62%,transparent_100%)]"
                      />
                    ) : null}

                    {isOpen ? (
                      <motion.span
                        aria-hidden="true"
                        initial={{ x: "-130%", opacity: 0 }}
                        animate={shouldReduceMotion ? { x: "-130%", opacity: 0 } : { x: ["-130%", "150%"], opacity: [0, 0.58, 0] }}
                        transition={shouldReduceMotion ? { duration: 0 } : { duration: 3.4, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.6 }}
                        className="pointer-events-none absolute inset-y-0 z-[1] w-[34%] bg-[linear-gradient(105deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.32)_42%,rgba(255,170,186,0.28)_52%,rgba(255,255,255,0)_100%)] blur-[1px]"
                      />
                    ) : null}

                    {isOpen ? (
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-[10%] top-[1px] h-px bg-[linear-gradient(90deg,rgba(255,228,234,0),rgba(255,228,234,0.9),rgba(255,228,234,0))]"
                      />
                    ) : null}

                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                      onClick={() => toggleItem(index)}
                      className={cn(
                        "relative flex w-full items-center justify-between gap-4 text-left transition-[padding] duration-300",
                        isOpen ? "px-5 py-[1.24rem] sm:px-6 sm:py-[1.34rem]" : "px-5 py-[0.72rem] sm:px-6 sm:py-[0.82rem]",
                      )}
                    >
                      <span
                        className={cn(
                          "pr-2 font-semibold leading-snug transition-colors duration-300",
                          isOpen ? "text-[1.09rem] text-[#fff7f9] sm:text-[1.14rem]" : "text-[0.98rem] text-[#f8e4ea]/78 sm:text-[1.02rem]",
                        )}
                      >
                        {item.question}
                      </span>

                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: shouldReduceMotion ? 0 : 0.22, ease: "easeOut" }}
                        className={cn(
                          "inline-flex shrink-0 items-center justify-center rounded-full border leading-none transition-all duration-300",
                          isOpen
                            ? "h-9 w-9 border-[#ffc0ce]/88 bg-[linear-gradient(150deg,rgba(122,20,36,0.8),rgba(66,12,24,0.88))] text-[1.55rem] text-[#fff0f4] shadow-[0_0_22px_rgba(238,48,78,0.62)]"
                            : "h-8 w-8 border-[#ff879d]/24 bg-[linear-gradient(150deg,rgba(36,10,16,0.48),rgba(18,6,11,0.66))] text-[1.34rem] text-[#ff9db0]/82",
                        )}
                      >
                        +
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          id={contentId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                          className="relative overflow-hidden"
                        >
                          <div className="pointer-events-none mx-5 h-px bg-[linear-gradient(90deg,rgba(255,186,200,0),rgba(255,186,200,0.5),rgba(255,186,200,0))] sm:mx-6" />
                          <p className="px-5 pb-8 pt-5 text-[1rem] leading-[1.86] text-[#ffedf2]/92 sm:px-6 sm:pb-9 sm:pt-[1.2rem] sm:text-[1.04rem]">
                            {item.answer}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </article>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
