"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { NavMenu } from "@/components/nav-menu";
import { cn } from "@/lib/utils";
import { profile } from "@/data/portfolio";

export function PixelHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const playLogoSound = () => {
    try {
      const src = encodeURI("/pikachu-notification.mp3");
      const w = window as any;
      if (!w.__pixelClickAudio) {
        w.__pixelClickAudio = new Audio(src);
        w.__pixelClickAudio.preload = "auto";
      }
      w.__pixelClickAudio.currentTime = 0;
      w.__pixelClickAudio.playbackRate = 1.2;
      void w.__pixelClickAudio.play();
    } catch (e) {
      console.error("Logo sound play failed:", e);
    }
  };

  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSiteMusic = async () => {
    try {
      const filename = "be-my-baby-nichxxx.mp3";
      const src = "/" + filename;
      const w = window as any;
      if (!w.__siteMusicAudio) {
        w.__siteMusicAudio = new Audio(src);
        w.__siteMusicAudio.preload = "auto";
        w.__siteMusicAudio.loop = true; // loop as requested
        w.__siteMusicAudio.addEventListener("ended", () => setIsPlaying(false));
      }

      if (w.__siteMusicAudio.paused) {
        await w.__siteMusicAudio.play();
        setIsPlaying(true);
      } else {
        w.__siteMusicAudio.pause();
        setIsPlaying(false);
      }
    } catch (e) {
      console.error("Site music toggle failed:", e);
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out", 
        scrolled ? "py-2 bg-white shadow-md dark:bg-black" : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="flex items-center gap-1"
        >
          <div className="flex items-center gap-0.5">
            <Link
              href="/"
              className="logo-shake-trigger inline-flex items-center justify-center"
              onClick={() => playLogoSound()}
              title="Back to home"
            >
              <Image
                src="/imgbin_5ac13c4af42833d754d03e432fc3399f.png"
                alt="Tushar Logo"
                width={80}
                height={80}
                priority
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain logo-image flex-shrink-0"
              />
            </Link>
            <Link href="/about" className="hidden sm:block text-2xl md:text-3xl font-pixel tracking-tight leading-none cursor-pointer" title="About">
              <span className="text-accent font-bold">Tushar</span>
              <span className="text-black dark:text-white">.dev</span>
              <span className="sr-only">{profile.name}</span>
            </Link>
          </div>
        </motion.div>

        <div className="flex items-center space-x-4">
          <NavMenu />
          <ThemeToggle />

          {/* Song play/pause control */}
          <button
            onClick={toggleSiteMusic}
            aria-pressed={isPlaying}
            aria-label={isPlaying ? "Pause music" : "Play music"}
            className="relative group ml-2 flex items-center justify-center w-12 h-12 rounded-full border-2 border-black dark:border-white bg-white dark:bg-foreground overflow-hidden transform transition-transform duration-150 ease-in-out hover:scale-110 active:scale-95"
            title={isPlaying ? "Pause song" : "Play song"}
          >
            <img
              src="/pngaaa.com-4859607.png"
              alt="Song cover"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                const t = e.target as HTMLImageElement;
                t.src = profile.photo || "/IMG_0003.jpg";
              }}
              className={"w-10 h-10 object-cover rounded-full transition-transform group-hover:scale-110 " + (isPlaying ? "animate-[spin_4s_linear_infinite]" : "")}
            />

            {/* Play / Pause icon overlay */}
              <span className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none transition-transform duration-150 ease-in-out group-hover:scale-110">
              {isPlaying ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black dark:text-white">
                  <rect x="6" y="5" width="4" height="14" fill="currentColor" />
                  <rect x="14" y="5" width="4" height="14" fill="currentColor" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black dark:text-white">
                  <path d="M5 3v18l15-9L5 3z" fill="currentColor" />
                </svg>
              )}
            </span>

            <span className="sr-only">{isPlaying ? "Pause" : "Play"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
