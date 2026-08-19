import Link from "next/link";

const tools = [
  { title: "AI Chat", text: "Ask questions, brainstorm ideas, and turn rough thoughts into clear results.", icon: "✦" },
  { title: "Image Studio", text: "Create polished visual concepts from simple descriptions.", icon: "◈" },
  { title: "Writing Lab", text: "Draft, rewrite, summarize, and improve content in seconds.", icon: "Aa" },
  { title: "Code Assistant", text: "Build, explain, and debug projects with an AI coding partner.", icon: "</>" }
];

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="nav">
        <div className="brand">
          <span className="brand-mark">✦</span>
          <span>AI Studio</span>
        </div>
        <div className="nav-links">
          <Link href="#tools">Tools</Link>
          <Link href="#about">About</Link>
          <a className="nav-button" href="#start">Get Started</a>
        </div>
      </nav>

      <section className="hero" id="start">
        <div className="eyebrow">YOUR CREATIVE AI WORKSPACE</div>
        <h1>Turn ideas into <span>something real.</span></h1>
        <p className="hero-copy">
          AI Studio brings powerful AI tools into one simple workspace — designed
          to help you think, create, write, and build faster.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#tools">Explore AI Studio <span>→</span></a>
          <a className="secondary-button" href="#about">See how it works</a>
        </div>
        <div className="hero-glow" />
      </section>

      <section className="stats">
        <div><strong>01</strong><span>One simple workspace</span></div>
        <div><strong>04</strong><span>Creative AI tools</span></div>
        <div><strong>∞</strong><span>Ideas to explore</span></div>
      </section>

      <section className="tools-section" id="tools">
        <div className="section-heading">
          <div>
            <div className="eyebrow">THE WORKSPACE</div>
            <h2>Everything you need to create.</h2>
          </div>
          <p>Start with an idea. AI Studio helps you take it from there.</p>
        </div>
        <div className="tool-grid">
          {tools.map((tool) => (
            <article className="tool-card" key={tool.title}>
              <div className="tool-icon">{tool.icon}</div>
              <h3>{tool.title}</h3>
              <p>{tool.text}</p>
              <a href="#start">Open tool <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-card">
          <div className="eyebrow">BUILT FOR YOU</div>
          <h2>Simple on the surface. Powerful underneath.</h2>
          <p>
            This first version gives AI Studio a professional foundation. We can
            connect the real AI features, accounts, data, and APIs after the
            website is live.
          </p>
          <a className="primary-button" href="#tools">Start exploring <span>→</span></a>
        </div>
      </section>

      <footer>
        <div className="brand"><span className="brand-mark">✦</span><span>AI Studio</span></div>
        <span>Built to turn ideas into reality.</span>
      </footer>
    </main>
  );
}
