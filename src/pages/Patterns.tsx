export default function Patterns() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 40px" }}>
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#FF7A00", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Patterns</div>
        <h1 style={{ fontSize: 40, fontWeight: 900, color: "var(--text)", marginBottom: 12 }}>Interaction Patterns</h1>
        <p style={{ fontSize: 16, color: "var(--text-muted)" }}>Standardised UX flows every RALD product must follow. Deviations require documented approval.</p>
      </div>

      {/* Login */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>Login Pattern</h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 24 }}>RALD Identity Hub handles all authentication. Products must never implement their own login form.</p>
        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:20 }}>
          <div style={{ background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:24 }}>
            <div style={{ fontSize:15,fontWeight:800,color:"var(--text)",marginBottom:20 }}>Sign in to RALD</div>
            <div style={{ display:"flex",flexDirection:"column",gap:12 }}>
              <input readOnly placeholder="Email or RALD ID" style={{ padding:"10px 14px",borderRadius:8,background:"var(--card)",border:"1px solid var(--border)",color:"var(--text)",fontSize:13,fontFamily:"var(--font-sans)",width:"100%" }} />
              <input readOnly type="password" defaultValue="••••••••" style={{ padding:"10px 14px",borderRadius:8,background:"var(--card)",border:"1px solid var(--border)",color:"var(--text)",fontSize:13,fontFamily:"var(--font-sans)",width:"100%" }} />
              <button style={{ padding:"11px",borderRadius:8,fontWeight:700,fontSize:14,background:"#00FF88",color:"#050A0F",border:"none",cursor:"pointer" }}>Continue</button>
              <div style={{ textAlign:"center",fontSize:12,color:"var(--text-muted)" }}>Don't have an account? <span style={{ color:"#00E5FF" }}>Join RALD</span></div>
            </div>
          </div>
          <div style={{ background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:24 }}>
            <div style={{ fontSize:13,fontWeight:700,color:"var(--text)",marginBottom:12 }}>Rules</div>
            {["OAuth 2.0 / PKCE — never store raw tokens","Session duration: 30 days rolling","Require 2FA for role=admin, role=artist","Lock after 5 failed attempts (15 min)","Show last login time on dashboard","Revoke all sessions on password change"].map(r => (
              <div key={r} style={{ display:"flex",gap:10,marginBottom:10,alignItems:"flex-start" }}>
                <span style={{ color:"#00FF88",fontWeight:900,fontSize:12,marginTop:1 }}>✓</span>
                <span style={{ fontSize:13,color:"var(--text-muted)" }}>{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>Verification Pattern</h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 24 }}>4-tier trust system. Each tier unlocks capabilities. Criteria are public and deterministic.</p>
        <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
          {[
            { tier:"T1 — Email Verified",color:"#6B7A8D",desc:"Basic account access",done:true },
            { tier:"T2 — Phone Verified",color:"#00FF88",desc:"Full messaging, payments",done:true },
            { tier:"T3 — ID Verified",color:"#FFD400",desc:"Artist/Label applications",done:false },
            { tier:"T4 — Professional",color:"#A855F7",desc:"Radio onboarding, enterprise",done:false },
          ].map(v => (
            <div key={v.tier} style={{ display:"flex",alignItems:"center",gap:16,padding:"14px 18px",background:v.done?`${v.color}10`:"var(--surface)",border:`1px solid ${v.done?v.color+"30":"var(--border)"}`,borderRadius:10 }}>
              <span style={{ fontSize:18 }}>{v.done?"✅":"○"}</span>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:13,fontWeight:700,color:v.done?v.color:"var(--text-muted)" }}>{v.tier}</div>
                <div style={{ fontSize:12,color:"var(--text-muted)" }}>{v.desc}</div>
              </div>
              {!v.done && <button style={{ padding:"6px 14px",borderRadius:8,fontSize:12,fontWeight:700,background:`${v.color}20`,color:v.color,border:`1px solid ${v.color}40`,cursor:"pointer" }}>Apply</button>}
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>Dashboard Pattern</h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 24 }}>Header → Stats → Primary content → Secondary actions. Consistent across all products.</p>
        <div style={{ background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:24 }}>
          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20 }}>
            <div>
              <div style={{ fontSize:20,fontWeight:900,color:"var(--text)" }}>Good morning, Adaeze 👋</div>
              <div style={{ fontSize:13,color:"var(--text-muted)" }}>3 new events since your last visit</div>
            </div>
            <button style={{ padding:"8px 16px",borderRadius:8,fontWeight:700,fontSize:13,background:"#00FF88",color:"#050A0F",border:"none",cursor:"pointer" }}>Quick action</button>
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12 }}>
            {[{ label:"Streams",value:"12.4K",color:"#00FF88" },{ label:"Revenue",value:"₦84K",color:"#FFD400" },{ label:"Listeners",value:"3.2K",color:"#00BFFF" },{ label:"Sessions",value:"7",color:"#A855F7" }].map(s => (
              <div key={s.label} style={{ background:"var(--card)",borderRadius:10,padding:"14px 16px",border:"1px solid var(--border)" }}>
                <div style={{ fontSize:22,fontWeight:900,color:s.color }}>{s.value}</div>
                <div style={{ fontSize:11,color:"var(--text-muted)",marginTop:2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connected Apps */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>Connected Apps Pattern</h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 24 }}>Users must always see permissions, last access, and have one-click revoke capability.</p>
        <div style={{ background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden" }}>
          {[
            { name:"Manilla",icon:"🎵",color:"#00FF88",perms:"Read profile, Stream content",connected:"Connected 2 days ago" },
            { name:"Loop",icon:"🔁",color:"#00FF88",perms:"Read profile, Post updates, Live rooms",connected:"Connected 14 days ago" },
            { name:"DunaRald",icon:"☁️",color:"#A855F7",perms:"Read/write files, Storage quota",connected:"Not connected" },
          ].map((app,i) => (
            <div key={app.name} style={{ display:"flex",alignItems:"center",gap:16,padding:"16px 20px",borderBottom:i<2?"1px solid var(--border)":"none" }}>
              <div style={{ width:40,height:40,borderRadius:10,flexShrink:0,background:`${app.color}15`,border:`1px solid ${app.color}30`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20 }}>{app.icon}</div>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:13,fontWeight:700,color:"var(--text)",marginBottom:2 }}>{app.name}</div>
                <div style={{ fontSize:11,color:"var(--text-muted)" }}>{app.perms}</div>
                <div style={{ fontSize:10,color:app.connected.includes("Not")?"var(--text-dim)":"#00FF8880",marginTop:2 }}>{app.connected}</div>
              </div>
              <button style={{ padding:"6px 14px",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer",background:app.connected.includes("Not")?"#00FF8820":"transparent",color:app.connected.includes("Not")?"#00FF88":"#FF2E2E",border:app.connected.includes("Not")?"1px solid #00FF8840":"1px solid #FF2E2E40" }}>{app.connected.includes("Not")?"Connect":"Revoke"}</button>
            </div>
          ))}
        </div>
      </section>

      {/* Settings */}
      <section>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>Settings Pattern</h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 24 }}>Grouped sections. Save per-section. Destructive actions always require confirmation dialog.</p>
        <div style={{ background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden" }}>
          <div style={{ display:"grid",gridTemplateColumns:"180px 1fr" }}>
            <div style={{ borderRight:"1px solid var(--border)",padding:"16px 0" }}>
              {["Profile","Security","Privacy","Notifications","Danger Zone"].map((s,i) => (
                <div key={s} style={{ padding:"10px 20px",fontSize:13,fontWeight:i===0?700:400,color:i===4?"#FF2E2E":i===0?"var(--text)":"var(--text-muted)",background:i===0?"#00FF8808":"transparent",borderLeft:i===0?"2px solid #00FF88":"2px solid transparent" }}>{s}</div>
              ))}
            </div>
            <div style={{ padding:24 }}>
              <div style={{ fontSize:16,fontWeight:800,color:"var(--text)",marginBottom:16 }}>Profile Settings</div>
              <div style={{ display:"flex",flexDirection:"column",gap:14 }}>
                {[["Display name","Adaeze Okonkwo"],["RALD ID","@adaeze"],["Bio","Music producer from Lagos"]].map(([l,v]) => (
                  <div key={l}>
                    <div style={{ fontSize:12,fontWeight:600,color:"var(--text-muted)",marginBottom:6 }}>{l}</div>
                    <input readOnly defaultValue={v} style={{ padding:"9px 12px",borderRadius:8,background:"var(--card)",border:"1px solid var(--border)",color:"var(--text)",fontSize:13,fontFamily:"var(--font-sans)",width:"100%" }} />
                  </div>
                ))}
                <div style={{ display:"flex",justifyContent:"flex-end" }}>
                  <button style={{ padding:"9px 20px",borderRadius:8,fontWeight:700,fontSize:13,background:"#00FF88",color:"#050A0F",border:"none",cursor:"pointer" }}>Save profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
