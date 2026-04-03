import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/app/data/projects";

type Params = {
  params: { id: string };
};

export default function ProjectDetailPage({ params }: Params) {
  const project = projects.find((item) => item.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <main className="mx-auto w-full max-w-4xl px-3 py-6 sm:px-4 sm:py-8 md:px-6 md:py-10">
        <Link href="/projects" className="text-xs sm:text-sm text-black hover:text-black/70 dark:text-white dark:hover:text-white/70 transition">
          ← Back to Projects
        </Link>
        <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold">{project?.title}</h1>
        <p className="mt-2 text-xs sm:text-sm text-black/80 dark:text-white/80 leading-relaxed">{project?.description}</p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs sm:text-sm">
          {project?.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-black/10 px-2 sm:px-3 py-1 text-black dark:border-white/20 dark:text-white">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 rounded-lg sm:rounded-xl border border-black/10 bg-white p-4 sm:p-6 shadow-sm dark:border-white/10 dark:bg-black">
          <h2 className="text-base sm:text-lg font-semibold">Details</h2>
          <p className="mt-2 text-xs sm:text-sm text-black/75 dark:text-white/75 leading-relaxed">{project?.details}</p>
        </div>
        {project?.link && (
          <div className="mt-6">
            <a href={project.link} target="_blank" rel="noreferrer" className="inline-block rounded-md border border-black/20 px-4 py-2 text-xs sm:text-sm hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10 transition">
              Visit Project
            </a>
          </div>
        )}
      </main>
    </div>
  );
}
