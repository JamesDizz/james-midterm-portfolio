import Link from "next/link";
import Footer from "@/app/components/common/Footer";
import Image from "next/image";
import ProjectCard from "@/app/components/features/ProjectCard";
import { projects } from "@/app/data/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <main className="mx-auto w-full max-w-6xl px-3 py-6 sm:px-4 sm:py-8 md:px-6 md:py-10">
        <section className="rounded-lg border border-black/10 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-black sm:rounded-xl sm:p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">James Patrick Dizon</h1>
              <p className="text-xs sm:text-sm md:text-base">BSIT 3C | Front-end Developer | Portfolio Project</p>
              <p className="max-w-3xl text-xs leading-relaxed text-black/70 dark:text-white/80 sm:text-sm md:text-base">
                Aspiring front-end developer with a passion for crafting clean, user-friendly interfaces. This portfolio site is built with Next.js and Tailwind CSS. Explore my work and get in touch for collaboration opportunities!
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <Link href="/projects" className="rounded-md border border-black/20 px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10 transition">
                  View Projects
                </Link>
                <Link href="/about" className="rounded-md border border-black/20 px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10 transition">
                  About
                </Link>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src="/james.jpg"
                alt="James Patrick Dizon"
                width={300}
                height={400}
                priority
                className="rounded-lg object-cover shadow-md w-48 h-64 sm:w-64 sm:h-80 md:w-72 md:h-96"
              />
            </div>
          </div>
        </section>

        <section id="projects" className="mt-6 rounded-lg border border-black/10 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-black sm:rounded-xl sm:p-6 md:mt-8 md:p-8">
          <h2 className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">Recent Projects</h2>
          <div className="mt-4 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section id="help" className="mt-6 rounded-lg border border-black/10 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-black sm:rounded-xl sm:p-6 md:mt-8 md:p-8">
          <div className="grid gap-4 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-lg font-semibold sm:text-xl md:text-2xl">Need Help?</h3>
              <p className="mt-2 text-xs sm:text-sm md:text-base text-black/70 dark:text-white/80 leading-relaxed">
                Have a project requirement or an assignment update? Let&apos;s connect so I can help build the solution with Next.js and your mockup style.
              </p>
            </div>
            <div className="flex items-center justify-start md:justify-end">
              <a href="mailto:patrickblando28@gmail.com" className="inline-block rounded-md border border-black/20 px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10 transition whitespace-nowrap">
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
