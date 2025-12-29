'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function SalesPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/email', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email }) });
    setSubmitted(true);
    setTimeout(() => {
      window.location.href = '/app';
    }, 2000);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0b1220', color: '#fff' }}>
      {/* HEADER */}
      <header style={{ background: 'linear-gradient(135deg, #1a2847 0%, #2b3a6a 100%)', padding: '20px', borderBottom: '2px solid #4f7cff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontSize: '1.8rem', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none' }}>🚀 CPA Niche Scout AI</Link>
          <Link href="/" style={{ color: '#a8adb8', textDecoration: 'none' }}>← Back to Home</Link>
        </div>
      </header>

      {/* SALES CONTENT */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
        {/* LEFT - BENEFITS */}
        <div>
          <h1 style={{ fontSize: '2.8rem', marginBottom: '20px', color: '#4f7cff' }}>Stop Wasting Time on Niche Research</h1>
          <p style={{ fontSize: '1.2rem', color: '#a8adb8', marginBottom: '30px' }}>CPA Niche Scout AI finds profitable niches in minutes.</p>

          {[
            'Find high-traffic keywords with low competition',
            'Discover aged domains with existing traffic',
            'Get complete website blueprints',
            'Generate ready-to-use video scripts',
            'Match with top CPA networks',
            'Build email lists for fast cash offers',
          ].map((benefit, i) => (
            <div key={i} style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
              <div style={{ color: '#10b981', fontSize: '1.5rem' }}>✓</div>
              <p style={{ color: '#a8adb8', fontSize: '1.05rem' }}>{benefit}</p>
            </div>
          ))}
        </div>

        {/* RIGHT - OPT-IN FORM */}
        <div style={{ background: '#1a2847', padding: '40px', borderRadius: '12px', border: '2px solid #4f7cff' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '10px' }}>Get Instant Access</h2>
          <p style={{ color: '#a8adb8', marginBottom: '30px' }}>No credit card required.</p>

          {submitted ? (
            <div style={{ background: '#10b981', color: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: 0 }}>✓ Success!</p>
              <p style={{ margin: '10px 0 0 0' }}>Redirecting to dashboard...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ color: '#a8adb8', display: 'block', marginBottom: '8px' }}>Full Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="John Doe" style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #2b3a6a', background: '#0b1220', color: '#fff', boxSizing: 'border-box' }} />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ color: '#a8adb8', display: 'block', marginBottom: '8px' }}>Email Address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@example.com" style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #2b3a6a', background: '#0b1020', color: '#fff', boxSizing: 'border-box' }} />
              </div>

              <button type="submit" style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '15px' }}>Get Free Access Now</button>

              <p style={{ color: '#a8adb8', fontSize: '0.85rem', textAlign: 'center' }}>✓ 100% Free. Unsubscribe anytime.</p>
            </form>
          )}
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background: '#1a2847', borderTop: '2px solid #2b3a6a', padding: '40px 20px', marginTop: '80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center', color: '#a8adb8', fontSize: '0.85rem' }}>
          <p>© 2025 CPA Niche Scout AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
