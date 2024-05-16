"use client";

import { Desert1, DesertMountain1 } from "@/components/background/desert";
import { Button, FMButton } from "@/components/ui/button";

export function Banner() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center gap-y-4">
      <div className="flex flex-col items-center justify-center bg-zinc-50 bg-opacity-75 px-6 py-2 ">
        <h1 className="scroll-m-20 font-wildrodeo text-9xl uppercase tracking-tight text-[#7B3018] lg:text-9xl">
          Lomba Poster
        </h1>
        <h3 className="scroll-m-20 font-wildrodeo text-6xl tracking-tight text-[#7B3018]">
          Dies Natalis RPL kelima
        </h3>
      </div>

      <p className="max-w-[512px] rounded-md bg-zinc-50 bg-opacity-75 px-6 py-2 text-center font-serif text-lg leading-6">
        Lomba ini merupakan bagian dari acara Dies Natalis jurusan Rekayasa
        Perangkat Lunak ke-5 yang diselenggarakan oleh Himpunan Mahasiswa
        Rekayasa Perangkat Lunak Universitas Pendidikan Indonesia.
      </p>

      <div className="flex items-center gap-x-4">
        <FMButton>Daftar Sekarang</FMButton>
        <Button variant="default">Buku Panduan</Button>
      </div>

      <div className="absolute bottom-10 left-56 -z-50 w-full brightness-90">
        <div className="aspect-square w-64 rounded-full bg-[#F7EE86]" />
      </div>
      <div className="absolute -bottom-40 left-0 -z-50 w-full brightness-90">
        <DesertMountain1 />
      </div>
      <div className="absolute -bottom-36 -z-50 w-full brightness-95">
        <Desert1 />
      </div>
    </section>
  );
}
