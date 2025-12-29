'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Sales() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/email', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email }) });
    setSubmitted(true);
    setTimeout(() => setShowDashboard(true), 2000);
  };

  if (showDashboard) {
    return <div style={{ minHeight: '100vh', background: '#0b1220', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: '#4f7cff', marginBottom: '20px' }}>✓ Access Granted!</h1>
        <p style={{ color: '#a8adb8', marginBottom: '30px' }}>Check your email for login details.</p>
        <Link href="/dashboard" style={{ padding: '12px 30px', background: '#4f7cff', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}>Go to Dashboard</Link>
      </div>
    </div>;
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0b1220', color: '#fff' }}>
      {/* HEADER */}
      <header style={{ background: 'linear-gradient(135deg, #1a2847 0%, #2b3a6a 100%)', padding: '20px', borderBottom: '2px solid #4f7cff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontSize: '1.8rem', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none' }}>🚀 CPA Niche Scout AI</Link>
          <nav style={{ display: 'flex', gap: '20px' }}>
            <Link href="/" style={{ color: '#a8adb8', textDecoration: 'none' }}>Home</Link>
            <Link href="/pricing" style={{ color: '#a8adb8', textDecoration: 'none' }}>Pricing</Link>
          </nav>
        </div>
      </header>

      {/* SALES CONTENT */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
        {/* LEFT SIDE - BENEFITS */}
        <div>
          <h1 style={{ fontSize: '2.8rem', marginBottom: '20px', color: '#4f7cff' }}>Stop Wasting Time on Niche Research</h1>
          <p style={{ fontSize: '1.2rem', color: '#a8adb8', marginBottom: '30px' }}>CPA Niche Scout AI finds profitable niches in minutes, not weeks.</p>

          <div style={{ marginBottom: '30px' }}>
            {[
              'Find high-traffic keywords with low competition',
              'Discover aged domains with existing traffic',
              'Get complete website blueprints and strategies',
              'Generate ready-to-use video scripts',
              'Match with top CPA networks instantly',
              'Build email lists for fast cash offers',
            ].map((benefit, i) => (
              <div key={i} style={{ display: 'flex', gap: '15px', marginBottom: '15px', alignItems: 'flex-start' }}>
                <div style={{ color: '#10b981', fontSize: '1.5rem', marginTop: '2px' }}>✓</div>
                <p style={{ color: '#a8adb8', fontSize: '1.05rem' }}>{benefit}</p>
              </div>
            ))}
          </div>

          <div style={{ background: '#1a2847', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a', marginBottom: '30px' }}>
            <p style={{ color: '#4f7cff', fontWeight: 'bold', marginBottom: '10px' }}>💡 Real Results:</p>
            <p style={{ color: '#a8adb8' }}>"Found 3 profitable niches in one day and made $2,400 in the first week." - John S.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <p style={{ color: '#4f7cff', fontSize: '2rem', fontWeight: 'bold' }}>10,000+</p>
              <p style={{ color: '#a8adb8' }}>Active Users</p>
            </div>
            <div>
              <p style={{ color: '#4f7cff', fontSize: '2rem', fontWeight: 'bold' }}>$50M+</p>
              <p style={{ color: '#a8adb8' }}>Revenue Generated</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - OPT-IN FORM */}
        <div style={{ background: '#1a2847', padding: '40px', borderRadius: '12px', border: '2px solid #4f7cff', boxShadow: '0 20px 60px rgba(79, 124, 255, 0.2)' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '10px', fontSize: '1.8rem' }}>Get Instant Access</h2>
          <p style={{ color: '#a8adb8', marginBottom: '30px' }}>Join thousands of successful CPA marketers. No credit card required.</p>

          {submitted ? (
            <div style={{ background: '#10b981', color: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: 0 }}>✓ Success!</p>
              <p style={{ margin: '10px 0 0 0' }}>Check your email for access details.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ color: '#a8adb8', display: 'block', marginBottom: '8px' }}>Full Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="John Doe" style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #2b3a6a', background: '#0b1220', color: '#fff', fontSize: '1rem', boxSizing: 'border-box' }} />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ color: '#a8adb8', display: 'block', marginBottom: '8px' }}>Email Address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@example.com" style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #2b3a6a', background: '#0b1220', color: '#fff', fontSize: '1rem', boxSizing: 'border-box' }} />
              </div>

              <button type="submit" style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '15px' }}>Get Free Access Now</button>

              <p style={{ color: '#a8adb8', fontSize: '0.85rem', textAlign: 'center' }}>✓ 100% Free. No credit card required. Unsubscribe anytime.</p>
            </form>
          )}

          <div style={{ marginTop: '30px', paddingTop: '30px', borderTop: '1px solid #2b3a6a' }}>
            <p style={{ color: '#4f7cff', fontWeight: 'bold', marginBottom: '15px' }}>What You Get:</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#a8adb8', fontSize: '0.95rem' }}>
              <li style={{ marginBottom: '8px' }}>✓ Keyword Research Tool</li>
              <li style={{ marginBottom: '8px' }}>✓ Expired Domain Finder</li>
              <li style={{ marginBottom: '8px' }}>✓ Website Blueprints</li>
              <li style={{ marginBottom: '8px' }}>✓ Video Script Generator</li>
              <li style={{ marginBottom: '8px' }}>✓ CPA Network Matching</li>
              <li>✓ Email List Builder</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background: '#1a2847', borderTop: '2px solid #2b3a6a', padding: '40px 20px', marginTop: '80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center', color: '#a8adb8', fontSize: '0.85rem' }}>
          <div style={{ marginBottom: '20px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/privacy" style={{ color: '#a8adb8', textDecoration: 'none' }}>Privacy</Link>
            <Link href="/terms" style={{ color: '#a8adb8', textDecoration: 'none' }}>Terms</Link>
            <Link href="/compliance" style={{ color: '#a8adb8', textDecoration: 'none' }}>Compliance</Link>
            <Link href="/disclaimer" style={{ color: '#a8adb8', textDecoration: 'none' }}>Disclaimer</Link>
          </div>
          <p>© 2025 CPA Niche Scout AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
