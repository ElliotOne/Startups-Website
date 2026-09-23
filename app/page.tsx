const startups = [
  {
    name: "Codebase Map",
    href: "/codebase-map",
    status: "Public MVP",
    statusTone: "cyan",
    stage: "Code intelligence",
    logo: "/codebase-map-logo.svg",
    summary: "Map .NET repositories into architecture, API, risk, and onboarding notes.",
    metrics: [
      ["Scope", ".NET"],
      ["Model", "Scanner + AI"],
      ["Output", "Map"],
    ],
    readouts: ["Projects", "APIs", "Risks"],
  },
  {
    name: "Rebrain",
    href: "/rebrain",
    status: "Coming soon",
    statusTone: "green",
    comingSoon: true,
    stage: "Creator intelligence",
    logo: "/rebrain-mark.svg",
    summary: "Rank source-backed post ideas from public research signals.",
    metrics: [
      ["Scope", "Creators"],
      ["Model", "Research + AI"],
      ["Output", "Angles"],
    ],
    readouts: ["Ideas", "Sources", "Export"],
  },
];

const operatingSignals = [
  ["02", "Products"],
  ["MVP", "Stage"],
];

const systemPillars = [
  "Sovereign AI",
  "Controlled intelligence",
  "Governed deployment",
];

export default function Home() {
  return (
    <main className="startup-os">
      <section className="startup-frame" aria-label="XOREN startup portfolio">
        <aside className="strategy-rail">
          <a className="brand-lockup" href="https://xoren.co.uk/" aria-label="XOREN website">
            <span className="brand-mark" aria-hidden="true">
              <img src="/favicon.ico" alt="" />
            </span>
            <span>
              <strong>XOREN Startups</strong>
            </span>
          </a>

          <div className="rail-brief">
            <h1>Frontier AI products.</h1>
            <p>
              <span>Focused SaaS for modern industries that need clear, intelligent operating systems.</span>
            </p>
          </div>

          <div className="rail-metrics" aria-label="Portfolio signals">
            {operatingSignals.map(([value, label]) => (
              <div className="rail-metric" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="system-list" aria-label="Operating standards">
            {systemPillars.map((pillar) => (
              <span key={pillar}>{pillar}</span>
            ))}
          </div>
        </aside>

        <section className="portfolio-board">
          <header className="board-topbar">
            <div>
              <h2>Current builds</h2>
            </div>
            <div className="board-status" aria-label="Portfolio owner">
              <span />
              Live index
            </div>
          </header>

          <div className="launch-grid" aria-label="Startup directory">
            {startups.map((startup, index) => {
              const cardClassName = `startup-card startup-card-${startup.statusTone}${
                startup.comingSoon ? " startup-card-soon" : ""
              }`;
              const cardContent = (
                <>
                  <span className="card-index">{String(index + 1).padStart(2, "0")}</span>

                  <span className="product-head">
                    <span className="product-logo">
                      <img src={startup.logo} alt="" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="product-stage">{startup.stage}</span>
                      <strong>{startup.name}</strong>
                    </span>
                  </span>

                  <span className="product-copy">{startup.summary}</span>

                  <span className="metric-strip">
                    {startup.metrics.map(([label, value]) => (
                      <span className="metric-tile" key={label}>
                        <small>{label}</small>
                        <strong>{value}</strong>
                      </span>
                    ))}
                  </span>

                  <span className="readout-row">
                    {startup.readouts.map((readout) => (
                      <span key={readout}>{readout}</span>
                    ))}
                  </span>

                  <span className="card-footer">
                    <span className="status-pill">{startup.status}</span>
                    <span className="launch-link">{startup.comingSoon ? "Preview locked" : "Explore"}</span>
                  </span>

                  {startup.comingSoon ? (
                    <span className="coming-soon-overlay" aria-hidden="true">
                      <span>Coming soon</span>
                    </span>
                  ) : null}
                </>
              );

              return startup.comingSoon ? (
                <div className={cardClassName} key={startup.name} aria-label={`${startup.name} coming soon`}>
                  {cardContent}
                </div>
              ) : (
                <a className={cardClassName} href={startup.href} key={startup.name}>
                  {cardContent}
                </a>
              );
            })}
          </div>

          <section className="intelligence-panel" aria-label="Portfolio operating model">
            <div className="panel-header">
              <span className="eyebrow">Method</span>
              <h2>Built for frontier workflows.</h2>
            </div>

            <div className="model-grid">
              <div className="model-card">
                <span>01</span>
                <strong>Narrow wedge</strong>
                <p>Specific problem. Compounding product surface.</p>
              </div>
              <div className="model-card">
                <span>02</span>
                <strong>Live signal</strong>
                <p>Usage, feedback, and failure states shape the roadmap.</p>
              </div>
              <div className="model-card">
                <span>03</span>
                <strong>Controlled AI</strong>
                <p>Model output stays structured, visible, and actionable.</p>
              </div>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
