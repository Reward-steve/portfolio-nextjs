import * as m from "motion/react-client";
export const renderRotatingBorders = () => (
  <>
    <m.span
      initial={{ rotate: 0 }}
      animate={{ rotate: -360 }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      className="rounded-full border-[1px] px-5 w-17.5 h-14 absolute bottom-0 border-cyan-900 dark:border-cyan-500 text-cyan-40"
    ></m.span>
    <m.span
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      className="rounded-full border-[1px] px-5 w-17.5 h-14 absolute bottom-0 border-cyan-900 dark:border-cyan-500 text-cyan-40"
    ></m.span>
  </>
);
