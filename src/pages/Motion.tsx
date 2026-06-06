export default function Motion() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 40px" }}>
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#FF4FAD", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Motion</div>
        <h1 style={{ fontSize: 40, fontWeight: 900, color: "var(--text)", marginBottom: 12 }}>Motion Principles</h1>
        <p style={{ fontSize: 16, color: "var(--text-muted)", maxWidth: 540 }}>Purposeful, fast, subtle. Motion confirms actions, indicates state, and provides spatial orientation. It never decorates.</p>
      </div>

      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 20 }}>Core Principles</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
          {[
            { title: "Purposeful", icon: "◎", desc: "Every animation must communicate meaning. If you can't articulate why it moves, remove it." },
            { title: "Instant feel", icon: "▷", desc: "UI transitions are 80–160ms. Users must feel the interface respond instantly." },
            { title: "Reduced motion", icon: "◈", desc: "All animations check prefers-reduced-motion. Never disable interactivity for users who request it." },
          ].map(p => (
            <div key={p.title} style={{ background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:24 }}>
              <div style={{ fontSize:24,marginBottom:12,color:"#FF4FAD" }}>{p.icon}</div>
              <div style={{ fontSize:14,fontWeight:700,color:"var(--text)",marginBottom:8 }}>{p.title}</div>
              <div style={{ fontSize:13,color:"var(--text-muted)",lineHeight:1.6 }}>{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 20 }}>Duration Scale</h2>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden" }}>
          {[
            { name: "Instant", value: "80ms", token: "--transition-fast", use: "Button hover, checkbox toggle, focus ring" },
            { name: "Base", value: "160ms", token: "--transition-base", use: "Default — colour, border, opacity transitions" },
            { name: "Slow", value: "320ms", token: "--transition-slow", use: "Panel slides, modal entrance, page transitions" },
          ].map((d, i) => (
            <div key={d.name} style={{ display:"grid",gridTemplateColumns:"120px 70px 200px 1fr",padding:"14px 20px",alignItems:"center",borderBottom:i<2?"1px solid var(--border)":"none" }}>
              <div style={{ fontSize:13,fontWeight:700,color:"var(--text)" }}>{d.name}</div>
              <div style={{ fontSize:13,fontFamily:"var(--font-mono)",color:"#FF4FAD" }}>{d.value}</div>
              <div style={{ fontSize:11,fontFamily:"var(--font-mono)",color:"var(--text-muted)" }}>{d.token}</div>
              <div style={{ fontSize:13,color:"var(--text-muted)" }}>{d.use}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 20 }}>Easing Functions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { name: "ease (default)", curve: "cubic-bezier(0.25, 0.1, 0.25, 1)", use: "Most transitions" },
            { name: "ease-out", curve: "cubic-bezier(0, 0, 0.2, 1)", use: "Elements entering — modal open, toast appear" },
            { name: "ease-in", curve: "cubic-bezier(0.4, 0, 1, 1)", use: "Elements leaving — modal close, toast dismiss" },
            { name: "ease-in-out", curve: "cubic-bezier(0.4, 0, 0.2, 1)", use: "Elements moving — tabs sliding, accordion" },
          ].map(e => (
            <div key={e.name} style={{ background:"var(--surface)",border:"1px solid var(--border)",borderRadius:10,padding:"16px 20px",display:"flex",gap:20,alignItems:"center" }}>
              <div style={{ minWidth:130 }}>
                <div style={{ fontSize:13,fontWeight:700,color:"var(--text)",marginBottom:4 }}>{e.name}</div>
                <code style={{ fontSize:11,fontFamily:"var(--font-mono)",color:"#FF4FAD" }}>{e.curve}</code>
              </div>
              <div style={{ fontSize:13,color:"var(--text-muted)" }}>{e.use}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 20 }}>What Not To Do</h2>
        <div style={{ background:"#FF2E2E10",border:"1px solid #FF2E2E30",borderRadius:14,padding:24 }}>
          {["Animations longer than 500ms for UI state changes", "Bounce or spring physics on data tables or forms", "Parallax effects that shift content position on scroll", "Spinning loaders that loop indefinitely without a timeout", "Different easing functions for the same component type across products", "Autoplay video or GIF loops as decorative elements"].map(r => (
            <div key={r} style={{ display:"flex",gap:12,alignItems:"flex-start",marginBottom:12 }}>
              <span style={{ color:"#FF2E2E",fontWeight:900,fontSize:14,flexShrink:0 }}>✕</span>
              <span style={{ fontSize:13,color:"var(--text-muted)",lineHeight:1.5 }}>{r}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
