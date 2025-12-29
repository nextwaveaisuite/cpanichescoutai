'use client';
import Link from 'next/link';

export default function Compliance() {
  return (
    <div style={{ minHeight: '100vh', background: '#0b1220', color: '#fff' }}>
      {/* HEADER */}
      <header style={{ background: 'linear-gradient(135deg, #1a2847 0%, #2b3a6a 100%)', padding: '20px', borderBottom: '2px solid #4f7cff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontSize: '1.8rem', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none' }}>🚀 CPA Niche Scout AI</Link>
        </div>
      </header>

      {/* CONTENT */}
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 20px' }}>
        <h1 style={{ color: '#4f7cff', marginBottom: '40px' }}>Compliance & Disclosures</h1>

        <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a', marginBottom: '30px' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '15px' }}>📋 Affiliate Disclosure</h2>
          <p style={{ color: '#a8adb8', lineHeight: '1.8' }}>CPA Niche Scout AI is a participant in affiliate programs including ClickBank, CJ Affiliate, Impact, Rakuten, and ShareASale. We earn commissions from qualifying purchases through our affiliate links. This means if you click on a link and make a purchase, we may receive a commission at no additional cost to you.</p>
        </div>

        <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a', marginBottom: '30px' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '15px' }}>⚖️ FTC Compliance</h2>
          <p style={{ color: '#a8adb8', lineHeight: '1.8' }}>As required by the Federal Trade Commission (FTC), we disclose that some links on this website are affiliate links. This means if you click on a link and make a purchase, we may receive a commission at no additional cost to you. We only recommend products and services that we believe provide value to our audience.</p>
        </div>

        <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a', marginBottom: '30px' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '15px' }}>💰 Income Disclaimer</h2>
          <p style={{ color: '#a8adb8', lineHeight: '1.8' }}>Results are not typical. Individual results may vary. There is no guarantee that you will achieve any particular result. Income and earnings statements made by CPA Niche Scout AI are estimates only of what we think you could earn. These results are not typical and your results may vary. There is no guarantee that you will achieve any particular result. Your success depends on many factors including your effort, experience, knowledge, and market conditions.</p>
        </div>

        <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a', marginBottom: '30px' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '15px' }}>⚠️ Risk Disclaimer</h2>
          <p style={{ color: '#a8adb8', lineHeight: '1.8' }}>The information provided is for educational purposes only. Past performance is not indicative of future results. All investments and business ventures carry risk, including the potential loss of principal. You should not invest money that you cannot afford to lose. Always conduct your own research and consult with a qualified financial advisor before making investment decisions.</p>
        </div>

        <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a', marginBottom: '30px' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '15px' }}>🏥 Medical Disclaimer</h2>
          <p style={{ color: '#a8adb8', lineHeight: '1.8' }}>This website is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider before starting any weight loss program, taking supplements, or making significant changes to your health routine. The information on this website is not intended to diagnose, treat, cure, or prevent any disease.</p>
        </div>

        <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a', marginBottom: '30px' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '15px' }}>💳 Financial Disclaimer</h2>
          <p style={{ color: '#a8adb8', lineHeight: '1.8' }}>This website is not financial advice. The information provided is for educational purposes only. Consult with a qualified financial advisor before making investment or financial decisions. We are not responsible for any financial losses or consequences resulting from the use of information on this website.</p>
        </div>

        <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
          <h2 style={{ color: '#4f7cff', marginBottom: '15px' }}>📝 Liability Waiver</h2>
          <p style={{ color: '#a8adb8', lineHeight: '1.8' }}>CPA Niche Scout AI and its owners, operators, and affiliates are not liable for any direct, indirect, incidental, special, or consequential damages arising out of or relating to your use of this website or the information provided. Use this website at your own risk.</p>
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{ background: '#1a2847', borderTop: '2px solid #2b3a6a', padding: '40px 20px', marginTop: '80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center', color: '#a8adb8', fontSize: '0.85rem' }}>
          <p>© 2025 CPA Niche Scout AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
