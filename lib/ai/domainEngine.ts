import { calculateDomainScore } from '@/lib/scoring/domainScore';

export interface DomainSuggestion {
  domain: string;
  price: number;
  age: number;
  score: number;
  verdict: 'BUY' | 'CONSIDER' | 'SKIP';
  extension: string;
}

export function find(keyword: string): DomainSuggestion[] {
  const words = keyword.split(' ');
  const base = words.join('');
  const baseShort = words.map(w => w[0]).join('');

  const variations = [
    { domain: `${base}.com`, extension: '.com' },
    { domain: `${base}.net`, extension: '.net' },
    { domain: `${baseShort}pro.com`, extension: '.com' },
    { domain: `the${base}.com`, extension: '.com' },
    { domain: `${baseShort}hub.net`, extension: '.net' },
  ];

  return variations.map((v, idx) => {
    const price = Math.floor(Math.random() * 50) + 5;
    const age = Math.floor(Math.random() * 10) + 1;
    const score = calculateDomainScore(v.extension, age, v.domain.length, price);

    let verdict: 'BUY' | 'CONSIDER' | 'SKIP' = 'SKIP';
    if (price < 15) verdict = 'BUY';
    else if (price < 30) verdict = 'CONSIDER';

    return {
      domain: v.domain,
      price,
      age,
      score,
      verdict,
      extension: v.extension,
    };
  });
}
