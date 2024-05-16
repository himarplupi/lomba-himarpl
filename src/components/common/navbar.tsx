"use client";
import Image from "next/image";

import DiesNatalis from "@/images/logo-dies-natalis.png";

export function Navbar() {
  return (
    <nav className="fixed z-50 flex w-full flex-col items-center justify-center">
      <div className="mt-4 flex  w-[80vw] items-center justify-between rounded-md border border-zinc-200 bg-zinc-50 px-12 py-2 shadow">
        <a href="#">
          <Image
            src={DiesNatalis}
            alt="Logo Dies Natalis"
            width={42}
            height={42}
          />
        </a>
        <ul className="flex items-center gap-x-6">
          <li>
            <a
              href="#countdown"
              className="font-wildrodeo text-2xl leading-6 text-[#7B3018] hover:underline"
            >
              Hitung Mundur
            </a>
          </li>
          <li>
            <a
              href="#poster-theme"
              className="font-wildrodeo text-2xl leading-6 text-[#7B3018] hover:underline"
            >
              Tema Poster
            </a>
          </li>
          <li>
            <a
              href="#timeline"
              className="font-wildrodeo text-2xl leading-6 text-[#7B3018] hover:underline"
            >
              Jadwal Lomba
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
