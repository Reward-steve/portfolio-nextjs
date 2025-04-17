"use client";
import { useTheme } from "next-themes";
import { TbBulbFilled, TbBulbOff } from "react-icons/tb";
import * as m from "motion/react-client";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme(); // Use resolvedTheme for SSR compatibility

  return (
    <m.button
      whileHover={{ scale: 1.05, cursor: "pointer" }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="px-4 py-2 rounded-full outline-none border-none"
      title="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <TbBulbFilled
          color="orange"
          size={25}
          style={{ fill: "currentColor" }}
        />
      ) : (
        <TbBulbOff size={25} color="black" style={{ fill: "currentColor" }} />
      )}

      <span className="sr-only">Toggle theme</span>
    </m.button>
  );
}
