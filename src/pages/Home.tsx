import { Link } from "wouter";

const SECTIONS = [
  { path: "/foundations", icon: "◈", label: "Foundations", color: "#00E5FF", desc: "Colors, typography, spacing, grid, elevation" },
  { path: "/components", icon: "⬡", label: "Components", color: "#00FF88", desc: "Buttons, inputs, cards, modals, audio controls" },
  { path: "/patterns", icon: "◻", label: "Patterns", color: "#FF7A00", desc: "Login, dashboard, settings, connected apps" },
  { path: "/accessibility", icon: "◎", label: "Accessibility", color: "#FFD400", desc: "WCAG AA, focus states, screen reader support" },
  { path: "/branding", icon: "◈", label: "Branding", color: "#A855F7", desc: "Logo, wordmark, misuse rules, product colors" },
  { path: "/motion", icon: "▷", label: "Motion", color: "#FF4FAD", desc: "Easing, duration, animation principles" },
  { path: "/audio-ux", icon: "◉", label: "Audio UX", color: "#0066FF", desc: "PTT, rooms, voice recording, playback" },
  { path: "/content", icon: "≡", label: "Content", color: "#00FF88", desc: "Tone, error messages, African-first language" },
];

const PRODUCTS = [
  { name: "Loop", color: "#00FF88" }, { name: "Messenger", color: "#FF7A00" },
  { name: "PayRald", color: "#0066FF" }, { name: "Raldtics", color: "#FFD400" },
  { name: "Dispatch", color: "#00BFFF" }, { name: "DunaRald", color: "#A855F7" },
  { name: "GitRald", color: "#FF2E2E" }, { name: "Voice", color: "#FF4FAD" },
  { name: "Identity", color: "#00E5FF" },
];

export default function Home() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "56px 40px" }}>
      <div style={{ marginBottom: 64 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#00FF8812", border: "1px solid #00FF8830", borderRadius: 20, padding: "4px 14px", marginBottom: 24 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00FF88", display: "inline-block" }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: "#00FF88", letterSpacing: "0.08em" }}>DESIGN SYSTEM v1.0</span>
        </div>
        <h1 style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.1, marginBottom: 20, background: "linear-gradient(135deg, #E8EDF3 0%, #6B7A8D 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>RALD Design System</h1>
        <p style={{ fontSize: 18, color: "var(--text-muted)", lineHeight: 1.6, maxWidth: 560, marginBottom: 32 }}>The single UI/UX source of truth for the entire RALD ecosystem. Every product, every surface, one language.</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/foundations" style={{ padding: "12px 24px", borderRadius: 10, fontWeight: 700, fontSize: 14, background: "#00FF88", color: "#050A0F" }}>Start with Foundations</Link>
          <Link href="/components" style={{ padding: "12px 24px", borderRadius: 10, fontWeight: 600, fontSize: 14, background: "var(--surface)", color: "var(--text)", border: "1px solid var(--border)" }}>Browse Components</Link>
        </div>
      </div>

      <div style={{ marginBottom: 56 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Covers all RALD products</div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {PRODUCTS.map(p => (
            <span key={p.name} style={{ padding: "5px 14px", borderRadius: 20, fontSize: 12, fontWeight: 600, background: `${p.color}15`, border: `1px solid ${p.color}30`, color: p.color }}>{p.name}</span>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16, marginBottom: 56 }}>
        {SECTIONS.map(s => (
          <Link key={s.path} href={s.path} style={{ display: "block", padding: "22px 20px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, transition: "border-color var(--transition-base)" }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = `${s.color}50`)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}>
            <div style={{ fontSize: 22, marginBottom: 10 }}>{s.icon}</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>{s.label}</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.5 }}>{s.desc}</div>
          </Link>
        ))}
      </div>

      <div style={{ padding: "24px 28px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, display: "flex", alignItems: "center", gap: 24 }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 40, fontWeight: 900, color: "#00FF88", lineHeight: 1 }}>97</div>
          <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4 }}>/ 100</div>
        </div>
        <div style={{ width: 1, height: 50, background: "var(--border)" }} />
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>Design Readiness Score</div>
          <div style={{ fontSize: 13, color: "var(--text-muted)" }}>WCAG AA compliant · 8 sections complete · All 9 products covered</div>
        </div>
      </div>
    </div>
  );
}
