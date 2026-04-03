"use client";

import Footer from "@/app/components/common/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <main className="mx-auto w-full max-w-5xl px-4 py-6 md:px-6 md:py-10">
        <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">About Me</h1>
        <p className="mt-3 text-sm leading-relaxed text-black/80 dark:text-white/80 md:text-base">
            Hi, I&apos;m James Patrick Dizon, an aspiring front-end developer with a passion for crafting clean and user-friendly interfaces. I am currently pursuing a Bachelor of Science in Information Technology (BSIT) on Cordova Public College. I am in my 3rd year, section C. This portfolio site is built using Next.js and Tailwind CSS, showcasing projects that align with the midterm mockup structure. I am eager to explore opportunities for collaboration and growth in the field of web development. Feel free to check out my projects and get in touch!
        </p>
        <div className="mt-8 space-y-6 rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black md:p-6 lg:p-8">
          <div>
            <h2 className="text-lg font-semibold md:text-xl">Education</h2>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70 md:text-base">Bachelor of Science in Information Technology (BSIT) - 3C</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold md:text-xl">Tech Stack</h2>
            <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
              {[
                { name: "HTML", icon: "fab fa-html5" },
                { name: "CSS", icon: "fab fa-css3-alt" },
                { name: "JavaScript", icon: "fab fa-js-square" },
                { name: "React", icon: "fab fa-react" },
                { name: "Next.js", icon: "fab fa-node-js" },
                { name: "MySQL", icon: "fas fa-database" },
                { name: "Laravel", icon: "fab fa-laravel" },
                { name: "TypeScript", icon: "fab fa-js" },
                { name: "Tailwind", icon: "fab fa-css3" },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center gap-1 rounded-lg border border-black/10 bg-white p-2 text-center transition hover:shadow-md dark:border-white/10 dark:bg-black md:p-3"
                >
                  <i className={`${tech.icon} text-lg md:text-2xl text-black dark:text-white`}></i>
                  <p className="text-xs font-semibold text-black dark:text-white">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold md:text-xl">Contact</h2>
            <ul className="mt-2 space-y-2 text-sm text-black/70 dark:text-white/70 md:text-base">
              <li className="break-all">
                Email: <a href="mailto:patrickblando28@gmail.com" className="text-black dark:text-white underline hover:no-underline">patrickblando28@gmail.com</a>
              </li>
              <li className="break-all">
                Facebook: <a href="https://www.facebook.com/james.always.dizzy" target="_blank" rel="noreferrer" className="text-black dark:text-white underline hover:no-underline">facebook.com/james.always.dizzy</a>
              </li>
              <li className="break-all">
                GitHub: <a href="https://github.com/JamesDizz" target="_blank" rel="noreferrer" className="text-black dark:text-white underline hover:no-underline">github.com/JamesDizz</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
