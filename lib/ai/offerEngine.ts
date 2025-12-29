export interface CPAOffer {
  network: string;
  name: string;
  payout: number;
  relevance: 'high' | 'general';
  category: string;
}

const NETWORKS = {
  ClickBank: { payout: 45, category: 'Digital Products' },
  'CJ Affiliate': { payout: 35, category: 'Affiliate Network' },
  Impact: { payout: 40, category: 'Performance Marketing' },
  Rakuten: { payout: 30, category: 'Cashback & Rewards' },
  ShareASale: { payout: 38, category: 'Affiliate Network' },
};

const CPA_KEYWORDS = ['weight loss', 'insurance', 'loan', 'forex', 'casino', 'vpn', 'dating', 'cbd', 'crypto', 'forex'];

export function match(keyword: string): CPAOffer[] {
  const lowerKeyword = keyword.toLowerCase();
  const isCPAKeyword = CPA_KEYWORDS.some(k => lowerKeyword.includes(k));

  return Object.entries(NETWORKS).map(([network, data]) => ({
    network,
    name: `${keyword} - ${network} Offer`,
    payout: data.payout,
    relevance: isCPAKeyword ? 'high' : 'general',
    category: data.category,
  }));
}
