const HIGH_VALUE_NICHES = ['insurance', 'loan', 'mortgage', 'forex', 'casino', 'vpn', 'dating', 'cbd', 'crypto', 'weight loss'];

export function calculateProfitScore(keyword: string): number {
  const lowerKeyword = keyword.toLowerCase();
  const wordCount = keyword.split(' ').length;

  let score = 50;

  const isHighValue = HIGH_VALUE_NICHES.some(niche => lowerKeyword.includes(niche));
  if (isHighValue) score += 30;

  if (wordCount >= 3) score += 15;

  return Math.min(95, Math.max(20, score));
}
