"use client";

import { cn } from "@/lib/utils";

type SfondoFormProps = {
  className?: string;
  variant?: "dark" | "light";
};

const ambientParticles = [
  { top: "9%", left: "6%", delay: "0s", duration: "13s" },
  { top: "14%", left: "87%", delay: "1.3s", duration: "15s" },
  { top: "23%", left: "18%", delay: "2.1s", duration: "14s" },
  { top: "29%", left: "73%", delay: "0.7s", duration: "12s" },
  { top: "41%", left: "8%", delay: "2.8s", duration: "16s" },
  { top: "47%", left: "91%", delay: "1.8s", duration: "13s" },
  { top: "58%", left: "24%", delay: "0.4s", duration: "14s" },
  { top: "66%", left: "79%", delay: "2.4s", duration: "15s" },
  { top: "77%", left: "11%", delay: "1.1s", duration: "13s" },
  { top: "86%", left: "88%", delay: "2.6s", duration: "16s" },
] as const;

export function SfondoForm({ className, variant = "dark" }: SfondoFormProps) {
  const isLight = variant === "light";

  if (isLight) {
    return (
      <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
        <div className="sfondoform-base-light absolute inset-0" />
      </div>
    );
  }

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      <div className="sfondoform-base absolute inset-0" />
      <div className="sfondoform-overlay absolute inset-0" />
      <div className="appointment-ambient-glow absolute left-1/2 top-1/2 h-[560px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full" />
      <div className="appointment-vignette absolute inset-0" />
      <div className="appointment-noise absolute inset-0" />

      <div className="absolute inset-0">
        {ambientParticles.map((particle) => (
          <span
            key={`${particle.top}-${particle.left}`}
            className="appointment-particle absolute h-[2px] w-[2px] rounded-full"
            style={{
              top: particle.top,
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>
    </div>
  );
}
