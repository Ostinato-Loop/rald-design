import { useState } from "react";

export default function AudioUX() {
  const [pttHeld, setPttHeld] = useState(false);
  const [recording, setRecording] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(35);
  const [muted, setMuted] = useState(false);
  const [handRaised, setHandRaised] = useState(false);

  const SPEAKERS = [
    { name: "Adaeze O.", role: "host", speaking: true, muted: false },
    { name: "Emeka N.", role: "speaker", speaking: false, muted: false },
    { name: "Fatima H.", role: "speaker", speaking: true, muted: false },
    { name: "Kwame A.", role: "speaker", speaking: false, muted: true },
  ];

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 40px" }}>
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#0066FF", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Audio UX</div>
        <h1 style={{ fontSize: 40, fontWeight: 900, color: "var(--text)", marginBottom: 12 }}>Audio UX Standards</h1>
        <p style={{ fontSize: 16, color: "var(--text-muted)", maxWidth: 540 }}>Standards for all audio interactions across Loop, Messenger, Voice, and future audio-first products.</p>
      </div>

      {/* Push To Talk */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>Push To Talk (PTT)</h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 24 }}>Hold-to-speak, release-to-send. Used in Messenger and Loop rooms.</p>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: 32, marginBottom: 16 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
            <button aria-label={pttHeld ? "Recording — release to send" : "Push to talk — hold to speak"}
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
            <div key={r} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
              <span style={{ color: "#FF4FAD", fontWeight: 900, fontSize: 12, flexShrink: 0 }}>◉</span>
              <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{r}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Voice Recording */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>Voice Recording</h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 24 }}>RALD Voice dataset contribution. Shows quality indicators and review status.</p>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <button aria-label={recording ? "Stop recording" : "Start recording"} onClick={() => setRecording(r => !r)} style={{ width: 56, height: 56, borderRadius: "50%", border: "none", background: recording ? "#FF2E2E" : "#00FF8820", boxShadow: recording ? "0 0 0 8px #FF2E2E15" : "none", transition: "all 160ms ease", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, color: recording ? "#fff" : "#00FF88" }}>{recording ? "⏹" : "⏺"}</button>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>{recording ? "Recording in progress…" : "Ready to record"}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 2, height: 28 }}>
                {Array.from({ length: 40 }).map((_, i) => (
                  <div key={i} style={{ width: 3, borderRadius: 2, height: recording ? `${8 + Math.sin(i * 0.8) * 8}px` : "4px", background: recording ? "#00FF88" : "var(--border)", flexShrink: 0, transition: "height 100ms ease" }} />
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

      {/* Audio Playback */}
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
              {["0.5×", "1×", "1.5×", "2×"].map(s => <button key={s} style={{ padding: "4px 10px", borderRadius: 6, fontSize: 11, fontWeight: 700, cursor: "pointer", background: s === "1×" ? "#00FF8820" : "var(--card)", color: s === "1×" ? "#00FF88" : "var(--text-muted)", border: s === "1×" ? "1px solid #00FF8840" : "1px solid var(--border)" }}>{s}</button>)}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-muted)", minWidth: 36 }}>1:23</span>
            <button type="button" onClick={e => { const r = e.currentTarget.getBoundingClientRect(); setProgress(Math.round(((e.clientX - r.left) / r.width) * 100)); }} onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { const r = e.currentTarget.getBoundingClientRect(); setProgress(Math.round((0.5) * 100)); } }} style={{ flex: 1, height: 6, background: "var(--card)", borderRadius: 3, cursor: "pointer", position: "relative", border: "none", padding: 0 }}>
              <div style={{ width: `${progress}%`, height: "100%", background: "#00FF88", borderRadius: 3 }} />
              <div style={{ position: "absolute", top: "50%", left: `${progress}%`, transform: "translate(-50%,-50%)", width: 14, height: 14, borderRadius: "50%", background: "#00FF88", border: "2px solid var(--bg)" }} />
            </button>
            
            <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-muted)", minWidth: 36 }}>3:47</span>
            <button aria-label={playing ? "Pause" : "Play"} onClick={() => setPlaying(p => !p)} style={{ width: 40, height: 40, borderRadius: "50%", background: "#00FF88", border: "none", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, cursor: "pointer", color: "#050A0F" }}>{playing ? "⏸" : "▶"}</button>
          </div>
        </div>
      </section>

      {/* Live Rooms */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>Live Audio Rooms</h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 24 }}>Speaker grid, raise-hand queue, and audience controls. Used in Loop Rooms. All state changes are reflected within 80ms.</p>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden" }}>
          {/* Room header */}
          <div style={{ padding: "16px 20px", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#FF2E2E15", border: "1px solid #FF2E2E30", borderRadius: 20, padding: "3px 10px", marginBottom: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF2E2E", display: "inline-block" }} />
                <span style={{ fontSize: 10, fontWeight: 700, color: "#FF2E2E", letterSpacing: "0.1em" }}>LIVE</span>
              </div>
              <div style={{ fontSize: 15, fontWeight: 800, color: "var(--text)" }}>Afrobeats & Tech: The Intersection</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>General · 847 listening</div>
            </div>
            <button style={{ padding: "8px 18px", borderRadius: 8, fontWeight: 700, fontSize: 13, background: "#FF2E2E15", color: "#FF2E2E", border: "1px solid #FF2E2E30", cursor: "pointer" }}>Leave</button>
          </div>

          {/* Speakers grid */}
          <div style={{ padding: 20 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>Speakers ({SPEAKERS.length})</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 24 }}>
              {SPEAKERS.map(sp => (
                <div key={sp.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <div style={{ position: "relative" }}>
                    <div style={{ width: 60, height: 60, borderRadius: "50%", background: sp.speaking ? "#00FF8820" : "var(--card)", border: `2px solid ${sp.speaking ? "#00FF88" : "var(--border)"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, boxShadow: sp.speaking ? "0 0 0 4px #00FF8820" : "none", transition: "all 160ms ease" }}>
                      {sp.name.split(" ")[0]?.[0] ?? "?"}
                    </div>
                    {sp.role === "host" && <div style={{ position: "absolute", bottom: -2, right: -2, background: "#00FF88", borderRadius: 10, padding: "1px 5px", fontSize: 9, fontWeight: 900, color: "#050A0F" }}>HOST</div>}
                    {sp.muted && <div style={{ position: "absolute", top: -2, right: -2, background: "#FF2E2E", borderRadius: "50%", width: 16, height: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9 }}>🔇</div>}
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "var(--text)", textAlign: "center" }}>{sp.name}</div>
                  {sp.speaking && !sp.muted && <div style={{ fontSize: 10, color: "#00FF88" }}>● speaking</div>}
                </div>
              ))}
            </div>

            {/* Audience controls */}
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: 20 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>Your controls (as audience)</div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button onClick={() => setMuted(m => !m)} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: "14px 20px", borderRadius: 12, border: `1px solid ${muted ? "#FF2E2E40" : "var(--border)"}`, background: muted ? "#FF2E2E15" : "var(--card)", cursor: "pointer" }}>
                  <span style={{ fontSize: 20 }}>{muted ? "🔇" : "🎤"}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: muted ? "#FF2E2E" : "var(--text-muted)" }}>{muted ? "Unmute" : "Mute"}</span>
                </button>
                <button onClick={() => setHandRaised(h => !h)} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: "14px 20px", borderRadius: 12, border: `1px solid ${handRaised ? "#FFD40040" : "var(--border)"}`, background: handRaised ? "#FFD40015" : "var(--card)", cursor: "pointer" }}>
                  <span style={{ fontSize: 20 }}>✋</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: handRaised ? "#FFD400" : "var(--text-muted)" }}>{handRaised ? "Lower hand" : "Raise hand"}</span>
                </button>
                <button style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: "14px 20px", borderRadius: 12, border: "1px solid var(--border)", background: "var(--card)", cursor: "pointer" }}>
                  <span style={{ fontSize: 20 }}>💬</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)" }}>React</span>
                </button>
                <button style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: "14px 20px", borderRadius: 12, border: "1px solid var(--border)", background: "var(--card)", cursor: "pointer" }}>
                  <span style={{ fontSize: 20 }}>🔗</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)" }}>Share</span>
                </button>
              </div>
            </div>

            {/* Rules */}
            <div style={{ marginTop: 20, background: "#0066FF10", border: "1px solid #0066FF30", borderRadius: 12, padding: 18 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#0066FF", marginBottom: 10 }}>Live Room rules</div>
              {["Maximum 25 speakers on stage at once", "Audience capacity: unlimited (WebSocket fallback for 10K+)", "Speaker state changes broadcast within 80ms", "AI moderation monitors for policy violations — no human review latency", "Raise hand queue: FIFO, shown to host only", "Room recording requires explicit in-room consent notice"].map(r => (
                <div key={r} style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "flex-start" }}>
                  <span style={{ color: "#0066FF", fontSize: 10, flexShrink: 0, marginTop: 2 }}>●</span>
                  <span style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.5 }}>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Universal Rules */}
      <section>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 20 }}>Universal Audio UX Rules</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {[
            { cat: "Performance", color: "#00FF88", rules: ["Audio starts within 300ms of play action", "Buffer shown after 500ms of stalling", "Never block UI thread during audio processing"] },
            { cat: "Controls", color: "#FFD400", rules: ["Always show position and total duration", "Volume control required on all players", "Keyboard: Space = play/pause, M = mute"] },
            { cat: "Feedback", color: "#FF4FAD", rules: ["Visual level meter for all recording states", "Speaking indicator updates within 80ms", "Error state shows reason and retry action"] },
            { cat: "Accessibility", color: "#00BFFF", rules: ["All audio requires transcript or captions", "Visual alternative for all audio cues", "Mute state announced to screen reader via aria-live"] },
          ].map(g => (
            <div key={g.cat} style={{ background: "var(--surface)", border: `1px solid ${g.color}25`, borderRadius: 12, padding: 20 }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: g.color, marginBottom: 12 }}>{g.cat}</div>
              {g.rules.map(r => <div key={r} style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "flex-start" }}><span style={{ color: g.color, fontSize: 10, flexShrink: 0, marginTop: 2 }}>●</span><span style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.5 }}>{r}</span></div>)}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
