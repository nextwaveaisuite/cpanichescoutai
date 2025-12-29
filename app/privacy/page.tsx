'use client';
import Link from 'next/link';

export default function Privacy() {
  return (
    <div style={{ minHeight: '100vh', background: '#0b1220', color: '#fff' }}>
      <header style={{ background: 'linear-gradient(135deg, #1a2847 0%, #2b3a6a 100%)', padding: '20px', borderBottom: '2px solid #4f7cff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/home" style={{ fontSize: '1.8rem', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none' }}>🚀 CPA Niche Scout AI</Link>
        </div>
      </header>

      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px' }}>
        <h1 style={{ marginBottom: '40px', color: '#4f7cff', fontSize: '2.5rem' }}>Privacy Policy</h1>

        <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a', marginBottom: '20px' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '15px' }}>1. Information We Collect</h2>
          <p style={{ color: '#a8adb8', lineHeight: '1.8' }}>We collect information you provide directly to us, such as when you create an account, subscribe to our service, or contact us. This includes your name, email address, and any other information you choose to provide.</p>
        </div>

        <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a', marginBottom: '20px' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '15px' }}>2. How We Use Your Information</h2>
          <p style={{ color: '#a8adb8', lineHeight: '1.8' }}>We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions.</p>
        </div>

        <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a', marginBottom: '20px' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '15px' }}>3. Data Security</h2>
          <p style={{ color: '#a8adb8', lineHeight: '1.8' }}>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
        </div>

        <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a', marginBottom: '20px' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '15px' }}>4. Your Rights</h2>
          <p style={{ color: '#a8adb8', lineHeight: '1.8' }}>You have the right to access, update, or delete your personal information at any time by contacting us. You may also opt out of receiving promotional communications from us.</p>
        </div>

        <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '15px' }}>5. Contact Us</h2>
          <p style={{ color: '#a8adb8', lineHeight: '1.8' }}>If you have questions about this Privacy Policy, please contact us at support@cpanichescout.ai.</p>
        </div>
      </main>

      <footer style={{ background: '#1a2847', borderTop: '2px solid #2b3a6a', padding: '40px 20px', marginTop: '80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginBottom: '40px' }}>
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
      </footer>
    </div>
  );
}
