"use client";

import { motion } from "framer-motion";

import { FlagLeft, FlagRight } from "@/components/background/flag";
import { BGCountdown } from "@/components/background/wood";

import { ShowCounter, useCountdown } from "./countdown-timer";

export function Countdown() {
  const [days, hours, minutes, seconds] = useCountdown("2024-06-08");

  return (
    <section
      id="countdown"
      className="relative mt-10 flex flex-col items-center bg-[#E2BF91] bg-opacity-65 pb-40 pt-20 md:mt-32 lg:mt-36"
    >
      <h2 className="scroll-m-20 pb-2 font-wildrodeo text-5xl font-semibold tracking-tight text-[#31180E] md:text-7xl lg:text-8xl">
        Hitung Mundur
      </h2>

      <div className="relative mt-6 flex w-[600px] items-center px-4 md:w-[750px] lg:w-[1000px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute left-0 right-0 z-10 flex items-center justify-center font-western text-[#E6E7CB]"
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

      <div className="absolute top-0 z-10 hidden h-10 justify-between brightness-95 md:flex md:w-full">
        <FlagLeft />
        <FlagRight />
      </div>

      <div className="absolute top-0 -z-10 h-full w-full bg-[url('https://raw.githubusercontent.com/himarplupi/assets-himarpl/main/lomba/bg-wave-sand.jpg')] bg-[length:64px_64px] bg-repeat " />
    </section>
  );
}
