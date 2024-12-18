"use client"

import clsx from "clsx";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
interface Props {
  label?: boolean
  className?: string
}

export default function ThemeToggle({label=false, className=""}: Props) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Untuk menghindari masalah rendering di server
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={clsx(
        "p-2 rounded-full transition-all duration-300 ease-in-out",
        "bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-50",
        "hover:bg-neutral-700 hover:text-neutral-200 dark:hover:bg-neutral-200 dark:hover:text-neutral-900",
        label ? "flex gap-2 items-center" : "hidden md:block",
        className
      )}
    >
      <Sun className="h-4 w-4 dark:hidden"/>
      <Moon className="h-4 w-4 hidden dark:block"/>
      {label && <span className=""> Change Theme</span>}
    </button>
  )
}