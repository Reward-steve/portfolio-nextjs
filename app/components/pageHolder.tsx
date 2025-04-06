"use client";
import * as m from "motion/react-client";
import { useLazyLoading } from "../hook/useLazyLoading";

export default function PageHolder({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading } = useLazyLoading();
  return isLoading ? (
    <div className="w-full flex h-[80vh] justify-center items-center bg-linear-90 bg-#000">
      <p className="animate-pulse w-10 h-10 text-md">Loading...</p>
    </div>
  ) : (
    <m.section
      className="w-full flex flex-col gap-10 p-10 max-[375]:p-5 text-white rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ borderTop: "0.5px solid #515151" }}
    >
      {children}
    </m.section>
  );
}
