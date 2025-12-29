// Enhanced Keyword Scoring Algorithm
export interface KeywordMetrics {
  length: number;
  wordCount: number;
  hasModifier: boolean;
  cpaNiche: number;
  specificity: number;
}

export const analyzeKeyword = (keyword: string): KeywordMetrics => {
  const trimmed = keyword.trim().toLowerCase();
  const words = trimmed.split(/\s+/).filter(w => w.length > 0);
  
  const cpaModifiers = ['best', 'top', 'review', 'how to', 'guide', 'tutorial', 'comparison', 'vs', 'alternative', 'cheap', 'affordable', 'free', 'cost', 'price', 'deal', 'offer', 'coupon', 'discount'];
  const hasModifier = cpaModifiers.some(mod => trimmed.includes(mod));
  
  const cpaNiches = ['insurance', 'loan', 'mortgage', 'credit', 'dating', 'weight loss', 'supplement', 'vpn', 'antivirus', 'hosting', 'software', 'casino', 'betting', 'forex', 'crypto', 'education', 'health', 'fitness', 'business', 'marketing'];
  const cpaNiche = cpaNiches.some(niche => trimmed.includes(niche)) ? 75 : 40;
  
  const specificity = Math.min(100, words.length * 15 + trimmed.length * 0.5);
  
  return {
    length: trimmed.length,
    wordCount: words.length,
    hasModifier,
    cpaNiche,
    specificity
  };
};

export const calculateKeywordScore = (keyword: string): number => {
  const metrics = analyzeKeyword(keyword);
  
  const modifierBonus = metrics.hasModifier ? 20 : 0;
  const cpaBonus = metrics.cpaNiche;
  const lengthScore = Math.min(30, metrics.wordCount * 8);
  const specificityScore = Math.min(30, metrics.specificity * 0.3);
  
  const total = modifierBonus + cpaBonus + lengthScore + specificityScore;
  return Math.min(95, Math.max(15, Math.round(total)));
};

export const fn = (n: number) => n;