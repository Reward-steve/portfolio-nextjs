"use client";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-4 py-2 bg-black rounded-full"
    >
      {theme === "dark" ? "🌜" : "🌞"}
    </button>
  );
}
