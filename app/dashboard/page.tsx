'use client';
import { useState } from 'react';

export default function Dashboard() {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ q: keyword })
      });
      const data = await res.json();
      setResults(data);
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
      <h1 style={{ marginBottom: "30px" }}>Keyword Analysis Dashboard</h1>

      <div style={{ background: "#1a2847", padding: "20px", borderRadius: "8px", marginBottom: "30px" }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            placeholder="Enter a keyword (e.g., best weight loss pills)"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && analyze()}
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "4px",
              border: "1px solid #2b3a6a",
              background: "#0b1220",
              color: "#fff"
            }}
          />
          <button
            onClick={analyze}
            disabled={loading}
            style={{
              padding: "12px 30px",
              background: "#4f7cff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            {loading ? 'Analyzing...' : 'Analyze'}
          </button>
        </div>
      </div>

      {results && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
          <div style={{ background: "#1a2847", padding: "20px", borderRadius: "8px", borderLeft: "4px solid #4f7cff" }}>
            <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#4f7cff" }}>{results.score}</div>
            <div style={{ color: "#a8adb8", fontSize: "0.9rem" }}>Keyword Score</div>
          </div>
          <div style={{ background: "#1a2847", padding: "20px", borderRadius: "8px", borderLeft: "4px solid #10b981" }}>
            <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#10b981" }}>{results.difficulty}</div>
            <div style={{ color: "#a8adb8", fontSize: "0.9rem" }}>Difficulty</div>
          </div>
          <div style={{ background: "#1a2847", padding: "20px", borderRadius: "8px", borderLeft: "4px solid #f59e0b" }}>
            <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#f59e0b" }}>{results.profit}</div>
            <div style={{ color: "#a8adb8", fontSize: "0.9rem" }}>Profit Score</div>
          </div>
          <div style={{ background: "#1a2847", padding: "20px", borderRadius: "8px", borderLeft: "4px solid #ef4444" }}>
            <div style={{ fontSize: "2rem", fontWeight: "bold", color: results.verdict === 'BUILD' ? '#10b981' : results.verdict === 'MONITOR' ? '#f59e0b' : '#ef4444' }}>
              {results.verdict}
            </div>
            <div style={{ color: "#a8adb8", fontSize: "0.9rem" }}>Verdict</div>
          </div>
        </div>
      )}

      {!results && !loading && (
        <div style={{ textAlign: "center", color: "#a8adb8", padding: "60px 20px" }}>
          <p>Enter a keyword and click "Analyze" to get started</p>
        </div>
      )}
    </div>
  );
}
