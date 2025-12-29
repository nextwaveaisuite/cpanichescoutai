'use client';
import Link from 'next/link';

export default function Compliance() {
  return (
    <div style={{ minHeight: '100vh', background: '#0b1220', color: '#fff' }}>
      {/* HEADER */}
      <header style={{ background: 'linear-gradient(135deg, #1a2847 0%, #2b3a6a 100%)', padding: '20px', borderBottom: '2px solid #4f7cff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/app" style={{ fontSize: '1.8rem', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none' }}>🚀 CPA Niche Scout AI</Link>
          <nav style={{ display: 'flex', gap: '20px' }}>
            <Link href="/app" style={{ color: '#a8adb8', textDecoration: 'none' }}>Home</Link>
            <Link href="/app/dashboard" style={{ color: '#a8adb8', textDecoration: 'none' }}>Dashboard</Link>
            <Link href="/app/pricing" style={{ color: '#a8adb8', textDecoration: 'none' }}>Pricing</Link>
          </nav>
        </div>
      </header>

      {/* COMPLIANCE CONTENT */}
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px' }}>
        <h1 style={{ marginBottom: '40px', color: '#4f7cff', fontSize: '2.5rem' }}>Compliance & Disclosures</h1>

        {[
          {
            title: 'Affiliate Disclosure',
            content: 'CPA Niche Scout AI is a participant in affiliate programs including ClickBank, CJ Affiliate, Impact, Rakuten, and ShareASale. We earn commissions from qualifying purchases through our affiliate links. As an affiliate, we may earn a commission if you purchase products or services through our links.'
          },
          {
            title: 'FTC Compliance',
            content: 'As required by the FTC, we disclose that some links on this website are affiliate links. This means if you click on a link and make a purchase, we may receive a commission at no additional cost to you. We only recommend products and services that we believe provide value to our users.'
          },
          {
            title: 'Income Disclaimer',
            content: 'Results are not typical. Individual results may vary. There is no guarantee that you will achieve any particular result. Income and earnings statements made by CPA Niche Scout AI are estimates only of what we think you could earn. These results are not typical and your results may vary. There is no guarantee that you will achieve any particular result.'
          },
          {
            title: 'Risk Disclaimer',
            content: 'The information provided is for educational purposes only. Past performance is not indicative of future results. All investments and business ventures carry risk, including the potential loss of principal. You should never invest money that you cannot afford to lose.'
          },
          {
            title: 'Medical Disclaimer',
            content: 'This website is not a substitute for professional medical advice. Always consult with a qualified healthcare provider before starting any weight loss program or taking supplements. The information provided is for educational purposes only and should not be used to diagnose, treat, cure, or prevent any disease.'
          },
          {
            title: 'Financial Disclaimer',
            content: 'This website is not financial advice. Consult with a qualified financial advisor before making investment decisions. CPA Niche Scout AI does not provide financial, investment, or legal advice. Always consult with a professional advisor before making any financial decisions.'
          },
          {
            title: 'Liability Waiver',
            content: 'CPA Niche Scout AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website or the information provided. This includes but is not limited to damages for loss of profits, goodwill, use, data, or other intangible losses.'
          }
        ].map((section, i) => (
          <div key={i} style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a', marginBottom: '20px' }}>
            <h2 style={{ color: '#4f7cff', marginBottom: '15px' }}>{section.title}</h2>
            <p style={{ color: '#a8adb8', lineHeight: '1.8', margin: 0 }}>{section.content}</p>
          </div>
        ))}
      </main>

      {/* FOOTER */}
      <footer style={{ background: '#1a2847', borderTop: '2px solid #2b3a6a', padding: '40px 20px', marginTop: '80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginBottom: '40px' }}>
            <div>
              <h4 style={{ color: '#4f7cff', marginBottom: '15px' }}>Software</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><Link href="/app" style={{ color: '#a8adb8', textDecoration: 'none' }}>Home</Link></li>
                <li><Link href="/app/dashboard" style={{ color: '#a8adb8', textDecoration: 'none' }}>Dashboard</Link></li>
                <li><Link href="/app/pricing" style={{ color: '#a8adb8', textDecoration: 'none' }}>Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#4f7cff', marginBottom: '15px' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><Link href="/app/about" style={{ color: '#a8adb8', textDecoration: 'none' }}>About</Link></li>
                <li><Link href="/app/contact" style={{ color: '#a8adb8', textDecoration: 'none' }}>Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#4f7cff', marginBottom: '15px' }}>Legal</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><Link href="/app/privacy" style={{ color: '#a8adb8', textDecoration: 'none' }}>Privacy</Link></li>
                <li><Link href="/app/terms" style={{ color: '#a8adb8', textDecoration: 'none' }}>Terms</Link></li>
                <li><Link href="/app/compliance" style={{ color: '#a8adb8', textDecoration: 'none' }}>Compliance</Link></li>
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
