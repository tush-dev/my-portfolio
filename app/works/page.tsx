import { PixelSeparator } from "@/components/pixel-separator";
import { WorksCard } from "@/components/works-card";
import { projects } from "@/data/portfolio";

export default function WorksPage() {
  return (
    <div className="pixel-grid min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Full-stack applications, AI retrieval systems, and analytics projects built with practical engineering depth.
          </p>
        </div>
        
        <PixelSeparator />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((work, index) => (
            <WorksCard
              key={work.slug}
              title={work.title}
              description={work.description}
              slug={work.slug}
              imageUrl={work.imageUrl}
              tags={work.tags}
              index={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
