"use client";
import Image from "next/image";
import Link from "next/link";

import { useMediaQuery } from "@/hooks/use-media-query";
import DiesNatalis from "@/images/logo-dies-natalis.png";

export function Navbar() {
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  // const handleLinkClick = () => {
  //   setIsDrawerOpen(false);
  // };

  return (
    <nav className="fixed bottom-4 z-50 flex w-full flex-col items-center justify-center md:bottom-auto">
      {!isMobile && (
        <div className="mt-4 hidden w-[90vw] items-center justify-between rounded-md border border-zinc-200 bg-zinc-50 px-12 py-2 shadow md:flex xl:w-[1280px]">
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
              <Link
                href="#countdown"
                className="font-wildrodeo text-2xl leading-6 text-[#7B3018] hover:underline"
              >
                Hitung Mundur
              </Link>
            </li>
            <li>
              <Link
                href="#poster-theme"
                className="font-wildrodeo text-2xl leading-6 text-[#7B3018] hover:underline"
              >
                Tema Poster
              </Link>
            </li>
            <li>
              <Link
                href="#timeline"
                className="font-wildrodeo text-2xl leading-6 text-[#7B3018] hover:underline"
              >
                Jadwal Lomba
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* {isMobile && (
        <Drawer
          open={isDrawerOpen}
          onOpenChange={(open) => setIsDrawerOpen(open)}
        >
          <DrawerTrigger asChild>
            <Button className="mt-4 w-[90vw] px-12 py-2 shadow">Open</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="mx-auto flex w-fit items-center justify-center">
              <Link href="#" onClick={handleLinkClick}>
                <Image
                  src={DiesNatalis}
                  alt="Logo Dies Natalis"
                  width={42}
                  height={42}
                />
              </Link>
            </DrawerHeader>
            <ul className="mx-auto flex w-fit flex-col items-center gap-y-6 pb-8">
              <li>
                <Link
                  href="#countdown"
                  className="font-wildrodeo text-2xl leading-6 text-[#7B3018] hover:underline"
                  onClick={handleLinkClick}
                >
                  Hitung Mundur
                </Link>
              </li>
              <li>
                <Link
                  href="#poster-theme"
                  className="font-wildrodeo text-2xl leading-6 text-[#7B3018] hover:underline"
                  onClick={handleLinkClick}
                >
                  Tema Poster
                </Link>
              </li>
              <li>
                <Link
                  href="#timeline"
                  className="font-wildrodeo text-2xl leading-6 text-[#7B3018] hover:underline"
                  onClick={handleLinkClick}
                >
                  Jadwal Lomba
                </Link>
              </li>
            </ul>
          </DrawerContent>
        </Drawer>
      )} */}
    </nav>
  );
}
