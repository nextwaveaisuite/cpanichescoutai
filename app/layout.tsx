import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CPA Niche Scout AI Pro - Find Profitable Niches",
  description: "AI-powered CPA niche research tool. Analyze keywords, find expired domains, generate blueprints, and create video scripts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
