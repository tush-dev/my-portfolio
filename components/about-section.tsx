"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BarChart3Icon, BrainCircuitIcon, CodeIcon, PaintbrushIcon } from "lucide-react";
import { profile, skills } from "@/data/portfolio";

const icons = [
  <CodeIcon key="code" className="h-6 w-6" />,
  <BrainCircuitIcon key="brain" className="h-6 w-6" />,
  <PaintbrushIcon key="paint" className="h-6 w-6" />,
  <BarChart3Icon key="chart" className="h-6 w-6" />,
];

export function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      {/* <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2> */}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="relative h-[300px] md:h-[400px] w-full">
            <div className="absolute inset-4 border-4 border-primary z-0"></div>
            <div className="absolute inset-0 pixel-card overflow-hidden">
              <Image
                src={profile.photo}
                alt={`${profile.name} profile photo`}
                fill
                className="object-cover"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold">Hi, I'm {profile.name}</h3>
          
          <p className="text-lg">
            {profile.summary}
          </p>
          
          <p className="text-lg">
            My strongest work sits at the intersection of frontend craft, backend APIs, vector search, and practical data analysis. I enjoy turning technical systems into products that feel clear, responsive, and useful.
          </p>
          
          <div className="space-y-4 mt-8">
            <h4 className="text-xl font-bold">My Skills</h4>
            
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-2 p-2 bg-primary text-black">
                        {icons[index]}
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="font-bold">{skill.level}%</span>
                  </div>
                  
                  <div className="h-6 w-full bg-gray-200 dark:bg-gray-700 border-2 border-black">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-primary"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
