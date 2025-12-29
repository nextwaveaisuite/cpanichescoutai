export interface BlueprintPage {
  name: string;
  type: string;
  description: string;
  keywords: string[];
}

export interface SiteBlueprint {
  keyword: string;
  siteName: string;
  pages: BlueprintPage[];
  structure: {
    homepage: string;
    pillarPages: number;
    clusterPages: number;
  };
  seo: {
    primaryKeyword: string;
    relatedKeywords: string[];
    contentStrategy: string;
  };
}

export function plan(keyword: string): SiteBlueprint {
  const words = keyword.split(' ');
  const siteName = words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') + ' Hub';

  const pages: BlueprintPage[] = [
    {
      name: 'Home',
      type: 'Homepage',
      description: 'Main landing page with value proposition',
      keywords: [keyword, `best ${keyword}`, `top ${keyword}`],
    },
    {
      name: 'Buying Guide',
      type: 'Pillar',
      description: 'Comprehensive guide for the niche',
      keywords: [`${keyword} guide`, `how to choose ${keyword}`, `${keyword} comparison`],
    },
    {
      name: 'Reviews',
      type: 'Cluster',
      description: 'Product/service reviews',
      keywords: [`${keyword} reviews`, `best ${keyword} 2025`, `${keyword} ratings`],
    },
    {
      name: 'Comparison',
      type: 'Cluster',
      description: 'Product comparisons',
      keywords: [`${keyword} vs`, `${keyword} comparison`, `compare ${keyword}`],
    },
    {
      name: 'FAQ',
      type: 'Cluster',
      description: 'Frequently asked questions',
      keywords: [`${keyword} faq`, `${keyword} questions`, `${keyword} answers`],
    },
  ];

  return {
    keyword,
    siteName,
    pages,
    structure: {
      homepage: 'Main entry point',
      pillarPages: 1,
      clusterPages: 3,
    },
    seo: {
      primaryKeyword: keyword,
      relatedKeywords: [
        `best ${keyword}`,
        `how to ${keyword}`,
        `${keyword} guide`,
        `${keyword} reviews`,
        `cheap ${keyword}`,
      ],
      contentStrategy: 'Create comprehensive guides and reviews targeting long-tail keywords',
    },
  };
}
