'use client';
import Link from 'next/link';

export default function Pricing() {
  return (
    <div style={{ minHeight: '100vh', background: '#0b1220', color: '#fff' }}>
      {/* HEADER */}
      <header style={{ background: 'linear-gradient(135deg, #1a2847 0%, #2b3a6a 100%)', padding: '20px', borderBottom: '2px solid #4f7cff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontSize: '1.8rem', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none' }}>🚀 CPA Niche Scout AI</Link>
          <nav style={{ display: 'flex', gap: '20px' }}>
            <Link href="/" style={{ color: '#a8adb8', textDecoration: 'none' }}>Home</Link>
            <Link href="/dashboard" style={{ color: '#a8adb8', textDecoration: 'none' }}>Dashboard</Link>
          </nav>
        </div>
      </header>

      {/* PRICING */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '60px', color: '#4f7cff', fontSize: '2.5rem' }}>Simple, Transparent Pricing</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {[
            { name: 'Starter', price: 9.99, credits: 20, features: ['20 Analyses', 'Basic Tools', 'Email Support', 'Keyword Research', 'Domain Finder'], popular: false },
            { name: 'Professional', price: 19.00, credits: 50, features: ['50 Analyses', 'All Tools', 'Priority Support', 'Website Blueprints', 'Video Scripts'], popular: true },
            { name: 'Enterprise', price: 29.00, credits: 100, features: ['100 Analyses', 'All Tools', '24/7 Support', 'API Access', 'Bulk Export'] }
          ].map((plan) => (
            <div key={plan.name} style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: plan.popular ? '2px solid #4f7cff' : '1px solid #2b3a6a', transform: plan.popular ? 'scale(1.05)' : 'scale(1)' }}>
              {plan.popular && <div style={{ background: '#4f7cff', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '15px', display: 'inline-block' }}>⭐ Most Popular</div>}
              <h3 style={{ marginBottom: '10px', fontSize: '1.5rem' }}>{plan.name}</h3>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#4f7cff', marginBottom: '5px' }}>${plan.price.toFixed(2)}</div>
              <div style={{ color: '#a8adb8', marginBottom: '20px' }}>{plan.credits} Credits/Month</div>
              <Link href="/sales" style={{ width: '100%', padding: '12px', background: plan.popular ? '#4f7cff' : '#2b3a6a', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', marginBottom: '20px', display: 'block', textAlign: 'center', textDecoration: 'none' }}>Get Started</Link>
              <div>
                {plan.features.map((feature, i) => (
                  <div key={i} style={{ color: '#a8adb8', marginBottom: '8px', fontSize: '0.9rem' }}>✓ {feature}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{ background: '#1a2847', borderTop: '2px solid #2b3a6a', padding: '40px 20px', marginTop: '80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center', color: '#a8adb8', fontSize: '0.85rem' }}>
          <div style={{ marginBottom: '20px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/privacy" style={{ color: '#a8adb8', textDecoration: 'none' }}>Privacy</Link>
            <Link href="/terms" style={{ color: '#a8adb8', textDecoration: 'none' }}>Terms</Link>
            <Link href="/compliance" style={{ color: '#a8adb8', textDecoration: 'none' }}>Compliance</Link>
          </div>
          <p>© 2025 CPA Niche Scout AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
