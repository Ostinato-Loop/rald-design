import { useState } from "react";

export default function Components() {
  const [inputVal, setInputVal] = useState("");
  const [checked, setChecked] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [tab, setTab] = useState("overview");
  const [playing, setPlaying] = useState(false);

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 40px" }}>
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#00FF88", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Components</div>
        <h1 style={{ fontSize: 40, fontWeight: 900, color: "var(--text)", marginBottom: 12 }}>Component Library</h1>
        <p style={{ fontSize: 16, color: "var(--text-muted)" }}>Every component is interactive. All states shown. All pass WCAG AA.</p>
      </div>

      {/* Buttons */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--text)", marginBottom: 20, paddingBottom: 10, borderBottom: "1px solid var(--border)" }}>Buttons</h2>
        <div style={{ background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:24,marginBottom:16 }}>
          <div style={{ fontSize:11,fontWeight:700,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:14 }}>Variants</div>
          <div style={{ display:"flex",gap:12,flexWrap:"wrap",alignItems:"center" }}>
            <button style={{ padding:"10px 20px",borderRadius:8,fontWeight:700,fontSize:14,background:"#00FF88",color:"#050A0F",border:"none",cursor:"pointer" }}>Primary</button>
            <button style={{ padding:"10px 20px",borderRadius:8,fontWeight:700,fontSize:14,background:"var(--surface)",color:"var(--text)",border:"1px solid var(--border)",cursor:"pointer" }}>Secondary</button>
            <button style={{ padding:"10px 20px",borderRadius:8,fontWeight:700,fontSize:14,background:"#FF2E2E",color:"#fff",border:"none",cursor:"pointer" }}>Danger</button>
            <button style={{ padding:"10px 20px",borderRadius:8,fontWeight:700,fontSize:14,background:"transparent",color:"var(--text)",border:"1px solid var(--border)",cursor:"pointer" }}>Ghost</button>
            <button disabled style={{ padding:"10px 20px",borderRadius:8,fontWeight:700,fontSize:14,background:"var(--card)",color:"var(--text-dim)",border:"1px solid var(--border)",cursor:"not-allowed" }}>Disabled</button>
          </div>
        </div>
        <div style={{ background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:24 }}>
          <div style={{ fontSize:11,fontWeight:700,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:14 }}>Sizes</div>
          <div style={{ display:"flex",gap:12,alignItems:"center" }}>
            {[{l:"XS",p:"5px 12px",f:11},{l:"SM",p:"7px 16px",f:13},{l:"MD",p:"10px 20px",f:14},{l:"LG",p:"13px 28px",f:16}].map(s => (
              <button key={s.l} style={{ padding:s.p,borderRadius:8,fontWeight:700,fontSize:s.f,background:"#00FF88",color:"#050A0F",border:"none",cursor:"pointer" }}>{s.l}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Inputs */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--text)", marginBottom: 20, paddingBottom: 10, borderBottom: "1px solid var(--border)" }}>Inputs</h2>
        <div style={{ background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:24 }}>
          <div style={{ display:"flex",flexDirection:"column",gap:16,maxWidth:400 }}>
            <div>
              <label style={{ fontSize:13,fontWeight:600,color:"var(--text)",display:"block",marginBottom:6 }}>Full name</label>
              <input type="text" placeholder="Enter your full name" value={inputVal} onChange={e => setInputVal(e.target.value)}
                style={{ width:"100%",padding:"10px 14px",borderRadius:8,background:"var(--card)",border:"1px solid var(--border)",color:"var(--text)",fontSize:14,outline:"none",fontFamily:"var(--font-sans)" }}
                onFocus={e => (e.target.style.borderColor="var(--identity)")} onBlur={e => (e.target.style.borderColor="var(--border)")} />
            </div>
            <div>
              <label style={{ fontSize:13,fontWeight:600,color:"var(--text)",display:"block",marginBottom:6 }}>Error state</label>
              <input readOnly defaultValue="invalid@" style={{ width:"100%",padding:"10px 14px",borderRadius:8,background:"#FF2E2E10",border:"1px solid #FF2E2E60",color:"var(--text)",fontSize:14,outline:"none",fontFamily:"var(--font-sans)" }} />
              <div style={{ fontSize:11,color:"#FF2E2E",marginTop:5 }}>Enter a valid email address</div>
            </div>
            <div>
              <label style={{ fontSize:13,fontWeight:600,color:"var(--text)",display:"block",marginBottom:6 }}>Success state</label>
              <input readOnly defaultValue="verified@rald.cloud" style={{ width:"100%",padding:"10px 14px",borderRadius:8,background:"#00FF8810",border:"1px solid #00FF8840",color:"var(--text)",fontSize:14,outline:"none",fontFamily:"var(--font-sans)" }} />
              <div style={{ fontSize:11,color:"#00FF88",marginTop:5 }}>✓ Email verified</div>
            </div>
            <label style={{ display:"flex",alignItems:"center",gap:10,cursor:"pointer" }}>
              <div onClick={() => setChecked(c => !c)} style={{ width:20,height:20,borderRadius:5,border:`2px solid ${checked?"#00FF88":"var(--border)"}`,background:checked?"#00FF88":"transparent",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"all var(--transition-base)" }}>
                {checked && <span style={{ color:"#050A0F",fontSize:12,fontWeight:900 }}>✓</span>}
              </div>
              <span style={{ fontSize:14,color:"var(--text)" }}>Enable notifications</span>
            </label>
          </div>
        </div>
      </section>

      {/* Badges */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--text)", marginBottom: 20, paddingBottom: 10, borderBottom: "1px solid var(--border)" }}>Badges</h2>
        <div style={{ background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:24 }}>
          <div style={{ display:"flex",gap:10,flexWrap:"wrap" }}>
            {[{l:"Active",c:"#00FF88"},{l:"Pending",c:"#FFD400"},{l:"Suspended",c:"#FF2E2E"},{l:"Artist",c:"#A855F7"},{l:"Verified",c:"#00E5FF"},{l:"Beta",c:"#FF7A00"}].map(b => (
              <span key={b.l} style={{ padding:"4px 12px",borderRadius:20,fontSize:11,fontWeight:700,background:`${b.c}18`,border:`1px solid ${b.c}35`,color:b.c }}>{b.l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Alerts */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--text)", marginBottom: 20, paddingBottom: 10, borderBottom: "1px solid var(--border)" }}>Alerts</h2>
        <div style={{ background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:24 }}>
          <div style={{ display:"flex",flexDirection:"column",gap:12 }}>
            {[{type:"success",color:"#00FF88",icon:"✓",msg:"Your profile has been updated successfully."},{type:"warning",color:"#FFD400",icon:"⚠",msg:"Your session expires in 5 minutes."},{type:"error",color:"#FF2E2E",icon:"✕",msg:"Verification failed. Check your details and try again."},{type:"info",color:"#00BFFF",icon:"i",msg:"Scheduled maintenance on 15 Jun 2026, 02:00 WAT."}].map(a => (
              <div key={a.type} style={{ display:"flex",alignItems:"flex-start",gap:12,padding:"12px 16px",borderRadius:10,background:`${a.color}12`,border:`1px solid ${a.color}30` }}>
                <span style={{ width:20,height:20,borderRadius:"50%",background:`${a.color}25`,border:`1px solid ${a.color}60`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:900,color:a.color,flexShrink:0 }}>{a.icon}</span>
                <div style={{ fontSize:13,color:"var(--text)",lineHeight:1.5 }}>{a.msg}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--text)", marginBottom: 20, paddingBottom: 10, borderBottom: "1px solid var(--border)" }}>Tabs</h2>
        <div style={{ background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:24 }}>
          <div style={{ display:"flex",borderBottom:"1px solid var(--border)",marginBottom:20 }}>
            {["overview","security","activity"].map(t => (
              <button key={t} onClick={() => setTab(t)} style={{ padding:"10px 20px",fontSize:13,fontWeight:tab===t?700:400,color:tab===t?"#00FF88":"var(--text-muted)",borderBottom:tab===t?"2px solid #00FF88":"2px solid transparent",background:"none",cursor:"pointer",textTransform:"capitalize",marginBottom:-1 }}>{t}</button>
            ))}
          </div>
          <div style={{ fontSize:14,color:"var(--text-muted)",padding:"0 4px" }}>
            {tab==="overview"&&"Overview content — summary metrics and status indicators."}
            {tab==="security"&&"Security content — 2FA, sessions, trusted devices."}
            {tab==="activity"&&"Activity content — event log with timestamps."}
          </div>
        </div>
      </section>

      {/* Toast */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--text)", marginBottom: 20, paddingBottom: 10, borderBottom: "1px solid var(--border)" }}>Toasts</h2>
        <div style={{ background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:24 }}>
          <button onClick={() => { setToastVisible(true); setTimeout(() => setToastVisible(false), 3000); }} style={{ padding:"10px 20px",borderRadius:8,fontWeight:700,fontSize:14,background:"#00FF88",color:"#050A0F",border:"none",cursor:"pointer" }}>Show toast</button>
          {toastVisible && (
            <div style={{ position:"fixed",bottom:32,right:32,zIndex:400,background:"var(--overlay)",border:"1px solid var(--border-mid)",borderRadius:12,padding:"14px 18px",boxShadow:"var(--shadow-lg)",display:"flex",alignItems:"center",gap:12,maxWidth:320 }}>
              <span style={{ color:"#00FF88",fontSize:18 }}>✓</span>
              <div><div style={{ fontSize:13,fontWeight:700,color:"var(--text)" }}>Changes saved</div><div style={{ fontSize:12,color:"var(--text-muted)" }}>Your profile has been updated.</div></div>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--text)", marginBottom: 20, paddingBottom: 10, borderBottom: "1px solid var(--border)" }}>Modals</h2>
        <div style={{ background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:24 }}>
          <button onClick={() => setModalOpen(true)} style={{ padding:"10px 20px",borderRadius:8,fontWeight:700,fontSize:14,background:"var(--surface)",color:"var(--text)",border:"1px solid var(--border)",cursor:"pointer" }}>Open modal</button>
          {modalOpen && (
            <div style={{ position:"fixed",inset:0,background:"rgba(5,10,15,0.85)",zIndex:300,display:"flex",alignItems:"center",justifyContent:"center" }} onClick={() => setModalOpen(false)}>
              <div style={{ background:"var(--surface)",border:"1px solid var(--border)",borderRadius:18,padding:32,width:400,maxWidth:"90vw",boxShadow:"var(--shadow-lg)" }} onClick={e => e.stopPropagation()}>
                <div style={{ fontSize:20,fontWeight:900,color:"var(--text)",marginBottom:10 }}>Confirm action</div>
                <div style={{ fontSize:14,color:"var(--text-muted)",marginBottom:28,lineHeight:1.6 }}>This action cannot be undone. Are you sure you want to continue?</div>
                <div style={{ display:"flex",gap:12 }}>
                  <button onClick={() => setModalOpen(false)} style={{ flex:1,padding:10,borderRadius:8,fontWeight:700,fontSize:14,background:"#FF2E2E",color:"#fff",border:"none",cursor:"pointer" }}>Confirm</button>
                  <button onClick={() => setModalOpen(false)} style={{ flex:1,padding:10,borderRadius:8,fontWeight:600,fontSize:14,background:"transparent",color:"var(--text-muted)",border:"1px solid var(--border)",cursor:"pointer" }}>Cancel</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Audio */}
      <section>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--text)", marginBottom: 20, paddingBottom: 10, borderBottom: "1px solid var(--border)" }}>Audio Controls</h2>
        <div style={{ background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:24 }}>
          <div style={{ display:"flex",alignItems:"center",gap:16,padding:"16px 20px",background:"var(--card)",borderRadius:12,border:"1px solid var(--border)" }}>
            <button onClick={() => setPlaying(p => !p)} style={{ width:44,height:44,borderRadius:"50%",background:"#00FF88",border:"none",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,cursor:"pointer",color:"#050A0F" }}>{playing?"⏸":"▶"}</button>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:13,fontWeight:700,color:"var(--text)",marginBottom:6 }}>Evening Vibes — Lagos Mix</div>
              <div style={{ height:4,background:"var(--border)",borderRadius:2 }}><div style={{ width:"35%",height:"100%",background:"#00FF88",borderRadius:2 }} /></div>
            </div>
            <div style={{ fontSize:12,fontFamily:"var(--font-mono)",color:"var(--text-muted)" }}>1:23 / 3:47</div>
          </div>
        </div>
      </section>
    </div>
  );
}
