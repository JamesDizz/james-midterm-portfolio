export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  details: string;
};

export const projects: Project[] = [
  {
    id: "calcu-fit-nine",
    title: "Calcu Fit Nine",
    description: "Fitness calculator web app with BMI and calorie features.",
    tags: ["HTML", "CSS", "Responsive"],
    link: "https://calcu-fit-nine.vercel.app/",
    details:
      "A clean fitness calculator made from the midterm mockup scope. Supports BMI and macro estimations with minimal UI and black/white style.",
  },
  {
    id: "midterm-ecommerce-two",
    title: "Midterm E-commerce",
    description: "E-commerce demo site with product grid and checkout flow.",
    tags: ["Next.js", "State", "UI"],
    link: "https://midterm-ecommerce-two.vercel.app/",
    details:
      "E-commerce demonstration implementing product cards, category filters, and cart interactions. Aligned with your requirement for multiple route structures.",
  },
  {
    id: "midterm-auth-project-g8ta",
    title: "Auth Demo Project",
    description: "Authentication flow with login and registration using Next.js.",
    tags: ["Next.js", "Auth", "Forms"],
    link: "https://midterm-auth-project-g8ta.vercel.app/",
    details:
      "Midterm authentication project with secure login/register pages and appropriate validation. Designed for an easy student demo as part of your portfolio.",
  },
];

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Git",
  "Figma",
];
