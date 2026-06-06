import { useState } from "react";

export default function AudioUX() {
  const [pttHeld, setPttHeld] = useState(false);
  const [recording, setRecording] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(35);

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 40px" }}>
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#0066FF", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Audio UX</div>
        <h1 style={{ fontSize: 40, fontWeight: 900, color: "var(--text)", marginBottom: 12 }}>Audio UX Standards</h1>
        <p style={{ fontSize: 16, color: "var(--text-muted)", maxWidth: 540 }}>Standards for all audio interactions across Loop, Messenger, Voice, and future audio-first products.</p>
      </div>

      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>Push To Talk (PTT)</h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 24 }}>Hold-to-speak, release-to-send. Used in Messenger and Loop rooms.</p>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: 32, marginBottom: 16 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
            <button
              onMouseDown={() => setPttHeld(true)} onMouseUp={() => setPttHeld(false)} onMouseLeave={() => setPttHeld(false)}
              style={{ width: 96, height: 96, borderRadius: "50%", cursor: "pointer", border: "none", background: pttHeld ? "#FF4FAD" : "#FF4FAD15", outline: pttHeld ? "none" : "2px solid #FF4FAD40", outlineOffset: 4, boxShadow: pttHeld ? "0 0 0 8px #FF4FAD20,0 0 0 16px #FF4FAD10" : "none", transition: "all 120ms ease", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, color: pttHeld ? "#fff" : "#FF4FAD" }}>🎙</button>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: pttHeld ? "#FF4FAD" : "var(--text)", marginBottom: 4 }}>{pttHeld ? "● Recording…" : "Push To Talk"}</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{pttHeld ? "Release to send" : "Hold to speak"}</div>
            </div>
          </div>
        </div>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: 20 }}>
          {["Respond immediately on mousedown/touchstart — 0ms threshold", "Visual feedback within 16ms (one frame) of button press", "Max recording: 60s configurable per product", "Auto-send on release — no second tap required", "Keyboard shortcut: Space bar (configurable)", "Haptic on mobile: light on start, medium on auto-cutoff"].map(r => (
            <div key={r} style={{ display:"flex",gap:10,marginBottom:10,alignItems:"flex-start" }}>
              <span style={{ color:"#FF4FAD",fontWeight:900,fontSize:12,flexShrink:0 }}>◉</span>
              <span style={{ fontSize:13,color:"var(--text-muted)" }}>{r}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>Voice Recording</h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 24 }}>RALD Voice dataset contribution. Shows quality indicators and review status.</p>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <button onClick={() => setRecording(r => !r)} style={{ width: 56, height: 56, borderRadius: "50%", border: "none", background: recording ? "#FF2E2E" : "#00FF8820", boxShadow: recording ? "0 0 0 8px #FF2E2E15" : "none", transition: "all 160ms ease", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, color: recording ? "#fff" : "#00FF88" }}>{recording ? "⏹" : "⏺"}</button>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>{recording ? "Recording in progress…" : "Ready to record"}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 2, height: 28 }}>
                {Array.from({ length: 40 }).map((_, i) => (
                  <div key={i} style={{ width: 3, borderRadius: 2, height: recording ? "12px" : "4px", background: recording ? "#00FF88" : "var(--border)", flexShrink: 0 }} />
                ))}
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 22, fontWeight: 900, fontFamily: "var(--font-mono)", color: recording ? "#FF2E2E" : "var(--text-muted)" }}>{recording ? "0:12" : "0:00"}</div>
              <div style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 2 }}>/ 0:30 max</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>Audio Playback</h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 24 }}>Standard player for Manilla, Loop radio, and voice messages.</p>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: 24 }}>
          <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16 }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: "#00FF8815", border: "1px solid #00FF8830", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🎵</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>Lagos Afrobeats Vol. 3</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)" }}>Manilla Radio · High Fidelity</div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {["0.5×","1×","1.5×","2×"].map(s => <button key={s} style={{ padding:"4px 10px",borderRadius:6,fontSize:11,fontWeight:700,cursor:"pointer",background:s==="1×"?"#00FF8820":"var(--card)",color:s==="1×"?"#00FF88":"var(--text-muted)",border:s==="1×"?"1px solid #00FF8840":"1px solid var(--border)" }}>{s}</button>)}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-muted)", minWidth: 36 }}>1:23</span>
            <div onClick={e => { const r=e.currentTarget.getBoundingClientRect(); setProgress(Math.round(((e.clientX-r.left)/r.width)*100)); }} style={{ flex: 1, height: 6, background: "var(--card)", borderRadius: 3, cursor: "pointer", position: "relative" }}>
              <div style={{ width:`${progress}%`,height:"100%",background:"#00FF88",borderRadius:3 }} />
              <div style={{ position:"absolute",top:"50%",left:`${progress}%`,transform:"translate(-50%,-50%)",width:14,height:14,borderRadius:"50%",background:"#00FF88",border:"2px solid var(--bg)" }} />
            </div>
            <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-muted)", minWidth: 36 }}>3:47</span>
            <button onClick={() => setPlaying(p => !p)} style={{ width:40,height:40,borderRadius:"50%",background:"#00FF88",border:"none",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,cursor:"pointer",color:"#050A0F" }}>{playing?"⏸":"▶"}</button>
          </div>
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 20 }}>Universal Audio UX Rules</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {[
            { cat:"Performance", rules:["Audio starts within 300ms of play action","Buffer shown after 500ms of stalling","Never block UI thread during audio processing"] },
            { cat:"Controls", rules:["Always show position and total duration","Volume control required on all players","Keyboard: Space = play/pause"] },
            { cat:"Feedback", rules:["Visual level meter for recording","Speaking indicator updates within 80ms","Error state shows reason and retry"] },
            { cat:"Accessibility", rules:["All audio requires transcript or captions","Visual alternative for all audio cues","Mute state announced to screen reader"] },
          ].map(g => (
            <div key={g.cat} style={{ background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:20 }}>
              <div style={{ fontSize:13,fontWeight:800,color:"#0066FF",marginBottom:12 }}>{g.cat}</div>
              {g.rules.map(r => <div key={r} style={{ display:"flex",gap:8,marginBottom:8,alignItems:"flex-start" }}><span style={{ color:"#0066FF",fontSize:10,flexShrink:0,marginTop:2 }}>●</span><span style={{ fontSize:12,color:"var(--text-muted)",lineHeight:1.5 }}>{r}</span></div>)}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
