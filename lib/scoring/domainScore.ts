export const calculateDomainScore = (domain: string, age: number, price: number): number => {
  const ext = domain.split('.').pop()?.toLowerCase() || '';
  const length = domain.replace(/\..+/, '').length;
  const extScore = ext === 'com' ? 25 : ext === 'net' ? 15 : 10;
  const ageScore = Math.min(20, age * 2);
  const lengthScore = length <= 12 ? 15 : 5;
  const priceScore = price < 15 ? 15 : price < 30 ? 10 : 5;
  const total = extScore + ageScore + lengthScore + priceScore;
  return Math.min(95, Math.max(20, total));
};

export const fn = (n: number) => n;