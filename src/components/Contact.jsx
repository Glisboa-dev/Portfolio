import React from 'react';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';
import { dict } from '../data/data';
import { useLanguage } from '../context/LanguageContext';

function Contact() {
  const { language } = useLanguage();
  const { contact } = dict[language];

  return (
    <section
      id="contact"
      className="w-full px-6 py-24 sm:px-10 lg:px-20 bg-[#0a0c0f] text-white"
    >
      <div className="mx-auto w-full max-w-5xl flex flex-col gap-14">
        {/* Header */}
        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-[#22e500]" />
          <h2 className="text-sm uppercase tracking-[0.25em] text-[#22e500]">
            {contact.sectionTitle}
          </h2>
        </div>

        {/* Content */}
        <div className="relative group overflow-hidden rounded-2xl border border-white/6 bg-white/2 p-10 md:p-16 text-center transition-all duration-500 hover:border-white/12 hover:bg-white/4">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-linear-to-br from-[#22e500]/5 to-transparent" />
          
          {/* Glow effects */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[80px] opacity-20 bg-[#22e500]/20 pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full blur-[80px] opacity-20 bg-sky-500/10 pointer-events-none" />

          <div className="relative flex flex-col items-center gap-6 z-10">
            <h3 className="text-3xl md:text-5xl font-semibold text-slate-200 tracking-tight">
              {contact.title}
            </h3>
            <p className="max-w-xl text-slate-400 text-sm md:text-base leading-relaxed">
              {contact.description}
            </p>
            
            <div className="pt-8">
              <a
                href="mailto:gbr.lisboa.work@gmail.com"
                className="inline-flex items-center gap-3 rounded-full bg-[#22e500]/10 px-8 py-4 text-sm font-medium tracking-wide text-[#22e500] border border-[#22e500]/20 transition-all duration-300 hover:bg-[#22e500]/20 hover:border-[#22e500]/40 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,229,0,0.2)]"
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {contact.buttonText}
              </a>
            </div>
            
            <p className="pt-8 text-xs text-slate-500 font-mono select-all">
              gbr.lisboa.work@gmail.com
            </p>

            {/* Socials */}
            <div className="flex items-center gap-5 pt-2">
              <a
                href="https://github.com/Glisboa-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center p-2.5 rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:scale-110 hover:border-white/20 hover:bg-white/10"
                aria-label="GitHub"
              >
                <img src={githubIcon} alt="GitHub" className="w-5 h-5 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://www.linkedin.com/in/gabriel-lisboa05/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center p-2.5 rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:scale-110 hover:border-white/20 hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
