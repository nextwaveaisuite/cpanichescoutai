'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [showEmailPopup, setShowEmailPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowEmailPopup(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#0b1220', color: '#fff' }}>
      {/* HEADER */}
      <header style={{ background: 'linear-gradient(135deg, #1a2847 0%, #2b3a6a 100%)', padding: '20px', borderBottom: '2px solid #4f7cff', boxShadow: '0 4px 20px rgba(79, 124, 255, 0.2)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ margin: 0, fontSize: '1.8rem', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>🚀 CPA Niche Scout AI</h1>
          <nav style={{ display: 'flex', gap: '20px' }}>
            <Link href="/" style={{ color: '#4f7cff', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
            <Link href="/sales" style={{ color: '#a8adb8', textDecoration: 'none' }}>Sales</Link>
            <Link href="/pricing" style={{ color: '#a8adb8', textDecoration: 'none' }}>Pricing</Link>
            <Link href="/dashboard" style={{ color: '#a8adb8', textDecoration: 'none' }}>Dashboard</Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Find Profitable CPA Niches in Minutes</h1>
        <p style={{ fontSize: '1.3rem', color: '#a8adb8', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px' }}>AI-powered niche research tool trusted by 10,000+ CPA marketers. Analyze keywords, find expired domains, generate blueprints, and create video scripts.</p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/sales" style={{ padding: '15px 40px', background: '#4f7cff', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.1rem' }}>Get Started Free</Link>
          <Link href="/pricing" style={{ padding: '15px 40px', background: '#2b3a6a', color: '#4f7cff', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.1rem', border: '2px solid #4f7cff' }}>View Pricing</Link>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ background: '#1a2847', padding: '80px 20px', marginTop: '60px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px', color: '#4f7cff' }}>Powerful Tools for CPA Success</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {[
              { icon: '📊', title: 'Keyword Research', desc: 'Find high-traffic, low-competition keywords with AI analysis' },
              { icon: '🌐', title: 'Expired Domains', desc: 'Discover aged domains with existing traffic and backlinks' },
              { icon: '📐', title: 'Website Blueprints', desc: 'Get complete site structures with content strategies' },
              { icon: '🎬', title: 'Video Scripts', desc: 'Pre-written scripts for YouTube and TikTok' },
              { icon: '💰', title: 'CPA Matching', desc: 'Match with 5 major CPA networks instantly' },
              { icon: '📧', title: 'Email Capture', desc: 'Built-in popup for lead generation' },
            ].map((feature, i) => (
              <div key={i} style={{ background: '#0b1220', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{feature.icon}</div>
                <h3 style={{ color: '#4f7cff', marginBottom: '10px' }}>{feature.title}</h3>
                <p style={{ color: '#a8adb8' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '80px 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px', color: '#4f7cff' }}>Trusted by Top CPA Marketers</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {[
            { name: 'John Smith', role: 'CPA Marketer', text: 'This tool saved me hours of research. Found 3 profitable niches in one day!' },
            { name: 'Sarah Johnson', role: 'Affiliate Manager', text: 'The expired domain finder is incredible. Already making $5K/month from one domain.' },
            { name: 'Mike Chen', role: 'Content Creator', text: 'The video scripts are gold. My conversion rate increased by 40%!' },
          ].map((testimonial, i) => (
            <div key={i} style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
              <p style={{ color: '#a8adb8', marginBottom: '20px', fontSize: '1.1rem' }}>"{testimonial.text}"</p>
              <p style={{ color: '#4f7cff', fontWeight: 'bold', marginBottom: '5px' }}>{testimonial.name}</p>
              <p style={{ color: '#a8adb8', fontSize: '0.9rem' }}>{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #4f7cff 0%, #00d4ff 100%)', padding: '60px 20px', textAlign: 'center', marginTop: '80px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'white' }}>Ready to Find Your Next Profitable Niche?</h2>
        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', marginBottom: '30px' }}>Join thousands of successful CPA marketers. Start free today.</p>
        <Link href="/sales" style={{ padding: '15px 50px', background: 'white', color: '#4f7cff', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.1rem', display: 'inline-block' }}>Get Started Now</Link>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#1a2847', borderTop: '2px solid #2b3a6a', padding: '40px 20px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginBottom: '40px' }}>
            <div>
              <h4 style={{ color: '#4f7cff', marginBottom: '15px' }}>CPA Niche Scout AI</h4>
              <p style={{ color: '#a8adb8', fontSize: '0.9rem' }}>Professional AI-powered CPA niche research tool.</p>
            </div>
            <div>
              <h4 style={{ color: '#4f7cff', marginBottom: '15px' }}>Product</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><Link href="/features" style={{ color: '#a8adb8', textDecoration: 'none' }}>Features</Link></li>
                <li><Link href="/pricing" style={{ color: '#a8adb8', textDecoration: 'none' }}>Pricing</Link></li>
                <li><Link href="/dashboard" style={{ color: '#a8adb8', textDecoration: 'none' }}>Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#4f7cff', marginBottom: '15px' }}>Legal</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><Link href="/privacy" style={{ color: '#a8adb8', textDecoration: 'none' }}>Privacy Policy</Link></li>
                <li><Link href="/terms" style={{ color: '#a8adb8', textDecoration: 'none' }}>Terms of Service</Link></li>
                <li><Link href="/compliance" style={{ color: '#a8adb8', textDecoration: 'none' }}>Compliance</Link></li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #2b3a6a', paddingTop: '20px', textAlign: 'center', color: '#a8adb8', fontSize: '0.85rem' }}>
            <p>© 2025 CPA Niche Scout AI. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* EMAIL POPUP */}
      {showEmailPopup && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
          <div style={{ background: '#1a2847', padding: '40px', borderRadius: '12px', maxWidth: '500px', width: '90%', position: 'relative', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
            <button onClick={() => setShowEmailPopup(false)} style={{ position: 'absolute', top: '12px', right: '12px', background: 'none', border: 'none', color: '#a8adb8', fontSize: '24px', cursor: 'pointer' }}>✕</button>
            <h2 style={{ marginBottom: '8px', color: '#4f7cff', fontSize: '1.5rem' }}>🎯 Get Instant Access!</h2>
            <p style={{ marginBottom: '24px', color: '#a8adb8' }}>Join 10,000+ CPA marketers. Get your first analysis free!</p>
            <form onSubmit={(e) => { e.preventDefault(); setShowEmailPopup(false); }}>
              <input type="text" placeholder="Your Name" required style={{ width: '100%', padding: '12px', marginBottom: '12px', borderRadius: '4px', border: '1px solid #2b3a6a', background: '#0b1220', color: '#fff' }} />
              <input type="email" placeholder="Your Email" required style={{ width: '100%', padding: '12px', marginBottom: '12px', borderRadius: '4px', border: '1px solid #2b3a6a', background: '#0b1220', color: '#fff' }} />
              <button type="submit" style={{ width: '100%', padding: '12px', background: '#4f7cff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Get Free Access</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
