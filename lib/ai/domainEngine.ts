import { calculateDomainScore } from '../scoring/domainScore';

const generateDomainVariations = (keyword: string) => {
  const words = keyword.split(/\s+/);
  const base = words.slice(0, 2).join('').toLowerCase();
  
  return [
    { domain: `${base}.com`, price: 12.99, age: 5, ext: 'com' },
    { domain: `${base}.net`, price: 8.99, age: 6, ext: 'net' },
    { domain: `${base}pro.com`, price: 14.99, age: 4, ext: 'com' },
    { domain: `the${base}.com`, price: 9.99, age: 7, ext: 'com' },
    { domain: `${base}hub.net`, price: 7.99, age: 5, ext: 'net' }
  ];
};

export const find = (keyword: string) => {
  const domains = generateDomainVariations(keyword);
  return domains.map(d => ({
    ...d,
    score: calculateDomainScore(d.domain, d.age, d.price),
    verdict: d.price < 15 ? 'BUY' : d.price < 25 ? 'CONSIDER' : 'SKIP'
  }));
};
