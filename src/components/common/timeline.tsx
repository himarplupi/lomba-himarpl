"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

import { MotionText } from "@/components/motion/text";

export function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end 200px"],
  });

  return (
    <section id="timeline" className="relative flex">
      <div className="bg-[#E6E7CB] md:basis-1/3"></div>
      <div className="relative h-[768px] basis-full space-y-8 bg-[#E2BF91] bg-opacity-65 px-10 py-20 md:basis-2/3">
        <h2 className="scroll-m-20 text-center font-wildrodeo text-5xl font-semibold tracking-tight text-[#31180E] md:text-left md:text-7xl lg:text-8xl">
          <MotionText text="Jadwal Lomba" />
        </h2>
        <div className="absolute -top-10 left-0 -z-10 h-full w-full bg-[url('https://raw.githubusercontent.com/himarplupi/assets-himarpl/main/lomba/bg-wave-sand.jpg')] bg-[length:64px_64px] bg-repeat " />
      </div>
      <div ref={ref} className="absolute top-32 ml-4 flex w-full">
        <div className="flex basis-1/6 flex-col items-center justify-start md:basis-1/3">
          <motion.div
            initial={{ y: 20, x: -40, scale: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 8,
              mass: 1,
            }}
            viewport={{ once: true, amount: 0.5 }}
            whileInView={{ y: 0, x: 0, scale: 1 }}
            className="relative z-10 mt-20 grid aspect-square w-12 place-content-center rounded-full bg-[#7B3018]"
          />

          <motion.div
            initial={{ y: 20, x: -40, scale: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 8,
              mass: 1,
            }}
            viewport={{ once: true, amount: 0.5 }}
            whileInView={{ y: 0, x: 0, scale: 1 }}
            className="relative z-10 mt-20 grid aspect-square w-12 place-content-center rounded-full bg-[#7B3018]"
          />

          <motion.div
            initial={{ y: 20, x: -40, scale: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 8,
              mass: 1,
            }}
            viewport={{ once: true, amount: 0.5 }}
            whileInView={{ y: 0, x: 0, scale: 1 }}
            className="relative z-10 mt-20 grid aspect-square w-12 place-content-center rounded-full bg-[#7B3018]"
          />

          <motion.div
            initial={{ y: 20, x: -40, scale: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 8,
              mass: 1,
            }}
            viewport={{ once: true, amount: 0.5 }}
            whileInView={{ y: 0, x: 0, scale: 1 }}
            className="relative z-10 mt-20 grid aspect-square w-12 place-content-center rounded-full bg-[#7B3018]"
          />

          <motion.div
            style={{ scaleY: scrollYProgress, originY: 0 }}
            className="absolute top-28 h-96 w-2 bg-[#31180E]"
          />
        </div>
        <div className=" mt-20 basis-5/6 space-y-[78px] pr-8 md:basis-2/3 md:space-y-16 md:px-10">
          <div>
            <h4 className="scroll-m-20 font-wildrodeo text-xl font-semibold tracking-tight text-[#31180E] md:text-3xl lg:text-4xl">
              <MotionText text="18 Mei 2024" />
            </h4>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 200,
                delay: 0.5,
              }}
              viewport={{ amount: 0.5, once: true }}
              className="font-serif leading-6 text-[#31180E] md:text-lg"
            >
              {"Pendaftaran dan Penyerahan Poster"}
            </motion.p>
          </div>
          <div>
            <h4 className="scroll-m-20 font-wildrodeo text-xl font-semibold tracking-tight text-[#31180E] md:text-3xl lg:text-4xl">
              <MotionText text="8 Juni 2024" />
            </h4>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 200,
                delay: 0.5,
              }}
              viewport={{ amount: 0.5, once: true }}
              className="font-serif leading-6 text-[#31180E] md:text-lg"
            >
              {"Akhir Masa Pendaftaran dan Penyerahan Poster"}
            </motion.p>
          </div>
          <div>
            <h4 className="scroll-m-20 font-wildrodeo text-xl font-semibold tracking-tight text-[#31180E] md:text-3xl lg:text-4xl">
              <MotionText text="9 hingga 12 Juni 2024" />
            </h4>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 200,
                delay: 0.5,
              }}
              viewport={{ amount: 0.5, once: true }}
              className="font-serif leading-6 text-[#31180E] md:text-lg"
            >
              {"Masa Penilaian Poster"}
            </motion.p>
          </div>
          <div>
            <h4 className="scroll-m-20 font-wildrodeo text-xl font-semibold tracking-tight text-[#31180E] md:text-3xl lg:text-4xl">
              <MotionText text="13 Juni 2024" />
            </h4>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 200,
                delay: 0.5,
              }}
              viewport={{ amount: 0.5, once: true }}
              className="font-serif leading-6 text-[#31180E] md:text-lg"
            >
              {"Pengumuman Pemenang Lomba"}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
