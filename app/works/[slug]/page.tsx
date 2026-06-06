import Image from "next/image";
import Link from "next/link";
import { PixelSeparator } from "@/components/pixel-separator";
import { ArrowLeftIcon, ExternalLinkIcon, GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function WorksPost({ params }: { params: { slug: string } }) {
  const work = projects.find((project) => project.slug === params.slug);

  if (!work) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button asChild variant="outline" className="pixel-button">
            <Link href="/works">
              <ArrowLeftIcon className="mr-2 h-5 w-5" />
              Back to Works
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
            <Link href="/works" className="flex items-center">
              <ArrowLeftIcon className="mr-2 h-5 w-5" />
              Back to Works
            </Link>
          </Button>

          <div>
            <h1 className="text-4xl font-bold mb-6">{work.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {work.tags.map((tag) => (
                <span 
                  key={tag}
                  className="bg-primary text-foreground px-3 py-1 text-sm font-medium border-2 border-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="relative h-[400px] w-full mb-8">
              <div className="absolute inset-4 border-4 border-foreground bg-primary/20 z-0"></div>
              <div className="absolute inset-0 pixel-card overflow-hidden">
                <Image
                  src={work.imageUrl}
                  alt={work.title}
                  fill
                  className="object-cover"
                  style={{ imageRendering: "pixelated" }}
                />
              </div>
            </div>

            <PixelSeparator />

            <div className="prose prose-lg dark:prose-invert mt-8 space-y-6">
              {work.content.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <PixelSeparator />

            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {work.stack.map((item) => (
                  <span key={item} className="bg-black text-primary text-sm px-3 py-1 font-medium">
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {work.links.demo && (
                  <Button asChild className="pixel-button text-lg py-6">
                    <a href={work.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      Live Demo
                      <ExternalLinkIcon className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                )}
                {work.links.github && (
                  <Button asChild variant="outline" className="pixel-button text-lg py-6 bg-white">
                    <a href={work.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      GitHub
                      <GithubIcon className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
