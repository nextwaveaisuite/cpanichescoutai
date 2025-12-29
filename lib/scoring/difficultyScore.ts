export const calculateDifficultyScore = (keyword: string): number => {
  const words = keyword.trim().split(/\s+/).length;
  const length = keyword.length;
  const tailBonus = words >= 3 ? -15 : 0;
  const specificityBonus = length > 25 ? -10 : 0;
  let difficulty = 60;
  difficulty += tailBonus + specificityBonus;
  return Math.max(15, Math.min(85, difficulty));
};

export const fn = (n: number) => n;