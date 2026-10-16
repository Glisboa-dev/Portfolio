const root = document.documentElement;
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.querySelector(".theme-toggle");

/* Menu mobile */
menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Abrir menu");
  });
});

/* Tema claro/escuro (com preferência salva) */
function applyTheme(isLight) {
  root.classList.toggle("light", isLight);
  root.style.colorScheme = isLight ? "light" : "dark";
  if (themeToggle) {
    themeToggle.textContent = isLight ? "☾" : "☼";
    themeToggle.setAttribute("aria-label", isLight ? "Ativar tema escuro" : "Ativar tema claro");
  }
}

try {
  applyTheme(localStorage.getItem("theme") === "light");
} catch (e) {
  applyTheme(false);
}

themeToggle?.addEventListener("click", () => {
  const isLight = !root.classList.contains("light");
  applyTheme(isLight);
  try { localStorage.setItem("theme", isLight ? "light" : "dark"); } catch (e) {}
});

/* Link ativo conforme a seção visível */
const sections = [...document.querySelectorAll("main section[id]")];
const links = [...document.querySelectorAll(".nav-link")];
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach((section) => observer.observe(section));
}

/* Ano do rodapé */
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();