"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { translations } from "@/lib/translations";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  const pathWithoutLocale = pathname.split("/").slice(2).join("/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  const locale = pathname.split("/")[1] || "en";
  const t = (translations[locale as keyof typeof translations] ??
    translations.en) as typeof translations.en;
  const navClass = scrolled
    ? "bg-white/70 dark:bg-black/60 backdrop-blur-md shadow-md"
    : "bg-white dark:bg-black";

  const links: Array<{ label: keyof typeof translations.en; href: string }> = [
    { label: "home", href: "#" },
    { label: "features", href: "#features" },
    { label: "contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 border-b border-zinc-200 dark:border-zinc-700 transition-all ${navClass}`}
    >
      <nav className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Image
            src="/logo-slogan.png"
            alt="Riaytek"
            width={70}
            height={30}
            priority
            className="hover:scale-105 transition-transform"
          />
        </motion.div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 text-sm text-zinc-600 dark:text-zinc-300">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative group hover:text-black dark:hover:text-white transition"
            >
              {t[l.label]}

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 group-hover:w-full transition-all" />
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-4 text-xs">
          {/* Language */}
          <div className="flex gap-2">
            <Link href={`/en/${pathWithoutLocale}`} className="hover:underline">
              EN
            </Link>
            <Link href={`/fr/${pathWithoutLocale}`} className="hover:underline">
              FR
            </Link>
            <Link href={`/ar/${pathWithoutLocale}`} className="hover:underline">
              AR
            </Link>
          </div>

          {/* Dark mode (UI only placeholder) */}
          <button className="px-3 py-1 border rounded-md text-xs hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
            🌙
          </button>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span
            className={`h-0.5 w-6 bg-black dark:bg-white transition ${open ? "rotate-45 translate-y-1.5" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-black dark:bg-white transition ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-black dark:bg-white transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`}
          />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-zinc-200 dark:border-zinc-700"
          >
            <div className="flex flex-col px-6 py-4 gap-4 text-sm">
              {links.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                  {t[l.label]}
                </Link>
              ))}

              <div className="flex gap-3 pt-3 border-t border-zinc-200 dark:border-zinc-700">
                <Link href={`/en/${pathWithoutLocale}`}>EN</Link>
                <Link href={`/fr/${pathWithoutLocale}`}>FR</Link>
                <Link href={`/ar/${pathWithoutLocale}`}>AR</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
