'use client';
import { useState } from 'react';

export default function Dashboard() {
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('analyze');

  const runAnalysis = async (endpoint: string) => {
    if (!keyword.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ q: keyword })
      });
      const data = await res.json();
      setResults({ endpoint, data });
      setActiveTab(endpoint);
    } catch (error) {
      setResults({ error: 'Failed to fetch' });
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">CPA Niche Scout AI</h2>
          <p className="card-subtitle">Find profitable niches, offers, and domains</p>
        </div>

        <div className="form-group">
          <label>Enter Your Keyword</label>
          <div className="flex-gap-12" style={{ display: 'flex', gap: '12px' }}>
            <input
              type="text"
              placeholder="e.g., best weight loss pills, cheap car insurance..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && runAnalysis('analyze')}
              style={{ flex: 1 }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '16px' }}>
          <button onClick={() => runAnalysis('analyze')} disabled={loading || !keyword.trim()}>
            {loading ? '⏳ Analyzing...' : '📊 Analyze'}
          </button>
          <button onClick={() => runAnalysis('offers')} disabled={loading || !keyword.trim()} className="secondary">
            💰 Offers
          </button>
          <button onClick={() => runAnalysis('domains')} disabled={loading || !keyword.trim()} className="secondary">
            🌐 Domains
          </button>
          <button onClick={() => runAnalysis('blueprint')} disabled={loading || !keyword.trim()} className="secondary">
            📐 Blueprint
          </button>
          <button onClick={() => runAnalysis('export')} disabled={loading || !keyword.trim()} className="secondary">
            📥 Export
          </button>
        </div>
      </div>

      {results && (
        <div className="results-container">
          {results.error ? (
            <div className="alert alert-danger">
              <span>⚠️ {results.error}</span>
            </div>
          ) : (
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Results for: {results.data.keyword}</h3>
              </div>
              <pre style={{ background: '#0b1220', padding: '16px', borderRadius: '8px', overflow: 'auto', maxHeight: '500px', fontSize: '0.85rem' }}>
                {JSON.stringify(results.data, null, 2)}
              </pre>
            </div>
          )}
        </div>
      )}

      {!results && (
        <div className="empty-state">
          <div className="empty-state-icon">🔍</div>
          <p>Enter a keyword and click an analysis button to get started</p>
        </div>
      )}
    </div>
  );
}
