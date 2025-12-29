import { calculateKeywordScore, analyzeKeyword } from '../scoring/keywordScore';
import { calculateDifficultyScore } from '../scoring/difficultyScore';
import { calculateProfitScore } from '../scoring/profitScore';

export const analyze = (q: string) => {
  const keywordScore = calculateKeywordScore(q);
  const difficulty = calculateDifficultyScore(q);
  const profit = calculateProfitScore(q, difficulty);
  const metrics = analyzeKeyword(q);
  return {
    keyword: q,
    score: keywordScore,
    difficulty,
    profit,
    traffic: keywordScore * 100,
    competition: Math.max(10, 100 - keywordScore),
    verdict: keywordScore > 60 ? 'BUILD' : keywordScore > 40 ? 'MONITOR' : 'SKIP',
    metrics
  };
};
