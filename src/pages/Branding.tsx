export default function Branding() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 40px" }}>
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#A855F7", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Branding</div>
        <h1 style={{ fontSize: 40, fontWeight: 900, color: "var(--text)", marginBottom: 12 }}>Brand Standards</h1>
        <p style={{ fontSize: 16, color: "var(--text-muted)" }}>The RALD brand is the trust signal of the ecosystem. These rules are mandatory.</p>
      </div>

      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 20 }}>Wordmark</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
          <div style={{ background: "#050A0F", border: "1px solid var(--border)", borderRadius: 14, padding: 40, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ fontSize: 56, fontWeight: 900, letterSpacing: "-0.02em", color: "#E8EDF3" }}>RALD</div>
          </div>
          <div style={{ background: "#E8EDF3", border: "1px solid var(--border)", borderRadius: 14, padding: 40, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ fontSize: 56, fontWeight: 900, letterSpacing: "-0.02em", color: "#050A0F" }}>RALD</div>
          </div>
        </div>
        <div style={{ padding: 20, background: "#FF2E2E10", border: "1px solid #FF2E2E30", borderRadius: 12 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#FF2E2E", marginBottom: 10 }}>Never do:</div>
          {["Add effects (gradients, shadows, outlines) to the wordmark", "Use lowercase \"rald\"", "Change colour outside the two approved variants", "Stretch, squish, or rotate the wordmark", "Use non-approved typefaces in the same lockup"].map(r => (
            <div key={r} style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 8 }}>✕ {r}</div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 20 }}>Product Lockups</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
          {[{ name:"Manilla",color:"#00FF88",icon:"🎵" },{ name:"Loop",color:"#00FF88",icon:"🔁" },{ name:"Messenger",color:"#FF7A00",icon:"💬" },{ name:"Voice",color:"#FF4FAD",icon:"🎙" },{ name:"Mail",color:"#0066FF",icon:"✉️" },{ name:"DunaRald",color:"#A855F7",icon:"☁️" }].map(p => (
            <div key={p.name} style={{ background:"var(--surface)",border:`1px solid ${p.color}25`,borderRadius:12,padding:"18px 16px",display:"flex",alignItems:"center",gap:12 }}>
              <div style={{ width:36,height:36,borderRadius:9,background:`${p.color}15`,border:`1px solid ${p.color}30`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18 }}>{p.icon}</div>
              <div>
                <div style={{ fontSize:13,fontWeight:900,color:p.color }}>{p.name}</div>
                <div style={{ fontSize:10,color:"var(--text-muted)" }}>by RALD</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 20 }}>Typography Brand Rules</h2>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, padding: 24 }}>
          {["Inter is the only approved sans-serif for RALD products", "JetBrains Mono is the only approved monospace typeface", "Minimum body text: 14px for reading content, 11px for labels only", "Heading weight is always 800 or 900 for h1/h2", "Never use italics for interface text — only editorial/quote content", "African names must never be truncated with ellipsis in headings"].map(r => (
            <div key={r} style={{ display:"flex",gap:12,alignItems:"flex-start",marginBottom:14 }}>
              <span style={{ color:"#A855F7",fontSize:14,fontWeight:900,flexShrink:0 }}>◈</span>
              <span style={{ fontSize:13,color:"var(--text-muted)",lineHeight:1.5 }}>{r}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
