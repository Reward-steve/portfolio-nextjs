"use client";
import * as m from "motion/react-client";
import { useLazyLoading } from "../app/hook/useLazyLoading";
import { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
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
      <p className="animate-spin p-3 flex justify-center relative items-center text-cyan-800 dark:text-cyan-400 top-0 left-0 font-bold text-2xl transition-all duration-300">
        <FaSpinner size={50} />
      </p>
    </div>
  ) : (
    <m.div
      className="w-full flex flex-col gap-10 mt-6 sm:p-10 p-5 bg-white text-[#0f172b] dark_tx dark_bg rounded-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ borderTop: "0.5px solid #515151" }}
    >
      {children}
    </m.div>
  );
}
