"use client";

import { motion } from "framer-motion";

import { FlagLeft, FlagRight } from "@/components/background/flag";
import { BGCountdown } from "@/components/background/wood";
import { MotionText } from "@/components/motion/text";

import { ExpiredNotice, ShowCounter, useCountdown } from "./countdown-timer";

export function Countdown() {
  const [days, hours, minutes, seconds] = useCountdown("2024-06-08T16:59:00Z");

  return (
    <section
      id="countdown"
      className="relative mt-10 flex flex-col items-center bg-[#E2BF91] bg-opacity-65 pb-40 pt-20 md:mt-32 lg:mt-36"
    >
      <h2 className="scroll-m-20 pb-2 font-wildrodeo text-5xl font-semibold tracking-tight text-[#31180E] md:text-7xl lg:text-8xl">
        <MotionText text={"Hitung Mundur"} />
      </h2>

      <div className="relative mt-6 flex w-[600px] items-center px-4 md:w-[750px] lg:w-[1000px]">
        <motion.div
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 200,
          }}
          className="absolute left-0 right-0 z-10 flex items-center justify-center font-western text-[#E6E7CB]"
        >
          {seconds &&
            minutes &&
            hours &&
            (seconds < 0 && minutes < 0 && hours < 0 ? (
              <ExpiredNotice />
            ) : (
              <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
              />
            ))}
        </motion.div>
        <BGCountdown />
      </div>

      <div className="mt-4">
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 200,
            delay: 2,
          }}
          className="text-center font-serif text-lg text-[#31180E] md:text-xl lg:text-2xl"
        >
          {"*Menuju akhir masa pendaftaran dan penyerahan Poster"}
        </motion.p>
      </div>

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 8,
          mass: 1,
          delay: 0.5,
        }}
        viewport={{ once: true, amount: 0.5 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="absolute top-0 z-10 hidden h-10 justify-between brightness-95 md:flex md:w-full"
      >
        <FlagLeft />
        <FlagRight />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 8,
          mass: 1,
          delay: 1,
        }}
        viewport={{ once: true, amount: 0.5 }}
        whileInView={{ opacity: 1 }}
        className="absolute top-0 -z-10 h-full w-full bg-[url('https://raw.githubusercontent.com/himarplupi/assets-himarpl/main/lomba/bg-wave-sand.jpg')] bg-[length:64px_64px] bg-repeat "
      />
    </section>
  );
}
