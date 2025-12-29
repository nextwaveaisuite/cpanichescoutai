'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0b1220', color: '#fff' }}>
      {/* HEADER */}
      <header style={{ background: 'linear-gradient(135deg, #1a2847 0%, #2b3a6a 100%)', padding: '20px', borderBottom: '2px solid #4f7cff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/home" style={{ fontSize: '1.8rem', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none' }}>🚀 CPA Niche Scout AI</Link>
          <nav style={{ display: 'flex', gap: '20px' }}>
            <Link href="/home" style={{ color: '#4f7cff', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
            <Link href="/pricing" style={{ color: '#a8adb8', textDecoration: 'none' }}>Pricing</Link>
            <Link href="/about" style={{ color: '#a8adb8', textDecoration: 'none' }}>About</Link>
            <Link href="/contact" style={{ color: '#a8adb8', textDecoration: 'none' }}>Contact</Link>
          </nav>
        </div>
      </header>

      {/* WELCOME */}
      <section style={{ background: 'linear-gradient(135deg, #1a2847 0%, #2b3a6a 100%)', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '20px', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Welcome to CPA Niche Scout AI</h1>
        <p style={{ fontSize: '1.2rem', color: '#a8adb8', maxWidth: '700px', margin: '0 auto' }}>Your all-in-one platform for finding profitable CPA niches and building successful campaigns.</p>
      </section>

      {/* MAIN CONTENT */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        {/* HOW TO USE */}
        <div style={{ background: '#1a2847', padding: '40px', borderRadius: '12px', border: '1px solid #2b3a6a', marginBottom: '40px' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '30px', fontSize: '2rem' }}>📚 How to Use CPA Niche Scout AI</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            {[
              { step: '1', title: 'Enter Your Niche', desc: 'Type any niche keyword (e.g., "weight loss", "insurance", "forex")' },
              { step: '2', title: 'Analyze Keywords', desc: 'Get high-traffic, low-competition keywords for your niche' },
              { step: '3', title: 'Find Domains', desc: 'Discover aged domains with existing traffic and backlinks' },
              { step: '4', title: 'Get Blueprints', desc: 'Receive complete website structure and content strategy' },
              { step: '5', title: 'Create Scripts', desc: 'Get pre-written video scripts ready to publish' },
              { step: '6', title: 'Match CPA Offers', desc: 'Find the best CPA networks and offers for your niche' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#0b1220', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', color: '#4f7cff', fontWeight: 'bold', marginBottom: '15px' }}>{item.step}</div>
                <h3 style={{ color: '#4f7cff', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.95rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FEATURES */}
        <div style={{ background: '#1a2847', padding: '40px', borderRadius: '12px', border: '1px solid #2b3a6a', marginBottom: '40px' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '30px', fontSize: '2rem' }}>✨ What You Get</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              { icon: '📊', title: 'Keyword Research', desc: 'Find 8+ high-traffic keywords with difficulty & competition scores' },
              { icon: '🌐', title: 'Expired Domains', desc: 'Discover aged domains with traffic, backlinks & authority scores' },
              { icon: '📐', title: 'Website Blueprints', desc: 'Complete site structure with 8 pages & content strategy' },
              { icon: '🎬', title: 'Video Scripts', desc: '60-second pre-written scripts ready for YouTube/TikTok' },
              { icon: '💰', title: 'CPA Matching', desc: 'Match with 5 major networks: ClickBank, CJ, Impact, Rakuten, ShareASale' },
              { icon: '📧', title: 'Email Tools', desc: 'Build email lists and capture leads for fast cash offers' },
            ].map((feature, i) => (
              <div key={i} style={{ background: '#0b1220', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{feature.icon}</div>
                <h4 style={{ color: '#4f7cff', marginBottom: '10px' }}>{feature.title}</h4>
                <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.95rem' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, #1a2847 0%, #2b3a6a 100%)', padding: '60px 40px', borderRadius: '12px', border: '2px solid #4f7cff', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '20px', color: '#4f7cff' }}>Ready to Find Your Profitable Niche?</h2>
          <p style={{ fontSize: '1.1rem', color: '#a8adb8', marginBottom: '30px' }}>Access all tools and start analyzing niches right now.</p>
          <Link href="/dashboard" style={{ display: 'inline-block', padding: '15px 40px', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', color: 'white', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold', fontSize: '1.1rem' }}>🚀 Go to Dashboard</Link>
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{ background: '#1a2847', borderTop: '2px solid #2b3a6a', padding: '40px 20px', marginTop: '80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginBottom: '40px' }}>
            <div>
              <h4 style={{ color: '#4f7cff', marginBottom: '15px' }}>Product</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><Link href="/home" style={{ color: '#a8adb8', textDecoration: 'none' }}>Home</Link></li>
                <li><Link href="/dashboard" style={{ color: '#a8adb8', textDecoration: 'none' }}>Dashboard</Link></li>
                <li><Link href="/pricing" style={{ color: '#a8adb8', textDecoration: 'none' }}>Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#4f7cff', marginBottom: '15px' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><Link href="/about" style={{ color: '#a8adb8', textDecoration: 'none' }}>About</Link></li>
                <li><Link href="/contact" style={{ color: '#a8adb8', textDecoration: 'none' }}>Contact</Link></li>
              </ul>
            </div>
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
        </div>
      </footer>
    </div>
  );
}
