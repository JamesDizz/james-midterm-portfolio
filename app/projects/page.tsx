import Link from "next/link";
import { projects } from "@/app/data/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <main className="mx-auto w-full max-w-5xl px-3 py-6 sm:px-4 sm:py-8 md:px-6 md:py-10">
        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">Projects</h1>
        <p className="mt-2 text-xs sm:text-sm text-black/70 dark:text-white/70">All project work matching the midterm mockup structure.</p>

        <div className="mt-6 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const isExternal = project.link?.startsWith("http");
            const href = project.link ?? `/projects/${project.id}`;

            const cardContent = (
              <div className="rounded-lg sm:rounded-xl border border-black/10 bg-white p-4 sm:p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-black">
                <h2 className="text-lg sm:text-xl font-semibold text-black dark:text-white line-clamp-2">{project.title}</h2>
                <p className="mt-2 text-xs sm:text-sm text-black/70 dark:text-white/70 line-clamp-3">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  {project.tags.map((tag) => (
                    <span key={`${project.id}-${tag}`} className="rounded-full border border-black/10 px-2 py-1 text-black dark:border-white/20 dark:text-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );

            return isExternal ? (
              <a key={project.id} href={href} target="_blank" rel="noreferrer noopener">
                {cardContent}
              </a>
            ) : (
              <Link key={project.id} href={href}>
                {cardContent}
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
