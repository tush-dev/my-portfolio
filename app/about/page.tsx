import Image from "next/image";
import { PixelSeparator } from "@/components/pixel-separator";
import { AboutSection } from "@/components/about-section";
import { achievements, activities, certifications, education, experience, profile, skillGroups } from "@/data/portfolio";

export default function AboutPage() {
  return (
    <div className="pixel-grid min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl max-w-2xl mx-auto">
            {profile.role} based at {profile.location}.
          </p>
        </div>
        
        <PixelSeparator />
        
        <AboutSection />
        
        <PixelSeparator />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Education</h2>
            
            <p className="text-lg">
              <a href="https://www.nitj.ac.in" target="_blank" rel="noreferrer" className="text-primary underline font-bold">
                {education.school}
              </a>
            </p>
            
            <p className="text-lg">
              {education.degree}, {education.period}
            </p>
            
            <p className="text-lg">
              {education.location}
            </p>

            <h2 className="text-3xl font-bold pt-6">Experience</h2>

            {/* interns removed from left column — they will render in a full-width row below so they can use available space */}

            {/* Other experiences stacked below */}
            <div className="mt-6 space-y-4">
              {experience
                .filter((e) => e.role !== "Growth Intern" && e.role !== "Analyst Intern")
                .map((item) => (
                  <div key={item.role} className="pixel-card p-5 bg-white dark:bg-black">
                    <h3 className="text-xl font-bold">{item.role}</h3>
                    <p className="text-lg text-muted-foreground">
                      {item.company}, {item.location} | {item.period}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {item.points.map((point) => (
                        <li key={point} className="text-lg">
                          <span className="mr-2">■</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    {item.certificate && (
                      <a href={item.certificate} target="_blank" rel="noreferrer" className="mt-4 inline-block text-primary font-bold underline">
                        View Certificate
                      </a>
                    )}
                  </div>
                ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="relative h-64 pixel-card overflow-hidden col-span-2">
              <Image
                src="/IMG_0003.jpg"
                alt="Team"
                fill
                className="object-cover"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
          </div>

          {/* Interns row — occupies both columns (left+right) as two side-by-side cards */}
          {experience
            .filter((e) => e.role === "Growth Intern" || e.role === "Analyst Intern")
            .map((item) => (
              <div key={item.role} className="pixel-card bg-white dark:bg-black p-8">
                <div className="flex items-center justify-between">
                    <h3 className="font-bold text-2xl shake-on-click cursor-pointer">{item.role}</h3>
                  {item.certificate && (
                    <a href={item.certificate} target="_blank" rel="noreferrer" className="text-primary font-bold underline">
                      View Certificate
                    </a>
                  )}
                </div>
                <p className="text-lg text-muted-foreground mt-2">
                  {item.company}, {item.location} | {item.period}
                </p>
                <ul className="mt-3 space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="text-lg">
                      <span className="mr-2">■</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        <PixelSeparator className="my-16" />

        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Highlights</h2>
          <div className="pixel-card p-5 bg-white dark:bg-black">
              <h3 className="text-xl font-bold mb-3">Certifications</h3>
              <ul className="space-y-2">
                {certifications.map((cert) => (
                  <li key={cert.name} className="text-lg">
                    <span className="mr-2">■</span>
                    <a href={cert.url} target="_blank" rel="noreferrer" className="text-primary underline">
                      {cert.name}
                    </a>
                  </li>
                ))}
              </ul>
          </div>

          <div className="pixel-card p-5 bg-white dark:bg-black">
            <h3 className="text-xl font-bold mb-3">Achievements</h3>
            <ul className="space-y-2">
              {achievements.map((item) => (
                <li key={item} className="text-lg">
                  <span className="mr-2">■</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <PixelSeparator className="my-16" />

        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Extracurricular Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity) => (
              <div key={activity.title} className="pixel-card p-5 bg-white dark:bg-black">
                <h3 className="text-xl font-bold shake-on-click cursor-pointer hover:translate-x-1 transition-transform">{activity.title}</h3>
                <p className="text-lg text-muted-foreground mb-3">{activity.period}</p>
                <ul className="space-y-2">
                  {activity.points.map((point) => (
                    <li key={point} className="text-lg">
                      <span className="mr-2">■</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
