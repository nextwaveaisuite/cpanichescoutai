export const calculateProfitScore = (keyword: string, difficulty: number): number => {
  const words = keyword.trim().split(/\s+/).length;
  const highValueNiches = ['insurance', 'loan', 'mortgage', 'credit', 'forex', 'casino', 'vpn', 'hosting'];
  const niche = keyword.toLowerCase();
  const isHighValue = highValueNiches.some(h => niche.includes(h));
  const nicherBonus = isHighValue ? 30 : 10;
  const easyBonus = difficulty < 40 ? 20 : 0;
  const specificBonus = words >= 3 ? 15 : 0;
  const profit = 40 + nicherBonus + easyBonus + specificBonus;
  return Math.min(95, Math.max(20, profit));
};

export const fn = (n: number) => n;