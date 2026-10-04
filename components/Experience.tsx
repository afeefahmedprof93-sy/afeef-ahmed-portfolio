const experienceItems = [
  {
    role: "Senior Software QA Engineer",
    organization: "Enosis Solutions",
    period: "2025 - Present",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Perform AI-assisted testing for an email and SMS marketing platform, supporting requirement analysis, test case preparation, regression planning, and defect investigation.",
      "Lead manual, API, UI automation, and performance testing for an event ticketing and venue-management platform, covering sprint changes, integrations, and release readiness.",
      "Design and maintain Playwright/TypeScript end-to-end suites with Page Object Model, reusable fixtures, test data handling, and stable locator strategies.",
      "Validate REST APIs in Postman, including authentication, request and response data, business rules, negative scenarios, and error handling.",
      "Plan and execute k6 tests to assess response time, throughput, and stability under expected and high-load conditions; investigate performance trends and potential bottlenecks.",
      "Clarify incomplete requirements with product and development teams, document reproducible defects with evidence, and verify fixes during regression and release testing.",
    ],
  },
  {
    role: "Software QA Engineer",
    organization: "Enosis Solutions",
    period: "2023 - 2025",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Tested desk reservation, desktop POS, ticket-scanning, and event-management applications, adapting functional, exploratory, and regression coverage to web, mobile, and desktop workflows.",
      "Developed Selenium/Java automation with TestNG for desk reservation workflows; used Sikuli for image-based testing where DOM access was unavailable.",
      "Supported an event ticketing platform as a full-time QA resource, collaborating with developers and product teams on requirement clarification, defect resolution, and release validation.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-b border-line bg-surface py-20">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="section-kicker">Experience</p>
            <h2 className="section-title mt-3">Hands-on QA engineering work</h2>
            <p className="mt-5 leading-7 text-muted">
              QA experience since 2023 across marketing, ticketing,
              reservations, and POS products. My work covers requirement
              analysis, manual and automated testing, API validation,
              performance testing, and release readiness in Agile/Scrum teams.
            </p>
          </div>
          <div className="space-y-5">
            {experienceItems.map((item) => (
              <article
                key={`${item.role}-${item.organization}`}
                className="rounded-lg border border-line bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-soft"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-ink">
                      {item.role}
                    </h3>
                    <p className="mt-1 font-semibold text-accent">
                      {item.organization}
                    </p>
                  </div>
                  <div className="rounded-md border border-line bg-surface px-3 py-2 text-sm font-semibold text-muted">
                    {item.period} · {item.location}
                  </div>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
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
