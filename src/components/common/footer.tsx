"use client";

import { useRouter } from "next/navigation";

import { MotionText } from "@/components/motion/text";
import { Button, FMButton } from "@/components/ui/button";

export function Footer() {
  const router = useRouter();

  return (
    <footer className="relative bg-opacity-50 bg-[url('https://raw.githubusercontent.com/himarplupi/assets-himarpl/main/lomba/bg-art-2.jpg')] bg-cover">
      <div className="absolute -top-5 h-5 w-full bg-[#A2672F] brightness-95" />
      <div className="absolute h-full w-full bg-gradient-to-b from-[#7B3018] to-[#31180E] opacity-75 " />
      <div className="relative flex min-h-96 flex-col items-center justify-center gap-y-8 py-6">
        <h3 className="max-w-[768px] scroll-m-20 text-center font-wildrodeo text-3xl tracking-tight text-zinc-50 md:text-5xl lg:text-6xl">
          <MotionText text="Ayo Daftarkan dan Serahkan Kreasi Kamu Sekarang!" />
        </h3>

        <div className="flex w-full flex-col items-center gap-y-4 px-8 md:w-[500px] md:flex-row md:gap-x-4">
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
        </div>
      </div>
    </footer>
  );
}
