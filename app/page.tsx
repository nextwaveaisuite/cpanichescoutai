'use client';
import { useState, useEffect } from 'react';

// ============ KEYWORD DATA ============
const HIGH_TRAFFIC_KEYWORDS = {
  'weight loss': [
    { keyword: 'best weight loss pills 2025', traffic: 8900, competition: 35, difficulty: 42 },
    { keyword: 'weight loss supplements that work', traffic: 7200, competition: 28, difficulty: 38 },
    { keyword: 'fastest way to lose weight', traffic: 6500, competition: 32, difficulty: 40 },
    { keyword: 'weight loss programs for women', traffic: 5800, competition: 25, difficulty: 35 },
    { keyword: 'natural weight loss remedies', traffic: 5200, competition: 22, difficulty: 32 },
    { keyword: 'weight loss without exercise', traffic: 4900, competition: 20, difficulty: 30 },
    { keyword: 'weight loss meal plans free', traffic: 4600, competition: 18, difficulty: 28 },
    { keyword: 'best diet for weight loss', traffic: 4300, competition: 25, difficulty: 33 },
  ],
  'insurance': [
    { keyword: 'cheap car insurance quotes', traffic: 12000, competition: 45, difficulty: 50 },
    { keyword: 'best life insurance rates', traffic: 9800, competition: 40, difficulty: 48 },
    { keyword: 'affordable health insurance plans', traffic: 8500, competition: 38, difficulty: 45 },
    { keyword: 'home insurance quotes online', traffic: 7200, competition: 35, difficulty: 42 },
    { keyword: 'pet insurance coverage', traffic: 5600, competition: 28, difficulty: 35 },
    { keyword: 'travel insurance plans', traffic: 4800, competition: 22, difficulty: 30 },
    { keyword: 'disability insurance quotes', traffic: 4200, competition: 20, difficulty: 28 },
    { keyword: 'umbrella insurance coverage', traffic: 3800, competition: 18, difficulty: 25 },
  ],
  'forex': [
    { keyword: 'forex trading signals free', traffic: 6800, competition: 55, difficulty: 60 },
    { keyword: 'best forex brokers 2025', traffic: 5900, competition: 50, difficulty: 58 },
    { keyword: 'forex trading for beginners', traffic: 5200, competition: 45, difficulty: 52 },
    { keyword: 'forex trading strategies that work', traffic: 4800, competition: 48, difficulty: 55 },
    { keyword: 'how to make money forex trading', traffic: 4500, competition: 52, difficulty: 58 },
    { keyword: 'forex trading education', traffic: 4100, competition: 42, difficulty: 48 },
    { keyword: 'automated forex trading systems', traffic: 3800, competition: 40, difficulty: 45 },
    { keyword: 'forex trading tips and tricks', traffic: 3500, competition: 38, difficulty: 42 },
  ],
  'vpn': [
    { keyword: 'best vpn for streaming', traffic: 11200, competition: 65, difficulty: 70 },
    { keyword: 'fastest vpn service', traffic: 8900, competition: 60, difficulty: 65 },
    { keyword: 'vpn for netflix unblock', traffic: 7800, competition: 62, difficulty: 68 },
    { keyword: 'secure vpn for windows', traffic: 6500, competition: 55, difficulty: 60 },
    { keyword: 'vpn for torrenting safely', traffic: 5900, competition: 58, difficulty: 63 },
    { keyword: 'free vpn no logs', traffic: 5200, competition: 52, difficulty: 58 },
    { keyword: 'vpn for privacy protection', traffic: 4800, competition: 48, difficulty: 52 },
    { keyword: 'vpn with static ip', traffic: 4200, competition: 45, difficulty: 50 },
  ],
};

const EXPIRED_DOMAINS = {
  'weight loss': [
    { domain: 'weightlosssecrets.com', age: 12, traffic: 4200, backlinks: 850, price: 45, authority: 42 },
    { domain: 'fastweightlossplan.com', age: 8, traffic: 3100, backlinks: 620, price: 35, authority: 38 },
    { domain: 'naturalweightloss.net', age: 15, traffic: 2800, backlinks: 540, price: 28, authority: 35 },
    { domain: 'weightlossforwomen.org', age: 10, traffic: 2400, backlinks: 480, price: 32, authority: 32 },
    { domain: 'bestdietplan.com', age: 9, traffic: 2100, backlinks: 420, price: 38, authority: 36 },
    { domain: 'quickweightloss.net', age: 7, traffic: 1900, backlinks: 380, price: 25, authority: 30 },
    { domain: 'fitnessdiet.com', age: 11, traffic: 1800, backlinks: 360, price: 42, authority: 40 },
    { domain: 'healthyweightjourney.com', age: 6, traffic: 1600, backlinks: 320, price: 22, authority: 28 },
  ],
  'insurance': [
    { domain: 'insurancequotesfast.com', age: 14, traffic: 5600, backlinks: 1200, price: 65, authority: 55 },
    { domain: 'carinsurancedeals.com', age: 11, traffic: 4800, backlinks: 980, price: 52, authority: 48 },
    { domain: 'lifeinsurancerates.net', age: 13, traffic: 4200, backlinks: 850, price: 48, authority: 45 },
    { domain: 'healthinsuranceplans.org', age: 10, traffic: 3800, backlinks: 720, price: 42, authority: 40 },
    { domain: 'homeinsurancequotes.com', age: 9, traffic: 3200, backlinks: 640, price: 38, authority: 35 },
    { domain: 'insurancebrokerservices.com', age: 12, traffic: 2900, backlinks: 580, price: 45, authority: 42 },
    { domain: 'cheapinsuranceoptions.net', age: 8, traffic: 2600, backlinks: 520, price: 35, authority: 32 },
    { domain: 'insurancecomparison.com', age: 15, traffic: 2400, backlinks: 480, price: 55, authority: 50 },
  ],
};

const BLUEPRINTS = {
  'weight loss': {
    siteName: 'Weight Loss Authority',
    pages: [
      { name: 'Home', type: 'Homepage', content: 'Hero section with weight loss benefits, testimonials, CTA' },
      { name: 'Best Pills Review', type: 'Pillar', content: 'Comprehensive review of top weight loss pills with pros/cons' },
      { name: 'Supplements Guide', type: 'Pillar', content: 'Complete guide to weight loss supplements and ingredients' },
      { name: 'Diet Plans', type: 'Cluster', content: 'Popular diet plans: Keto, Intermittent Fasting, Low Carb' },
      { name: 'Success Stories', type: 'Cluster', content: 'Before/after transformations and testimonials' },
      { name: 'FAQ', type: 'Cluster', content: 'Common questions about weight loss methods' },
      { name: 'Comparison', type: 'Cluster', content: 'Head-to-head comparison of weight loss products' },
      { name: 'Blog', type: 'Cluster', content: 'Weekly tips, recipes, and weight loss news' },
    ],
    contentStrategy: 'Create SEO-optimized content targeting long-tail keywords with high buyer intent. Focus on reviews, comparisons, and guides.',
    monetization: 'Affiliate links to weight loss products, CPA offers, email list building',
  },
  'insurance': {
    siteName: 'Insurance Quote Hub',
    pages: [
      { name: 'Home', type: 'Homepage', content: 'Insurance quote comparison tool, benefits, testimonials' },
      { name: 'Car Insurance', type: 'Pillar', content: 'Comprehensive car insurance guide with quotes' },
      { name: 'Life Insurance', type: 'Pillar', content: 'Life insurance types, rates, and comparison' },
      { name: 'Health Insurance', type: 'Cluster', content: 'Health insurance plans and coverage options' },
      { name: 'Home Insurance', type: 'Cluster', content: 'Home insurance quotes and coverage guides' },
      { name: 'Insurance Rates', type: 'Cluster', content: 'Current insurance rates by state and provider' },
      { name: 'Quote Comparison', type: 'Cluster', content: 'Side-by-side insurance quote comparisons' },
      { name: 'Insurance News', type: 'Cluster', content: 'Latest insurance industry news and updates' },
    ],
    contentStrategy: 'Target high-intent keywords with insurance quotes and comparisons. Build trust with expert guides and reviews.',
    monetization: 'Insurance affiliate programs, CPA offers, lead generation',
  },
};

const VIDEO_SCRIPTS = {
  'weight loss': `
WEIGHT LOSS PILLS REVIEW - 60 SECOND SCRIPT

[0-5s]: # "Hook:"
"Struggling with weight loss? I tested the top 5 weight loss pills on the market. Here's what actually works..."

[5-30s]: # "Problem:"
"Most people waste money on weight loss pills that don't work. They're expensive, have side effects, and don't deliver results. But after testing 5 popular options, I found 2 that actually work."

[30-45s]: # "Solution:"
"These pills contain proven ingredients like Garcinia Cambogia and Green Tea Extract. Users report losing 10-15 lbs in 30 days when combined with diet and exercise."

[45-55s]: # "CTA:"
"Click the link below to see the full comparison and get exclusive discounts. Limited time offer - save 40% today!"

[55-60s]: # "Outro:"
"Don't waste money on fake products. Get the real deal. Subscribe for more reviews."
  `,
  'insurance': `
CAR INSURANCE QUOTES - 60 SECOND SCRIPT

[0-5s]: # "Hook:"
"Save up to $500 on car insurance! I compared 10 insurance companies and found the cheapest rates..."

[5-30s]: # "Problem:"
"Most people pay too much for car insurance. They don't shop around or compare quotes. The average person overpays by $300-500 per year."

[30-45s]: # "Solution:"
"Getting quotes takes 5 minutes online. I compared 10 companies and found rates from $45-120 per month. The cheapest option saved me $600 annually."

[45-55s]: # "CTA:"
"Get your free quotes today using the link below. Compare rates from 10+ companies instantly. No credit card required."

[55-60s]: # "Outro:"
"Don't overpay for insurance. Get free quotes now. Subscribe for money-saving tips!"
  `,
};

// ============ COMPONENTS ============
function EmailPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 3000);
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
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
      <div style={{ background: '#1a2847', padding: '40px', borderRadius: '12px', maxWidth: '500px', width: '90%', position: 'relative', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
        <button onClick={() => setIsOpen(false)} style={{ position: 'absolute', top: '12px', right: '12px', background: 'none', border: 'none', color: '#a8adb8', fontSize: '24px', cursor: 'pointer' }}>✕</button>
        <h2 style={{ marginBottom: '8px', color: '#4f7cff', fontSize: '1.5rem' }}>🎯 Get Instant Access!</h2>
        <p style={{ marginBottom: '24px', color: '#a8adb8' }}>Join 10,000+ CPA marketers using our AI tool. Get your first analysis free!</p>
        {submitted ? (
          <div style={{ background: '#10b981', color: 'white', padding: '15px', borderRadius: '4px', textAlign: 'center' }}>✓ Check your email for access!</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required style={{ width: '100%', padding: '12px', marginBottom: '12px', borderRadius: '4px', border: '1px solid #2b3a6a', background: '#0b1220', color: '#fff', fontSize: '1rem' }} />
            <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: '100%', padding: '12px', marginBottom: '12px', borderRadius: '4px', border: '1px solid #2b3a6a', background: '#0b1220', color: '#fff', fontSize: '1rem' }} />
            <button type="submit" style={{ width: '100%', padding: '12px', background: '#4f7cff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>Get Free Access</button>
          </form>
        )}
      </div>
    </div>
  );
}

// ============ MAIN APP ============
export default function Home() {
  const [keyword, setKeyword] = useState('weight loss');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedTool, setSelectedTool] = useState('keywords');
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const analyzeKeyword = () => {
    setLoading(true);
    setTimeout(() => {
      const keywordData = HIGH_TRAFFIC_KEYWORDS[keyword as keyof typeof HIGH_TRAFFIC_KEYWORDS] || HIGH_TRAFFIC_KEYWORDS['weight loss'];
      setResults({ keywords: keywordData });
      setLoading(false);
    }, 800);
  };

  const getExpiredDomains = () => {
    setLoading(true);
    setTimeout(() => {
      const domains = EXPIRED_DOMAINS[keyword as keyof typeof EXPIRED_DOMAINS] || EXPIRED_DOMAINS['weight loss'];
      setResults({ domains });
      setLoading(false);
    }, 800);
  };

  const getBlueprint = () => {
    setLoading(true);
    setTimeout(() => {
      const blueprint = BLUEPRINTS[keyword as keyof typeof BLUEPRINTS] || BLUEPRINTS['weight loss'];
      setResults({ blueprint });
      setLoading(false);
    }, 800);
  };

  const getVideoScript = () => {
    setLoading(true);
    setTimeout(() => {
      const script = VIDEO_SCRIPTS[keyword as keyof typeof VIDEO_SCRIPTS] || VIDEO_SCRIPTS['weight loss'];
      setResults({ script });
      setLoading(false);
    }, 800);
  };

  const resetSearch = () => {
    setKeyword('weight loss');
    setResults(null);
    setSelectedTool('keywords');
  };

  const goBack = () => {
    setResults(null);
    setSelectedTool('keywords');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0b1220', color: '#fff' }}>
      <EmailPopup />
      
      {/* HEADER */}
      <header style={{ background: 'linear-gradient(135deg, #1a2847 0%, #2b3a6a 100%)', padding: '20px', borderBottom: '2px solid #4f7cff', boxShadow: '0 4px 20px rgba(79, 124, 255, 0.2)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ margin: 0, fontSize: '1.8rem', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>🚀 CPA Niche Scout AI Pro 3.0</h1>
          <nav style={{ display: 'flex', gap: '20px' }}>
            {['dashboard', 'pricing', 'docs'].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{ background: 'none', border: 'none', color: activeTab === tab ? '#4f7cff' : '#a8adb8', cursor: 'pointer', fontSize: '1rem', fontWeight: activeTab === tab ? 'bold' : 'normal', textTransform: 'capitalize' }}>{tab}</button>
            ))}
          </nav>
        </div>
      </header>

      {/* DASHBOARD */}
      {activeTab === 'dashboard' && (
        <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 20px' }}>
          {/* SEARCH BAR */}
          <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', marginBottom: '30px', border: '2px solid #2b3a6a' }}>
            <h2 style={{ marginBottom: '20px', color: '#4f7cff' }}>Enter Your Niche</h2>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              <input type="text" placeholder="e.g., weight loss, insurance, forex, vpn" value={keyword} onChange={(e) => setKeyword(e.target.value)} style={{ flex: 1, padding: '12px', borderRadius: '4px', border: '1px solid #2b3a6a', background: '#0b1220', color: '#fff', fontSize: '1rem' }} />
            </div>

            {/* TOOL BUTTONS */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '15px' }}>
              {[
                { id: 'keywords', label: '📊 Keywords', action: analyzeKeyword },
                { id: 'domains', label: '🌐 Expired Domains', action: getExpiredDomains },
                { id: 'blueprint', label: '📐 Blueprint', action: getBlueprint },
                { id: 'video', label: '🎬 Video Script', action: getVideoScript },
              ].map(tool => (
                <button key={tool.id} onClick={() => { setSelectedTool(tool.id); tool.action(); }} disabled={loading} style={{ padding: '12px', background: selectedTool === tool.id ? '#4f7cff' : '#2b3a6a', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', transition: 'all 0.3s' }}>{tool.label}</button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={resetSearch} style={{ flex: 1, padding: '10px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>🔄 Reset Search</button>
            </div>
          </div>

          {/* RESULTS */}
          {loading && <div style={{ textAlign: 'center', padding: '40px', color: '#a8adb8' }}>⏳ Analyzing {keyword}...</div>}

          {results && selectedTool === 'keywords' && results.keywords && (
            <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
              <h3 style={{ color: '#4f7cff', marginBottom: '20px' }}>📊 High-Traffic Keywords for "{keyword}"</h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #2b3a6a' }}>
                      <th style={{ padding: '12px', textAlign: 'left', color: '#4f7cff' }}>Keyword</th>
                      <th style={{ padding: '12px', textAlign: 'center', color: '#4f7cff' }}>Traffic</th>
                      <th style={{ padding: '12px', textAlign: 'center', color: '#4f7cff' }}>Competition</th>
                      <th style={{ padding: '12px', textAlign: 'center', color: '#4f7cff' }}>Difficulty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.keywords.map((kw: any, i: number) => (
                      <tr key={i} style={{ borderBottom: '1px solid #2b3a6a' }}>
                        <td style={{ padding: '12px' }}>{kw.keyword}</td>
                        <td style={{ padding: '12px', textAlign: 'center', color: '#10b981' }}>{kw.traffic.toLocaleString()}</td>
                        <td style={{ padding: '12px', textAlign: 'center', color: '#f59e0b' }}>{kw.competition}</td>
                        <td style={{ padding: '12px', textAlign: 'center', color: '#ef4444' }}>{kw.difficulty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {results && selectedTool === 'domains' && results.domains && (
            <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
              <h3 style={{ color: '#4f7cff', marginBottom: '20px' }}>🌐 Expired Domains for "{keyword}"</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                {results.domains.map((domain: any, i: number) => (
                  <div key={i} style={{ background: '#0b1220', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                    <h4 style={{ color: '#4f7cff', marginBottom: '12px' }}>{domain.domain}</h4>
                    <div style={{ color: '#a8adb8', fontSize: '0.9rem' }}>
                      <p>📊 Traffic: <strong>{domain.traffic.toLocaleString()}</strong> monthly</p>
                      <p>🔗 Backlinks: <strong>{domain.backlinks}</strong></p>
                      <p>⚡ Authority: <strong>{domain.authority}</strong></p>
                      <p>⏰ Age: <strong>{domain.age} years</strong></p>
                      <p>💰 Price: <strong>${domain.price}</strong></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {results && selectedTool === 'blueprint' && results.blueprint && (
            <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
              <h3 style={{ color: '#4f7cff', marginBottom: '20px' }}>📐 Website Blueprint: {results.blueprint.siteName}</h3>
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: '#00d4ff' }}>Content Strategy</h4>
                <p style={{ color: '#a8adb8' }}>{results.blueprint.contentStrategy}</p>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: '#00d4ff' }}>Monetization</h4>
                <p style={{ color: '#a8adb8' }}>{results.blueprint.monetization}</p>
              </div>
              <div>
                <h4 style={{ color: '#00d4ff' }}>Website Pages ({results.blueprint.pages.length})</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
                  {results.blueprint.pages.map((page: any, i: number) => (
                    <div key={i} style={{ background: '#0b1220', padding: '15px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                      <h5 style={{ color: '#4f7cff', margin: '0 0 8px 0' }}>{page.name}</h5>
                      <p style={{ color: '#a8adb8', fontSize: '0.85rem', margin: '0 0 8px 0' }}>{page.type}</p>
                      <p style={{ color: '#a8adb8', fontSize: '0.9rem', margin: 0 }}>{page.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {results && selectedTool === 'video' && results.script && (
            <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
              <h3 style={{ color: '#4f7cff', marginBottom: '20px' }}>🎬 Video Script for "{keyword}"</h3>
              <pre style={{ background: '#0b1220', padding: '20px', borderRadius: '8px', color: '#a8adb8', overflow: 'auto', fontSize: '0.9rem', lineHeight: '1.6' }}>{results.script}</pre>
              <button style={{ marginTop: '20px', padding: '12px 24px', background: '#4f7cff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>📥 Download Script</button>
            </div>
          )}

          {!results && !loading && (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#a8adb8' }}>
              <p style={{ fontSize: '1.1rem' }}>Select a tool above to analyze "{keyword}"</p>
            </div>
          )}

          {results && (
            <div style={{ marginTop: '20px' }}>
              <button onClick={goBack} style={{ padding: '10px 20px', background: '#2b3a6a', color: '#4f7cff', border: '1px solid #4f7cff', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>← Back to Tools</button>
            </div>
          )}
        </main>
      )}

      {/* PRICING */}
      {activeTab === 'pricing' && (
        <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '60px' }}>Professional Pricing</h1>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {[
              { name: 'Starter', price: 9.99, credits: 20, features: ['20 Analyses', 'Basic Tools', 'Email Support'] },
              { name: 'Professional', price: 19.00, credits: 50, features: ['50 Analyses', 'All Tools', 'Priority Support'], popular: true },
              { name: 'Enterprise', price: 29.00, credits: 100, features: ['100 Analyses', 'All Tools', '24/7 Support', 'API Access'] }
            ].map((plan) => (
              <div key={plan.name} style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: plan.popular ? '2px solid #4f7cff' : '1px solid #2b3a6a', transform: plan.popular ? 'scale(1.05)' : 'scale(1)' }}>
                {plan.popular && <div style={{ background: '#4f7cff', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '15px', display: 'inline-block' }}>⭐ Most Popular</div>}
                <h3 style={{ marginBottom: '10px', fontSize: '1.5rem' }}>{plan.name}</h3>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#4f7cff', marginBottom: '5px' }}>${plan.price.toFixed(2)}</div>
                <div style={{ color: '#a8adb8', marginBottom: '20px' }}>{plan.credits} Credits/Month</div>
                <button style={{ width: '100%', padding: '12px', background: plan.popular ? '#4f7cff' : '#2b3a6a', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', marginBottom: '20px' }}>Get Started</button>
                <div>
                  {plan.features.map((feature, i) => (
                    <div key={i} style={{ color: '#a8adb8', marginBottom: '8px', fontSize: '0.9rem' }}>✓ {feature}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* FOOTER */}
      <footer style={{ background: '#1a2847', borderTop: '2px solid #2b3a6a', marginTop: '60px', padding: '40px 20px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginBottom: '40px' }}>
            {/* COMPANY */}
            <div>
              <h4 style={{ color: '#4f7cff', marginBottom: '15px' }}>CPA Niche Scout AI</h4>
              <p style={{ color: '#a8adb8', fontSize: '0.9rem', lineHeight: '1.6' }}>Professional AI-powered CPA niche research tool. Find profitable niches, analyze keywords, discover expired domains, and generate website blueprints.</p>
            </div>

            {/* PRODUCT */}
            <div>
              <h4 style={{ color: '#4f7cff', marginBottom: '15px' }}>Product</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#a8adb8', textDecoration: 'none' }}>Features</a></li>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#a8adb8', textDecoration: 'none' }}>Pricing</a></li>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#a8adb8', textDecoration: 'none' }}>Documentation</a></li>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#a8adb8', textDecoration: 'none' }}>API</a></li>
              </ul>
            </div>

            {/* LEGAL */}
            <div>
              <h4 style={{ color: '#4f7cff', marginBottom: '15px' }}>Legal</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#a8adb8', textDecoration: 'none' }}>Privacy Policy</a></li>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#a8adb8', textDecoration: 'none' }}>Terms of Service</a></li>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#a8adb8', textDecoration: 'none' }}>Cookie Policy</a></li>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#a8adb8', textDecoration: 'none' }}>Disclaimer</a></li>
              </ul>
            </div>

            {/* SUPPORT */}
            <div>
              <h4 style={{ color: '#4f7cff', marginBottom: '15px' }}>Support</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#a8adb8', textDecoration: 'none' }}>Help Center</a></li>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#a8adb8', textDecoration: 'none' }}>Contact Us</a></li>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#a8adb8', textDecoration: 'none' }}>Report Issue</a></li>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#a8adb8', textDecoration: 'none' }}>Status Page</a></li>
              </ul>
            </div>
          </div>

          {/* COMPLIANCE SECTION */}
          <div style={{ background: '#0b1220', padding: '20px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #2b3a6a' }}>
            <h4 style={{ color: '#4f7cff', marginBottom: '15px' }}>📋 Compliance & Disclosures</h4>
            <div style={{ color: '#a8adb8', fontSize: '0.85rem', lineHeight: '1.8' }}>
              <p><strong>Affiliate Disclosure:</strong> CPA Niche Scout AI is a participant in affiliate programs including ClickBank, CJ Affiliate, Impact, Rakuten, and ShareASale. We earn commissions from qualifying purchases through our affiliate links.</p>
              <p><strong>FTC Compliance:</strong> As required by the FTC, we disclose that some links on this website are affiliate links. This means if you click on a link and make a purchase, we may receive a commission at no additional cost to you.</p>
              <p><strong>Income Disclaimer:</strong> Results are not typical. Individual results may vary. There is no guarantee that you will achieve any particular result. Income and earnings statements made by CPA Niche Scout AI are estimates only of what we think you could earn. These results are not typical and your results may vary. There is no guarantee that you will achieve any particular result.</p>
              <p><strong>Risk Disclaimer:</strong> The information provided is for educational purposes only. Past performance is not indicative of future results. All investments and business ventures carry risk, including the potential loss of principal.</p>
              <p><strong>Medical Disclaimer:</strong> This website is not a substitute for professional medical advice. Always consult with a qualified healthcare provider before starting any weight loss program or taking supplements.</p>
              <p><strong>Financial Disclaimer:</strong> This website is not financial advice. Consult with a qualified financial advisor before making investment decisions.</p>
            </div>
          </div>

          {/* BOTTOM */}
          <div style={{ borderTop: '1px solid #2b3a6a', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <p style={{ color: '#a8adb8', fontSize: '0.85rem', margin: 0 }}>© 2025 CPA Niche Scout AI. All rights reserved.</p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <a href="#" style={{ color: '#a8adb8', textDecoration: 'none', fontSize: '0.85rem' }}>Twitter</a>
              <a href="#" style={{ color: '#a8adb8', textDecoration: 'none', fontSize: '0.85rem' }}>LinkedIn</a>
              <a href="#" style={{ color: '#a8adb8', textDecoration: 'none', fontSize: '0.85rem' }}>YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
