"use client";

export default function GlobalError({ reset }) {
  return <html lang="en"><body style={{ margin: 0, fontFamily: "system-ui", background: "#f2f5ef", color: "#17352d" }}>
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: "24px" }}>
      <section style={{ maxWidth: 560, padding: 40, borderRadius: 24, background: "#fffffb", textAlign: "center", boxShadow: "0 20px 60px #153d3214" }}>
        <p style={{ letterSpacing: ".12em", fontSize: 12 }}>PRIMEKEY</p>
        <h1>Something went wrong</h1>
        <p>Reload the application to continue.</p>
        <button onClick={reset} style={{ minHeight: 44, marginTop: 20, padding: "10px 18px", border: 0, borderRadius: 10, background: "#153d32", color: "white", cursor: "pointer" }}>Reload</button>
      </section>
    </main>
  </body></html>;
}
