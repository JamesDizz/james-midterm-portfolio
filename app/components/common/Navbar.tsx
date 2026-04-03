"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved === "dark" || (saved === null && prefersDark);
    setIsDark(isDark);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const doc = document.documentElement;
    if (isDark) {
      doc.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      doc.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark, mounted]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-30 border-b-2 border-black bg-white text-black shadow-sm transition-colors duration-300 dark:border-b-2 dark:border-white dark:bg-black dark:text-white">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="text-lg font-bold md:text-xl">
          Midterm Portfolio
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1"
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-5 bg-black transition-all dark:bg-white ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`h-0.5 w-5 bg-black transition-all dark:bg-white ${isMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`h-0.5 w-5 bg-black transition-all dark:bg-white ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

        <div className={`${isMenuOpen ? "flex" : "hidden"} md:flex absolute md:relative top-16 md:top-auto left-0 right-0 md:left-auto md:right-auto flex-col md:flex-row items-start md:items-center gap-4 md:gap-4 bg-white dark:bg-black md:bg-transparent md:dark:bg-transparent p-4 md:p-0 rounded-b-lg md:rounded-none border-b-2 md:border-b-0 border-black dark:border-b-2 dark:border-white md:border-none`}>
          {navItems.map((item) => {
            const active = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`relative px-3 py-1 transition-all duration-200 text-sm md:text-base ${
                  active
                    ? "text-black dark:text-white"
                    : "text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 w-full bg-black transition-all duration-200 dark:bg-white ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            );
          })}

          <button
            onClick={toggleTheme}
            className="rounded-md border-2 border-black bg-white px-3 py-1 text-xs font-semibold text-black transition hover:bg-black hover:text-white dark:border-2 dark:border-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black md:ml-2"
          >
            {isDark ? "Light" : "Dark"}
          </button>
        </div>
      </nav>
    </header>
  );
}
