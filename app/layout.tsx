import type { Metadata } from "next";
import "./globals.css";
import EmailCapturePopup from "@/components/EmailCapturePopup";

export const metadata: Metadata = {
  title: "CPA Niche Scout AI",
  description: "Find profitable CPA niches, offers, and expired domains with AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="header-content">
            <div className="header-logo">
              <span>🎯</span> CPA Niche Scout AI
            </div>
            <nav className="header-nav">
              <a href="/">Home</a>
              <a href="/pricing">Pricing</a>
              <a href="/dashboard">Dashboard</a>
            </nav>
          </div>
        </header>
        <main style={{ minHeight: 'calc(100vh - 200px)' }}>
          {children}
        </main>
        <EmailCapturePopup />
      </body>
    </html>
  );
}
