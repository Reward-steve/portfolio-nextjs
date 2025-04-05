"use client";
import * as m from "motion/react-client";
// import { useLazyLoading } from "../hook/useLazyLoading";
// import { useContext } from "react";
// import { lazyContext } from "../context/lazyContext";

export default function PageHolder({
  children,
}: {
  children: React.ReactNode;
}) {
  <m.section
    className="w-full flex flex-col gap-10 p-10 max-[375]:p-5 text-white rounded-xl shadow-lg"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    style={{ borderTop: "0.5px solid #515151" }}
  >
    {children}
  </m.section>;
}
