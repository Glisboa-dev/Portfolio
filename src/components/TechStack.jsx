import { dict } from "../data/data";
import { useLanguage } from "../context/LanguageContext";

const icons = {
  Networking: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="5" r="2"/>
      <circle cx="5" cy="19" r="2"/>
      <circle cx="19" cy="19" r="2"/>
      <path d="M12 7v4M12 11l-5 6M12 11l5 6"/>
    </svg>
  ),
  "Security Tools": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l7 4v6c0 5-3.5 8.5-7 10C8.5 20.5 5 17 5 12V6l7-4z"/>
    </svg>
  ),
  Programming: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
};

const colors = {
  Networking: {
    accent: "#3b82f6",
    dimBg: "rgba(59,130,246,0.07)",
    border: "rgba(59,130,246,0.0)",
    shadow: "0 4px 32px rgba(59,130,246,0.15)",
  },
  "Security Tools": {
    accent: "#ef4444",
    dimBg: "rgba(239,68,68,0.07)",
    border: "rgba(239,68,68,0.0)",
    shadow: "0 4px 32px rgba(239,68,68,0.15)",
  },
  Programming: {
    accent: "#94a3b8",
    dimBg: "rgba(148,163,184,0.07)",
    border: "rgba(148,163,184,0.0)",
    shadow: "0 4px 32px rgba(148,163,184,0.12)",
  },
};

function TechStack() {
  const { language } = useLanguage();
  const { stacks } = dict[language];

  return (
    <section id="skills" className="w-full px-6 py-24 sm:px-10 lg:px-20 bg-[#0a0c0f] text-white">
      <div className="mx-auto w-full max-w-5xl flex flex-col gap-14">

        {/* Header */}
        <div className="flex items-start justify-between pt-10">
          <div className="flex items-center gap-4">
            <span className="block w-10 h-[2px] bg-green-600" />
            <h2 className="text-green-600 text-lg sm:text-xl uppercase tracking-[0.25em]">
              {stacks.title}
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {stacks.sections.map((group, index) => {
            const c = colors[group.id] ?? colors["Networking"];
            const Icon = icons[group.id];

            return (
              <div
                key={group.id}
                className="relative flex flex-col gap-5 p-6 border border-white/6 bg-[#0f1318] overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: c.shadow }}
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: c.accent }}
                />

                {/* Icon + Title */}
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center w-9 h-9 border"
                    style={{
                      color: c.accent,
                      background: c.dimBg,
                      borderColor: c.border,
                    }}
                  >
                    {Icon}
                  </div>

                  <h3
                    className=" text-xs uppercase tracking-[0.2em]"
                    style={{ color: c.accent }}
                  >
                    {group.title}
                  </h3>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/6" />

                {/* Items */}
                <div className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-[#8a9ab0] text-sm"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: c.accent }}
                      />
                      {item}
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TechStack;