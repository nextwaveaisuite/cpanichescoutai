'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SalesPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Show popup after 3 seconds
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
        window.location.href = '/app';
      }, 2000);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0b1220', color: '#fff' }}>
      {/* HEADER */}
      <header style={{ background: 'linear-gradient(135deg, #1a2847 0%, #2b3a6a 100%)', padding: '20px', borderBottom: '2px solid #4f7cff', boxShadow: '0 4px 20px rgba(79, 124, 255, 0.2)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontSize: '1.8rem', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none', fontWeight: 'bold' }}>🚀 CPA Niche Scout AI</Link>
          <Link href="/" style={{ color: '#a8adb8', textDecoration: 'none', fontWeight: 'bold' }}>← Back to Home</Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section style={{ background: 'linear-gradient(135deg, #1a2847 0%, #2b3a6a 100%)', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '20px', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Stop Wasting Time on Niche Research</h1>
        <p style={{ fontSize: '1.2rem', color: '#a8adb8', maxWidth: '700px', margin: '0 auto' }}>Find profitable CPA niches in minutes, not weeks. AI-powered analysis that actually works.</p>
      </section>

      {/* MAIN SALES CONTENT */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
        
        {/* LEFT SIDE - BENEFITS & PROOF */}
        <div>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '30px', color: '#4f7cff' }}>Why CPA Marketers Choose Us</h2>

          {/* MAIN BENEFITS */}
          <div style={{ marginBottom: '40px' }}>
            {[
              { icon: '⚡', title: 'Lightning Fast', desc: 'Get results in seconds, not hours' },
              { icon: '🎯', title: 'Highly Accurate', desc: 'AI-powered analysis with real data' },
              { icon: '💰', title: 'Profit Focused', desc: 'Find niches that actually make money' },
              { icon: '📊', title: 'Complete Data', desc: 'Keywords, domains, blueprints, scripts' },
              { icon: '🔒', title: 'Private & Secure', desc: 'Your data stays confidential' },
              { icon: '📱', title: 'Easy to Use', desc: 'No technical knowledge required' },
            ].map((benefit, i) => (
              <div key={i} style={{ display: 'flex', gap: '15px', marginBottom: '20px', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '1.8rem', minWidth: '40px' }}>{benefit.icon}</div>
                <div>
                  <h4 style={{ color: '#4f7cff', marginBottom: '5px', margin: '0 0 5px 0' }}>{benefit.title}</h4>
                  <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.95rem' }}>{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* SOCIAL PROOF */}
          <div style={{ background: '#1a2847', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a', marginBottom: '30px' }}>
            <p style={{ color: '#4f7cff', fontWeight: 'bold', marginBottom: '12px', margin: '0 0 12px 0' }}>⭐ What Users Say:</p>
            <p style={{ color: '#a8adb8', fontSize: '0.95rem', margin: 0 }}>"Found 3 profitable niches in one day and made $2,400 in the first week. This tool is a game-changer!" - John S., CPA Marketer</p>
          </div>

          {/* STATS */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ background: '#1a2847', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a', textAlign: 'center' }}>
              <p style={{ color: '#4f7cff', fontSize: '2rem', fontWeight: 'bold', margin: '0 0 8px 0' }}>10,000+</p>
              <p style={{ color: '#a8adb8', fontSize: '0.9rem', margin: 0 }}>Active Users</p>
            </div>
            <div style={{ background: '#1a2847', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a', textAlign: 'center' }}>
              <p style={{ color: '#4f7cff', fontSize: '2rem', fontWeight: 'bold', margin: '0 0 8px 0' }}>$50M+</p>
              <p style={{ color: '#a8adb8', fontSize: '0.9rem', margin: 0 }}>Revenue Generated</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - OPT-IN FORM */}
        <div style={{ background: '#1a2847', padding: '40px', borderRadius: '12px', border: '2px solid #4f7cff', boxShadow: '0 20px 60px rgba(79, 124, 255, 0.2)', height: 'fit-content', position: 'sticky', top: '20px' }}>
          <h3 style={{ color: '#4f7cff', marginBottom: '10px', fontSize: '1.8rem', margin: '0 0 10px 0' }}>🎯 Get Instant Access</h3>
          <p style={{ color: '#a8adb8', marginBottom: '30px', margin: '0 0 30px 0' }}>Join 10,000+ successful CPA marketers. No credit card required.</p>

          {submitted ? (
            <div style={{ background: '#10b981', color: 'white', padding: '25px', borderRadius: '8px', textAlign: 'center' }}>
              <p style={{ fontSize: '1.3rem', fontWeight: 'bold', margin: '0 0 10px 0' }}>✓ Success!</p>
              <p style={{ margin: '0 0 15px 0' }}>Check your email for access details.</p>
              <p style={{ fontSize: '0.9rem', margin: 0 }}>Redirecting to dashboard...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* NAME INPUT */}
              <div style={{ marginBottom: '15px' }}>
                <label style={{ color: '#a8adb8', display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 'bold' }}>Full Name *</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                  placeholder="John Doe" 
                  style={{ 
                    width: '100%', 
                    padding: '12px', 
                    borderRadius: '6px', 
                    border: '1px solid #2b3a6a', 
                    background: '#0b1220', 
                    color: '#fff', 
                    fontSize: '1rem',
                    boxSizing: 'border-box',
                    transition: 'all 0.3s'
                  }} 
                  onFocus={(e) => e.target.style.borderColor = '#4f7cff'}
                  onBlur={(e) => e.target.style.borderColor = '#2b3a6a'}
                />
              </div>

              {/* EMAIL INPUT */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ color: '#a8adb8', display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 'bold' }}>Email Address *</label>
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                  placeholder="you@example.com" 
                  style={{ 
                    width: '100%', 
                    padding: '12px', 
                    borderRadius: '6px', 
                    border: '1px solid #2b3a6a', 
                    background: '#0b1220', 
                    color: '#fff', 
                    fontSize: '1rem',
                    boxSizing: 'border-box',
                    transition: 'all 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#4f7cff'}
                  onBlur={(e) => e.target.style.borderColor = '#2b3a6a'}
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button 
                type="submit" 
                disabled={loading}
                style={{ 
                  width: '100%', 
                  padding: '14px', 
                  background: loading ? '#666' : 'linear-gradient(135deg, #4f7cff, #00d4ff)', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '6px', 
                  cursor: loading ? 'not-allowed' : 'pointer', 
                  fontWeight: 'bold', 
                  fontSize: '1.05rem',
                  marginBottom: '15px',
                  transition: 'all 0.3s'
                }}
              >
                {loading ? '⏳ Processing...' : '🚀 Get Free Access Now'}
              </button>

              {/* TRUST BADGE */}
              <p style={{ color: '#a8adb8', fontSize: '0.85rem', textAlign: 'center', margin: 0 }}>✓ 100% Free • No Credit Card • Unsubscribe Anytime</p>
            </form>
          )}

          {/* WHAT YOU GET */}
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

      {/* FEATURES SECTION */}
      <section style={{ background: '#1a2847', padding: '60px 20px', marginTop: '60px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '50px', color: '#4f7cff' }}>Complete Feature Set</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {[
              { icon: '📊', title: 'Keyword Research', desc: 'Find high-traffic keywords with low competition. Get traffic estimates, difficulty scores, and profit potential.' },
              { icon: '🌐', title: 'Expired Domains', desc: 'Discover aged domains with existing traffic and backlinks. Save months of domain authority building.' },
              { icon: '📐', title: 'Website Blueprints', desc: 'Get complete site structures with content strategies. Know exactly what pages to build and what to write.' },
              { icon: '🎬', title: 'Video Scripts', desc: 'Pre-written scripts for YouTube and TikTok. Ready to use or customize for your niche.' },
              { icon: '💰', title: 'CPA Matching', desc: 'Automatically match with 5 major CPA networks. See payouts and commission rates instantly.' },
              { icon: '📧', title: 'Email Builder', desc: 'Capture leads with built-in opt-in forms. Build your email list while analyzing niches.' },
            ].map((feature, i) => (
              <div key={i} style={{ background: '#0b1220', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{feature.icon}</div>
                <h3 style={{ color: '#4f7cff', marginBottom: '10px' }}>{feature.title}</h3>
                <p style={{ color: '#a8adb8', margin: 0 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '50px', color: '#4f7cff' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'grid', gap: '20px' }}>
          {[
            { q: 'How quickly will I get results?', a: 'Instantly! Our AI analyzes your niche in seconds and provides complete data.' },
            { q: 'Do I need technical knowledge?', a: 'No! The software is designed for complete beginners. Just enter a niche and click analyze.' },
            { q: 'Can I cancel anytime?', a: 'Yes! You can cancel your subscription at any time. No questions asked.' },
            { q: 'Is my data secure?', a: 'Absolutely. We use enterprise-grade encryption and never share your data.' },
          ].map((item, i) => (
            <div key={i} style={{ background: '#1a2847', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
              <h4 style={{ color: '#4f7cff', marginBottom: '10px', margin: '0 0 10px 0' }}>{item.q}</h4>
              <p style={{ color: '#a8adb8', margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: 'linear-gradient(135deg, #4f7cff 0%, #00d4ff 100%)', padding: '60px 20px', textAlign: 'center', marginTop: '60px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'white' }}>Ready to Find Your First Profitable Niche?</h2>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', marginBottom: '30px' }}>Join thousands of successful CPA marketers. Start free today.</p>
        <button onClick={() => setShowPopup(true)} style={{ padding: '15px 50px', background: 'white', color: '#4f7cff', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.1rem', border: 'none', cursor: 'pointer' }}>Get Started Now</button>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#1a2847', borderTop: '2px solid #2b3a6a', padding: '40px 20px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginBottom: '40px' }}>
            <div>
              <h4 style={{ color: '#4f7cff', marginBottom: '15px' }}>CPA Niche Scout AI</h4>
              <p style={{ color: '#a8adb8', fontSize: '0.9rem' }}>Professional AI-powered CPA niche research tool.</p>
            </div>
            <div>
              <h4 style={{ color: '#4f7cff', marginBottom: '15px' }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '8px' }}><Link href="/" style={{ color: '#a8adb8', textDecoration: 'none' }}>Home</Link></li>
                <li><Link href="/sales" style={{ color: '#a8adb8', textDecoration: 'none' }}>Sales</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#4f7cff', marginBottom: '15px' }}>Legal</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '8px' }}><Link href="/app/privacy" style={{ color: '#a8adb8', textDecoration: 'none' }}>Privacy</Link></li>
                <li style={{ marginBottom: '8px' }}><Link href="/app/terms" style={{ color: '#a8adb8', textDecoration: 'none' }}>Terms</Link></li>
                <li><Link href="/app/compliance" style={{ color: '#a8adb8', textDecoration: 'none' }}>Compliance</Link></li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #2b3a6a', paddingTop: '20px', textAlign: 'center', color: '#a8adb8', fontSize: '0.85rem' }}>
            <p>© 2025 CPA Niche Scout AI. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* POP-UP OPT-IN FORM */}
      {showPopup && !submitted && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: '20px' }}>
          <div style={{ background: '#1a2847', padding: '40px', borderRadius: '12px', maxWidth: '500px', width: '100%', position: 'relative', boxShadow: '0 20px 60px rgba(0,0,0,0.8)', border: '2px solid #4f7cff' }}>
            {/* CLOSE BUTTON */}
            <button 
              onClick={() => setShowPopup(false)} 
              style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', color: '#a8adb8', fontSize: '28px', cursor: 'pointer', padding: 0, width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              ✕
            </button>

            <h2 style={{ marginBottom: '8px', color: '#4f7cff', fontSize: '1.6rem', margin: '0 0 8px 0' }}>🎯 Unlock Instant Access!</h2>
            <p style={{ marginBottom: '24px', color: '#a8adb8', margin: '0 0 24px 0' }}>Get your free niche analysis tools. No credit card required.</p>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '15px' }}>
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                  placeholder="Your Name" 
                  style={{ 
                    width: '100%', 
                    padding: '12px', 
                    borderRadius: '6px', 
                    border: '1px solid #2b3a6a', 
                    background: '#0b1220', 
                    color: '#fff',
                    boxSizing: 'border-box'
                  }} 
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                  placeholder="Your Email" 
                  style={{ 
                    width: '100%', 
                    padding: '12px', 
                    borderRadius: '6px', 
                    border: '1px solid #2b3a6a', 
                    background: '#0b1220', 
                    color: '#fff',
                    boxSizing: 'border-box'
                  }} 
                />
              </div>
              <button 
                type="submit" 
                disabled={loading}
                style={{ 
                  width: '100%', 
                  padding: '12px', 
                  background: loading ? '#666' : 'linear-gradient(135deg, #4f7cff, #00d4ff)', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '6px', 
                  cursor: loading ? 'not-allowed' : 'pointer', 
                  fontWeight: 'bold',
                  fontSize: '1rem'
                }}
              >
                {loading ? '⏳ Processing...' : '✓ Get Free Access'}
              </button>
            </form>

            <p style={{ color: '#a8adb8', fontSize: '0.8rem', textAlign: 'center', marginTop: '15px', margin: '15px 0 0 0' }}>We respect your privacy. Unsubscribe anytime.</p>
          </div>
        </div>
      )}
    </div>
  );
}
