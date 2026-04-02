import { dict } from "../data/data";
import { useLanguage } from "../context/LanguageContext";

const colorMap = {
  emerald: {
    badge: "text-emerald-400 border-emerald-400/20 bg-emerald-400/6",
    dot: "bg-emerald-400",
    gradient: "from-emerald-500/6 to-transparent",
    glow: "bg-emerald-500/20",
    icon: "text-emerald-400",
    arrow: "text-emerald-400",
    arrowBg: "border-emerald-400/30 bg-emerald-400/10 hover:bg-emerald-400/20",
  },
  red: {
    badge: "text-red-400 border-red-400/20 bg-red-400/6",
    dot: "bg-red-400",
    gradient: "from-red-500/6 to-transparent",
    glow: "bg-red-500/20",
    icon: "text-red-400",
    arrow: "text-red-400",
    arrowBg: "border-red-400/30 bg-red-400/10 hover:bg-red-400/20",
  },
  cyan: {
    badge: "text-cyan-400 border-cyan-400/20 bg-cyan-400/6",
    dot: "bg-cyan-400",
    gradient: "from-cyan-500/6 to-transparent",
    glow: "bg-cyan-500/20",
    icon: "text-cyan-400",
    arrow: "text-cyan-400",
    arrowBg: "border-cyan-400/30 bg-cyan-400/10 hover:bg-cyan-400/20",
  },
};

function Certifications() {
  const { language } = useLanguage();
  const { certifications } = dict[language];

  return (
    <section
      id="certs"
      className="w-full px-6 py-24 sm:px-10 lg:px-20 bg-[#0a0c0f] text-white"
    >
      <div className="mx-auto w-full max-w-5xl flex flex-col gap-14">
        {/* Header */}
        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-[#22e500]" />
          <h2 className="text-sm uppercase tracking-[0.25em] text-[#22e500]">
            {certifications.sectionTitle}
          </h2>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-12">
          {/* Certifications Section */}
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-slate-400">
              {certifications.certLabel}
            </h3>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.items
                .filter((cert) => cert.type === "Certification" || cert.type === "Certificações")
                .map((cert, i) => (
                  <CertCard key={cert.title} cert={cert} index={i} />
                ))}
            </div>
          </div>

          {/* Trainings Section */}
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-slate-400">
              {certifications.trainLabel}
            </h3>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.items
                .filter((cert) => cert.type === "Training" || cert.type === "Treinamentos")
                .map((cert, i) => (
                  <CertCard key={cert.title} cert={cert} index={i} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const CertCard = ({ cert, index }) => {
  const isValidated = cert.status === "Completed" || cert.status === "Concluído";
  const c = colorMap[cert.color] || colorMap.cyan;

  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-white/6 bg-white/2 p-6 transition-all duration-500 hover:border-white/12 hover:bg-white/4 hover:-translate-y-1"
      style={{
        animationDelay: `${index * 120}ms`,
      }}
    >
      {/* Subtle gradient overlay on hover */}
      <div
        className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-linear-to-br ${c.gradient}`}
      />

      {/* Top corner glow */}
      <div
        className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-40 ${c.glow}`}
      />

      <div className="relative flex flex-col gap-5 h-full">
        {/* Status badge */}
        <div className="flex items-center justify-between">
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.2em] ${c.badge}`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full animate-pulse ${c.dot}`}
            />
            {cert.status}
          </span>

          {/* Shield icon */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            className={`opacity-30 group-hover:opacity-60 transition-opacity duration-300 ${c.icon}`}
          >
            {isValidated ? (
              <>
                <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
                <path d="M9 12l2 2 4-4" />
              </>
            ) : (
              <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
            )}
          </svg>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2 flex-1">
          <h3 className="text-[15px] font-medium leading-snug text-slate-200 group-hover:text-white transition-colors duration-300">
            {cert.title}
          </h3>
          <span className="text-[11px] tracking-wide text-slate-500">
            {cert.issuer}
          </span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-white/4">
          <span className="text-[10px] tracking-[0.15em] uppercase text-slate-500">
            {cert.date}
          </span>

          {/* Arrow link on hover */}
          {cert.link ? (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-8 h-8 rounded-full border flex items-center justify-center opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hover:scale-110 cursor-pointer ${c.arrow} ${c.arrowBg}`}
              aria-label={`View ${cert.title}`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          ) : (
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center opacity-0 translate-x-2 group-hover:opacity-40 group-hover:translate-x-0 transition-all duration-300 ${c.arrow}`}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Certifications;