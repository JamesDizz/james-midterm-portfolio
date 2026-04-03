type Props = {
  skill: string;
};

export default function SkillBadge({ skill }: Props) {
  return (
    <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-black dark:border-white/20 dark:bg-black dark:text-white">
      {skill}
    </span>
  );
}
