const workflowSteps = [
  {
    title: "Requirement Analysis",
    description:
      "Review product requirements, identify ambiguity, and map critical user and business flows.",
  },
  {
    title: "Checklist & Test Cases",
    description:
      "Prepare structured coverage for functional behavior, edge cases, integrations, and risk areas.",
  },
  {
    title: "Regression Planning",
    description:
      "Prioritize repeatable scenarios and organize focused regression coverage for upcoming releases.",
  },
  {
    title: "Defect Analysis",
    description:
      "Improve defect investigation, reproduction detail, impact analysis, and supporting evidence.",
  },
  {
    title: "Documentation Improvement",
    description:
      "Refine QA documentation so test intent, expected behavior, and release evidence remain clear.",
  },
  {
    title: "Reusable Automation Coverage",
    description:
      "Turn validated product flows into maintainable automated tests for future regression cycles.",
  },
];

export function AIWorkflow() {
  return (
    <section
      id="ai-workflow"
      className="border-b border-white/10 bg-slate-950 py-20"
    >
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <p className="section-kicker">AI-Driven QA Workflow</p>
            <h2 className="section-title mt-3">
              From product context to reusable test coverage
            </h2>
            <p className="mt-5 leading-7 text-slate-300">
              I use AI-assisted workflows to accelerate QA preparation and
              analysis while keeping every decision, scenario, and automation
              test grounded in reviewed product behavior.
            </p>
            <div className="mt-6 border-l-2 border-accent pl-4">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                Core outcome
              </p>
              <p className="mt-2 font-semibold leading-6 text-white">
                Generate maintainable, reusable automation test coverage for
                future regression cycles.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {workflowSteps.map((step, index) => (
              <article
                key={step.title}
                className={`group rounded-lg border p-5 transition duration-300 hover:-translate-y-1 hover:shadow-soft ${
                  index === workflowSteps.length - 1
                    ? "border-accent/45 bg-cyan-300/10 hover:border-accent"
                    : "border-white/10 bg-slate-900/70 hover:border-brand/50"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-accent/25 bg-slate-950/80 text-sm font-bold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
