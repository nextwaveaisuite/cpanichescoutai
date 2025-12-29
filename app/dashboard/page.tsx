'use client';
import { useState } from 'react';
import Link from 'next/link';

const NICHE_DATA = {
  'weight loss': {
    analyze: {
      niche: 'Weight Loss',
      score: 78,
      difficulty: 42,
      profitPotential: 85,
      trafficPotential: 8900,
      verdict: 'BUILD',
      analysis: 'Weight loss is a highly profitable niche with consistent high-intent traffic. Multiple monetization options available including supplements, programs, and fitness products. Competition is moderate but manageable with proper SEO strategy.',
      opportunities: [
        'High CPA payouts ($30-$50 per conversion)',
        'Multiple product types (supplements, programs, equipment)',
        'Strong email marketing potential',
        'Video content performs exceptionally well',
        'Affiliate programs with 40-50% commissions',
      ],
      challenges: [
        'Moderate to high competition',
        'Requires medical/health disclaimers',
        'Seasonal fluctuations',
        'Strict FTC compliance requirements',
        'Google E-E-A-T requirements for health content',
      ],
      recommendations: [
        'Focus on specific sub-niches (keto, intermittent fasting, supplements)',
        'Build authority with scientific backing and testimonials',
        'Create comprehensive guides and comparison content',
        'Establish email list for repeat commissions',
        'Partner with fitness influencers for promotion',
      ],
      marketSize: '$78.6 Billion USD annually',
      growthRate: '8.5% CAGR',
      topKeywords: ['best weight loss pills', 'weight loss supplements', 'fastest way to lose weight'],
      topOffers: ['ClickBank (50% commission)', 'CPA networks ($30-45 payout)'],
      estimatedEarnings: '$500-$2000/month per 1000 visitors',
    },
    keywords: [
      { keyword: 'best weight loss pills 2025', traffic: 8900, competition: 35, difficulty: 42 },
      { keyword: 'weight loss supplements that work', traffic: 7200, competition: 28, difficulty: 38 },
      { keyword: 'fastest way to lose weight', traffic: 6500, competition: 32, difficulty: 40 },
      { keyword: 'weight loss programs for women', traffic: 5800, competition: 25, difficulty: 35 },
      { keyword: 'natural weight loss remedies', traffic: 5200, competition: 22, difficulty: 32 },
      { keyword: 'weight loss without exercise', traffic: 4900, competition: 20, difficulty: 30 },
      { keyword: 'weight loss meal plans free', traffic: 4600, competition: 18, difficulty: 28 },
      { keyword: 'best diet for weight loss', traffic: 4300, competition: 25, difficulty: 33 },
    ],
    offers: [
      { network: 'ClickBank', url: 'https://www.clickbank.com', payout: '$45', commission: '50%', desc: 'Digital products, weight loss, fitness' },
      { network: 'CJ Affiliate', url: 'https://www.cj.com', payout: '$35', commission: '40%', desc: 'Retail, insurance, finance' },
      { network: 'Impact', url: 'https://www.impact.com', payout: '$40', commission: '45%', desc: 'Premium brands, high-value offers' },
      { network: 'Rakuten', url: 'https://rakutenmarketing.com', payout: '$30', commission: '35%', desc: 'Shopping, cashback, retail' },
      { network: 'ShareASale', url: 'https://www.shareasale.com', payout: '$38', commission: '42%', desc: 'Diverse offers, high-quality merchants' },
    ],
    domains: [
      { domain: 'WeightLossTips.com', age: 12, traffic: 2400, backlinks: 450, authority: 42, price: '$18', verdict: 'EXCELLENT' },
      { domain: 'BestDietPlans.net', age: 8, traffic: 1800, backlinks: 320, authority: 35, price: '$12', verdict: 'GOOD' },
      { domain: 'NaturalWeightLoss.org', age: 15, traffic: 3200, backlinks: 680, authority: 52, price: '$25', verdict: 'EXCELLENT' },
      { domain: 'WeightLossSecrets.com', age: 10, traffic: 2100, backlinks: 380, authority: 38, price: '$15', verdict: 'GOOD' },
      { domain: 'HealthyWeightLoss.net', age: 9, traffic: 1900, backlinks: 340, authority: 36, price: '$14', verdict: 'GOOD' },
      { domain: 'FitnessDiet.com', age: 14, traffic: 2800, backlinks: 520, authority: 48, price: '$22', verdict: 'EXCELLENT' },
      { domain: 'WeightLossJourney.org', age: 11, traffic: 2200, backlinks: 400, authority: 40, price: '$16', verdict: 'GOOD' },
      { domain: 'BestWeightLossTips.net', age: 7, traffic: 1600, backlinks: 280, authority: 32, price: '$10', verdict: 'FAIR' },
    ],
    blueprint: {
      pages: [
        { name: 'Homepage', description: 'Hero section with value proposition, benefits, testimonials, and CTA to email list' },
        { name: 'Weight Loss Tips', description: 'Pillar content with 20+ actionable tips, backed by research, monetized with CPA offers' },
        { name: 'Best Supplements', description: 'Product comparison guide, affiliate/CPA links, pros/cons, pricing' },
        { name: 'Success Stories', description: 'Before/after testimonials, case studies, builds trust and social proof' },
        { name: 'Meal Plans', description: 'Free meal plan templates, downloadable PDFs, email capture, premium upsell' },
        { name: 'Exercise Guide', description: 'Video tutorials, workout routines, fitness equipment recommendations' },
        { name: 'FAQ', description: 'Common questions answered, addresses objections, improves SEO' },
        { name: 'Contact', description: 'Email capture, support form, builds relationship with audience' },
      ],
      strategy: 'Create pillar content on weight loss, cluster around supplements, meal plans, and exercises. Build email list for repeat commissions. Monetize with ClickBank weight loss products and CPA supplement offers.',
      monetization: 'Primary: ClickBank weight loss products (50% commission). Secondary: CPA supplement offers ($30-45 per conversion). Tertiary: Email list (nurture sequences for repeat sales). Estimated: $500-2000/month per 1000 visitors.',
      timeline: 'Months 1-2: Build 8 pillar pages, optimize for SEO. Months 3-4: Drive traffic via content marketing, social media. Months 5-6: Scale with paid ads, email marketing. Months 6+: Passive income from email list and organic traffic.',
    },
    scripts: [
      { 
        title: 'Weight Loss Supplement Review', 
        duration: '60 sec', 
        script: 'HOOK: "I lost 30 pounds without dieting and here\'s how..." [0-3 sec] PROBLEM: "Most weight loss pills don\'t work because they don\'t address the real issue - your metabolism..." [3-15 sec] SOLUTION: "This supplement changed my life. It\'s scientifically formulated to boost metabolism, suppress appetite, and give you energy. I started seeing results in just 2 weeks..." [15-45 sec] PROOF: "Look at these results from real users..." [45-50 sec] CTA: "Click the link in bio to get yours today. Limited time offer - 50% off for the first 100 customers!" [50-60 sec]' 
      },
      { 
        title: 'Best Diet Plans Comparison', 
        duration: '60 sec', 
        script: 'HOOK: "I tried 5 different diets and only ONE actually worked..." [0-3 sec] PROBLEM: "There are so many diet options out there - keto, intermittent fasting, calorie counting - which one actually works? Most people waste months trying the wrong diet..." [3-15 sec] SOLUTION: "I created a comparison guide that breaks down the top 5 diets, shows pros and cons, and tells you which one is best for YOUR body type and lifestyle..." [15-45 sec] RESULTS: "My clients lost an average of 20 pounds in 8 weeks using this guide..." [45-50 sec] CTA: "Get your free guide now - link in bio. This is exactly what my personal training clients pay $200 for!" [50-60 sec]' 
      },
    ]
  },
  'insurance': {
    analyze: {
      niche: 'Insurance',
      score: 82,
      difficulty: 48,
      profitPotential: 88,
      trafficPotential: 12000,
      verdict: 'BUILD',
      analysis: 'Insurance is one of the most profitable niches with high-intent buyers actively seeking quotes and information. Multiple insurance types create sub-niche opportunities. High CPA payouts and consistent demand make this a stable income source.',
      opportunities: [
        'Highest CPA payouts in the industry ($40-$60 per lead)',
        'Multiple insurance types (car, home, life, health)',
        'Year-round consistent traffic',
        'Quote tools generate qualified leads',
        'Email marketing for policy renewals',
      ],
      challenges: [
        'High competition from established companies',
        'Requires compliance with insurance regulations',
        'Longer sales cycles',
        'Need for trust and authority',
        'Geographic targeting requirements',
      ],
      recommendations: [
        'Create state-specific insurance guides',
        'Build comparison tools and calculators',
        'Focus on specific insurance types',
        'Establish trust with expert content',
        'Integrate with CPA networks for lead generation',
      ],
      marketSize: '$1.2 Trillion USD annually',
      growthRate: '4.2% CAGR',
      topKeywords: ['cheap car insurance', 'best life insurance rates', 'affordable health insurance'],
      topOffers: ['CJ Affiliate ($40-60 payout)', 'Impact ($50+ payout)'],
      estimatedEarnings: '$1000-$5000/month per 1000 visitors',
    },
    keywords: [
      { keyword: 'cheap car insurance quotes', traffic: 12000, competition: 45, difficulty: 50 },
      { keyword: 'best life insurance rates', traffic: 9800, competition: 40, difficulty: 48 },
      { keyword: 'affordable health insurance plans', traffic: 8500, competition: 38, difficulty: 45 },
      { keyword: 'home insurance quotes online', traffic: 7200, competition: 35, difficulty: 42 },
      { keyword: 'pet insurance coverage', traffic: 5600, competition: 28, difficulty: 35 },
      { keyword: 'travel insurance plans', traffic: 4800, competition: 25, difficulty: 32 },
      { keyword: 'disability insurance rates', traffic: 4200, competition: 22, difficulty: 30 },
      { keyword: 'umbrella insurance coverage', traffic: 3600, competition: 20, difficulty: 28 },
    ],
    offers: [
      { network: 'ClickBank', url: 'https://www.clickbank.com', payout: '$55', commission: '55%', desc: 'Insurance guides, financial products' },
      { network: 'CJ Affiliate', url: 'https://www.cj.com', payout: '$45', commission: '50%', desc: 'Major insurance companies' },
      { network: 'Impact', url: 'https://www.impact.com', payout: '$50', commission: '52%', desc: 'Premium insurance offers' },
      { network: 'Rakuten', url: 'https://rakutenmarketing.com', payout: '$40', commission: '45%', desc: 'Insurance comparison tools' },
      { network: 'ShareASale', url: 'https://www.shareasale.com', payout: '$48', commission: '50%', desc: 'Diverse insurance merchants' },
    ],
    domains: [
      { domain: 'InsuranceQuotes.com', age: 16, traffic: 4500, backlinks: 850, authority: 58, price: '$35', verdict: 'EXCELLENT' },
      { domain: 'CarInsuranceTips.net', age: 10, traffic: 2800, backlinks: 520, authority: 45, price: '$20', verdict: 'GOOD' },
      { domain: 'BestInsuranceRates.org', age: 13, traffic: 3600, backlinks: 680, authority: 52, price: '$28', verdict: 'EXCELLENT' },
      { domain: 'InsuranceComparison.com', age: 11, traffic: 3200, backlinks: 600, authority: 48, price: '$24', verdict: 'EXCELLENT' },
      { domain: 'AffordableInsurance.net', age: 9, traffic: 2400, backlinks: 450, authority: 40, price: '$16', verdict: 'GOOD' },
      { domain: 'InsuranceGuide.org', age: 14, traffic: 3800, backlinks: 720, authority: 54, price: '$30', verdict: 'EXCELLENT' },
      { domain: 'QuickInsuranceQuotes.com', age: 8, traffic: 2100, backlinks: 380, authority: 36, price: '$14', verdict: 'GOOD' },
      { domain: 'InsuranceSavings.net', age: 12, traffic: 3100, backlinks: 580, authority: 46, price: '$22', verdict: 'EXCELLENT' },
    ],
    blueprint: {
      pages: [
        { name: 'Homepage', description: 'Insurance comparison tools, quote forms, trust badges, customer testimonials' },
        { name: 'Car Insurance', description: 'Comprehensive guide, state-by-state information, quote comparison, CPA offers' },
        { name: 'Home Insurance', description: 'Coverage types, cost factors, comparison tables, affiliate links' },
        { name: 'Life Insurance', description: 'Term vs permanent, calculators, quotes, high-commission CPA offers' },
        { name: 'Health Insurance', description: 'Plan types, ACA information, quotes, marketplace links' },
        { name: 'Quotes', description: 'Interactive quote tool, lead capture, CPA network integration' },
        { name: 'Reviews', description: 'Insurance company reviews, ratings, comparison charts' },
        { name: 'Contact', description: 'Support form, email capture, lead generation' },
      ],
      strategy: 'Create comparison content, quote tools, and insurance guides. Build email list for repeat commissions. Monetize with insurance CPA offers ($40-55 per lead).',
      monetization: 'Primary: Insurance CPA offers ($40-55 per qualified lead). Secondary: Affiliate commissions from quote tools. Tertiary: Email marketing for high-ticket policies. Estimated: $1000-5000/month per 1000 visitors.',
      timeline: 'Months 1-2: Build 8 comparison pages, integrate quote tools. Months 3-4: Drive traffic via SEO and content. Months 5-6: Scale with paid ads. Months 6+: Passive income from leads and email marketing.',
    },
    scripts: [
      { 
        title: 'Car Insurance Savings', 
        duration: '60 sec', 
        script: 'HOOK: "I saved $1200 on car insurance in just 15 minutes..." [0-3 sec] PROBLEM: "Most people overpay for car insurance because they don\'t shop around. Insurance companies count on you staying with them..." [3-15 sec] SOLUTION: "I created a simple process to compare quotes from 5+ companies and find the lowest rates. It takes 15 minutes and could save you $1000+ per year..." [15-45 sec] PROOF: "My followers saved an average of $800 in the first month..." [45-50 sec] CTA: "Get your free quote comparison guide - link in bio. See how much you can save today!" [50-60 sec]' 
      },
      { 
        title: 'Life Insurance Guide', 
        duration: '60 sec', 
        script: 'HOOK: "Protect your family for just pennies a day..." [0-3 sec] PROBLEM: "Life insurance seems expensive and confusing. Most people don\'t have enough coverage to protect their families..." [3-15 sec] SOLUTION: "Term life insurance is actually affordable. A 30-year-old can get $1 million coverage for just $30/month. I break down exactly what you need and how to get the best rates..." [15-45 sec] RESULTS: "My guide has helped thousands of families get protected..." [45-50 sec] CTA: "Download your free life insurance guide - link in bio. Get quotes from top companies today!" [50-60 sec]' 
      },
    ]
  },
  'alcohol rehabilitation': {
    analyze: {
      niche: 'Alcohol Rehabilitation',
      score: 85,
      difficulty: 45,
      profitPotential: 88,
      trafficPotential: 9200,
      verdict: 'BUILD',
      analysis: 'Alcohol rehabilitation is a high-value niche with desperate, motivated buyers. People seeking help are willing to pay premium prices for solutions. High CPA payouts and strong affiliate programs make this very profitable.',
      opportunities: [
        'Very high CPA payouts ($50-$100+ per lead)',
        'Motivated audience with urgent need',
        'Multiple program types (inpatient, outpatient, online)',
        'Strong email marketing potential',
        'Repeat customers and referrals',
      ],
      challenges: [
        'Requires sensitivity and ethical approach',
        'Strict regulations and compliance requirements',
        'Need for professional credibility',
        'Sensitive audience requires trust',
        'Legal liability concerns',
      ],
      recommendations: [
        'Partner with licensed treatment centers',
        'Create educational content about recovery',
        'Build trust through testimonials and success stories',
        'Establish authority with expert credentials',
        'Focus on specific programs and treatment types',
      ],
      marketSize: '$35.2 Billion USD annually',
      growthRate: '6.8% CAGR',
      topKeywords: ['alcohol rehabilitation programs', 'best rehab centers', 'alcohol treatment near me'],
      topOffers: ['CPA networks ($50-100 payout)', 'Rehab affiliate programs'],
      estimatedEarnings: '$1000-$4000/month per 1000 visitors',
    },
    keywords: [
      { keyword: 'alcohol rehabilitation programs', traffic: 9200, competition: 38, difficulty: 42 },
      { keyword: 'best alcohol rehab centers', traffic: 7800, competition: 35, difficulty: 40 },
      { keyword: 'alcohol treatment near me', traffic: 6900, competition: 32, difficulty: 38 },
      { keyword: 'inpatient alcohol rehab', traffic: 5600, competition: 28, difficulty: 35 },
      { keyword: 'outpatient alcohol treatment', traffic: 5100, competition: 25, difficulty: 33 },
      { keyword: 'alcohol addiction recovery', traffic: 4800, competition: 22, difficulty: 30 },
      { keyword: 'how to stop drinking alcohol', traffic: 7200, competition: 30, difficulty: 35 },
      { keyword: 'alcohol rehab cost', traffic: 4300, competition: 20, difficulty: 28 },
    ],
    offers: [
      { network: 'ClickBank', url: 'https://www.clickbank.com', payout: '$75', commission: '60%', desc: 'Recovery programs, health guides' },
      { network: 'CJ Affiliate', url: 'https://www.cj.com', payout: '$60', commission: '55%', desc: 'Rehab centers, treatment facilities' },
      { network: 'Impact', url: 'https://www.impact.com', payout: '$80', commission: '65%', desc: 'Premium rehab programs' },
      { network: 'ShareASale', url: 'https://www.shareasale.com', payout: '$70', commission: '58%', desc: 'Recovery services, counseling' },
      { network: 'Rakuten', url: 'https://rakutenmarketing.com', payout: '$55', commission: '50%', desc: 'Health and wellness programs' },
    ],
    domains: [
      { domain: 'AlcoholRehabGuide.com', age: 11, traffic: 3200, backlinks: 580, authority: 48, price: '$24', verdict: 'EXCELLENT' },
      { domain: 'BestRehabCenters.org', age: 13, traffic: 3800, backlinks: 720, authority: 54, price: '$30', verdict: 'EXCELLENT' },
      { domain: 'RecoveryPrograms.net', age: 10, traffic: 2900, backlinks: 520, authority: 45, price: '$20', verdict: 'GOOD' },
      { domain: 'AlcoholTreatment.com', age: 12, traffic: 3100, backlinks: 600, authority: 50, price: '$26', verdict: 'EXCELLENT' },
      { domain: 'AddictionRecovery.org', age: 15, traffic: 4200, backlinks: 850, authority: 58, price: '$35', verdict: 'EXCELLENT' },
      { domain: 'SoberLiving.net', age: 9, traffic: 2400, backlinks: 420, authority: 40, price: '$16', verdict: 'GOOD' },
      { domain: 'RehabOptions.com', age: 8, traffic: 2100, backlinks: 380, authority: 36, price: '$14', verdict: 'GOOD' },
      { domain: 'RecoveryHelp.org', age: 14, traffic: 3600, backlinks: 680, authority: 52, price: '$28', verdict: 'EXCELLENT' },
    ],
    blueprint: {
      pages: [
        { name: 'Homepage', description: 'Compassionate welcome, program overview, success stories, immediate help CTA' },
        { name: 'Treatment Options', description: 'Inpatient vs outpatient, program types, cost comparison, CPA offers' },
        { name: 'Success Stories', description: 'Real recovery journeys, before/after, testimonials, builds hope' },
        { name: 'FAQ', description: 'Common questions, addresses fears, explains process' },
        { name: 'Blog', description: 'Recovery tips, addiction education, coping strategies' },
        { name: 'Resources', description: 'Support groups, hotlines, downloadable guides' },
        { name: 'Contact', description: 'Intake form, phone number, immediate assistance' },
        { name: 'Insurance', description: 'Coverage information, payment options, financial assistance' },
      ],
      strategy: 'Create educational content about recovery, build trust through testimonials, monetize with high-value CPA rehab offers. Focus on compassion and helping people find treatment.',
      monetization: 'Primary: Rehab CPA offers ($50-100 per qualified lead). Secondary: Insurance affiliate commissions. Tertiary: Donation links and support. Estimated: $1000-4000/month per 1000 visitors.',
      timeline: 'Months 1-2: Build 8 pages with compassionate content. Months 3-4: Drive traffic via SEO and content. Months 5-6: Scale with paid ads. Months 6+: Passive income from leads.',
    },
    scripts: [
      { 
        title: 'Recovery Success Story', 
        duration: '60 sec', 
        script: 'HOOK: "I was at rock bottom with my drinking... then everything changed..." [0-3 sec] PROBLEM: "I couldn\'t stop drinking. I lost my job, my family, my self-respect. I tried everything but nothing worked..." [3-15 sec] SOLUTION: "I found a treatment program that actually understood my struggles. The compassionate staff helped me rebuild my life. Now I\'m 2 years sober..." [15-45 sec] RESULTS: "My family is back, I have a great job, and I\'m finally happy..." [45-50 sec] CTA: "If you\'re struggling with alcohol, help is available. Click the link in bio to find treatment options today. Your recovery is possible!" [50-60 sec]' 
      },
      { 
        title: 'Treatment Options Explained', 
        duration: '60 sec', 
        script: 'HOOK: "Confused about alcohol treatment options? Let me break it down..." [0-3 sec] PROBLEM: "There are so many treatment programs - inpatient, outpatient, online - how do you know which one is right for you?" [3-15 sec] SOLUTION: "I\'ve researched the top treatment programs and created a guide comparing costs, effectiveness, and what to expect. Each program has pros and cons..." [15-45 sec] RESULTS: "My guide helps people find the right program for their situation..." [45-50 sec] CTA: "Get your free treatment comparison guide - link in bio. Find the right program for you today!" [50-60 sec]' 
      },
    ]
  },
  'cryptocurrency': {
    analyze: {
      niche: 'Cryptocurrency',
      score: 72,
      difficulty: 55,
      profitPotential: 82,
      trafficPotential: 15000,
      verdict: 'BUILD',
      analysis: 'Cryptocurrency is a high-traffic, high-profit niche with passionate audience. Volatile but lucrative with multiple monetization options. Requires technical knowledge and regulatory awareness.',
      opportunities: [
        'Massive monthly search volume (15000+)',
        'High CPA payouts ($30-$80 per conversion)',
        'Multiple crypto platforms and exchanges',
        'Trading courses and education programs',
        'Email marketing to engaged audience',
      ],
      challenges: [
        'Highly competitive niche',
        'Regulatory uncertainty',
        'Market volatility',
        'Requires technical credibility',
        'Risk of promoting scams',
      ],
      recommendations: [
        'Focus on education and beginner guides',
        'Partner with legitimate crypto platforms',
        'Create comparison content for exchanges',
        'Build trust through transparent reviews',
        'Stay updated on regulations',
      ],
      marketSize: '$2.1 Trillion USD market cap',
      growthRate: '12.5% CAGR',
      topKeywords: ['best crypto exchanges', 'how to buy bitcoin', 'cryptocurrency trading'],
      topOffers: ['Crypto exchange affiliates', 'Trading course offers'],
      estimatedEarnings: '$800-$3500/month per 1000 visitors',
    },
    keywords: [
      { keyword: 'best crypto exchanges 2025', traffic: 15000, competition: 52, difficulty: 58 },
      { keyword: 'how to buy bitcoin', traffic: 12000, competition: 48, difficulty: 55 },
      { keyword: 'cryptocurrency trading for beginners', traffic: 9800, competition: 42, difficulty: 50 },
      { keyword: 'best altcoins to invest', traffic: 8500, competition: 45, difficulty: 52 },
      { keyword: 'ethereum price prediction', traffic: 7200, competition: 40, difficulty: 48 },
      { keyword: 'crypto wallet security', traffic: 6100, competition: 35, difficulty: 42 },
      { keyword: 'defi yield farming', traffic: 5400, competition: 38, difficulty: 45 },
      { keyword: 'nft marketplace guide', traffic: 4800, competition: 32, difficulty: 40 },
    ],
    offers: [
      { network: 'ClickBank', url: 'https://www.clickbank.com', payout: '$65', commission: '58%', desc: 'Crypto courses, trading guides' },
      { network: 'CJ Affiliate', url: 'https://www.cj.com', payout: '$50', commission: '48%', desc: 'Crypto exchanges, platforms' },
      { network: 'Impact', url: 'https://www.impact.com', payout: '$70', commission: '62%', desc: 'Premium crypto offers' },
      { network: 'ShareASale', url: 'https://www.shareasale.com', payout: '$55', commission: '52%', desc: 'Crypto services, tools' },
      { network: 'Rakuten', url: 'https://rakutenmarketing.com', payout: '$45', commission: '42%', desc: 'Crypto wallets, hardware' },
    ],
    domains: [
      { domain: 'CryptoGuide.com', age: 9, traffic: 4200, backlinks: 720, authority: 52, price: '$28', verdict: 'EXCELLENT' },
      { domain: 'BitcoinTrading.net', age: 11, traffic: 3800, backlinks: 680, authority: 50, price: '$26', verdict: 'EXCELLENT' },
      { domain: 'CryptoExchanges.org', age: 10, traffic: 3500, backlinks: 620, authority: 48, price: '$24', verdict: 'EXCELLENT' },
      { domain: 'AltcoinReviews.com', age: 8, traffic: 2900, backlinks: 520, authority: 44, price: '$20', verdict: 'GOOD' },
      { domain: 'BlockchainNews.net', age: 12, traffic: 4100, backlinks: 750, authority: 54, price: '$30', verdict: 'EXCELLENT' },
      { domain: 'CryptoInvesting.org', age: 7, traffic: 2400, backlinks: 420, authority: 38, price: '$14', verdict: 'GOOD' },
      { domain: 'DeFiYield.com', age: 6, traffic: 1800, backlinks: 320, authority: 32, price: '$10', verdict: 'FAIR' },
      { domain: 'NFTMarketplace.net', age: 5, traffic: 1600, backlinks: 280, authority: 28, price: '$8', verdict: 'FAIR' },
    ],
    blueprint: {
      pages: [
        { name: 'Homepage', description: 'Crypto education hub, beginner guides, exchange comparisons' },
        { name: 'Exchanges', description: 'Top exchange reviews, comparison tables, affiliate links' },
        { name: 'Beginner Guide', description: 'How to start, wallet setup, security tips' },
        { name: 'Trading', description: 'Trading strategies, technical analysis, risk management' },
        { name: 'Altcoins', description: 'Altcoin reviews, investment analysis, price predictions' },
        { name: 'News', description: 'Latest crypto news, market updates, analysis' },
        { name: 'Tools', description: 'Calculators, portfolio trackers, price alerts' },
        { name: 'FAQ', description: 'Common questions, security, regulations' },
      ],
      strategy: 'Create educational content, compare exchanges, build trust through transparent reviews. Monetize with exchange affiliates and trading course offers.',
      monetization: 'Primary: Crypto exchange affiliates ($30-80 per conversion). Secondary: Trading course commissions. Tertiary: Email marketing. Estimated: $800-3500/month per 1000 visitors.',
      timeline: 'Months 1-2: Build 8 educational pages. Months 3-4: Drive traffic via SEO. Months 5-6: Scale with paid ads. Months 6+: Passive income from affiliates.',
    },
    scripts: [
      { 
        title: 'Crypto Exchange Comparison', 
        duration: '60 sec', 
        script: 'HOOK: "I compared 10 crypto exchanges so you don\'t have to..." [0-3 sec] PROBLEM: "Choosing a crypto exchange is confusing. There are so many options and they all have different fees, security, and features..." [3-15 sec] SOLUTION: "I created a detailed comparison guide that breaks down the top exchanges, shows fees, security ratings, and which is best for beginners..." [15-45 sec] RESULTS: "This guide has helped thousands of people choose the right exchange..." [45-50 sec] CTA: "Get your free exchange comparison guide - link in bio. Start trading crypto safely today!" [50-60 sec]' 
      },
      { 
        title: 'Bitcoin Investing Basics', 
        duration: '60 sec', 
        script: 'HOOK: "Want to invest in Bitcoin but don\'t know where to start? I\'ll show you..." [0-3 sec] PROBLEM: "Bitcoin seems complicated and risky. Most people don\'t know how to buy it safely or where to store it..." [3-15 sec] SOLUTION: "I break down Bitcoin investing into 5 simple steps. You can start with as little as $10 and learn as you go..." [15-45 sec] RESULTS: "My guide has helped beginners safely enter the crypto market..." [45-50 sec] CTA: "Get your free Bitcoin investing guide - link in bio. Start your crypto journey today!" [50-60 sec]' 
      },
    ]
  },
  'fitness': {
    analyze: {
      niche: 'Fitness',
      score: 76,
      difficulty: 48,
      profitPotential: 84,
      trafficPotential: 11200,
      verdict: 'BUILD',
      analysis: 'Fitness is a massive, evergreen niche with consistent demand. Multiple sub-niches and monetization options. High engagement and repeat customers make this very profitable.',
      opportunities: [
        'Massive monthly search volume',
        'Multiple product types (equipment, programs, supplements)',
        'Strong video content potential',
        'High email engagement',
        'Multiple CPA networks and affiliates',
      ],
      challenges: [
        'High competition',
        'Requires credibility and expertise',
        'Seasonal fluctuations',
        'FTC compliance for health claims',
        'Liability concerns',
      ],
      recommendations: [
        'Focus on specific fitness niches (yoga, CrossFit, bodybuilding)',
        'Create workout programs and guides',
        'Build email list for repeat sales',
        'Partner with fitness influencers',
        'Create video content for YouTube',
      ],
      marketSize: '$96.7 Billion USD annually',
      growthRate: '9.2% CAGR',
      topKeywords: ['best workout programs', 'home gym equipment', 'fitness tips'],
      topOffers: ['ClickBank fitness programs', 'Equipment affiliates'],
      estimatedEarnings: '$600-$2500/month per 1000 visitors',
    },
    keywords: [
      { keyword: 'best home workout programs', traffic: 11200, competition: 42, difficulty: 48 },
      { keyword: 'gym equipment for home', traffic: 9500, competition: 38, difficulty: 45 },
      { keyword: 'weight training for beginners', traffic: 8200, competition: 35, difficulty: 42 },
      { keyword: 'best fitness apps', traffic: 7800, competition: 32, difficulty: 40 },
      { keyword: 'yoga for beginners', traffic: 6900, competition: 28, difficulty: 35 },
      { keyword: 'cardio workouts at home', traffic: 6100, competition: 25, difficulty: 32 },
      { keyword: 'muscle building diet', traffic: 5400, competition: 30, difficulty: 38 },
      { keyword: 'personal training certification', traffic: 4600, competition: 22, difficulty: 30 },
    ],
    offers: [
      { network: 'ClickBank', url: 'https://www.clickbank.com', payout: '$50', commission: '52%', desc: 'Fitness programs, workout guides' },
      { network: 'CJ Affiliate', url: 'https://www.cj.com', payout: '$40', commission: '45%', desc: 'Gym equipment, apparel' },
      { network: 'Impact', url: 'https://www.impact.com', payout: '$45', commission: '48%', desc: 'Premium fitness offers' },
      { network: 'ShareASale', url: 'https://www.shareasale.com', payout: '$42', commission: '46%', desc: 'Fitness services, programs' },
      { network: 'Rakuten', url: 'https://rakutenmarketing.com', payout: '$35', commission: '40%', desc: 'Fitness gear, supplements' },
    ],
    domains: [
      { domain: 'FitnessGuide.com', age: 12, traffic: 3600, backlinks: 680, authority: 52, price: '$28', verdict: 'EXCELLENT' },
      { domain: 'HomeWorkouts.net', age: 10, traffic: 3100, backlinks: 580, authority: 48, price: '$24', verdict: 'EXCELLENT' },
      { domain: 'WorkoutPrograms.org', age: 13, traffic: 3900, backlinks: 720, authority: 54, price: '$30', verdict: 'EXCELLENT' },
      { domain: 'FitnessTips.com', age: 11, traffic: 3400, backlinks: 620, authority: 50, price: '$26', verdict: 'EXCELLENT' },
      { domain: 'BodybuildingGuide.net', age: 9, traffic: 2800, backlinks: 520, authority: 44, price: '$20', verdict: 'GOOD' },
      { domain: 'YogaForBeginners.org', age: 8, traffic: 2400, backlinks: 420, authority: 38, price: '$14', verdict: 'GOOD' },
      { domain: 'GymEquipment.com', age: 7, traffic: 2100, backlinks: 380, authority: 36, price: '$12', verdict: 'GOOD' },
      { domain: 'TrainingTips.net', age: 6, traffic: 1800, backlinks: 320, authority: 32, price: '$10', verdict: 'FAIR' },
    ],
    blueprint: {
      pages: [
        { name: 'Homepage', description: 'Fitness hub, program overview, success stories, email signup' },
        { name: 'Workout Programs', description: 'Different program types, difficulty levels, CPA offers' },
        { name: 'Equipment Guide', description: 'Home gym setup, equipment reviews, affiliate links' },
        { name: 'Nutrition', description: 'Meal plans, recipes, supplement recommendations' },
        { name: 'Blog', description: 'Fitness tips, training advice, motivation' },
        { name: 'Success Stories', description: 'Transformation stories, before/after, testimonials' },
        { name: 'FAQ', description: 'Common questions, training tips, nutrition advice' },
        { name: 'Contact', description: 'Email signup, coaching inquiry, support' },
      ],
      strategy: 'Create workout programs, equipment guides, and nutrition content. Build email list for repeat sales. Monetize with fitness program affiliates and equipment commissions.',
      monetization: 'Primary: Fitness program affiliates ($40-50 per conversion). Secondary: Equipment commissions. Tertiary: Email marketing. Estimated: $600-2500/month per 1000 visitors.',
      timeline: 'Months 1-2: Build 8 pages with programs and guides. Months 3-4: Drive traffic via SEO. Months 5-6: Scale with paid ads. Months 6+: Passive income.',
    },
    scripts: [
      { 
        title: 'Home Workout Program', 
        duration: '60 sec', 
        script: 'HOOK: "Get a gym-quality workout at home with no equipment..." [0-3 sec] PROBLEM: "Gym memberships are expensive and time-consuming. Most people quit because they can\'t stay consistent..." [3-15 sec] SOLUTION: "I created a home workout program that takes 30 minutes, requires no equipment, and delivers real results. Thousands of people have transformed their bodies..." [15-45 sec] RESULTS: "My clients lost an average of 15 pounds and gained muscle in 12 weeks..." [45-50 sec] CTA: "Get your free home workout guide - link in bio. Start your transformation today!" [50-60 sec]' 
      },
      { 
        title: 'Fitness Equipment Review', 
        duration: '60 sec', 
        script: 'HOOK: "I tested 20 home gym products so you don\'t waste money..." [0-3 sec] PROBLEM: "There are so many fitness products out there. Most are overpriced and don\'t deliver results..." [3-15 sec] SOLUTION: "I created an honest review guide comparing the top equipment, showing pros and cons, and telling you which ones actually work..." [15-45 sec] RESULTS: "This guide has saved people thousands in wasted purchases..." [45-50 sec] CTA: "Get your free equipment guide - link in bio. Build your perfect home gym today!" [50-60 sec]' 
      },
    ]
  },
  'forex trading': {
    analyze: {
      niche: 'Forex Trading',
      score: 68,
      difficulty: 58,
      profitPotential: 80,
      trafficPotential: 8900,
      verdict: 'MONITOR',
      analysis: 'Forex trading is high-profit but high-risk. Requires regulatory compliance and ethical approach. Good for experienced marketers with financial credibility.',
      opportunities: [
        'Very high CPA payouts ($50-$150 per lead)',
        'Motivated audience with money to invest',
        'Multiple brokers and platforms',
        'Trading education programs',
        'Signal services and tools',
      ],
      challenges: [
        'Highly regulated industry',
        'Risk of promoting scams',
        'Requires financial expertise',
        'High competition',
        'Liability concerns',
      ],
      recommendations: [
        'Partner with regulated brokers only',
        'Create educational content',
        'Disclose risks clearly',
        'Build trust through transparency',
        'Focus on beginner education',
      ],
      marketSize: '$2.4 Quadrillion USD daily volume',
      growthRate: '5.8% CAGR',
      topKeywords: ['best forex brokers', 'forex trading for beginners', 'forex strategies'],
      topOffers: ['Forex broker affiliates', 'Trading education'],
      estimatedEarnings: '$700-$3000/month per 1000 visitors',
    },
    keywords: [
      { keyword: 'best forex brokers', traffic: 8900, competition: 55, difficulty: 60 },
      { keyword: 'forex trading for beginners', traffic: 7200, competition: 48, difficulty: 55 },
      { keyword: 'forex trading strategies', traffic: 6500, competition: 50, difficulty: 58 },
      { keyword: 'how to trade forex', traffic: 5800, competition: 45, difficulty: 52 },
      { keyword: 'forex signals', traffic: 4900, competition: 42, difficulty: 50 },
      { keyword: 'forex demo account', traffic: 4200, competition: 38, difficulty: 45 },
      { keyword: 'currency trading tips', traffic: 3800, competition: 35, difficulty: 42 },
      { keyword: 'forex leverage explained', traffic: 3200, competition: 32, difficulty: 40 },
    ],
    offers: [
      { network: 'ClickBank', url: 'https://www.clickbank.com', payout: '$100', commission: '65%', desc: 'Forex courses, trading guides' },
      { network: 'CJ Affiliate', url: 'https://www.cj.com', payout: '$75', commission: '58%', desc: 'Forex brokers, platforms' },
      { network: 'Impact', url: 'https://www.impact.com', payout: '$120', commission: '70%', desc: 'Premium forex offers' },
      { network: 'ShareASale', url: 'https://www.shareasale.com', payout: '$85', commission: '62%', desc: 'Trading services, signals' },
      { network: 'Rakuten', url: 'https://rakutenmarketing.com', payout: '$65', commission: '55%', desc: 'Forex tools, software' },
    ],
    domains: [
      { domain: 'ForexGuide.com', age: 10, traffic: 3200, backlinks: 580, authority: 48, price: '$24', verdict: 'EXCELLENT' },
      { domain: 'ForexBrokers.net', age: 12, traffic: 3800, backlinks: 720, authority: 54, price: '$30', verdict: 'EXCELLENT' },
      { domain: 'TradingStrategies.org', age: 11, traffic: 3400, backlinks: 620, authority: 50, price: '$26', verdict: 'EXCELLENT' },
      { domain: 'CurrencyTrading.com', age: 9, traffic: 2900, backlinks: 520, authority: 44, price: '$20', verdict: 'GOOD' },
      { domain: 'ForexSignals.net', age: 8, traffic: 2400, backlinks: 420, authority: 38, price: '$14', verdict: 'GOOD' },
      { domain: 'TradingTips.org', age: 7, traffic: 2100, backlinks: 380, authority: 36, price: '$12', verdict: 'GOOD' },
      { domain: 'ForexEducation.com', age: 6, traffic: 1800, backlinks: 320, authority: 32, price: '$10', verdict: 'FAIR' },
      { domain: 'DayTrading.net', age: 5, traffic: 1500, backlinks: 280, authority: 28, price: '$8', verdict: 'FAIR' },
    ],
    blueprint: {
      pages: [
        { name: 'Homepage', description: 'Forex education hub, broker reviews, trading guides' },
        { name: 'Brokers', description: 'Broker comparisons, reviews, affiliate links' },
        { name: 'Beginner Guide', description: 'How to start, account setup, first trade' },
        { name: 'Strategies', description: 'Trading strategies, technical analysis, risk management' },
        { name: 'Signals', description: 'Trading signals, alerts, premium services' },
        { name: 'Tools', description: 'Calculators, converters, analysis tools' },
        { name: 'News', description: 'Market news, economic calendar, analysis' },
        { name: 'FAQ', description: 'Common questions, regulations, safety' },
      ],
      strategy: 'Create educational content, compare brokers, build trust through transparency. Monetize with broker affiliates and trading education.',
      monetization: 'Primary: Forex broker affiliates ($50-150 per conversion). Secondary: Trading courses. Tertiary: Email marketing. Estimated: $700-3000/month per 1000 visitors.',
      timeline: 'Months 1-2: Build 8 educational pages. Months 3-4: Drive traffic via SEO. Months 5-6: Scale with paid ads. Months 6+: Passive income.',
    },
    scripts: [
      { 
        title: 'Forex Broker Comparison', 
        duration: '60 sec', 
        script: 'HOOK: "I compared the top 10 forex brokers so you can choose the best one..." [0-3 sec] PROBLEM: "Choosing a forex broker is confusing. There are so many options and they all claim to be the best..." [3-15 sec] SOLUTION: "I created a detailed comparison guide showing fees, spreads, regulation, and which broker is best for your trading style..." [15-45 sec] RESULTS: "This guide has helped thousands of traders find the right broker..." [45-50 sec] CTA: "Get your free broker comparison guide - link in bio. Start trading with the right broker today!" [50-60 sec]' 
      },
      { 
        title: 'Forex Trading Basics', 
        duration: '60 sec', 
        script: 'HOOK: "Want to start forex trading but don\'t know how? I\'ll show you..." [0-3 sec] PROBLEM: "Forex seems complicated and risky. Most beginners lose money because they don\'t understand the basics..." [3-15 sec] SOLUTION: "I break down forex trading into simple steps. You can start with a demo account and learn risk-free..." [15-45 sec] RESULTS: "My guide has helped beginners safely enter the forex market..." [45-50 sec] CTA: "Get your free forex trading guide - link in bio. Start your trading journey today!" [50-60 sec]' 
      },
    ]
  },
  'real estate': {
    analyze: {
      niche: 'Real Estate',
      score: 79,
      difficulty: 50,
      profitPotential: 86,
      trafficPotential: 10500,
      verdict: 'BUILD',
      analysis: 'Real estate is a stable, high-value niche with consistent demand. Multiple sub-niches and monetization options. Requires authority but very profitable.',
      opportunities: [
        'High CPA payouts ($40-$80 per lead)',
        'Multiple property types and markets',
        'Lead generation potential',
        'Email marketing for repeat business',
        'Affiliate programs with brokers',
      ],
      challenges: [
        'Requires real estate knowledge',
        'Geographic targeting needed',
        'Competition from established agents',
        'Regulatory compliance',
        'Longer sales cycles',
      ],
      recommendations: [
        'Focus on specific markets or property types',
        'Create buyer/seller guides',
        'Build email list for leads',
        'Partner with real estate agents',
        'Create market analysis content',
      ],
      marketSize: '$17.5 Trillion USD annually',
      growthRate: '3.8% CAGR',
      topKeywords: ['homes for sale', 'real estate investing', 'how to buy a house'],
      topOffers: ['Real estate platforms', 'Mortgage affiliates'],
      estimatedEarnings: '$800-$3500/month per 1000 visitors',
    },
    keywords: [
      { keyword: 'real estate investing for beginners', traffic: 10500, competition: 45, difficulty: 50 },
      { keyword: 'how to buy a house', traffic: 8900, competition: 40, difficulty: 48 },
      { keyword: 'best real estate markets', traffic: 7600, competition: 38, difficulty: 45 },
      { keyword: 'mortgage rates today', traffic: 6800, competition: 35, difficulty: 42 },
      { keyword: 'property management tips', traffic: 5400, competition: 28, difficulty: 35 },
      { keyword: 'real estate flipping guide', traffic: 4900, competition: 32, difficulty: 40 },
      { keyword: 'rental property calculator', traffic: 4200, competition: 25, difficulty: 32 },
      { keyword: 'real estate agent commission', traffic: 3600, competition: 22, difficulty: 30 },
    ],
    offers: [
      { network: 'ClickBank', url: 'https://www.clickbank.com', payout: '$60', commission: '55%', desc: 'Real estate courses, guides' },
      { network: 'CJ Affiliate', url: 'https://www.cj.com', payout: '$50', commission: '48%', desc: 'Real estate platforms, brokers' },
      { network: 'Impact', url: 'https://www.impact.com', payout: '$70', commission: '62%', desc: 'Premium real estate offers' },
      { network: 'ShareASale', url: 'https://www.shareasale.com', payout: '$55', commission: '52%', desc: 'Real estate services, tools' },
      { network: 'Rakuten', url: 'https://rakutenmarketing.com', payout: '$45', commission: '42%', desc: 'Mortgage, insurance, services' },
    ],
    domains: [
      { domain: 'RealEstateGuide.com', age: 13, traffic: 4100, backlinks: 780, authority: 56, price: '$32', verdict: 'EXCELLENT' },
      { domain: 'InvestingInRealEstate.net', age: 11, traffic: 3600, backlinks: 680, authority: 52, price: '$28', verdict: 'EXCELLENT' },
      { domain: 'PropertyInvestment.org', age: 12, traffic: 3900, backlinks: 720, authority: 54, price: '$30', verdict: 'EXCELLENT' },
      { domain: 'HouseBuyingGuide.com', age: 10, traffic: 3200, backlinks: 600, authority: 48, price: '$24', verdict: 'EXCELLENT' },
      { domain: 'RealEstateTips.net', age: 9, traffic: 2800, backlinks: 520, authority: 44, price: '$20', verdict: 'GOOD' },
      { domain: 'MortgageGuide.org', age: 8, traffic: 2400, backlinks: 420, authority: 38, price: '$14', verdict: 'GOOD' },
      { domain: 'PropertyFlipping.com', age: 7, traffic: 2100, backlinks: 380, authority: 36, price: '$12', verdict: 'GOOD' },
      { domain: 'RentalProperties.net', age: 6, traffic: 1800, backlinks: 320, authority: 32, price: '$10', verdict: 'FAIR' },
    ],
    blueprint: {
      pages: [
        { name: 'Homepage', description: 'Real estate hub, buying/selling guides, investment tips' },
        { name: 'Buying Guide', description: 'Step-by-step buying process, mortgage info, CPA offers' },
        { name: 'Investing', description: 'Investment strategies, market analysis, property types' },
        { name: 'Market Data', description: 'Local market info, price trends, neighborhood guides' },
        { name: 'Mortgage', description: 'Mortgage calculator, rates, lender comparisons' },
        { name: 'Blog', description: 'Real estate tips, market news, investment advice' },
        { name: 'Tools', description: 'Calculators, ROI tools, investment analysis' },
        { name: 'Contact', description: 'Lead capture, agent referrals, support' },
      ],
      strategy: 'Create buying/selling/investing guides, market analysis content. Build email list for leads. Monetize with real estate platform affiliates and mortgage offers.',
      monetization: 'Primary: Real estate platform affiliates ($40-80 per lead). Secondary: Mortgage commissions. Tertiary: Email marketing. Estimated: $800-3500/month per 1000 visitors.',
      timeline: 'Months 1-2: Build 8 pages with guides and tools. Months 3-4: Drive traffic via SEO. Months 5-6: Scale with paid ads. Months 6+: Passive income.',
    },
    scripts: [
      { 
        title: 'Real Estate Investing Guide', 
        duration: '60 sec', 
        script: 'HOOK: "I made $50,000 in my first year of real estate investing... here\'s how..." [0-3 sec] PROBLEM: "Most people think you need a lot of money to invest in real estate. They don\'t know where to start..." [3-15 sec] SOLUTION: "I created a beginner\'s guide that shows you how to start with minimal capital, find deals, and build wealth through real estate..." [15-45 sec] RESULTS: "My students have made an average of $30,000 in their first year..." [45-50 sec] CTA: "Get your free real estate investing guide - link in bio. Start building wealth today!" [50-60 sec]' 
      },
      { 
        title: 'Buying Your First Home', 
        duration: '60 sec', 
        script: 'HOOK: "Buying your first home doesn\'t have to be scary... I\'ll walk you through it..." [0-3 sec] PROBLEM: "First-time home buyers are overwhelmed. They don\'t know about mortgages, inspections, or closing costs..." [3-15 sec] SOLUTION: "I created a step-by-step guide that explains everything. You\'ll know exactly what to expect and how to avoid costly mistakes..." [15-45 sec] RESULTS: "This guide has helped thousands of people buy their first home with confidence..." [45-50 sec] CTA: "Get your free home buying guide - link in bio. Start your home buying journey today!" [50-60 sec]' 
      },
    ]
  },
};

export default function Dashboard() {
  const [niche, setNiche] = useState('weight loss');
  const [searchInput, setSearchInput] = useState('weight loss');
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const data = NICHE_DATA[niche as keyof typeof NICHE_DATA] || NICHE_DATA['weight loss'];

  const handleSearch = () => {
    const searchTerm = searchInput.toLowerCase().trim();
    if (searchTerm && NICHE_DATA[searchTerm as keyof typeof NICHE_DATA]) {
      setNiche(searchTerm);
      setActiveTool(null);
    }
  };

  const handleReset = () => {
    setSearchInput('');
    setNiche('weight loss');
    setActiveTool(null);
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
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
                <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSearch()} placeholder="e.g., weight loss, insurance, alcohol rehabilitation..." style={{ flex: 1, minWidth: '200px', padding: '12px', borderRadius: '6px', border: '1px solid #2b3a6a', background: '#0b1220', color: '#fff' }} />
                <button onClick={handleSearch} style={{ padding: '12px 30px', background: '#4f7cff', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>🔍 Search</button>
                <button onClick={handleReset} style={{ padding: '12px 25px', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>✕ Clear</button>
              </div>
              <div style={{ marginTop: '15px', padding: '12px', background: '#0b1220', borderRadius: '6px', border: '1px solid #4f7cff', color: '#4f7cff', fontSize: '0.9rem' }}>
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
                <h2 style={{ color: '#4f7cff', marginBottom: '30px' }}>📈 Deep Niche Analysis for "{niche}"</h2>
                
                {/* OVERVIEW SCORES */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                  <div style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a', textAlign: 'center' }}>
                    <h4 style={{ color: '#a8adb8', marginBottom: '10px', marginTop: 0 }}>Overall Score</h4>
                    <div style={{ fontSize: '3rem', fontWeight: 'bold', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{data.analyze.score}/100</div>
                    <p style={{ color: '#a8adb8', margin: '10px 0 0 0', fontSize: '0.9rem' }}>Niche Potential</p>
                  </div>
                  
                  <div style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a', textAlign: 'center' }}>
                    <h4 style={{ color: '#a8adb8', marginBottom: '10px', marginTop: 0 }}>Difficulty</h4>
                    <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#f59e0b' }}>{data.analyze.difficulty}/100</div>
                    <p style={{ color: '#a8adb8', margin: '10px 0 0 0', fontSize: '0.9rem' }}>Ranking Difficulty</p>
                  </div>
                  
                  <div style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a', textAlign: 'center' }}>
                    <h4 style={{ color: '#a8adb8', marginBottom: '10px', marginTop: 0 }}>Profit Potential</h4>
                    <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#10b981' }}>{data.analyze.profitPotential}/100</div>
                    <p style={{ color: '#a8adb8', margin: '10px 0 0 0', fontSize: '0.9rem' }}>Revenue Potential</p>
                  </div>
                  
                  <div style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a', textAlign: 'center' }}>
                    <h4 style={{ color: '#a8adb8', marginBottom: '10px', marginTop: 0 }}>Traffic Potential</h4>
                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ef4444' }}>{data.analyze.trafficPotential.toLocaleString()}</div>
                    <p style={{ color: '#a8adb8', margin: '10px 0 0 0', fontSize: '0.9rem' }}>Monthly Searches</p>
                  </div>
                </div>

                {/* VERDICT */}
                <div style={{ background: data.analyze.verdict === 'BUILD' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)', padding: '25px', borderRadius: '8px', border: `2px solid ${data.analyze.verdict === 'BUILD' ? '#10b981' : '#f59e0b'}`, marginBottom: '40px', textAlign: 'center' }}>
                  <h3 style={{ color: data.analyze.verdict === 'BUILD' ? '#10b981' : '#f59e0b', marginTop: 0, marginBottom: '10px', fontSize: '1.5rem' }}>
                    {data.analyze.verdict === 'BUILD' ? '✅ VERDICT: BUILD THIS NICHE' : '⚠️ VERDICT: PROCEED WITH CAUTION'}
                  </h3>
                  <p style={{ color: '#a8adb8', margin: 0, lineHeight: '1.8' }}>{data.analyze.analysis}</p>
                </div>

                {/* MARKET ANALYSIS */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                  <div style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                    <h3 style={{ color: '#4f7cff', marginBottom: '15px', marginTop: 0 }}>📊 Market Size</h3>
                    <p style={{ color: '#10b981', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 0 10px 0' }}>{data.analyze.marketSize}</p>
                    <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>Total addressable market annually</p>
                  </div>

                  <div style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                    <h3 style={{ color: '#4f7cff', marginBottom: '15px', marginTop: 0 }}>📈 Growth Rate</h3>
                    <p style={{ color: '#10b981', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 0 10px 0' }}>{data.analyze.growthRate}</p>
                    <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>Compound annual growth rate</p>
                  </div>

                  <div style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                    <h3 style={{ color: '#4f7cff', marginBottom: '15px', marginTop: 0 }}>💰 Est. Earnings</h3>
                    <p style={{ color: '#10b981', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 0 10px 0' }}>{data.analyze.estimatedEarnings}</p>
                    <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>Potential monthly income</p>
                  </div>
                </div>

                {/* OPPORTUNITIES */}
                <div style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #10b981', marginBottom: '40px' }}>
                  <h3 style={{ color: '#10b981', marginBottom: '15px', marginTop: 0 }}>✅ Key Opportunities</h3>
                  <ul style={{ color: '#a8adb8', margin: 0, paddingLeft: '20px', lineHeight: '2' }}>
                    {data.analyze.opportunities.map((opp, i) => (
                      <li key={i}>{opp}</li>
                    ))}
                  </ul>
                </div>

                {/* CHALLENGES */}
                <div style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #ef4444', marginBottom: '40px' }}>
                  <h3 style={{ color: '#ef4444', marginBottom: '15px', marginTop: 0 }}>⚠️ Key Challenges</h3>
                  <ul style={{ color: '#a8adb8', margin: 0, paddingLeft: '20px', lineHeight: '2' }}>
                    {data.analyze.challenges.map((challenge, i) => (
                      <li key={i}>{challenge}</li>
                    ))}
                  </ul>
                </div>

                {/* RECOMMENDATIONS */}
                <div style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #4f7cff', marginBottom: '40px' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '15px', marginTop: 0 }}>💡 Strategic Recommendations</h3>
                  <ol style={{ color: '#a8adb8', margin: 0, paddingLeft: '20px', lineHeight: '2' }}>
                    {data.analyze.recommendations.map((rec, i) => (
                      <li key={i}>{rec}</li>
                    ))}
                  </ol>
                </div>

                {/* TOP KEYWORDS */}
                <div style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a', marginBottom: '40px' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '15px', marginTop: 0 }}>🎯 Top Keywords to Target</h3>
                  <ul style={{ color: '#a8adb8', margin: 0, paddingLeft: '20px', lineHeight: '2' }}>
                    {data.analyze.topKeywords.map((kw, i) => (
                      <li key={i}><strong>{kw}</strong></li>
                    ))}
                  </ul>
                </div>

                {/* TOP OFFERS */}
                <div style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '15px', marginTop: 0 }}>💸 Top Monetization Offers</h3>
                  <ul style={{ color: '#a8adb8', margin: 0, paddingLeft: '20px', lineHeight: '2' }}>
                    {data.analyze.topOffers.map((offer, i) => (
                      <li key={i}>{offer}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* KEYWORDS */}
            {activeTool === 'Keywords' && (
              <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
                <h2 style={{ color: '#4f7cff', marginBottom: '30px' }}>📊 Keyword Research for "{niche}"</h2>
                
                {/* EXPLANATION */}
                <div style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a', marginBottom: '30px' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '15px' }}>📖 How to Read These Results</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
                    <div>
                      <h4 style={{ color: '#10b981', marginBottom: '8px' }}>🟢 Traffic (Monthly Searches)</h4>
                      <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>Higher traffic = more potential visitors. 5000+ is excellent, 3000-5000 is good, below 3000 is low. This shows monthly search volume.</p>
                    </div>
                    <div>
                      <h4 style={{ color: '#f59e0b', marginBottom: '8px' }}>🟡 Competition (Websites Ranking)</h4>
                      <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>Lower competition = easier to rank. 0-30 is low (easy), 30-60 is medium, 60+ is high (hard). Fewer competitors = faster rankings.</p>
                    </div>
                    <div>
                      <h4 style={{ color: '#ef4444', marginBottom: '8px' }}>🔴 Difficulty (Ranking Difficulty)</h4>
                      <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>Lower difficulty = easier to rank. 0-30 is easy, 30-60 is medium, 60+ is hard. Look for keywords with low difficulty and high traffic.</p>
                    </div>
                  </div>
                </div>

                {/* BEST KEYWORDS */}
                <div style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #10b981', marginBottom: '30px' }}>
                  <h3 style={{ color: '#10b981', marginBottom: '10px' }}>✅ Best Keywords (High Traffic + Low Difficulty)</h3>
                  <ul style={{ color: '#a8adb8', margin: 0, paddingLeft: '20px' }}>
                    {data.keywords.filter(kw => kw.traffic > 5000 && kw.difficulty < 40).map((kw, i) => (
                      <li key={i} style={{ marginBottom: '8px' }}><strong>{kw.keyword}</strong> - {kw.traffic} searches/month, Difficulty: {kw.difficulty}</li>
                    ))}
                  </ul>
                </div>

                {/* TABLE */}
                <div style={{ overflowX: 'auto', marginBottom: '30px' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid #2b3a6a' }}>
                        <th style={{ textAlign: 'left', padding: '12px', color: '#4f7cff' }}>Keyword</th>
                        <th style={{ textAlign: 'center', padding: '12px', color: '#4f7cff' }}>Traffic 🟢</th>
                        <th style={{ textAlign: 'center', padding: '12px', color: '#4f7cff' }}>Competition 🟡</th>
                        <th style={{ textAlign: 'center', padding: '12px', color: '#4f7cff' }}>Difficulty 🔴</th>
                        <th style={{ textAlign: 'center', padding: '12px', color: '#4f7cff' }}>Verdict</th>
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

                {/* ANALYSIS */}
                <div style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '10px' }}>💡 Analysis & Recommendations</h3>
                  <ul style={{ color: '#a8adb8', margin: 0, paddingLeft: '20px', lineHeight: '1.8' }}>
                    <li>Focus on keywords with <strong>high traffic (5000+)</strong> and <strong>low difficulty (&lt;40)</strong></li>
                    <li>Avoid keywords with <strong>low traffic (&lt;3000)</strong> or <strong>high difficulty (&gt;60)</strong></li>
                    <li>Start with "easy" keywords to build authority, then target harder ones</li>
                    <li>Create content around the "BUILD" keywords first for quick wins</li>
                    <li>Monitor medium-difficulty keywords as you grow your site</li>
                  </ul>
                </div>
              </div>
            )}

            {/* OFFERS */}
            {activeTool === 'Offers' && (
              <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
                <h2 style={{ color: '#4f7cff', marginBottom: '30px' }}>💰 CPA Offers for "{niche}"</h2>
                
                {/* EXPLANATION */}
                <div style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a', marginBottom: '30px' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '15px' }}>📖 Understanding CPA Offers</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
                    <div>
                      <h4 style={{ color: '#10b981', marginBottom: '8px' }}>💵 Payout</h4>
                      <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>Amount you earn per completed action (sale, lead, signup). Higher payouts = more profit per conversion.</p>
                    </div>
                    <div>
                      <h4 style={{ color: '#f59e0b', marginBottom: '8px' }}>📊 Commission</h4>
                      <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>Percentage of the sale you keep. 50% = you get half of what the customer pays.</p>
                    </div>
                    <div>
                      <h4 style={{ color: '#ef4444', marginBottom: '8px' }}>🎯 Best Practice</h4>
                      <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>Promote offers with high payouts (40%+ commission). Test multiple networks to find what converts best.</p>
                    </div>
                  </div>
                </div>

                {/* OFFERS GRID */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '30px' }}>
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

                        <button style={{ width: '100%', padding: '12px', background: 'linear-gradient(135deg, #4f7cff, #00d4ff)', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>
                          🔗 Visit Network
                        </button>
                      </div>
                    </a>
                  ))}
                </div>

                {/* TIPS */}
                <div style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '15px' }}>💡 How to Maximize CPA Earnings</h3>
                  <ul style={{ color: '#a8adb8', margin: 0, paddingLeft: '20px', lineHeight: '1.8' }}>
                    <li><strong>Join multiple networks:</strong> Different offers perform better on different platforms</li>
                    <li><strong>Test and track:</strong> Use unique links to see which offers convert best</li>
                    <li><strong>Match offers to content:</strong> Promote relevant offers to your audience</li>
                    <li><strong>Build email list:</strong> Email subscribers convert 5-10x better than cold traffic</li>
                    <li><strong>Create comparison content:</strong> "Best X" articles rank well and convert offers</li>
                    <li><strong>Use urgency:</strong> Limited time offers, scarcity, bonuses increase conversions</li>
                  </ul>
                </div>
              </div>
            )}

            {/* DOMAINS */}
            {activeTool === 'Domains' && (
              <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
                <h2 style={{ color: '#4f7cff', marginBottom: '30px' }}>🌐 Expired Domains for "{niche}"</h2>
                
                {/* EXPLANATION */}
                <div style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a', marginBottom: '30px' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '15px' }}>📖 Why Expired Domains Matter</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
                    <div>
                      <h4 style={{ color: '#10b981', marginBottom: '8px' }}>⚡ Instant Authority</h4>
                      <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>Aged domains have existing backlinks and history. You skip the "sandbox" period and rank faster.</p>
                    </div>
                    <div>
                      <h4 style={{ color: '#f59e0b', marginBottom: '8px' }}>🔗 Backlinks</h4>
                      <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>More backlinks = more SEO power. Look for domains with 300+ backlinks and high authority.</p>
                    </div>
                    <div>
                      <h4 style={{ color: '#ef4444', marginBottom: '8px' }}>🎯 Best Domains</h4>
                      <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>10+ years old, 500+ backlinks, 40+ authority, relevant to your niche.</p>
                    </div>
                  </div>
                </div>

                {/* BEST DOMAINS */}
                <div style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #10b981', marginBottom: '30px' }}>
                  <h3 style={{ color: '#10b981', marginBottom: '10px' }}>⭐ Best Domains (High Authority + Backlinks)</h3>
                  <ul style={{ color: '#a8adb8', margin: 0, paddingLeft: '20px' }}>
                    {data.domains.filter(d => d.authority > 45 && d.backlinks > 500).map((domain, i) => (
                      <li key={i} style={{ marginBottom: '8px' }}><strong>{domain.domain}</strong> - Authority: {domain.authority}, Backlinks: {domain.backlinks}, Price: {domain.price}</li>
                    ))}
                  </ul>
                </div>

                {/* DOMAINS GRID */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                  {data.domains.map((domain, i) => (
                    <div key={i} style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '2px solid #2b3a6a' }}>
                      <h3 style={{ color: '#4f7cff', marginBottom: '15px', marginTop: 0 }}>{domain.domain}</h3>
                      
                      <div style={{ background: '#1a2847', padding: '15px', borderRadius: '6px', marginBottom: '15px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                          <span style={{ color: '#a8adb8' }}>Age:</span>
                          <span style={{ color: '#10b981', fontWeight: 'bold' }}>{domain.age} years</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                          <span style={{ color: '#a8adb8' }}>Traffic:</span>
                          <span style={{ color: '#10b981', fontWeight: 'bold' }}>{domain.traffic}/mo</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                          <span style={{ color: '#a8adb8' }}>Backlinks:</span>
                          <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>{domain.backlinks}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                          <span style={{ color: '#a8adb8' }}>Authority:</span>
                          <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>{domain.authority}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: '#a8adb8' }}>Price:</span>
                          <span style={{ color: '#ef4444', fontWeight: 'bold' }}>{domain.price}</span>
                        </div>
                      </div>

                      <div style={{ padding: '12px', background: domain.verdict === 'EXCELLENT' ? 'rgba(16, 185, 129, 0.1)' : domain.verdict === 'GOOD' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(239, 68, 68, 0.1)', borderRadius: '6px', textAlign: 'center', color: domain.verdict === 'EXCELLENT' ? '#10b981' : domain.verdict === 'GOOD' ? '#f59e0b' : '#ef4444', fontWeight: 'bold' }}>
                        {domain.verdict === 'EXCELLENT' ? '⭐ EXCELLENT BUY' : domain.verdict === 'GOOD' ? '👍 GOOD' : '⚠️ FAIR'}
                      </div>
                    </div>
                  ))}
                </div>

                {/* TIPS */}
                <div style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '15px' }}>💡 How to Buy Expired Domains</h3>
                  <ul style={{ color: '#a8adb8', margin: 0, paddingLeft: '20px', lineHeight: '1.8' }}>
                    <li><strong>Check domain history:</strong> Use Wayback Machine to see previous content</li>
                    <li><strong>Verify backlinks:</strong> Use Ahrefs or SEMrush to check quality of backlinks</li>
                    <li><strong>Check for penalties:</strong> Make sure domain isn't penalized by Google</li>
                    <li><strong>Buy from auctions:</strong> GoDaddy Auctions, Flippa, NameJet</li>
                    <li><strong>Redirect or rebuild:</strong> You can redirect old content or rebuild from scratch</li>
                  </ul>
                </div>
              </div>
            )}

            {/* BLUEPRINT */}
            {activeTool === 'Blueprint' && (
              <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
                <h2 style={{ color: '#4f7cff', marginBottom: '30px' }}>📐 Website Blueprint for "{niche}"</h2>
                
                {/* STRATEGY */}
                <div style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a', marginBottom: '30px' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '10px' }}>🎯 Overall Strategy</h3>
                  <p style={{ color: '#a8adb8', lineHeight: '1.8' }}>{data.blueprint.strategy}</p>
                </div>

                {/* PAGES */}
                <div style={{ marginBottom: '30px' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '20px' }}>📄 Website Pages</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    {data.blueprint.pages.map((page, i) => (
                      <div key={i} style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                        <h4 style={{ color: '#4f7cff', marginBottom: '10px', marginTop: 0 }}>{i + 1}. {page.name}</h4>
                        <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem', lineHeight: '1.6' }}>{page.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MONETIZATION */}
                <div style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #10b981', marginBottom: '30px' }}>
                  <h3 style={{ color: '#10b981', marginBottom: '10px' }}>💰 Monetization Strategy</h3>
                  <p style={{ color: '#a8adb8', lineHeight: '1.8' }}>{data.blueprint.monetization}</p>
                </div>

                {/* TIMELINE */}
                <div style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '10px' }}>📅 Launch Timeline</h3>
                  <p style={{ color: '#a8adb8', lineHeight: '1.8' }}>{data.blueprint.timeline}</p>
                </div>
              </div>
            )}

            {/* SCRIPTS */}
            {activeTool === 'Scripts' && (
              <div style={{ background: '#1a2847', padding: '30px', borderRadius: '12px', border: '1px solid #2b3a6a' }}>
                <h2 style={{ color: '#4f7cff', marginBottom: '30px' }}>🎬 Video Scripts for "{niche}"</h2>
                
                {/* EXPLANATION */}
                <div style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a', marginBottom: '30px' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '15px' }}>📝 How to Use These Scripts</h3>
                  <ul style={{ color: '#a8adb8', margin: 0, paddingLeft: '20px', lineHeight: '1.8' }}>
                    <li><strong>Customize:</strong> Replace product names with your actual offers</li>
                    <li><strong>Add Visuals:</strong> Use B-roll, animations, or product footage</li>
                    <li><strong>Practice:</strong> Record multiple takes to find your best delivery</li>
                    <li><strong>Post:</strong> Upload to YouTube, TikTok, Instagram Reels, Shorts</li>
                    <li><strong>Link:</strong> Add affiliate/CPA links in video description</li>
                  </ul>
                </div>

                {/* SCRIPTS */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                  {data.scripts.map((script, i) => (
                    <div key={i} style={{ background: '#0b1020', padding: '25px', borderRadius: '8px', border: '1px solid #2b3a6a' }}>
                      <h3 style={{ color: '#4f7cff', marginBottom: '10px' }}>{script.title}</h3>
                      <p style={{ color: '#a8adb8', marginBottom: '20px', fontSize: '0.9rem' }}>⏱️ Duration: {script.duration}</p>
                      
                      <div style={{ background: '#1a2847', padding: '15px', borderRadius: '6px', marginBottom: '15px' }}>
                        <h4 style={{ color: '#10b981', marginBottom: '8px', marginTop: 0 }}>Full Script:</h4>
                        <p style={{ color: '#a8adb8', margin: 0, lineHeight: '1.8', whiteSpace: 'pre-wrap', fontSize: '0.9rem' }}>{script.script}</p>
                      </div>

                      <div style={{ background: '#1a2847', padding: '15px', borderRadius: '6px' }}>
                        <h4 style={{ color: '#f59e0b', marginBottom: '8px', marginTop: 0 }}>📌 Key Points:</h4>
                        <ul style={{ color: '#a8adb8', margin: 0, paddingLeft: '20px', fontSize: '0.9rem' }}>
                          <li>Keep it under 60 seconds</li>
                          <li>Speak naturally and conversationally</li>
                          <li>Add urgency with phrases like "limited time" or "while supplies last"</li>
                          <li>Always include a clear call-to-action</li>
                          <li>Use trending sounds and hashtags</li>
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                {/* TIPS */}
                <div style={{ background: '#0b1020', padding: '20px', borderRadius: '8px', border: '1px solid #2b3a6a', marginTop: '30px' }}>
                  <h3 style={{ color: '#4f7cff', marginBottom: '15px' }}>💡 Script Writing Tips</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
                    <div>
                      <h4 style={{ color: '#10b981', marginBottom: '8px' }}>Hook (0-5 sec)</h4>
                      <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>Grab attention immediately. Use a bold claim, question, or surprising statement. This is critical - viewers decide to watch or skip in the first 3 seconds.</p>
                    </div>
                    <div>
                      <h4 style={{ color: '#f59e0b', marginBottom: '8px' }}>Problem (5-20 sec)</h4>
                      <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>Identify the viewer's pain point. Make them feel understood. "You've tried everything but nothing works..." This builds emotional connection.</p>
                    </div>
                    <div>
                      <h4 style={{ color: '#ef4444', marginBottom: '8px' }}>Solution (20-50 sec)</h4>
                      <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>Present your offer as the solution. Explain benefits, not features. Show results or testimonials. Make it irresistible.</p>
                    </div>
                    <div>
                      <h4 style={{ color: '#4f7cff', marginBottom: '8px' }}>CTA (50-60 sec)</h4>
                      <p style={{ color: '#a8adb8', margin: 0, fontSize: '0.9rem' }}>Clear call-to-action. "Click the link in bio", "Get it now", "Limited time offer". Make it easy for viewers to take action.</p>
                    </div>
                  </div>
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
