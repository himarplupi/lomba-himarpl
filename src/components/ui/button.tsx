"use client";

import * as React from "react";
import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";
import { type HTMLMotionProps, motion } from "framer-motion";

import plank from "@/images/plank.png";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

const buttonVariants = cva(
  "inline-flex uppercase font-western text-2xl items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-12 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <motion.div
        className="flex w-full items-center justify-center"
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.97 }}
        transition={{
          scale: {
            type: "spring",
            stiffness: 10,
            damping: 5,
            mass: 0.1,
          },
        }}
      >
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {props.children}
        </Comp>
      </motion.div>
    );
  },
);
Button.displayName = "Button";

export interface FMButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
}

const FMButton = ({ className, ...props }: FMButtonProps) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.button
      // @ts-expect-error - framer-motion props
      initial={{ "--x": "100%", scale: 1, outline: "0px solid #E3BB67" }}
      // @ts-expect-error - framer-motion props
      animate={{ "--x": "-100%" }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileTap={{ scale: 0.97 }}
      whileHover={{
        backgroundColor: "#E3BB67",
        outline: "2px solid #E3BB67",
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
        backgroundColor: {
          duration: 0.2,
        },
        outline: {
          duration: 0.2,
        },
      }}
      {...props}
      className={cn(
        "radial-gradient relative h-12 rounded-md px-6 py-2 shadow-md",
        className,
      )}
    >
      <Image
        src={plank}
        alt="Plank background"
        fill
        className={cn(
          "opacity-90 brightness-100 transition-all duration-200",
          hovered && "brightness-125",
        )}
      />
      <span className="linear-mask relative block h-full w-full font-western text-2xl font-medium uppercase tracking-wide text-[#E3BB67]">
        {props.children}
      </span>
      <span className="linear-overlay absolute inset-0 block rounded-md p-[2px]" />
    </motion.button>
  );
};

FMButton.displayName = "FMButton";

export { Button, buttonVariants, FMButton };
