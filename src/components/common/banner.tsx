"use client";

import { Desert1, DesertMountain1 } from "@/components/background/desert";
import { Button, FMButton } from "@/components/ui/button";

export function Banner() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center gap-y-4">
      <div className="flex flex-col items-center justify-center bg-zinc-50 bg-opacity-75 px-6 md:py-2 ">
        <h1 className="scroll-m-20 font-wildrodeo text-6xl uppercase tracking-tight text-[#7B3018] md:text-8xl lg:text-9xl">
          Lomba Poster
        </h1>
        <h3 className="scroll-m-20 font-wildrodeo text-3xl tracking-tight text-[#7B3018] md:text-5xl lg:text-6xl">
          Dies Natalis RPL kelima
        </h3>
      </div>

      <p className="max-w-[512px] rounded-md bg-zinc-50 bg-opacity-75 px-6 py-2 text-center font-serif leading-6 md:text-lg">
        Lomba ini merupakan bagian dari acara Dies Natalis jurusan Rekayasa
        Perangkat Lunak ke-5 yang diselenggarakan oleh Himpunan Mahasiswa
        Rekayasa Perangkat Lunak Universitas Pendidikan Indonesia.
      </p>

      <div className="flex w-full flex-col items-center gap-y-4 px-8 md:w-fit md:flex-row md:gap-x-4">
        <FMButton className="w-full md:w-fit">Daftar Sekarang</FMButton>
        <Button variant="default" className="w-full md:w-fit">
          Buku Panduan
        </Button>
      </div>

      <div className="absolute bottom-10 left-28 -z-50 w-full brightness-90 md:bottom-5 md:left-32 lg:bottom-10 lg:left-56">
        <div className="aspect-square w-32 rounded-full bg-[#F7EE86] md:w-64" />
      </div>
      <div className="absolute -bottom-10 left-0 -z-50 w-full brightness-90 md:-bottom-32 lg:-bottom-40">
        <DesertMountain1 />
      </div>
      <div className="absolute -bottom-10 -z-50 w-full brightness-95 md:-bottom-28 lg:-bottom-36">
        <Desert1 />
      </div>
      <div className="md-bottom-10 absolute -bottom-10 -z-50 h-5 w-full bg-[#A2672F] brightness-95 md:-bottom-32 md:h-10 lg:-bottom-40" />
    </section>
  );
}
