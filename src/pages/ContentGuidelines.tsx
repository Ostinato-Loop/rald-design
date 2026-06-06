export default function ContentGuidelines() {
  function Ex({ good, bad }: { good: string; bad: string }) {
    return (
      <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12 }}>
        <div style={{ background:"#00FF8808",border:"1px solid #00FF8825",borderRadius:8,padding:"12px 14px" }}>
          <div style={{ fontSize:10,fontWeight:700,color:"#00FF88",marginBottom:6 }}>✓ GOOD</div>
          <div style={{ fontSize:13,color:"var(--text)",lineHeight:1.5 }}>{good}</div>
        </div>
        <div style={{ background:"#FF2E2E08",border:"1px solid #FF2E2E25",borderRadius:8,padding:"12px 14px" }}>
          <div style={{ fontSize:10,fontWeight:700,color:"#FF2E2E",marginBottom:6 }}>✕ BAD</div>
          <div style={{ fontSize:13,color:"var(--text)",lineHeight:1.5 }}>{bad}</div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 40px" }}>
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#00FF88", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Content</div>
        <h1 style={{ fontSize: 40, fontWeight: 900, color: "var(--text)", marginBottom: 12 }}>Content Guidelines</h1>
        <p style={{ fontSize: 16, color: "var(--text-muted)", maxWidth: 540 }}>African-first. Trust-first. Professional. RALD speaks to people, not users. Every word must earn its place.</p>
      </div>

      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 20 }}>Voice & Tone</h2>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,marginBottom:24 }}>
          {[{ trait:"Direct",desc:"Say what we mean. No marketing fluff. No ambiguity about what happens next." },{ trait:"Warm",desc:"Built for Africa. Our language respects culture, context, and community." },{ trait:"Confident",desc:"We do not hedge unnecessarily. If something failed, own it. If it succeeded, say it." }].map(t => (
            <div key={t.trait} style={{ background:"var(--surface)",border:"1px solid var(--border)",borderRadius:12,padding:20 }}>
              <div style={{ fontSize:14,fontWeight:800,color:"#00FF88",marginBottom:8 }}>{t.trait}</div>
              <div style={{ fontSize:13,color:"var(--text-muted)",lineHeight:1.6 }}>{t.desc}</div>
            </div>
          ))}
        </div>
        <Ex good="Your profile has been updated." bad="Your changes have been successfully saved to our system!" />
        <Ex good="This action cannot be undone. Continue?" bad="Are you absolutely sure you want to proceed with this irreversible action?" />
        <Ex good="Welcome back, Adaeze." bad="Welcome back! 🎉 Great to see you again! You're looking amazing today!" />
      </section>

      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>Error Messages</h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 20 }}>Specific, non-blaming, and actionable. Never show raw error codes to users.</p>
        <div style={{ background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden" }}>
          {[
            { sit:"Wrong password",write:"That password is incorrect. Try again or reset your password.",not:"Invalid credentials" },
            { sit:"File too large",write:"This file is too large. Maximum size is 10 MB.",not:"File upload error: 413" },
            { sit:"No internet",write:"You're offline. Check your connection and try again.",not:"Network request failed" },
            { sit:"Permission denied",write:"You don't have access to this. Contact your admin if this is a mistake.",not:"403 Forbidden" },
          ].map((r,i) => (
            <div key={r.sit} style={{ display:"grid",gridTemplateColumns:"150px 1fr 140px",padding:"14px 20px",alignItems:"flex-start",borderBottom:i<3?"1px solid var(--border)":"none" }}>
              <div style={{ fontSize:12,fontWeight:600,color:"var(--text-muted)" }}>{r.sit}</div>
              <div style={{ fontSize:13,color:"var(--text)",lineHeight:1.5 }}>{r.write}</div>
              <div style={{ fontSize:12,color:"#FF2E2E",fontStyle:"italic" }}>{r.not}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>Success Messages</h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 20 }}>Confirm what happened. Brief. No exclamation marks in functional UI.</p>
        <Ex good="Profile updated." bad="Woohoo! Your profile was updated successfully! 🎉" />
        <Ex good="Song uploaded. It will be reviewed within 24 hours." bad="Upload complete! Your song has been successfully uploaded!" />
        <Ex good="Password changed. All other sessions have been signed out." bad="Success! Your password has been successfully changed!" />
      </section>

      <section style={{ marginBottom: 56 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>Privacy Messaging</h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 20 }}>Clear, specific, honest. No dark patterns. No consent buried in flow.</p>
        <div style={{ background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:24 }}>
          {[
            { rule:"State exactly what data is collected", eg:"We collect your email, name, and country. We do not collect your location." },
            { rule:"Say who can see each piece of data", eg:"Your phone number is visible only to you and RALD support." },
            { rule:"Explain AI usage clearly", eg:"Voice recordings may train RALD Voice AI. You control this in Settings > Privacy." },
            { rule:"Do not bundle consent", eg:"Ask for analytics separately from account creation — never as one checkbox." },
          ].map(r => (
            <div key={r.rule} style={{ borderBottom:"1px solid var(--border)",paddingBottom:14,marginBottom:14 }}>
              <div style={{ fontSize:13,fontWeight:700,color:"var(--text)",marginBottom:6 }}>{r.rule}</div>
              <div style={{ fontSize:13,color:"var(--text-muted)",fontStyle:"italic",lineHeight:1.5 }}>"{r.eg}"</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>African-First Language</h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 20 }}>RALD is built for Africa first. Language reflects this from day one.</p>
        <div style={{ background:"var(--surface)",border:"1px solid var(--border)",borderRadius:14,padding:24 }}>
          {[
            ["Show ₦ (NGN) as primary currency. Support GHS, KES, ZAR natively.","Never default to $ only"],
            ["Use DD Mon YYYY dates (6 Jun 2026).","Never MM/DD/YYYY as sole format"],
            ["Accept +234, +233, +254, +27 as first-class phone formats.","Not as afterthoughts"],
            ["Single 'Full name' field preferred over split first/last name.","Western name split by default"],
            ["Say 'postal code' not 'zip code'. 'State / region' not just 'state'.","US-centric defaults"],
            ["Never validate names against Western format patterns.","Many African names are single-word or reversed"],
          ].map(([rule, avoid]) => (
            <div key={rule} style={{ display:"flex",gap:12,alignItems:"flex-start",marginBottom:14 }}>
              <span style={{ color:"#00FF88",fontSize:14,fontWeight:900,flexShrink:0 }}>✓</span>
              <div>
                <div style={{ fontSize:13,color:"var(--text)",marginBottom:2 }}>{rule}</div>
                <div style={{ fontSize:11,color:"#FF2E2E80" }}>Avoid: {avoid}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
