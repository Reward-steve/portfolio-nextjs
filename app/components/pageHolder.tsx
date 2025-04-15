"use client";
import * as m from "motion/react-client";
import { useLazyLoading } from "../hook/useLazyLoading";
import { useState, useEffect } from "react";

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
    <div className="w-full flex h-[80vh] justify-center items-center bg-linear-90 bg-#000">
      <p className="animate-pulse w-10 h-10 text-md">Loading...</p>
    </div>
  ) : (
    <m.div
      className="w-full flex flex-col gap-10 sm:p-10 p-5 bg-white text-[#0f172b] dark:text-[#c6e5ff] dark:bg-[#0f172b] rounded-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ borderTop: "0.5px solid #515151" }}
    >
      {children}
    </m.div>
  );
}
