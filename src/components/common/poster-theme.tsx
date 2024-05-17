"use client";

import { motion } from "framer-motion";

import { HorseShoe } from "@/components/background/horseshoe";
import { MotionText } from "@/components/motion/text";

export function PosterTheme() {
  return (
    <section id="poster-theme" className="relative flex">
      <div className="md:basis-1/3">
        <div className="h-full w-full bg-[url('https://raw.githubusercontent.com/himarplupi/assets-himarpl/main/lomba/bg-indonesia.jpg')] object-cover brightness-75">
          <div className="h-full w-full bg-gradient-to-b from-[#31180E] to-[#7B3018] opacity-80" />
        </div>
      </div>
      <div className="basis-full space-y-8 bg-[#7B3018] px-10 py-20 md:basis-2/3">
        <div>
          <h2 className="scroll-m-20 font-wildrodeo text-5xl font-semibold tracking-tight text-zinc-50 md:text-7xl lg:text-8xl ">
            <MotionText text="Tema" />
          </h2>
          <motion.p
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 200,
            }}
            className="text-pretty font-serif leading-6 text-zinc-100 md:text-lg "
          >
            {"Tema untuk lomba poster Dies Natalis RPL ke-5 ini adalah "}
            <u className="underline">
              {'"Indonesia Emas VS Indonesia Cemas."'}
            </u>
          </motion.p>
        </div>
        <div>
          <h3 className="scroll-m-20 font-wildrodeo text-3xl tracking-tight text-zinc-50 md:text-5xl lg:text-6xl">
            <MotionText text="Subtema" />
          </h3>
          <motion.p
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 200,
            }}
            className="font-serif leading-6 text-zinc-100 md:text-lg "
          >
            {"Subtema untuk Lomba Poster ini adalah sebagai berikut:"}
          </motion.p>
          <motion.ol
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 200,
            }}
            className="ml-4 list-inside list-disc"
          >
            <motion.li className="font-serif leading-6 text-zinc-100 md:text-lg">
              {"Keunggulan dan Krisis Pendidikan Indonesia"}
            </motion.li>
            <motion.li className="font-serif leading-6 text-zinc-100 md:text-lg">
              {"Industri Teknologi Informasi"}
            </motion.li>
            <motion.li className="font-serif leading-6 text-zinc-100 md:text-lg">
              {"Kesenjangan Infrastruktur Publik"}
            </motion.li>
            <motion.li className="font-serif leading-6 text-zinc-100 md:text-lg">
              {"Kegelisahan Stabilitas Ekonomi"}
            </motion.li>
            <motion.li className="font-serif leading-6 text-zinc-100 md:text-lg">
              {"Implementasi Teknologi Inovatif Secara Konsumtif"}
            </motion.li>
            <motion.li className="font-serif leading-6 text-zinc-100 md:text-lg">
              {"Kemandirian dan Krisis Energi"}
            </motion.li>
            <motion.li className="font-serif leading-6 text-zinc-100 md:text-lg">
              {"Cita-Cita Masyarakat Madani"}
            </motion.li>
            <motion.li className="font-serif leading-6 text-zinc-100 md:text-lg">
              {"Kebijakan dan Informasi Publik "}
            </motion.li>
            <motion.li className="font-serif leading-6 text-zinc-100 md:text-lg">
              {"Pengembangan Sumber Daya Manusia"}
            </motion.li>
            <motion.li className="font-serif leading-6 text-zinc-100 md:text-lg">
              {"Kesehatan dan Keselamatan"}
            </motion.li>
          </motion.ol>
        </div>
      </div>

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 200,
          delay: 1,
        }}
        className="z-25 absolute bottom-20 right-20 -rotate-45 brightness-95"
      >
        <HorseShoe />
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 200,
          delay: 1,
        }}
        className="z-25 absolute right-64 top-10 rotate-45 brightness-95"
      >
        <HorseShoe />
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 200,
          delay: 1,
        }}
        className="z-25 absolute right-4 top-64 rotate-180 brightness-95"
      >
        <HorseShoe />
      </motion.div>
    </section>
  );
}
