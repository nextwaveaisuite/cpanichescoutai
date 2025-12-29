export function calculateDifficultyScore(keyword: string): number {
  const wordCount = keyword.split(' ').length;
  const length = keyword.length;

  let score = 60;

  if (wordCount >= 3) score -= 15;
  if (length > 25) score -= 10;

  return Math.min(85, Math.max(15, score));
}
