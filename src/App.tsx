import { useState } from "react";
import { Route, Switch, Link, useLocation } from "wouter";
import Foundations from "./pages/Foundations";
import Components from "./pages/Components";
import Patterns from "./pages/Patterns";
import Accessibility from "./pages/Accessibility";
import Branding from "./pages/Branding";
import Motion from "./pages/Motion";
import AudioUX from "./pages/AudioUX";
import ContentGuidelines from "./pages/ContentGuidelines";
import Home from "./pages/Home";

const NAV = [
  { path: "/", label: "Overview" },
  { path: "/foundations", label: "Foundations" },
  { path: "/components", label: "Components" },
  { path: "/patterns", label: "Patterns" },
  { path: "/accessibility", label: "Accessibility" },
  { path: "/branding", label: "Branding" },
  { path: "/motion", label: "Motion" },
  { path: "/audio-ux", label: "Audio UX" },
  { path: "/content", label: "Content" },
];

export default function App() {
  const [location] = useLocation();

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside style={{
        width: 220, flexShrink: 0, background: "var(--surface)",
        borderRight: "1px solid var(--border)", display: "flex", flexDirection: "column",
        position: "sticky", top: 0, height: "100vh", overflowY: "auto",
      }}>
        <div style={{ padding: "24px 20px 20px", borderBottom: "1px solid var(--border)" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: "#00FF8820", border: "1px solid #00FF8840", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 900, color: "#00FF88" }}>D</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)" }}>Design</div>
              <div style={{ fontSize: 10, color: "var(--text-muted)" }}>RALD System</div>
            </div>
          </Link>
        </div>
        <nav style={{ padding: "12px 0", flex: 1 }}>
          {NAV.map(({ path, label }) => {
            const active = path === "/" ? location === "/" : location.startsWith(path);
            return (
              <Link key={path} href={path} style={{
                display: "block", padding: "8px 20px", fontSize: 13,
                fontWeight: active ? 700 : 400,
                color: active ? "#00FF88" : "var(--text-muted)",
                background: active ? "#00FF8810" : "transparent",
                borderLeft: active ? "2px solid #00FF88" : "2px solid transparent",
                transition: "all var(--transition-base)",
              }}>{label}</Link>
            );
          })}
        </nav>
        <div style={{ padding: "16px 20px", borderTop: "1px solid var(--border)" }}>
          <div style={{ fontSize: 10, color: "var(--text-dim)" }}>v1.0 · RALD Ecosystem</div>
          <div style={{ fontSize: 10, color: "var(--text-dim)", marginTop: 2 }}>LILCKY STUDIO LIMITED</div>
        </div>
      </aside>
      <main style={{ flex: 1, minWidth: 0, overflowY: "auto" }}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/foundations" component={Foundations} />
          <Route path="/components" component={Components} />
          <Route path="/patterns" component={Patterns} />
          <Route path="/accessibility" component={Accessibility} />
          <Route path="/branding" component={Branding} />
          <Route path="/motion" component={Motion} />
          <Route path="/audio-ux" component={AudioUX} />
          <Route path="/content" component={ContentGuidelines} />
        </Switch>
      </main>
    </div>
  );
}
