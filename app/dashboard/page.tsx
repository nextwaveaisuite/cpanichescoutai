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
      { network: 'ClickBank', url: 'https://www.clickbank.com', payout: '$45', commission: '50%', desc: 'Digital products, weight loss, fitness' },
      { network: 'CJ Affiliate', url: 'https://www.cj.com', payout: '$35', commission: '40%', desc: 'Retail, insurance, finance' },
      { network: 'Impact', url: 'https://www.impact.com', payout: '$40', commission: '45%', desc: 'Premium brands, high-value offers' },
      { network: 'Rakuten', url: 'https://rakutenmarketing.com', payout: '$30', commission: '35%', desc: 'Shopping, cashback, retail' },
      { network: 'ShareASale', url: 'https://www.shareasale.com', payout: '$38', commission: '42%', desc: 'Diverse offers, high-quality merchants' },
    ],
    domains: [
      { domain: 'WeightLossTips.com', age: 12, traffic: 2400, backlinks: 450, authority: 42, price: '$18', verdict: 'EXCELLENT' },
      { domain: 'BestDietPlans.net', age: 8, traffic: 1800, backlinks: 320, authority: 35, price: '$12', verdict: 'GOOD' },
      { domain: 'NaturalWeightLoss.org', age: 15, traffic: 3200, backlinks: 680, authority: 52, price: '$25', verdict: 'EXCELLENT' },
      { domain: 'WeightLossSecrets.com', age: 10, traffic: 2100, backlinks: 380, authority: 38, price: '$15', verdict: 'GOOD' },
      { domain: 'HealthyWeightLoss.net', age: 9, traffic: 1900, backlinks: 340, authority: 36, price: '$14', verdict: 'GOOD' },
      { domain: 'FitnessDiet.com', age: 14, traffic: 2800, backlinks: 520, authority: 48, price: '$22', verdict: 'EXCELLENT' },
      { domain: 'WeightLossJourney.org', age: 11, traffic: 2200, backlinks: 400, authority: 40, price: '$16', verdict: 'GOOD' },
      { domain: 'BestWeightLossTips.net', age: 7, traffic: 1600, backlinks: 280, authority: 32, price: '$10', verdict: 'FAIR' },
    ],
    blueprint: {
      pages: [
        { name: 'Homepage', description: 'Hero section with value proposition, benefits, testimonials, and CTA to email list' },
        { name: 'Weight Loss Tips', description: 'Pillar content with 20+ actionable tips, backed by research, monetized with CPA offers' },
        { name: 'Best Supplements', description: 'Product comparison guide, affiliate/CPA links, pros/cons, pricing' },
        { name: 'Success Stories', description: 'Before/after testimonials, case studies, builds trust and social proof' },
        { name: 'Meal Plans', description: 'Free meal plan templates, downloadable PDFs, email capture, premium upsell' },
        { name: 'Exercise Guide', description: 'Video tutorials, workout routines, fitness equipment recommendations' },
        { name: 'FAQ', description: 'Common questions answered, addresses objections, improves SEO' },
        { name: 'Contact', description: 'Email capture, support form, builds relationship with audience' },
      ],
      strategy: 'Create pillar content on weight loss, cluster around supplements, meal plans, and exercises. Build email list for repeat commissions. Monetize with ClickBank weight loss products and CPA supplement offers.',
      monetization: 'Primary: ClickBank weight loss products (50% commission). Secondary: CPA supplement offers ($30-45 per conversion). Tertiary: Email list (nurture sequences for repeat sales). Estimated: $500-2000/month per 1000 visitors.',
      timeline: 'Months 1-2: Build 8 pillar pages, optimize for SEO. Months 3-4: Drive traffic via content marketing, social media. Months 5-6: Scale with paid ads, email marketing. Months 6+: Passive income from email list and organic traffic.',
    },
    scripts: [
      { 
        title: 'Weight Loss Supplement Review', 
        duration: '60 sec', 
        script: 'HOOK: "I lost 30 pounds without dieting and here\'s how..." [0-3 sec] PROBLEM: "Most weight loss pills don\'t work because they don\'t address the real issue - your metabolism..." [3-15 sec] SOLUTION: "This supplement changed my life. It\'s scientifically formulated to boost metabolism, suppress appetite, and give you energy. I started seeing results in just 2 weeks..." [15-45 sec] PROOF: "Look at these results from real users..." [45-50 sec] CTA: "Click the link in bio to get yours today. Limited time offer - 50% off for the first 100 customers!" [50-60 sec]' 
      },
      { 
        title: 'Best Diet Plans Comparison', 
        duration: '60 sec', 
        script: 'HOOK: "I tried 5 different diets and only ONE actually worked..." [0-3 sec] PROBLEM: "There are so many diet options out there - keto, intermittent fasting, calorie counting - which one actually works? Most people waste months trying the wrong diet..." [3-15 sec] SOLUTION: "I created a comparison guide that breaks down the top 5 diets, shows pros and cons, and tells you which one is best for YOUR body type and lifestyle..." [15-45 sec] RESULTS: "My clients lost an average of 20 pounds in 8 weeks using this guide..." [45-50 sec] CTA: "Get your free guide now - link in bio. This is exactly what my personal training clients pay $200 for!" [50-60 sec]' 
      },
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
      { network: 'ClickBank', url: 'https://www.clickbank.com', payout: '$55', commission: '55%', desc: 'Insurance guides, financial products' },
      { network: 'CJ Affiliate', url: 'https://www.cj.com', payout: '$45', commission: '50%', desc: 'Major insurance companies' },
      { network: 'Impact', url: 'https://www.impact.com', payout: '$50', commission: '52%', desc: 'Premium insurance offers' },
      { network: 'Rakuten', url: 'https://rakutenmarketing.com', payout: '$40', commission: '45%', desc: 'Insurance comparison tools' },
      { network: 'ShareASale', url: 'https://www.shareasale.com', payout: '$48', commission: '50%', desc: 'Diverse insurance merchants' },
    ],
    domains: [
      { domain: 'InsuranceQuotes.com', age: 16, traffic: 4500, backlinks: 850, authority: 58, price: '$35', verdict: 'EXCELLENT' },
      { domain: 'CarInsuranceTips.net', age: 10, traffic: 2800, backlinks: 520, authority: 45, price: '$20', verdict: 'GOOD' },
      { domain: 'BestInsuranceRates.org', age: 13, traffic: 3600, backlinks: 680, authority: 52, price: '$28', verdict: 'EXCELLENT' },
      { domain: 'InsuranceComparison.com', age: 11, traffic: 3200, backlinks: 600, authority: 48, price: '$24', verdict: 'EXCELLENT' },
      { domain: 'AffordableInsurance.net', age: 9, traffic: 2400, backlinks: 450, authority: 40, price: '$16', verdict: 'GOOD' },
      { domain: 'InsuranceGuide.org', age: 14, traffic: 3800, backlinks: 720, authority: 54, price: '$30', verdict: 'EXCELLENT' },
      { domain: 'QuickInsuranceQuotes.com', age: 8, traffic: 2100, backlinks: 380, authority: 36, price: '$14', verdict: 'GOOD' },
      { domain: 'InsuranceSavings.net', age: 12, traffic: 3100, backlinks: 580, authority: 46, price: '$22', verdict: 'EXCELLENT' },
    ],
    blueprint: {
      pages: [
        { name: 'Homepage', description: 'Insurance comparison tools, quote forms, trust badges, customer testimonials' },
        { name: 'Car Insurance', description: 'Comprehensive guide, state-by-state information, quote comparison, CPA offers' },
        { name: 'Home Insurance', description: 'Coverage types, cost factors, comparison tables, affiliate links' },
        { name: 'Life Insurance', description: 'Term vs permanent, calculators, quotes, high-commission CPA offers' },
        { name: 'Health Insurance', description: 'Plan types, ACA information, quotes, marketplace links' },
        { name: 'Quotes', description: 'Interactive quote tool, lead capture, CPA network integration' },
        { name: 'Reviews', description: 'Insurance company reviews, ratings, comparison charts' },
        { name: 'Contact', description: 'Support form, email capture, lead generation' },
      ],
      strategy: 'Create comparison content, quote tools, and insurance guides. Build email list for repeat commissions. Monetize with insurance CPA offers ($40-55 per lead).',
      monetization: 'Primary: Insurance CPA offers ($40-55 per qualified lead). Secondary: Affiliate commissions from quote tools. Tertiary: Email marketing for high-ticket policies. Estimated: $1000-5000/month per 1000 visitors.',
      timeline: 'Months 1-2: Build 8 comparison pages, integrate quote tools. Months 3-4: Drive traffic via SEO and content. Months 5-6: Scale with paid ads. Months 6+: Passive income from leads and email marketing.',
    },
    scripts: [
      { 
        title: 'Car Insurance Savings', 
        duration: '60 sec', 
        script: 'HOOK: "I saved $1200 on car insurance in just 15 minutes..." [0-3 sec] PROBLEM: "Most people overpay for car insurance because they don\'t shop around. Insurance companies count on you staying with them..." [3-15 sec] SOLUTION: "I created a simple process to compare quotes from 5+ companies and find the lowest rates. It takes 15 minutes and could save you $1000+ per year..." [15-45 sec] PROOF: "My followers saved an average of $800 in the first month..." [45-50 sec] CTA: "Get your free quote comparison guide - link in bio. See how much you can save today!" [50-60 sec]' 
      },
      { 
        title: 'Life Insurance Guide', 
        duration: '60 sec', 
        script: 'HOOK: "Protect your family for just pennies a day..." [0-3 sec] PROBLEM: "Life insurance seems expensive and confusing. Most people don\'t have enough coverage to protect their families..." [3-15 sec] SOLUTION: "Term life insurance is actually affordable. A 30-year-old can get $1 million coverage for just $30/month. I break down exactly what you need and how to get the best rates..." [15-45 sec] RESULTS: "My guide has helped thousands of families get protected..." [45-50 sec] CTA: "Download your free life insurance guide - link in bio. Get quotes from top companies today!" [50-60 sec]' 
      },
    ]
  }
};

export default function Dashboard() {
  const [niche, setNiche] = useState('weight loss');
  const [searchInput, setSearchInput] = useState('weight loss');
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [resetKey, setResetKey] = useState(0);

  const data = NICHE_DATA[niche as keyof typeof NICHE_DATA] || NICHE_DATA['weight loss'];

  const handleSearch = () => {
    const searchTerm = searchInput.toLowerCase().trim();
    if (searchTerm) {
      setNiche(searchTerm);
      setActiveTool(null);
    }
  };

  const handleReset = () => {
    setNiche('weight loss');
    setSearchInput('weight loss');
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
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
                <input key={resetKey} type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSearch()} placeholder="e.g., weight loss, insurance, forex..." style={{ flex: 1, minWidth: '200px', padding: '12px', borderRadius: '6px', border: '1px solid #2b3a6a', background: '#0b1220', color: '#fff' }} />
                <button onClick={handleSearch} style={{ padding: '12px 30px', background: '#4f7cff', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>🔍 Search</button>
                <button onClick={handleReset} style={{ padding: '12px 25px', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>✕ Clear</button>
              </div>
              {niche !== 'weight loss' && niche !== 'insurance' && (
                <div style={{ marginTop: '15px', padding: '12px', background: '#0b1220', borderRadius: '6px', border: '1px solid #f59e0b', color: '#f59e0b' }}>
                  ⚠️ No data for "{niche}". Showing default data. Try "weight loss" or "insurance".
                </div>
              )}
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
                <h2 style={{ color: '#4f7cff', marginBottom: '30px' }}>📊 Keyword Research for "{niche}"</h2>
                
                {/* EXPLANATION */}
                <div style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a', marginBottom: '30px' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '15px' }}>📖 How to Read These Results</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
                    <div>
                      <h4 style={{ color: '#10b981', marginBottom: '8px' }}>🟢 Traffic (Monthly Searches)</h4>
                      <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>Higher traffic = more potential visitors. 5000+ is excellent, 3000-5000 is good, below 3000 is low. This shows monthly search volume.</p>
                    </div>
                    <div>
                      <h4 style={{ color: '#f59e0b', marginBottom: '8px' }}>🟡 Competition (Websites Ranking)</h4>
                      <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>Lower competition = easier to rank. 0-30 is low (easy), 30-60 is medium, 60+ is high (hard). Fewer competitors = faster rankings.</p>
                    </div>
                    <div>
                      <h4 style={{ color: '#ef4444', marginBottom: '8px' }}>🔴 Difficulty (Ranking Difficulty)</h4>
                      <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>Lower difficulty = easier to rank. 0-30 is easy, 30-60 is medium, 60+ is hard. Look for keywords with low difficulty and high traffic.</p>
                    </div>
                  </div>
                </div>

                {/* BEST KEYWORDS */}
                <div style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #10b981', marginBottom: '30px' }}>
                  <h3 style={{ color: '#10b981', marginBottom: '10px' }}>✅ Best Keywords (High Traffic + Low Difficulty)</h3>
                  <ul style={{ color: '#a8adb8', margin: 0, paddingLeft: '20px' }}>
                    {data.keywords.filter(kw => kw.traffic > 5000 && kw.difficulty < 40).map((kw, i) => (
                      <li key={i} style={{ marginBottom: '8px' }}><strong>{kw.keyword}</strong> - {kw.traffic} searches/month, Difficulty: {kw.difficulty}</li>
                    ))}
                  </ul>
                </div>

                {/* TABLE */}
                <div style={{ overflowX: 'auto', marginBottom: '30px' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid #2b3a6a' }}>
                        <th style={{ textAlign: 'left', padding: '12px', color: '#4f7cff' }}>Keyword</th>
                        <th style={{ textAlign: 'center', padding: '12px', color: '#4f7cff' }}>Traffic 🟢</th>
                        <th style={{ textAlign: 'center', padding: '12px', color: '#4f7cff' }}>Competition 🟡</th>
                        <th style={{ textAlign: 'center', padding: '12px', color: '#4f7cff' }}>Difficulty 🔴</th>
                        <th style={{ textAlign: 'center', padding: '12px', color: '#4f7cff' }}>Verdict</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.keywords.map((kw, i) => {
                        let verdict = 'MONITOR';
                        if (kw.traffic > 5000 && kw.difficulty < 40) verdict = '✅ BUILD';
                        else if (kw.traffic < 3000 || kw.difficulty > 60) verdict = '⏭️ SKIP';
                        return (
                          <tr key={i} style={{ borderBottom: '1px solid #2b3a6a' }}>
                            <td style={{ padding: '12px', color: '#a8adb8' }}>{kw.keyword}</td>
                            <td style={{ textAlign: 'center', padding: '12px', color: '#10b981', fontWeight: 'bold' }}>{kw.traffic}</td>
                            <td style={{ textAlign: 'center', padding: '12px', color: '#f59e0b' }}>{kw.competition}</td>
                            <td style={{ textAlign: 'center', padding: '12px', color: '#ef4444' }}>{kw.difficulty}</td>
                            <td style={{ textAlign: 'center', padding: '12px', color: verdict.includes('BUILD') ? '#10b981' : verdict.includes('SKIP') ? '#ef4444' : '#f59e0b', fontWeight: 'bold' }}>{verdict}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* ANALYSIS */}
                <div style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '10px' }}>💡 Analysis & Recommendations</h3>
                  <ul style={{ color: '#a8adb8', margin: 0, paddingLeft: '20px', lineHeight: '1.8' }}>
                    <li>Focus on keywords with <strong>high traffic (5000+)</strong> and <strong>low difficulty (&lt;40)</strong></li>
                    <li>Avoid keywords with <strong>low traffic (&lt;3000)</strong> or <strong>high difficulty (&gt;60)</strong></li>
                    <li>Start with "easy" keywords to build authority, then target harder ones</li>
                    <li>Create content around the "BUILD" keywords first for quick wins</li>
                    <li>Monitor medium-difficulty keywords as you grow your site</li>
                  </ul>
                </div>
              </div>
            )}

            {/* OFFERS */}
            {activeTool === 'Offers' && (
              <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
                <h2 style={{ color: '#4f7cff', marginBottom: '30px' }}>💰 CPA Offers for "{niche}"</h2>
                
                {/* EXPLANATION */}
                <div style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a', marginBottom: '30px' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '15px' }}>📖 Understanding CPA Offers</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
                    <div>
                      <h4 style={{ color: '#10b981', marginBottom: '8px' }}>💵 Payout</h4>
                      <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>Amount you earn per completed action (sale, lead, signup). Higher payouts = more profit per conversion.</p>
                    </div>
                    <div>
                      <h4 style={{ color: '#f59e0b', marginBottom: '8px' }}>📊 Commission</h4>
                      <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>Percentage of the sale you keep. 50% = you get half of what the customer pays.</p>
                    </div>
                    <div>
                      <h4 style={{ color: '#ef4444', marginBottom: '8px' }}>🎯 Best Practice</h4>
                      <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>Promote offers with high payouts (40%+ commission). Test multiple networks to find what converts best.</p>
                    </div>
                  </div>
                </div>

                {/* OFFERS GRID */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                  {data.offers.map((offer, i) => (
                    <a key={i} href={offer.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                      <div style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '2px solid #2b3a6a', cursor: 'pointer', transition: 'all 0.3s', height: '100%' }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#4f7cff')} onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#2b3a6a')}>
                        <h3 style={{ color: '#4f7cff', marginBottom: '10px', marginTop: 0 }}>{offer.network}</h3>
                        <p style={{ color: '#a8adb8', marginBottom: '15px', fontSize: '0.9rem' }}>{offer.desc}</p>
                        
                        <div style={{ background: '#1a2847', padding: '15px', borderRadius: '6px', marginBottom: '15px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <span style={{ color: '#a8adb8' }}>Payout:</span>
                            <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '1.2rem' }}>{offer.payout}</span>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ color: '#a8adb8' }}>Commission:</span>
                            <span style={{ color: '#f59e0b', fontWeight: 'bold', fontSize: '1.2rem' }}>{offer.commission}</span>
                          </div>
                        </div>

                        <button style={{ width: '100%', padding: '12px', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>
                          🔗 Visit Network
                        </button>
                      </div>
                    </a>
                  ))}
                </div>

                {/* TIPS */}
                <div style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '15px' }}>💡 How to Maximize CPA Earnings</h3>
                  <ul style={{ color: '#a8adb8', margin: 0, paddingLeft: '20px', lineHeight: '1.8' }}>
                    <li><strong>Join multiple networks:</strong> Different offers perform better on different platforms</li>
                    <li><strong>Test and track:</strong> Use unique links to see which offers convert best</li>
                    <li><strong>Match offers to content:</strong> Promote relevant offers to your audience</li>
                    <li><strong>Build email list:</strong> Email subscribers convert 5-10x better than cold traffic</li>
                    <li><strong>Create comparison content:</strong> "Best X" articles rank well and convert offers</li>
                    <li><strong>Use urgency:</strong> Limited time offers, scarcity, bonuses increase conversions</li>
                  </ul>
                </div>
              </div>
            )}

            {/* DOMAINS */}
            {activeTool === 'Domains' && (
              <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
                <h2 style={{ color: '#4f7cff', marginBottom: '30px' }}>🌐 Expired Domains for "{niche}"</h2>
                
                {/* EXPLANATION */}
                <div style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a', marginBottom: '30px' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '15px' }}>📖 Why Expired Domains Matter</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
                    <div>
                      <h4 style={{ color: '#10b981', marginBottom: '8px' }}>⚡ Instant Authority</h4>
                      <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>Aged domains have existing backlinks and history. You skip the "sandbox" period and rank faster.</p>
                    </div>
                    <div>
                      <h4 style={{ color: '#f59e0b', marginBottom: '8px' }}>🔗 Backlinks</h4>
                      <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>More backlinks = more SEO power. Look for domains with 300+ backlinks and high authority.</p>
                    </div>
                    <div>
                      <h4 style={{ color: '#ef4444', marginBottom: '8px' }}>🎯 Best Domains</h4>
                      <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>10+ years old, 500+ backlinks, 40+ authority, relevant to your niche.</p>
                    </div>
                  </div>
                </div>

                {/* BEST DOMAINS */}
                <div style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #10b981', marginBottom: '30px' }}>
                  <h3 style={{ color: '#10b981', marginBottom: '10px' }}>⭐ Best Domains (High Authority + Backlinks)</h3>
                  <ul style={{ color: '#a8adb8', margin: 0, paddingLeft: '20px' }}>
                    {data.domains.filter(d => d.authority > 45 && d.backlinks > 500).map((domain, i) => (
                      <li key={i} style={{ marginBottom: '8px' }}><strong>{domain.domain}</strong> - Authority: {domain.authority}, Backlinks: {domain.backlinks}, Price: {domain.price}</li>
                    ))}
                  </ul>
                </div>

                {/* DOMAINS GRID */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                  {data.domains.map((domain, i) => (
                    <div key={i} style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '2px solid #2b3a6a' }}>
                      <h3 style={{ color: '#4f7cff', marginBottom: '15px', marginTop: 0 }}>{domain.domain}</h3>
                      
                      <div style={{ background: '#1a2847', padding: '15px', borderRadius: '6px', marginBottom: '15px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                          <span style={{ color: '#a8adb8' }}>Age:</span>
                          <span style={{ color: '#10b981', fontWeight: 'bold' }}>{domain.age} years</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                          <span style={{ color: '#a8adb8' }}>Traffic:</span>
                          <span style={{ color: '#10b981', fontWeight: 'bold' }}>{domain.traffic}/mo</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                          <span style={{ color: '#a8adb8' }}>Backlinks:</span>
                          <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>{domain.backlinks}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                          <span style={{ color: '#a8adb8' }}>Authority:</span>
                          <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>{domain.authority}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: '#a8adb8' }}>Price:</span>
                          <span style={{ color: '#ef4444', fontWeight: 'bold' }}>{domain.price}</span>
                        </div>
                      </div>

                      <div style={{ padding: '12px', background: domain.verdict === 'EXCELLENT' ? 'rgba(16, 185, 129, 0.1)' : domain.verdict === 'GOOD' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(239, 68, 68, 0.1)', borderRadius: '6px', textAlign: 'center', color: domain.verdict === 'EXCELLENT' ? '#10b981' : domain.verdict === 'GOOD' ? '#f59e0b' : '#ef4444', fontWeight: 'bold' }}>
                        {domain.verdict === 'EXCELLENT' ? '⭐ EXCELLENT BUY' : domain.verdict === 'GOOD' ? '👍 GOOD' : '⚠️ FAIR'}
                      </div>
                    </div>
                  ))}
                </div>

                {/* TIPS */}
                <div style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '15px' }}>💡 How to Buy Expired Domains</h3>
                  <ul style={{ color: '#a8adb8', margin: 0, paddingLeft: '20px', lineHeight: '1.8' }}>
                    <li><strong>Check domain history:</strong> Use Wayback Machine to see previous content</li>
                    <li><strong>Verify backlinks:</strong> Use Ahrefs or SEMrush to check quality of backlinks</li>
                    <li><strong>Check for penalties:</strong> Make sure domain isn't penalized by Google</li>
                    <li><strong>Buy from auctions:</strong> GoDaddy Auctions, Flippa, NameJet</li>
                    <li><strong>Redirect or rebuild:</strong> You can redirect old content or rebuild from scratch</li>
                  </ul>
                </div>
              </div>
            )}

            {/* BLUEPRINT */}
            {activeTool === 'Blueprint' && (
              <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
                <h2 style={{ color: '#4f7cff', marginBottom: '30px' }}>📐 Website Blueprint for "{niche}"</h2>
                
                {/* STRATEGY */}
                <div style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a', marginBottom: '30px' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '10px' }}>🎯 Overall Strategy</h3>
                  <p style={{ color: '#a8adb8', lineHeight: '1.8' }}>{data.blueprint.strategy}</p>
                </div>

                {/* PAGES */}
                <div style={{ marginBottom: '30px' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '20px' }}>📄 Website Pages</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    {data.blueprint.pages.map((page, i) => (
                      <div key={i} style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                        <h4 style={{ color: '#4f7cff', marginBottom: '10px', marginTop: 0 }}>{i + 1}. {page.name}</h4>
                        <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem', lineHeight: '1.6' }}>{page.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MONETIZATION */}
                <div style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #10b981', marginBottom: '30px' }}>
                  <h3 style={{ color: '#10b981', marginBottom: '10px' }}>💰 Monetization Strategy</h3>
                  <p style={{ color: '#a8adb8', lineHeight: '1.8' }}>{data.blueprint.monetization}</p>
                </div>

                {/* TIMELINE */}
                <div style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '10px' }}>📅 Launch Timeline</h3>
                  <p style={{ color: '#a8adb8', lineHeight: '1.8' }}>{data.blueprint.timeline}</p>
                </div>
              </div>
            )}

            {/* SCRIPTS */}
            {activeTool === 'Scripts' && (
              <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
                <h2 style={{ color: '#4f7cff', marginBottom: '30px' }}>🎬 Video Scripts for "{niche}"</h2>
                
                {/* EXPLANATION */}
                <div style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a', marginBottom: '30px' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '15px' }}>📝 How to Use These Scripts</h3>
                  <ul style={{ color: '#a8adb8', margin: 0, paddingLeft: '20px', lineHeight: '1.8' }}>
                    <li><strong>Customize:</strong> Replace product names with your actual offers</li>
                    <li><strong>Add Visuals:</strong> Use B-roll, animations, or product footage</li>
                    <li><strong>Practice:</strong> Record multiple takes to find your best delivery</li>
                    <li><strong>Post:</strong> Upload to YouTube, TikTok, Instagram Reels, Shorts</li>
                    <li><strong>Link:</strong> Add affiliate/CPA links in video description</li>
                  </ul>
                </div>

                {/* SCRIPTS */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                  {data.scripts.map((script, i) => (
                    <div key={i} style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                      <h3 style={{ color: '#4f7cff', marginBottom: '10px' }}>{script.title}</h3>
                      <p style={{ color: '#a8adb8', marginBottom: '20px', fontSize: '0.9rem' }}>⏱️ Duration: {script.duration}</p>
                      
                      <div style={{ background: '#1a2847', padding: '15px', borderRadius: '6px', marginBottom: '15px' }}>
                        <h4 style={{ color: '#10b981', marginBottom: '8px', marginTop: 0 }}>Full Script:</h4>
                        <p style={{ color: '#a8adb8', margin: 0, lineHeight: '1.8', whiteSpace: 'pre-wrap', fontSize: '0.9rem' }}>{script.script}</p>
                      </div>

                      <div style={{ background: '#1a2847', padding: '15px', borderRadius: '6px' }}>
                        <h4 style={{ color: '#f59e0b', marginBottom: '8px', marginTop: 0 }}>📌 Key Points:</h4>
                        <ul style={{ color: '#a8adb8', margin: 0, paddingLeft: '20px', fontSize: '0.9rem' }}>
                          <li>Keep it under 60 seconds</li>
                          <li>Speak naturally and conversationally</li>
                          <li>Add urgency with phrases like "limited time" or "while supplies last"</li>
                          <li>Always include a clear call-to-action</li>
                          <li>Use trending sounds and hashtags</li>
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                {/* TIPS */}
                <div style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a', marginTop: '30px' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '15px' }}>💡 Script Writing Tips</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
                    <div>
                      <h4 style={{ color: '#10b981', marginBottom: '8px' }}>Hook (0-5 sec)</h4>
                      <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>Grab attention immediately. Use a bold claim, question, or surprising statement. This is critical - viewers decide to watch or skip in the first 3 seconds.</p>
                    </div>
                    <div>
                      <h4 style={{ color: '#f59e0b', marginBottom: '8px' }}>Problem (5-20 sec)</h4>
                      <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>Identify the viewer's pain point. Make them feel understood. "You've tried everything but nothing works..." This builds emotional connection.</p>
                    </div>
                    <div>
                      <h4 style={{ color: '#ef4444', marginBottom: '8px' }}>Solution (20-50 sec)</h4>
                      <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>Present your offer as the solution. Explain benefits, not features. Show results or testimonials. Make it irresistible.</p>
                    </div>
                    <div>
                      <h4 style={{ color: '#4f7cff', marginBottom: '8px' }}>CTA (50-60 sec)</h4>
                      <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>Clear call-to-action. "Click the link in bio", "Get it now", "Limited time offer". Make it easy for viewers to take action.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </main>

      {/* FOOTER */}
      <footer style={{ background: '#1a2847', borderTop: '2px solid #2b3a6a', padding: '40px 20px', marginTop: '80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
            <div>
              <h4 style={{ color: '#4f7cff', marginBottom: '15px' }}>Product</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><Link href="/home" style={{ color: '#a8adb8', textDecoration: 'none' }}>Home</Link></li>
                <li><Link href="/pricing" style={{ color: '#a8adb8', textDecoration: 'none' }}>Pricing</Link></li>
                <li><Link href="/about" style={{ color: '#a8adb8', textDecoration: 'none' }}>About</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#4f7cff', marginBottom: '15px' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><Link href="/contact" style={{ color: '#a8adb8', textDecoration: 'none' }}>Contact</Link></li>
              </ul>
            </div>
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
