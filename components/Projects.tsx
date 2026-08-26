type Project = {
  title: string;
  description: string;
  stack: string[];
  features: string[];
  githubUrl: string;
  accent: string;
  icon: "playwright" | "selenium" | "appium" | "k6" | "harness";
};

const projects: Project[] = [
  {
    title: "QA Harness",
    description:
      "An AI-driven QA workflow project focused on requirement analysis, structured test planning, defect investigation, and reusable automation coverage.",
    stack: ["AI-Driven QA", "Test Strategy", "Reusable Coverage", "Documentation"],
    features: [
      "Product flow analysis",
      "Reusable test coverage planning",
      "Defect investigation support",
      "QA documentation workflow",
    ],
    githubUrl: "https://github.com/afeefahmedprof93-sy/QA_harness",
    accent: "from-sky-500 to-violet-500",
    icon: "harness",
  },
  {
    title: "Playwright UI Automation Lab",
    description:
      "A professional end-to-end automation framework for automationexercise.com covering all 26 official test cases with clean architecture.",
    stack: ["Playwright", "TypeScript", "POM", "GitHub Actions"],
    features: [
      "All 26 official test cases",
      "Cross-browser and device execution",
      "Automatic retries",
      "CI/CD workflow support",
    ],
    githubUrl: "https://github.com/afeefahmedprof93-sy/playwright-ui-automation-lab",
    accent: "from-blue-500 to-cyan-500",
    icon: "playwright",
  },
  {
    title: "Playwright API Automation Framework",
    description:
      "A TypeScript API automation framework validating ReqRes flows across health checks, auth, pagination, negative tests, and CRUD-style operations.",
    stack: ["Playwright API", "TypeScript", "REST", "HTML Reports"],
    features: [
      "Reusable request layers",
      "Auth and negative scenarios",
      "Readable assertions",
      "Rich HTML reporting",
    ],
    githubUrl: "https://github.com/afeefahmedprof93-sy/playwright-api-automation-framework",
    accent: "from-teal-500 to-emerald-500",
    icon: "playwright",
  },
  {
    title: "Selenium UI Automation Framework",
    description:
      "A production-ready Selenium and TestNG framework for OrangeHRM with Page Object Model, parallel execution, Allure reports, and Log4j2 logging.",
    stack: ["Selenium", "Java", "TestNG", "Allure"],
    features: [
      "ThreadLocal WebDriver",
      "Parallel execution",
      "Allure reporting",
      "Clean POM structure",
    ],
    githubUrl: "https://github.com/afeefahmedprof93-sy/selenium-ui-automation-framework",
    accent: "from-violet-500 to-blue-500",
    icon: "selenium",
  },
  {
    title: "Appium TypeScript Mobile Automation Framework",
    description:
      "An Android automation framework built with Appium 2, WebdriverIO, TypeScript, Mocha, and Allure reporting against the WebdriverIO native demo app.",
    stack: ["Appium 2", "WebdriverIO", "TypeScript", "Mocha"],
    features: [
      "Android workflow coverage",
      "Allure report integration",
      "Demo app target",
      "Clone-and-run structure",
    ],
    githubUrl:
      "https://github.com/afeefahmedprof93-sy/appium-typescript-mobile-automation-framework",
    accent: "from-fuchsia-500 to-rose-500",
    icon: "appium",
  },
  {
    title: "k6 BlazeDemo Load Testing",
    description:
      "A modular k6 load testing framework for BlazeDemo showing data-driven tests, custom metrics, smoke/load/stress scenarios, and HTML reporting.",
    stack: ["k6", "JavaScript", "Performance", "HTML Reports"],
    features: [
      "Smoke, load, and stress tests",
      "Custom metrics",
      "Data-driven scripts",
      "Report generation",
    ],
    githubUrl: "https://github.com/afeefahmedprof93-sy/K6-blazedemo-load-testing",
    accent: "from-orange-500 to-teal-500",
    icon: "k6",
  },
];

function ProjectIcon({ type }: { type: Project["icon"] }) {
  if (type === "playwright") {
    return (
      <div className="relative h-8 w-9" aria-hidden="true">
        <span className="absolute left-0 top-2 h-5 w-6 rotate-[-12deg] rounded-b-full rounded-t-md bg-emerald-400 shadow-sm" />
        <span className="absolute right-0 top-1 h-5 w-6 rotate-[12deg] rounded-b-full rounded-t-md bg-rose-400 shadow-sm" />
        <span className="absolute left-1.5 top-3 h-1.5 w-1.5 rounded-full bg-slate-950" />
        <span className="absolute right-2 top-2.5 h-1.5 w-1.5 rounded-full bg-slate-950" />
        <span className="absolute left-4 top-5 h-1 w-3 rounded-full bg-slate-950/70" />
      </div>
    );
  }

  if (type === "selenium") {
    return (
      <div
        className="flex h-9 w-9 rotate-45 items-center justify-center rounded-lg bg-emerald-500 text-sm font-black text-slate-950"
        aria-hidden="true"
      >
        <span className="-rotate-45">Se</span>
      </div>
    );
  }

  if (type === "appium") {
    return (
      <div
        className="flex h-9 w-9 items-center justify-center rounded-full bg-fuchsia-500 text-lg font-black text-white"
        aria-hidden="true"
      >
        A
      </div>
    );
  }

  if (type === "harness") {
    return (
      <div className="relative flex h-9 w-9 items-center justify-center" aria-hidden="true">
        <span className="absolute inset-0 rounded-lg border border-sky-300/50 bg-slate-950" />
        <span className="absolute left-2 top-2 h-5 w-5 rounded-md border-2 border-sky-400" />
        <span className="absolute right-1.5 top-1.5 h-4 w-4 rounded-full border-2 border-violet-400" />
        <span className="relative mt-1 h-2 w-4 rotate-[-35deg] border-b-2 border-l-2 border-emerald-300" />
      </div>
    );
  }

  return (
    <div className="relative flex h-9 w-9 items-center justify-center" aria-hidden="true">
      <span className="absolute h-9 w-9 rotate-45 rounded-md bg-violet-600" />
      <span className="relative text-sm font-black text-white">k6</span>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="border-b border-white/10 bg-slate-950 py-20">
      <div className="section-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="section-kicker">Projects</p>
            <h2 className="section-title mt-3">
              Real QA frameworks from GitHub
            </h2>
          </div>
          <a
            href="https://github.com/afeefahmedprof93-sy?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex w-fit items-center justify-center rounded-md border border-brand/40 bg-brand/10 px-4 py-2.5 text-sm font-semibold text-violet-100 shadow-sm transition hover:-translate-y-0.5 hover:border-accent hover:text-cyan-100"
          >
            View all repositories
          </a>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-lg border border-white/10 bg-slate-900/70 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand/60 hover:shadow-lift"
            >
              <div className={`h-2 bg-gradient-to-r ${project.accent}`} />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-accent/25 bg-slate-950 text-accent">
                    <ProjectIcon type={project.icon} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
                <p className="mt-3 leading-7 text-slate-300">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-accent/20 bg-cyan-300/10 px-3 py-2 text-sm font-semibold text-cyan-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <ul className="mt-5 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 sm:mt-auto sm:pt-6">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex w-full items-center justify-center rounded-md border border-cyan-300/25 bg-gradient-to-r from-slate-800 via-slate-800 to-cyan-950 px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/50 hover:from-slate-700 hover:to-cyan-900 sm:w-auto"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
