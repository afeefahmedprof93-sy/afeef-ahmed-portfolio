const contacts = [
  {
    label: "Email",
    value: "afeefahmedprof93@gmail.com",
    href: "mailto:afeefahmedprof93@gmail.com",
    icon: "email",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/afeef-ahmed-jarif",
    href: "https://www.linkedin.com/in/afeef-ahmed-jarif/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: "github.com/afeefahmedprof93-sy",
    href: "https://github.com/afeefahmedprof93-sy",
    icon: "github",
  },
];

function ContactIcon({ type }: { type: string }) {
  if (type === "email") {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.94 8.9H3.98V20h2.96V8.9ZM5.46 4a1.72 1.72 0 1 0 0 3.44A1.72 1.72 0 0 0 5.46 4Zm5.12 4.9H7.75V20h2.96v-5.82c0-1.53.29-3.02 2.19-3.02 1.88 0 1.9 1.76 1.9 3.12V20h2.96v-6.45c0-3.16-.68-5.59-4.37-5.59-1.77 0-2.96.97-3.45 1.9h-.04V8.9Z" />
      </svg>
    );
  }

  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.22c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.64-1.36-2.22-.26-4.55-1.14-4.55-5.04 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.04A9.3 9.3 0 0 1 12 6.98c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.04 2.74-1.04.55 1.4.2 2.44.1 2.7.64.71 1.03 1.62 1.03 2.73 0 3.92-2.34 4.78-4.57 5.03.36.32.68.94.68 1.9 0 1.36-.01 2.47-.01 2.8 0 .27.18.6.69.49A10.14 10.14 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" clipRule="evenodd" />
    </svg>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-slate-950 py-20">
      <div className="section-shell">
        <div className="rounded-lg border border-white/10 bg-slate-900/80 p-6 shadow-soft sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="section-kicker">Contact</p>
              <h2 className="section-title mt-3">Let&apos;s connect</h2>
              <p className="mt-5 leading-7 text-slate-300">
                I am open to QA, automation, and remote-friendly testing roles.
                Reach out for collaboration, project work, or hiring
                conversations.
              </p>
            </div>
            <div className="grid gap-4">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.label === "Email" ? undefined : "_blank"}
                  rel={contact.label === "Email" ? undefined : "noreferrer"}
                  className="focus-ring rounded-md border border-white/10 bg-slate-950/60 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-slate-900"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-accent/25 bg-cyan-300/10 text-accent">
                      <ContactIcon type={contact.icon} />
                    </span>
                    <span>
                      <span className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
                        {contact.label}
                      </span>
                      <span className="mt-1 block break-words text-base font-semibold text-white">
                        {contact.value}
                      </span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
