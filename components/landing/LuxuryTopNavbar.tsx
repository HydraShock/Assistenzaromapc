"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type DropdownKey = "servizi" | "zone";

type MenuItem = {
  id: string;
  label: string;
  href: string;
  dropdown?: DropdownKey;
};

const menuItems: MenuItem[] = [
  { id: "servizi", label: "Servizi", href: "#servizi", dropdown: "servizi" },
  { id: "zone", label: "Zone di Roma", href: "#zone-di-roma", dropdown: "zone" },
  { id: "guide", label: "Guide", href: "/assistenza-a-domicilio" },
  { id: "faq", label: "FAQ", href: "#faq" },
  { id: "recensioni", label: "Recensioni", href: "#recensioni" },
  { id: "contatti", label: "Contatti", href: "#contatti" },
];

const serviziLinks = [
  { label: "Assistenza PC a domicilio", href: "/servizi/riparazione-pc-notebook/roma-centro" },
  { label: "Riparazione notebook", href: "/servizi/riparazione-pc-notebook/roma-nord" },
  { label: "Problemi Wi-Fi e rete", href: "/servizi/assistenza-wifi-rete/roma-est" },
  { label: "Stampanti e periferiche", href: "/servizi/configurazione-stampanti/roma-sud" },
] as const;

const zoneLinks = [
  { label: "Roma Nord", href: "/zone/roma-nord" },
  { label: "Roma Sud", href: "/zone/roma-sud" },
  { label: "Roma Est", href: "/zone/roma-est" },
  { label: "Roma Ovest", href: "/zone/roma-ovest" },
  { label: "Roma Centro", href: "/zone/roma-centro" },
  { label: "Roma Litorale", href: "/zone/roma-litorale" },
] as const;

const quartieriLinks = [
  { label: "Prati", href: "/zone/roma-centro" },
  { label: "San Giovanni", href: "/zone/roma-centro" },
  { label: "Eur", href: "/zone/roma-sud" },
  { label: "Monteverde", href: "/zone/roma-ovest" },
  { label: "Parioli", href: "/zone/roma-nord" },
  { label: "Nomentano", href: "/zone/roma-nord" },
  { label: "Centocelle", href: "/zone/roma-est" },
  { label: "Ostia", href: "/zone/roma-litorale" },
] as const;

export function LuxuryTopNavbar() {
  const { scrollY } = useScroll();
  const [compact, setCompact] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
  const [activeItem, setActiveItem] = useState<string>("servizi");
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openDropdownMenu = (key: DropdownKey | null) => {
    clearCloseTimer();
    setOpenDropdown(key);
  };

  const scheduleDropdownClose = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 140);
  };

  useEffect(() => {
    return () => {
      clearCloseTimer();
    };
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const isCompact = latest > 24;
    if (isCompact !== compact) {
      setCompact(isCompact);
    }
    if (latest > 24 && openDropdown) {
      setOpenDropdown(null);
    }
  });

  const closeMenus = () => {
    clearCloseTimer();
    setOpenDropdown(null);
    setMobileOpen(false);
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-[95] flex justify-center px-3 sm:px-5">
      <motion.nav
        initial={false}
        animate={{ scale: compact ? 0.985 : 1, y: compact ? -2 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onMouseEnter={clearCloseTimer}
        onMouseLeave={scheduleDropdownClose}
        className={cn(
          "pointer-events-auto relative w-full max-w-[1220px] overflow-visible rounded-[30px] border backdrop-blur-xl transition-[box-shadow,background-color,border-color] duration-300",
          compact
            ? "border-[#ff99ad]/22 bg-[linear-gradient(160deg,rgba(12,5,9,0.9),rgba(8,3,6,0.94))] shadow-[0_22px_52px_rgba(0,0,0,0.62),0_0_0_1px_rgba(255,120,146,0.14),inset_0_1px_0_rgba(255,236,242,0.12)]"
            : "border-[#ff9db2]/26 bg-[linear-gradient(160deg,rgba(18,7,12,0.8),rgba(10,4,8,0.86))] shadow-[0_28px_68px_rgba(0,0,0,0.58),0_0_0_1px_rgba(255,120,146,0.16),inset_0_1px_0_rgba(255,236,242,0.14)]",
        )}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(50%_42%_at_50%_0%,rgba(238,56,88,0.2),rgba(238,56,88,0)_74%)]" />
        <div className="pointer-events-none absolute inset-x-[8%] top-[1px] h-px bg-[linear-gradient(90deg,rgba(255,170,190,0),rgba(255,200,212,0.92),rgba(255,170,190,0))]" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-[linear-gradient(180deg,rgba(255,136,158,0),rgba(255,136,158,0.46),rgba(255,136,158,0))]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-[linear-gradient(180deg,rgba(255,136,158,0),rgba(255,136,158,0.42),rgba(255,136,158,0))]" />

        <div
          className={cn(
            "relative flex items-center justify-between gap-3 px-4 sm:px-6 lg:px-7",
            compact ? "py-2.5 lg:py-2.5" : "py-3 lg:py-3.5",
          )}
        >
          <a
            href="#home"
            onClick={() => {
              setActiveItem("home");
              closeMenus();
            }}
            className="group inline-flex items-center gap-3"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-[12px] border border-[#ff97ae]/36 bg-[linear-gradient(160deg,rgba(170,22,46,0.58),rgba(74,12,24,0.72))] text-[0.8rem] font-semibold tracking-[0.04em] text-[#fff2f6] shadow-[0_10px_20px_rgba(0,0,0,0.36),inset_0_1px_0_rgba(255,236,242,0.24)] transition-transform duration-300 group-hover:scale-[1.03]">
              AR
            </span>
            <span className="hidden text-[0.93rem] font-semibold tracking-[0.04em] text-[#fbe8ee] sm:inline-block">
              Assistenza Roma PC
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1.5">
            {menuItems.map((item) => {
              const isActive = activeItem === item.id;
              const isDropdownOpen = openDropdown === item.dropdown;

              return (
                <div key={item.id} className="relative">
                  {item.dropdown ? (
                    <button
                      type="button"
                      onMouseEnter={() => openDropdownMenu(item.dropdown ?? null)}
                      onFocus={() => openDropdownMenu(item.dropdown ?? null)}
                      onClick={() => {
                        setActiveItem(item.id);
                        clearCloseTimer();
                        setOpenDropdown((current) => (current === item.dropdown ? null : item.dropdown ?? null));
                      }}
                      className={cn(
                        "group relative inline-flex items-center gap-1.5 rounded-[12px] px-3.5 py-2 text-[0.88rem] font-medium transition-all duration-250",
                        isActive ? "text-[#fff4f7]" : "text-[#f0d3dc]/86 hover:text-[#fff2f6]",
                      )}
                    >
                      <span
                        className={cn(
                          "pointer-events-none absolute inset-0 rounded-[inherit] border transition-all duration-250",
                          isActive || isDropdownOpen
                            ? "border-[#ffb0c0]/34 bg-[linear-gradient(160deg,rgba(132,22,42,0.42),rgba(58,12,24,0.36))] shadow-[0_0_20px_rgba(230,58,90,0.22)]"
                            : "border-transparent group-hover:border-[#ff9fb4]/20 group-hover:bg-[linear-gradient(160deg,rgba(108,18,36,0.3),rgba(40,10,18,0.24))]",
                        )}
                      />
                      <span className="relative">{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "relative h-3.5 w-3.5 transition-transform duration-250",
                          isDropdownOpen ? "rotate-180 text-[#ffd5df]" : "text-[#f2c6d2]/80",
                        )}
                      />
                      <span
                        className={cn(
                          "pointer-events-none absolute inset-x-3 -bottom-[2px] h-px rounded-full transition-opacity duration-250",
                          isActive || isDropdownOpen
                            ? "opacity-100 bg-[linear-gradient(90deg,rgba(255,122,146,0),rgba(255,122,146,0.9),rgba(255,122,146,0))]"
                            : "opacity-0",
                        )}
                      />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => {
                        setActiveItem(item.id);
                        closeMenus();
                      }}
                      className={cn(
                        "group relative inline-flex items-center rounded-[12px] px-3.5 py-2 text-[0.88rem] font-medium transition-all duration-250",
                        isActive ? "text-[#fff4f7]" : "text-[#f0d3dc]/86 hover:text-[#fff2f6]",
                      )}
                    >
                      <span
                        className={cn(
                          "pointer-events-none absolute inset-0 rounded-[inherit] border transition-all duration-250",
                          isActive
                            ? "border-[#ffb0c0]/34 bg-[linear-gradient(160deg,rgba(132,22,42,0.42),rgba(58,12,24,0.36))] shadow-[0_0_20px_rgba(230,58,90,0.22)]"
                            : "border-transparent group-hover:border-[#ff9fb4]/20 group-hover:bg-[linear-gradient(160deg,rgba(108,18,36,0.3),rgba(40,10,18,0.24))]",
                        )}
                      />
                      <span className="relative">{item.label}</span>
                      <span
                        className={cn(
                          "pointer-events-none absolute inset-x-3 -bottom-[2px] h-px rounded-full transition-opacity duration-250",
                          isActive
                            ? "opacity-100 bg-[linear-gradient(90deg,rgba(255,122,146,0),rgba(255,122,146,0.9),rgba(255,122,146,0))]"
                            : "opacity-0",
                        )}
                      />
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ff9eb3]/24 bg-[linear-gradient(150deg,rgba(86,14,28,0.42),rgba(38,10,18,0.3))] px-3 py-1.5 text-[0.72rem] font-semibold tracking-[0.08em] text-[#ffd6df]">
              <span className="h-[6px] w-[6px] rounded-full bg-[#ff4d71] shadow-[0_0_10px_rgba(255,78,108,0.52)]" />
              Disponibile 7/7
            </span>

            <a
              href="#contatti"
              onClick={() => {
                setActiveItem("contatti");
                closeMenus();
              }}
              className="group relative inline-flex min-w-[186px] items-center justify-center overflow-hidden rounded-[13px] border border-[#ffbfd0]/68 bg-[linear-gradient(156deg,#e23359_0%,#b31539_52%,#770b21_100%)] px-5 py-2.5 text-[0.86rem] font-semibold tracking-[0.03em] text-[#fff8fa] shadow-[0_16px_34px_rgba(94,14,30,0.72),inset_0_0_22px_rgba(244,70,102,0.28),inset_0_1px_0_rgba(255,242,246,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ffe5eb]/86 hover:shadow-[0_22px_42px_rgba(102,16,34,0.8),0_0_28px_rgba(246,78,110,0.42)]"
            >
              <span className="pointer-events-none absolute inset-x-[12%] top-[2px] h-[42%] rounded-full bg-[linear-gradient(180deg,rgba(255,214,224,0.56),rgba(255,214,224,0)_100%)]" />
              <span className="relative">Richiedi assistenza</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-[11px] border border-[#ff9fb3]/28 bg-[linear-gradient(160deg,rgba(66,12,24,0.58),rgba(24,8,14,0.66))] text-[#ffe7ed] shadow-[0_10px_20px_rgba(0,0,0,0.36),inset_0_1px_0_rgba(255,236,242,0.16)] transition-colors duration-250 hover:text-white lg:hidden"
            aria-expanded={mobileOpen}
            aria-label="Apri menu"
          >
            {mobileOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>

        <AnimatePresence>
          {openDropdown ? (
            <motion.div
              key={openDropdown}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onMouseEnter={clearCloseTimer}
              onMouseLeave={scheduleDropdownClose}
              className="absolute left-1/2 top-[calc(100%+2px)] hidden w-[min(96vw,760px)] -translate-x-1/2 rounded-[24px] border border-[#ff9fb4]/24 bg-[linear-gradient(158deg,rgba(16,7,11,0.94),rgba(10,4,8,0.96))] p-6 shadow-[0_28px_66px_rgba(0,0,0,0.66),0_0_26px_rgba(222,48,80,0.18),inset_0_1px_0_rgba(255,238,243,0.12)] lg:block"
            >
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(44%_38%_at_50%_0%,rgba(234,58,88,0.2),rgba(234,58,88,0)_74%)]" />
              <div className="relative grid grid-cols-2 gap-6">
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#ffcfda]/84">
                    {openDropdown === "servizi" ? "Servizi premium" : "Quadranti Roma"}
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {(openDropdown === "servizi" ? serviziLinks : zoneLinks).map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          onClick={closeMenus}
                          className="group inline-flex items-center gap-2 text-[0.92rem] text-[#f6d8e0]/84 transition-colors duration-250 hover:text-[#fff4f8]"
                        >
                          <span className="h-[5px] w-[5px] rounded-full bg-[#ff6f92]/68 shadow-[0_0_10px_rgba(255,111,146,0.34)] transition-transform duration-250 group-hover:scale-125" />
                          <span>{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-l border-[#ff9fb4]/16 pl-6">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#ffcfda]/84">
                    {openDropdown === "servizi" ? "Zone coperte" : "Quartieri principali"}
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {(openDropdown === "servizi" ? zoneLinks : quartieriLinks).map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          onClick={closeMenus}
                          className="group inline-flex items-center gap-2 text-[0.92rem] text-[#f6d8e0]/84 transition-colors duration-250 hover:text-[#fff4f8]"
                        >
                          <span className="h-[5px] w-[5px] rounded-full bg-[#ff6f92]/56 shadow-[0_0_10px_rgba(255,111,146,0.24)] transition-transform duration-250 group-hover:scale-125" />
                          <span>{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-0 right-0 top-[calc(100%+10px)] overflow-hidden rounded-[20px] border border-[#ff9fb4]/22 bg-[linear-gradient(160deg,rgba(16,7,11,0.96),rgba(9,4,8,0.98))] p-4 shadow-[0_22px_52px_rgba(0,0,0,0.62),inset_0_1px_0_rgba(255,238,243,0.12)] lg:hidden"
            >
              <ul className="space-y-1.5">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={() => {
                        setActiveItem(item.id);
                        closeMenus();
                      }}
                      className="block rounded-[11px] border border-transparent px-3 py-2.5 text-[0.92rem] text-[#f6d8e0]/88 transition-colors duration-250 hover:border-[#ff9fb4]/22 hover:bg-[linear-gradient(160deg,rgba(106,18,36,0.22),rgba(34,10,16,0.2))] hover:text-[#fff4f8]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-3 border-t border-[#ff9fb4]/16 pt-3">
                <a
                  href="#contatti"
                  onClick={() => {
                    setActiveItem("contatti");
                    closeMenus();
                  }}
                  className="inline-flex w-full items-center justify-center rounded-[12px] border border-[#ffbfd0]/64 bg-[linear-gradient(156deg,#de3157_0%,#b21438_56%,#760b20_100%)] px-4 py-2.5 text-[0.88rem] font-semibold text-[#fff8fa] shadow-[0_14px_30px_rgba(88,14,30,0.68),inset_0_1px_0_rgba(255,242,246,0.36)]"
                >
                  Richiedi assistenza
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
