const samples = [
  {
    title: "Bug Reporting",
    description:
      "Actionable defect reports with reproduction steps, environment details, severity, and supporting evidence.",
    href: "https://docs.google.com/document/d/1zmdz26uf2OlF1LM1_yZxvJtYncHc2-LVUkCczzqQ-60/edit?usp=sharing",
    preview: "bug",
  },
  {
    title: "Testing Checklist",
    description:
      "Practical QA checklist coverage for validating core flows, edge cases, UI behavior, and release readiness.",
    href: "https://docs.google.com/spreadsheets/d/1ZZBYdnko2s9M6G1PXvW5TxUDuN6QY7-O-yGaFEax-e4/edit?usp=sharing",
    preview: "checklist",
  },
  {
    title: "Automation Test Cases",
    description:
      "Structured automation-ready test cases with scenarios, steps, expected results, priorities, and traceability.",
    href: "https://docs.google.com/spreadsheets/d/15_qCup4MFMqaXHnTooMrmhoJLwci-CsvfAhrNjKyTfE/edit?usp=sharing",
    preview: "table",
  },
  {
    title: "Test Plan",
    description:
      "Concise test planning documentation covering scope, risks, strategy, schedule, and exit criteria.",
    href: "https://docs.google.com/document/d/1xhsvHK9gjpM5Pf-Mzx4yh84A0jOWb1Qo8OYeu7ZyilM/edit?usp=sharing",
    preview: "plan",
  },
];

function ScreenshotPreview({ type }: { type: string }) {
  if (type === "report") {
    return (
      <div className="grid h-full grid-cols-[0.8fr_1.2fr] gap-3 p-4">
        <div className="rounded-full border-[10px] border-cyan-400/70 border-r-brand/80" />
        <div className="space-y-2">
          <span className="block h-3 rounded bg-cyan-300/60" />
          <span className="block h-3 rounded bg-violet-300/50" />
          <span className="block h-3 rounded bg-slate-500/60" />
          <span className="block h-12 rounded bg-slate-800" />
        </div>
      </div>
    );
  }

  if (type === "bug") {
    return (
      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between">
          <span className="h-3 w-24 rounded bg-rose-400/70" />
          <span className="rounded bg-rose-500/20 px-2 py-1 text-[10px] font-bold text-rose-200">
            High
          </span>
        </div>
        <span className="block h-3 rounded bg-slate-600" />
        <span className="block h-3 w-4/5 rounded bg-slate-700" />
        <span className="block h-16 rounded border border-rose-400/20 bg-rose-500/10" />
      </div>
    );
  }

  if (type === "checklist") {
    return (
      <div className="space-y-3 p-4">
        {["Core flows", "Edge cases", "UI checks", "Release ready"].map(
          (item, index) => (
            <div key={item} className="flex items-center gap-3">
              <span
                className={`flex size-5 items-center justify-center rounded border text-[10px] font-black ${
                  index < 3
                    ? "border-emerald-300/40 bg-emerald-400/15 text-emerald-200"
                    : "border-cyan-300/30 bg-cyan-300/10 text-cyan-100"
                }`}
              >
                OK
              </span>
              <span className="h-3 flex-1 rounded bg-slate-700" />
              <span className="text-[10px] font-semibold text-slate-400">
                {item}
              </span>
            </div>
          ),
        )}
      </div>
    );
  }

  if (type === "plan") {
    return (
      <div className="grid h-full grid-cols-2 gap-3 p-4">
        {["Scope", "Risk", "Timeline", "Exit"].map((item) => (
          <div key={item} className="rounded-md border border-cyan-300/15 bg-slate-950/80 p-3">
            <span className="text-[10px] font-bold text-cyan-100">{item}</span>
            <span className="mt-3 block h-2 rounded bg-slate-600" />
            <span className="mt-2 block h-2 w-2/3 rounded bg-slate-700" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-4 gap-1 text-[10px] font-semibold text-slate-300">
        {["ID", "Scenario", "Steps", "Status"].map((item) => (
          <span key={item} className="rounded bg-cyan-300/15 px-2 py-1">
            {item}
          </span>
        ))}
      </div>
      <div className="mt-2 space-y-1">
        {[0, 1, 2, 3].map((item) => (
          <div key={item} className="grid grid-cols-4 gap-1">
            <span className="h-5 rounded bg-slate-800" />
            <span className="h-5 rounded bg-slate-700" />
            <span className="h-5 rounded bg-slate-800" />
            <span className="h-5 rounded bg-emerald-400/20" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function WorkSamples() {
  return (
    <section id="work-samples" className="border-b border-white/10 bg-slate-950 py-20">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="section-kicker">Work Samples</p>
          <h2 className="section-title mt-3">Documentation and QA evidence</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {samples.map((sample) => (
            <article
              key={sample.title}
              className="flex h-full flex-col rounded-lg border border-white/10 bg-slate-900/70 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-soft"
            >
              <div className="h-36 overflow-hidden rounded-t-lg border-b border-white/10 bg-slate-950">
                <ScreenshotPreview type={sample.preview} />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-white">{sample.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {sample.description}
                </p>
                <div className="mt-auto flex pt-6">
                  <a
                    href={sample.href}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex w-full items-center justify-center rounded-md border border-accent/25 bg-cyan-300/10 px-3 py-2 text-sm font-semibold text-accent transition hover:border-accent hover:bg-cyan-300/15"
                  >
                    Open link
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
