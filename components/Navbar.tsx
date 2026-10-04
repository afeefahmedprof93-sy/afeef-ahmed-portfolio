const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "AI Workflow", href: "#ai-workflow" },
  { label: "Projects", href: "#projects" },
  { label: "Samples", href: "#work-samples" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 shadow-sm backdrop-blur-xl">
      <nav
        className="section-shell flex min-h-16 items-center justify-between gap-4"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          className="focus-ring inline-flex items-center gap-3 text-base font-bold text-ink transition hover:text-accent"
        >
          Afeef Ahmed Jarif
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md px-3 py-2 text-sm font-medium text-muted transition hover:bg-surface hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="focus-ring rounded-md border border-brand bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:border-plum hover:bg-plum"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}
