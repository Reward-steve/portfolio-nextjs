"use client";
import * as m from "motion/react-client";
import { useLazyLoading } from "../app/hook/useLazyLoading";
import { useState, useEffect } from "react";
import { renderRotatingBorders } from "./renderRotate";

export default function PageHolder({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading } = useLazyLoading();

  // Default to `false` during SSR
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  return !hydrated || isLoading ? (
    <div className="w-full flex h-[80vh] justify-center items-center bg-linear-90 dark_bg">
      <p className="animate-bounce w-10 h-10 text-md rounded-full border-1 p-3 flex justify-center relative items-center flex-col border-cyan-400 text-cyan-800 dark:text-cyan-400 top-0 left-0 font-bold text-2xl drop-shadow-2x transition-all duration-300">
        Loading...
      </p>
    </div>
  ) : (
    <m.div
      className="w-full flex flex-col gap-10 sm:p-10 p-5 bg-white text-[#0f172b] dark_tx dark_bg rounded-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ borderTop: "0.5px solid #515151" }}
    >
      {children}
    </m.div>
  );
}
