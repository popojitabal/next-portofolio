"use client"

import clsx from "clsx";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={clsx(
        "p-2 rounded-full hidden md:block transition-all duration-300 ease-in-out",
        "bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-50",
        "hover:bg-neutral-700 hover:text-neutral-200 dark:hover:bg-neutral-200 dark:hover:text-neutral-900"
      )}
    >
      <Sun className="h-4 w-4 dark:hidden"/>
      <Moon className="h-4 w-4 hidden dark:block"/>
    </button>
  )
}