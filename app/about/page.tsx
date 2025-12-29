'use client';
import Link from 'next/link';

export default function About() {
  return (
    <div style={{ minHeight: '100vh', background: '#0b1220', color: '#fff' }}>
      <header style={{ background: 'linear-gradient(135deg, #1a2847 0%, #2b3a6a 100%)', padding: '20px', borderBottom: '2px solid #4f7cff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/home" style={{ fontSize: '1.8rem', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none' }}>🚀 CPA Niche Scout AI</Link>
          <nav style={{ display: 'flex', gap: '20px' }}>
            <Link href="/home" style={{ color: '#a8adb8', textDecoration: 'none' }}>Home</Link>
            <Link href="/dashboard" style={{ color: '#a8adb8', textDecoration: 'none' }}>Dashboard</Link>
            <Link href="/pricing" style={{ color: '#a8adb8', textDecoration: 'none' }}>Pricing</Link>
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px' }}>
        <h1 style={{ marginBottom: '40px', color: '#4f7cff', fontSize: '2.5rem' }}>About CPA Niche Scout AI</h1>

        <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a', marginBottom: '30px' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '15px' }}>Our Mission</h2>
          <p style={{ color: '#a8adb8', lineHeight: '1.8', fontSize: '1.05rem' }}>CPA Niche Scout AI empowers digital marketers and entrepreneurs with AI-powered tools to find profitable niches quickly. We believe everyone deserves access to professional-grade research tools.</p>
        </div>

        <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a', marginBottom: '30px' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '15px' }}>What We Offer</h2>
          <ul style={{ color: '#a8adb8', lineHeight: '1.8', fontSize: '1.05rem', paddingLeft: '20px' }}>
            <li>AI-powered keyword research</li>
            <li>Expired domain discovery</li>
            <li>Website blueprint generation</li>
            <li>Video script creation</li>
            <li>CPA network matching</li>
            <li>Email list building tools</li>
          </ul>
        </div>

        <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '15px' }}>Why Choose Us?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { icon: '⚡', title: 'Fast', desc: 'Results in seconds' },
              { icon: '🎯', title: 'Accurate', desc: 'AI-powered analysis' },
              { icon: '💰', title: 'Affordable', desc: 'Starting at $9.99' },
              { icon: '🔒', title: 'Secure', desc: 'Enterprise encryption' },
              { icon: '📱', title: 'Easy', desc: 'No tech skills needed' },
              { icon: '🚀', title: 'Growing', desc: 'New features monthly' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{item.icon}</div>
                <h4 style={{ color: '#4f7cff', marginBottom: '8px' }}>{item.title}</h4>
                <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer style={{ background: '#1a2847', borderTop: '2px solid #2b3a6a', padding: '40px 20px', marginTop: '80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginBottom: '40px' }}>
          <div>
            <h4 style={{ color: '#4f7cff', marginBottom: '15px' }}>Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li><Link href="/privacy" style={{ color: '#a8adb8', textDecoration: 'none' }}>Privacy</Link></li>
              <li><Link href="/terms" style={{ color: '#a8adb8', textDecoration: 'none' }}>Terms</Link></li>
              <li><Link href="/compliance" style={{ color: '#a8adb8', textDecoration: 'none' }}>Compliance</Link></li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #2b3a6a', paddingTop: '20px', textAlign: 'center', color: '#a8adb8', fontSize: '0.85rem' }}>
          <p>© 2025 CPA Niche Scout AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
