"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p className="text-2xl">Please select a future date and time.</p>
    </div>
  );
};

export const ShowCounter = ({
  days,
  hours,
  minutes,
  seconds,
}: {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}) => {
  return (
    <div className="flex">
      <AnimatePresence>
        <DateTimeDisplay key={days} value={days} type={"Hari"} />
        <p className="text-9xl">:</p>
        <DateTimeDisplay key={hours} value={hours} type={"Jam"} />
        <p className="text-9xl">:</p>
        <DateTimeDisplay key={minutes} value={minutes} type={"Menit"} />
        <p className="text-9xl">:</p>
        <DateTimeDisplay key={seconds} value={seconds} type={"Detik"} />
      </AnimatePresence>
    </div>
  );
};

export const DateTimeDisplay = ({
  value,
  type,
}: {
  value?: number;
  type: "Hari" | "Jam" | "Menit" | "Detik";
}) => {
  return (
    <div className="relative">
      <motion.div
        className="mx-6 flex w-20 flex-col items-center justify-center"
        initial={{ y: -150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 75, opacity: 0, position: "absolute" }}
        transition={{
          ease: "easeOut",
        }}
      >
        <motion.p className="text-9xl">
          {(value ?? 0) < 10 ? `0${value}` : value}
        </motion.p>
        <motion.span className="-mt-6 text-xl lowercase">{type}</motion.span>
      </motion.div>
    </div>
  );
};

export const useCountdown = (targetDate: string | number | Date) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime(),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};
