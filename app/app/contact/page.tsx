'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
            <Link href="/app/about" style={{ color: '#a8adb8', textDecoration: 'none' }}>About</Link>
          </nav>
        </div>
      </header>

      {/* CONTACT CONTENT */}
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px' }}>
        <h1 style={{ marginBottom: '40px', color: '#4f7cff', fontSize: '2.5rem', textAlign: 'center' }}>Get in Touch</h1>

        <div style={{ background: '#1a2847', padding: '40px', borderRadius: '12px', border: '1px solid #2b3a6a', marginBottom: '40px' }}>
          {submitted && (
            <div style={{ background: '#10b981', color: 'white', padding: '15px', borderRadius: '8px', marginBottom: '20px', textAlign: 'center' }}>
              ✓ Message sent successfully! We'll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: '#a8adb8', display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Name *</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required 
                placeholder="Your Name" 
                style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #2b3a6a', background: '#0b1220', color: '#fff', boxSizing: 'border-box' }} 
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: '#a8adb8', display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Email *</label>
              <input 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required 
                placeholder="your@email.com" 
                style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #2b3a6a', background: '#0b1020', color: '#fff', boxSizing: 'border-box' }} 
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: '#a8adb8', display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Message *</label>
              <textarea 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required 
                placeholder="Your message..." 
                style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #2b3a6a', background: '#0b1020', color: '#fff', minHeight: '150px', boxSizing: 'border-box', fontFamily: 'inherit' }} 
              />
            </div>

            <button type="submit" style={{ width: '100%', padding: '12px', background: '#4f7cff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>Send Message</button>
          </form>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div style={{ background: '#1a2847', padding: '20px', borderRadius: '12px', border: '1px solid #2b3a6a', textAlign: 'center' }}>
            <h3 style={{ color: '#4f7cff', marginBottom: '10px' }}>📧 Email</h3>
            <p style={{ color: '#a8adb8' }}>support@cpanichescout.ai</p>
          </div>
          <div style={{ background: '#1a2847', padding: '20px', borderRadius: '12px', border: '1px solid #2b3a6a', textAlign: 'center' }}>
            <h3 style={{ color: '#4f7cff', marginBottom: '10px' }}>🌐 Website</h3>
            <p style={{ color: '#a8adb8' }}>www.cpanichescout.ai</p>
          </div>
          <div style={{ background: '#1a2847', padding: '20px', borderRadius: '12px', border: '1px solid #2b3a6a', textAlign: 'center' }}>
            <h3 style={{ color: '#4f7cff', marginBottom: '10px' }}>⏰ Response Time</h3>
            <p style={{ color: '#a8adb8' }}>Within 24 hours</p>
          </div>
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
