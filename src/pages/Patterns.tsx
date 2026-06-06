import { useState } from "react";

export default function Patterns() {
  const [secTab, setSecTab] = useState<"2fa" | "sessions" | "devices">("2fa");
  const [actFilter, setActFilter] = useState("all");
  const [savedToast, setSavedToast] = useState(false);

  const showSaved = () => { setSavedToast(true); setTimeout(() => setSavedToast(false), 2000); };

  const ACTIVITY = [
    { icon: "🔑", action: "Sign in", detail: "Lagos, Nigeria · Chrome on macOS", time: "2 min ago", status: "success" },
    { icon: "🔒", action: "Password changed", detail: "All sessions revoked", time: "3 days ago", status: "success" },
    { icon: "📱", action: "New device added", detail: "iPhone 15 Pro · iOS 17", time: "5 days ago", status: "success" },
    { icon: "⚠", action: "Failed sign-in", detail: "Abuja, Nigeria · Unknown device", time: "6 days ago", status: "warning" },
    { icon: "✓", action: "Phone verified", detail: "+234 •••• ••• 891", time: "12 days ago", status: "success" },
    { icon: "✕", action: "Revoked app access", detail: "GitRald — permissions removed", time: "14 days ago", status: "error" },
  ];

  const filtered = actFilter === "all" ? ACTIVITY : ACTIVITY.filter(a => a.status === actFilter);

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
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, padding: 24 }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: "var(--text)", marginBottom: 20 }}>Sign in to RALD</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <input readOnly placeholder="Email or RALD ID" style={{ padding: "10px 14px", borderRadius: 8, background: "var(--card)", border: "1px solid var(--border)", color: "var(--text)", fontSize: 13, fontFamily: "var(--font-sans)", width: "100%" }} />
              <input readOnly type="password" defaultValue="••••••••" style={{ padding: "10px 14px", borderRadius: 8, background: "var(--card)", border: "1px solid var(--border)", color: "var(--text)", fontSize: 13, fontFamily: "var(--font-sans)", width: "100%" }} />
              <button style={{ padding: "11px", borderRadius: 8, fontWeight: 700, fontSize: 14, background: "#00FF88", color: "#050A0F", border: "none", cursor: "pointer" }}>Continue</button>
              <div style={{ textAlign: "center", fontSize: 12, color: "var(--text-muted)" }}>Don't have an account? <span style={{ color: "#00E5FF" }}>Join RALD</span></div>
            </div>
          </div>
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, padding: 24 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 12 }}>Rules</div>
            {["OAuth 2.0 / PKCE — never store raw tokens", "Session duration: 30 days rolling", "Require 2FA for role=admin, role=artist", "Lock after 5 failed attempts (15 min)", "Show last login time on dashboard", "Revoke all sessions on password change"].map(r => (
              <div key={r} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
                <span style={{ color: "#00FF88", fontWeight: 900, fontSize: 12, marginTop: 1 }}>✓</span>
                <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>Verification Pattern</h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 24 }}>4-tier trust system. Each tier unlocks capabilities. Criteria are public and deterministic.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { tier: "T1 — Email Verified", color: "#6B7A8D", desc: "Basic account access", done: true },
            { tier: "T2 — Phone Verified", color: "#00FF88", desc: "Full messaging, payments", done: true },
            { tier: "T3 — ID Verified", color: "#FFD400", desc: "Artist/Label applications", done: false },
            { tier: "T4 — Professional", color: "#A855F7", desc: "Radio onboarding, enterprise", done: false },
          ].map(v => (
            <div key={v.tier} style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 18px", background: v.done ? `${v.color}10` : "var(--surface)", border: `1px solid ${v.done ? v.color + "30" : "var(--border)"}`, borderRadius: 10 }}>
              <span style={{ fontSize: 18 }}>{v.done ? "✅" : "○"}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: v.done ? v.color : "var(--text-muted)" }}>{v.tier}</div>
                <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{v.desc}</div>
              </div>
              {!v.done && <button style={{ padding: "6px 14px", borderRadius: 8, fontSize: 12, fontWeight: 700, background: `${v.color}20`, color: v.color, border: `1px solid ${v.color}40`, cursor: "pointer" }}>Apply</button>}
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>Dashboard Pattern</h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 24 }}>Header → Stats → Primary content → Secondary actions. Consistent across all products.</p>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, padding: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <div>
              <div style={{ fontSize: 20, fontWeight: 900, color: "var(--text)" }}>Good morning, Adaeze</div>
              <div style={{ fontSize: 13, color: "var(--text-muted)" }}>3 new events since your last visit</div>
            </div>
            <button style={{ padding: "8px 16px", borderRadius: 8, fontWeight: 700, fontSize: 13, background: "#00FF88", color: "#050A0F", border: "none", cursor: "pointer" }}>Quick action</button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
            {[{ label: "Streams", value: "12.4K", color: "#00FF88" }, { label: "Revenue", value: "₦84K", color: "#FFD400" }, { label: "Listeners", value: "3.2K", color: "#00BFFF" }, { label: "Sessions", value: "7", color: "#A855F7" }].map(s => (
              <div key={s.label} style={{ background: "var(--card)", borderRadius: 10, padding: "14px 16px", border: "1px solid var(--border)" }}>
                <div style={{ fontSize: 22, fontWeight: 900, color: s.color }}>{s.value}</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>Security Pattern</h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 24 }}>Two-factor auth, active sessions, and trusted devices — must appear in this structure in all products.</p>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden" }}>
          <div style={{ display: "flex", borderBottom: "1px solid var(--border)" }} role="tablist">
            {(["2fa", "sessions", "devices"] as const).map(t => (
              <button key={t} role="tab" aria-selected={secTab === t} onClick={() => setSecTab(t)} style={{ padding: "12px 20px", fontWeight: secTab === t ? 700 : 400, color: secTab === t ? "#FFD400" : "var(--text-muted)", borderBottom: secTab === t ? "2px solid #FFD400" : "2px solid transparent", background: "none", cursor: "pointer", textTransform: "uppercase", letterSpacing: "0.05em", fontSize: 11, marginBottom: -1 }}>
                {t === "2fa" ? "Two-Factor Auth" : t === "sessions" ? "Active Sessions" : "Trusted Devices"}
              </button>
            ))}
          </div>
          <div style={{ padding: 24 }}>
            {secTab === "2fa" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 16px", background: "#00FF8808", border: "1px solid #00FF8830", borderRadius: 10 }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>Authenticator App</div>
                    <div style={{ fontSize: 11, color: "#00FF88", marginTop: 2 }}>✓ Enabled — TOTP via Google Authenticator</div>
                  </div>
                  <button style={{ padding: "6px 14px", borderRadius: 8, fontSize: 12, fontWeight: 700, background: "transparent", color: "#FF2E2E", border: "1px solid #FF2E2E40", cursor: "pointer" }}>Disable</button>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 16px", background: "var(--card)", border: "1px solid var(--border)", borderRadius: 10 }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>SMS Backup</div>
                    <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>+234 •••• ••• 891 — fallback only</div>
                  </div>
                  <button style={{ padding: "6px 14px", borderRadius: 8, fontSize: 12, fontWeight: 700, background: "#00FF8820", color: "#00FF88", border: "1px solid #00FF8840", cursor: "pointer" }}>Manage</button>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 16px", background: "var(--card)", border: "1px solid var(--border)", borderRadius: 10 }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>Passkey (WebAuthn)</div>
                    <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>Not configured</div>
                  </div>
                  <button style={{ padding: "6px 14px", borderRadius: 8, fontSize: 12, fontWeight: 700, background: "#00E5FF20", color: "#00E5FF", border: "1px solid #00E5FF40", cursor: "pointer" }}>Set up</button>
                </div>
              </div>
            )}
            {secTab === "sessions" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { device: "MacBook Pro 16″", loc: "Lagos, Nigeria", browser: "Chrome 124", last: "Active now", current: true },
                  { device: "iPhone 15 Pro", loc: "Lagos, Nigeria", browser: "Safari on iOS 17", last: "2 hours ago", current: false },
                  { device: "Windows PC", loc: "Abuja, Nigeria", browser: "Edge 123", last: "5 days ago", current: false },
                ].map(s => (
                  <div key={s.device} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", background: s.current ? "#00FF8808" : "var(--card)", border: `1px solid ${s.current ? "#00FF8830" : "var(--border)"}`, borderRadius: 10 }}>
                    <div style={{ fontSize: 22, flexShrink: 0 }}>{s.device.includes("iPhone") ? "📱" : s.device.includes("Mac") ? "💻" : "🖥"}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>{s.device} {s.current && <span style={{ fontSize: 10, color: "#00FF88", fontWeight: 700, marginLeft: 6 }}>● CURRENT</span>}</div>
                      <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>{s.browser} · {s.loc} · {s.last}</div>
                    </div>
                    {!s.current && <button style={{ padding: "5px 12px", borderRadius: 7, fontSize: 11, fontWeight: 700, background: "transparent", color: "#FF2E2E", border: "1px solid #FF2E2E40", cursor: "pointer" }}>Revoke</button>}
                  </div>
                ))}
                <button style={{ marginTop: 6, padding: "10px", borderRadius: 8, fontWeight: 700, fontSize: 13, background: "#FF2E2E15", color: "#FF2E2E", border: "1px solid #FF2E2E30", cursor: "pointer" }}>Sign out all other sessions</button>
              </div>
            )}
            {secTab === "devices" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { name: "MacBook Pro 16″", trusted: true, added: "3 Jan 2026" },
                  { name: "iPhone 15 Pro", trusted: true, added: "12 Feb 2026" },
                  { name: "iPad Air M2", trusted: false, added: "Pending" },
                ].map(d => (
                  <div key={d.name} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", background: "var(--card)", border: "1px solid var(--border)", borderRadius: 10 }}>
                    <div style={{ fontSize: 22 }}>{d.name.includes("iPhone") ? "📱" : d.name.includes("iPad") ? "📱" : "💻"}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>{d.name}</div>
                      <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>Added {d.added}</div>
                    </div>
                    <span style={{ padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700, background: d.trusted ? "#00FF8818" : "#FFD40018", border: `1px solid ${d.trusted ? "#00FF8835" : "#FFD40035"}`, color: d.trusted ? "#00FF88" : "#FFD400" }}>{d.trusted ? "Trusted" : "Pending"}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Activity */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>Activity Pattern</h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 24 }}>Append-only audit trail. Visible to the account holder. Filterable by event type. Required on all RALD accounts.</p>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden" }}>
          <div style={{ padding: "14px 20px", borderBottom: "1px solid var(--border)", display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ fontSize: 12, color: "var(--text-muted)", marginRight: 4 }}>Filter:</span>
            {["all", "success", "warning", "error"].map(f => (
              <button key={f} onClick={() => setActFilter(f)} style={{ padding: "5px 12px", borderRadius: 20, fontSize: 11, fontWeight: 700, cursor: "pointer", background: actFilter === f ? "#00FF8820" : "var(--card)", color: actFilter === f ? "#00FF88" : "var(--text-muted)", border: actFilter === f ? "1px solid #00FF8840" : "1px solid var(--border)", textTransform: "capitalize" }}>{f}</button>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {filtered.map((a, i) => {
              const sc = a.status === "success" ? "#00FF88" : a.status === "warning" ? "#FFD400" : "#FF2E2E";
              return (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "14px 20px", borderBottom: i < filtered.length - 1 ? "1px solid var(--border)" : "none" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: `${sc}15`, border: `1px solid ${sc}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>{a.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>{a.action}</div>
                      <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{a.time}</div>
                    </div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{a.detail}</div>
                  </div>
                  <span style={{ fontSize: 10, fontWeight: 700, color: sc, flexShrink: 0 }}>{a.status}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Connected Apps */}
      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>Connected Apps Pattern</h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 24 }}>Users must always see permissions, last access, and have one-click revoke capability.</p>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden" }}>
          {[
            { name: "Manilla", icon: "🎵", color: "#00FF88", perms: "Read profile, Stream content", connected: "Connected 2 days ago" },
            { name: "Loop", icon: "🔁", color: "#00FF88", perms: "Read profile, Post updates, Live rooms", connected: "Connected 14 days ago" },
            { name: "DunaRald", icon: "☁️", color: "#A855F7", perms: "Read/write files, Storage quota", connected: "Not connected" },
          ].map((app, i) => (
            <div key={app.name} style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", borderBottom: i < 2 ? "1px solid var(--border)" : "none" }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, flexShrink: 0, background: `${app.color}15`, border: `1px solid ${app.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{app.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 2 }}>{app.name}</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{app.perms}</div>
                <div style={{ fontSize: 10, color: app.connected.includes("Not") ? "var(--text-dim)" : "#00FF8880", marginTop: 2 }}>{app.connected}</div>
              </div>
              <button style={{ padding: "6px 14px", borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: "pointer", background: app.connected.includes("Not") ? "#00FF8820" : "transparent", color: app.connected.includes("Not") ? "#00FF88" : "#FF2E2E", border: app.connected.includes("Not") ? "1px solid #00FF8840" : "1px solid #FF2E2E40" }}>
                {app.connected.includes("Not") ? "Connect" : "Revoke"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Settings */}
      <section>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>Settings Pattern</h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 24 }}>Grouped sections. Save per-section. Destructive actions always require confirmation dialog.</p>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "180px 1fr" }}>
            <div style={{ borderRight: "1px solid var(--border)", padding: "16px 0" }}>
              {["Profile", "Security", "Privacy", "Notifications", "Danger Zone"].map((s, i) => (
                <div key={s} style={{ padding: "10px 20px", fontSize: 13, fontWeight: i === 0 ? 700 : 400, color: i === 4 ? "#FF2E2E" : i === 0 ? "var(--text)" : "var(--text-muted)", background: i === 0 ? "#00FF8808" : "transparent", borderLeft: i === 0 ? "2px solid #00FF88" : "2px solid transparent" }}>{s}</div>
              ))}
            </div>
            <div style={{ padding: 24 }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: "var(--text)", marginBottom: 16 }}>Profile Settings</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[["Display name", "Adaeze Okonkwo"], ["RALD ID", "@adaeze"], ["Bio", "Music producer from Lagos"]].map(([l, v]) => (
                  <div key={l}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 6 }}>{l}</div>
                    <input readOnly defaultValue={v} style={{ padding: "9px 12px", borderRadius: 8, background: "var(--card)", border: "1px solid var(--border)", color: "var(--text)", fontSize: 13, fontFamily: "var(--font-sans)", width: "100%" }} />
                  </div>
                ))}
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <button onClick={showSaved} style={{ padding: "9px 20px", borderRadius: 8, fontWeight: 700, fontSize: 13, background: "#00FF88", color: "#050A0F", border: "none", cursor: "pointer" }}>Save profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {savedToast && (
          <output aria-live="polite" style={{ position: "fixed", bottom: 32, right: 32, zIndex: 400, background: "var(--overlay)", border: "1px solid var(--border-mid)", borderRadius: 12, padding: "14px 18px", boxShadow: "var(--shadow-lg)", display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ color: "#00FF88", fontSize: 18 }}>✓</span>
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>Profile updated.</div>
          </output>
        )}
      </section>
    </div>
  );
}
