import Image from "next/image";

const heroStats = [
  {
    label: "QA Fundamentals",
    value: "STLC, risk-based planning, test cases, bug reporting",
  },
  { label: "Automation", value: "Playwright, Selenium, Appium, POM" },
  {
    label: "API & Performance",
    value: "Postman, REST validation, SQL checks, k6 scenarios",
  },
  { label: "Delivery & Reports", value: "GitHub Actions, HTML, Allure" },
];

const qaSignals = [
  { metric: "QA since 2023", label: "Professional software testing experience" },
  { metric: "AI-driven QA", label: "Analysis, planning, defects, documentation" },
  { metric: "Release-ready", label: "Regression, reports, defect evidence" },
];

const technologyIcons = [
  { label: "Playwright", src: "/tech-icons-clean/playwright-clean.png" },
  { label: "Selenium", src: "/tech-icons-clean/selenium-clean.png" },
  { label: "TypeScript", src: "/tech-icons-clean/typescript-clean.png" },
  { label: "Java", src: "/tech-icons-clean/java-clean.png" },
  { label: "TestNG", src: "/tech-icons-clean/testng-clean.png" },
  { label: "GitHub Actions", src: "/tech-icons-clean/github-actions-clean.png" },
  { label: "k6", src: "/tech-icons-clean/k6-clean.png" },
  { label: "Allure", src: "/tech-icons-clean/allure-clean.png" },
  { label: "Postman", src: "/tech-icons-clean/postman-clean.png" },
  { label: "Git", src: "/tech-icons-clean/git-clean.png" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="overflow-hidden border-b border-white/10 bg-slate-950 text-white [background-image:linear-gradient(135deg,rgba(168,85,247,0.18),transparent_34%),linear-gradient(25deg,transparent_48%,rgba(34,211,238,0.14)_49%,transparent_72%)]"
    >
      <div className="section-shell py-5 sm:py-8 lg:py-14">
        <div className="soft-enter flex flex-col gap-3 border-b border-white/10 pb-4 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between sm:pb-6">
          <span className="inline-flex w-fit items-center rounded-full border border-brand/40 bg-brand/10 px-3 py-1.5 font-semibold text-violet-100 shadow-[0_0_28px_rgba(168,85,247,0.22)]">
            Available for QA automation opportunities
          </span>
          <span>Remote-ready • AI-driven QA • Automation • API quality</span>
        </div>
      </div>
      <div className="section-shell grid items-start gap-8 pb-16 pt-2 sm:pt-4 md:grid-cols-[1.08fr_0.92fr] md:gap-12 lg:pb-20 lg:pt-10">
        <div className="soft-enter order-2 md:order-1">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Software QA Engineer
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-normal text-white sm:text-6xl lg:text-7xl">
            Afeef Ahmed Jarif
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            I combine manual testing, automation, API and performance testing
            with AI-driven QA workflows to strengthen analysis, test coverage,
            defect investigation, and release confidence.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/Afeef_Ahmed_CV.pdf"
              download
              className="focus-ring inline-flex items-center justify-center rounded-md border border-cyan-300/25 bg-gradient-to-r from-slate-800 via-slate-800 to-cyan-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300/50 hover:from-slate-700 hover:to-cyan-900"
            >
              Download CV
            </a>
            <a
              href="https://github.com/afeefahmedprof93-sy"
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-accent hover:bg-white/10"
            >
              View GitHub
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-brand hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
            {qaSignals.map((item) => (
              <div
                key={item.metric}
                className="rounded-md border border-white/10 bg-slate-900/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-slate-900"
              >
                <span className="block text-2xl font-bold text-white">
                  {item.metric}
                </span>
                {item.label}
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/75 p-5 shadow-soft backdrop-blur">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  QA Delivery Stack
                </p>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                  Practical coverage from QA fundamentals and AI-assisted
                  planning to automation, backend validation, performance
                  checks, and release evidence.
                </p>
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {heroStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-md border border-white/10 bg-slate-950/60 p-4 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-slate-900"
                >
                  <p className="text-sm font-semibold text-white">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm text-slate-300">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="soft-enter-delay order-1 mx-auto w-full max-w-sm md:order-2 md:max-w-md">
          <div className="rounded-[2rem] border border-brand/30 bg-slate-900/70 p-4 shadow-lift backdrop-blur">
            <div className="overflow-hidden rounded-[1.5rem] border border-accent/20 bg-slate-900 shadow-[0_0_45px_rgba(34,211,238,0.14)]">
              <Image
                src="/images/afeef-ahmed-jarif-profile.jpeg"
                alt="Afeef Ahmed Jarif"
                width={720}
                height={720}
                priority
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
          <div className="mt-5 grid grid-cols-5 items-center justify-items-center gap-x-2 gap-y-4 rounded-2xl border border-white/10 bg-slate-950/80 p-4 shadow-soft backdrop-blur sm:gap-x-3">
            {technologyIcons.map((item) => (
              <div
                key={item.label}
                className="flex h-14 w-full items-center justify-center transition duration-300 hover:-translate-y-0.5 sm:h-16"
                title={item.label}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  width={140}
                  height={96}
                  className="max-h-14 max-w-full object-contain sm:max-h-16"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
