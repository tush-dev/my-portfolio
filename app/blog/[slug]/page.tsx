import Image from "next/image";
import Link from "next/link";
import { PixelSeparator } from "@/components/pixel-separator";
import { ArrowLeftIcon, ExternalLinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/portfolio";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Button asChild variant="outline" className="pixel-button">
            <Link href="/blog">
              <ArrowLeftIcon className="mr-2 h-5 w-5" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pixel-grid min-h-screen">
      <article className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="outline" className="pixel-button mb-8">
            <Link href="/blog" className="flex items-center">
              <ArrowLeftIcon className="mr-2 h-5 w-5" />
              Back to Blog
            </Link>
          </Button>

          <div>
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex items-center gap-4 text-muted-foreground mb-8">
              <span>{post.date.toLocaleDateString()}</span>
              <span>•</span>
              <span>{post.readTime} min read</span>
            </div>

            <div className="relative h-[400px] w-full mb-8">
              <div className="absolute inset-4 border-4 border-foreground bg-primary/20 z-0"></div>
              <div className="absolute inset-0 pixel-card overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                  style={{ imageRendering: "pixelated" }}
                />
              </div>
            </div>

            <PixelSeparator />

            <div className="prose prose-lg dark:prose-invert mt-8 space-y-6">
              <p className="text-lg leading-relaxed">{post.excerpt}</p>
              <p className="text-lg leading-relaxed">
                This article is published on Hashnode. Open the original post for the full writeup.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Button asChild className="pixel-button text-lg py-6">
                <a href={post.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Read on Hashnode
                  <ExternalLinkIcon className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
