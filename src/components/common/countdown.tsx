"use client";

import { motion } from "framer-motion";

import { BGCountdown } from "@/components/background/wood";

import { ShowCounter, useCountdown } from "./countdown-timer";

export function Countdown() {
  const [days, hours, minutes, seconds] = useCountdown("2024-06-08");

  return (
    <section className="mt-36 flex flex-col items-center bg-[#E3BB67] pb-20 pt-10">
      <h2 className="scroll-m-20 pb-2 font-wildrodeo text-8xl font-semibold tracking-tight text-[#31180E]">
        Hitung Mundur
      </h2>

      <div className="relative mt-6 flex items-center lg:w-[1000px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute left-0 right-0 flex items-center justify-center font-western text-[#E6E7CB]"
        >
          <ShowCounter
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        </motion.div>
        <BGCountdown />
      </div>
    </section>
  );
}
