"use client";

import { motion } from "framer-motion";

type ServiceCardProps = {
  title: string;
};

export function ServiceCard({ title }: ServiceCardProps) {
  return (
    <motion.article
      whileHover={{ y: -7, scale: 1.008 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className="group relative isolate aspect-square overflow-hidden rounded-[34px] border border-[#d49f57] bg-[linear-gradient(145deg,#f8f3eb_0%,#f3ece2_55%,#efe6db_100%)] p-8 shadow-[0_12px_28px_rgba(33,17,8,0.18),inset_0_1px_0_rgba(255,255,255,0.82)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[2px] rounded-[31px] border border-[#f3c78f] opacity-95"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.76] [background-image:radial-gradient(circle_at_18%_14%,rgba(255,255,255,0.95),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(209,153,86,0.17),transparent_36%),radial-gradient(circle_at_12%_78%,rgba(198,149,95,0.16),transparent_32%),repeating-linear-gradient(152deg,rgba(153,129,108,0.12)_0px,rgba(153,129,108,0.12)_1px,transparent_1px,transparent_18px)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[34px] shadow-[inset_0_0_0_1px_rgba(209,147,72,0.65),inset_0_0_24px_rgba(209,147,72,0.18)] transition-shadow duration-300 group-hover:shadow-[inset_0_0_0_1px_rgba(218,165,95,0.86),inset_0_0_34px_rgba(221,167,86,0.26)]" />
      <h3 className="relative z-10 mt-auto text-balance text-center font-roma-serif text-[1.4rem] font-semibold leading-tight text-[#4a3324]">
        {title}
      </h3>
    </motion.article>
  );
}
