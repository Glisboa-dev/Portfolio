import { useState } from "react";
import { dict } from "../data/data";
import { useLanguage } from "../context/LanguageContext";

function Header() {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
  const { navItems, header } = dict[language];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0f14]/90 backdrop-blur-xl">
      <div className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        
        {/* Logo / Name (closer to left) */}
        <h1 className="text-lg font-semibold tracking-[0.25em] text-gray-200">
          {header.title}
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs uppercase tracking-[0.2em] text-gray-400 transition hover:text-gray-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side (CTA + Mobile toggle) */}
        <div className="flex items-center gap-3">
          
          {/* CTA */}
          {header.href && (
            <a
              href={header.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex px-4 py-2 text-xs uppercase tracking-[0.18em] bg-white/20 text-gray-300 transition-all duration-200 rounded-full hover:bg-white/10 hover:backdrop-blur-sm"
            >
              {header.resume}
            </a>
          )}

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-gray-300"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0b0f14] px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-sm text-gray-400 uppercase tracking-[0.15em] hover:text-gray-200"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;