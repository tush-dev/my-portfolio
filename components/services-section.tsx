"use client";

import { motion } from "framer-motion";
import { BarChart3Icon, BrainCircuitIcon, CodeIcon, DatabaseIcon } from "lucide-react";

const services = [
  {
    title: "Full-Stack Apps",
    description: "React and Node.js applications with clean APIs, authentication flows, responsive UI, and production-minded structure.",
    icon: <CodeIcon className="h-10 w-10" />,
  },
  {
    title: "AI/RAG Systems",
    description: "Document and repository assistants powered by embeddings, hybrid search, reranking, OCR, and grounded LLM responses.",
    icon: <BrainCircuitIcon className="h-10 w-10" />,
  },
  {
    title: "Data & Databases",
    description: "SQL schemas, analytics queries, vector stores, dashboards, and data workflows that turn raw records into decisions.",
    icon: <DatabaseIcon className="h-10 w-10" />,
  },
  {
    title: "UI Engineering",
    description: "Accessible interfaces, reusable components, charts, and design-to-code translation for polished product experiences.",
    icon: <BarChart3Icon className="h-10 w-10" />,
  },
];

export function ServicesSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What I Build</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="pixel-card p-6 bg-white dark:bg-black"
          >
            <div className="p-4 bg-primary text-black mb-6 inline-block border-2 border-black">
              {service.icon}
            </div>
            
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
