import { PixelHero } from "@/components/pixel-hero";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { PixelSeparator } from "@/components/pixel-separator";
import { BlogCard } from "@/components/blog-card";
import { WorksCard } from "@/components/works-card";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts, projects, skillGroups } from "@/data/portfolio";

const featuredPosts = blogPosts.slice(0, 3);
const featuredWorks = projects.slice(0, 2);

export default function Home() {
  return (
    <div className="pixel-grid min-h-screen">
      <PixelHero />
      
      <PixelSeparator />
      
      <AboutSection />
      
      <PixelSeparator />

      {/* Technical Skills (moved from About) */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skillGroups.map((group) => (
            <div key={group.label} className="pixel-card p-5 bg-white dark:bg-black">
              <h3 className="text-lg font-bold mb-3">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-block bg-black text-primary text-sm px-3 py-1 font-medium transform transition-transform duration-200 hover:scale-105 hover:bg-primary hover:text-white hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <PixelSeparator />
      
      <ServicesSection />
      
      <PixelSeparator />
      
      {/* Featured Works Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <Button asChild variant="outline" className="pixel-button">
            <Link href="/works" className="flex items-center">
              View All
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredWorks.map((work, index) => (
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
      
      <PixelSeparator />
      
      {/* Blog Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Latest Articles</h2>
          <Button asChild variant="outline" className="pixel-button">
            <Link href="/blog" className="flex items-center">
              Read All
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              slug={post.slug}
              date={post.date}
              imageUrl={post.imageUrl}
              readTime={post.readTime}
              url={post.url}
              index={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
