"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function LaptopMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[1020px] lg:w-[125%] lg:max-w-none">
      <div className="relative aspect-[11/9] w-full">
        <motion.div
          className="absolute -right-[2%] top-[0%] w-[82%]"
          animate={{ y: [0, -16, 0], x: [0, 7, 0], rotate: [-1.2, 0.8, -1.2] }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <Image
            src="/hero/pc-monitor-layer.png"
            alt="Monitor PC Doctor"
            width={860}
            height={860}
            priority
            sizes="(min-width: 1024px) 52vw, 80vw"
            className="pointer-events-none h-auto w-full select-none object-contain drop-shadow-[0_26px_44px_rgba(0,0,0,0.75)]"
          />
        </motion.div>

        <motion.div
          className="absolute -bottom-[4%] -left-[8%] w-[66%]"
          animate={{ y: [0, 14, 0], x: [0, -10, 0], rotate: [1.2, -0.9, 1.2] }}
          transition={{ duration: 6.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <Image
            src="/hero/pc-laptop-layer.png"
            alt="Laptop PC Doctor in primo piano"
            width={845}
            height={545}
            priority
            sizes="(min-width: 1024px) 42vw, 66vw"
            className="pointer-events-none h-auto w-full select-none object-contain drop-shadow-[0_22px_38px_rgba(0,0,0,0.75)]"
          />
        </motion.div>

        <motion.div
          className="absolute -bottom-7 left-1/2 -z-10 h-[7rem] w-[88%] -translate-x-1/2 rounded-full bg-[#ff1e1e]/60 blur-3xl"
          animate={{ scale: [0.95, 1.08, 0.95], opacity: [0.42, 0.82, 0.42] }}
          transition={{ duration: 4.8, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>
    </div>
  );
}
