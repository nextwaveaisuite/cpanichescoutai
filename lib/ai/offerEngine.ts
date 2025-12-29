const cpaNetworks = [
  { network: 'ClickBank', payout: 45, categories: ['weight loss', 'dating', 'education', 'health', 'business'] },
  { network: 'CJ Affiliate', payout: 35, categories: ['insurance', 'finance', 'software', 'hosting', 'vpn'] },
  { network: 'Impact', payout: 40, categories: ['software', 'saas', 'hosting', 'security', 'vpn'] },
  { network: 'Rakuten', payout: 30, categories: ['shopping', 'travel', 'finance', 'insurance'] },
  { network: 'ShareASale', payout: 38, categories: ['software', 'hosting', 'education', 'fitness'] }
];

export const match = (keyword: string) => {
  const keywordLower = keyword.toLowerCase();
  const matches = cpaNetworks.filter(net => 
    net.categories.some(cat => keywordLower.includes(cat))
  );
  
  if (matches.length === 0) {
    return cpaNetworks.slice(0, 2).map(net => ({
      network: net.network,
      name: `${keyword} - ${net.network} Offer`,
      payout: net.payout,
      relevance: 'general'
    }));
  }
  
  return matches.map(net => ({
    network: net.network,
    name: `${keyword} - ${net.network} Offer`,
    payout: net.payout,
    relevance: 'high'
  }));
};
