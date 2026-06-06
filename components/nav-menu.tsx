"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { FileTextIcon, HomeIcon, LinkedinIcon, BriefcaseIcon, UserIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { profile } from "@/data/portfolio";

const navItems = [
  { path: "/", name: "Home", icon: <HomeIcon size={24} /> },
  { path: "/blog", name: "Blog", icon: <FileTextIcon size={24} /> },
  { path: "/works", name: "Works", icon: <BriefcaseIcon size={24} /> },
  { path: "/about", name: "About", icon: <UserIcon size={24} /> },
];

const variants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.2,
      type: "spring",
      stiffness: 100
    }
  })
};

export function NavMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center">
      {/* Desktop / tablet menu */}
      <nav className="hidden md:flex items-center justify-center space-x-1 lg:space-x-2">
        {navItems.map((item, index) => (
          <motion.div
            key={item.path}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={item.path}
              className={cn(
                "pixel-button rounded-none flex flex-col items-center justify-center px-3 py-2 h-16 w-24 sm:w-28",
                pathname === item.path
                  ? "dark:bg-yellow-500 dark:text-background bg-primary border-black"
                  : "bg-white dark:bg-foreground border-black hover:bg-primary/80"
              )}
            >
              <span className="mb-1">{item.icon}</span>
              <span className="text-xs sm:text-sm font-bold">{item.name}</span>
            </Link>
          </motion.div>
        ))}

        <motion.div
          custom={navItems.length}
          initial="hidden"
          animate="visible"
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-button rounded-none flex flex-col items-center justify-center px-3 py-2 h-16 w-24 sm:w-28 bg-white dark:bg-foreground border-black hover:bg-primary/80"
          >
            <span className="mb-1"><LinkedinIcon size={24} /></span>
            <span className="text-xs sm:text-sm font-bold">LinkedIn</span>
          </Link>
        </motion.div>
      </nav>

      {/* Mobile menu button */}
      <div className="md:hidden relative z-50">
        <button
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          aria-label="Open menu"
          aria-controls="mobile-menu"
          className="p-2 rounded border-2 border-black dark:border-white bg-white dark:bg-black"
        >
          {/* simple hamburger */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {open && (
          <div
            id="mobile-menu"
            role="menu"
            className="absolute top-full right-2 mt-2 min-w-[10rem] w-44 bg-white text-black dark:bg-black dark:text-white border-2 border-black rounded shadow-lg z-50 overflow-hidden"
          >
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    onClick={() => setOpen(false)}
                    role="menuitem"
                    className="flex items-center gap-2 px-3 py-2 hover:bg-primary/80 text-black dark:text-white"
                  >
                    <span>{item.icon}</span>
                    <span className="font-bold">{item.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 hover:bg-primary/80 text-black dark:text-white">
                  <LinkedinIcon size={20} />
                  <span className="font-bold">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
