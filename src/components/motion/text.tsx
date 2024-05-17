"use client";

import { useRef } from "react";
import {
  motion,
  type Transition,
  useInView,
  type Variant,
  type Variants,
} from "framer-motion";

const defaultAnimation: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
    rotate: 30,
    y: 10,
    transition: {
      type: "spring",
      damping: 16,
      stiffness: 500,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    y: 0,
    transition: {
      type: "spring",
      damping: 16,
      stiffness: 500,
    },
  },
};

const MultiTextAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.05,
    },
  },
};

type MotionTextProps = {
  text: string | string[];
  hidden?: Variant;
  visible?: Variant;
  type?: "multi" | "single";
  transition?: Transition;
  once?: boolean;
};

export function MotionText({
  visible,
  hidden,
  text,
  transition,
  type = "single",
  once = true,
}: MotionTextProps) {
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { amount: 0.5, once: once });

  return (
    <>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          staggerChildren: type === "single" ? 0.1 : 0.05,
          ...transition,
        }}
        aria-hidden
      >
        {textArray.map((line, i) => (
          <span key={`${line}${i}`} className="block">
            {line.split(" ").map((word, j) => (
              <span key={`${word}${j}`} className="inline-block">
                {word.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    variants={{
                      hidden:
                        type === "single"
                          ? { ...defaultAnimation.hidden, ...hidden }
                          : { ...MultiTextAnimation.hidden, ...hidden },
                      visible:
                        type === "single"
                          ? { ...defaultAnimation.visible, ...visible }
                          : { ...MultiTextAnimation.visible, ...visible },
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </>
  );
}
