"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import { Desert1, DesertMountain1 } from "@/components/background/desert";
import { MotionText } from "@/components/motion/text";
import { Button, FMButton } from "@/components/ui/button";

export function Banner() {
  const router = useRouter();

  return (
    <section
      id="banner"
      className="relative flex min-h-screen flex-col items-center justify-center gap-y-4"
    >
      <div className="flex flex-col items-center justify-center bg-zinc-50 bg-opacity-75 px-6 md:py-2 ">
        <h1 className="scroll-m-20 font-wildrodeo text-6xl uppercase tracking-tight text-[#7B3018] md:text-8xl lg:text-9xl">
          <MotionText text="Lomba Poster" />
        </h1>
        <motion.h3 className="scroll-m-20 font-wildrodeo text-3xl tracking-tight text-[#7B3018] md:text-5xl lg:text-6xl">
          <MotionText text="Dies Natalis RPL kelima" />
        </motion.h3>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 100, damping: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        className="max-w-[512px] rounded-md bg-zinc-50 bg-opacity-75 px-6 py-2 text-center font-serif leading-6 md:text-lg"
      >
        {
          "Lomba ini merupakan bagian dari acara Dies Natalis jurusan Rekayasa Perangkat Lunak ke-5 yang diselenggarakan oleh Himpunan Mahasiswa Rekayasa Perangkat Lunak Universitas Pendidikan Indonesia."
        }
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 100, damping: 8, delay: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex w-full flex-col items-center gap-y-4 px-8 md:w-[500px] md:flex-row md:gap-x-4"
      >
        <FMButton
          className="w-full"
          onClick={() => {
            router.push("https://forms.gle/8Jwc16FX2u8RGkgq5");
          }}
        >
          Daftar Sekarang
        </FMButton>
        <Button variant="default" className="w-full">
          Buku Panduan
        </Button>
      </motion.div>

      <motion.div className="absolute bottom-20 left-28 -z-50 w-full brightness-90 md:bottom-5 md:left-32 lg:bottom-10 lg:left-56">
        <motion.div
          initial={{ y: 20, x: -100, scale: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 8,
            mass: 1,
            delay: 2,
          }}
          animate={{ y: 0, x: 0, scale: 1 }}
          className="aspect-square w-32 rounded-full bg-[#F7EE86] md:w-64"
        />
      </motion.div>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 8,
          mass: 1,
          delay: 1.5,
        }}
        animate={{ y: 0, opacity: 1 }}
        className="absolute bottom-0 left-0 -z-50 w-full brightness-90 md:-bottom-32 lg:-bottom-40"
      >
        <DesertMountain1 />
      </motion.div>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 8,
          mass: 1,
          delay: 1,
        }}
        animate={{ y: 0, opacity: 1 }}
        className="absolute -bottom-10 -z-50 w-full brightness-95 md:-bottom-28 lg:-bottom-36"
      >
        <Desert1 />
      </motion.div>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 8,
          mass: 1,
          delay: 2,
        }}
        animate={{ y: 0, opacity: 1 }}
        className="md-bottom-10 absolute -bottom-10 -z-50 h-5 w-full bg-[#A2672F] brightness-95 md:-bottom-32 md:h-10 lg:-bottom-40"
      />
    </section>
  );
}
