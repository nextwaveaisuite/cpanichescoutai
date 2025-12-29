const CPA_MODIFIERS = ['best', 'review', 'guide', 'how to', 'cheap', 'affordable', 'free', 'top', 'vs', 'comparison'];
const HIGH_VALUE_NICHES = ['insurance', 'loan', 'mortgage', 'forex', 'casino', 'vpn', 'dating', 'cbd', 'crypto', 'weight loss', 'supplements'];

export function calculateKeywordScore(keyword: string): number {
  const lowerKeyword = keyword.toLowerCase();
  const wordCount = keyword.split(' ').length;
  const length = keyword.length;

  let score = 50;

  const hasCPAModifier = CPA_MODIFIERS.some(mod => lowerKeyword.includes(mod));
  if (hasCPAModifier) score += 20;

  const isHighValueNiche = HIGH_VALUE_NICHES.some(niche => lowerKeyword.includes(niche));
  if (isHighValueNiche) score += 15;

  if (wordCount >= 3) score += 10;
  if (length > 25) score += 5;

  return Math.min(95, Math.max(15, score));
}
