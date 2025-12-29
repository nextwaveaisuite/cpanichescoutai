'use client';
import { useState } from 'react';

const PLANS = [
  { name: 'Starter', price: 9.99, credits: 20, description: 'Perfect for getting started', features: ['20 Credits', 'Basic Analysis', 'Email Support'] },
  { name: 'Professional', price: 19.00, credits: 50, description: 'Most popular for active marketers', features: ['50 Credits', 'Advanced Analysis', 'Priority Support', 'Export Reports'], popular: true },
  { name: 'Enterprise', price: 29.00, credits: 100, description: 'For serious niche hunters', features: ['100 Credits', 'Full Access', 'Bulk Analysis', '24/7 Support', 'API Access'] }
];

export default function PricingPage() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleCheckout = async (planName: string, price: number) => {
    setLoading(planName);
    try {
      const res = await fetch('/api/checkout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ planName, price }) });
      const { url } = await res.json();
      if (url) window.location.href = url;
    } catch (error) {
      console.error('Checkout error:', error);
    }
    setLoading(null);
  };

  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Simple, Transparent Pricing</h1>
        <p style={{ fontSize: '1.1rem', color: '#a8adb8' }}>Choose the plan that fits your needs</p>
      </div>

      <div className="grid-3" style={{ marginBottom: '60px' }}>
        {PLANS.map((plan: any) => (
          <div key={plan.name} className="card" style={{ border: plan.popular ? '2px solid #4f7cff' : '1px solid #2b3a6a', position: 'relative', transform: plan.popular ? 'scale(1.05)' : 'scale(1)', transition: 'all 0.3s' }}>
            {plan.popular && <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#4f7cff', color: '#fff', padding: '4px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600 }}>Most Popular</div>}
            <h3 style={{ marginBottom: '8px' }}>{plan.name}</h3>
            <p style={{ color: '#a8adb8', marginBottom: '24px', fontSize: '0.95rem' }}>{plan.description}</p>
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#4f7cff' }}>${plan.price.toFixed(2)}</div>
              <div style={{ color: '#a8adb8', fontSize: '0.9rem' }}>{plan.credits} Credits</div>
            </div>
            <button onClick={() => handleCheckout(plan.name, plan.price)} disabled={loading === plan.name} style={{ width: '100%', justifyContent: 'center', marginBottom: '24px' }} className={plan.popular ? '' : 'secondary'}>
              {loading === plan.name ? 'Processing...' : 'Get Started'}
            </button>
            <div style={{ borderTop: '1px solid #2b3a6a', paddingTop: '16px' }}>
              {plan.features.map((feature: string) => <div key={feature} style={{ marginBottom: '8px', color: '#a8adb8', fontSize: '0.9rem' }}>✓ {feature}</div>)}
            </div>
          </div>
        ))}
      </div>

      <div className="card" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <h3>Questions about pricing?</h3>
        <p style={{ color: '#a8adb8', marginBottom: '16px' }}>Contact our support team for custom plans or bulk discounts.</p>
        <a href="mailto:support@cpanichescout.com" className="button">Contact Support</a>
      </div>
    </div>
  );
}
