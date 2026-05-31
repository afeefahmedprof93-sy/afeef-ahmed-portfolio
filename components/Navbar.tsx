const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Samples", href: "#work-samples" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 shadow-sm backdrop-blur-xl">
      <nav
        className="section-shell flex min-h-16 items-center justify-between gap-4"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          className="focus-ring inline-flex items-center gap-3 text-base font-bold text-white transition hover:text-accent"
        >
          Afeef Ahmed Jarif
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="focus-ring rounded-md border border-cyan-300/25 bg-gradient-to-r from-slate-800 via-slate-800 to-cyan-950 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300/50 hover:from-slate-700 hover:to-cyan-900"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}
