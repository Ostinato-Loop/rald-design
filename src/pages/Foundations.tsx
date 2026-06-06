import { useState } from "react";

const NEUTRALS = [
  { name: "Background", token: "--bg", hex: "#050A0F", usage: "Page background only" },
  { name: "Surface", token: "--surface", hex: "#080F17", usage: "Cards, sidebars" },
  { name: "Card", token: "--card", hex: "#0D1620", usage: "Nested card surfaces" },
  { name: "Overlay", token: "--overlay", hex: "#111D2A", usage: "Modals, dropdowns" },
  { name: "Text", token: "--text", hex: "#E8EDF3", usage: "Primary body text" },
  { name: "Muted", token: "--text-muted", hex: "#6B7A8D", usage: "Secondary text, labels" },
  { name: "Dim", token: "--text-dim", hex: "#3A4A5C", usage: "Disabled (decorative only)" },
  { name: "Border", token: "--border", hex: "#1A2535", usage: "Default borders" },
  { name: "Border Mid", token: "--border-mid", hex: "#243040", usage: "Focused/hover borders" },
];

const PRODUCTS = [
  { name: "Loop", token: "--loop", hex: "#00FF88", wcag: "8.5:1" },
  { name: "Messenger", token: "--messenger", hex: "#FF7A00", wcag: "5.2:1" },
  { name: "PayRald", token: "--payrald", hex: "#0066FF", wcag: "4.6:1" },
  { name: "Raldtics", token: "--raldtics", hex: "#FFD400", wcag: "10.1:1" },
  { name: "Dispatch", token: "--dispatch", hex: "#00BFFF", wcag: "6.3:1" },
  { name: "DunaRald", token: "--dunarald", hex: "#A855F7", wcag: "4.8:1" },
  { name: "GitRald", token: "--gitrald", hex: "#FF2E2E", wcag: "4.5:1" },
  { name: "Voice", token: "--voice", hex: "#FF4FAD", wcag: "5.1:1" },
  { name: "Identity", token: "--identity", hex: "#00E5FF", wcag: "7.2:1" },
];

function Swatch({ hex, name, token, usage, wcag }: { hex: string; name: string; token: string; usage: string; wcag?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button onClick={() => { void navigator.clipboard.writeText(hex); setCopied(true); setTimeout(() => setCopied(false), 1200); }}
      style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden", textAlign: "left", width: "100%", cursor: "pointer" }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = `${hex}50`)}
      onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}>
      <div style={{ height: 48, background: hex, position: "relative" }}>
        {copied && <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.5)", fontSize: 12, fontWeight: 700, color: "#fff" }}>Copied!</div>}
      </div>
      <div style={{ padding: "10px 12px" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text)", marginBottom: 1 }}>{name}</div>
        <div style={{ fontSize: 10, fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>{hex}</div>
        <div style={{ fontSize: 10, color: "#00FF8880", fontFamily: "var(--font-mono)" }}>{token}</div>
        <div style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 3 }}>{wcag ? `Contrast ${wcag}` : usage}</div>
      </div>
    </button>
  );
}

const SPACING = [1,2,3,4,5,6,8,10,12,16].map(n => ({ step: n, px: n*4 }));

export default function Foundations() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 40px" }}>
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#00E5FF", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Foundations</div>
        <h1 style={{ fontSize: 40, fontWeight: 900, color: "var(--text)", marginBottom: 12 }}>Design Foundations</h1>
        <p style={{ fontSize: 16, color: "var(--text-muted)", maxWidth: 520 }}>Primitive tokens that define every RALD product. All products must consume these tokens — never hardcode values.</p>
      </div>

      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>Color System</h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 20 }}>Dark-first. Click any swatch to copy the hex value.</p>
        <h3 style={{ fontSize: 12, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>Neutrals</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px,1fr))", gap: 10, marginBottom: 32 }}>
          {NEUTRALS.map(c => <Swatch key={c.token} {...c} />)}
        </div>
        <h3 style={{ fontSize: 12, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>Product Colors</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px,1fr))", gap: 10 }}>
          {PRODUCTS.map(p => <Swatch key={p.token} hex={p.hex} name={p.name} token={p.token} usage="" wcag={p.wcag} />)}
        </div>
      </section>

      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>Typography</h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 20 }}>Inter (sans) · JetBrains Mono (code). Never use system fonts for headings.</p>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden" }}>
          {[
            { name: "Display", size: 40, weight: 900, usage: "Hero headings" },
            { name: "H1", size: 32, weight: 900, usage: "Page titles" },
            { name: "H2", size: 24, weight: 800, usage: "Section headings" },
            { name: "H3", size: 20, weight: 700, usage: "Sub-sections" },
            { name: "Body", size: 15, weight: 400, usage: "Default body text" },
            { name: "Small", size: 13, weight: 400, usage: "Supporting copy" },
            { name: "Caption", size: 11, weight: 700, usage: "Labels, badges" },
            { name: "Mono", size: 13, weight: 400, usage: "Code, IDs" },
          ].map((t, i, arr) => (
            <div key={t.name} style={{ display: "grid", gridTemplateColumns: "100px 1fr 160px", padding: "12px 20px", alignItems: "center", borderBottom: i < arr.length-1 ? "1px solid var(--border)" : "none" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)" }}>{t.name}</div>
              <div style={{ fontSize: Math.min(t.size, 28), fontWeight: t.weight, fontFamily: t.name === "Mono" ? "var(--font-mono)" : "var(--font-sans)", color: "var(--text)" }}>Aa</div>
              <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{t.size}px / {t.weight} · {t.usage}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>Spacing Scale</h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 20 }}>4px base unit. Use only scale steps — never arbitrary pixel values.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {SPACING.map(s => (
            <div key={s.step} style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 90, fontSize: 10, fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>--space-{s.step}</div>
              <div style={{ width: 36, fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text)", textAlign: "right" }}>{s.px}px</div>
              <div style={{ height: 16, background: "#00FF8830", border: "1px solid #00FF8840", borderRadius: 3, width: s.px, flexShrink: 0 }} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 20 }}>Elevation</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {[
            { name: "sm", shadow: "0 1px 3px rgba(0,0,0,0.4)", desc: "Tags, badges" },
            { name: "md", shadow: "0 4px 16px rgba(0,0,0,0.5)", desc: "Cards, dropdowns" },
            { name: "lg", shadow: "0 8px 32px rgba(0,0,0,0.6)", desc: "Modals, panels" },
          ].map(e => (
            <div key={e.name} style={{ background: "var(--surface)", borderRadius: 14, padding: 24, boxShadow: e.shadow, border: "1px solid var(--border)" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>Shadow {e.name}</div>
              <div style={{ fontSize: 10, fontFamily: "var(--font-mono)", color: "#00FF88", marginBottom: 6 }}>--shadow-{e.name}</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{e.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
