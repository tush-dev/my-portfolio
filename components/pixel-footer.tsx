"use client";

import Link from "next/link";
import Image from "next/image";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";
import { motion } from "framer-motion";
import { PixelSeparator } from "@/components/pixel-separator";
import { profile } from "@/data/portfolio";

export function PixelFooter() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <LinkedinIcon size={24} />,
      href: profile.linkedin,
      label: "LinkedIn",
    },
    {
      icon: <MailIcon size={24} />,
      href: `mailto:${profile.email}`,
      label: "Email",
    },
    {
      icon: <PhoneIcon size={24} />,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
      label: "Phone",
    },
    { icon: <GithubIcon size={24} />, href: profile.github, label: "GitHub" },
  ];

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Projects", href: "/works" },
    { name: "About", href: "/about" },
  ];

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

  return (
    <footer className="bg-primary/20 border-t-4 border-black mt-16 pixel-grid">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4"> 
              <Link
                href="/"
                className="logo-shake-trigger flex-shrink-0 mr-0 inline-flex items-center justify-center"
                title="Back to home"
                onClick={() => playLogoSound()}
              >
                <Image
                  src="/imgbin_5ac13c4af42833d754d03e432fc3399f.png"
                  alt="Tushar Logo"
                  width={128}
                  height={128}
                  className="w-28 h-28 md:w-32 md:h-32 object-contain logo-image flex-shrink-0"
                />
              </Link>
              <div className="origin-left scale-100 sm:scale-150">
                <h3 className="text-2xl sm:text-4xl font-pixel font-bold leading-tight">
                  <span className="text-red-500">Tushar</span>
                  <span className="text-black dark:text-white"> Panwar</span>
                </h3>
              </div>
            </div>
            <p className="text-base md:text-lg max-w-xl">
              Full-stack developer building AI/RAG systems, responsive web apps,
              and data-backed product experiences.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold px-4 py-2 bg-black text-primary inline-block">
              Navigation
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-lg hover:text-primary transition-colors flex items-center"
                  >
                    <span className="mr-2">■</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold px-4 py-2 bg-black text-primary inline-block">
              Connect
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 bg-white dark:bg-foreground border-2 border-black hover:bg-primary transition-colors dark:text-background"
                  whileHover={{ y: -5 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-lg mt-4">{profile.email}</p>
          </div>
        </div>

        <PixelSeparator className="my-8" />

        <div className="text-center">
          <p className="text-lg">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Built with Next.js, TypeScript, and pixel energy.
          </p>
        </div>
      </div>
    </footer>
  );
}
