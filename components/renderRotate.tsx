import * as m from "motion/react-client";

export const renderRotatingBorders = () => (
  <>
    <m.span
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 4,
        ease: "linear",
      }}
      className="absolute w-[70px] h-[70px] border border-cyan-500 rounded-full animate-spin-slow opacity-30"
    />
    <m.span
      initial={{ rotate: 0 }}
      animate={{ rotate: -360 }}
      transition={{
        repeat: Infinity,
        duration: 6,
        ease: "linear",
      }}
      className="absolute w-[90px] h-[90px] border border-cyan-700 rounded-full opacity-20"
    />
  </>
);
