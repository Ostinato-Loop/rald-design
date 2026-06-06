export default function Accessibility() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 40px" }}>
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#FFD400", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Accessibility</div>
        <h1 style={{ fontSize: 40, fontWeight: 900, color: "var(--text)", marginBottom: 12 }}>Accessibility Standards</h1>
        <p style={{ fontSize: 16, color: "var(--text-muted)", maxWidth: 520 }}>RALD targets WCAG 2.1 Level AA minimum. All components must pass before merge.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginBottom: 48 }}>
        {[{ label: "Standard", value: "WCAG 2.1 AA", color: "#00FF88" },
          { label: "Min contrast (text)", value: "4.5 : 1", color: "#FFD400" },
          { label: "Target pass rate", value: "100%", color: "#00E5FF" }].map(s => (
          <div key={s.label} style={{ background: "var(--surface)", border: `1px solid ${s.color}30`, borderRadius: 14, padding: "20px 22px" }}>
            <div style={{ fontSize: 24, fontWeight: 900, color: s.color, marginBottom: 4 }}>{s.value}</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{s.label}</div>
          </div>
        ))}
      </div>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 20 }}>Contrast Ratios</h2>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, padding: "0 20px" }}>
          {[
            { label: "Body text on --bg", ratio: "18.1:1", pass: true },
            { label: "Muted text on --bg", ratio: "5.6:1", pass: true },
            { label: "Loop green on --bg", ratio: "8.5:1", pass: true },
            { label: "Messenger orange on --bg", ratio: "5.2:1", pass: true },
            { label: "PayRald blue on --bg", ratio: "4.6:1", pass: true },
            { label: "GitRald red on --bg", ratio: "4.5:1", pass: true },
            { label: "Dim text on --bg (decorative only)", ratio: "2.8:1", pass: false },
            { label: "Body text on --surface", ratio: "17.4:1", pass: true },
          ].map((r, i) => (
            <div key={r.label} style={{ display: "flex", alignItems: "center", gap: 16, padding: "12px 0", borderBottom: i < 7 ? "1px solid var(--border)" : "none" }}>
              <span style={{ fontSize: 14 }}>{r.pass ? "✅" : "⚠️"}</span>
              <div style={{ flex: 1, fontSize: 13, color: "var(--text-muted)" }}>{r.label}</div>
              <div style={{ fontSize: 12, fontFamily: "var(--font-mono)", color: r.pass ? "#00FF88" : "#FFD400" }}>{r.ratio}</div>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: r.pass ? "#00FF8818" : "#FFD40018", color: r.pass ? "#00FF88" : "#FFD400", border: `1px solid ${r.pass ? "#00FF8835" : "#FFD40035"}` }}>{r.pass ? "PASS" : "WARN"}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 20 }}>Focus States</h2>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, padding: 24 }}>
          <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 20 }}>Global rule: <code style={{ fontFamily: "var(--font-mono)", color: "#00E5FF" }}>outline: 2px solid var(--identity); outline-offset: 2px</code> on all interactive elements.</p>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <button style={{ padding: "10px 20px", borderRadius: 8, background: "#00FF88", color: "#050A0F", border: "none", outline: "2px solid #00E5FF", outlineOffset: 2, fontWeight: 700, fontSize: 14 }}>Focused button</button>
            <input readOnly placeholder="Focused input" style={{ padding: "10px 14px", borderRadius: 8, background: "var(--card)", border: "1px solid var(--border)", color: "var(--text)", fontSize: 13, fontFamily: "var(--font-sans)", outline: "2px solid #00E5FF", outlineOffset: 2 }} />
          </div>
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 20 }}>Keyboard Navigation</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {[
            { key: "Tab", action: "Move forward through interactive elements" },
            { key: "Shift + Tab", action: "Move backward" },
            { key: "Enter / Space", action: "Activate buttons, links, checkboxes" },
            { key: "Escape", action: "Close modals, dropdowns, toasts" },
            { key: "Arrow keys", action: "Navigate menus, tabs, radio groups" },
            { key: "Home / End", action: "Jump to first/last item in list" },
          ].map(k => (
            <div key={k.key} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10, padding: "14px 18px", display: "flex", gap: 14, alignItems: "center" }}>
              <code style={{ fontFamily: "var(--font-mono)", fontSize: 11, background: "var(--card)", border: "1px solid var(--border)", borderRadius: 6, padding: "4px 8px", color: "#FFD400", whiteSpace: "nowrap", flexShrink: 0 }}>{k.key}</code>
              <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{k.action}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 20 }}>Pre-merge Checklist</h2>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, padding: 24 }}>
          {[
            "All interactive elements reachable by keyboard only",
            "Focus order is logical (matches visual order)",
            "No keyboard traps",
            "All form inputs have associated labels",
            "Error messages are programmatically associated with inputs",
            "Colour is not the only indicator of meaning",
            "No content relies solely on hover to be visible",
            "All images have descriptive alt text",
            "Text can be resized 200% without horizontal scroll",
            "No auto-playing audio or video without controls",
          ].map(item => (
            <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 12 }}>
              <span style={{ color: "#00FF88", fontSize: 14, fontWeight: 900, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{item}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
