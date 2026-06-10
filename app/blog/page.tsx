import { PixelSeparator } from "@/components/pixel-separator";
import { BlogCard } from "@/components/blog-card";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/portfolio";
import { ExternalLinkIcon } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="pixel-grid min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl max-w-2xl mx-auto">
            I write technical blogs on Hashnode to deepen my understanding of fundamental concepts and explain them through clear, practical examples.
          </p>
          <div className="mt-6 flex justify-center">
            <Button asChild variant="outline" className="pixel-button bg-white text-lg py-3 sm:py-6 rounded-none">
              <a href="https://hashnode.com/@tush-dev" target="_blank" rel="noopener noreferrer" className="flex items-center">
                Visit My Hashnode Profile
                <ExternalLinkIcon className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        
        <PixelSeparator />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post, index) => (
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
