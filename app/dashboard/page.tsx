'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [niche, setNiche] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    const searchTerm = searchInput.toLowerCase().trim();
    if (!searchTerm) {
      setError('Please enter a niche to analyze');
      return;
    }

    setLoading(true);
    setError('');
    setNiche(searchTerm);
    setActiveTool(null);

    try {
      const response = await fetch('/api/analyze-niche', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ niche: searchTerm }),
      });

      if (!response.ok) throw new Error('Failed to analyze niche');
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError('Error analyzing niche. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSearchInput('');
    setNiche('');
    setActiveTool(null);
    setData(null);
    setError('');
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
        {!data ? (
          <>
            {/* SEARCH */}
            <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a', marginBottom: '40px' }}>
              <h2 style={{ color: '#4f7cff', marginBottom: '20px' }}>🔍 Enter Your Niche</h2>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
                <input 
                  type="text" 
                  value={searchInput} 
                  onChange={(e) => setSearchInput(e.target.value)} 
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()} 
                  placeholder="e.g., weight loss, insurance, dropshipping, SaaS..." 
                  style={{ flex: 1, minWidth: '200px', padding: '12px', borderRadius: '6px', border: '1px solid #2b3a6a', background: '#0b1220', color: '#fff' }} 
                />
                <button 
                  onClick={handleSearch} 
                  disabled={loading}
                  style={{ padding: '12px 30px', background: loading ? '#666' : '#4f7cff', color: 'white', border: 'none', borderRadius: '6px', cursor: loading ? 'not-allowed' : 'pointer', fontWeight: 'bold', fontSize: '1rem' }}
                >
                  {loading ? '⏳ Analyzing...' : '🔍 Search'}
                </button>
                <button 
                  onClick={handleReset} 
                  style={{ padding: '12px 25px', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  ✕ Clear
                </button>
              </div>
              {error && (
                <div style={{ marginTop: '15px', padding: '12px', background: '#0b1220', borderRadius: '6px', border: '1px solid #ef4444', color: '#ef4444' }}>
                  ⚠️ {error}
                </div>
              )}
              <div style={{ marginTop: '15px', padding: '12px', background: '#0b1020', borderRadius: '6px', border: '1px solid #4f7cff', color: '#4f7cff', fontSize: '0.9rem' }}>
                ✅ Try any niche: weight loss, insurance, dropshipping, SaaS, fitness, cryptocurrency, real estate, online courses, etc.
              </div>
            </div>

            {/* TOOLS */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              {[
                { icon: '📈', title: 'Analyze', desc: 'Deep niche analysis' },
                { icon: '📊', title: 'Keywords', desc: 'Find high-traffic keywords' },
                { icon: '💰', title: 'Offers', desc: 'Match CPA offers' },
                { icon: '🌐', title: 'Domains', desc: 'Find expired domains' },
                { icon: '📐', title: 'Blueprint', desc: 'Website structure' },
                { icon: '🎬', title: 'Scripts', desc: 'Video scripts' },
              ].map((tool) => (
                <div key={tool.title} style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '2px solid #2b3a6a', cursor: 'not-allowed', opacity: 0.6 }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{tool.icon}</div>
                  <h3 style={{ color: '#4f7cff', marginBottom: '8px' }}>{tool.title}</h3>
                  <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>{tool.desc}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* BACK BUTTON */}
            <button onClick={() => setActiveTool(null)} style={{ padding: '10px 20px', background: '#2b3a6a', color: '#a8adb8', border: 'none', borderRadius: '6px', cursor: 'pointer', marginBottom: '30px', fontWeight: 'bold' }}>← Back</button>

            {/* ANALYZE */}
            {activeTool === 'Analyze' && (
              <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
                <h2 style={{ color: '#4f7cff', marginBottom: '30px' }}>📈 Deep Niche Analysis for "{niche}"</h2>
                
                {/* OVERVIEW SCORES */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                  <div style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a', textAlign: 'center' }}>
                    <h4 style={{ color: '#a8adb8', marginBottom: '10px', marginTop: 0 }}>Overall Score</h4>
                    <div style={{ fontSize: '3rem', fontWeight: 'bold', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{data?.analyze?.score}/100</div>
                    <p style={{ color: '#a8adb8', margin: '10px 0 0 0', fontSize: '0.9rem' }}>Niche Potential</p>
                  </div>
                  
                  <div style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a', textAlign: 'center' }}>
                    <h4 style={{ color: '#a8adb8', marginBottom: '10px', marginTop: 0 }}>Difficulty</h4>
                    <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#f59e0b' }}>{data?.analyze?.difficulty}/100</div>
                    <p style={{ color: '#a8adb8', margin: '10px 0 0 0', fontSize: '0.9rem' }}>Ranking Difficulty</p>
                  </div>
                  
                  <div style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a', textAlign: 'center' }}>
                    <h4 style={{ color: '#a8adb8', marginBottom: '10px', marginTop: 0 }}>Profit Potential</h4>
                    <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#10b981' }}>{data?.analyze?.profitPotential}/100</div>
                    <p style={{ color: '#a8adb8', margin: '10px 0 0 0', fontSize: '0.9rem' }}>Revenue Potential</p>
                  </div>
                  
                  <div style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a', textAlign: 'center' }}>
                    <h4 style={{ color: '#a8adb8', marginBottom: '10px', marginTop: 0 }}>Traffic Potential</h4>
                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ef4444' }}>{data?.analyze?.trafficPotential?.toLocaleString()}</div>
                    <p style={{ color: '#a8adb8', margin: '10px 0 0 0', fontSize: '0.9rem' }}>Monthly Searches</p>
                  </div>
                </div>

                {/* VERDICT */}
                <div style={{ background: data?.analyze?.verdict === 'BUILD' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)', padding: '25px', borderRadius: '8px', border: `2px solid ${data?.analyze?.verdict === 'BUILD' ? '#10b981' : '#f59e0b'}`, marginBottom: '40px', textAlign: 'center' }}>
                  <h3 style={{ color: data?.analyze?.verdict === 'BUILD' ? '#10b981' : '#f59e0b', marginTop: 0, marginBottom: '10px', fontSize: '1.5rem' }}>
                    {data?.analyze?.verdict === 'BUILD' ? '✅ VERDICT: BUILD THIS NICHE' : '⚠️ VERDICT: PROCEED WITH CAUTION'}
                  </h3>
                  <p style={{ color: '#a8adb8', margin: 0, lineHeight: '1.8' }}>{data?.analyze?.analysis}</p>
                </div>

                {/* MARKET ANALYSIS */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                  <div style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                    <h3 style={{ color: '#4f7cff', marginBottom: '15px', marginTop: 0 }}>📊 Market Size</h3>
                    <p style={{ color: '#10b981', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 0 10px 0' }}>{data?.analyze?.marketSize}</p>
                    <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>Total addressable market annually</p>
                  </div>

                  <div style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                    <h3 style={{ color: '#4f7cff', marginBottom: '15px', marginTop: 0 }}>📈 Growth Rate</h3>
                    <p style={{ color: '#10b981', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 0 10px 0' }}>{data?.analyze?.growthRate}</p>
                    <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>Compound annual growth rate</p>
                  </div>

                  <div style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                    <h3 style={{ color: '#4f7cff', marginBottom: '15px', marginTop: 0 }}>💰 Est. Earnings</h3>
                    <p style={{ color: '#10b981', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 0 10px 0' }}>{data?.analyze?.estimatedEarnings}</p>
                    <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>Potential monthly income</p>
                  </div>
                </div>

                {/* OPPORTUNITIES */}
                <div style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #10b981', marginBottom: '40px' }}>
                  <h3 style={{ color: '#10b981', marginBottom: '15px', marginTop: 0 }}>✅ Key Opportunities</h3>
                  <ul style={{ color: '#a8adb8', margin: 0, paddingLeft: '20px', lineHeight: '2' }}>
                    {data?.analyze?.opportunities?.map((opp: string, i: number) => (
                      <li key={i}>{opp}</li>
                    ))}
                  </ul>
                </div>

                {/* CHALLENGES */}
                <div style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #ef4444', marginBottom: '40px' }}>
                  <h3 style={{ color: '#ef4444', marginBottom: '15px', marginTop: 0 }}>⚠️ Key Challenges</h3>
                  <ul style={{ color: '#a8adb8', margin: 0, paddingLeft: '20px', lineHeight: '2' }}>
                    {data?.analyze?.challenges?.map((challenge: string, i: number) => (
                      <li key={i}>{challenge}</li>
                    ))}
                  </ul>
                </div>

                {/* RECOMMENDATIONS */}
                <div style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #4f7cff', marginBottom: '40px' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '15px', marginTop: 0 }}>💡 Strategic Recommendations</h3>
                  <ol style={{ color: '#a8adb8', margin: 0, paddingLeft: '20px', lineHeight: '2' }}>
                    {data?.analyze?.recommendations?.map((rec: string, i: number) => (
                      <li key={i}>{rec}</li>
                    ))}
                  </ol>
                </div>

                {/* TOP KEYWORDS */}
                <div style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a', marginBottom: '40px' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '15px', marginTop: 0 }}>🎯 Top Keywords to Target</h3>
                  <ul style={{ color: '#a8adb8', margin: 0, paddingLeft: '20px', lineHeight: '2' }}>
                    {data?.analyze?.topKeywords?.map((kw: string, i: number) => (
                      <li key={i}><strong>{kw}</strong></li>
                    ))}
                  </ul>
                </div>

                {/* TOP OFFERS */}
                <div style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '15px', marginTop: 0 }}>💸 Top Monetization Offers</h3>
                  <ul style={{ color: '#a8adb8', margin: 0, paddingLeft: '20px', lineHeight: '2' }}>
                    {data?.analyze?.topOffers?.map((offer: string, i: number) => (
                      <li key={i}>{offer}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

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
                      <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>Higher traffic = more potential visitors. 5000+ is excellent, 3000-5000 is good, below 3000 is low.</p>
                    </div>
                    <div>
                      <h4 style={{ color: '#f59e0b', marginBottom: '8px' }}>🟡 Competition</h4>
                      <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>Lower competition = easier to rank. 0-30 is low (easy), 30-60 is medium, 60+ is high (hard).</p>
                    </div>
                    <div>
                      <h4 style={{ color: '#ef4444', marginBottom: '8px' }}>🔴 Difficulty</h4>
                      <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>Lower difficulty = easier to rank. Look for keywords with low difficulty and high traffic.</p>
                    </div>
                  </div>
                </div>

                {/* BEST KEYWORDS */}
                <div style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #10b981', marginBottom: '30px' }}>
                  <h3 style={{ color: '#10b981', marginBottom: '10px' }}>✅ Best Keywords (High Traffic + Low Difficulty)</h3>
                  <ul style={{ color: '#a8adb8', margin: 0, paddingLeft: '20px' }}>
                    {data?.keywords?.filter((kw: any) => kw.traffic > 5000 && kw.difficulty < 40).map((kw: any, i: number) => (
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
                      {data?.keywords?.map((kw: any, i: number) => {
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
              </div>
            )}

            {/* OFFERS */}
            {activeTool === 'Offers' && (
              <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
                <h2 style={{ color: '#4f7cff', marginBottom: '30px' }}>💰 CPA Offers for "{niche}"</h2>
                
                {/* OFFERS GRID */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                  {data?.offers?.map((offer: any, i: number) => (
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
              </div>
            )}

            {/* DOMAINS */}
            {activeTool === 'Domains' && (
              <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
                <h2 style={{ color: '#4f7cff', marginBottom: '30px' }}>🌐 Expired Domains for "{niche}"</h2>
                
                {/* DOMAINS GRID */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                  {data?.domains?.map((domain: any, i: number) => (
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
              </div>
            )}

            {/* BLUEPRINT */}
            {activeTool === 'Blueprint' && (
              <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
                <h2 style={{ color: '#4f7cff', marginBottom: '30px' }}>📐 Website Blueprint for "{niche}"</h2>
                
                {/* STRATEGY */}
                <div style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a', marginBottom: '30px' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '10px' }}>🎯 Overall Strategy</h3>
                  <p style={{ color: '#a8adb8', lineHeight: '1.8' }}>{data?.blueprint?.strategy}</p>
                </div>

                {/* PAGES */}
                <div style={{ marginBottom: '30px' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '20px' }}>📄 Website Pages</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    {data?.blueprint?.pages?.map((page: any, i: number) => (
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
                  <p style={{ color: '#a8adb8', lineHeight: '1.8' }}>{data?.blueprint?.monetization}</p>
                </div>

                {/* TIMELINE */}
                <div style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '10px' }}>📅 Launch Timeline</h3>
                  <p style={{ color: '#a8adb8', lineHeight: '1.8' }}>{data?.blueprint?.timeline}</p>
                </div>
              </div>
            )}

            {/* SCRIPTS */}
            {activeTool === 'Scripts' && (
              <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
                <h2 style={{ color: '#4f7cff', marginBottom: '30px' }}>🎬 Video Scripts for "{niche}"</h2>
                
                {/* SCRIPTS */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                  {data?.scripts?.map((script: any, i: number) => (
                    <div key={i} style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                      <h3 style={{ color: '#4f7cff', marginBottom: '10px' }}>{script.title}</h3>
                      <p style={{ color: '#a8adb8', marginBottom: '20px', fontSize: '0.9rem' }}>⏱️ Duration: {script.duration}</p>
                      
                      <div style={{ background: '#1a2847', padding: '15px', borderRadius: '6px', marginBottom: '15px' }}>
                        <h4 style={{ color: '#10b981', marginBottom: '8px', marginTop: 0 }}>Full Script:</h4>
                        <p style={{ color: '#a8adb8', margin: 0, lineHeight: '1.8', whiteSpace: 'pre-wrap', fontSize: '0.9rem' }}>{script.script}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TOOLS GRID AFTER SEARCH */}
            {!activeTool && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '40px' }}>
                {[
                  { icon: '📈', title: 'Analyze', desc: 'Deep niche analysis' },
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
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#4f7cff', marginBottom: '15px' }}>Legal</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><Link href="/privacy" style={{ color: '#a8adb8', textDecoration: 'none' }}>Privacy</Link></li>
                <li><Link href="/terms" style={{ color: '#a8adb8', textDecoration: 'none' }}>Terms</Link></li>
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
