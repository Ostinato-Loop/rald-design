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

const SEMANTIC = [
  { name: "Success", token: "--success", hex: "#00FF88", usage: "Confirmed, completed" },
  { name: "Warning", token: "--warning", hex: "#FFD400", usage: "Caution, expiry" },
  { name: "Error", token: "--error", hex: "#FF2E2E", usage: "Failed, destructive" },
  { name: "Info", token: "--info", hex: "#00BFFF", usage: "Neutral information" },
];

function Swatch({ hex, name, token, usage, wcag }: { hex: string; name: string; token: string; usage: string; wcag?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button onClick={() => { void navigator.clipboard.writeText(hex); setCopied(true); setTimeout(() => setCopied(false), 1200); }}
      style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden", textAlign: "left", width: "100%", cursor: "pointer" }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = `${hex}50`; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; }}>
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

const SPACING = [1,2,3,4,5,6,8,10,12,16].map(n => ({ step: n, px: n * 4 }));

const BREAKPOINTS = [
  { name: "xs", value: "< 480px", cols: 4, gutter: "12px", usage: "Small phones" },
  { name: "sm", value: "480px+", cols: 4, gutter: "16px", usage: "Large phones" },
  { name: "md", value: "768px+", cols: 8, gutter: "20px", usage: "Tablets" },
  { name: "lg", value: "1024px+", cols: 12, gutter: "24px", usage: "Laptop, desktop" },
  { name: "xl", value: "1280px+", cols: 12, gutter: "24px", usage: "Wide desktop" },
  { name: "2xl", value: "1440px+", cols: 12, gutter: "32px", usage: "Ultra-wide" },
];

const DARK_TOKENS = [
  { token: "--bg", dark: "#050A0F", light: "#F4F6F9" },
  { token: "--surface", dark: "#080F17", light: "#FFFFFF" },
  { token: "--card", dark: "#0D1620", light: "#F0F3F7" },
  { token: "--text", dark: "#E8EDF3", light: "#0D1620" },
  { token: "--text-muted", dark: "#6B7A8D", light: "#5A6A7E" },
  { token: "--border", dark: "#1A2535", light: "#D0D8E4" },
];

export default function Foundations() {
  const [darkPreview, setDarkPreview] = useState(true);

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 40px" }}>
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#00E5FF", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Foundations</div>
        <h1 style={{ fontSize: 40, fontWeight: 900, color: "var(--text)", marginBottom: 12 }}>Design Foundations</h1>
        <p style={{ fontSize: 16, color: "var(--text-muted)", maxWidth: 520 }}>Primitive tokens that define every RALD product. All products must consume these tokens — never hardcode values.</p>
      </div>

      {/* Color System */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>Color System</h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 20 }}>Dark-first. Click any swatch to copy the hex value.</p>

        <h3 style={{ fontSize: 12, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>Neutrals</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px,1fr))", gap: 10, marginBottom: 32 }}>
          {NEUTRALS.map(c => <Swatch key={c.token} {...c} />)}
        </div>

        <h3 style={{ fontSize: 12, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>Product Colors</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px,1fr))", gap: 10, marginBottom: 32 }}>
          {PRODUCTS.map(p => <Swatch key={p.token} hex={p.hex} name={p.name} token={p.token} usage="" wcag={p.wcag} />)}
        </div>

        <h3 style={{ fontSize: 12, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>Semantic Colors</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px,1fr))", gap: 10 }}>
          {SEMANTIC.map(s => <Swatch key={s.token} hex={s.hex} name={s.name} token={s.token} usage={s.usage} />)}
        </div>
      </section>

      {/* Typography */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>Typography</h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 20 }}>Inter (sans) · JetBrains Mono (code). Never use system fonts for headings.</p>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden" }}>
          {[
            { name: "Display", size: 40, weight: 900, usage: "Hero headings only" },
            { name: "H1", size: 32, weight: 900, usage: "Page titles" },
            { name: "H2", size: 24, weight: 800, usage: "Section headings" },
            { name: "H3", size: 20, weight: 700, usage: "Sub-sections" },
            { name: "Body LG", size: 16, weight: 400, usage: "Intro paragraphs" },
            { name: "Body", size: 15, weight: 400, usage: "Default body text" },
            { name: "Small", size: 13, weight: 400, usage: "Supporting copy" },
            { name: "Caption", size: 11, weight: 700, usage: "Labels, badges, tabs" },
            { name: "Mono", size: 13, weight: 400, usage: "Code, IDs, tokens" },
          ].map((t, i, arr) => (
            <div key={t.name} style={{ display: "grid", gridTemplateColumns: "100px 1fr 200px", padding: "12px 20px", alignItems: "center", borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)" }}>{t.name}</div>
              <div style={{ fontSize: Math.min(t.size, 28), fontWeight: t.weight, fontFamily: t.name === "Mono" ? "var(--font-mono)" : "var(--font-sans)", color: "var(--text)" }}>Aa</div>
              <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{t.size}px / {t.weight} · {t.usage}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 16, padding: "14px 18px", background: "#FFD40010", border: "1px solid #FFD40030", borderRadius: 10 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#FFD400", marginBottom: 8 }}>Font loading rule</div>
          <code style={{ fontSize: 12, fontFamily: "var(--font-mono)", color: "var(--text-muted)", lineHeight: 1.8 }}>
            {`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');`}<br />
            {`@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');`}
          </code>
        </div>
      </section>

      {/* Spacing */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>Spacing Scale</h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 20 }}>4px base unit. Use only scale steps — never arbitrary pixel values.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {SPACING.map(s => (
            <div key={s.step} style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 90, fontSize: 10, fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>--space-{s.step}</div>
              <div style={{ width: 36, fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text)", textAlign: "right" }}>{s.px}px</div>
              <div style={{ height: 16, background: "#00FF8830", border: "1px solid #00FF8840", borderRadius: 3, width: Math.min(s.px * 4, 280), flexShrink: 0 }} />
            </div>
          ))}
        </div>
      </section>

      {/* Grid System */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>Grid System</h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 24 }}>12-column grid. Max content width 1280px. All layouts must respond across all 6 breakpoints.</p>

        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden", marginBottom: 24 }}>
          <div style={{ display: "grid", gridTemplateColumns: "80px 100px 60px 80px 1fr", padding: "10px 20px", borderBottom: "1px solid var(--border)", background: "var(--card)" }}>
            {["Name", "Breakpoint", "Cols", "Gutter", "Usage"].map(h => (
              <div key={h} style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{h}</div>
            ))}
          </div>
          {BREAKPOINTS.map((bp, i) => (
            <div key={bp.name} style={{ display: "grid", gridTemplateColumns: "80px 100px 60px 80px 1fr", padding: "12px 20px", alignItems: "center", borderBottom: i < BREAKPOINTS.length - 1 ? "1px solid var(--border)" : "none" }}>
              <code style={{ fontSize: 12, fontFamily: "var(--font-mono)", color: "#00E5FF", fontWeight: 700 }}>{bp.name}</code>
              <code style={{ fontSize: 12, fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>{bp.value}</code>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>{bp.cols}</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{bp.gutter}</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{bp.usage}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 4, marginBottom: 16 }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} style={{ height: 32, background: "#00E5FF18", border: "1px solid #00E5FF30", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 9, color: "#00E5FF", fontWeight: 700 }}>{i + 1}</span>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 12, color: "var(--text-muted)", textAlign: "center", marginBottom: 20 }}>12 columns · 24px gutter (desktop)</div>

        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: 20 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text)", marginBottom: 12 }}>Common layout patterns</div>
          {[
            { name: "Full bleed", cols: "12 / 12", use: "Hero sections, page background fills" },
            { name: "Content", cols: "8 / 12 (centered)", use: "Article body, form containers, docs" },
            { name: "Sidebar + Main", cols: "3 + 9", use: "Settings, dashboard panels" },
            { name: "Half / Half", cols: "6 + 6", use: "Feature comparisons, split screens" },
            { name: "Card grid", cols: "4 + 4 + 4", use: "Product cards, stat blocks" },
          ].map(p => (
            <div key={p.name} style={{ display: "grid", gridTemplateColumns: "140px 160px 1fr", padding: "8px 0", borderBottom: "1px solid var(--border)", alignItems: "center" }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>{p.name}</div>
              <code style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "#00E5FF" }}>{p.cols}</code>
              <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{p.use}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Elevation */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 20 }}>Elevation</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {[
            { name: "sm", shadow: "0 1px 3px rgba(0,0,0,0.4)", desc: "Tags, badges, inline chips" },
            { name: "md", shadow: "0 4px 16px rgba(0,0,0,0.5)", desc: "Cards, dropdowns, tooltips" },
            { name: "lg", shadow: "0 8px 32px rgba(0,0,0,0.6)", desc: "Modals, side panels, sheets" },
          ].map(e => (
            <div key={e.name} style={{ background: "var(--surface)", borderRadius: 14, padding: 24, boxShadow: e.shadow, border: "1px solid var(--border)" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>Shadow {e.name}</div>
              <div style={{ fontSize: 10, fontFamily: "var(--font-mono)", color: "#00FF88", marginBottom: 6 }}>--shadow-{e.name}</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{e.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Dark / Light Mode */}
      <section>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>Dark Mode & Light Mode</h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 24 }}>RALD is dark-first. Light mode is supported via a parallel token set applied on <code style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "#00E5FF" }}>html[data-theme="light"]</code>.</p>

        <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
          <button onClick={() => setDarkPreview(true)} style={{ padding: "8px 20px", borderRadius: 8, fontWeight: 700, fontSize: 13, border: "none", cursor: "pointer", background: darkPreview ? "#00E5FF" : "var(--surface)", color: darkPreview ? "#050A0F" : "var(--text-muted)" }}>Dark</button>
          <button onClick={() => setDarkPreview(false)} style={{ padding: "8px 20px", borderRadius: 8, fontWeight: 700, fontSize: 13, border: darkPreview ? "none" : "1px solid #00E5FF", cursor: "pointer", background: darkPreview ? "var(--surface)" : "#00E5FF", color: darkPreview ? "var(--text-muted)" : "#050A0F" }}>Light</button>
        </div>

        <div style={{ background: darkPreview ? "#050A0F" : "#F4F6F9", border: "1px solid var(--border)", borderRadius: 14, padding: 24, marginBottom: 20, transition: "background 200ms ease" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: darkPreview ? "#E8EDF3" : "#0D1620", marginBottom: 8 }}>Sample Surface</div>
          <div style={{ background: darkPreview ? "#080F17" : "#FFFFFF", border: `1px solid ${darkPreview ? "#1A2535" : "#D0D8E4"}`, borderRadius: 10, padding: "14px 16px" }}>
            <div style={{ fontSize: 12, color: darkPreview ? "#6B7A8D" : "#5A6A7E" }}>Supporting text in muted color</div>
            <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
              <button style={{ padding: "8px 18px", borderRadius: 8, fontWeight: 700, fontSize: 13, background: "#00FF88", color: "#050A0F", border: "none", cursor: "pointer" }}>Primary</button>
              <button style={{ padding: "8px 18px", borderRadius: 8, fontWeight: 600, fontSize: 13, background: darkPreview ? "#0D1620" : "#F0F3F7", color: darkPreview ? "#E8EDF3" : "#0D1620", border: `1px solid ${darkPreview ? "#1A2535" : "#D0D8E4"}`, cursor: "pointer" }}>Secondary</button>
            </div>
          </div>
        </div>

        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "160px 1fr 1fr", padding: "10px 20px", background: "var(--card)", borderBottom: "1px solid var(--border)" }}>
            {["Token", "Dark (#050A0F base)", "Light (#F4F6F9 base)"].map(h => (
              <div key={h} style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{h}</div>
            ))}
          </div>
          {DARK_TOKENS.map((t, i) => (
            <div key={t.token} style={{ display: "grid", gridTemplateColumns: "160px 1fr 1fr", padding: "10px 20px", borderBottom: i < DARK_TOKENS.length - 1 ? "1px solid var(--border)" : "none", alignItems: "center" }}>
              <code style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "#00E5FF" }}>{t.token}</code>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 20, height: 20, borderRadius: 4, background: t.dark, border: "1px solid var(--border-mid)" }} />
                <code style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>{t.dark}</code>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 20, height: 20, borderRadius: 4, background: t.light, border: "1px solid #D0D8E4" }} />
                <code style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>{t.light}</code>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 16, padding: "14px 18px", background: "#FF7A0010", border: "1px solid #FF7A0030", borderRadius: 10 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#FF7A00", marginBottom: 8 }}>Implementation rule</div>
          <div style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.7 }}>
            Default is dark mode. Apply <code style={{ fontFamily: "var(--font-mono)", color: "#FF7A00" }}>data-theme="light"</code> on <code style={{ fontFamily: "var(--font-mono)", color: "#FF7A00" }}>{"<html>"}</code> to activate light mode. Never detect OS preference without a user-accessible toggle — users must always be able to override.
          </div>
        </div>
      </section>
    </div>
  );
}
