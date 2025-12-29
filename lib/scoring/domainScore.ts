export function calculateDomainScore(extension: string, age: number, length: number, price: number): number {
  let score = 0;

  const extensionScore = extension === '.com' ? 25 : extension === '.net' ? 15 : 10;
  score += extensionScore;

  const ageScore = Math.min(20, age * 2);
  score += ageScore;

  if (length <= 12) score += 15;

  if (price < 15) score += 15;
  else if (price < 30) score += 10;
  else score += 5;

  return Math.min(95, Math.max(20, score));
}
