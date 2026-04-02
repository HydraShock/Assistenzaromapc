"use client";

import { motion } from "framer-motion";

type GlowingButtonProps = {
  href: string;
  label: string;
  icon?: React.ReactNode;
  variant?: "primary" | "ghost";
};

export function GlowingButton({
  href,
  label,
  icon,
  variant = "primary",
}: GlowingButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <motion.a
      href={href}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className={[
        "group relative inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-colors",
        isPrimary
          ? "border-[#ff3a3a] bg-[#8B0000]/70 text-white shadow-[0_0_25px_rgba(255,30,30,0.35)]"
          : "border-white/25 bg-black/45 text-white",
      ].join(" ")}
    >
      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ff1e1e]/0 via-[#ff1e1e]/35 to-[#ff1e1e]/0 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative z-10 flex items-center gap-2">
        {icon}
        {label}
      </span>
    </motion.a>
  );
}
