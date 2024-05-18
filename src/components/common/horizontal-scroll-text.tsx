"use client";

import { useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  type MotionValue,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity?: number;
}

export function HorizontalScrollText() {
  return (
    <section id="horizontal-scroll-text" className="relative bg-[#E6E7CB] py-8">
      <ParallaxText baseVelocity={-5}>
        — Gratis Alias Free Tanpa Dipungut Biaya Tunggu Apa Lagi? Daftar
        Sekarang!
      </ParallaxText>
    </section>
  );
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  }) as MotionValue<number>;
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const directionFactor = useRef<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const [repeatCount, setRepeatCount] = useState(4); // Default to 4

  useLayoutEffect(() => {
    const calculateRepeatCount = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const textWidth = containerRef.current.scrollWidth;
        const newRepeatCount = Math.ceil(containerWidth / textWidth) + 1; // +1 for smoother wrapping
        setRepeatCount(newRepeatCount);
      }
    };

    calculateRepeatCount();
    window.addEventListener("resize", calculateRepeatCount);

    return () => {
      window.removeEventListener("resize", calculateRepeatCount);
    };
  }, [children]);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  const wrapWidth = -100 / repeatCount;
  const x = useTransform(baseX, (v) => `${wrap(0, wrapWidth, v)}%`);

  return (
    <div
      ref={containerRef}
      className="left-0 top-0 m-0 flex flex-nowrap overflow-hidden whitespace-nowrap font-bold leading-4 tracking-widest"
    >
      <motion.div
        className="flex flex-nowrap whitespace-nowrap font-serif text-2xl uppercase md:text-5xl"
        style={{ x }}
      >
        {Array.from({ length: repeatCount }).map((_, index) => (
          <span key={index} className="mr-2 block">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
//   const baseX = useMotionValue(0);
//   const { scrollY } = useScroll();
//   const scrollVelocity = useVelocity(scrollY);
//   const smoothVelocity = useSpring(scrollVelocity, {
//     damping: 50,
//     stiffness: 400,
//   }) as MotionValue<number>;
//   const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
//     clamp: false,
//   });

//   /**
//    * This is a magic wrapping for the length of the text - you
//    * have to replace for wrapping that works for you or dynamically
//    * calculate
//    */
//   const x = useTransform(baseX, (v) => `${wrap(5, -20, v)}%`);

//   const directionFactor = useRef<number>(1);
//   useAnimationFrame((t, delta) => {
//     let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

//     /**
//      * This is what changes the direction of the scroll once we
//      * switch scrolling directions.
//      */
//     if (velocityFactor.get() < 0) {
//       directionFactor.current = -1;
//     } else if (velocityFactor.get() > 0) {
//       directionFactor.current = 1;
//     }

//     moveBy += directionFactor.current * moveBy * velocityFactor.get();

//     baseX.set(baseX.get() + moveBy);
//   });

//   /**
//    * The number of times to repeat the child text should be dynamically calculated
//    * based on the size of the text and viewport. Likewise, the x motion value is
//    * currently wrapped between -20 and -45% - this 25% is derived from the fact
//    * we have four children (100% / 4). This would also want deriving from the
//    * dynamically generated number of children.
//    */
//   return (
//     <div className="left-0 top-0 m-0 flex flex-nowrap overflow-hidden whitespace-nowrap leading-4 tracking-tighter">
//       <motion.div
//         className="flex flex-nowrap whitespace-nowrap text-4xl uppercase "
//         style={{ x }}
//       >
//         <span className="mr-8 block">{children} </span>
//         <span className="mr-8 block">{children} </span>
//         <span className="mr-8 block">{children} </span>
//         <span className="mr-8 block">{children} </span>
//       </motion.div>
//     </div>
//   );
// }
