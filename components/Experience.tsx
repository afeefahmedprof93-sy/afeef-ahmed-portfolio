const experienceItems = [
  {
    role: "Senior Software QA Engineer",
    organization: "Enosis Solutions",
    period: "2025 - Present",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Lead manual, API, performance, and UI automation testing for an event ticketing and venue-management platform across web, backend, and release workflows.",
      "Use AI-driven QA workflows to support requirement analysis, checklist and test-case preparation, regression planning, defect analysis, documentation improvement, and reusable automation coverage.",
      "Design and maintain Playwright with TypeScript end-to-end suites using reusable fixtures, utilities, and scalable test architecture.",
      "Plan and execute k6 performance tests to evaluate response time, throughput, stability, and behavior under expected and high-load conditions.",
      "Perform REST API testing with Postman, validating backend data, business rules, integrations, and error handling.",
      "Document clear defects with reproduction steps, expected and actual results, evidence, severity, and priority.",
    ],
  },
  {
    role: "Software QA Engineer",
    organization: "Enosis Solutions",
    period: "2023 - 2025",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Conducted manual testing for web, desktop, and mobile applications throughout the Software Testing Life Cycle.",
      "Developed Selenium WebDriver automation scripts using Java and TestNG to improve regression efficiency and critical workflow coverage.",
      "Executed functional, regression, smoke, sanity, and cross-browser testing before production releases.",
      "Maintained automation code and test assets using Git, GitHub, and Sourcetree for version control and collaboration.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-b border-white/10 bg-slate-950 py-20">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="section-kicker">Experience</p>
            <h2 className="section-title mt-3">Hands-on QA engineering work</h2>
            <p className="mt-5 leading-7 text-slate-300">
              Professional QA experience from 2023 to present across manual
              testing, automation testing, API testing, performance testing,
              AI-driven QA workflows, defect reporting, and release readiness
              in Agile/Scrum teams.
            </p>
          </div>
          <div className="space-y-5">
            {experienceItems.map((item) => (
              <article
                key={`${item.role}-${item.organization}`}
                className="rounded-lg border border-white/10 bg-slate-900/70 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-soft"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {item.role}
                    </h3>
                    <p className="mt-1 font-semibold text-accent">
                      {item.organization}
                    </p>
                  </div>
                  <div className="rounded-md border border-white/10 bg-slate-950/70 px-3 py-2 text-sm font-semibold text-slate-300">
                    {item.period} · {item.location}
                  </div>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
