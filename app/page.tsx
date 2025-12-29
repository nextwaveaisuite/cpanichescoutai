'use client';
import Link from 'next/link';

export default function AppHome() {
  return (
    <div style={{ minHeight: '100vh', background: '#0b1220', color: '#fff' }}>
      {/* HEADER */}
      <header style={{ background: 'linear-gradient(135deg, #1a2847 0%, #2b3a6a 100%)', padding: '20px', borderBottom: '2px solid #4f7cff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ margin: 0, fontSize: '1.8rem', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>🚀 CPA Niche Scout AI</h1>
          <nav style={{ display: 'flex', gap: '20px' }}>
            <Link href="/app" style={{ color: '#4f7cff', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
            <Link href="/app/dashboard" style={{ color: '#a8adb8', textDecoration: 'none' }}>Dashboard</Link>
            <Link href="/app/pricing" style={{ color: '#a8adb8', textDecoration: 'none' }}>Pricing</Link>
            <Link href="/app/about" style={{ color: '#a8adb8', textDecoration: 'none' }}>About</Link>
            <Link href="/app/contact" style={{ color: '#a8adb8', textDecoration: 'none' }}>Contact</Link>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '60px 20px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#4f7cff' }}>Welcome to CPA Niche Scout AI</h1>
        <p style={{ fontSize: '1.2rem', color: '#a8adb8', marginBottom: '40px' }}>Your professional CPA niche research platform.</p>

        {/* HOW TO USE */}
        <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a', marginBottom: '40px' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '20px' }}>How to Use This Software</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {[
              { step: '1', title: 'Enter Niche', desc: 'Go to Dashboard and enter your niche keyword' },
              { step: '2', title: 'Select Tool', desc: 'Choose Keywords, Domains, Blueprint, or Scripts' },
              { step: '3', title: 'Analyze', desc: 'Get instant AI-powered analysis and data' },
              { step: '4', title: 'Export', desc: 'Download results and implement your strategy' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#0b1220', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                <div style={{ fontSize: '2rem', color: '#4f7cff', fontWeight: 'bold', marginBottom: '10px' }}>{item.step}</div>
                <h3 style={{ color: '#4f7cff', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ color: '#a8adb8', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FEATURES */}
        <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a', marginBottom: '40px' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '20px' }}>Available Tools</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {[
              { icon: '📊', title: 'Keyword Research', desc: 'Find high-traffic, low-competition keywords with AI analysis' },
              { icon: '🌐', title: 'Expired Domains', desc: 'Discover aged domains with existing traffic and backlinks' },
              { icon: '📐', title: 'Website Blueprints', desc: 'Get complete site structures with content strategies' },
              { icon: '🎬', title: 'Video Scripts', desc: 'Pre-written scripts for YouTube and TikTok' },
            ].map((tool, i) => (
              <div key={i} style={{ background: '#0b1220', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{tool.icon}</div>
                <h3 style={{ color: '#4f7cff', marginBottom: '8px' }}>{tool.title}</h3>
                <p style={{ color: '#a8adb8', margin: 0 }}>{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, #4f7cff 0%, #00d4ff 100%)', padding: '40px', borderRadius: '12px', textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '20px' }}>Ready to Analyze Your First Niche?</h2>
          <Link href="/app/dashboard" style={{ padding: '12px 30px', background: 'white', color: '#4f7cff', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold', display: 'inline-block' }}>Go to Dashboard</Link>
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{ background: '#1a2847', borderTop: '2px solid #2b3a6a', padding: '40px 20px', marginTop: '80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginBottom: '40px' }}>
            <div>
              <h4 style={{ color: '#4f7cff', marginBottom: '15px' }}>Software</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><Link href="/app" style={{ color: '#a8adb8', textDecoration: 'none' }}>Home</Link></li>
                <li><Link href="/app/dashboard" style={{ color: '#a8adb8', textDecoration: 'none' }}>Dashboard</Link></li>
                <li><Link href="/app/pricing" style={{ color: '#a8adb8', textDecoration: 'none' }}>Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#4f7cff', marginBottom: '15px' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><Link href="/app/about" style={{ color: '#a8adb8', textDecoration: 'none' }}>About</Link></li>
                <li><Link href="/app/contact" style={{ color: '#a8adb8', textDecoration: 'none' }}>Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#4f7cff', marginBottom: '15px' }}>Legal</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><Link href="/app/privacy" style={{ color: '#a8adb8', textDecoration: 'none' }}>Privacy</Link></li>
                <li><Link href="/app/terms" style={{ color: '#a8adb8', textDecoration: 'none' }}>Terms</Link></li>
                <li><Link href="/app/compliance" style={{ color: '#a8adb8', textDecoration: 'none' }}>Compliance</Link></li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #2b3a6a', paddingTop: '20px', textAlign: 'center', color: '#a8adb8', fontSize: '0.85rem' }}>
            <p>© 2025 CPA Niche Scout AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
