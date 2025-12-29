'use client';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/email-capture', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>Find Profitable CPA Niches</h1>
        <p style={{ fontSize: "1.2rem", color: "#a8adb8", marginBottom: "40px" }}>
          AI-powered keyword analysis, CPA offers, domain finder, and website blueprints
        </p>
      </div>

      <div style={{ background: "#1a2847", padding: "40px", borderRadius: "8px", maxWidth: "600px", margin: "0 auto", marginBottom: "60px" }}>
        <h2 style={{ marginBottom: "20px", color: "#4f7cff" }}>Get Started Free 🎯</h2>
        {submitted ? (
          <div style={{ background: "#10b981", color: "white", padding: "15px", borderRadius: "4px" }}>
            ✓ Thanks! Check your email for next steps.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ width: "100%", padding: "12px", marginBottom: "12px", borderRadius: "4px", border: "1px solid #2b3a6a", background: "#0b1220", color: "#fff" }}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: "100%", padding: "12px", marginBottom: "12px", borderRadius: "4px", border: "1px solid #2b3a6a", background: "#0b1220", color: "#fff" }}
            />
            <button
              type="submit"
              style={{ width: "100%", padding: "12px", background: "#4f7cff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}
            >
              Get Free Access
            </button>
          </form>
        )}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        <div style={{ background: "#1a2847", padding: "20px", borderRadius: "8px" }}>
          <h3 style={{ color: "#4f7cff", marginBottom: "10px" }}>📊 Keyword Analysis</h3>
          <p style={{ color: "#a8adb8" }}>Score keywords by profit potential, difficulty, and traffic</p>
        </div>
        <div style={{ background: "#1a2847", padding: "20px", borderRadius: "8px" }}>
          <h3 style={{ color: "#4f7cff", marginBottom: "10px" }}>💰 CPA Offers</h3>
          <p style={{ color: "#a8adb8" }}>Match with 5 major CPA networks automatically</p>
        </div>
        <div style={{ background: "#1a2847", padding: "20px", borderRadius: "8px" }}>
          <h3 style={{ color: "#4f7cff", marginBottom: "10px" }}>🌐 Domain Finder</h3>
          <p style={{ color: "#a8adb8" }}>Find aged domains with traffic history</p>
        </div>
        <div style={{ background: "#1a2847", padding: "20px", borderRadius: "8px" }}>
          <h3 style={{ color: "#4f7cff", marginBottom: "10px" }}>📐 Blueprint</h3>
          <p style={{ color: "#a8adb8" }}>Get complete website structure recommendations</p>
        </div>
        <div style={{ background: "#1a2847", padding: "20px", borderRadius: "8px" }}>
          <h3 style={{ color: "#4f7cff", marginBottom: "10px" }}>📥 Export</h3>
          <p style={{ color: "#a8adb8" }}>Download professional analysis reports</p>
        </div>
        <div style={{ background: "#1a2847", padding: "20px", borderRadius: "8px" }}>
          <h3 style={{ color: "#4f7cff", marginBottom: "10px" }}>💳 Stripe Ready</h3>
          <p style={{ color: "#a8adb8" }}>Accept payments for credit packages</p>
        </div>
      </div>
    </div>
  );
}
