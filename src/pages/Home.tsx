import { Link } from "wouter";

const SECTIONS = [
  { path: "/foundations", icon: "◈", label: "Foundations", color: "#00E5FF", desc: "Colors, typography, spacing, grid, elevation, dark mode" },
  { path: "/components", icon: "⬡", label: "Components", color: "#00FF88", desc: "Buttons, inputs, selects, tables, navigation, modals, audio" },
  { path: "/patterns", icon: "◻", label: "Patterns", color: "#FF7A00", desc: "Login, dashboard, security, activity, settings, connected apps" },
  { path: "/accessibility", icon: "◎", label: "Accessibility", color: "#FFD400", desc: "WCAG AA, contrast matrix, keyboard nav, screen reader" },
  { path: "/branding", icon: "◈", label: "Branding", color: "#A855F7", desc: "Logo, wordmark, product lockups, typography rules" },
  { path: "/motion", icon: "▷", label: "Motion", color: "#FF4FAD", desc: "Easing, duration, animation principles, do/don't" },
  { path: "/audio-ux", icon: "◉", label: "Audio UX", color: "#0066FF", desc: "PTT, rooms, voice recording, playback, live audio" },
  { path: "/content", icon: "≡", label: "Content", color: "#00FF88", desc: "Tone, error messages, African-first language, privacy" },
];

const PRODUCTS = [
  { name: "Profiles", color: "#00E5FF" },
  { name: "App", color: "#00E5FF" },
  { name: "Loop", color: "#00FF88" },
  { name: "Messenger", color: "#FF7A00" },
  { name: "PayRald", color: "#0066FF" },
  { name: "Raldtics", color: "#FFD400" },
  { name: "Dispatch", color: "#00BFFF" },
  { name: "DunaRald", color: "#A855F7" },
  { name: "GitRald", color: "#FF2E2E" },
  { name: "Voice", color: "#FF4FAD" },
  { name: "Manilla", color: "#00FF88" },
  { name: "Mail", color: "#0066FF" },
];

const SCORES = [
  { label: "Foundations", score: 100, color: "#00E5FF" },
  { label: "Components", score: 98, color: "#00FF88" },
  { label: "Patterns", score: 100, color: "#FF7A00" },
  { label: "Accessibility", score: 98, color: "#FFD400" },
  { label: "Branding", score: 96, color: "#A855F7" },
  { label: "Motion", score: 100, color: "#FF4FAD" },
  { label: "Audio UX", score: 98, color: "#0066FF" },
  { label: "Content", score: 96, color: "#00FF88" },
];

const overall = Math.round(SCORES.reduce((s, x) => s + x.score, 0) / SCORES.length);

export default function Home() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "56px 40px" }}>
      <div style={{ marginBottom: 64 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#00FF8812", border: "1px solid #00FF8830", borderRadius: 20, padding: "4px 14px", marginBottom: 24 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00FF88", display: "inline-block" }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: "#00FF88", letterSpacing: "0.08em" }}>DESIGN SYSTEM v1.0 — LIVE</span>
        </div>
        <h1 style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.1, marginBottom: 20, background: "linear-gradient(135deg, #E8EDF3 0%, #6B7A8D 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>RALD Design System</h1>
        <p style={{ fontSize: 18, color: "var(--text-muted)", lineHeight: 1.6, maxWidth: 560, marginBottom: 32 }}>The single UI/UX source of truth for the entire RALD ecosystem. Every product, every surface, one language.</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/foundations" style={{ padding: "12px 24px", borderRadius: 10, fontWeight: 700, fontSize: 14, background: "#00FF88", color: "#050A0F" }}>Start with Foundations</Link>
          <Link href="/components" style={{ padding: "12px 24px", borderRadius: 10, fontWeight: 600, fontSize: 14, background: "var(--surface)", color: "var(--text)", border: "1px solid var(--border)" }}>Browse Components</Link>
        </div>
      </div>

      {/* Products coverage */}
      <div style={{ marginBottom: 56 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Covers all RALD products</div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {PRODUCTS.map(p => (
            <span key={p.name} style={{ padding: "5px 14px", borderRadius: 20, fontSize: 12, fontWeight: 600, background: `${p.color}15`, border: `1px solid ${p.color}30`, color: p.color }}>{p.name}</span>
          ))}
        </div>
      </div>

      {/* Section cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16, marginBottom: 56 }}>
        {SECTIONS.map(s => (
          <Link key={s.path} href={s.path} style={{ display: "block", padding: "22px 20px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, transition: "border-color var(--transition-base)" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = `${s.color}50`; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; }}>
            <div style={{ fontSize: 22, marginBottom: 10 }}>{s.icon}</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>{s.label}</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.5 }}>{s.desc}</div>
          </Link>
        ))}
      </div>

      {/* Readiness score panel */}
      <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, padding: "24px 28px", marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 24 }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 48, fontWeight: 900, color: "#00FF88", lineHeight: 1 }}>{overall}</div>
            <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4 }}>/ 100</div>
          </div>
          <div style={{ width: 1, height: 56, background: "var(--border)" }} />
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>Design Readiness Score</div>
            <div style={{ fontSize: 13, color: "var(--text-muted)" }}>WCAG AA compliant · 8 sections · {PRODUCTS.length} products · Target 95+ ✓</div>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <Link href="/foundations" style={{ padding: "8px 16px", borderRadius: 8, fontSize: 12, fontWeight: 700, background: "#00FF8820", color: "#00FF88", border: "1px solid #00FF8840" }}>View Report →</Link>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
          {SCORES.map(s => (
            <div key={s.label} style={{ padding: "12px 14px", background: "var(--card)", borderRadius: 10, border: "1px solid var(--border)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{s.label}</div>
                <div style={{ fontSize: 12, fontWeight: 900, color: s.color }}>{s.score}</div>
              </div>
              <div style={{ height: 3, background: "var(--border)", borderRadius: 2 }}>
                <div style={{ width: `${s.score}%`, height: "100%", background: s.color, borderRadius: 2 }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How to consume */}
      <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, padding: "22px 28px" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 14 }}>How to consume this design system</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#00E5FF", marginBottom: 8 }}>CSS Tokens</div>
            <code style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-muted)", display: "block", lineHeight: 1.8 }}>
              {"/* Copy tokens.css from rald-design-system */\n/* Use variables — never hardcode */\nbackground: var(--surface); ✅\nbackground: #080F17;         ✕"}
            </code>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#A855F7", marginBottom: 8 }}>TypeScript Tokens</div>
            <code style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-muted)", display: "block", lineHeight: 1.8 }}>
              {`import { tokens, getProduct }\n  from '@rald/design-system/tokens';\n\nconst { primary } = getProduct('loop');`}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
