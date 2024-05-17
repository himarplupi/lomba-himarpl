"use client";

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
          <p className="text-pretty font-serif leading-6 text-zinc-100 md:text-lg ">
            {"Tema untuk lomba poster Dies Natalis RPL ke-5 ini adalah "}
            <u className="underline">
              {'"Indonesia Emas VS Indonesia Cemas."'}
            </u>
          </p>
        </div>
        <div>
          <h3 className="scroll-m-20 font-wildrodeo text-3xl tracking-tight text-zinc-50 md:text-5xl lg:text-6xl">
            <MotionText text="Subtema" />
          </h3>
          <p className="font-serif leading-6 text-zinc-100 md:text-lg ">
            {"Subtema untuk Lomba Poster ini adalah sebagai berikut:"}
          </p>
          <ol className="ml-4 list-inside list-disc">
            <li className="font-serif leading-6 text-zinc-100 md:text-lg">
              {"Keunggulan dan Krisis Pendidikan Indonesia"}
            </li>
            <li className="font-serif leading-6 text-zinc-100 md:text-lg">
              {"Industri Teknologi Informasi"}
            </li>
            <li className="font-serif leading-6 text-zinc-100 md:text-lg">
              {"Kesenjangan Infrastruktur Publik"}
            </li>
            <li className="font-serif leading-6 text-zinc-100 md:text-lg">
              {"Kegelisahan Stabilitas Ekonomi"}
            </li>
            <li className="font-serif leading-6 text-zinc-100 md:text-lg">
              {"Implementasi Teknologi Inovatif Secara Konsumtif"}
            </li>
            <li className="font-serif leading-6 text-zinc-100 md:text-lg">
              {"Kemandirian dan Krisis Energi"}
            </li>
            <li className="font-serif leading-6 text-zinc-100 md:text-lg">
              {"Cita-Cita Masyarakat Madani"}
            </li>
            <li className="font-serif leading-6 text-zinc-100 md:text-lg">
              {"Kebijakan dan Informasi Publik "}
            </li>
            <li className="font-serif leading-6 text-zinc-100 md:text-lg">
              {"Pengembangan Sumber Daya Manusia"}
            </li>
            <li className="font-serif leading-6 text-zinc-100 md:text-lg">
              {"Kesehatan dan Keselamatan"}
            </li>
          </ol>
        </div>
      </div>

      <div className="z-25 absolute bottom-20 right-20 -rotate-45 brightness-95">
        <HorseShoe />
      </div>
      <div className="z-25 absolute right-64 top-10 rotate-45 brightness-95">
        <HorseShoe />
      </div>
      <div className="z-25 absolute right-4 top-64 rotate-180 brightness-95">
        <HorseShoe />
      </div>
    </section>
  );
}
