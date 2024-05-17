"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import DiesNatalis from "@/images/logo-dies-natalis.png";
import { useLenis } from "@/lib/lenis";

export function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isScrolling, setIsScrolling] = useState(false);
  const lenis = useLenis((lenis) => {
    if (lenis.isScrolling && !isDrawerOpen) {
      console.log(isDrawerOpen);
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  });

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!lenis) return;
    const target = e.currentTarget.getAttribute("href");
    if (!target) return;

    if (isMobile) {
      e.preventDefault();
      setIsDrawerOpen(false);
      lenis.scrollTo(target);
      return;
    }

    lenis.scrollTo(target);
  };

  return (
    <AnimatePresence>
      {!isScrolling && !isMobile && (
        <motion.nav
          key="navbar"
          initial={{ top: -80 }}
          animate={{
            top: 0,
            transition: {
              delay: 0.5,
            },
          }}
          exit={{ top: -80 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 2.5,
            mass: 0.1,
          }}
          className="fixed bottom-0 z-50 w-full flex-col items-center justify-center md:bottom-auto md:flex"
        >
          <motion.div className="mt-4 hidden w-[90vw] items-center justify-between rounded-md border border-zinc-200 bg-zinc-50 px-12 py-2 shadow md:flex xl:w-[1280px]">
            <Link href="#banner" onClick={handleClick}>
              <Image
                src={DiesNatalis}
                alt="Logo Dies Natalis"
                width={42}
                height={42}
              />
            </Link>
            <ul className="flex items-center gap-x-6">
              <li>
                <Link
                  onClick={handleClick}
                  href="#countdown"
                  className="font-wildrodeo text-2xl leading-6 text-[#7B3018] hover:underline"
                >
                  Hitung Mundur
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClick}
                  href="#poster-theme"
                  className="font-wildrodeo text-2xl leading-6 text-[#7B3018] hover:underline"
                >
                  Tema Poster
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClick}
                  href="#timeline"
                  className="font-wildrodeo text-2xl leading-6 text-[#7B3018] hover:underline"
                >
                  Jadwal Lomba
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.nav>
      )}

      {isMobile && isDrawerOpen && (
        <motion.div
          key="mobile-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {!isScrolling && isMobile && (
        <motion.nav
          key="mobile-drawer"
          initial={{ bottom: -80 }}
          animate={{
            bottom: 16,
            transition: {
              delay: 0.5,
            },
          }}
          exit={{ bottom: -80 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 2.5,
            mass: 0.1,
          }}
          className="fixed z-50 flex w-full items-center justify-center"
        >
          <Drawer
            onOpenChange={setIsDrawerOpen}
            open={isDrawerOpen}
            modal={false}
          >
            <DrawerTrigger asChild>
              <Button
                className="mt-4 w-[90vw] px-12 py-2 shadow"
                variant={"outline"}
              >
                Menu
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="mx-auto flex w-fit items-center justify-center">
                <Link href="#banner" onClick={handleClick}>
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
                    onClick={handleClick}
                  >
                    Hitung Mundur
                  </Link>
                </li>
                <li>
                  <Link
                    href="#poster-theme"
                    className="font-wildrodeo text-2xl leading-6 text-[#7B3018] hover:underline"
                    onClick={handleClick}
                  >
                    Tema Poster
                  </Link>
                </li>
                <li>
                  <Link
                    href="#timeline"
                    className="font-wildrodeo text-2xl leading-6 text-[#7B3018] hover:underline"
                    onClick={handleClick}
                  >
                    Jadwal Lomba
                  </Link>
                </li>
              </ul>
            </DrawerContent>
          </Drawer>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
