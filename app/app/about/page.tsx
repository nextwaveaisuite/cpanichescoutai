'use client';
import Link from 'next/link';

export default function About() {
  return (
    <div style={{ minHeight: '100vh', background: '#0b1220', color: '#fff' }}>
      {/* HEADER */}
      <header style={{ background: 'linear-gradient(135deg, #1a2847 0%, #2b3a6a 100%)', padding: '20px', borderBottom: '2px solid #4f7cff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/app" style={{ fontSize: '1.8rem', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none' }}>🚀 CPA Niche Scout AI</Link>
          <nav style={{ display: 'flex', gap: '20px' }}>
            <Link href="/app" style={{ color: '#a8adb8', textDecoration: 'none' }}>Home</Link>
            <Link href="/app/dashboard" style={{ color: '#a8adb8', textDecoration: 'none' }}>Dashboard</Link>
            <Link href="/app/pricing" style={{ color: '#a8adb8', textDecoration: 'none' }}>Pricing</Link>
            <Link href="/app/contact" style={{ color: '#a8adb8', textDecoration: 'none' }}>Contact</Link>
          </nav>
        </div>
      </header>

      {/* ABOUT CONTENT */}
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px' }}>
        <h1 style={{ marginBottom: '40px', color: '#4f7cff', fontSize: '2.5rem' }}>About CPA Niche Scout AI</h1>

        <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a', marginBottom: '30px' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '15px' }}>Our Mission</h2>
          <p style={{ color: '#a8adb8', lineHeight: '1.8', fontSize: '1.05rem' }}>
            CPA Niche Scout AI is dedicated to empowering digital marketers and entrepreneurs with AI-powered tools to find profitable niches quickly and efficiently. We believe that everyone deserves access to professional-grade research tools, regardless of their budget.
          </p>
        </div>

        <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a', marginBottom: '30px' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '15px' }}>What We Do</h2>
          <p style={{ color: '#a8adb8', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '15px' }}>
            Our platform combines artificial intelligence with real market data to help you:
          </p>
          <ul style={{ color: '#a8adb8', lineHeight: '1.8', fontSize: '1.05rem', paddingLeft: '20px' }}>
            <li>Find high-traffic keywords with low competition</li>
            <li>Discover aged domains with existing traffic</li>
            <li>Generate complete website blueprints</li>
            <li>Create ready-to-use video scripts</li>
            <li>Match with profitable CPA networks</li>
            <li>Build targeted email lists</li>
          </ul>
        </div>

        <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a', marginBottom: '30px' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '15px' }}>Why Choose Us?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {[
              { icon: '⚡', title: 'Lightning Fast', desc: 'Get results in seconds, not hours' },
              { icon: '🎯', title: 'Highly Accurate', desc: 'AI-powered analysis with real data' },
              { icon: '💰', title: 'Affordable', desc: 'Starting at just $9.99/month' },
              { icon: '🔒', title: 'Secure', desc: 'Enterprise-grade encryption' },
              { icon: '📱', title: 'Easy to Use', desc: 'No technical knowledge required' },
              { icon: '🚀', title: 'Always Improving', desc: 'New features added monthly' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#0b1220', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{item.icon}</div>
                <h4 style={{ color: '#4f7cff', marginBottom: '8px' }}>{item.title}</h4>
                <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '15px' }}>Our Team</h2>
          <p style={{ color: '#a8adb8', lineHeight: '1.8', fontSize: '1.05rem' }}>
            CPA Niche Scout AI was founded by a team of digital marketing experts and AI engineers who have spent over 50 combined years helping entrepreneurs build profitable online businesses. We understand the challenges of niche research and built this tool to solve them.
          </p>
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
