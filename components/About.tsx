export function About() {
  return (
    <section id="about" className="border-b border-line bg-white py-20">
      <div className="section-shell">
        <div className="max-w-3xl rounded-lg border border-line bg-white p-6 shadow-soft sm:p-8">
          <p className="section-kicker">About</p>
          <h2 className="section-title mt-3">Quality-focused testing mindset</h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            My work spans email and SMS marketing, event ticketing,
            reservations, and POS applications across web, mobile, and desktop.
            I build testing coverage around product requirements and user flows,
            combining exploratory and regression testing with API validation
            and maintainable automation. I work with product and development
            teams to clarify incomplete requirements, investigate defects,
            and validate fixes before release. Clear test plans and reproducible
            evidence guide my approach to quality.
          </p>
        </div>
      </div>
    </section>
  );
}
