'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SalesPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
      });
      setSubmitted(true);
      setTimeout(() => {
        window.location.href = '/home';
      }, 2000);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0b1220', color: '#fff' }}>
      {/* HEADER */}
      <header style={{ background: 'linear-gradient(135deg, #1a2847 0%, #2b3a6a 100%)', padding: '20px', borderBottom: '2px solid #4f7cff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ margin: 0, fontSize: '1.8rem', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>🚀 CPA Niche Scout AI</h1>
        </div>
      </header>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #1a2847 0%, #2b3a6a 100%)', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '20px', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Stop Wasting Time on Niche Research</h1>
        <p style={{ fontSize: '1.2rem', color: '#a8adb8', maxWidth: '700px', margin: '0 auto' }}>Find profitable CPA niches in minutes, not weeks. AI-powered analysis that actually works.</p>
      </section>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
        {/* LEFT - BENEFITS */}
        <div>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '30px', color: '#4f7cff' }}>Why CPA Marketers Choose Us</h2>
          {[
            { icon: '⚡', title: 'Lightning Fast', desc: 'Get results in seconds' },
            { icon: '🎯', title: 'Highly Accurate', desc: 'AI-powered analysis' },
            { icon: '💰', title: 'Profit Focused', desc: 'Find money-making niches' },
            { icon: '📊', title: 'Complete Data', desc: 'All tools in one place' },
            { icon: '🔒', title: 'Private & Secure', desc: 'Your data stays safe' },
            { icon: '📱', title: 'Easy to Use', desc: 'No technical knowledge' },
          ].map((benefit, i) => (
            <div key={i} style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
              <div style={{ fontSize: '1.8rem' }}>{benefit.icon}</div>
              <div>
                <h4 style={{ color: '#4f7cff', margin: '0 0 5px 0' }}>{benefit.title}</h4>
                <p style={{ color: '#a8adb8', margin: 0 }}>{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT - OPT-IN FORM */}
        <div style={{ background: '#1a2847', padding: '40px', borderRadius: '12px', border: '2px solid #4f7cff', height: 'fit-content' }}>
          <h3 style={{ color: '#4f7cff', marginBottom: '10px', fontSize: '1.8rem' }}>🎯 Get Instant Access</h3>
          <p style={{ color: '#a8adb8', marginBottom: '30px' }}>Join 10,000+ successful CPA marketers. No credit card required.</p>

          {submitted ? (
            <div style={{ background: '#10b981', color: 'white', padding: '25px', borderRadius: '8px', textAlign: 'center' }}>
              <p style={{ fontSize: '1.3rem', fontWeight: 'bold', margin: '0 0 10px 0' }}>✓ Success!</p>
              <p style={{ margin: 0 }}>Redirecting to home page...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '15px' }}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Full Name" style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #2b3a6a', background: '#0b1220', color: '#fff', boxSizing: 'border-box' }} />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email Address" style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #2b3a6a', background: '#0b1220', color: '#fff', boxSizing: 'border-box' }} />
              </div>
              <button type="submit" disabled={loading} style={{ width: '100%', padding: '14px', background: loading ? '#666' : 'linear-gradient(135deg, #4f7cff, #00d4ff)', color: 'white', border: 'none', borderRadius: '6px', cursor: loading ? 'not-allowed' : 'pointer', fontWeight: 'bold', fontSize: '1.05rem', marginBottom: '15px' }}>
                {loading ? '⏳ Processing...' : '🚀 Get Free Access Now'}
              </button>
              <p style={{ color: '#a8adb8', fontSize: '0.85rem', textAlign: 'center', margin: 0 }}>✓ 100% Free • No Credit Card • Unsubscribe Anytime</p>
            </form>
          )}

          <div style={{ marginTop: '30px', paddingTop: '30px', borderTop: '1px solid #2b3a6a' }}>
            <p style={{ color: '#4f7cff', fontWeight: 'bold', marginBottom: '15px', margin: '0 0 15px 0' }}>✓ Instant Access To:</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#a8adb8', fontSize: '0.95rem' }}>
              <li style={{ marginBottom: '10px' }}>📊 Keyword Research Tool</li>
              <li style={{ marginBottom: '10px' }}>🌐 Expired Domain Finder</li>
              <li style={{ marginBottom: '10px' }}>📐 Website Blueprint Generator</li>
              <li style={{ marginBottom: '10px' }}>🎬 Video Script Generator</li>
              <li style={{ marginBottom: '10px' }}>💰 CPA Network Matching</li>
              <li>📧 Email List Builder</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background: '#1a2847', borderTop: '2px solid #2b3a6a', padding: '40px 20px', marginTop: '80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginBottom: '40px' }}>
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

      {/* POP-UP */}
      {showPopup && !submitted && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: '20px' }}>
          <div style={{ background: '#1a2847', padding: '40px', borderRadius: '12px', maxWidth: '500px', width: '100%', position: 'relative', border: '2px solid #4f7cff' }}>
            <button onClick={() => setShowPopup(false)} style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', color: '#a8adb8', fontSize: '28px', cursor: 'pointer' }}>✕</button>
            <h2 style={{ marginBottom: '8px', color: '#4f7cff', fontSize: '1.6rem' }}>🎯 Unlock Instant Access!</h2>
            <p style={{ marginBottom: '24px', color: '#a8adb8' }}>Get your free niche analysis tools.</p>
            <form onSubmit={handleSubmit}>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your Name" style={{ width: '100%', padding: '12px', marginBottom: '12px', borderRadius: '6px', border: '1px solid #2b3a6a', background: '#0b1220', color: '#fff', boxSizing: 'border-box' }} />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Your Email" style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '6px', border: '1px solid #2b3a6a', background: '#0b1220', color: '#fff', boxSizing: 'border-box' }} />
              <button type="submit" disabled={loading} style={{ width: '100%', padding: '12px', background: loading ? '#666' : 'linear-gradient(135deg, #4f7cff, #00d4ff)', color: 'white', border: 'none', borderRadius: '6px', cursor: loading ? 'not-allowed' : 'pointer', fontWeight: 'bold' }}>
                {loading ? '⏳ Processing...' : '✓ Get Free Access'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
