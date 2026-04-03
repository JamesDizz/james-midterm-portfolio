import type { Project } from "@/app/data/projects";
import Link from "next/link";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-black">
      <h3 className="text-lg font-semibold text-black dark:text-white">{project.title}</h3>
      <p className="mt-2 text-sm text-black/70 dark:text-white/80">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-black/10 px-2.5 py-1 text-xs font-semibold text-black dark:border-white/20 dark:text-white">
            {tag}
          </span>
        ))}
      </div>
      <Link
        href={project.link ?? "/projects"}
        className="mt-4 inline-flex items-center text-sm font-semibold text-black hover:text-black/80 dark:text-white dark:hover:text-white/80"
      >
        Learn more →
      </Link>
    </article>
  );
}
