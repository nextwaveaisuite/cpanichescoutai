'use client';
import { useState, useEffect } from 'react';

// ============ SCORING ALGORITHMS ============
function calculateKeywordScore(keyword: string): number {
  const lowerKeyword = keyword.toLowerCase();
  const wordCount = keyword.split(' ').length;
  const length = keyword.length;
  const CPA_MODIFIERS = ['best', 'review', 'guide', 'how to', 'cheap', 'affordable', 'free', 'top', 'vs', 'comparison'];
  const HIGH_VALUE_NICHES = ['insurance', 'loan', 'mortgage', 'forex', 'casino', 'vpn', 'dating', 'cbd', 'crypto', 'weight loss', 'supplements'];

  let score = 50;
  const hasCPAModifier = CPA_MODIFIERS.some(mod => lowerKeyword.includes(mod));
  if (hasCPAModifier) score += 20;
  const isHighValueNiche = HIGH_VALUE_NICHES.some(niche => lowerKeyword.includes(niche));
  if (isHighValueNiche) score += 15;
  if (wordCount >= 3) score += 10;
  if (length > 25) score += 5;
  return Math.min(95, Math.max(15, score));
}

function calculateDifficultyScore(keyword: string): number {
  const wordCount = keyword.split(' ').length;
  const length = keyword.length;
  let score = 60;
  if (wordCount >= 3) score -= 15;
  if (length > 25) score -= 10;
  return Math.min(85, Math.max(15, score));
}

function calculateProfitScore(keyword: string): number {
  const lowerKeyword = keyword.toLowerCase();
  const wordCount = keyword.split(' ').length;
  const HIGH_VALUE_NICHES = ['insurance', 'loan', 'mortgage', 'forex', 'casino', 'vpn', 'dating', 'cbd', 'crypto', 'weight loss'];
  let score = 50;
  const isHighValue = HIGH_VALUE_NICHES.some(niche => lowerKeyword.includes(niche));
  if (isHighValue) score += 30;
  if (wordCount >= 3) score += 15;
  return Math.min(95, Math.max(20, score));
}

// ============ COMPONENTS ============
function EmailPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/email', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email }) });
    setSubmitted(true);
    setTimeout(() => setIsOpen(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
      <div style={{ background: '#1a2847', padding: '40px', borderRadius: '8px', maxWidth: '500px', width: '90%', position: 'relative' }}>
        <button onClick={() => setIsOpen(false)} style={{ position: 'absolute', top: '12px', right: '12px', background: 'none', border: 'none', color: '#a8adb8', fontSize: '24px', cursor: 'pointer' }}>✕</button>
        <h2 style={{ marginBottom: '8px', color: '#4f7cff' }}>Get Started Free! 🎯</h2>
        <p style={{ marginBottom: '24px', color: '#a8adb8' }}>Join thousands of CPA marketers finding profitable niches.</p>
        {submitted ? (
          <div style={{ background: '#10b981', color: 'white', padding: '15px', borderRadius: '4px' }}>✓ Thanks! Check your email.</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required style={{ width: '100%', padding: '12px', marginBottom: '12px', borderRadius: '4px', border: '1px solid #2b3a6a', background: '#0b1220', color: '#fff' }} />
            <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: '100%', padding: '12px', marginBottom: '12px', borderRadius: '4px', border: '1px solid #2b3a6a', background: '#0b1220', color: '#fff' }} />
            <button type="submit" style={{ width: '100%', padding: '12px', background: '#4f7cff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Get Free Access</button>
          </form>
        )}
      </div>
    </div>
  );
}

// ============ MAIN PAGE ============
export default function Home() {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const analyze = async () => {
    setLoading(true);
    const score = calculateKeywordScore(keyword);
    const difficulty = calculateDifficultyScore(keyword);
    const profit = calculateProfitScore(keyword);
    let verdict = 'SKIP';
    if (score > 60) verdict = 'BUILD';
    else if (score > 40) verdict = 'MONITOR';
    
    setResults({
      keyword,
      score,
      difficulty,
      profit,
      traffic: Math.floor(Math.random() * 10000) + 500,
      competition: Math.floor(Math.random() * 100),
      verdict,
      offers: [
        { network: 'ClickBank', payout: 45, category: 'Digital Products' },
        { network: 'CJ Affiliate', payout: 35, category: 'Affiliate Network' },
        { network: 'Impact', payout: 40, category: 'Performance Marketing' },
        { network: 'Rakuten', payout: 30, category: 'Cashback & Rewards' },
        { network: 'ShareASale', payout: 38, category: 'Affiliate Network' }
      ],
      domains: [
        { domain: keyword.replace(/\s+/g, '') + '.com', price: 12, verdict: 'BUY' },
        { domain: keyword.replace(/\s+/g, '') + '.net', price: 8, verdict: 'BUY' },
        { domain: 'the' + keyword.replace(/\s+/g, '') + '.com', price: 25, verdict: 'CONSIDER' }
      ]
    });
    setLoading(false);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0b1220', color: '#fff' }}>
      <EmailPopup />
      
      {/* HEADER */}
      <header style={{ background: '#1a2847', padding: '20px', borderBottom: '1px solid #2b3a6a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ margin: 0, fontSize: '1.5rem' }}>🎯 CPA Niche Scout AI 2.0</h1>
          <nav style={{ display: 'flex', gap: '20px' }}>
            <button onClick={() => setActiveTab('home')} style={{ background: 'none', border: 'none', color: activeTab === 'home' ? '#4f7cff' : '#a8adb8', cursor: 'pointer', fontSize: '1rem' }}>Home</button>
            <button onClick={() => setActiveTab('pricing')} style={{ background: 'none', border: 'none', color: activeTab === 'pricing' ? '#4f7cff' : '#a8adb8', cursor: 'pointer', fontSize: '1rem' }}>Pricing</button>
            <button onClick={() => setActiveTab('dashboard')} style={{ background: 'none', border: 'none', color: activeTab === 'dashboard' ? '#4f7cff' : '#a8adb8', cursor: 'pointer', fontSize: '1rem' }}>Dashboard</button>
          </nav>
        </div>
      </header>

      {/* HOME TAB */}
      {activeTab === 'home' && (
        <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Find Profitable CPA Niches</h1>
            <p style={{ fontSize: '1.2rem', color: '#a8adb8', marginBottom: '40px' }}>AI-powered keyword analysis, CPA offers, domain finder, and website blueprints</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '60px' }}>
            {[
              { icon: '📊', title: 'Keyword Analysis', desc: 'Score keywords by profit potential' },
              { icon: '💰', title: 'CPA Offers', desc: 'Match with 5 major CPA networks' },
              { icon: '🌐', title: 'Domain Finder', desc: 'Find aged domains with traffic' },
              { icon: '📐', title: 'Blueprint', desc: 'Complete website structure' },
              { icon: '📥', title: 'Export', desc: 'Professional analysis reports' },
              { icon: '💳', title: 'Stripe Ready', desc: 'Accept payments for credits' }
            ].map((item, i) => (
              <div key={i} style={{ background: '#1a2847', padding: '20px', borderRadius: '8px' }}>
                <h3 style={{ color: '#4f7cff', marginBottom: '10px' }}>{item.icon} {item.title}</h3>
                <p style={{ color: '#a8adb8' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* PRICING TAB */}
      {activeTab === 'pricing' && (
        <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '60px' }}>Simple, Transparent Pricing</h1>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {[
              { name: 'Starter', price: 9.99, credits: 20 },
              { name: 'Professional', price: 19.00, credits: 50, popular: true },
              { name: 'Enterprise', price: 29.00, credits: 100 }
            ].map((plan) => (
              <div key={plan.name} style={{ background: '#1a2847', padding: '30px', borderRadius: '8px', border: plan.popular ? '2px solid #4f7cff' : '1px solid #2b3a6a', transform: plan.popular ? 'scale(1.05)' : 'scale(1)' }}>
                {plan.popular && <div style={{ background: '#4f7cff', color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '15px', display: 'inline-block' }}>Most Popular</div>}
                <h3 style={{ marginBottom: '10px' }}>{plan.name}</h3>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#4f7cff', marginBottom: '5px' }}>${plan.price.toFixed(2)}</div>
                <div style={{ color: '#a8adb8', marginBottom: '20px' }}>{plan.credits} Credits</div>
                <button style={{ width: '100%', padding: '12px', background: plan.popular ? '#4f7cff' : '#2b3a6a', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Get Started</button>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* DASHBOARD TAB */}
      {activeTab === 'dashboard' && (
        <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
          <h1 style={{ marginBottom: '30px' }}>Keyword Analysis Dashboard</h1>
          <div style={{ background: '#1a2847', padding: '20px', borderRadius: '8px', marginBottom: '30px', display: 'flex', gap: '10px' }}>
            <input type="text" placeholder="Enter a keyword (e.g., best weight loss pills)" value={keyword} onChange={(e) => setKeyword(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && analyze()} style={{ flex: 1, padding: '12px', borderRadius: '4px', border: '1px solid #2b3a6a', background: '#0b1220', color: '#fff' }} />
            <button onClick={analyze} disabled={loading} style={{ padding: '12px 30px', background: '#4f7cff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>{loading ? 'Analyzing...' : 'Analyze'}</button>
          </div>

          {results && (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                <div style={{ background: '#1a2847', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #4f7cff' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4f7cff' }}>{results.score}</div>
                  <div style={{ color: '#a8adb8', fontSize: '0.9rem' }}>Keyword Score</div>
                </div>
                <div style={{ background: '#1a2847', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>{results.difficulty}</div>
                  <div style={{ color: '#a8adb8', fontSize: '0.9rem' }}>Difficulty</div>
                </div>
                <div style={{ background: '#1a2847', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #f59e0b' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b' }}>{results.profit}</div>
                  <div style={{ color: '#a8adb8', fontSize: '0.9rem' }}>Profit Score</div>
                </div>
                <div style={{ background: '#1a2847', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #ef4444' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: results.verdict === 'BUILD' ? '#10b981' : results.verdict === 'MONITOR' ? '#f59e0b' : '#ef4444' }}>{results.verdict}</div>
                  <div style={{ color: '#a8adb8', fontSize: '0.9rem' }}>Verdict</div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                <div style={{ background: '#1a2847', padding: '20px', borderRadius: '8px' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '15px' }}>CPA Offers</h3>
                  {results.offers.map((o: any, i: number) => (
                    <div key={i} style={{ padding: '10px', borderBottom: '1px solid #2b3a6a', color: '#a8adb8' }}>
                      <strong>{o.network}</strong> - ${o.payout} payout
                    </div>
                  ))}
                </div>
                <div style={{ background: '#1a2847', padding: '20px', borderRadius: '8px' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '15px' }}>Domain Suggestions</h3>
                  {results.domains.map((d: any, i: number) => (
                    <div key={i} style={{ padding: '10px', borderBottom: '1px solid #2b3a6a', color: '#a8adb8' }}>
                      <strong>{d.domain}</strong> - ${d.price}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {!results && !loading && (
            <div style={{ textAlign: 'center', color: '#a8adb8', padding: '60px 20px' }}>
              <p>Enter a keyword and click "Analyze" to get started</p>
            </div>
          )}
        </main>
      )}
    </div>
  );
}
