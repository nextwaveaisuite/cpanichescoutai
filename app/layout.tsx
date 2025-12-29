import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CPA Niche Scout AI 2.0",
  description: "Find profitable CPA niches with AI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0, padding: 0, background: "#0b1220", color: "#fff" }}>
        <header style={{ background: "#1a2847", padding: "20px", borderBottom: "1px solid #2b3a6a" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h1 style={{ margin: 0, fontSize: "1.5rem" }}>🎯 CPA Niche Scout AI 2.0</h1>
            <nav style={{ display: "flex", gap: "20px" }}>
              <a href="/" style={{ color: "#4f7cff", textDecoration: "none" }}>Home</a>
              <a href="/pricing" style={{ color: "#4f7cff", textDecoration: "none" }}>Pricing</a>
              <a href="/dashboard" style={{ color: "#4f7cff", textDecoration: "none" }}>Dashboard</a>
            </nav>
          </div>
        </header>
        <main style={{ minHeight: "calc(100vh - 200px)" }}>{children}</main>
      </body>
    </html>
  );
}
