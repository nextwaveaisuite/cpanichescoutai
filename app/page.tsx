'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function LandingPage() {
  const [showEmailPopup, setShowEmailPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowEmailPopup(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#0b1220', color: '#fff' }}>
      {/* HEADER */}
      <header style={{ background: 'linear-gradient(135deg, #1a2847 0%, #2b3a6a 100%)', padding: '20px', borderBottom: '2px solid #4f7cff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ margin: 0, fontSize: '1.8rem', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>🚀 CPA Niche Scout AI</h1>
          <nav style={{ display: 'flex', gap: '20px' }}>
            <a href="#features" style={{ color: '#a8adb8', textDecoration: 'none' }}>Features</a>
            <a href="#testimonials" style={{ color: '#a8adb8', textDecoration: 'none' }}>Testimonials</a>
            <a href="#pricing" style={{ color: '#a8adb8', textDecoration: 'none' }}>Pricing</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Find Profitable CPA Niches in Minutes</h1>
        <p style={{ fontSize: '1.3rem', color: '#a8adb8', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px' }}>AI-powered niche research tool. Analyze keywords, find expired domains, generate blueprints, and create video scripts.</p>
        <Link href="/sales" style={{ padding: '15px 40px', background: '#4f7cff', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.1rem', display: 'inline-block' }}>Get Started Free</Link>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ background: '#1a2847', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px', color: '#4f7cff' }}>Powerful Tools</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {[
              { icon: '📊', title: 'Keyword Research', desc: 'Find high-traffic, low-competition keywords' },
              { icon: '🌐', title: 'Expired Domains', desc: 'Discover aged domains with traffic' },
              { icon: '📐', title: 'Website Blueprints', desc: 'Complete site structures' },
              { icon: '🎬', title: 'Video Scripts', desc: 'Pre-written scripts ready to use' },
              { icon: '💰', title: 'CPA Matching', desc: '5 major CPA networks' },
              { icon: '📧', title: 'Email Capture', desc: 'Built-in lead generation' },
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
      <section id="testimonials" style={{ maxWidth: '1400px', margin: '0 auto', padding: '80px 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px', color: '#4f7cff' }}>Trusted by Top CPA Marketers</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {[
            { name: 'John Smith', role: 'CPA Marketer', text: 'Found 3 profitable niches in one day!' },
            { name: 'Sarah Johnson', role: 'Affiliate Manager', text: 'Making $5K/month from one domain.' },
            { name: 'Mike Chen', role: 'Content Creator', text: 'Conversion rate increased by 40%!' },
          ].map((testimonial, i) => (
            <div key={i} style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
              <p style={{ color: '#a8adb8', marginBottom: '20px', fontSize: '1.1rem' }}>"{testimonial.text}"</p>
              <p style={{ color: '#4f7cff', fontWeight: 'bold', marginBottom: '5px' }}>{testimonial.name}</p>
              <p style={{ color: '#a8adb8', fontSize: '0.9rem' }}>{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section id="pricing" style={{ background: '#1a2847', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px', color: '#4f7cff' }}>Simple Pricing</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              { price: '$9.99', credits: '20', label: 'Starter' },
              { price: '$19.00', credits: '50', label: 'Professional' },
              { price: '$29.00', credits: '100', label: 'Enterprise' },
            ].map((plan, i) => (
              <div key={i} style={{ background: '#0b1220', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a', textAlign: 'center' }}>
                <h3 style={{ color: '#4f7cff', marginBottom: '10px' }}>{plan.label}</h3>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4f7cff', margin: '10px 0' }}>{plan.price}</p>
                <p style={{ color: '#a8adb8' }}>{plan.credits} Credits</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #4f7cff 0%, #00d4ff 100%)', padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'white' }}>Ready to Start?</h2>
        <Link href="/sales" style={{ padding: '15px 50px', background: 'white', color: '#4f7cff', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.1rem', display: 'inline-block' }}>Get Started Now</Link>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#1a2847', borderTop: '2px solid #2b3a6a', padding: '40px 20px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center', color: '#a8adb8', fontSize: '0.85rem' }}>
          <p>© 2025 CPA Niche Scout AI. All rights reserved.</p>
        </div>
      </footer>

      {/* EMAIL POPUP */}
      {showEmailPopup && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
          <div style={{ background: '#1a2847', padding: '40px', borderRadius: '12px', maxWidth: '500px', width: '90%', position: 'relative' }}>
            <button onClick={() => setShowEmailPopup(false)} style={{ position: 'absolute', top: '12px', right: '12px', background: 'none', border: 'none', color: '#a8adb8', fontSize: '24px', cursor: 'pointer' }}>✕</button>
            <h2 style={{ marginBottom: '8px', color: '#4f7cff' }}>Get Instant Access!</h2>
            <p style={{ marginBottom: '24px', color: '#a8adb8' }}>Join 10,000+ CPA marketers.</p>
            <form onSubmit={(e) => { e.preventDefault(); setShowEmailPopup(false); }}>
              <input type="text" placeholder="Your Name" required style={{ width: '100%', padding: '12px', marginBottom: '12px', borderRadius: '4px', border: '1px solid #2b3a6a', background: '#0b1220', color: '#fff', boxSizing: 'border-box' }} />
              <input type="email" placeholder="Your Email" required style={{ width: '100%', padding: '12px', marginBottom: '12px', borderRadius: '4px', border: '1px solid #2b3a6a', background: '#0b1220', color: '#fff', boxSizing: 'border-box' }} />
              <button type="submit" style={{ width: '100%', padding: '12px', background: '#4f7cff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Get Free Access</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
