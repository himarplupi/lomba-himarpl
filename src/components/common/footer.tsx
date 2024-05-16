"use client";

import { Button, FMButton } from "@/components/ui/button";

export function Footer() {
  return (
    <footer>
      <div className="flex min-h-96 flex-col items-center justify-center gap-y-8 bg-[#7B3018] py-6">
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
