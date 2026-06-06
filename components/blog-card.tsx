
'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { format } from "date-fns";

interface BlogPostProps {
  title: string;
  excerpt: string;
  slug: string;
  date: Date;
  imageUrl: string;
  readTime: number;
  url?: string;
  index?: number;
}

export function BlogCard({ title, excerpt, slug, date, imageUrl, readTime, url, index = 0 }: BlogPostProps) {
  const href = url ?? `/blog/${slug}`;
  const isExternal = Boolean(url);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="pixel-card overflow-hidden h-full flex flex-col"
    >
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="block h-full flex flex-col"
      >
        <div className="h-48 relative bg-black">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain object-center"
            style={{ imageRendering: "pixelated" }}
          />
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar size={16} />
              {format(date, "MMM dd, yyyy")}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} />
              {readTime} min read
            </span>
          </div>
          
          <h3 className="text-xl font-bold mb-2 line-clamp-2 min-h-[3.5rem]">{title}</h3>
          <p className="text-muted-foreground line-clamp-3 mb-4 flex-grow">{excerpt}</p>
          
          <div className="bg-primary text-black font-bold px-4 py-2 inline-block border-2 border-black mt-auto">
            {isExternal ? "Read on Hashnode" : "Read More"}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
