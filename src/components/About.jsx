import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';
import { dict } from '../data/data';
import { useLanguage } from '../context/LanguageContext';

function About() {
  const { language } = useLanguage();
  const { about } = dict[language];

  return (
    <section id="about" className="w-full px-6 py-28 sm:px-10 lg:px-20 bg-[#0a0c0f] text-white ">
      <div className="mx-auto w-full max-w-5xl flex flex-col gap-12">

        {/* Header */}
        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-[#22e500]" />
          <span className="text-lg uppercase tracking-[0.25em] text-[#22e500]">
            {about.title}
          </span>
        </div>

        {/* Content */}
        <div className="max-w-3xl space-y-6">
          {about.paragraphs.map((para, i) => (
            <p key={i} className="font-sans text-base leading-8 text-slate-300">
              {para}
            </p>
          ))}
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-4 pt-4">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-[16px] bg-blue-900/40 border border-blue-500/20 text-[12px] tracking-[0.18em] text-blue-300">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            {about.badges[0]}
          </span>

          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-[16px] bg-indigo-900/40 border border-indigo-500/20 text-[12px] tracking-[0.18em] text-indigo-300">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            {about.badges[1]}
          </span>

          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-[16px] bg-rose-900/40 border border-rose-500/20 text-[12px] tracking-[0.18em] text-rose-300">
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
            {about.badges[2]}
          </span>
        </div>

      </div>
    </section>
  );
}

export default About;