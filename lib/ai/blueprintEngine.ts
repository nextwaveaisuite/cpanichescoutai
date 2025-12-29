export const plan = (keyword: string) => {
  const words = keyword.split(/\s+/);
  const main = words[0];
  
  return {
    siteName: `${main} Hub`,
    pages: [
      { title: `${keyword} - Complete Guide`, type: 'pillar', cta: 'Learn More' },
      { title: `Best ${keyword} Reviews`, type: 'cluster', cta: 'See Reviews' },
      { title: `How to Choose ${keyword}`, type: 'guide', cta: 'Get Guide' },
      { title: `${keyword} Comparison`, type: 'comparison', cta: 'Compare Now' },
      { title: `${keyword} Deals & Offers`, type: 'offers', cta: 'View Deals' }
    ],
    structure: {
      homepage: 'Hero + Featured Reviews + CTA',
      guides: 'In-depth content + Internal links',
      reviews: 'Product cards + Affiliate links',
      comparison: 'Table + Pros/Cons + CTA'
    },
    seo: {
      focus: keyword,
      relatedKeywords: [
        `best ${keyword}`,
        `${keyword} reviews`,
        `cheap ${keyword}`,
        `${keyword} comparison`
      ]
    }
  };
};
