'use client';
import { useState } from 'react';
import Link from 'next/link';
import { NICHE_DATA } from './niche-data';

export default function Dashboard() {
  const [searchInput, setSearchInput] = useState('');
  const [selectedNiche, setSelectedNiche] = useState<string | null>(null);
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const niches = Object.keys(NICHE_DATA).map(key => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    key: key
  }));

  const handleSearch = (niche: string) => {
    const normalizedNiche = niche.toLowerCase().trim();
    if (NICHE_DATA[normalizedNiche as keyof typeof NICHE_DATA]) {
      setSelectedNiche(normalizedNiche);
      setSearchInput(niche);
      setShowDropdown(false);
      setActiveTool(null);
    }
  };

  const handleClear = () => {
    setSearchInput('');
    setSelectedNiche(null);
    setActiveTool(null);
    setShowDropdown(false);
  };

  const currentData = selectedNiche ? NICHE_DATA[selectedNiche as keyof typeof NICHE_DATA] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 to-blue-900 border-b border-purple-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white hover:text-purple-300 transition">
            CPA Niche Scout AI
          </Link>
          <Link href="/" className="text-purple-300 hover:text-white transition">
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">🔍 Enter Your Niche</h1>
          
          <div className="relative max-w-2xl mx-auto">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="e.g., weight loss, insurance, alcohol rehabilitation..."
                  value={searchInput}
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                    setShowDropdown(true);
                  }}
                  onFocus={() => setShowDropdown(true)}
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                
                {/* Dropdown */}
                {showDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-purple-500 rounded-lg shadow-xl z-10 max-h-64 overflow-y-auto">
                    {niches
                      .filter(n => n.name.toLowerCase().includes(searchInput.toLowerCase()) || searchInput === '')
                      .map(niche => (
                        <button
                          key={niche.key}
                          onClick={() => handleSearch(niche.key)}
                          className="w-full text-left px-4 py-3 hover:bg-purple-600 text-white transition border-b border-slate-700 last:border-b-0"
                        >
                          {niche.name}
                        </button>
                      ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => handleSearch(searchInput)}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:from-green-600 hover:to-emerald-700 transition transform hover:scale-105"
              >
                🔍 Search
              </button>

              {selectedNiche && (
                <button
                  onClick={handleClear}
                  className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition"
                >
                  ✕ Clear
                </button>
              )}
            </div>

            {/* Suggestions */}
            {!selectedNiche && (
              <div className="text-center mt-4 text-purple-300">
                ✅ Try: {niches.slice(0, 5).map(n => n.name).join(', ')}
              </div>
            )}
          </div>
        </div>

        {/* Tools Section */}
        {selectedNiche && currentData && (
          <div className="space-y-8">
            {/* Tool Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { id: 'analyze', label: 'Analyze', icon: '📈' },
                { id: 'keywords', label: 'Keywords', icon: '📊' },
                { id: 'offers', label: 'Offers', icon: '💰' },
                { id: 'domains', label: 'Domains', icon: '🌐' },
                { id: 'blueprint', label: 'Blueprint', icon: '📐' },
                { id: 'scripts', label: 'Scripts', icon: '🎬' }
              ].map(tool => (
                <button
                  key={tool.id}
                  onClick={() => setActiveTool(activeTool === tool.id ? null : tool.id)}
                  className={`p-4 rounded-lg font-bold transition transform hover:scale-105 ${
                    activeTool === tool.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white ring-2 ring-purple-400'
                      : 'bg-slate-800 text-purple-300 hover:bg-slate-700'
                  }`}
                >
                  <div className="text-2xl mb-2">{tool.icon}</div>
                  <div className="text-sm">{tool.label}</div>
                </button>
              ))}
            </div>

            {/* Tool Content */}
            {activeTool && (
              <div className="bg-slate-800 border border-purple-500 rounded-lg p-8 space-y-6">
                {/* Analyze */}
                {activeTool === 'analyze' && (
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-white">📈 Deep Niche Analysis</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-slate-700 p-4 rounded-lg">
                        <div className="text-purple-300 text-sm">Niche Score</div>
                        <div className="text-3xl font-bold text-white">{currentData.analyze.score}/100</div>
                      </div>
                      <div className="bg-slate-700 p-4 rounded-lg">
                        <div className="text-purple-300 text-sm">Difficulty</div>
                        <div className="text-3xl font-bold text-white">{currentData.analyze.difficulty}/50</div>
                      </div>
                      <div className="bg-slate-700 p-4 rounded-lg">
                        <div className="text-purple-300 text-sm">Profit Potential</div>
                        <div className="text-3xl font-bold text-white">{currentData.analyze.profitPotential}/100</div>
                      </div>
                      <div className="bg-slate-700 p-4 rounded-lg">
                        <div className="text-purple-300 text-sm">Verdict</div>
                        <div className="text-2xl font-bold text-green-400">{currentData.analyze.verdict}</div>
                      </div>
                    </div>
                    <div className="bg-slate-700 p-4 rounded-lg">
                      <h3 className="text-xl font-bold text-white mb-2">Analysis</h3>
                      <p className="text-gray-300">{currentData.analyze.analysis}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-slate-700 p-4 rounded-lg">
                        <h3 className="text-lg font-bold text-white mb-2">Opportunities</h3>
                        <ul className="space-y-1 text-gray-300">
                          {currentData.analyze.opportunities.map((opp, i) => (
                            <li key={i}>✓ {opp}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-slate-700 p-4 rounded-lg">
                        <h3 className="text-lg font-bold text-white mb-2">Challenges</h3>
                        <ul className="space-y-1 text-gray-300">
                          {currentData.analyze.challenges.map((ch, i) => (
                            <li key={i}>⚠ {ch}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Keywords */}
                {activeTool === 'keywords' && (
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-white">📊 Find High-Traffic Keywords</h2>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-purple-500">
                            <th className="text-left py-2 px-4 text-purple-300">Keyword</th>
                            <th className="text-left py-2 px-4 text-purple-300">Traffic</th>
                            <th className="text-left py-2 px-4 text-purple-300">Competition</th>
                            <th className="text-left py-2 px-4 text-purple-300">CPC</th>
                            <th className="text-left py-2 px-4 text-purple-300">Revenue</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentData.keywords.map((kw, i) => (
                            <tr key={i} className="border-b border-slate-700 hover:bg-slate-700">
                              <td className="py-3 px-4 text-white">{kw.keyword}</td>
                              <td className="py-3 px-4 text-gray-300">{kw.traffic.toLocaleString()}</td>
                              <td className="py-3 px-4 text-gray-300">{kw.competition}</td>
                              <td className="py-3 px-4 text-gray-300">{kw.cpc}</td>
                              <td className="py-3 px-4 text-green-400">{kw.monthlyRevenue}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Offers */}
                {activeTool === 'offers' && (
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-white">💰 Match CPA Offers</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {currentData.offers.map((offer, i) => (
                        <div key={i} className="bg-slate-700 p-4 rounded-lg border border-purple-500">
                          <h3 className="text-lg font-bold text-white mb-2">{offer.network}</h3>
                          <p className="text-gray-300 mb-3">{offer.desc}</p>
                          <div className="flex justify-between mb-3">
                            <div>
                              <div className="text-purple-300 text-sm">Payout</div>
                              <div className="text-xl font-bold text-green-400">{offer.payout}</div>
                            </div>
                            <div>
                              <div className="text-purple-300 text-sm">Commission</div>
                              <div className="text-xl font-bold text-green-400">{offer.commission}</div>
                            </div>
                          </div>
                          <a
                            href={offer.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 rounded hover:from-purple-700 hover:to-blue-700 transition"
                          >
                            Visit Network
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Domains */}
                {activeTool === 'domains' && (
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-white">🌐 Find Expired Domains</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {currentData.domains.map((domain, i) => (
                        <div key={i} className="bg-slate-700 p-4 rounded-lg border border-purple-500">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="text-lg font-bold text-white">{domain.domain}</h3>
                              <div className={`text-sm font-bold ${domain.verdict === 'EXCELLENT' ? 'text-green-400' : domain.verdict === 'GOOD' ? 'text-blue-400' : 'text-yellow-400'}`}>
                                {domain.verdict}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-purple-300 text-sm">Price</div>
                              <div className="text-xl font-bold text-green-400">{domain.price}</div>
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-sm">
                            <div className="bg-slate-600 p-2 rounded">
                              <div className="text-purple-300">Traffic</div>
                              <div className="text-white font-bold">{domain.traffic.toLocaleString()}</div>
                            </div>
                            <div className="bg-slate-600 p-2 rounded">
                              <div className="text-purple-300">Backlinks</div>
                              <div className="text-white font-bold">{domain.backlinks}</div>
                            </div>
                            <div className="bg-slate-600 p-2 rounded">
                              <div className="text-purple-300">Authority</div>
                              <div className="text-white font-bold">{domain.authority}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Blueprint */}
                {activeTool === 'blueprint' && (
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-white">📐 Website Structure</h2>
                    <div className="bg-slate-700 p-4 rounded-lg mb-4">
                      <h3 className="text-lg font-bold text-white mb-2">Monetization Strategy</h3>
                      <p className="text-gray-300">{currentData.blueprint.monetization}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {currentData.blueprint.pages.map((page, i) => (
                        <div key={i} className="bg-slate-700 p-4 rounded-lg border border-purple-500">
                          <h3 className="text-lg font-bold text-white mb-2">{page.name}</h3>
                          <p className="text-gray-300 text-sm">{page.strategy}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Scripts */}
                {activeTool === 'scripts' && (
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-white">🎬 Video Scripts</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {currentData.scripts.map((script, i) => (
                        <div key={i} className="bg-slate-700 p-4 rounded-lg border border-purple-500">
                          <h3 className="text-lg font-bold text-white mb-2">{script.title}</h3>
                          <p className="text-purple-300 text-sm mb-3">{script.description}</p>
                          <p className="text-gray-300 text-sm">{script.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-purple-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white mb-4">Product</h3>
              <ul className="space-y-2 text-purple-300 text-sm">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition">Pricing</Link></li>
                <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-purple-300 text-sm">
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-purple-300 text-sm">
                <li><Link href="/privacy" className="hover:text-white transition">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition">Terms</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Compliance</h3>
              <ul className="space-y-2 text-purple-300 text-sm">
                <li><Link href="/compliance" className="hover:text-white transition">Compliance</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-purple-300 text-sm">
            <p>© 2025 CPA Niche Scout AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
