'use client';
import { useState } from 'react';
import Link from 'next/link';

const NICHE_DATA = {
  'weight loss': {
    keywords: [
      { keyword: 'best weight loss pills 2025', traffic: 8900, competition: 35, difficulty: 42 },
      { keyword: 'weight loss supplements that work', traffic: 7200, competition: 28, difficulty: 38 },
      { keyword: 'fastest way to lose weight', traffic: 6500, competition: 32, difficulty: 40 },
      { keyword: 'weight loss programs for women', traffic: 5800, competition: 25, difficulty: 35 },
      { keyword: 'natural weight loss remedies', traffic: 5200, competition: 22, difficulty: 32 },
      { keyword: 'weight loss without exercise', traffic: 4900, competition: 20, difficulty: 30 },
      { keyword: 'weight loss meal plans free', traffic: 4600, competition: 18, difficulty: 28 },
      { keyword: 'best diet for weight loss', traffic: 4300, competition: 25, difficulty: 33 },
    ],
    offers: [
      { network: 'ClickBank', payout: '$45', commission: '50%' },
      { network: 'CJ Affiliate', payout: '$35', commission: '40%' },
      { network: 'Impact', payout: '$40', commission: '45%' },
      { network: 'Rakuten', payout: '$30', commission: '35%' },
      { network: 'ShareASale', payout: '$38', commission: '42%' },
    ],
    domains: [
      { domain: 'WeightLossTips.com', age: 12, traffic: 2400, backlinks: 450, authority: 42, price: '$18' },
      { domain: 'BestDietPlans.net', age: 8, traffic: 1800, backlinks: 320, authority: 35, price: '$12' },
      { domain: 'NaturalWeightLoss.org', age: 15, traffic: 3200, backlinks: 680, authority: 52, price: '$25' },
      { domain: 'WeightLossSecrets.com', age: 10, traffic: 2100, backlinks: 380, authority: 38, price: '$15' },
      { domain: 'HealthyWeightLoss.net', age: 9, traffic: 1900, backlinks: 340, authority: 36, price: '$14' },
      { domain: 'FitnessDiet.com', age: 14, traffic: 2800, backlinks: 520, authority: 48, price: '$22' },
      { domain: 'WeightLossJourney.org', age: 11, traffic: 2200, backlinks: 400, authority: 40, price: '$16' },
      { domain: 'BestWeightLossTips.net', age: 7, traffic: 1600, backlinks: 280, authority: 32, price: '$10' },
    ],
    blueprint: {
      pages: ['Homepage', 'Weight Loss Tips', 'Best Supplements', 'Success Stories', 'Meal Plans', 'Exercise Guide', 'FAQ', 'Contact'],
      strategy: 'Create pillar content on weight loss, cluster around supplements, meal plans, and exercises. Monetize with CPA offers.',
      monetization: 'ClickBank weight loss products, CPA supplement offers, email list building for repeat commissions'
    },
    scripts: [
      { title: 'Weight Loss Supplement Review', duration: '60 sec', script: 'HOOK: "I lost 30 pounds without dieting..." PROBLEM: "Most weight loss pills don\'t work..." SOLUTION: "This supplement changed my life..." CTA: "Click link in bio to get yours today!"' },
      { title: 'Best Diet Plans Comparison', duration: '60 sec', script: 'HOOK: "Tried 5 diets, this one works best..." PROBLEM: "Confusing diet options..." SOLUTION: "Here\'s the comparison..." CTA: "Get your free guide now!"' },
    ]
  },
  'insurance': {
    keywords: [
      { keyword: 'cheap car insurance quotes', traffic: 12000, competition: 45, difficulty: 50 },
      { keyword: 'best life insurance rates', traffic: 9800, competition: 40, difficulty: 48 },
      { keyword: 'affordable health insurance plans', traffic: 8500, competition: 38, difficulty: 45 },
      { keyword: 'home insurance quotes online', traffic: 7200, competition: 35, difficulty: 42 },
      { keyword: 'pet insurance coverage', traffic: 5600, competition: 28, difficulty: 35 },
      { keyword: 'travel insurance plans', traffic: 4800, competition: 25, difficulty: 32 },
      { keyword: 'disability insurance rates', traffic: 4200, competition: 22, difficulty: 30 },
      { keyword: 'umbrella insurance coverage', traffic: 3600, competition: 20, difficulty: 28 },
    ],
    offers: [
      { network: 'ClickBank', payout: '$55', commission: '55%' },
      { network: 'CJ Affiliate', payout: '$45', commission: '50%' },
      { network: 'Impact', payout: '$50', commission: '52%' },
      { network: 'Rakuten', payout: '$40', commission: '45%' },
      { network: 'ShareASale', payout: '$48', commission: '50%' },
    ],
    domains: [
      { domain: 'InsuranceQuotes.com', age: 16, traffic: 4500, backlinks: 850, authority: 58, price: '$35' },
      { domain: 'CarInsuranceTips.net', age: 10, traffic: 2800, backlinks: 520, authority: 45, price: '$20' },
      { domain: 'BestInsuranceRates.org', age: 13, traffic: 3600, backlinks: 680, authority: 52, price: '$28' },
      { domain: 'InsuranceComparison.com', age: 11, traffic: 3200, backlinks: 600, authority: 48, price: '$24' },
      { domain: 'AffordableInsurance.net', age: 9, traffic: 2400, backlinks: 450, authority: 40, price: '$16' },
      { domain: 'InsuranceGuide.org', age: 14, traffic: 3800, backlinks: 720, authority: 54, price: '$30' },
      { domain: 'QuickInsuranceQuotes.com', age: 8, traffic: 2100, backlinks: 380, authority: 36, price: '$14' },
      { domain: 'InsuranceSavings.net', age: 12, traffic: 3100, backlinks: 580, authority: 46, price: '$22' },
    ],
    blueprint: {
      pages: ['Homepage', 'Car Insurance', 'Home Insurance', 'Life Insurance', 'Health Insurance', 'Quotes', 'Reviews', 'Contact'],
      strategy: 'Create comparison content, quote tools, and insurance guides. Build email list for repeat commissions.',
      monetization: 'Insurance CPA offers, affiliate commissions, email marketing for high-ticket policies'
    },
    scripts: [
      { title: 'Car Insurance Savings', duration: '60 sec', script: 'HOOK: "I saved $1200 on car insurance..." PROBLEM: "Insurance companies overcharge..." SOLUTION: "Here\'s how to get quotes..." CTA: "Get your free quotes now!"' },
      { title: 'Life Insurance Guide', duration: '60 sec', script: 'HOOK: "Protect your family for pennies..." PROBLEM: "Life insurance seems expensive..." SOLUTION: "It\'s actually affordable..." CTA: "See rates today!"' },
    ]
  }
};

export default function Dashboard() {
  const [niche, setNiche] = useState('weight loss');
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [resetKey, setResetKey] = useState(0);

  const data = NICHE_DATA[niche as keyof typeof NICHE_DATA] || NICHE_DATA['weight loss'];

  const handleReset = () => {
    setNiche('weight loss');
    setActiveTool(null);
    setResetKey(prev => prev + 1);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0b1220', color: '#fff' }}>
      {/* HEADER */}
      <header style={{ background: 'linear-gradient(135deg, #1a2847 0%, #2b3a6a 100%)', padding: '20px', borderBottom: '2px solid #4f7cff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/home" style={{ fontSize: '1.8rem', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none' }}>🚀 CPA Niche Scout AI</Link>
          <nav style={{ display: 'flex', gap: '20px' }}>
            <Link href="/home" style={{ color: '#a8adb8', textDecoration: 'none' }}>Home</Link>
            <Link href="/pricing" style={{ color: '#a8adb8', textDecoration: 'none' }}>Pricing</Link>
            <Link href="/about" style={{ color: '#a8adb8', textDecoration: 'none' }}>About</Link>
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 20px' }}>
        {!activeTool ? (
          <>
            {/* SEARCH */}
            <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a', marginBottom: '40px' }}>
              <h2 style={{ color: '#4f7cff', marginBottom: '20px' }}>🔍 Enter Your Niche</h2>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <input key={resetKey} type="text" value={niche} onChange={(e) => setNiche(e.target.value)} placeholder="e.g., weight loss, insurance, forex..." style={{ flex: 1, minWidth: '200px', padding: '12px', borderRadius: '6px', border: '1px solid #2b3a6a', background: '#0b1220', color: '#fff' }} />
                <button onClick={handleReset} style={{ padding: '12px 25px', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>🔄 Reset</button>
              </div>
            </div>

            {/* TOOLS */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              {[
                { icon: '📊', title: 'Keywords', desc: 'Find high-traffic keywords' },
                { icon: '💰', title: 'Offers', desc: 'Match CPA offers' },
                { icon: '🌐', title: 'Domains', desc: 'Find expired domains' },
                { icon: '📐', title: 'Blueprint', desc: 'Website structure' },
                { icon: '🎬', title: 'Scripts', desc: 'Video scripts' },
              ].map((tool) => (
                <button key={tool.title} onClick={() => setActiveTool(tool.title)} style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '2px solid #2b3a6a', cursor: 'pointer', transition: 'all 0.3s', color: '#fff' }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#4f7cff')} onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#2b3a6a')}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{tool.icon}</div>
                  <h3 style={{ color: '#4f7cff', marginBottom: '8px' }}>{tool.title}</h3>
                  <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>{tool.desc}</p>
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* BACK BUTTON */}
            <button onClick={() => setActiveTool(null)} style={{ padding: '10px 20px', background: '#2b3a6a', color: '#a8adb8', border: 'none', borderRadius: '6px', cursor: 'pointer', marginBottom: '30px', fontWeight: 'bold' }}>← Back</button>

            {/* KEYWORDS */}
            {activeTool === 'Keywords' && (
              <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
                <h2 style={{ color: '#4f7cff', marginBottom: '20px' }}>📊 Keywords for "{niche}"</h2>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid #2b3a6a' }}>
                        <th style={{ textAlign: 'left', padding: '12px', color: '#4f7cff' }}>Keyword</th>
                        <th style={{ textAlign: 'center', padding: '12px', color: '#4f7cff' }}>Traffic</th>
                        <th style={{ textAlign: 'center', padding: '12px', color: '#4f7cff' }}>Competition</th>
                        <th style={{ textAlign: 'center', padding: '12px', color: '#4f7cff' }}>Difficulty</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.keywords.map((kw, i) => (
                        <tr key={i} style={{ borderBottom: '1px solid #2b3a6a' }}>
                          <td style={{ padding: '12px', color: '#a8adb8' }}>{kw.keyword}</td>
                          <td style={{ textAlign: 'center', padding: '12px', color: '#10b981' }}>{kw.traffic}</td>
                          <td style={{ textAlign: 'center', padding: '12px', color: '#f59e0b' }}>{kw.competition}</td>
                          <td style={{ textAlign: 'center', padding: '12px', color: '#ef4444' }}>{kw.difficulty}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* OFFERS */}
            {activeTool === 'Offers' && (
              <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
                <h2 style={{ color: '#4f7cff', marginBottom: '20px' }}>💰 CPA Offers for "{niche}"</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                  {data.offers.map((offer, i) => (
                    <div key={i} style={{ background: '#0b1220', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                      <h4 style={{ color: '#4f7cff', marginBottom: '10px' }}>{offer.network}</h4>
                      <p style={{ color: '#a8adb8', margin: '5px 0' }}>Payout: <strong>{offer.payout}</strong></p>
                      <p style={{ color: '#a8adb8', margin: '5px 0' }}>Commission: <strong>{offer.commission}</strong></p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* DOMAINS */}
            {activeTool === 'Domains' && (
              <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
                <h2 style={{ color: '#4f7cff', marginBottom: '20px' }}>🌐 Expired Domains for "{niche}"</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px' }}>
                  {data.domains.map((domain, i) => (
                    <div key={i} style={{ background: '#0b1220', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                      <h4 style={{ color: '#4f7cff', marginBottom: '12px' }}>{domain.domain}</h4>
                      <p style={{ color: '#a8adb8', margin: '5px 0', fontSize: '0.9rem' }}>Age: <strong>{domain.age} years</strong></p>
                      <p style={{ color: '#a8adb8', margin: '5px 0', fontSize: '0.9rem' }}>Traffic: <strong>{domain.traffic}/mo</strong></p>
                      <p style={{ color: '#a8adb8', margin: '5px 0', fontSize: '0.9rem' }}>Backlinks: <strong>{domain.backlinks}</strong></p>
                      <p style={{ color: '#a8adb8', margin: '5px 0', fontSize: '0.9rem' }}>Authority: <strong>{domain.authority}</strong></p>
                      <p style={{ color: '#10b981', margin: '10px 0 0 0', fontSize: '1rem', fontWeight: 'bold' }}>Price: {domain.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* BLUEPRINT */}
            {activeTool === 'Blueprint' && (
              <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
                <h2 style={{ color: '#4f7cff', marginBottom: '20px' }}>📐 Website Blueprint for "{niche}"</h2>
                <div style={{ background: '#0b1220', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a', marginBottom: '20px' }}>
                  <h4 style={{ color: '#4f7cff', marginBottom: '10px' }}>Pages:</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px' }}>
                    {data.blueprint.pages.map((page, i) => (
                      <div key={i} style={{ background: '#1a2847', padding: '12px', borderRadius: '6px', border: '1px solid #2b3a6a', color: '#a8adb8', textAlign: 'center' }}>{page}</div>
                    ))}
                  </div>
                </div>
                <div style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a', marginBottom: '20px' }}>
                  <h4 style={{ color: '#4f7cff', marginBottom: '10px' }}>Strategy:</h4>
                  <p style={{ color: '#a8adb8', margin: 0 }}>{data.blueprint.strategy}</p>
                </div>
                <div style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                  <h4 style={{ color: '#4f7cff', marginBottom: '10px' }}>Monetization:</h4>
                  <p style={{ color: '#a8adb8', margin: 0 }}>{data.blueprint.monetization}</p>
                </div>
              </div>
            )}

            {/* SCRIPTS */}
            {activeTool === 'Scripts' && (
              <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
                <h2 style={{ color: '#4f7cff', marginBottom: '20px' }}>🎬 Video Scripts for "{niche}"</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                  {data.scripts.map((script, i) => (
                    <div key={i} style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                      <h4 style={{ color: '#4f7cff', marginBottom: '8px' }}>{script.title}</h4>
                      <p style={{ color: '#a8adb8', fontSize: '0.9rem', marginBottom: '15px' }}>⏱️ {script.duration}</p>
                      <p style={{ color: '#a8adb8', lineHeight: '1.6', margin: 0, fontSize: '0.95rem' }}>{script.script}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </main>

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
    </div>
  );
}
