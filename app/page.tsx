'use client';
import { useState } from 'react';

export default function Home() {
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleQuickAnalyze = async () => {
    if (!keyword.trim()) return;
    window.location.href = `/dashboard?keyword=${encodeURIComponent(keyword)}`;
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '60px', paddingBottom: '60px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '16px', color: '#4f7cff' }}>
            CPA Niche Scout AI
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#a8adb8', marginBottom: '24px' }}>
            Find Profitable CPA Niches, Expired Domains & Offers in Minutes
          </p>
          <p style={{ color: '#a8adb8', maxWidth: '600px', margin: '0 auto' }}>
            Stop manually searching for low-competition keywords. Let AI analyze niches, find matching CPA offers, discover aged domains, and generate website blueprints automatically.
          </p>
        </div>

        <div className="card" style={{ maxWidth: '600px', margin: '0 auto 48px', width: '100%' }}>
          <div className="form-group">
            <label>Try it now - Enter a keyword</label>
            <div style={{ display: 'flex', gap: '12px' }}>
              <input
                type="text"
                placeholder="e.g., best weight loss pills, cheap car insurance..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleQuickAnalyze()}
              />
              <button onClick={handleQuickAnalyze} disabled={loading || !keyword.trim()} style={{ whiteSpace: 'nowrap' }}>
                {loading ? 'Analyzing...' : 'Get Started'}
              </button>
            </div>
          </div>
        </div>

        <div className="grid-3" style={{ marginBottom: '48px' }}>
          <div className="card">
            <h3>📊 Keyword Analysis</h3>
            <p>Intelligent scoring for traffic, competition, and profit potential</p>
          </div>
          <div className="card">
            <h3>💰 CPA Offers</h3>
            <p>Match keywords with high-paying CPA networks automatically</p>
          </div>
          <div className="card">
            <h3>🌐 Domain Finder</h3>
            <p>Discover aged, expired domains under $15 with traffic history</p>
          </div>
          <div className="card">
            <h3>📐 Site Blueprint</h3>
            <p>Get a complete website structure optimized for conversions</p>
          </div>
          <div className="card">
            <h3>📥 Export Reports</h3>
            <p>Download professional HTML reports for your analysis</p>
          </div>
          <div className="card">
            <h3>⚡ Next-Gen AI</h3>
            <p>Powered by advanced algorithms for accurate insights</p>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="/dashboard" className="button" style={{ display: 'inline-flex', padding: '14px 32px', fontSize: '1rem' }}>
            Open Full Dashboard →
          </a>
        </div>
      </div>

      <div className="footer">
        <p>CPA Niche Scout AI v2.0 | Find Your Next Profitable Niche</p>
      </div>
    </div>
  );
}
