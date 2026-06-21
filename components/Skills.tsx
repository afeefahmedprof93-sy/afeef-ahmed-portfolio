type SkillGroup = {
  title: string;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Testing",
    items: [
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "Smoke Testing",
      "Sanity Testing",
      "Exploratory Testing",
      "Test Case Design",
      "Bug Reporting",
    ],
  },
  {
    title: "Automation",
    items: [
      "Playwright",
      "TypeScript",
      "Selenium",
      "Java",
      "TestNG",
      "Page Object Model",
      "Fixtures",
      "Parallel Execution",
      "Retry Handling",
    ],
  },
  {
    title: "API & Database",
    items: [
      "Postman",
      "REST API Testing",
      "JSON Validation",
      "Schema Validation",
      "SQL",
    ],
  },
  {
    title: "Performance & CI/CD",
    items: ["k6", "GitHub Actions", "CI/CD", "HTML Reports", "Allure Reports"],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "GitHub",
      "SourceTree",
      "Jira",
      "VS Code",
      "IntelliJ IDEA",
      "Chrome DevTools",
      "MCP",
      "Codex",
      "Claude Code",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-b border-white/10 bg-slate-950 py-20">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title mt-3">Testing and automation toolkit</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-lg border border-white/10 bg-slate-900/70 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-soft"
            >
              <h3 className="text-xl font-bold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/10 bg-slate-950/70 px-3 py-2 text-sm font-medium text-slate-300 transition hover:border-brand/50 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
