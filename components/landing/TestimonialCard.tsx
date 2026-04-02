"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { StarIcon } from "./icons";

type TestimonialCardProps = {
  image: string;
  name: string;
  role: string;
  text: string;
};

export function TestimonialCard({ image, name, role, text }: TestimonialCardProps) {
  return (
    <motion.figure
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_14px_30px_rgba(0,0,0,0.35)] backdrop-blur-md"
    >
      <div className="mb-4 flex items-center gap-1 text-[#ff6f6f]">
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon key={index} />
        ))}
      </div>
      <blockquote className="text-white/85">{text}</blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <Image
          src={image}
          alt={name}
          width={44}
          height={44}
          className="h-11 w-11 rounded-full border border-[#ff4a4a]/45 bg-black/60"
        />
        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className="text-sm text-white/60">{role}</p>
        </div>
      </figcaption>
    </motion.figure>
  );
}
