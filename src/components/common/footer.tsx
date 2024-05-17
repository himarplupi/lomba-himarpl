"use client";

import { Button, FMButton } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative bg-opacity-50 bg-[url('https://raw.githubusercontent.com/himarplupi/assets-himarpl/main/lomba/bg-art-2.jpg')] bg-cover">
      <div className="absolute -top-5 h-5 w-full bg-[#A2672F] brightness-95" />
      <div className="absolute h-full w-full bg-gradient-to-b from-[#7B3018] to-[#31180E] opacity-75 " />
      <div className="relative flex min-h-96 flex-col items-center justify-center gap-y-8 py-6">
        <h3 className="max-w-[768px] scroll-m-20 text-center font-wildrodeo text-6xl tracking-tight text-zinc-50">
          Daftar dan Serahkan Kreasi Kamu Sekarang!
        </h3>

        <div className="flex items-center gap-x-4">
          <FMButton>Daftar Sekarang</FMButton>
          <Button variant="default">Buku Panduan</Button>
        </div>
      </div>
    </footer>
  );
}
