'use client';
import Link from 'next/link';

export default function Pricing() {
  return (
    <div style={{ minHeight: '100vh', background: '#0b1220', color: '#fff' }}>
      <header style={{ background: 'linear-gradient(135deg, #1a2847 0%, #2b3a6a 100%)', padding: '20px', borderBottom: '2px solid #4f7cff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/home" style={{ fontSize: '1.8rem', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none' }}>🚀 CPA Niche Scout AI</Link>
          <nav style={{ display: 'flex', gap: '20px' }}>
            <Link href="/home" style={{ color: '#a8adb8', textDecoration: 'none' }}>Home</Link>
            <Link href="/dashboard" style={{ color: '#a8adb8', textDecoration: 'none' }}>Dashboard</Link>
            <Link href="/about" style={{ color: '#a8adb8', textDecoration: 'none' }}>About</Link>
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '60px 20px' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px', color: '#4f7cff' }}>Simple, Transparent Pricing</h1>
        <p style={{ textAlign: 'center', color: '#a8adb8', marginBottom: '60px', fontSize: '1.1rem' }}>Choose the plan that fits your needs</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {[
            { name: 'Starter', price: '$9.99', credits: '20 Credits', features: ['Keyword Research', 'Domain Finder', 'Basic Support'], popular: false },
            { name: 'Professional', price: '$19.00', credits: '50 Credits', features: ['All Starter Features', 'Website Blueprints', 'Video Scripts', 'Priority Support'], popular: true },
            { name: 'Enterprise', price: '$29.00', credits: '100 Credits', features: ['All Features Unlimited', 'Email Support', 'API Access', 'Custom Reports'], popular: false },
          ].map((plan, i) => (
            <div key={i} style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: plan.popular ? '2px solid #4f7cff' : '1px solid #2b3a6a', position: 'relative' }}>
              {plan.popular && <div style={{ position: 'absolute', top: '-12px', left: '20px', background: '#4f7cff', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 'bold' }}>MOST POPULAR</div>}
              <h3 style={{ color: '#4f7cff', marginBottom: '10px', fontSize: '1.5rem' }}>{plan.name}</h3>
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '2.5rem', color: '#00d4ff', fontWeight: 'bold' }}>{plan.price}</div>
                <div style={{ color: '#a8adb8' }}>per month</div>
                <div style={{ color: '#10b981', fontWeight: 'bold', marginTop: '8px' }}>{plan.credits}</div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0', color: '#a8adb8' }}>
                {plan.features.map((feature, j) => (
                  <li key={j} style={{ marginBottom: '10px' }}>✓ {feature}</li>
                ))}
              </ul>
              <Link href="/home" style={{ display: 'block', padding: '12px', background: plan.popular ? '#4f7cff' : '#2b3a6a', color: 'white', textAlign: 'center', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}>Get Started</Link>
            </div>
          ))}
        </div>
      </main>

      <footer style={{ background: '#1a2847', borderTop: '2px solid #2b3a6a', padding: '40px 20px', marginTop: '80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginBottom: '40px' }}>
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
      </footer>
    </div>
  );
}
