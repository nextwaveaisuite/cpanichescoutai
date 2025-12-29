'use client';
import Link from 'next/link';

export default function Privacy() {
  return (
    <div style={{ minHeight: '100vh', background: '#0b1220', color: '#fff' }}>
      <header style={{ background: 'linear-gradient(135deg, #1a2847 0%, #2b3a6a 100%)', padding: '20px', borderBottom: '2px solid #4f7cff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <Link href="/" style={{ fontSize: '1.8rem', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none' }}>🚀 CPA Niche Scout AI</Link>
        </div>
      </header>

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 20px' }}>
        <h1 style={{ color: '#4f7cff', marginBottom: '40px' }}>Privacy Policy</h1>

        <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a', marginBottom: '30px' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '15px' }}>Information We Collect</h2>
          <p style={{ color: '#a8adb8', lineHeight: '1.8' }}>We collect information you provide directly to us, such as your name, email address, and any other information you choose to provide when using our service. We also automatically collect certain information about your device and how you interact with our website.</p>
        </div>

        <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a', marginBottom: '30px' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '15px' }}>How We Use Your Information</h2>
          <p style={{ color: '#a8adb8', lineHeight: '1.8' }}>We use your information to provide, maintain, and improve our services, to communicate with you, and to send you promotional materials. We may also use your information to comply with legal obligations and to protect our rights.</p>
        </div>

        <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a', marginBottom: '30px' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '15px' }}>Data Security</h2>
          <p style={{ color: '#a8adb8', lineHeight: '1.8' }}>We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
        </div>

        <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '15px' }}>Contact Us</h2>
          <p style={{ color: '#a8adb8', lineHeight: '1.8' }}>If you have questions about this Privacy Policy, please contact us at support@cpanichescoutai.com</p>
        </div>
      </main>

      <footer style={{ background: '#1a2847', borderTop: '2px solid #2b3a6a', padding: '40px 20px', marginTop: '80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center', color: '#a8adb8', fontSize: '0.85rem' }}>
          <p>© 2025 CPA Niche Scout AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
