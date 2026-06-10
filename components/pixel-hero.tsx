"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon, FileTextIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

export function PixelHero() {
  return (
    <section className="container mx-auto px-4 py-16 md:pt-32 md:pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="px-4 py-2 bg-primary border-2 border-black inline-block"
            >
              <p className="text-black font-bold">NIT Jalandhar Developer Portfolio</p>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              {profile.name}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-xl md:text-2xl"
            >
              Full-stack developer working with React, Node.js, databases, analytics, and RAG pipelines for document and repository intelligence.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4"
          >
            <Button asChild className="pixel-button text-lg py-3 sm:py-6 rounded-none">
              <Link href="/works">
                View Projects
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="pixel-button bg-white text-lg py-6 rounded-none">
              <Link href={`mailto:${profile.email}`}>
                Contact Me
                <MailIcon className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button asChild variant="outline" className="pixel-button bg-white text-lg py-3 sm:py-6 rounded-none">
              <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="flex items-center">
                View Resume
                <FileTextIcon className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
        
          <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative"
        >
          <div className="relative h-[300px] md:h-[400px] w-full">
            <div className="absolute inset-4 border-4 border-black bg-primary/20 z-0"></div>
            <div className="absolute inset-0 pixel-card overflow-hidden">
              <Image
                src="/wp12793589-alone-anime-boy-4k-wallpapers.jpg"
                alt="Developer workstation"
                priority
                fill
                className="object-cover"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 z-10"
            >
              <div className="bg-white dark:bg-background dark:text-foreground border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-lg font-bold">B.Tech 2022 - 2026</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="absolute -top-6 -right-6 z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/works"
                title="View projects"
                className="block bg-accent border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors hover:bg-accent/90 cursor-pointer"
              >
                <p className="text-lg font-bold text-white">10+ UI Builds</p>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
