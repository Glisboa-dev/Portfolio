import { dict } from "../data/data";
import { useLanguage } from "../context/LanguageContext";

function Experience() {
  const { language } = useLanguage();
  const { experience } = dict[language];

  return (
    <section
      id="experience"
      className="w-full px-6 py-24 sm:px-10 lg:px-20 bg-[#0a0c0f] text-white"
    >
      <div className="mx-auto w-full max-w-4xl flex flex-col gap-14">
        {/* Header */}
        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-[#22e500]" />
          <h2 className="text-sm uppercase tracking-[0.25em] text-[#22e500]">
            {experience.sectionTitle}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-linear-to-b from-sky-500/40 via-slate-500/20 to-transparent" />

          <div className="flex flex-col gap-12">
            {experience.items.map((job) => {
              const checkStatus = job.status.toLowerCase();
              const isCurrent = checkStatus === "ongoing" || checkStatus === "current" || checkStatus === "em andamento" || checkStatus === "atual";

              return (
                <div key={`${job.company}-${job.role}`} className="relative flex gap-8 group">
                  {/* Timeline node */}
                  <div className="relative shrink-0 flex flex-col items-center pt-1.5">
                    {/* Outer ring */}
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${
                        isCurrent
                          ? "border-sky-400/60 bg-sky-400/10"
                          : "border-slate-600/40 bg-slate-700/20"
                      }`}
                    >
                      {/* Inner dot */}
                      <div
                        className={`w-2 h-2 rounded-full ${
                          isCurrent
                            ? "bg-sky-400 animate-pulse"
                            : "bg-slate-500"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 pb-2">
                    <div className="group/card relative overflow-hidden rounded-2xl border border-white/6 bg-white/2 p-6 transition-all duration-500 hover:border-white/12 hover:bg-white/4 hover:-translate-y-0.5">
                      {/* Hover gradient overlay */}
                      <div
                        className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100 bg-linear-to-br ${
                          isCurrent
                            ? "from-sky-500/6 to-transparent"
                            : "from-slate-500/6 to-transparent"
                        }`}
                      />

                      {/* Top corner glow */}
                      <div
                        className={`absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover/card:opacity-30 ${
                          isCurrent ? "bg-sky-500/20" : "bg-slate-500/10"
                        }`}
                      />

                      <div className="relative flex flex-col gap-4">
                        {/* Top row — role + status */}
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div className="flex flex-col gap-1">
                            <h3 className="text-base font-medium text-slate-200 group-hover/card:text-white transition-colors duration-300">
                              {job.role}
                            </h3>
                            <span className="text-[13px] text-slate-400">
                              {job.company}
                            </span>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="text-[10px] tracking-[0.15em] uppercase text-slate-500">
                              {job.period}
                            </span>
                            {isCurrent && (
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/20 bg-sky-400/6 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] text-sky-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                                {job.status}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Location + Mode row */}
                        {(job.location || job.mode) && (
                          <div className="flex flex-wrap items-center gap-3">
                            {job.location && (
                              <span className="inline-flex items-center gap-1.5 text-[11px] text-slate-500">
                                {/* Map pin icon */}
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  className="text-slate-600"
                                >
                                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                  <circle cx="12" cy="10" r="3" />
                                </svg>
                                {job.location}
                              </span>
                            )}
                            {job.mode && (
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-600/30 bg-slate-700/20 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.15em] text-slate-500">
                                {/* Building / wifi icon */}
                                {job.mode === "Remote" ? (
                                  <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="text-slate-500"
                                  >
                                    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                                    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                                    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                                    <line x1="12" y1="20" x2="12.01" y2="20" />
                                  </svg>
                                ) : (
                                  <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="text-slate-500"
                                  >
                                    <rect x="4" y="2" width="16" height="20" rx="2" />
                                    <path d="M9 22v-4h6v4" />
                                    <path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01" />
                                  </svg>
                                )}
                                {job.mode}
                              </span>
                            )}
                          </div>
                        )}

                        {/* Description */}
                        <p className="text-sm leading-7 text-slate-400">
                          {job.description}
                        </p>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {job.highlights.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/8 bg-white/3 px-3 py-1 text-[11px] text-slate-400 transition-colors duration-200 hover:text-slate-300 hover:border-white/12"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Year tag */}
                        <div className="flex items-center gap-2 pt-2 border-t border-white/4">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            className="text-slate-600"
                          >
                            <rect x="3" y="4" width="18" height="18" rx="2" />
                            <path d="M16 2v4M8 2v4M3 10h18" />
                          </svg>
                          <span className="text-[10px] tracking-[0.15em] uppercase text-slate-500">
                            {job.startDate}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* "More to come" node */}
            <div className="relative flex gap-8 items-start">
              <div className="relative shrink-0 flex flex-col items-center pt-1.5">
                <div className="w-6 h-6 rounded-full border-2 border-dashed border-slate-700/60 flex items-center justify-center">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="text-slate-600"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </div>
              </div>
              <span className="text-[11px] tracking-[0.15em] uppercase text-slate-600 pt-2.5">
                {experience.moreToCome}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
