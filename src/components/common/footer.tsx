"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import { MotionText } from "@/components/motion/text";
import { Button, FMButton } from "@/components/ui/button";
import LogoHIMAPEDIA from "@/images/logo-himapedia.jpg";
import LogoHIMAPGSD from "@/images/logo-himapgsd.jpg";

export function Footer() {
  const router = useRouter();

  return (
    <footer className="relative bg-opacity-50 bg-[url('https://raw.githubusercontent.com/himarplupi/assets-himarpl/main/lomba/bg-art-2.jpg')] bg-cover">
      <div className="absolute -top-5 h-5 w-full bg-[#A2672F] brightness-95" />
      <div className="absolute h-full w-full bg-gradient-to-b from-[#7B3018] to-[#31180E] opacity-75 " />
      <div className="relative flex min-h-96 flex-col items-center justify-center gap-y-8 px-4 py-6 md:flex-row md:justify-evenly md:gap-x-6">
        <div className="flex flex-col items-center gap-y-4">
          <h3 className="max-w-[768px] scroll-m-20 text-center font-wildrodeo text-3xl tracking-tight text-zinc-50 md:text-5xl lg:text-6xl">
            <MotionText text="Ayo Daftar dan Serahkan Kreasi Kamu Sekarang" />
          </h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 8,
              delay: 0.5,
            }}
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
        </div>

        <div className="flex flex-col items-center gap-y-4">
          <h3 className="max-w-[768px] scroll-m-20 text-center font-wildrodeo text-3xl tracking-tight text-zinc-50 md:text-5xl lg:text-6xl">
            <MotionText text="Media Partner" />
          </h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 8,
              delay: 0.5,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex items-center gap-x-4"
          >
            <div className="relative aspect-square w-32 overflow-hidden rounded-md shadow md:w-20">
              <Image src={LogoHIMAPGSD} alt="Logo HIMAPGSD" fill />
            </div>
            <div className="relative aspect-square w-32 overflow-hidden rounded-md shadow md:w-20">
              <Image src={LogoHIMAPEDIA} alt="Logo HIMAPEDIA" fill />
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
