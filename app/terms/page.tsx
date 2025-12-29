'use client';
import Link from 'next/link';

export default function Terms() {
  return (
    <div style={{ minHeight: '100vh', background: '#0b1220', color: '#fff' }}>
      <header style={{ background: 'linear-gradient(135deg, #1a2847 0%, #2b3a6a 100%)', padding: '20px', borderBottom: '2px solid #4f7cff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <Link href="/" style={{ fontSize: '1.8rem', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none' }}>🚀 CPA Niche Scout AI</Link>
        </div>
      </header>

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 20px' }}>
        <h1 style={{ color: '#4f7cff', marginBottom: '40px' }}>Terms of Service</h1>

        <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a', marginBottom: '30px' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '15px' }}>1. Acceptance of Terms</h2>
          <p style={{ color: '#a8adb8', lineHeight: '1.8' }}>By accessing and using CPA Niche Scout AI, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
        </div>

        <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a', marginBottom: '30px' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '15px' }}>2. Use License</h2>
          <p style={{ color: '#a8adb8', lineHeight: '1.8' }}>Permission is granted to temporarily download one copy of the materials (information or software) on CPA Niche Scout AI for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to decompile or reverse engineer any software contained on the website; remove any copyright or other proprietary notations from the materials.</p>
        </div>

        <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a', marginBottom: '30px' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '15px' }}>3. Disclaimer</h2>
          <p style={{ color: '#a8adb8', lineHeight: '1.8' }}>The materials on CPA Niche Scout AI are provided on an 'as is' basis. CPA Niche Scout AI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        </div>

        <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '15px' }}>4. Limitations</h2>
          <p style={{ color: '#a8adb8', lineHeight: '1.8' }}>In no event shall CPA Niche Scout AI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CPA Niche Scout AI, even if CPA Niche Scout AI or an authorized representative has been notified orally or in writing of the possibility of such damage.</p>
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
