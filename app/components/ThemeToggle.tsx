"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TbBulbFilled, TbBulbOff } from "react-icons/tb";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme(); // Use resolvedTheme for SSR compatibility
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent rendering until mounted

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="px-4 py-2 rounded-full transition-colors duration-300 ease-in-out outline-none border-none"
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
    </button>
  );
}
