import { calculateKeywordScore } from '@/lib/scoring/keywordScore';
import { calculateDifficultyScore } from '@/lib/scoring/difficultyScore';
import { calculateProfitScore } from '@/lib/scoring/profitScore';

export interface KeywordAnalysis {
  keyword: string;
  score: number;
  difficulty: number;
  profit: number;
  traffic: number;
  competition: number;
  verdict: 'BUILD' | 'MONITOR' | 'SKIP';
  metrics: {
    wordCount: number;
    length: number;
    hasCPAModifier: boolean;
    isLongTail: boolean;
  };
}

export function analyze(keyword: string): KeywordAnalysis {
  const wordCount = keyword.split(' ').length;
  const length = keyword.length;
  const hasCPAModifier = /best|review|guide|how to|cheap|affordable|free|top|vs|comparison/i.test(keyword);
  const isLongTail = wordCount >= 3;

  const keywordScore = calculateKeywordScore(keyword);
  const difficultyScore = calculateDifficultyScore(keyword);
  const profitScore = calculateProfitScore(keyword);

  const traffic = Math.floor(Math.random() * 10000) + 500;
  const competition = Math.floor(Math.random() * 100);

  let verdict: 'BUILD' | 'MONITOR' | 'SKIP' = 'SKIP';
  if (keywordScore > 60) verdict = 'BUILD';
  else if (keywordScore > 40) verdict = 'MONITOR';

  return {
    keyword,
    score: keywordScore,
    difficulty: difficultyScore,
    profit: profitScore,
    traffic,
    competition,
    verdict,
    metrics: {
      wordCount,
      length,
      hasCPAModifier,
      isLongTail,
    },
  };
}
