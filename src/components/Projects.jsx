import { dict } from "../data/data";
import github from "../assets/github.png";
import { useLanguage } from "../context/LanguageContext";

const icons = {
  sample: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 19V5m0 14h16M8 16l3-3 2 2 5-6" />
    </svg>
  ),
  "coming soon": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
    </svg>
  ),
};

function Projects() {
  const { language } = useLanguage();
  const { projects } = dict[language];

  return (
    <section id="projects" className="w-full px-6 py-24 sm:px-10 lg:px-20 bg-[#0a0c0f] text-white">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex items-center gap-4 mb-10">
          <span className="h-px w-12 bg-[#22e500]" />
          <span className="text-sm uppercase tracking-[0.25em] text-[#22e500]">
            {projects.sectionTitle}
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.items.map((project) => {
            const Icon = icons[project.status] || icons["coming soon"];

            return (
              <article
                key={project.title}
                className={`group relative overflow-hidden rounded-3xl border ${project.border} bg-white/3 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/5`}
              >
                {/* Hover gradient */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${project.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="relative flex h-full flex-col justify-between gap-8">
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <span
                      className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.2em] ${project.text} border-current/20 bg-black/20`}
                    >
                      {project.status}
                    </span>

                    <div className={`opacity-60 ${project.text}`}>
                      {Icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold tracking-tight text-white">
                      {project.title}
                    </h3>

                    <p className="text-sm leading-7 text-slate-300">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* GitHub link */}
                    <div className="flex justify-end">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-60 hover:opacity-100 transition"
                      >
                        <img src={github} alt="github" className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;