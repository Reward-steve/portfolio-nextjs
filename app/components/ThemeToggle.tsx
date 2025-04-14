"use client";
import { useTheme } from "next-themes";
import { TbBulbFilled, TbBulbOff } from "react-icons/tb";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-4 py-2  rounded-full transition-colors duration-300 ease-in-out outline-none border-none"
      title="Toggle theme"
    >
      {theme === "dark" ? (
        <TbBulbFilled color="orange" size={25} />
      ) : (
        <TbBulbOff size={25} color="black" />
      )}

      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
