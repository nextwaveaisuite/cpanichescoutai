'use client';
import { useState, useEffect } from 'react';

export default function EmailCapturePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('emailPopupSeen');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => setIsOpen(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await fetch('/api/email-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
      });
      setSubmitted(true);
      localStorage.setItem('emailPopupSeen', 'true');
      setTimeout(() => setIsOpen(false), 2000);
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999
    }}>
      <div className="card" style={{ maxWidth: '500px', width: '90%', position: 'relative' }}>
        <button
          onClick={() => setIsOpen(false)}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: 'none',
            border: 'none',
            color: '#a8adb8',
            fontSize: '24px',
            cursor: 'pointer',
            padding: '0',
            width: '30px',
            height: '30px'
          }}
        >
          ✕
        </button>

        <h2 style={{ marginBottom: '8px', color: '#4f7cff' }}>Get Started Free! 🎯</h2>
        <p style={{ marginBottom: '24px', color: '#a8adb8' }}>
          Join thousands of CPA marketers finding profitable niches. Get instant access to our AI tool.
        </p>

        {submitted ? (
          <div className="alert alert-success">
            ✓ Thanks! Check your email for next steps.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              {loading ? 'Sending...' : 'Get Free Access'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
