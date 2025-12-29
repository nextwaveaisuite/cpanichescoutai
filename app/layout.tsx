import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CPA Niche Scout AI 2.0",
  description: "Find profitable CPA niches with AI",
};

export default function RootLayout({ children }: { children: React.ReactNode } ) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
