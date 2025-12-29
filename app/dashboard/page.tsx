'use client';
import { useState } from 'react';
import Link from 'next/link';

// COMPLETE NICHE HIERARCHY DATA
const NICHE_DATA = {
  'weight loss': {
    analyze: { niche: 'Weight Loss', score: 78, difficulty: 42, profitPotential: 85, trafficPotential: 8900, verdict: 'BUILD', analysis: 'Weight loss is a highly profitable niche with consistent high-intent traffic. Multiple monetization options available including supplements, programs, and fitness products. Competition is moderate but manageable with proper SEO strategy.', opportunities: ['High CPA payouts ($30-$50 per conversion)', 'Multiple product types (supplements, programs, equipment)', 'Strong email marketing potential', 'Video content performs exceptionally well', 'Affiliate programs with 40-50% commissions'], challenges: ['Moderate to high competition', 'Requires medical/health disclaimers', 'Seasonal fluctuations', 'Strict FTC compliance requirements', 'Google E-E-A-T requirements for health content'], recommendations: ['Focus on specific sub-niches (keto, intermittent fasting, supplements)', 'Build authority with scientific backing and testimonials', 'Create comprehensive guides and comparison content', 'Establish email list for repeat commissions', 'Partner with fitness influencers for promotion'], marketSize: '$78.6 Billion USD annually', growthRate: '8.5% CAGR', topKeywords: ['best weight loss pills', 'weight loss supplements', 'fastest way to lose weight'], topOffers: ['ClickBank (50% commission)', 'CPA networks ($30-45 payout)'], estimatedEarnings: '$500-$2000/month per 1000 visitors' },
    keywords: [{ keyword: 'best weight loss pills 2025', traffic: 8900, competition: 35, difficulty: 42 }, { keyword: 'weight loss supplements that work', traffic: 7200, competition: 28, difficulty: 38 }, { keyword: 'fastest way to lose weight', traffic: 6500, competition: 32, difficulty: 40 }, { keyword: 'weight loss programs for women', traffic: 5800, competition: 25, difficulty: 35 }, { keyword: 'natural weight loss remedies', traffic: 5200, competition: 22, difficulty: 32 }, { keyword: 'weight loss without exercise', traffic: 4900, competition: 20, difficulty: 30 }, { keyword: 'weight loss meal plans free', traffic: 4600, competition: 18, difficulty: 28 }, { keyword: 'best diet for weight loss', traffic: 4300, competition: 25, difficulty: 33 }, { keyword: 'keto diet for weight loss', traffic: 7800, competition: 32, difficulty: 40 }, { keyword: 'intermittent fasting for weight loss', traffic: 6900, competition: 30, difficulty: 38 }, { keyword: 'weight loss for women over 50', traffic: 5600, competition: 24, difficulty: 34 }, { keyword: 'weight loss for men', traffic: 5200, competition: 22, difficulty: 32 }, { keyword: 'weight loss for beginners', traffic: 4800, competition: 20, difficulty: 30 }, { keyword: 'keto diet for beginners', traffic: 6200, competition: 28, difficulty: 36 }, { keyword: 'intermittent fasting for beginners', traffic: 5400, competition: 26, difficulty: 34 }, { keyword: 'weight loss for women over 40', traffic: 4900, competition: 21, difficulty: 31 }, { keyword: 'weight loss pills for women', traffic: 4600, competition: 19, difficulty: 29 }, { keyword: 'weight loss for postpartum', traffic: 4200, competition: 18, difficulty: 27 }, { keyword: 'weight loss for busy people', traffic: 3900, competition: 16, difficulty: 25 }, { keyword: 'weight loss without diet', traffic: 3600, competition: 14, difficulty: 23 }],
    offers: [{ network: 'ClickBank', url: 'https://www.clickbank.com', payout: '$45', commission: '50%', desc: 'Digital products, weight loss, fitness' }, { network: 'CJ Affiliate', url: 'https://www.cj.com', payout: '$35', commission: '40%', desc: 'Retail, insurance, finance' }, { network: 'Impact', url: 'https://www.impact.com', payout: '$40', commission: '45%', desc: 'Premium brands, high-value offers' }, { network: 'Rakuten', url: 'https://rakutenmarketing.com', payout: '$30', commission: '35%', desc: 'Shopping, cashback, retail' }, { network: 'ShareASale', url: 'https://www.shareasale.com', payout: '$38', commission: '42%', desc: 'Diverse offers, high-quality merchants' }],
    domains: [{ domain: 'WeightLossTips.com', age: 12, traffic: 2400, backlinks: 450, authority: 42, price: '$18', verdict: 'EXCELLENT' }, { domain: 'BestDietPlans.net', age: 8, traffic: 1800, backlinks: 320, authority: 35, price: '$12', verdict: 'GOOD' }, { domain: 'NaturalWeightLoss.org', age: 15, traffic: 3200, backlinks: 680, authority: 52, price: '$25', verdict: 'EXCELLENT' }, { domain: 'WeightLossSecrets.com', age: 10, traffic: 2100, backlinks: 380, authority: 38, price: '$15', verdict: 'GOOD' }, { domain: 'HealthyWeightLoss.net', age: 9, traffic: 1900, backlinks: 340, authority: 36, price: '$14', verdict: 'GOOD' }, { domain: 'FitnessDiet.com', age: 14, traffic: 2800, backlinks: 520, authority: 48, price: '$22', verdict: 'EXCELLENT' }, { domain: 'WeightLossJourney.org', age: 11, traffic: 2200, backlinks: 400, authority: 40, price: '$16', verdict: 'GOOD' }, { domain: 'BestWeightLossTips.net', age: 7, traffic: 1600, backlinks: 280, authority: 32, price: '$10', verdict: 'FAIR' }],
    blueprint: { pages: [{ name: 'Homepage', description: 'Hero section with value proposition, benefits, testimonials, and CTA to email list' }, { name: 'Weight Loss Tips', description: 'Pillar content with 20+ actionable tips, backed by research, monetized with CPA offers' }, { name: 'Best Supplements', description: 'Product comparison guide, affiliate/CPA links, pros/cons, pricing' }, { name: 'Success Stories', description: 'Before/after testimonials, case studies, builds trust and social proof' }, { name: 'Meal Plans', description: 'Free meal plan templates, downloadable PDFs, email capture, premium upsell' }, { name: 'Exercise Guide', description: 'Video tutorials, workout routines, fitness equipment recommendations' }, { name: 'FAQ', description: 'Common questions answered, addresses objections, improves SEO' }, { name: 'Contact', description: 'Email capture, support form, builds relationship with audience' }], strategy: 'Create pillar content on weight loss, cluster around supplements, meal plans, and exercises. Build email list for repeat commissions. Monetize with ClickBank weight loss products and CPA supplement offers.', monetization: 'Primary: ClickBank weight loss products (50% commission). Secondary: CPA supplement offers ($30-45 per conversion). Tertiary: Email list (nurture sequences for repeat sales). Estimated: $500-2000/month per 1000 visitors.', timeline: 'Months 1-2: Build 8 pillar pages, optimize for SEO. Months 3-4: Drive traffic via content marketing, social media. Months 5-6: Scale with paid ads, email marketing. Months 6+: Passive income from email list and organic traffic.' },
    scripts: [{ title: 'Weight Loss Supplement Review', duration: '60 sec', script: 'HOOK: "I lost 30 pounds without dieting and here\'s how..." [0-3 sec] PROBLEM: "Most weight loss pills don\'t work because they don\'t address the real issue - your metabolism..." [3-15 sec] SOLUTION: "This supplement changed my life. It\'s scientifically formulated to boost metabolism, suppress appetite, and give you energy. I started seeing results in just 2 weeks..." [15-45 sec] PROOF: "Look at these results from real users..." [45-50 sec] CTA: "Click the link in bio to get yours today. Limited time offer - 50% off for the first 100 customers!" [50-60 sec]' }, { title: 'Best Diet Plans Comparison', duration: '60 sec', script: 'HOOK: "I tried 5 different diets and only ONE actually worked..." [0-3 sec] PROBLEM: "There are so many diet options out there - keto, intermittent fasting, calorie counting - which one actually works? Most people waste months trying the wrong diet..." [3-15 sec] SOLUTION: "I created a comparison guide that breaks down the top 5 diets, shows pros and cons, and tells you which one is best for YOUR body type and lifestyle..." [15-45 sec] RESULTS: "My clients lost an average of 20 pounds in 8 weeks using this guide..." [45-50 sec] CTA: "Get your free guide now - link in bio. This is exactly what my personal training clients pay $200 for!" [50-60 sec]' }],
    subNiches: {
      'keto diet': { name: 'Keto Diet', microNiches: { 'keto beginners': { name: 'Keto for Beginners', microMicroNiches: { 'keto women beginners': { name: 'Keto for Women Beginners', traffic: 2320, competition: 28, difficulty: 34, cpaRange: '$35-45' }, 'keto men beginners': { name: 'Keto for Men Beginners', traffic: 2100, competition: 26, difficulty: 32, cpaRange: '$35-45' }, 'keto over 40': { name: 'Keto for People Over 40', traffic: 1900, competition: 24, difficulty: 30, cpaRange: '$38-48' } } }, 'keto advanced': { name: 'Advanced Keto', microMicroNiches: { 'keto muscle gain': { name: 'Keto for Muscle Gain', traffic: 1800, competition: 24, difficulty: 30, cpaRange: '$42-52' }, 'keto athletes': { name: 'Keto for Athletes', traffic: 1600, competition: 22, difficulty: 28, cpaRange: '$40-50' }, 'keto endurance': { name: 'Keto for Endurance', traffic: 1400, competition: 20, difficulty: 26, cpaRange: '$38-48' } } } } },
      'intermittent fasting': { name: 'Intermittent Fasting', microNiches: { '16:8 fasting': { name: '16:8 Intermittent Fasting', microMicroNiches: { '16:8 women': { name: '16:8 IF for Women', traffic: 1900, competition: 26, difficulty: 32, cpaRange: '$38-48' }, '16:8 men': { name: '16:8 IF for Men', traffic: 1700, competition: 24, difficulty: 30, cpaRange: '$36-46' }, '16:8 weight loss': { name: '16:8 IF for Weight Loss', traffic: 2000, competition: 28, difficulty: 34, cpaRange: '$40-50' } } }, '5:2 fasting': { name: '5:2 Intermittent Fasting', microMicroNiches: { '5:2 beginners': { name: '5:2 IF for Beginners', traffic: 1400, competition: 20, difficulty: 26, cpaRange: '$32-42' }, '5:2 women': { name: '5:2 IF for Women', traffic: 1300, competition: 18, difficulty: 24, cpaRange: '$30-40' }, '5:2 weight loss': { name: '5:2 IF for Weight Loss', traffic: 1500, competition: 22, difficulty: 28, cpaRange: '$34-44' } } } } }
    }
  },
  'insurance': {
    analyze: { niche: 'Insurance', score: 82, difficulty: 48, profitPotential: 88, trafficPotential: 12000, verdict: 'BUILD', analysis: 'Insurance is one of the most profitable niches with high-intent buyers actively seeking quotes and information. Multiple insurance types create sub-niche opportunities. High CPA payouts and consistent demand make this a stable income source.', opportunities: ['Highest CPA payouts in the industry ($40-$60 per lead)', 'Multiple insurance types (car, home, life, health)', 'Year-round consistent traffic', 'Quote tools generate qualified leads', 'Email marketing for policy renewals'], challenges: ['High competition from established companies', 'Requires compliance with insurance regulations', 'Longer sales cycles', 'Need for trust and authority', 'Geographic targeting requirements'], recommendations: ['Create state-specific insurance guides', 'Build comparison tools and calculators', 'Focus on specific insurance types', 'Establish trust with expert content', 'Integrate with CPA networks for lead generation'], marketSize: '$1.2 Trillion USD annually', growthRate: '4.2% CAGR', topKeywords: ['cheap car insurance', 'best life insurance rates', 'affordable health insurance'], topOffers: ['CJ Affiliate ($40-60 payout)', 'Impact ($50+ payout)'], estimatedEarnings: '$1000-$5000/month per 1000 visitors' },
    keywords: [{ keyword: 'cheap car insurance quotes', traffic: 12000, competition: 45, difficulty: 50 }, { keyword: 'best life insurance rates', traffic: 9800, competition: 40, difficulty: 48 }, { keyword: 'affordable health insurance plans', traffic: 8500, competition: 38, difficulty: 45 }, { keyword: 'home insurance quotes online', traffic: 7200, competition: 35, difficulty: 42 }, { keyword: 'pet insurance coverage', traffic: 5600, competition: 28, difficulty: 35 }, { keyword: 'travel insurance plans', traffic: 4800, competition: 25, difficulty: 32 }, { keyword: 'disability insurance rates', traffic: 4200, competition: 22, difficulty: 30 }, { keyword: 'umbrella insurance coverage', traffic: 3600, competition: 20, difficulty: 28 }, { keyword: 'auto insurance for young drivers', traffic: 6800, competition: 32, difficulty: 38 }, { keyword: 'term life insurance for women', traffic: 5400, competition: 26, difficulty: 34 }, { keyword: 'whole life insurance benefits', traffic: 4600, competition: 24, difficulty: 32 }, { keyword: 'health insurance for self employed', traffic: 5200, competition: 28, difficulty: 36 }, { keyword: 'homeowners insurance quotes', traffic: 6200, competition: 30, difficulty: 36 }, { keyword: 'renters insurance coverage', traffic: 3800, competition: 18, difficulty: 26 }, { keyword: 'business insurance requirements', traffic: 4400, competition: 22, difficulty: 30 }, { keyword: 'workers compensation insurance', traffic: 3900, competition: 20, difficulty: 28 }, { keyword: 'liability insurance for contractors', traffic: 3200, competition: 16, difficulty: 24 }, { keyword: 'motorcycle insurance rates', traffic: 2800, competition: 14, difficulty: 22 }, { keyword: 'boat insurance coverage', traffic: 2400, competition: 12, difficulty: 20 }, { keyword: 'RV insurance quotes', traffic: 2100, competition: 10, difficulty: 18 }],
    offers: [{ network: 'CJ Affiliate', url: 'https://www.cj.com', payout: '$50', commission: '55%', desc: 'Insurance quotes and leads' }, { network: 'Impact', url: 'https://www.impact.com', payout: '$55', commission: '60%', desc: 'Premium insurance offers' }, { network: 'Rakuten', url: 'https://rakutenmarketing.com', payout: '$45', commission: '50%', desc: 'Insurance and financial services' }, { network: 'ShareASale', url: 'https://www.shareasale.com', payout: '$48', commission: '52%', desc: 'Insurance affiliates' }, { network: 'ClickBank', url: 'https://www.clickbank.com', payout: '$42', commission: '46%', desc: 'Insurance guides and tools' }],
    domains: [{ domain: 'CheapInsuranceQuotes.com', age: 10, traffic: 3200, backlinks: 580, authority: 48, price: '$22', verdict: 'EXCELLENT' }, { domain: 'BestInsuranceRates.net', age: 8, traffic: 2400, backlinks: 420, authority: 40, price: '$16', verdict: 'GOOD' }, { domain: 'InsuranceComparison.org', age: 12, traffic: 3800, backlinks: 720, authority: 56, price: '$28', verdict: 'EXCELLENT' }, { domain: 'AffordableInsurance.com', age: 9, traffic: 2800, backlinks: 480, authority: 44, price: '$19', verdict: 'GOOD' }, { domain: 'InsuranceQuoteHelper.net', age: 7, traffic: 2100, backlinks: 360, authority: 36, price: '$13', verdict: 'GOOD' }, { domain: 'QuickInsuranceQuotes.org', age: 11, traffic: 2600, backlinks: 440, authority: 42, price: '$17', verdict: 'GOOD' }, { domain: 'InsuranceGuideOnline.com', age: 6, traffic: 1900, backlinks: 320, authority: 34, price: '$11', verdict: 'FAIR' }, { domain: 'BestRatesInsurance.net', age: 8, traffic: 2200, backlinks: 380, authority: 38, price: '$14', verdict: 'GOOD' }],
    blueprint: { pages: [{ name: 'Homepage', description: 'Insurance comparison focus, testimonials, quote tool CTA' }, { name: 'Insurance Guides', description: 'Comprehensive guides for each insurance type' }, { name: 'Quote Comparison', description: 'Interactive tool comparing quotes from multiple providers' }, { name: 'State-Specific Guides', description: 'Guides for insurance requirements by state' }, { name: 'FAQ', description: 'Common insurance questions answered' }, { name: 'Blog', description: 'Insurance tips, updates, and industry news' }, { name: 'Calculator Tools', description: 'Coverage calculators for different insurance types' }, { name: 'Contact', description: 'Lead capture form for insurance quotes' }], strategy: 'Create state-specific insurance guides targeting high-intent buyers. Build quote comparison tools. Monetize with CPA leads and affiliate commissions.', monetization: 'Primary: Insurance leads ($40-60 CPA). Secondary: Affiliate commissions. Tertiary: Ads. Estimated: $1000-5000/month per 1000 visitors.', timeline: 'Months 1-2: Build 8 core pages. Months 3-4: Create state guides. Months 5-6: Drive traffic via SEO. Months 6+: Scale with paid ads.' },
    scripts: [{ title: 'Save on Car Insurance', duration: '60 sec', script: 'HOOK: "I saved $500/year on car insurance..." [0-3 sec] PROBLEM: "Most people overpay for insurance..." [3-15 sec] SOLUTION: "Here\'s how to get the best rates..." [15-45 sec] PROOF: "See real savings..." [45-50 sec] CTA: "Get free quotes - link in bio!" [50-60 sec]' }, { title: 'Life Insurance Explained', duration: '60 sec', script: 'HOOK: "Life insurance doesn\'t have to be complicated..." [0-3 sec] PROBLEM: "People don\'t understand life insurance..." [3-15 sec] SOLUTION: "Here\'s a simple explanation..." [15-45 sec] PROOF: "See real examples..." [45-50 sec] CTA: "Learn more - link in bio!" [50-60 sec]' }],
    subNiches: {
      'car insurance': { name: 'Car Insurance', microNiches: { 'young drivers': { name: 'Car Insurance for Young Drivers', microMicroNiches: { 'teen insurance': { name: 'Teen Car Insurance', traffic: 2100, competition: 32, difficulty: 38, cpaRange: '$38-48' }, 'college student insurance': { name: 'College Student Car Insurance', traffic: 1800, competition: 28, difficulty: 34, cpaRange: '$36-46' }, 'first time driver': { name: 'First Time Driver Insurance', traffic: 1600, competition: 26, difficulty: 32, cpaRange: '$34-44' } } } } },
      'life insurance': { name: 'Life Insurance', microNiches: { 'term life': { name: 'Term Life Insurance', microMicroNiches: { 'term women': { name: 'Term Life Insurance for Women', traffic: 1350, competition: 24, difficulty: 30, cpaRange: '$48-58' }, 'term men': { name: 'Term Life Insurance for Men', traffic: 1200, competition: 22, difficulty: 28, cpaRange: '$46-56' }, 'term seniors': { name: 'Term Life Insurance for Seniors', traffic: 1100, competition: 20, difficulty: 26, cpaRange: '$50-60' } } } } }
    }
  },
  'cryptocurrency': {
    analyze: { niche: 'Cryptocurrency', score: 75, difficulty: 45, profitPotential: 82, trafficPotential: 9500, verdict: 'BUILD', analysis: 'Cryptocurrency is a high-growth niche with massive traffic and high-intent buyers. Multiple monetization options through exchanges, courses, and trading platforms. Requires expertise and compliance awareness.', opportunities: ['Exchange affiliate programs ($40-80 per signup)', 'Trading course sales (high ticket items)', 'Wallet and security product affiliates', 'Newsletter monetization', 'Community building and coaching'], challenges: ['Regulatory uncertainty', 'High volatility', 'Technical complexity', 'Scam associations', 'Requires credibility and expertise'], recommendations: ['Focus on education and security', 'Build trust through transparency', 'Create beginner-friendly content', 'Partner with reputable exchanges', 'Stay updated on regulations'], marketSize: '$2.1 Trillion USD', growthRate: '15.2% CAGR', topKeywords: ['how to buy bitcoin', 'best crypto exchanges', 'bitcoin price'], topOffers: ['Exchange affiliates ($40-80)', 'Trading courses ($50-100)'], estimatedEarnings: '$800-$3000/month per 1000 visitors' },
    keywords: [{ keyword: 'how to buy bitcoin', traffic: 9500, competition: 40, difficulty: 45 }, { keyword: 'best crypto exchanges', traffic: 8200, competition: 38, difficulty: 43 }, { keyword: 'bitcoin price today', traffic: 7800, competition: 42, difficulty: 48 }, { keyword: 'ethereum price', traffic: 6900, competition: 35, difficulty: 40 }, { keyword: 'crypto trading for beginners', traffic: 6200, competition: 32, difficulty: 38 }, { keyword: 'best cryptocurrency to invest in', traffic: 5800, competition: 30, difficulty: 36 }, { keyword: 'bitcoin wallet security', traffic: 5200, competition: 28, difficulty: 34 }, { keyword: 'crypto tax calculator', traffic: 4600, competition: 24, difficulty: 30 }, { keyword: 'altcoins to watch', traffic: 4200, competition: 22, difficulty: 28 }, { keyword: 'DeFi protocols explained', traffic: 3800, competition: 20, difficulty: 26 }, { keyword: 'NFT marketplace guide', traffic: 3400, competition: 18, difficulty: 24 }, { keyword: 'crypto staking rewards', traffic: 3100, competition: 16, difficulty: 22 }, { keyword: 'blockchain technology explained', traffic: 2900, competition: 14, difficulty: 20 }, { keyword: 'crypto mining guide', traffic: 2600, competition: 12, difficulty: 18 }, { keyword: 'bitcoin halving explained', traffic: 2300, competition: 10, difficulty: 16 }, { keyword: 'crypto portfolio tracker', traffic: 2100, competition: 8, difficulty: 14 }, { keyword: 'cold wallet vs hot wallet', traffic: 1900, competition: 6, difficulty: 12 }, { keyword: 'crypto scams to avoid', traffic: 1700, competition: 4, difficulty: 10 }, { keyword: 'bitcoin technical analysis', traffic: 1500, competition: 2, difficulty: 8 }, { keyword: 'crypto regulations by country', traffic: 1300, competition: 0, difficulty: 6 }],
    offers: [{ network: 'ClickBank', url: 'https://www.clickbank.com', payout: '$60', commission: '65%', desc: 'Crypto courses and guides' }, { network: 'CJ Affiliate', url: 'https://www.cj.com', payout: '$50', commission: '55%', desc: 'Exchange signups' }, { network: 'Impact', url: 'https://www.impact.com', payout: '$65', commission: '70%', desc: 'Premium crypto programs' }, { network: 'Rakuten', url: 'https://rakutenmarketing.com', payout: '$45', commission: '50%', desc: 'Crypto wallets and tools' }, { network: 'ShareASale', url: 'https://www.shareasale.com', payout: '$55', commission: '60%', desc: 'Crypto affiliates' }],
    domains: [{ domain: 'CryptoForBeginners.com', age: 5, traffic: 2800, backlinks: 380, authority: 38, price: '$15', verdict: 'GOOD' }, { domain: 'BitcoinGuideOnline.net', age: 6, traffic: 2200, backlinks: 320, authority: 34, price: '$12', verdict: 'GOOD' }, { domain: 'CryptoExchangeReview.org', age: 4, traffic: 1900, backlinks: 280, authority: 30, price: '$10', verdict: 'FAIR' }, { domain: 'BestCryptoWallet.com', age: 3, traffic: 1600, backlinks: 240, authority: 26, price: '$8', verdict: 'FAIR' }, { domain: 'CryptoTradingTips.net', age: 4, traffic: 1400, backlinks: 200, authority: 22, price: '$6', verdict: 'FAIR' }, { domain: 'BlockchainExplained.org', age: 5, traffic: 1200, backlinks: 180, authority: 20, price: '$5', verdict: 'FAIR' }, { domain: 'AltcoinAnalysis.com', age: 2, traffic: 1000, backlinks: 140, authority: 18, price: '$4', verdict: 'FAIR' }, { domain: 'CryptoSecurityGuide.net', age: 3, traffic: 800, backlinks: 120, authority: 16, price: '$3', verdict: 'FAIR' }],
    blueprint: { pages: [{ name: 'Homepage', description: 'Crypto education focus, beginner-friendly' }, { name: 'Crypto Guide', description: 'Complete guide to cryptocurrency' }, { name: 'Exchanges', description: 'Best crypto exchanges reviewed' }, { name: 'Trading', description: 'Trading strategies and tutorials' }, { name: 'Security', description: 'Wallet security and best practices' }, { name: 'News', description: 'Crypto market news and updates' }, { name: 'FAQ', description: 'Common crypto questions' }, { name: 'Contact', description: 'Newsletter signup' }], strategy: 'Create beginner-friendly crypto content. Build trust through education. Monetize with exchange affiliates and courses.', monetization: 'Primary: Exchange affiliates ($40-80 CPA). Secondary: Crypto courses. Tertiary: Ads. Estimated: $800-3000/month per 1000 visitors.', timeline: 'Months 1-2: Build core pages. Months 3-4: Drive traffic via SEO. Months 5-6: Scale with content. Months 6+: Passive income.' },
    scripts: [{ title: 'How to Buy Bitcoin Safely', duration: '60 sec', script: 'HOOK: "I bought my first bitcoin safely and here\'s how..." [0-3 sec] PROBLEM: "Bitcoin buying seems risky..." [3-15 sec] SOLUTION: "Here\'s the safe way to do it..." [15-45 sec] PROOF: "Thousands do this daily..." [45-50 sec] CTA: "Get the guide - link in bio!" [50-60 sec]' }, { title: 'Crypto Exchanges Compared', duration: '60 sec', script: 'HOOK: "I compared all top crypto exchanges..." [0-3 sec] PROBLEM: "Too many exchanges to choose..." [3-15 sec] SOLUTION: "Here are the best ones..." [15-45 sec] PROOF: "See comparison..." [45-50 sec] CTA: "See full comparison - link in bio!" [50-60 sec]' }],
    subNiches: {
      'bitcoin': { name: 'Bitcoin', microNiches: { 'bitcoin beginners': { name: 'Bitcoin for Beginners', microMicroNiches: { 'how to buy bitcoin': { name: 'How to Buy Bitcoin', traffic: 2100, competition: 35, difficulty: 42, cpaRange: '$42-52' }, 'bitcoin wallets': { name: 'Bitcoin Wallets', traffic: 1800, competition: 30, difficulty: 36, cpaRange: '$40-50' }, 'bitcoin security': { name: 'Bitcoin Security', traffic: 1600, competition: 28, difficulty: 34, cpaRange: '$38-48' } } } } }
    }
  },
  'fitness': {
    analyze: { niche: 'Fitness', score: 80, difficulty: 40, profitPotential: 84, trafficPotential: 11200, verdict: 'BUILD', analysis: 'Fitness is a massive, evergreen niche with consistent demand. Multiple sub-niches and monetization options. High engagement and repeat customers make this very profitable.', opportunities: ['Supplement affiliate programs (40-50% commission)', 'Equipment sales (20-30% commission)', 'Training program sales (high ticket)', 'Coaching and consulting', 'Digital product sales'], challenges: ['High competition', 'Requires credibility', 'Fitness advice liability', 'Seasonal trends', 'Requires consistency'], recommendations: ['Focus on specific sub-niches', 'Build social proof with transformations', 'Create video content', 'Establish expertise and credentials', 'Build community and engagement'], marketSize: '$96.7 Billion USD', growthRate: '10.3% CAGR', topKeywords: ['best home gym equipment', 'weight loss workout', 'muscle building exercises'], topOffers: ['Supplement affiliates ($30-50)', 'Equipment affiliates ($20-40)'], estimatedEarnings: '$600-$2500/month per 1000 visitors' },
    keywords: [{ keyword: 'best home gym equipment', traffic: 8900, competition: 35, difficulty: 40 }, { keyword: 'weight loss workout routine', traffic: 7600, competition: 32, difficulty: 38 }, { keyword: 'muscle building exercises', traffic: 7200, competition: 30, difficulty: 36 }, { keyword: 'HIIT workout for beginners', traffic: 6500, competition: 28, difficulty: 34 }, { keyword: 'best fitness supplements', traffic: 6100, competition: 26, difficulty: 32 }, { keyword: 'home workout no equipment', traffic: 5800, competition: 24, difficulty: 30 }, { keyword: 'yoga for beginners', traffic: 5400, competition: 22, difficulty: 28 }, { keyword: 'pilates exercises at home', traffic: 4900, competition: 20, difficulty: 26 }, { keyword: 'cardio workout at home', traffic: 4600, competition: 18, difficulty: 24 }, { keyword: 'strength training for women', traffic: 4300, competition: 16, difficulty: 22 }, { keyword: 'best protein powder', traffic: 4000, competition: 14, difficulty: 20 }, { keyword: 'fitness tracker reviews', traffic: 3700, competition: 12, difficulty: 18 }, { keyword: 'ab exercises for women', traffic: 3400, competition: 10, difficulty: 16 }, { keyword: 'running for beginners', traffic: 3100, competition: 8, difficulty: 14 }, { keyword: 'CrossFit workout guide', traffic: 2800, competition: 6, difficulty: 12 }, { keyword: 'dance workout at home', traffic: 2500, competition: 4, difficulty: 10 }, { keyword: 'boxing workout for fitness', traffic: 2200, competition: 2, difficulty: 8 }, { keyword: 'swimming workout routine', traffic: 1900, competition: 0, difficulty: 6 }, { keyword: 'stretching exercises', traffic: 1600, competition: 0, difficulty: 4 }, { keyword: 'recovery techniques', traffic: 1300, competition: 0, difficulty: 2 }],
    offers: [{ network: 'ClickBank', url: 'https://www.clickbank.com', payout: '$40', commission: '45%', desc: 'Fitness programs and guides' }, { network: 'CJ Affiliate', url: 'https://www.cj.com', payout: '$35', commission: '40%', desc: 'Fitness equipment' }, { network: 'Impact', url: 'https://www.impact.com', payout: '$45', commission: '50%', desc: 'Premium fitness programs' }, { network: 'Rakuten', url: 'https://rakutenmarketing.com', payout: '$30', commission: '35%', desc: 'Sports and fitness' }, { network: 'ShareASale', url: 'https://www.shareasale.com', payout: '$38', commission: '42%', desc: 'Fitness affiliates' }],
    domains: [{ domain: 'HomeGymGuide.com', age: 8, traffic: 2600, backlinks: 420, authority: 40, price: '$16', verdict: 'GOOD' }, { domain: 'FitnessWorkoutTips.net', age: 7, traffic: 2200, backlinks: 360, authority: 36, price: '$13', verdict: 'GOOD' }, { domain: 'BestFitnessTips.org', age: 9, traffic: 2900, backlinks: 480, authority: 44, price: '$18', verdict: 'GOOD' }, { domain: 'WorkoutAtHome.com', age: 6, traffic: 1900, backlinks: 300, authority: 32, price: '$11', verdict: 'FAIR' }, { domain: 'FitnessForBeginners.net', age: 5, traffic: 1600, backlinks: 260, authority: 28, price: '$9', verdict: 'FAIR' }, { domain: 'ExerciseGuideOnline.org', age: 7, traffic: 2100, backlinks: 340, authority: 34, price: '$12', verdict: 'GOOD' }, { domain: 'SupplementReviews.com', age: 6, traffic: 1800, backlinks: 280, authority: 30, price: '$10', verdict: 'FAIR' }, { domain: 'FitnessEquipmentGuide.net', age: 5, traffic: 1400, backlinks: 220, authority: 26, price: '$8', verdict: 'FAIR' }],
    blueprint: { pages: [{ name: 'Homepage', description: 'Fitness transformation focus, testimonials' }, { name: 'Workout Plans', description: 'Free and premium workout routines' }, { name: 'Nutrition Guide', description: 'Nutrition and meal planning' }, { name: 'Supplements', description: 'Supplement reviews and recommendations' }, { name: 'Equipment', description: 'Home gym equipment reviews' }, { name: 'Blog', description: 'Fitness tips and trends' }, { name: 'FAQ', description: 'Common fitness questions' }, { name: 'Contact', description: 'Coaching inquiry form' }], strategy: 'Create workout and nutrition content. Build transformations gallery. Monetize with supplement and equipment affiliates.', monetization: 'Primary: Supplement affiliates ($30-50 CPA). Secondary: Equipment affiliates. Tertiary: Coaching. Estimated: $600-2500/month per 1000 visitors.', timeline: 'Months 1-2: Build 8 pages. Months 3-4: Drive traffic via SEO. Months 5-6: Scale with content. Months 6+: Passive income.' },
    scripts: [{ title: 'Home Workout Transformation', duration: '60 sec', script: 'HOOK: "I transformed my body with home workouts..." [0-3 sec] PROBLEM: "No gym? No problem..." [3-15 sec] SOLUTION: "Here\'s my home workout routine..." [15-45 sec] PROOF: "See my results..." [45-50 sec] CTA: "Get the workout - link in bio!" [50-60 sec]' }, { title: 'Best Fitness Equipment', duration: '60 sec', script: 'HOOK: "I tested the best home gym equipment..." [0-3 sec] PROBLEM: "Too many options..." [3-15 sec] SOLUTION: "Here are the top picks..." [15-45 sec] PROOF: "See reviews..." [45-50 sec] CTA: "See full reviews - link in bio!" [50-60 sec]' }],
    subNiches: {
      'home gym': { name: 'Home Gym', microNiches: { 'equipment': { name: 'Home Gym Equipment', microMicroNiches: { 'dumbbells': { name: 'Dumbbells and Weights', traffic: 1160, competition: 28, difficulty: 34, cpaRange: '$35-45' }, 'treadmills': { name: 'Home Treadmills', traffic: 980, competition: 24, difficulty: 30, cpaRange: '$32-42' }, 'yoga mats': { name: 'Yoga Mats and Accessories', traffic: 850, competition: 20, difficulty: 26, cpaRange: '$28-38' } } } } }
    }
  },
  'forex trading': {
    analyze: { niche: 'Forex Trading', score: 76, difficulty: 44, profitPotential: 86, trafficPotential: 7800, verdict: 'BUILD', analysis: 'Forex trading is a high-value niche with serious buyers. Multiple monetization through brokers, courses, and signals. Requires expertise and compliance awareness.', opportunities: ['Broker affiliate programs ($50-200 per signup)', 'Trading course sales (high ticket)', 'Signal service subscriptions', 'Trading robot sales', 'Coaching and mentoring'], challenges: ['Regulatory requirements', 'High risk perception', 'Scam associations', 'Requires expertise', 'Compliance complexity'], recommendations: ['Focus on education', 'Build credibility with track record', 'Partner with regulated brokers', 'Create risk management content', 'Be transparent about risks'], marketSize: '$2.4 Trillion Daily Volume', growthRate: '8.7% CAGR', topKeywords: ['forex trading for beginners', 'best forex brokers', 'forex trading strategies'], topOffers: ['Broker affiliates ($50-200)', 'Trading courses ($100-500)'], estimatedEarnings: '$1000-$4000/month per 1000 visitors' },
    keywords: [{ keyword: 'forex trading for beginners', traffic: 7800, competition: 38, difficulty: 44 }, { keyword: 'best forex brokers', traffic: 6900, competition: 36, difficulty: 42 }, { keyword: 'forex trading strategies', traffic: 6200, competition: 34, difficulty: 40 }, { keyword: 'how to start forex trading', traffic: 5600, competition: 32, difficulty: 38 }, { keyword: 'forex trading tutorial', traffic: 5100, competition: 30, difficulty: 36 }, { keyword: 'forex pairs to trade', traffic: 4600, competition: 28, difficulty: 34 }, { keyword: 'forex technical analysis', traffic: 4200, competition: 26, difficulty: 32 }, { keyword: 'forex risk management', traffic: 3800, competition: 24, difficulty: 30 }, { keyword: 'forex trading signals', traffic: 3400, competition: 22, difficulty: 28 }, { keyword: 'forex trading robots', traffic: 3100, competition: 20, difficulty: 26 }, { keyword: 'forex leverage explained', traffic: 2800, competition: 18, difficulty: 24 }, { keyword: 'forex demo account', traffic: 2500, competition: 16, difficulty: 22 }, { keyword: 'forex scalping strategy', traffic: 2200, competition: 14, difficulty: 20 }, { keyword: 'forex swing trading', traffic: 1900, competition: 12, difficulty: 18 }, { keyword: 'forex day trading', traffic: 1600, competition: 10, difficulty: 16 }, { keyword: 'forex position sizing', traffic: 1400, competition: 8, difficulty: 14 }, { keyword: 'forex psychology', traffic: 1200, competition: 6, difficulty: 12 }, { keyword: 'forex calendar events', traffic: 1000, competition: 4, difficulty: 10 }, { keyword: 'forex correlation', traffic: 800, competition: 2, difficulty: 8 }, { keyword: 'forex hedging strategies', traffic: 600, competition: 0, difficulty: 6 }],
    offers: [{ network: 'ClickBank', url: 'https://www.clickbank.com', payout: '$80', commission: '85%', desc: 'Forex courses and systems' }, { network: 'CJ Affiliate', url: 'https://www.cj.com', payout: '$70', commission: '75%', desc: 'Forex broker signups' }, { network: 'Impact', url: 'https://www.impact.com', payout: '$90', commission: '95%', desc: 'Premium forex programs' }, { network: 'Rakuten', url: 'https://rakutenmarketing.com', payout: '$60', commission: '65%', desc: 'Forex trading tools' }, { network: 'ShareASale', url: 'https://www.shareasale.com', payout: '$75', commission: '80%', desc: 'Forex affiliates' }],
    domains: [{ domain: 'ForexTradingForBeginners.com', age: 6, traffic: 2400, backlinks: 380, authority: 38, price: '$15', verdict: 'GOOD' }, { domain: 'BestForexBrokers.net', age: 5, traffic: 2000, backlinks: 320, authority: 34, price: '$12', verdict: 'GOOD' }, { domain: 'ForexStrategyGuide.org', age: 7, traffic: 2200, backlinks: 360, authority: 36, price: '$13', verdict: 'GOOD' }, { domain: 'ForexTradingTips.com', age: 4, traffic: 1700, backlinks: 280, authority: 30, price: '$10', verdict: 'FAIR' }, { domain: 'HowToTradeForex.net', age: 5, traffic: 1900, backlinks: 300, authority: 32, price: '$11', verdict: 'FAIR' }, { domain: 'ForexSignalsOnline.org', age: 3, traffic: 1400, backlinks: 220, authority: 26, price: '$8', verdict: 'FAIR' }, { domain: 'ForexRobotReview.com', age: 4, traffic: 1200, backlinks: 200, authority: 24, price: '$7', verdict: 'FAIR' }, { domain: 'TradingForexGuide.net', age: 3, traffic: 1000, backlinks: 160, authority: 20, price: '$6', verdict: 'FAIR' }],
    blueprint: { pages: [{ name: 'Homepage', description: 'Forex trading education focus' }, { name: 'Forex Guide', description: 'Complete forex trading guide' }, { name: 'Brokers', description: 'Best forex brokers reviewed' }, { name: 'Strategies', description: 'Trading strategies and systems' }, { name: 'Signals', description: 'Trading signals service' }, { name: 'Education', description: 'Forex education and courses' }, { name: 'FAQ', description: 'Common forex questions' }, { name: 'Contact', description: 'Coaching inquiry' }], strategy: 'Create forex education content. Build broker affiliate partnerships. Monetize with broker signups and courses.', monetization: 'Primary: Broker affiliates ($50-200 CPA). Secondary: Trading courses. Tertiary: Signals. Estimated: $1000-4000/month per 1000 visitors.', timeline: 'Months 1-2: Build core pages. Months 3-4: Drive traffic. Months 5-6: Scale. Months 6+: Passive income.' },
    scripts: [{ title: 'Forex Trading for Beginners', duration: '60 sec', script: 'HOOK: "I made my first forex trade and here\'s how..." [0-3 sec] PROBLEM: "Forex seems complicated..." [3-15 sec] SOLUTION: "It\'s actually simple..." [15-45 sec] PROOF: "See results..." [45-50 sec] CTA: "Get the guide - link in bio!" [50-60 sec]' }, { title: 'Best Forex Brokers', duration: '60 sec', script: 'HOOK: "I compared all top forex brokers..." [0-3 sec] PROBLEM: "Too many to choose..." [3-15 sec] SOLUTION: "Here are the best..." [15-45 sec] PROOF: "See comparison..." [45-50 sec] CTA: "See full review - link in bio!" [50-60 sec]' }],
    subNiches: {
      'forex beginners': { name: 'Forex for Beginners', microNiches: { 'how to start': { name: 'How to Start Forex Trading', microMicroNiches: { 'complete beginners': { name: 'Forex Trading for Complete Beginners', traffic: 1440, competition: 26, difficulty: 32, cpaRange: '$50-60' }, 'first trade': { name: 'Making Your First Forex Trade', traffic: 1200, competition: 22, difficulty: 28, cpaRange: '$48-58' }, 'demo account': { name: 'Forex Demo Account Guide', traffic: 1000, competition: 18, difficulty: 24, cpaRange: '$45-55' } } } } }
    }
  },
  'real estate': {
    analyze: { niche: 'Real Estate', score: 81, difficulty: 46, profitPotential: 87, trafficPotential: 10200, verdict: 'BUILD', analysis: 'Real estate is a stable, high-value niche with consistent demand. Multiple sub-niches and monetization options. Requires authority but very profitable.', opportunities: ['Real estate platform affiliates ($40-80 per lead)', 'Mortgage broker commissions (high value)', 'Investment course sales', 'Property management affiliates', 'Lead generation for agents'], challenges: ['High competition', 'Requires credibility', 'Regulatory requirements', 'Geographic targeting needed', 'Longer sales cycles'], recommendations: ['Focus on specific real estate niches', 'Build authority with market data', 'Create investment guides', 'Partner with real estate platforms', 'Generate qualified leads'], marketSize: '$3.69 Trillion USD', growthRate: '5.8% CAGR', topKeywords: ['real estate investing for beginners', 'best real estate markets', 'how to flip houses'], topOffers: ['Real estate platforms ($40-80)', 'Mortgage affiliates ($100-200)'], estimatedEarnings: '$800-$3500/month per 1000 visitors' },
    keywords: [{ keyword: 'real estate investing for beginners', traffic: 8200, competition: 36, difficulty: 42 }, { keyword: 'best real estate markets', traffic: 7100, competition: 34, difficulty: 40 }, { keyword: 'how to flip houses', traffic: 6500, competition: 32, difficulty: 38 }, { keyword: 'rental property investing', traffic: 5900, competition: 30, difficulty: 36 }, { keyword: 'real estate investment trusts', traffic: 5300, competition: 28, difficulty: 34 }, { keyword: 'commercial real estate investing', traffic: 4800, competition: 26, difficulty: 32 }, { keyword: 'real estate wholesaling', traffic: 4400, competition: 24, difficulty: 30 }, { keyword: 'property management guide', traffic: 3900, competition: 22, difficulty: 28 }, { keyword: 'real estate crowdfunding', traffic: 3500, competition: 20, difficulty: 26 }, { keyword: 'mortgage rates today', traffic: 3200, competition: 18, difficulty: 24 }, { keyword: 'first time home buyer guide', traffic: 2900, competition: 16, difficulty: 22 }, { keyword: 'home inspection checklist', traffic: 2600, competition: 14, difficulty: 20 }, { keyword: 'real estate contract template', traffic: 2300, competition: 12, difficulty: 18 }, { keyword: 'property valuation methods', traffic: 2000, competition: 10, difficulty: 16 }, { keyword: 'real estate tax deductions', traffic: 1800, competition: 8, difficulty: 14 }, { keyword: 'commercial lease negotiation', traffic: 1500, competition: 6, difficulty: 12 }, { keyword: 'real estate marketing strategies', traffic: 1300, competition: 4, difficulty: 10 }, { keyword: 'property staging tips', traffic: 1100, competition: 2, difficulty: 8 }, { keyword: 'real estate photography', traffic: 900, competition: 0, difficulty: 6 }, { keyword: 'virtual property tours', traffic: 700, competition: 0, difficulty: 4 }],
    offers: [{ network: 'ClickBank', url: 'https://www.clickbank.com', payout: '$70', commission: '75%', desc: 'Real estate courses' }, { network: 'CJ Affiliate', url: 'https://www.cj.com', payout: '$60', commission: '65%', desc: 'Real estate leads' }, { network: 'Impact', url: 'https://www.impact.com', payout: '$80', commission: '85%', desc: 'Premium real estate programs' }, { network: 'Rakuten', url: 'https://rakutenmarketing.com', payout: '$55', commission: '60%', desc: 'Real estate tools' }, { network: 'ShareASale', url: 'https://www.shareasale.com', payout: '$65', commission: '70%', desc: 'Real estate affiliates' }],
    domains: [{ domain: 'RealEstateInvestingGuide.com', age: 8, traffic: 2800, backlinks: 460, authority: 44, price: '$18', verdict: 'GOOD' }, { domain: 'BestRealEstateMarkets.net', age: 7, traffic: 2400, backlinks: 400, authority: 40, price: '$15', verdict: 'GOOD' }, { domain: 'HowToFlipHouses.org', age: 9, traffic: 3100, backlinks: 520, authority: 48, price: '$20', verdict: 'EXCELLENT' }, { domain: 'RentalPropertyGuide.com', age: 6, traffic: 2100, backlinks: 360, authority: 36, price: '$13', verdict: 'GOOD' }, { domain: 'RealEstateInvestorTips.net', age: 5, traffic: 1900, backlinks: 320, authority: 34, price: '$12', verdict: 'GOOD' }, { domain: 'FirstTimeHomeBuyerGuide.org', age: 7, traffic: 2300, backlinks: 380, authority: 38, price: '$14', verdict: 'GOOD' }, { domain: 'PropertyInvestmentGuide.com', age: 6, traffic: 2000, backlinks: 340, authority: 36, price: '$13', verdict: 'GOOD' }, { domain: 'RealEstateTipsOnline.net', age: 4, traffic: 1600, backlinks: 280, authority: 30, price: '$10', verdict: 'FAIR' }],
    blueprint: { pages: [{ name: 'Homepage', description: 'Real estate investing focus' }, { name: 'Investing Guide', description: 'Complete real estate investing guide' }, { name: 'Markets', description: 'Best real estate markets' }, { name: 'Strategies', description: 'Investment strategies' }, { name: 'Tools', description: 'Real estate calculators' }, { name: 'Blog', description: 'Real estate tips' }, { name: 'FAQ', description: 'Common questions' }, { name: 'Contact', description: 'Coaching inquiry' }], strategy: 'Create real estate investing content. Build market analysis tools. Monetize with platform and course affiliates.', monetization: 'Primary: Real estate courses ($40-80 CPA). Secondary: Platform affiliates. Tertiary: Coaching. Estimated: $800-3500/month per 1000 visitors.', timeline: 'Months 1-2: Build 8 pages. Months 3-4: Drive traffic. Months 5-6: Scale. Months 6+: Passive income.' },
    scripts: [{ title: 'Real Estate Investing Guide', duration: '60 sec', script: 'HOOK: "I made $50,000 in real estate investing..." [0-3 sec] PROBLEM: "Most people think you need lots of money..." [3-15 sec] SOLUTION: "Here\'s how to start with minimal capital..." [15-45 sec] PROOF: "See my results..." [45-50 sec] CTA: "Get the guide - link in bio!" [50-60 sec]' }, { title: 'Best Real Estate Markets', duration: '60 sec', script: 'HOOK: "These are the best real estate markets right now..." [0-3 sec] PROBLEM: "Hard to find good markets..." [3-15 sec] SOLUTION: "Here are the top 10..." [15-45 sec] PROOF: "See the data..." [45-50 sec] CTA: "See analysis - link in bio!" [50-60 sec]' }],
    subNiches: {
      'real estate investing': { name: 'Real Estate Investing', microNiches: { 'rental property': { name: 'Rental Property Investing', microMicroNiches: { 'single family': { name: 'Single Family Rentals', traffic: 1320, competition: 28, difficulty: 34, cpaRange: '$48-58' }, 'multi family': { name: 'Multi-Family Properties', traffic: 1100, competition: 24, difficulty: 30, cpaRange: '$50-60' }, 'commercial': { name: 'Commercial Real Estate', traffic: 950, competition: 20, difficulty: 26, cpaRange: '$55-65' } } } } }
    }
  },
  'alcohol rehabilitation': {
    analyze: { niche: 'Alcohol Rehabilitation', score: 79, difficulty: 50, profitPotential: 90, trafficPotential: 6200, verdict: 'BUILD', analysis: 'Alcohol rehabilitation is a high-value niche with serious buyers seeking help. Multiple monetization through rehab centers, counseling, and support programs. Requires sensitivity and compliance.', opportunities: ['Rehab center leads ($50-150 per lead)', 'Counseling service affiliates', 'Support group memberships', 'Recovery product sales', 'Coaching and sponsorship'], challenges: ['Sensitive topic', 'Regulatory requirements', 'Medical liability', 'Requires credibility', 'Ethical considerations'], recommendations: ['Focus on education and support', 'Partner with licensed facilities', 'Build trust through testimonials', 'Provide valuable free resources', 'Be transparent about services'], marketSize: '$35.2 Billion USD', growthRate: '6.3% CAGR', topKeywords: ['alcohol rehab centers', 'alcohol addiction treatment', 'how to stop drinking'], topOffers: ['Rehab leads ($50-150)', 'Counseling services ($40-100)'], estimatedEarnings: '$1500-$5000/month per 1000 visitors' },
    keywords: [{ keyword: 'alcohol rehab centers', traffic: 6200, competition: 40, difficulty: 48 }, { keyword: 'alcohol addiction treatment', traffic: 5400, competition: 38, difficulty: 46 }, { keyword: 'how to stop drinking', traffic: 4900, competition: 36, difficulty: 44 }, { keyword: 'alcohol recovery programs', traffic: 4300, competition: 34, difficulty: 42 }, { keyword: 'best rehab facilities', traffic: 3800, competition: 32, difficulty: 40 }, { keyword: 'inpatient alcohol treatment', traffic: 3400, competition: 30, difficulty: 38 }, { keyword: 'outpatient rehab programs', traffic: 3100, competition: 28, difficulty: 36 }, { keyword: 'alcohol counseling services', traffic: 2800, competition: 26, difficulty: 34 }, { keyword: 'luxury rehab centers', traffic: 2500, competition: 24, difficulty: 32 }, { keyword: 'alcohol support groups', traffic: 2300, competition: 22, difficulty: 30 }, { keyword: 'alcohol detox programs', traffic: 2100, competition: 20, difficulty: 28 }, { keyword: 'alcohol addiction help', traffic: 1900, competition: 18, difficulty: 26 }, { keyword: 'alcohol recovery tips', traffic: 1700, competition: 16, difficulty: 24 }, { keyword: 'alcohol rehab insurance', traffic: 1500, competition: 14, difficulty: 22 }, { keyword: 'alcohol addiction counselor', traffic: 1300, competition: 12, difficulty: 20 }, { keyword: 'alcohol recovery stories', traffic: 1200, competition: 10, difficulty: 18 }, { keyword: 'alcohol anonymous meetings', traffic: 1100, competition: 8, difficulty: 16 }, { keyword: 'alcohol withdrawal symptoms', traffic: 1000, competition: 6, difficulty: 14 }, { keyword: 'alcohol addiction medication', traffic: 900, competition: 4, difficulty: 12 }, { keyword: 'alcohol recovery motivation', traffic: 800, competition: 2, difficulty: 10 }],
    offers: [{ network: 'ClickBank', url: 'https://www.clickbank.com', payout: '$100', commission: '100%', desc: 'Recovery programs' }, { network: 'CJ Affiliate', url: 'https://www.cj.com', payout: '$90', commission: '95%', desc: 'Rehab center leads' }, { network: 'Impact', url: 'https://www.impact.com', payout: '$110', commission: '110%', desc: 'Premium recovery programs' }, { network: 'Rakuten', url: 'https://rakutenmarketing.com', payout: '$85', commission: '90%', desc: 'Recovery services' }, { network: 'ShareASale', url: 'https://www.shareasale.com', payout: '$95', commission: '100%', desc: 'Recovery affiliates' }],
    domains: [{ domain: 'AlcoholRehabGuide.com', age: 7, traffic: 2200, backlinks: 380, authority: 38, price: '$15', verdict: 'GOOD' }, { domain: 'BestRehabCenters.net', age: 6, traffic: 1900, backlinks: 320, authority: 34, price: '$12', verdict: 'GOOD' }, { domain: 'AlcoholRecoveryHelp.org', age: 8, traffic: 2500, backlinks: 420, authority: 42, price: '$17', verdict: 'GOOD' }, { domain: 'AddictionTreatmentGuide.com', age: 5, traffic: 1700, backlinks: 280, authority: 30, price: '$10', verdict: 'FAIR' }, { domain: 'SobrietySupport.net', age: 6, traffic: 1600, backlinks: 260, authority: 28, price: '$9', verdict: 'FAIR' }, { domain: 'AlcoholCounselingServices.org', age: 7, traffic: 1800, backlinks: 300, authority: 32, price: '$11', verdict: 'FAIR' }, { domain: 'RecoveryProgramsOnline.com', age: 4, traffic: 1400, backlinks: 220, authority: 26, price: '$8', verdict: 'FAIR' }, { domain: 'AlcoholAddictionHelp.net', age: 5, traffic: 1300, backlinks: 200, authority: 24, price: '$7', verdict: 'FAIR' }],
    blueprint: { pages: [{ name: 'Homepage', description: 'Alcohol recovery focus, support-oriented' }, { name: 'Recovery Guide', description: 'Complete alcohol recovery guide' }, { name: 'Rehab Centers', description: 'Rehab facility directory' }, { name: 'Support Groups', description: 'Support group listings' }, { name: 'Resources', description: 'Recovery resources' }, { name: 'FAQ', description: 'Common questions' }, { name: 'Blog', description: 'Recovery tips and stories' }, { name: 'Contact', description: 'Help inquiry form' }], strategy: 'Create supportive recovery content. Build trust with testimonials. Monetize with rehab center leads and recovery programs.', monetization: 'Primary: Rehab leads ($50-150 CPA). Secondary: Recovery programs. Tertiary: Support services. Estimated: $1500-5000/month per 1000 visitors.', timeline: 'Months 1-2: Build core pages. Months 3-4: Drive traffic. Months 5-6: Scale. Months 6+: Passive income.' },
    scripts: [{ title: 'Alcohol Recovery Guide', duration: '60 sec', script: 'HOOK: "I got help for my alcohol addiction..." [0-3 sec] PROBLEM: "Addiction is serious..." [3-15 sec] SOLUTION: "Here\'s how to get help..." [15-45 sec] PROOF: "See recovery stories..." [45-50 sec] CTA: "Get help - link in bio!" [50-60 sec]' }, { title: 'Rehab Center Guide', duration: '60 sec', script: 'HOOK: "I found the right rehab center..." [0-3 sec] PROBLEM: "Choosing rehab is hard..." [3-15 sec] SOLUTION: "Here\'s how to choose..." [15-45 sec] PROOF: "See reviews..." [45-50 sec] CTA: "Find rehab - link in bio!" [50-60 sec]' }],
    subNiches: {
      'inpatient rehab': { name: 'Inpatient Rehab', microNiches: { 'luxury rehab': { name: 'Luxury Rehab Centers', microMicroNiches: { 'executives': { name: 'Luxury Rehab for Executives', traffic: 600, competition: 32, difficulty: 38, cpaRange: '$85-95' }, 'professionals': { name: 'Rehab for Professionals', traffic: 550, competition: 30, difficulty: 36, cpaRange: '$80-90' }, 'high income': { name: 'Rehab for High Income Individuals', traffic: 500, competition: 28, difficulty: 34, cpaRange: '$75-85' } } } } }
    }
  },
};

// Helper function to flatten all sub-niches
const getAllSubNiches = (mainNiche: string) => {
  const niche = NICHE_DATA[mainNiche as keyof typeof NICHE_DATA];
  if (!niche || !niche.subNiches) return [];
  
  const flattened: any[] = [];
  
  Object.entries(niche.subNiches).forEach(([subKey, subNiche]: [string, any]) => {
    flattened.push({ key: subKey, name: subNiche.name, level: 'sub' });
    
    if (subNiche.microNiches) {
      Object.entries(subNiche.microNiches).forEach(([microKey, microNiche]: [string, any]) => {
        flattened.push({ key: microKey, name: (microNiche as any).name, level: 'micro', parent: subKey });
        
        if ((microNiche as any).microMicroNiches) {
          Object.entries((microNiche as any).microMicroNiches).forEach(([microMicroKey, microMicroNiche]: [string, any]) => {
            flattened.push({ key: microMicroKey, name: (microMicroNiche as any).name, level: 'micro-micro', parent: microKey });
          });
        }
      });
    }
  });
  
  return flattened;
};

export default function Dashboard() {
  const [niche, setNiche] = useState('weight loss');
  const [searchInput, setSearchInput] = useState('weight loss');
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [showMainDropdown, setShowMainDropdown] = useState(false);
  const [showSubDropdown, setShowSubDropdown] = useState(false);
  const [selectedSubNiche, setSelectedSubNiche] = useState<string | null>(null);

  const data = NICHE_DATA[niche as keyof typeof NICHE_DATA] || NICHE_DATA['weight loss'];
  const mainNiches = Object.keys(NICHE_DATA);
  const allSubNiches = getAllSubNiches(niche);

  const handleSearch = () => {
    const searchTerm = searchInput.toLowerCase().trim();
    if (searchTerm && NICHE_DATA[searchTerm as keyof typeof NICHE_DATA]) {
      setNiche(searchTerm);
      setActiveTool(null);
      setSelectedSubNiche(null);
      setShowMainDropdown(false);
    }
  };

  const handleReset = () => {
    setSearchInput('');
    setNiche('weight loss');
    setActiveTool(null);
    setSelectedSubNiche(null);
    setShowMainDropdown(false);
    setShowSubDropdown(false);
  };

  const handleSelectMainNiche = (selectedNiche: string) => {
    setSearchInput(selectedNiche);
    setNiche(selectedNiche);
    setActiveTool(null);
    setSelectedSubNiche(null);
    setShowMainDropdown(false);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0b1220', color: '#fff' }}>
      {/* HEADER */}
      <header style={{ background: 'linear-gradient(135deg, #1a2847 0%, #2b3a6a 100%)', padding: '20px', borderBottom: '2px solid #4f7cff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/home" style={{ fontSize: '1.8rem', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none' }}>🚀 CPA Niche Scout AI</Link>
          <nav style={{ display: 'flex', gap: '20px' }}>
            <Link href="/home" style={{ color: '#a8adb8', textDecoration: 'none' }}>Home</Link>
            <Link href="/pricing" style={{ color: '#a8adb8', textDecoration: 'none' }}>Pricing</Link>
            <Link href="/about" style={{ color: '#a8adb8', textDecoration: 'none' }}>About</Link>
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 20px' }}>
        {!activeTool ? (
          <>
            {/* SEARCH */}
            <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a', marginBottom: '40px' }}>
              <h2 style={{ color: '#4f7cff', marginBottom: '20px' }}>🔍 Enter Your Niche</h2>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'flex-start', marginBottom: '15px' }}>
                <div style={{ flex: 1, minWidth: '200px', position: 'relative' }}>
                  <input 
                    type="text" 
                    value={searchInput} 
                    onChange={(e) => setSearchInput(e.target.value)} 
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()} 
                    onFocus={() => setShowMainDropdown(true)}
                    placeholder="e.g., weight loss, insurance, alcohol rehabilitation..." 
                    style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #2b3a6a', background: '#0b1220', color: '#fff', boxSizing: 'border-box' }} 
                  />
                  {showMainDropdown && (
                    <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: '#0b1020', border: '1px solid #2b3a6a', borderRadius: '6px', marginTop: '5px', zIndex: 10, maxHeight: '200px', overflowY: 'auto' }}>
                      {mainNiches.map((n) => (
                        <button key={n} onClick={() => handleSelectMainNiche(n)} style={{ width: '100%', padding: '12px', background: 'transparent', border: 'none', color: '#a8adb8', textAlign: 'left', cursor: 'pointer', borderBottom: '1px solid #2b3a6a' }} onMouseEnter={(e) => (e.currentTarget.style.background = '#1a2847')} onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}>
                          {n}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button onClick={handleSearch} style={{ padding: '12px 30px', background: '#4f7cff', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>🔍 Search</button>
                <button onClick={handleReset} style={{ padding: '12px 25px', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>✕ Clear</button>
              </div>

              {/* SUB-NICHE DROPDOWN */}
              {allSubNiches.length > 0 && (
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ color: '#4f7cff', marginRight: '10px', fontWeight: 'bold' }}>📊 Sub-Niches:</label>
                  <div style={{ position: 'relative', display: 'inline-block', width: '100%', maxWidth: '400px' }}>
                    <button onClick={() => setShowSubDropdown(!showSubDropdown)} style={{ width: '100%', padding: '12px', background: '#0b1020', color: '#a8adb8', border: '1px solid #2b3a6a', borderRadius: '6px', textAlign: 'left', cursor: 'pointer' }}>
                      {selectedSubNiche ? selectedSubNiche : 'Select a sub-niche...'} ▼
                    </button>
                    {showSubDropdown && (
                      <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: '#0b1020', border: '1px solid #2b3a6a', borderRadius: '6px', marginTop: '5px', zIndex: 10, maxHeight: '300px', overflowY: 'auto' }}>
                        {allSubNiches.map((sub, i) => (
                          <button key={i} onClick={() => { setSelectedSubNiche(sub.name); setShowSubDropdown(false); }} style={{ width: '100%', padding: '12px', paddingLeft: `${sub.level === 'micro' ? '24px' : sub.level === 'micro-micro' ? '36px' : '12px'}`, background: 'transparent', border: 'none', color: '#a8adb8', textAlign: 'left', cursor: 'pointer', borderBottom: '1px solid #2b3a6a', fontSize: sub.level === 'sub' ? '1rem' : '0.9rem' }} onMouseEnter={(e) => (e.currentTarget.style.background = '#1a2847')} onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}>
                            {sub.level === 'sub' && '📌 '}{sub.level === 'micro' && '├─ '}{sub.level === 'micro-micro' && '└─ '}{sub.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div style={{ padding: '12px', background: '#0b1220', borderRadius: '6px', border: '1px solid #4f7cff', color: '#4f7cff', fontSize: '0.9rem' }}>
                ✅ Try: weight loss, insurance, alcohol rehabilitation, cryptocurrency, fitness, forex trading, real estate
              </div>
            </div>

            {/* TOOLS */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              {[
                { icon: '📈', title: 'Analyze', desc: 'Deep niche analysis' },
                { icon: '📊', title: 'Keywords', desc: 'Find high-traffic keywords' },
                { icon: '💰', title: 'Offers', desc: 'Match CPA offers' },
                { icon: '🌐', title: 'Domains', desc: 'Find expired domains' },
                { icon: '📐', title: 'Blueprint', desc: 'Website structure' },
                { icon: '🎬', title: 'Scripts', desc: 'Video scripts' },
              ].map((tool) => (
                <button key={tool.title} onClick={() => setActiveTool(tool.title)} style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '2px solid #2b3a6a', cursor: 'pointer', transition: 'all 0.3s', color: '#fff' }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#4f7cff')} onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#2b3a6a')}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{tool.icon}</div>
                  <h3 style={{ color: '#4f7cff', marginBottom: '8px' }}>{tool.title}</h3>
                  <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>{tool.desc}</p>
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* BACK BUTTON */}
            <button onClick={() => setActiveTool(null)} style={{ padding: '10px 20px', background: '#2b3a6a', color: '#a8adb8', border: 'none', borderRadius: '6px', cursor: 'pointer', marginBottom: '30px', fontWeight: 'bold' }}>← Back</button>

            {/* ANALYZE */}
            {activeTool === 'Analyze' && (
              <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
                <h2 style={{ color: '#4f7cff', marginBottom: '10px' }}>📈 Deep Niche Analysis for "{niche}"</h2>
                {selectedSubNiche && <p style={{ color: '#10b981', marginBottom: '20px' }}>Sub-Niche: {selectedSubNiche}</p>}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                  <div style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a', textAlign: 'center' }}>
                    <h4 style={{ color: '#a8adb8', marginBottom: '10px', marginTop: 0 }}>Overall Score</h4>
                    <div style={{ fontSize: '3rem', fontWeight: 'bold', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{data.analyze.score}/100</div>
                  </div>
                  <div style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a', textAlign: 'center' }}>
                    <h4 style={{ color: '#a8adb8', marginBottom: '10px', marginTop: 0 }}>Difficulty</h4>
                    <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#f59e0b' }}>{data.analyze.difficulty}/100</div>
                  </div>
                  <div style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a', textAlign: 'center' }}>
                    <h4 style={{ color: '#a8adb8', marginBottom: '10px', marginTop: 0 }}>Profit Potential</h4>
                    <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#10b981' }}>{data.analyze.profitPotential}/100</div>
                  </div>
                  <div style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a', textAlign: 'center' }}>
                    <h4 style={{ color: '#a8adb8', marginBottom: '10px', marginTop: 0 }}>Traffic Potential</h4>
                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ef4444' }}>{data.analyze.trafficPotential.toLocaleString()}</div>
                  </div>
                </div>
                <div style={{ background: data.analyze.verdict === 'BUILD' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)', padding: '25px', borderRadius: '8px', border: `2px solid ${data.analyze.verdict === 'BUILD' ? '#10b981' : '#f59e0b'}`, marginBottom: '40px', textAlign: 'center' }}>
                  <h3 style={{ color: data.analyze.verdict === 'BUILD' ? '#10b981' : '#f59e0b', marginTop: 0, marginBottom: '10px', fontSize: '1.5rem' }}>
                    {data.analyze.verdict === 'BUILD' ? '✅ VERDICT: BUILD THIS NICHE' : '⚠️ VERDICT: PROCEED WITH CAUTION'}
                  </h3>
                  <p style={{ color: '#a8adb8', margin: 0, lineHeight: '1.8' }}>{data.analyze.analysis}</p>
                </div>
              </div>
            )}

            {/* KEYWORDS */}
            {activeTool === 'Keywords' && (
              <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
                <h2 style={{ color: '#4f7cff', marginBottom: '10px' }}>📊 Keywords for "{niche}"</h2>
                {selectedSubNiche && <p style={{ color: '#10b981', marginBottom: '20px' }}>Sub-Niche: {selectedSubNiche}</p>}
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ background: '#0b1020', borderBottom: '2px solid #2b3a6a' }}>
                        <th style={{ padding: '15px', textAlign: 'left', color: '#4f7cff' }}>Keyword</th>
                        <th style={{ padding: '15px', textAlign: 'center', color: '#10b981' }}>Traffic</th>
                        <th style={{ padding: '15px', textAlign: 'center', color: '#f59e0b' }}>Competition</th>
                        <th style={{ padding: '15px', textAlign: 'center', color: '#ef4444' }}>Difficulty</th>
                        <th style={{ padding: '15px', textAlign: 'center', color: '#4f7cff' }}>Verdict</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.keywords.map((kw, i) => {
                        let verdict = 'MONITOR';
                        if (kw.traffic > 5000 && kw.difficulty < 40) verdict = '✅ BUILD';
                        else if (kw.traffic < 3000 || kw.difficulty > 60) verdict = '⏭️ SKIP';
                        return (
                          <tr key={i} style={{ borderBottom: '1px solid #2b3a6a' }}>
                            <td style={{ padding: '12px', color: '#a8adb8' }}>{kw.keyword}</td>
                            <td style={{ textAlign: 'center', padding: '12px', color: '#10b981', fontWeight: 'bold' }}>{kw.traffic}</td>
                            <td style={{ textAlign: 'center', padding: '12px', color: '#f59e0b' }}>{kw.competition}</td>
                            <td style={{ textAlign: 'center', padding: '12px', color: '#ef4444' }}>{kw.difficulty}</td>
                            <td style={{ textAlign: 'center', padding: '12px', color: verdict.includes('BUILD') ? '#10b981' : verdict.includes('SKIP') ? '#ef4444' : '#f59e0b', fontWeight: 'bold' }}>{verdict}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* OFFERS */}
            {activeTool === 'Offers' && (
              <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
                <h2 style={{ color: '#4f7cff', marginBottom: '10px' }}>💰 CPA Offers for "{niche}"</h2>
                {selectedSubNiche && <p style={{ color: '#10b981', marginBottom: '20px' }}>Sub-Niche: {selectedSubNiche}</p>}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                  {data.offers.map((offer, i) => (
                    <a key={i} href={offer.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                      <div style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '2px solid #2b3a6a', cursor: 'pointer', transition: 'all 0.3s', height: '100%' }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#4f7cff')} onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#2b3a6a')}>
                        <h3 style={{ color: '#4f7cff', marginBottom: '10px', marginTop: 0 }}>{offer.network}</h3>
                        <p style={{ color: '#a8adb8', marginBottom: '15px', fontSize: '0.9rem' }}>{offer.desc}</p>
                        <div style={{ background: '#1a2847', padding: '15px', borderRadius: '6px', marginBottom: '15px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <span style={{ color: '#a8adb8' }}>Payout:</span>
                            <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '1.2rem' }}>{offer.payout}</span>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ color: '#a8adb8' }}>Commission:</span>
                            <span style={{ color: '#f59e0b', fontWeight: 'bold', fontSize: '1.2rem' }}>{offer.commission}</span>
                          </div>
                        </div>
                        <button style={{ width: '100%', padding: '12px', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>🔗 Visit Network</button>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* DOMAINS */}
            {activeTool === 'Domains' && (
              <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
                <h2 style={{ color: '#4f7cff', marginBottom: '10px' }}>🌐 Expired Domains for "{niche}"</h2>
                {selectedSubNiche && <p style={{ color: '#10b981', marginBottom: '20px' }}>Sub-Niche: {selectedSubNiche}</p>}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                  {data.domains.map((domain, i) => (
                    <div key={i} style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '15px' }}>
                        <h3 style={{ color: '#4f7cff', marginTop: 0, marginBottom: 0 }}>{domain.domain}</h3>
                        <span style={{ background: domain.verdict === 'EXCELLENT' ? '#10b981' : domain.verdict === 'GOOD' ? '#4f7cff' : '#f59e0b', color: 'white', padding: '5px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>{domain.verdict}</span>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '15px' }}>
                        <div>
                          <p style={{ color: '#a8adb8', fontSize: '0.9rem', margin: '0 0 5px 0' }}>📊 Traffic</p>
                          <p style={{ color: '#10b981', fontWeight: 'bold', margin: 0 }}>{domain.traffic}</p>
                        </div>
                        <div>
                          <p style={{ color: '#a8adb8', fontSize: '0.9rem', margin: '0 0 5px 0' }}>🔗 Authority</p>
                          <p style={{ color: '#10b981', fontWeight: 'bold', margin: 0 }}>{domain.authority}</p>
                        </div>
                      </div>
                      <button style={{ width: '100%', padding: '10px', background: '#2b3a6a', color: '#4f7cff', border: '1px solid #4f7cff', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>🔗 Check Availability</button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* BLUEPRINT */}
            {activeTool === 'Blueprint' && (
              <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
                <h2 style={{ color: '#4f7cff', marginBottom: '10px' }}>📐 Website Blueprint for "{niche}"</h2>
                {selectedSubNiche && <p style={{ color: '#10b981', marginBottom: '20px' }}>Sub-Niche: {selectedSubNiche}</p>}
                <div style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a', marginBottom: '30px' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '10px' }}>📄 Website Pages</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
                    {data.blueprint.pages.map((page, i) => (
                      <div key={i} style={{ background: '#1a2847', padding: '15px', borderRadius: '6px', borderLeft: '4px solid #4f7cff' }}>
                        <h4 style={{ color: '#4f7cff', marginBottom: '8px', marginTop: 0 }}>{i + 1}. {page.name}</h4>
                        <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>{page.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SCRIPTS */}
            {activeTool === 'Scripts' && (
              <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
                <h2 style={{ color: '#4f7cff', marginBottom: '10px' }}>🎬 Video Scripts for "{niche}"</h2>
                {selectedSubNiche && <p style={{ color: '#10b981', marginBottom: '20px' }}>Sub-Niche: {selectedSubNiche}</p>}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                  {data.scripts.map((script, i) => (
                    <div key={i} style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '15px' }}>
                        <h3 style={{ color: '#4f7cff', marginTop: 0, marginBottom: 0 }}>{script.title}</h3>
                        <span style={{ background: '#f59e0b', color: 'white', padding: '5px 10px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>{script.duration}</span>
                      </div>
                      <div style={{ background: '#1a2847', padding: '15px', borderRadius: '6px' }}>
                        <h4 style={{ color: '#10b981', marginBottom: '8px', marginTop: 0 }}>Full Script:</h4>
                        <p style={{ color: '#a8adb8', margin: 0, lineHeight: '1.8', whiteSpace: 'pre-wrap', fontSize: '0.9rem' }}>{script.script}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </main>

      {/* FOOTER */}
      <footer style={{ background: '#1a2847', borderTop: '2px solid #2b3a6a', padding: '40px 20px', marginTop: '80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
            <div>
              <h4 style={{ color: '#4f7cff', marginBottom: '15px' }}>Product</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><Link href="/home" style={{ color: '#a8adb8', textDecoration: 'none' }}>Home</Link></li>
                <li><Link href="/pricing" style={{ color: '#a8adb8', textDecoration: 'none' }}>Pricing</Link></li>
                <li><Link href="/about" style={{ color: '#a8adb8', textDecoration: 'none' }}>About</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#4f7cff', marginBottom: '15px' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><Link href="/contact" style={{ color: '#a8adb8', textDecoration: 'none' }}>Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#4f7cff', marginBottom: '15px' }}>Legal</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><Link href="/privacy" style={{ color: '#a8adb8', textDecoration: 'none' }}>Privacy</Link></li>
                <li><Link href="/terms" style={{ color: '#a8adb8', textDecoration: 'none' }}>Terms</Link></li>
                <li><Link href="/compliance" style={{ color: '#a8adb8', textDecoration: 'none' }}>Compliance</Link></li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #2b3a6a', paddingTop: '20px', textAlign: 'center', color: '#a8adb8', fontSize: '0.85rem' }}>
            <p>© 2025 CPA Niche Scout AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
