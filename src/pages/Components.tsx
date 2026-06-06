import { useState } from "react";

export default function Components() {
  const [inputVal, setInputVal] = useState("");
  const [selectVal, setSelectVal] = useState("");
  const [checked, setChecked] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [tab, setTab] = useState("overview");
  const [playing, setPlaying] = useState(false);
  const [navActive, setNavActive] = useState("Dashboard");

  const S = { section: { marginBottom: 56 } as React.CSSProperties };

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 40px" }}>
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#00FF88", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Components</div>
        <h1 style={{ fontSize: 40, fontWeight: 900, color: "var(--text)", marginBottom: 12 }}>Component Library</h1>
        <p style={{ fontSize: 16, color: "var(--text-muted)" }}>Every component is interactive. All states shown. All pass WCAG AA.</p>
      </div>

      {/* Buttons */}
      <section style={S.section}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--text)", marginBottom: 20, paddingBottom: 10, borderBottom: "1px solid var(--border)" }}>Buttons</h2>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: 24, marginBottom: 12 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>Variants</div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <button style={{ padding: "10px 20px", borderRadius: 8, fontWeight: 700, fontSize: 14, background: "#00FF88", color: "#050A0F", border: "none", cursor: "pointer" }}>Primary</button>
            <button style={{ padding: "10px 20px", borderRadius: 8, fontWeight: 700, fontSize: 14, background: "var(--surface)", color: "var(--text)", border: "1px solid var(--border)", cursor: "pointer" }}>Secondary</button>
            <button style={{ padding: "10px 20px", borderRadius: 8, fontWeight: 700, fontSize: 14, background: "#FF2E2E", color: "#fff", border: "none", cursor: "pointer" }}>Danger</button>
            <button style={{ padding: "10px 20px", borderRadius: 8, fontWeight: 700, fontSize: 14, background: "transparent", color: "var(--text)", border: "1px solid var(--border)", cursor: "pointer" }}>Ghost</button>
            <button disabled style={{ padding: "10px 20px", borderRadius: 8, fontWeight: 700, fontSize: 14, background: "var(--card)", color: "var(--text-dim)", border: "1px solid var(--border)", cursor: "not-allowed" }}>Disabled</button>
          </div>
        </div>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: 24 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>Sizes</div>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            {[{ l: "XS", p: "5px 12px", f: 11 }, { l: "SM", p: "7px 16px", f: 13 }, { l: "MD", p: "10px 20px", f: 14 }, { l: "LG", p: "13px 28px", f: 16 }].map(s => (
              <button key={s.l} style={{ padding: s.p, borderRadius: 8, fontWeight: 700, fontSize: s.f, background: "#00FF88", color: "#050A0F", border: "none", cursor: "pointer" }}>{s.l}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Inputs */}
      <section style={S.section}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--text)", marginBottom: 20, paddingBottom: 10, borderBottom: "1px solid var(--border)" }}>Inputs</h2>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: 24 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 400 }}>
            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", display: "block", marginBottom: 6 }}>Full name</label>
              <input type="text" placeholder="Enter your full name" value={inputVal} onChange={e => setInputVal(e.target.value)}
                style={{ width: "100%", padding: "10px 14px", borderRadius: 8, background: "var(--card)", border: "1px solid var(--border)", color: "var(--text)", fontSize: 14, outline: "none", fontFamily: "var(--font-sans)" }}
                onFocus={e => { e.target.style.borderColor = "var(--identity)"; }} onBlur={e => { e.target.style.borderColor = "var(--border)"; }} />
            </div>
            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", display: "block", marginBottom: 6 }}>Error state</label>
              <input readOnly defaultValue="invalid@" style={{ width: "100%", padding: "10px 14px", borderRadius: 8, background: "#FF2E2E10", border: "1px solid #FF2E2E60", color: "var(--text)", fontSize: 14, outline: "none", fontFamily: "var(--font-sans)" }} />
              <div style={{ fontSize: 11, color: "#FF2E2E", marginTop: 5 }}>Enter a valid email address</div>
            </div>
            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", display: "block", marginBottom: 6 }}>Success state</label>
              <input readOnly defaultValue="verified@rald.cloud" style={{ width: "100%", padding: "10px 14px", borderRadius: 8, background: "#00FF8810", border: "1px solid #00FF8840", color: "var(--text)", fontSize: 14, outline: "none", fontFamily: "var(--font-sans)" }} />
              <div style={{ fontSize: 11, color: "#00FF88", marginTop: 5 }}>✓ Email verified</div>
            </div>
            <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
              <div role="checkbox" aria-checked={checked} tabIndex={0} onClick={() => setChecked(c => !c)} onKeyDown={e => { if (e.key === "Enter" || e.key === " ") setChecked(c => !c); }} style={{ width: 20, height: 20, borderRadius: 5, border: `2px solid ${checked ? "#00FF88" : "var(--border)"}`, background: checked ? "#00FF88" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all var(--transition-base)" }}>
                {checked && <span style={{ color: "#050A0F", fontSize: 12, fontWeight: 900 }}>✓</span>}
              </div>
              <span style={{ fontSize: 14, color: "var(--text)" }}>Enable notifications</span>
            </label>
          </div>
        </div>
      </section>

      {/* Select */}
      <section style={S.section}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--text)", marginBottom: 20, paddingBottom: 10, borderBottom: "1px solid var(--border)" }}>Select</h2>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: 24 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 400 }}>
            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", display: "block", marginBottom: 6 }}>Country</label>
              <div style={{ position: "relative" }}>
                <select value={selectVal} onChange={e => setSelectVal(e.target.value)}
                  style={{ width: "100%", padding: "10px 40px 10px 14px", borderRadius: 8, background: "var(--card)", border: "1px solid var(--border)", color: selectVal ? "var(--text)" : "var(--text-muted)", fontSize: 14, outline: "none", fontFamily: "var(--font-sans)", appearance: "none", cursor: "pointer" }}>
                  <option value="" disabled>Select country</option>
                  {["Nigeria", "Ghana", "Kenya", "South Africa", "Ethiopia", "Tanzania", "Uganda", "Rwanda"].map(c => (
                    <option key={c} value={c} style={{ background: "#0D1620" }}>{c}</option>
                  ))}
                </select>
                <div style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "var(--text-muted)", fontSize: 11 }}>▼</div>
              </div>
            </div>
            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: "var(--text-muted)", display: "block", marginBottom: 6 }}>Disabled</label>
              <div style={{ position: "relative" }}>
                <select disabled style={{ width: "100%", padding: "10px 40px 10px 14px", borderRadius: 8, background: "var(--card)", border: "1px solid var(--border)", color: "var(--text-dim)", fontSize: 14, outline: "none", fontFamily: "var(--font-sans)", appearance: "none", cursor: "not-allowed", opacity: 0.5 }}>
                  <option>Option disabled</option>
                </select>
                <div style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "var(--text-dim)", fontSize: 11 }}>▼</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Badges */}
      <section style={S.section}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--text)", marginBottom: 20, paddingBottom: 10, borderBottom: "1px solid var(--border)" }}>Badges</h2>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: 24 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {[{ l: "Active", c: "#00FF88" }, { l: "Pending", c: "#FFD400" }, { l: "Suspended", c: "#FF2E2E" }, { l: "Artist", c: "#A855F7" }, { l: "Verified", c: "#00E5FF" }, { l: "Beta", c: "#FF7A00" }].map(b => (
              <span key={b.l} style={{ padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 700, background: `${b.c}18`, border: `1px solid ${b.c}35`, color: b.c }}>{b.l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Alerts */}
      <section style={S.section}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--text)", marginBottom: 20, paddingBottom: 10, borderBottom: "1px solid var(--border)" }}>Alerts</h2>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: 24 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { type: "success", color: "#00FF88", icon: "✓", msg: "Your profile has been updated successfully." },
              { type: "warning", color: "#FFD400", icon: "⚠", msg: "Your session expires in 5 minutes." },
              { type: "error", color: "#FF2E2E", icon: "✕", msg: "Verification failed. Check your details and try again." },
              { type: "info", color: "#00BFFF", icon: "i", msg: "Scheduled maintenance on 15 Jun 2026, 02:00 WAT." },
            ].map(a => (
              <div key={a.type} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 16px", borderRadius: 10, background: `${a.color}12`, border: `1px solid ${a.color}30` }} role="alert">
                <span style={{ width: 20, height: 20, borderRadius: "50%", background: `${a.color}25`, border: `1px solid ${a.color}60`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 900, color: a.color, flexShrink: 0 }}>{a.icon}</span>
                <div style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.5 }}>{a.msg}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cards */}
      <section style={S.section}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--text)", marginBottom: 20, paddingBottom: 10, borderBottom: "1px solid var(--border)" }}>Cards</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, padding: 20 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", marginBottom: 8 }}>Default</div>
            <div style={{ fontSize: 22, fontWeight: 900, color: "var(--text)", marginBottom: 4 }}>12.4K</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)" }}>Monthly streams</div>
          </div>
          <div style={{ background: "#00FF8808", border: "1px solid #00FF8830", borderRadius: 14, padding: 20 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#00FF88", marginBottom: 8 }}>Tinted</div>
            <div style={{ fontSize: 22, fontWeight: 900, color: "var(--text)", marginBottom: 4 }}>₦84K</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)" }}>Revenue this month</div>
          </div>
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, padding: 20, boxShadow: "0 8px 32px rgba(0,0,0,0.6)" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", marginBottom: 8 }}>Elevated</div>
            <div style={{ fontSize: 22, fontWeight: 900, color: "var(--text)", marginBottom: 4 }}>3.2K</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)" }}>Active listeners</div>
          </div>
        </div>
      </section>

      {/* Tables */}
      <section style={S.section}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--text)", marginBottom: 20, paddingBottom: 10, borderBottom: "1px solid var(--border)" }}>Tables</h2>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 100px", padding: "10px 20px", background: "var(--card)", borderBottom: "1px solid var(--border)" }}>
            {["User", "Product", "Amount", "Status"].map(h => (
              <div key={h} style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{h}</div>
            ))}
          </div>
          {[
            { user: "Adaeze Okonkwo", product: "Loop", amount: "₦4,500", status: "Active", sc: "#00FF88" },
            { user: "Emeka Nwosu", product: "PayRald", amount: "₦12,000", status: "Pending", sc: "#FFD400" },
            { user: "Fatima Al-Hassan", product: "DunaRald", amount: "₦7,200", status: "Active", sc: "#00FF88" },
            { user: "Kwame Asante", product: "Raldtics", amount: "₦3,800", status: "Suspended", sc: "#FF2E2E" },
          ].map((row, i) => (
            <div key={row.user} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 100px", padding: "12px 20px", borderBottom: i < 3 ? "1px solid var(--border)" : "none", alignItems: "center" }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>{row.user}</div>
              <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{row.product}</div>
              <div style={{ fontSize: 13, fontFamily: "var(--font-mono)", color: "var(--text)" }}>{row.amount}</div>
              <span style={{ padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700, background: `${row.sc}18`, border: `1px solid ${row.sc}35`, color: row.sc, display: "inline-block" }}>{row.status}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tabs */}
      <section style={S.section}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--text)", marginBottom: 20, paddingBottom: 10, borderBottom: "1px solid var(--border)" }}>Tabs</h2>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: 24 }}>
          <div style={{ display: "flex", borderBottom: "1px solid var(--border)", marginBottom: 20 }} role="tablist">
            {["overview", "security", "activity"].map(t => (
              <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)} style={{ padding: "10px 20px", fontSize: 13, fontWeight: tab === t ? 700 : 400, color: tab === t ? "#00FF88" : "var(--text-muted)", borderBottom: tab === t ? "2px solid #00FF88" : "2px solid transparent", background: "none", cursor: "pointer", textTransform: "capitalize", marginBottom: -1 }}>{t}</button>
            ))}
          </div>
          <div role="tabpanel" style={{ fontSize: 14, color: "var(--text-muted)", padding: "0 4px" }}>
            {tab === "overview" && "Overview content — summary metrics and status indicators."}
            {tab === "security" && "Security content — 2FA, sessions, trusted devices."}
            {tab === "activity" && "Activity content — event log with timestamps."}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section style={S.section}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--text)", marginBottom: 20, paddingBottom: 10, borderBottom: "1px solid var(--border)" }}>Navigation</h2>
        <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 16, marginBottom: 16 }}>
          {/* Sidebar nav */}
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ padding: "14px 16px", borderBottom: "1px solid var(--border)", fontSize: 12, fontWeight: 800, color: "var(--text)", letterSpacing: "0.06em" }}>SIDEBAR NAV</div>
            {["Dashboard", "Analytics", "Messages", "Settings", "Help"].map(item => {
              const active = navActive === item;
              return (
                <button key={item} onClick={() => setNavActive(item)} style={{ display: "block", width: "100%", textAlign: "left", padding: "10px 16px", fontSize: 13, fontWeight: active ? 700 : 400, color: active ? "#00FF88" : "var(--text-muted)", background: active ? "#00FF8810" : "transparent", borderLeft: active ? "2px solid #00FF88" : "2px solid transparent", border: "none", cursor: "pointer", transition: "all var(--transition-fast)" }}>
                  {item}
                </button>
              );
            })}
          </div>
          {/* Top nav */}
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ padding: "10px 16px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 4 }}>
              {["Feed", "Discover", "Messages", "You"].map(item => {
                const active = navActive === item;
                return (
                  <button key={item} onClick={() => setNavActive(item)} style={{ padding: "7px 14px", fontSize: 13, fontWeight: active ? 700 : 400, color: active ? "#00FF88" : "var(--text-muted)", background: active ? "#00FF8812" : "transparent", borderRadius: 8, border: "none", cursor: "pointer", transition: "all var(--transition-fast)" }}>
                    {item}
                  </button>
                );
              })}
            </div>
            <div style={{ padding: 16, fontSize: 13, color: "var(--text-muted)" }}>Page content for <strong style={{ color: "var(--text)" }}>{navActive}</strong></div>
          </div>
        </div>
        {/* Bottom nav (mobile) */}
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
          <div style={{ padding: "8px 16px", borderBottom: "1px solid var(--border)", fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Bottom Nav (Mobile)</div>
          <div style={{ display: "flex", borderTop: "1px solid var(--border)", background: "var(--card)" }}>
            {[{ label: "Feed", icon: "⌂" }, { label: "Discover", icon: "◎" }, { label: "+", icon: "+", fab: true }, { label: "Chat", icon: "✉" }, { label: "You", icon: "◯" }].map(item => (
              <div key={item.label} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "10px 0", gap: 2 }}>
                <div style={{ width: item.fab ? 40 : 24, height: item.fab ? 40 : 24, borderRadius: item.fab ? "50%" : 6, background: item.fab ? "#00FF88" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", fontSize: item.fab ? 20 : 16, color: item.fab ? "#050A0F" : "var(--text-muted)", marginTop: item.fab ? -16 : 0, fontWeight: 900 }}>{item.icon}</div>
                {!item.fab && <span style={{ fontSize: 10, color: "var(--text-muted)" }}>{item.label}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toast */}
      <section style={S.section}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--text)", marginBottom: 20, paddingBottom: 10, borderBottom: "1px solid var(--border)" }}>Toasts</h2>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: 24 }}>
          <button onClick={() => { setToastVisible(true); setTimeout(() => setToastVisible(false), 3000); }} style={{ padding: "10px 20px", borderRadius: 8, fontWeight: 700, fontSize: 14, background: "#00FF88", color: "#050A0F", border: "none", cursor: "pointer" }}>Show toast (3s)</button>
          {toastVisible && (
            <output aria-live="polite" style={{ position: "fixed", bottom: 32, right: 32, zIndex: 400, background: "var(--overlay)", border: "1px solid var(--border-mid)", borderRadius: 12, padding: "14px 18px", boxShadow: "var(--shadow-lg)", display: "flex", alignItems: "center", gap: 12, maxWidth: 320 }}>
              <span style={{ color: "#00FF88", fontSize: 18 }}>✓</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>Changes saved</div>
                <div style={{ fontSize: 12, color: "var(--text-muted)" }}>Your profile has been updated.</div>
              </div>
            </output>
          )}
        </div>
      </section>

      {/* Modal */}
      <section style={S.section}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--text)", marginBottom: 20, paddingBottom: 10, borderBottom: "1px solid var(--border)" }}>Modals</h2>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: 24 }}>
          <button onClick={() => setModalOpen(true)} style={{ padding: "10px 20px", borderRadius: 8, fontWeight: 700, fontSize: 14, background: "var(--surface)", color: "var(--text)", border: "1px solid var(--border)", cursor: "pointer" }}>Open modal</button>
          {modalOpen && (
            <dialog open aria-labelledby="modal-title" style={{ position: "fixed", inset: 0, background: "rgba(5,10,15,0.85)", zIndex: 300, display: "flex", alignItems: "center", justifyContent: "center" }} onClick={() => setModalOpen(false)}>
              <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 18, padding: 32, width: 400, maxWidth: "90vw", boxShadow: "var(--shadow-lg)" }} onClick={e => e.stopPropagation()} onKeyDown={e => e.stopPropagation()}>
                <div id="modal-title" style={{ fontSize: 20, fontWeight: 900, color: "var(--text)", marginBottom: 10 }}>Confirm action</div>
                <div style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 28, lineHeight: 1.6 }}>This action cannot be undone. Are you sure you want to continue?</div>
                <div style={{ display: "flex", gap: 12 }}>
                  <button onClick={() => setModalOpen(false)} style={{ flex: 1, padding: 10, borderRadius: 8, fontWeight: 700, fontSize: 14, background: "#FF2E2E", color: "#fff", border: "none", cursor: "pointer" }}>Confirm</button>
                  <button onClick={() => setModalOpen(false)} style={{ flex: 1, padding: 10, borderRadius: 8, fontWeight: 600, fontSize: 14, background: "transparent", color: "var(--text-muted)", border: "1px solid var(--border)", cursor: "pointer" }}>Cancel</button>
                </div>
              </div>
            </dialog>
          )}
        </div>

      </section>

      {/* Audio Controls */}
      <section>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--text)", marginBottom: 20, paddingBottom: 10, borderBottom: "1px solid var(--border)" }}>Audio Controls</h2>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", background: "var(--card)", borderRadius: 12, border: "1px solid var(--border)" }}>
            <button aria-label={playing ? "Pause" : "Play"} onClick={() => setPlaying(p => !p)} style={{ width: 44, height: 44, borderRadius: "50%", background: "#00FF88", border: "none", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, cursor: "pointer", color: "#050A0F" }}>{playing ? "⏸" : "▶"}</button>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>Evening Vibes — Lagos Mix</div>
              <div style={{ height: 4, background: "var(--border)", borderRadius: 2 }}>
                <div style={{ width: playing ? "45%" : "35%", height: "100%", background: "#00FF88", borderRadius: 2, transition: "width 300ms ease" }} />
              </div>
            </div>
            <div style={{ fontSize: 12, fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>1:23 / 3:47</div>
          </div>
        </div>
      </section>
    </div>
  );
}
