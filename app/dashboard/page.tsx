'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

// Comprehensive niche hierarchy data
const NICHE_HIERARCHY = {
  'weight loss': {
    mainNiche: 'Weight Loss',
    marketSize: '$78.6 Billion USD',
    subNiches: {
      'keto': {
        name: 'Keto Diet',
        marketSize: '$2.4 Billion',
        microNiches: {
          'keto beginners': {
            name: 'Keto for Beginners',
            marketSize: '$450 Million',
            microMicroNiches: {
              'keto women beginners': {
                name: 'Keto for Women Beginners',
                traffic: 2320,
                competition: 28,
                difficulty: 34,
                cpaRange: '$35-45',
                keywords: [
                  { keyword: 'keto diet for women', traffic: 2320, competition: 28, difficulty: 34 },
                  { keyword: 'keto for beginners women', traffic: 1740, competition: 26, difficulty: 32 },
                  { keyword: 'keto meal plan women', traffic: 1450, competition: 24, difficulty: 30 },
                  { keyword: 'best keto foods for women', traffic: 1160, competition: 22, difficulty: 28 },
                  { keyword: 'keto supplements for women', traffic: 950, competition: 20, difficulty: 26 },
                  { keyword: 'keto for hormonal balance', traffic: 870, competition: 18, difficulty: 24 },
                  { keyword: 'keto for weight loss women', traffic: 800, competition: 16, difficulty: 22 },
                  { keyword: 'keto recipes for women', traffic: 720, competition: 14, difficulty: 20 },
                  { keyword: 'keto flu women', traffic: 650, competition: 12, difficulty: 18 },
                  { keyword: 'keto electrolytes women', traffic: 580, competition: 10, difficulty: 16 },
                ],
                offers: [
                  { network: 'ClickBank', url: 'https://www.clickbank.com', payout: '$45', commission: '50%', desc: 'Keto diet guides and supplements' },
                  { network: 'CJ Affiliate', url: 'https://www.cj.com', payout: '$40', commission: '45%', desc: 'Keto meal delivery services' },
                  { network: 'Impact', url: 'https://www.impact.com', payout: '$50', commission: '55%', desc: 'Premium keto programs' },
                  { network: 'Rakuten', url: 'https://rakutenmarketing.com', payout: '$35', commission: '40%', desc: 'Keto supplements and products' },
                  { network: 'ShareASale', url: 'https://www.shareasale.com', payout: '$42', commission: '48%', desc: 'Keto cookbooks and guides' },
                ],
                domains: [
                  { domain: 'KetoForWomen.com', traffic: 1200, authority: 42, price: '$18', verdict: 'EXCELLENT' },
                  { domain: 'WomenKetoGuide.net', traffic: 900, authority: 35, price: '$12', verdict: 'GOOD' },
                  { domain: 'BeginnerKetoDiet.org', traffic: 1100, authority: 38, price: '$15', verdict: 'GOOD' },
                  { domain: 'KetoMealPlansWomen.com', traffic: 850, authority: 32, price: '$10', verdict: 'FAIR' },
                  { domain: 'KetoSupplementsForWomen.net', traffic: 750, authority: 28, price: '$8', verdict: 'FAIR' },
                  { domain: 'KetoRecipesWomen.com', traffic: 1000, authority: 40, price: '$16', verdict: 'GOOD' },
                  { domain: 'WomenKetoResults.org', traffic: 650, authority: 25, price: '$6', verdict: 'FAIR' },
                  { domain: 'KetoForBeginnerWomen.net', traffic: 800, authority: 30, price: '$9', verdict: 'FAIR' },
                ],
                blueprint: {
                  pages: [
                    { name: 'Homepage', description: 'Women-focused keto hero, testimonials, quick start guide' },
                    { name: 'Keto for Women Guide', description: 'Complete beginner guide tailored for women, hormonal considerations' },
                    { name: 'Meal Plans', description: 'Free and premium meal plans, shopping lists, recipes' },
                    { name: 'Supplements', description: 'Recommended keto supplements for women, affiliate links' },
                    { name: 'Success Stories', description: 'Before/after photos, women testimonials, case studies' },
                    { name: 'FAQ', description: 'Common questions about keto for women' },
                    { name: 'Resources', description: 'Keto calculators, macro trackers, community links' },
                    { name: 'Contact', description: 'Email signup, coaching inquiry form' },
                  ],
                  strategy: 'Create women-specific keto content targeting hormonal balance, weight loss, and energy. Build email list for repeat CPA offers.',
                  monetization: 'Primary: Keto guides ($35-45 CPA). Secondary: Supplement offers ($40-50). Tertiary: Email list nurturing. Est: $800-2500/month per 1000 visitors.',
                },
                scripts: [
                  {
                    title: 'Keto for Women Transformation',
                    duration: '60 sec',
                    script: 'HOOK: "I lost 25 pounds on keto and my hormones are finally balanced..." [0-3 sec] PROBLEM: "Most diets don\'t work for women because they ignore hormonal cycles..." [3-15 sec] SOLUTION: "This keto guide is specifically designed for women\'s bodies. It shows you exactly what to eat, when to eat it, and how to balance your hormones..." [15-45 sec] PROOF: "See these real women\'s results..." [45-50 sec] CTA: "Get the complete keto guide for women - link in bio. First 50 get 50% off!" [50-60 sec]'
                  },
                  {
                    title: 'Keto Supplements for Women',
                    duration: '60 sec',
                    script: 'HOOK: "These 3 supplements changed my keto results..." [0-3 sec] PROBLEM: "Women on keto often lack energy and nutrients..." [3-15 sec] SOLUTION: "These supplements are specifically formulated for women\'s keto needs..." [15-45 sec] PROOF: "My clients report 40% better results..." [45-50 sec] CTA: "Shop the recommended supplements - link in bio!" [50-60 sec]'
                  },
                ],
              },
              'keto women over 40': {
                name: 'Keto for Women Over 40',
                traffic: 2100,
                competition: 26,
                difficulty: 32,
                cpaRange: '$40-50',
                keywords: [
                  { keyword: 'keto for women over 40', traffic: 2100, competition: 26, difficulty: 32 },
                  { keyword: 'weight loss keto women 40s', traffic: 1575, competition: 24, difficulty: 30 },
                  { keyword: 'keto menopause', traffic: 1400, competition: 22, difficulty: 28 },
                  { keyword: 'keto for midlife women', traffic: 1050, competition: 20, difficulty: 26 },
                  { keyword: 'keto metabolism over 40', traffic: 945, competition: 18, difficulty: 24 },
                  { keyword: 'keto for hormonal balance over 40', traffic: 840, competition: 16, difficulty: 22 },
                  { keyword: 'keto energy women 40s', traffic: 735, competition: 14, difficulty: 20 },
                  { keyword: 'keto for mature women', traffic: 630, competition: 12, difficulty: 18 },
                  { keyword: 'keto over 40 results', traffic: 560, competition: 10, difficulty: 16 },
                  { keyword: 'keto for aging women', traffic: 490, competition: 8, difficulty: 14 },
                ],
                offers: [
                  { network: 'ClickBank', url: 'https://www.clickbank.com', payout: '$50', commission: '55%', desc: 'Keto for women 40+ programs' },
                  { network: 'CJ Affiliate', url: 'https://www.cj.com', payout: '$45', commission: '50%', desc: 'Menopause management programs' },
                  { network: 'Impact', url: 'https://www.impact.com', payout: '$55', commission: '60%', desc: 'Premium midlife wellness' },
                  { network: 'Rakuten', url: 'https://rakutenmarketing.com', payout: '$40', commission: '45%', desc: 'Age-specific supplements' },
                  { network: 'ShareASale', url: 'https://www.shareasale.com', payout: '$48', commission: '52%', desc: 'Hormone-balancing guides' },
                ],
                domains: [
                  { domain: 'KetoWomenOver40.com', traffic: 1050, authority: 45, price: '$20', verdict: 'EXCELLENT' },
                  { domain: 'MidlifeKetoWomen.net', traffic: 840, authority: 38, price: '$14', verdict: 'GOOD' },
                  { domain: 'KetoMenopause.org', traffic: 1200, authority: 48, price: '$22', verdict: 'EXCELLENT' },
                  { domain: 'WomenOver40Keto.com', traffic: 700, authority: 32, price: '$11', verdict: 'GOOD' },
                  { domain: 'KetoFor40sWomen.net', traffic: 630, authority: 28, price: '$9', verdict: 'FAIR' },
                  { domain: 'MatureWomenKeto.org', traffic: 560, authority: 25, price: '$7', verdict: 'FAIR' },
                  { domain: 'KetoHormonesOver40.com', traffic: 490, authority: 22, price: '$6', verdict: 'FAIR' },
                  { domain: 'MidlifeWeightLossKeto.net', traffic: 420, authority: 20, price: '$5', verdict: 'FAIR' },
                ],
                blueprint: {
                  pages: [
                    { name: 'Homepage', description: 'Targeted to women 40+, menopause focus, hormone balance' },
                    { name: 'Keto Over 40 Guide', description: 'Age-specific keto strategies, metabolism tips' },
                    { name: 'Menopause & Keto', description: 'How keto helps with menopause symptoms' },
                    { name: 'Meal Plans 40+', description: 'Recipes and plans for mature women' },
                    { name: 'Hormone Support', description: 'Supplements and strategies for hormone balance' },
                    { name: 'Success Stories', description: 'Women 40+ transformation stories' },
                    { name: 'Community', description: 'Forum for women 40+ doing keto' },
                    { name: 'Contact', description: 'Email list, coaching inquiry' },
                  ],
                  strategy: 'Focus on menopause, hormone balance, metabolism slowdown. Target women 40+ specifically.',
                  monetization: 'Primary: Keto programs for 40+ ($40-50 CPA). Secondary: Hormone supplements ($45-55). Tertiary: Coaching. Est: $1200-3500/month per 1000 visitors.',
                },
                scripts: [
                  {
                    title: 'Keto After 40 Transformation',
                    duration: '60 sec',
                    script: 'HOOK: "I lost 30 pounds after 40 and you can too..." [0-3 sec] PROBLEM: "After 40, metabolism slows and hormones change. Most diets don\'t work..." [3-15 sec] SOLUTION: "Keto is different. It works WITH your changing body, not against it..." [15-45 sec] PROOF: "See these women over 40 who transformed their bodies..." [45-50 sec] CTA: "Get the keto-over-40 guide - link in bio. Limited time: 60% off!" [50-60 sec]'
                  },
                  {
                    title: 'Keto & Menopause Relief',
                    duration: '60 sec',
                    script: 'HOOK: "Keto helped me manage my menopause symptoms..." [0-3 sec] PROBLEM: "Menopause brings weight gain, hot flashes, mood swings..." [3-15 sec] SOLUTION: "Keto stabilizes blood sugar and hormones, reducing menopause symptoms..." [15-45 sec] PROOF: "Women report 70% symptom improvement..." [45-50 sec] CTA: "Learn how keto helps menopause - link in bio!" [50-60 sec]'
                  },
                ],
              },
            },
          },
          'keto men': {
            name: 'Keto for Men',
            marketSize: '$380 Million',
            microMicroNiches: {
              'keto muscle gain': {
                name: 'Keto for Muscle Gain',
                traffic: 1800,
                competition: 24,
                difficulty: 30,
                cpaRange: '$42-52',
                keywords: [
                  { keyword: 'keto for muscle building', traffic: 1800, competition: 24, difficulty: 30 },
                  { keyword: 'keto protein for muscle', traffic: 1350, competition: 22, difficulty: 28 },
                  { keyword: 'keto bodybuilding', traffic: 1200, competition: 20, difficulty: 26 },
                  { keyword: 'keto muscle gain diet', traffic: 900, competition: 18, difficulty: 24 },
                  { keyword: 'best keto for athletes', traffic: 800, competition: 16, difficulty: 22 },
                  { keyword: 'keto strength training', traffic: 720, competition: 14, difficulty: 20 },
                  { keyword: 'keto macros for muscle', traffic: 640, competition: 12, difficulty: 18 },
                  { keyword: 'keto supplements muscle', traffic: 560, competition: 10, difficulty: 16 },
                  { keyword: 'keto creatine', traffic: 480, competition: 8, difficulty: 14 },
                  { keyword: 'keto BCAAs', traffic: 400, competition: 6, difficulty: 12 },
                ],
                offers: [
                  { network: 'ClickBank', url: 'https://www.clickbank.com', payout: '$48', commission: '52%', desc: 'Keto muscle building programs' },
                  { network: 'CJ Affiliate', url: 'https://www.cj.com', payout: '$45', commission: '50%', desc: 'Protein supplements' },
                  { network: 'Impact', url: 'https://www.impact.com', payout: '$52', commission: '58%', desc: 'Premium fitness programs' },
                  { network: 'Rakuten', url: 'https://rakutenmarketing.com', payout: '$42', commission: '48%', desc: 'Muscle building supplements' },
                  { network: 'ShareASale', url: 'https://www.shareasale.com', payout: '$50', commission: '55%', desc: 'Workout guides' },
                ],
                domains: [
                  { domain: 'KetoMuscleGain.com', traffic: 1200, authority: 44, price: '$19', verdict: 'EXCELLENT' },
                  { domain: 'KetoBodybuilding.net', traffic: 1000, authority: 40, price: '$15', verdict: 'GOOD' },
                  { domain: 'KetoBulk.org', traffic: 900, authority: 36, price: '$13', verdict: 'GOOD' },
                  { domain: 'KetoAthletes.com', traffic: 800, authority: 34, price: '$12', verdict: 'GOOD' },
                  { domain: 'KetoStrength.net', traffic: 700, authority: 30, price: '$10', verdict: 'FAIR' },
                  { domain: 'KetoProtein.org', traffic: 600, authority: 26, price: '$8', verdict: 'FAIR' },
                  { domain: 'KetoBulking.com', traffic: 550, authority: 24, price: '$7', verdict: 'FAIR' },
                  { domain: 'KetoMuscles.net', traffic: 480, authority: 22, price: '$6', verdict: 'FAIR' },
                ],
                blueprint: {
                  pages: [
                    { name: 'Homepage', description: 'Keto for muscle gain focus, athlete testimonials' },
                    { name: 'Keto Muscle Guide', description: 'Complete guide to building muscle on keto' },
                    { name: 'Workout Plans', description: 'Strength training routines for keto' },
                    { name: 'Nutrition', description: 'Macro calculations, meal plans for muscle' },
                    { name: 'Supplements', description: 'Recommended supplements for keto athletes' },
                    { name: 'Case Studies', description: 'Athlete transformations' },
                    { name: 'Community', description: 'Forum for keto athletes' },
                    { name: 'Contact', description: 'Coaching inquiry, email signup' },
                  ],
                  strategy: 'Target fitness enthusiasts and athletes interested in keto for muscle gain.',
                  monetization: 'Primary: Keto muscle programs ($42-52 CPA). Secondary: Protein supplements ($45-55). Tertiary: Coaching. Est: $1500-4000/month per 1000 visitors.',
                },
                scripts: [
                  {
                    title: 'Keto Muscle Building Transformation',
                    duration: '60 sec',
                    script: 'HOOK: "I built 15 pounds of muscle on keto..." [0-3 sec] PROBLEM: "People think you can\'t build muscle on keto. That\'s wrong..." [3-15 sec] SOLUTION: "With the right macros and training, keto is perfect for muscle building..." [15-45 sec] PROOF: "See my transformation and these other athletes..." [45-50 sec] CTA: "Get the keto muscle building guide - link in bio!" [50-60 sec]'
                  },
                  {
                    title: 'Keto Supplements for Athletes',
                    duration: '60 sec',
                    script: 'HOOK: "These supplements took my keto gains to the next level..." [0-3 sec] PROBLEM: "Most supplements aren\'t keto-friendly..." [3-15 sec] SOLUTION: "These are specifically formulated for keto athletes..." [15-45 sec] PROOF: "Athletes report 35% better results..." [45-50 sec] CTA: "Shop keto athlete supplements - link in bio!" [50-60 sec]'
                  },
                ],
              },
            },
          },
        },
      },
      'intermittent fasting': {
        name: 'Intermittent Fasting',
        marketSize: '$1.8 Billion',
        microNiches: {
          '16:8 fasting': {
            name: '16:8 Intermittent Fasting',
            marketSize: '$540 Million',
            microMicroNiches: {
              '16:8 women': {
                name: '16:8 IF for Women',
                traffic: 1900,
                competition: 26,
                difficulty: 32,
                cpaRange: '$38-48',
                keywords: [
                  { keyword: '16:8 intermittent fasting women', traffic: 1900, competition: 26, difficulty: 32 },
                  { keyword: '16:8 IF weight loss women', traffic: 1425, competition: 24, difficulty: 30 },
                  { keyword: 'intermittent fasting female', traffic: 1300, competition: 22, difficulty: 28 },
                  { keyword: '16:8 fasting for women', traffic: 975, competition: 20, difficulty: 26 },
                  { keyword: 'IF for hormonal balance', traffic: 875, competition: 18, difficulty: 24 },
                  { keyword: 'intermittent fasting women results', traffic: 780, competition: 16, difficulty: 22 },
                  { keyword: '16:8 meal ideas women', traffic: 700, competition: 14, difficulty: 20 },
                  { keyword: 'intermittent fasting women over 40', traffic: 600, competition: 12, difficulty: 18 },
                  { keyword: 'IF female metabolism', traffic: 520, competition: 10, difficulty: 16 },
                  { keyword: 'intermittent fasting women benefits', traffic: 450, competition: 8, difficulty: 14 },
                ],
                offers: [
                  { network: 'ClickBank', url: 'https://www.clickbank.com', payout: '$42', commission: '48%', desc: 'IF programs for women' },
                  { network: 'CJ Affiliate', url: 'https://www.cj.com', payout: '$38', commission: '44%', desc: 'Meal delivery services' },
                  { network: 'Impact', url: 'https://www.impact.com', payout: '$45', commission: '50%', desc: 'Premium IF programs' },
                  { network: 'Rakuten', url: 'https://rakutenmarketing.com', payout: '$35', commission: '40%', desc: 'Supplements' },
                  { network: 'ShareASale', url: 'https://www.shareasale.com', payout: '$40', commission: '46%', desc: 'IF guides' },
                ],
                domains: [
                  { domain: 'IntermittentFastingWomen.com', traffic: 1300, authority: 46, price: '$21', verdict: 'EXCELLENT' },
                  { domain: '16:8ForWomen.net', traffic: 1000, authority: 40, price: '$16', verdict: 'GOOD' },
                  { domain: 'IFForWomen.org', traffic: 950, authority: 38, price: '$14', verdict: 'GOOD' },
                  { domain: 'WomenIntermittentFasting.com', traffic: 850, authority: 34, price: '$12', verdict: 'GOOD' },
                  { domain: '16:8Fasting.net', traffic: 700, authority: 30, price: '$10', verdict: 'FAIR' },
                  { domain: 'IFWomenResults.org', traffic: 600, authority: 26, price: '$8', verdict: 'FAIR' },
                  { domain: 'FemaleIntermittentFasting.com', traffic: 550, authority: 24, price: '$7', verdict: 'FAIR' },
                  { domain: 'WomenIF.net', traffic: 480, authority: 22, price: '$6', verdict: 'FAIR' },
                ],
                blueprint: {
                  pages: [
                    { name: 'Homepage', description: 'IF for women focus, hormone-aware approach' },
                    { name: 'IF for Women Guide', description: 'Complete guide to 16:8 for women' },
                    { name: 'Meal Plans', description: 'Eating window meal ideas' },
                    { name: 'FAQ', description: 'Women-specific IF questions' },
                    { name: 'Results', description: 'Transformation stories' },
                    { name: 'Supplements', description: 'IF-friendly supplements' },
                    { name: 'Community', description: 'Women IF community' },
                    { name: 'Contact', description: 'Email signup' },
                  ],
                  strategy: 'Target women interested in 16:8 IF with hormone-aware content.',
                  monetization: 'Primary: IF programs ($38-48 CPA). Secondary: Supplements ($40-50). Tertiary: Coaching. Est: $900-2800/month per 1000 visitors.',
                },
                scripts: [
                  {
                    title: '16:8 IF for Women',
                    duration: '60 sec',
                    script: 'HOOK: "I lost 20 pounds with 16:8 intermittent fasting..." [0-3 sec] PROBLEM: "Most IF advice ignores women\'s hormones..." [3-15 sec] SOLUTION: "16:8 IF works perfectly for women when done right..." [15-45 sec] PROOF: "See these women\'s results..." [45-50 sec] CTA: "Get the IF for women guide - link in bio!" [50-60 sec]'
                  },
                  {
                    title: 'IF Meal Ideas for Women',
                    duration: '60 sec',
                    script: 'HOOK: "My favorite 16:8 IF meals..." [0-3 sec] PROBLEM: "Running out of meal ideas during eating window..." [3-15 sec] SOLUTION: "Here are 30 delicious IF meals..." [15-45 sec] PROOF: "My clients love these..." [45-50 sec] CTA: "Get the IF meal plan - link in bio!" [50-60 sec]'
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
  'insurance': {
    mainNiche: 'Insurance',
    marketSize: '$1.2 Trillion USD',
    subNiches: {
      'car insurance': {
        name: 'Car Insurance',
        marketSize: '$180 Billion',
        microNiches: {
          'young drivers': {
            name: 'Car Insurance for Young Drivers',
            marketSize: '$18 Billion',
            microMicroNiches: {
              'teen insurance': {
                name: 'Teen Car Insurance',
                traffic: 2100,
                competition: 32,
                difficulty: 38,
                cpaRange: '$38-48',
                keywords: [
                  { keyword: 'cheap teen car insurance', traffic: 2100, competition: 32, difficulty: 38 },
                  { keyword: 'teen car insurance rates', traffic: 1575, competition: 30, difficulty: 36 },
                  { keyword: 'best insurance for teen drivers', traffic: 1400, competition: 28, difficulty: 34 },
                  { keyword: 'teen driver insurance cost', traffic: 1050, competition: 26, difficulty: 32 },
                  { keyword: 'new teen driver insurance', traffic: 945, competition: 24, difficulty: 30 },
                  { keyword: 'teen auto insurance quotes', traffic: 840, competition: 22, difficulty: 28 },
                  { keyword: 'insurance for 16 year old', traffic: 735, competition: 20, difficulty: 26 },
                  { keyword: 'teen car insurance discounts', traffic: 630, competition: 18, difficulty: 24 },
                  { keyword: 'cheapest teen car insurance', traffic: 560, competition: 16, difficulty: 22 },
                  { keyword: 'teen driver insurance requirements', traffic: 490, competition: 14, difficulty: 20 },
                ],
                offers: [
                  { network: 'CJ Affiliate', url: 'https://www.cj.com', payout: '$42', commission: '48%', desc: 'Teen insurance quotes' },
                  { network: 'Impact', url: 'https://www.impact.com', payout: '$48', commission: '52%', desc: 'Insurance comparison' },
                  { network: 'Rakuten', url: 'https://rakutenmarketing.com', payout: '$38', commission: '44%', desc: 'Insurance leads' },
                  { network: 'ShareASale', url: 'https://www.shareasale.com', payout: '$45', commission: '50%', desc: 'Insurance affiliates' },
                  { network: 'ClickBank', url: 'https://www.clickbank.com', payout: '$40', commission: '46%', desc: 'Insurance guides' },
                ],
                domains: [
                  { domain: 'TeenCarInsurance.com', traffic: 1400, authority: 48, price: '$22', verdict: 'EXCELLENT' },
                  { domain: 'CheapTeenInsurance.net', traffic: 1100, authority: 42, price: '$17', verdict: 'GOOD' },
                  { domain: 'TeenDriverInsurance.org', traffic: 1050, authority: 40, price: '$15', verdict: 'GOOD' },
                  { domain: 'BestTeenInsurance.com', traffic: 900, authority: 36, price: '$13', verdict: 'GOOD' },
                  { domain: 'TeenAutoInsurance.net', traffic: 800, authority: 32, price: '$11', verdict: 'GOOD' },
                  { domain: 'YoungDriverInsurance.org', traffic: 700, authority: 28, price: '$9', verdict: 'FAIR' },
                  { domain: 'TeenInsuranceRates.com', traffic: 600, authority: 24, price: '$7', verdict: 'FAIR' },
                  { domain: 'TeenInsuranceQuotes.net', traffic: 520, authority: 20, price: '$5', verdict: 'FAIR' },
                ],
                blueprint: {
                  pages: [
                    { name: 'Homepage', description: 'Teen insurance focus, parent testimonials' },
                    { name: 'Teen Insurance Guide', description: 'Complete guide to insuring teen drivers' },
                    { name: 'Quotes', description: 'Insurance quote comparison tool' },
                    { name: 'Discounts', description: 'Teen driver discounts and savings' },
                    { name: 'Requirements', description: 'State-by-state requirements' },
                    { name: 'Tips', description: 'Safety tips for teen drivers' },
                    { name: 'FAQ', description: 'Common questions' },
                    { name: 'Contact', description: 'Quote request form' },
                  ],
                  strategy: 'Target parents of teen drivers with insurance comparison content.',
                  monetization: 'Primary: Insurance leads ($38-48 CPA). Secondary: Comparison tools. Tertiary: Affiliate links. Est: $1200-3500/month per 1000 visitors.',
                },
                scripts: [
                  {
                    title: 'Cheap Teen Car Insurance',
                    duration: '60 sec',
                    script: 'HOOK: "I found cheap car insurance for my teen driver..." [0-3 sec] PROBLEM: "Teen car insurance is expensive..." [3-15 sec] SOLUTION: "Here\'s how to find the cheapest rates..." [15-45 sec] PROOF: "Parents save an average of $500/year..." [45-50 sec] CTA: "Get free quotes - link in bio!" [50-60 sec]'
                  },
                  {
                    title: 'Teen Driver Insurance Discounts',
                    duration: '60 sec',
                    script: 'HOOK: "These discounts cut my teen\'s insurance in half..." [0-3 sec] PROBLEM: "Most parents don\'t know about teen driver discounts..." [3-15 sec] SOLUTION: "Here are 10 discounts you can use..." [15-45 sec] PROOF: "Average savings: $500-1000/year..." [45-50 sec] CTA: "See all discounts - link in bio!" [50-60 sec]'
                  },
                ],
              },
            },
          },
        },
      },
      'life insurance': {
        name: 'Life Insurance',
        marketSize: '$150 Billion',
        microNiches: {
          'term life': {
            name: 'Term Life Insurance',
            marketSize: '$45 Billion',
            microMicroNiches: {
              'term women': {
                name: 'Term Life Insurance for Women',
                traffic: 1350,
                competition: 24,
                difficulty: 30,
                cpaRange: '$48-58',
                keywords: [
                  { keyword: 'term life insurance for women', traffic: 1350, competition: 24, difficulty: 30 },
                  { keyword: 'best life insurance women', traffic: 1012, competition: 22, difficulty: 28 },
                  { keyword: 'affordable term life women', traffic: 900, competition: 20, difficulty: 26 },
                  { keyword: 'life insurance quotes women', traffic: 675, competition: 18, difficulty: 24 },
                  { keyword: 'cheap life insurance women', traffic: 607, competition: 16, difficulty: 22 },
                  { keyword: 'term life rates women', traffic: 540, competition: 14, difficulty: 20 },
                  { keyword: 'life insurance for single women', traffic: 472, competition: 12, difficulty: 18 },
                  { keyword: 'women life insurance calculator', traffic: 405, competition: 10, difficulty: 16 },
                  { keyword: 'best term life companies women', traffic: 337, competition: 8, difficulty: 14 },
                  { keyword: 'life insurance women 30s', traffic: 270, competition: 6, difficulty: 12 },
                ],
                offers: [
                  { network: 'CJ Affiliate', url: 'https://www.cj.com', payout: '$52', commission: '55%', desc: 'Life insurance leads' },
                  { network: 'Impact', url: 'https://www.impact.com', payout: '$58', commission: '62%', desc: 'Premium insurance' },
                  { network: 'Rakuten', url: 'https://rakutenmarketing.com', payout: '$48', commission: '52%', desc: 'Insurance quotes' },
                  { network: 'ShareASale', url: 'https://www.shareasale.com', payout: '$55', commission: '58%', desc: 'Insurance affiliates' },
                  { network: 'ClickBank', url: 'https://www.clickbank.com', payout: '$50', commission: '54%', desc: 'Insurance guides' },
                ],
                domains: [
                  { domain: 'TermLifeWomen.com', traffic: 900, authority: 44, price: '$19', verdict: 'EXCELLENT' },
                  { domain: 'LifeInsuranceWomen.net', traffic: 750, authority: 38, price: '$14', verdict: 'GOOD' },
                  { domain: 'WomenLifeInsurance.org', traffic: 675, authority: 36, price: '$12', verdict: 'GOOD' },
                  { domain: 'BestLifeInsuranceWomen.com', traffic: 600, authority: 32, price: '$10', verdict: 'FAIR' },
                  { domain: 'CheapTermLife.net', traffic: 540, authority: 28, price: '$8', verdict: 'FAIR' },
                  { domain: 'TermLifeQuotesWomen.org', traffic: 472, authority: 24, price: '$6', verdict: 'FAIR' },
                  { domain: 'AffordableLifeInsurance.com', traffic: 405, authority: 20, price: '$5', verdict: 'FAIR' },
                  { domain: 'WomenTermLife.net', traffic: 337, authority: 16, price: '$4', verdict: 'FAIR' },
                ],
                blueprint: {
                  pages: [
                    { name: 'Homepage', description: 'Term life for women focus' },
                    { name: 'Term Life Guide', description: 'Complete term life guide for women' },
                    { name: 'Quotes', description: 'Quote comparison tool' },
                    { name: 'Calculator', description: 'Coverage calculator' },
                    { name: 'Companies', description: 'Best insurance companies' },
                    { name: 'FAQ', description: 'Common questions' },
                    { name: 'Blog', description: 'Insurance tips and advice' },
                    { name: 'Contact', description: 'Quote request' },
                  ],
                  strategy: 'Target women seeking affordable term life insurance.',
                  monetization: 'Primary: Insurance leads ($48-58 CPA). Secondary: Quotes. Tertiary: Affiliate links. Est: $1500-4000/month per 1000 visitors.',
                },
                scripts: [
                  {
                    title: 'Affordable Term Life for Women',
                    duration: '60 sec',
                    script: 'HOOK: "I got affordable term life insurance as a woman..." [0-3 sec] PROBLEM: "Women often pay more for life insurance..." [3-15 sec] SOLUTION: "Here\'s how to get the best rates..." [15-45 sec] PROOF: "Women save an average of $200/year..." [45-50 sec] CTA: "Get free quotes - link in bio!" [50-60 sec]'
                  },
                  {
                    title: 'How Much Life Insurance Do I Need',
                    duration: '60 sec',
                    script: 'HOOK: "I calculated exactly how much life insurance I need..." [0-3 sec] PROBLEM: "Most people don\'t know their coverage needs..." [3-15 sec] SOLUTION: "Use this simple calculator..." [15-45 sec] PROOF: "Get the right coverage for your situation..." [45-50 sec] CTA: "Use the calculator - link in bio!" [50-60 sec]'
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
  'cryptocurrency': {
    mainNiche: 'Cryptocurrency',
    marketSize: '$2.1 Trillion USD',
    subNiches: {
      'bitcoin': {
        name: 'Bitcoin',
        marketSize: '$700 Billion',
        microNiches: {
          'bitcoin beginners': {
            name: 'Bitcoin for Beginners',
            marketSize: '$140 Billion',
            microMicroNiches: {
              'how to buy bitcoin': {
                name: 'How to Buy Bitcoin',
                traffic: 2100,
                competition: 35,
                difficulty: 42,
                cpaRange: '$42-52',
                keywords: [
                  { keyword: 'how to buy bitcoin', traffic: 2100, competition: 35, difficulty: 42 },
                  { keyword: 'buy bitcoin for beginners', traffic: 1575, competition: 33, difficulty: 40 },
                  { keyword: 'cheapest way to buy bitcoin', traffic: 1400, competition: 31, difficulty: 38 },
                  { keyword: 'bitcoin purchase guide', traffic: 1050, competition: 29, difficulty: 36 },
                  { keyword: 'where to buy bitcoin', traffic: 945, competition: 27, difficulty: 34 },
                  { keyword: 'best bitcoin exchanges', traffic: 840, competition: 25, difficulty: 32 },
                  { keyword: 'bitcoin buying tips', traffic: 735, competition: 23, difficulty: 30 },
                  { keyword: 'first bitcoin purchase', traffic: 630, competition: 21, difficulty: 28 },
                  { keyword: 'bitcoin investment guide', traffic: 560, competition: 19, difficulty: 26 },
                  { keyword: 'how much bitcoin to buy', traffic: 490, competition: 17, difficulty: 24 },
                ],
                offers: [
                  { network: 'ClickBank', url: 'https://www.clickbank.com', payout: '$48', commission: '52%', desc: 'Crypto courses' },
                  { network: 'CJ Affiliate', url: 'https://www.cj.com', payout: '$45', commission: '50%', desc: 'Exchange affiliate' },
                  { network: 'Impact', url: 'https://www.impact.com', payout: '$52', commission: '58%', desc: 'Premium crypto programs' },
                  { network: 'Rakuten', url: 'https://rakutenmarketing.com', payout: '$42', commission: '48%', desc: 'Crypto wallets' },
                  { network: 'ShareASale', url: 'https://www.shareasale.com', payout: '$50', commission: '55%', desc: 'Crypto guides' },
                ],
                domains: [
                  { domain: 'HowToBuyBitcoin.com', traffic: 1400, authority: 50, price: '$25', verdict: 'EXCELLENT' },
                  { domain: 'BitcoinForBeginners.net', traffic: 1100, authority: 44, price: '$19', verdict: 'EXCELLENT' },
                  { domain: 'BuyBitcoinGuide.org', traffic: 1050, authority: 42, price: '$17', verdict: 'GOOD' },
                  { domain: 'BitcoinPurchase.com', traffic: 900, authority: 38, price: '$14', verdict: 'GOOD' },
                  { domain: 'CheapBitcoin.net', traffic: 800, authority: 34, price: '$12', verdict: 'GOOD' },
                  { domain: 'BitcoinBuying.org', traffic: 700, authority: 30, price: '$10', verdict: 'FAIR' },
                  { domain: 'FirstBitcoin.com', traffic: 600, authority: 26, price: '$8', verdict: 'FAIR' },
                  { domain: 'BitcoinInvestment.net', traffic: 520, authority: 22, price: '$6', verdict: 'FAIR' },
                ],
                blueprint: {
                  pages: [
                    { name: 'Homepage', description: 'Bitcoin buying focus, beginner-friendly' },
                    { name: 'Bitcoin Guide', description: 'Complete bitcoin buying guide' },
                    { name: 'Exchanges', description: 'Best bitcoin exchanges reviewed' },
                    { name: 'Wallets', description: 'Bitcoin wallet options' },
                    { name: 'Security', description: 'Bitcoin security best practices' },
                    { name: 'FAQ', description: 'Common bitcoin questions' },
                    { name: 'Blog', description: 'Bitcoin news and tips' },
                    { name: 'Contact', description: 'Newsletter signup' },
                  ],
                  strategy: 'Target bitcoin beginners with educational content and exchange affiliates.',
                  monetization: 'Primary: Exchange affiliates ($42-52 CPA). Secondary: Crypto courses. Tertiary: Wallet affiliates. Est: $1800-4500/month per 1000 visitors.',
                },
                scripts: [
                  {
                    title: 'How to Buy Bitcoin - Beginner Guide',
                    duration: '60 sec',
                    script: 'HOOK: "I bought my first bitcoin and here\'s how..." [0-3 sec] PROBLEM: "Bitcoin buying seems complicated..." [3-15 sec] SOLUTION: "It\'s actually super easy. Here are 5 simple steps..." [15-45 sec] PROOF: "Thousands of beginners do this every day..." [45-50 sec] CTA: "Get the complete guide - link in bio!" [50-60 sec]'
                  },
                  {
                    title: 'Best Bitcoin Exchanges Compared',
                    duration: '60 sec',
                    script: 'HOOK: "I compared all the top bitcoin exchanges..." [0-3 sec] PROBLEM: "Too many exchanges to choose from..." [3-15 sec] SOLUTION: "Here are the best ones for beginners..." [15-45 sec] PROOF: "See the comparison chart..." [45-50 sec] CTA: "See the full comparison - link in bio!" [50-60 sec]'
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
  'fitness': {
    mainNiche: 'Fitness',
    marketSize: '$96.7 Billion USD',
    subNiches: {
      'home gym': {
        name: 'Home Gym',
        marketSize: '$14.5 Billion',
        microNiches: {
          'equipment': {
            name: 'Home Gym Equipment',
            marketSize: '$5.8 Billion',
            microMicroNiches: {
              'dumbbells': {
                name: 'Dumbbells and Weights',
                traffic: 1160,
                competition: 28,
                difficulty: 34,
                cpaRange: '$35-45',
                keywords: [
                  { keyword: 'best adjustable dumbbells', traffic: 1160, competition: 28, difficulty: 34 },
                  { keyword: 'cheap dumbbells online', traffic: 870, competition: 26, difficulty: 32 },
                  { keyword: 'dumbbell set for home', traffic: 580, competition: 24, difficulty: 30 },
                  { keyword: 'best dumbbells for home gym', traffic: 464, competition: 22, difficulty: 28 },
                  { keyword: 'adjustable dumbbell reviews', traffic: 406, competition: 20, difficulty: 26 },
                  { keyword: 'dumbbell weights for women', traffic: 348, competition: 18, difficulty: 24 },
                  { keyword: 'budget dumbbells', traffic: 290, competition: 16, difficulty: 22 },
                  { keyword: 'dumbbell exercises home', traffic: 232, competition: 14, difficulty: 20 },
                  { keyword: 'best dumbbell brands', traffic: 174, competition: 12, difficulty: 18 },
                  { keyword: 'dumbbell storage solutions', traffic: 116, competition: 10, difficulty: 16 },
                ],
                offers: [
                  { network: 'CJ Affiliate', url: 'https://www.cj.com', payout: '$38', commission: '42%', desc: 'Fitness equipment' },
                  { network: 'Impact', url: 'https://www.impact.com', payout: '$42', commission: '48%', desc: 'Premium equipment' },
                  { network: 'Rakuten', url: 'https://rakutenmarketing.com', payout: '$35', commission: '40%', desc: 'Sports equipment' },
                  { network: 'ShareASale', url: 'https://www.shareasale.com', payout: '$40', commission: '45%', desc: 'Fitness affiliates' },
                  { network: 'ClickBank', url: 'https://www.clickbank.com', payout: '$36', commission: '40%', desc: 'Workout guides' },
                ],
                domains: [
                  { domain: 'BestAdjustableDumbbells.com', traffic: 800, authority: 42, price: '$16', verdict: 'GOOD' },
                  { domain: 'DumbbellReviews.net', traffic: 650, authority: 36, price: '$12', verdict: 'GOOD' },
                  { domain: 'HomeGymDumbbells.org', traffic: 580, authority: 34, price: '$10', verdict: 'FAIR' },
                  { domain: 'CheapDumbbells.com', traffic: 500, authority: 30, price: '$8', verdict: 'FAIR' },
                  { domain: 'DumbbellSet.net', traffic: 450, authority: 28, price: '$7', verdict: 'FAIR' },
                  { domain: 'AdjustableDumbbellGuide.org', traffic: 400, authority: 26, price: '$6', verdict: 'FAIR' },
                  { domain: 'DumbbellExercises.com', traffic: 350, authority: 24, price: '$5', verdict: 'FAIR' },
                  { domain: 'BestDumbbells.net', traffic: 300, authority: 20, price: '$4', verdict: 'FAIR' },
                ],
                blueprint: {
                  pages: [
                    { name: 'Homepage', description: 'Dumbbell reviews and recommendations' },
                    { name: 'Best Dumbbells', description: 'Top dumbbell reviews' },
                    { name: 'Buying Guide', description: 'How to choose dumbbells' },
                    { name: 'Exercises', description: 'Dumbbell workout routines' },
                    { name: 'Comparisons', description: 'Brand comparisons' },
                    { name: 'FAQ', description: 'Common questions' },
                    { name: 'Blog', description: 'Fitness tips' },
                    { name: 'Contact', description: 'Newsletter signup' },
                  ],
                  strategy: 'Target home gym enthusiasts with dumbbell reviews and affiliate links.',
                  monetization: 'Primary: Equipment affiliates ($35-45 CPA). Secondary: Workout guides. Tertiary: Ads. Est: $600-1800/month per 1000 visitors.',
                },
                scripts: [
                  {
                    title: 'Best Adjustable Dumbbells Review',
                    duration: '60 sec',
                    script: 'HOOK: "I tested 10 adjustable dumbbells and here\'s the best..." [0-3 sec] PROBLEM: "So many dumbbell options, hard to choose..." [3-15 sec] SOLUTION: "Here are the top 3 that actually work..." [15-45 sec] PROOF: "See my comparison..." [45-50 sec] CTA: "See full reviews - link in bio!" [50-60 sec]'
                  },
                  {
                    title: 'Home Gym Setup Guide',
                    duration: '60 sec',
                    script: 'HOOK: "I built the perfect home gym for $500..." [0-3 sec] PROBLEM: "Don\'t know where to start with home gym..." [3-15 sec] SOLUTION: "Here\'s exactly what you need..." [15-45 sec] PROOF: "This setup works for any fitness level..." [45-50 sec] CTA: "Get the complete setup guide - link in bio!" [50-60 sec]'
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
  'forex trading': {
    mainNiche: 'Forex Trading',
    marketSize: '$2.4 Trillion Daily Volume',
    subNiches: {
      'forex beginners': {
        name: 'Forex for Beginners',
        marketSize: '$24 Billion',
        microNiches: {
          'how to start': {
            name: 'How to Start Forex Trading',
            marketSize: '$7.2 Billion',
            microMicroNiches: {
              'complete beginners': {
                name: 'Forex Trading for Complete Beginners',
                traffic: 1440,
                competition: 26,
                difficulty: 32,
                cpaRange: '$50-60',
                keywords: [
                  { keyword: 'what is forex trading', traffic: 1440, competition: 26, difficulty: 32 },
                  { keyword: 'how to start forex trading', traffic: 1080, competition: 24, difficulty: 30 },
                  { keyword: 'forex trading for dummies', traffic: 960, competition: 22, difficulty: 28 },
                  { keyword: 'forex trading basics', traffic: 720, competition: 20, difficulty: 26 },
                  { keyword: 'forex trading guide', traffic: 648, competition: 18, difficulty: 24 },
                  { keyword: 'forex trading tutorial', traffic: 576, competition: 16, difficulty: 22 },
                  { keyword: 'forex trading explained', traffic: 504, competition: 14, difficulty: 20 },
                  { keyword: 'forex trading for beginners', traffic: 432, competition: 12, difficulty: 18 },
                  { keyword: 'how forex trading works', traffic: 360, competition: 10, difficulty: 16 },
                  { keyword: 'forex trading strategies', traffic: 288, competition: 8, difficulty: 14 },
                ],
                offers: [
                  { network: 'ClickBank', url: 'https://www.clickbank.com', payout: '$58', commission: '62%', desc: 'Forex courses' },
                  { network: 'CJ Affiliate', url: 'https://www.cj.com', payout: '$55', commission: '60%', desc: 'Broker affiliates' },
                  { network: 'Impact', url: 'https://www.impact.com', payout: '$62', commission: '68%', desc: 'Premium forex programs' },
                  { network: 'Rakuten', url: 'https://rakutenmarketing.com', payout: '$50', commission: '55%', desc: 'Forex education' },
                  { network: 'ShareASale', url: 'https://www.shareasale.com', payout: '$60', commission: '65%', desc: 'Forex guides' },
                ],
                domains: [
                  { domain: 'ForexTradingForBeginners.com', traffic: 1000, authority: 48, price: '$22', verdict: 'EXCELLENT' },
                  { domain: 'HowToStartForex.net', traffic: 800, authority: 42, price: '$17', verdict: 'GOOD' },
                  { domain: 'ForexTradingGuide.org', traffic: 720, authority: 40, price: '$15', verdict: 'GOOD' },
                  { domain: 'ForexForDummies.com', traffic: 640, authority: 36, price: '$13', verdict: 'GOOD' },
                  { domain: 'BeginnerForexTrading.net', traffic: 560, authority: 32, price: '$11', verdict: 'GOOD' },
                  { domain: 'ForexBasics.org', traffic: 480, authority: 28, price: '$9', verdict: 'FAIR' },
                  { domain: 'StartForexTrading.com', traffic: 400, authority: 24, price: '$7', verdict: 'FAIR' },
                  { domain: 'ForexTutorial.net', traffic: 320, authority: 20, price: '$5', verdict: 'FAIR' },
                ],
                blueprint: {
                  pages: [
                    { name: 'Homepage', description: 'Forex for beginners focus' },
                    { name: 'Forex Guide', description: 'Complete forex trading guide' },
                    { name: 'Brokers', description: 'Best forex brokers' },
                    { name: 'Strategies', description: 'Beginner trading strategies' },
                    { name: 'Demo Account', description: 'How to open demo account' },
                    { name: 'FAQ', description: 'Common questions' },
                    { name: 'Blog', description: 'Forex tips and news' },
                    { name: 'Contact', description: 'Newsletter signup' },
                  ],
                  strategy: 'Target forex beginners with educational content and broker affiliates.',
                  monetization: 'Primary: Forex courses ($50-60 CPA). Secondary: Broker affiliates ($55-65). Tertiary: Ads. Est: $2000-5000/month per 1000 visitors.',
                },
                scripts: [
                  {
                    title: 'Forex Trading for Complete Beginners',
                    duration: '60 sec',
                    script: 'HOOK: "I made my first forex trade and here\'s what I learned..." [0-3 sec] PROBLEM: "Forex trading seems complicated..." [3-15 sec] SOLUTION: "It\'s actually simple. Here are the basics..." [15-45 sec] PROOF: "Thousands of beginners trade successfully..." [45-50 sec] CTA: "Get the complete forex guide - link in bio!" [50-60 sec]'
                  },
                  {
                    title: 'Best Forex Brokers for Beginners',
                    duration: '60 sec',
                    script: 'HOOK: "I compared the top forex brokers..." [0-3 sec] PROBLEM: "So many brokers to choose from..." [3-15 sec] SOLUTION: "Here are the best for beginners..." [15-45 sec] PROOF: "See the comparison..." [45-50 sec] CTA: "See full broker reviews - link in bio!" [50-60 sec]'
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
  'real estate': {
    mainNiche: 'Real Estate',
    marketSize: '$3.69 Trillion USD',
    subNiches: {
      'real estate investing': {
        name: 'Real Estate Investing',
        marketSize: '$1.1 Trillion',
        microNiches: {
          'rental property': {
            name: 'Rental Property Investing',
            marketSize: '$330 Billion',
            microMicroNiches: {
              'single family': {
                name: 'Single Family Rentals',
                traffic: 1320,
                competition: 28,
                difficulty: 34,
                cpaRange: '$48-58',
                keywords: [
                  { keyword: 'best single family rental markets', traffic: 1320, competition: 28, difficulty: 34 },
                  { keyword: 'how to buy rental property', traffic: 990, competition: 26, difficulty: 32 },
                  { keyword: 'rental property ROI', traffic: 880, competition: 24, difficulty: 30 },
                  { keyword: 'single family rental investing', traffic: 660, competition: 22, difficulty: 28 },
                  { keyword: 'rental property income', traffic: 594, competition: 20, difficulty: 26 },
                  { keyword: 'best rental markets 2025', traffic: 528, competition: 18, difficulty: 24 },
                  { keyword: 'rental property calculator', traffic: 462, competition: 16, difficulty: 22 },
                  { keyword: 'how to find rental properties', traffic: 396, competition: 14, difficulty: 20 },
                  { keyword: 'rental property financing', traffic: 330, competition: 12, difficulty: 18 },
                  { keyword: 'rental property management', traffic: 264, competition: 10, difficulty: 16 },
                ],
                offers: [
                  { network: 'ClickBank', url: 'https://www.clickbank.com', payout: '$55', commission: '60%', desc: 'Real estate courses' },
                  { network: 'CJ Affiliate', url: 'https://www.cj.com', payout: '$52', commission: '58%', desc: 'Real estate leads' },
                  { network: 'Impact', url: 'https://www.impact.com', payout: '$60', commission: '65%', desc: 'Premium real estate programs' },
                  { network: 'Rakuten', url: 'https://rakutenmarketing.com', payout: '$48', commission: '54%', desc: 'Real estate tools' },
                  { network: 'ShareASale', url: 'https://www.shareasale.com', payout: '$58', commission: '62%', desc: 'Real estate guides' },
                ],
                domains: [
                  { domain: 'SingleFamilyRentalGuide.com', traffic: 900, authority: 46, price: '$20', verdict: 'EXCELLENT' },
                  { domain: 'RentalPropertyInvesting.net', traffic: 750, authority: 40, price: '$15', verdict: 'GOOD' },
                  { domain: 'BestRentalMarkets.org', traffic: 660, authority: 38, price: '$13', verdict: 'GOOD' },
                  { domain: 'RentalPropertyROI.com', traffic: 580, authority: 34, price: '$11', verdict: 'GOOD' },
                  { domain: 'HowToBuyRentalProperty.net', traffic: 500, authority: 30, price: '$9', verdict: 'FAIR' },
                  { domain: 'RentalPropertyIncome.org', traffic: 440, authority: 26, price: '$7', verdict: 'FAIR' },
                  { domain: 'RentalMarketAnalysis.com', traffic: 380, authority: 22, price: '$5', verdict: 'FAIR' },
                  { domain: 'SingleFamilyInvesting.net', traffic: 320, authority: 18, price: '$4', verdict: 'FAIR' },
                ],
                blueprint: {
                  pages: [
                    { name: 'Homepage', description: 'Rental property investing focus' },
                    { name: 'Investing Guide', description: 'Complete rental property guide' },
                    { name: 'Markets', description: 'Best rental markets' },
                    { name: 'Calculator', description: 'ROI calculator' },
                    { name: 'Financing', description: 'Rental property loans' },
                    { name: 'Management', description: 'Property management tips' },
                    { name: 'FAQ', description: 'Common questions' },
                    { name: 'Contact', description: 'Coaching inquiry' },
                  ],
                  strategy: 'Target real estate investors with market analysis and educational content.',
                  monetization: 'Primary: Real estate courses ($48-58 CPA). Secondary: Lead generation. Tertiary: Coaching. Est: $1800-4500/month per 1000 visitors.',
                },
                scripts: [
                  {
                    title: 'How to Start Rental Property Investing',
                    duration: '60 sec',
                    script: 'HOOK: "I bought my first rental property and made $500/month..." [0-3 sec] PROBLEM: "Rental property investing seems complicated..." [3-15 sec] SOLUTION: "Here\'s exactly how to get started..." [15-45 sec] PROOF: "See my rental income..." [45-50 sec] CTA: "Get the complete rental investing guide - link in bio!" [50-60 sec]'
                  },
                  {
                    title: 'Best Rental Markets 2025',
                    duration: '60 sec',
                    script: 'HOOK: "These are the best rental markets right now..." [0-3 sec] PROBLEM: "Hard to find good rental markets..." [3-15 sec] SOLUTION: "Here are the top 10 markets with analysis..." [15-45 sec] PROOF: "See the data..." [45-50 sec] CTA: "See full market analysis - link in bio!" [50-60 sec]'
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
  'alcohol rehabilitation': {
    mainNiche: 'Alcohol Rehabilitation',
    marketSize: '$35.2 Billion USD',
    subNiches: {
      'inpatient rehab': {
        name: 'Inpatient Rehab',
        marketSize: '$10.6 Billion',
        microNiches: {
          'luxury rehab': {
            name: 'Luxury Rehab Centers',
            marketSize: '$3.18 Billion',
            microMicroNiches: {
              'executives': {
                name: 'Luxury Rehab for Executives',
                traffic: 600,
                competition: 32,
                difficulty: 38,
                cpaRange: '$85-95',
                keywords: [
                  { keyword: 'luxury rehab for executives', traffic: 600, competition: 32, difficulty: 38 },
                  { keyword: 'executive alcohol rehab', traffic: 450, competition: 30, difficulty: 36 },
                  { keyword: 'high end rehab centers', traffic: 400, competition: 28, difficulty: 34 },
                  { keyword: 'luxury addiction treatment', traffic: 300, competition: 26, difficulty: 32 },
                  { keyword: 'private rehab for professionals', traffic: 270, competition: 24, difficulty: 30 },
                  { keyword: 'confidential rehab programs', traffic: 240, competition: 22, difficulty: 28 },
                  { keyword: 'executive wellness rehab', traffic: 210, competition: 20, difficulty: 26 },
                  { keyword: 'luxury alcohol treatment', traffic: 180, competition: 18, difficulty: 24 },
                  { keyword: 'premium rehab facilities', traffic: 150, competition: 16, difficulty: 22 },
                  { keyword: 'exclusive rehab programs', traffic: 120, competition: 14, difficulty: 20 },
                ],
                offers: [
                  { network: 'CJ Affiliate', url: 'https://www.cj.com', payout: '$90', commission: '95%', desc: 'Luxury rehab leads' },
                  { network: 'Impact', url: 'https://www.impact.com', payout: '$95', commission: '100%', desc: 'Premium rehab programs' },
                  { network: 'Rakuten', url: 'https://rakutenmarketing.com', payout: '$85', commission: '90%', desc: 'Executive rehab' },
                  { network: 'ShareASale', url: 'https://www.shareasale.com', payout: '$92', commission: '97%', desc: 'Rehab affiliates' },
                  { network: 'ClickBank', url: 'https://www.clickbank.com', payout: '$88', commission: '92%', desc: 'Rehab guides' },
                ],
                domains: [
                  { domain: 'LuxuryRehabExecutives.com', traffic: 400, authority: 50, price: '$25', verdict: 'EXCELLENT' },
                  { domain: 'ExecutiveAlcoholRehab.net', traffic: 300, authority: 44, price: '$18', verdict: 'GOOD' },
                  { domain: 'HighEndRehabCenters.org', traffic: 270, authority: 42, price: '$16', verdict: 'GOOD' },
                  { domain: 'PremiumRehabPrograms.com', traffic: 240, authority: 38, price: '$13', verdict: 'GOOD' },
                  { domain: 'ConfidentialRehab.net', traffic: 210, authority: 34, price: '$11', verdict: 'GOOD' },
                  { domain: 'ExclusiveRehabFacilities.org', traffic: 180, authority: 30, price: '$9', verdict: 'FAIR' },
                  { domain: 'LuxuryAddictionTreatment.com', traffic: 150, authority: 26, price: '$7', verdict: 'FAIR' },
                  { domain: 'ExecutiveWellnessRehab.net', traffic: 120, authority: 22, price: '$5', verdict: 'FAIR' },
                ],
                blueprint: {
                  pages: [
                    { name: 'Homepage', description: 'Luxury rehab for executives focus' },
                    { name: 'Programs', description: 'Executive rehab programs' },
                    { name: 'Facilities', description: 'Luxury facilities tour' },
                    { name: 'Testimonials', description: 'Executive success stories' },
                    { name: 'Privacy', description: 'Confidentiality information' },
                    { name: 'FAQ', description: 'Common questions' },
                    { name: 'Blog', description: 'Recovery tips' },
                    { name: 'Contact', description: 'Intake form' },
                  ],
                  strategy: 'Target high-earning professionals seeking confidential, luxury rehab.',
                  monetization: 'Primary: Rehab leads ($85-95 CPA). Secondary: Coaching. Tertiary: Ads. Est: $3000-8000/month per 1000 visitors.',
                },
                scripts: [
                  {
                    title: 'Luxury Rehab for Executives',
                    duration: '60 sec',
                    script: 'HOOK: "I found the perfect rehab for my executive lifestyle..." [0-3 sec] PROBLEM: "Standard rehab doesn\'t work for busy professionals..." [3-15 sec] SOLUTION: "Luxury rehab programs are designed for executives..." [15-45 sec] PROOF: "See executive success stories..." [45-50 sec] CTA: "Learn about luxury rehab - link in bio!" [50-60 sec]'
                  },
                  {
                    title: 'Confidential Addiction Treatment',
                    duration: '60 sec',
                    script: 'HOOK: "I got help without anyone knowing..." [0-3 sec] PROBLEM: "Executives worry about privacy..." [3-15 sec] SOLUTION: "Confidential rehab programs protect your privacy..." [15-45 sec] PROOF: "100% confidential treatment..." [45-50 sec] CTA: "Learn about confidential treatment - link in bio!" [50-60 sec]'
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
};

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTool, setSelectedTool] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedNiche, setSelectedNiche] = useState(null);

  // Search through all niches
  const handleSearch = (term) => {
    setSearchTerm(term);
    
    if (!term.trim()) {
      setSearchResults([]);
      setSelectedNiche(null);
      return;
    }

    const results = [];
    const lowerTerm = term.toLowerCase();

    // Search through all niches
    Object.entries(NICHE_HIERARCHY).forEach(([mainKey, mainNiche]) => {
      if (mainNiche.mainNiche.toLowerCase().includes(lowerTerm)) {
        results.push({
          level: 'main',
          key: mainKey,
          name: mainNiche.mainNiche,
          marketSize: mainNiche.marketSize,
          data: mainNiche,
        });
      }

      // Search sub-niches
      Object.entries(mainNiche.subNiches || {}).forEach(([subKey, subNiche]) => {
        if (subNiche.name.toLowerCase().includes(lowerTerm)) {
          results.push({
            level: 'sub',
            key: `${mainKey}/${subKey}`,
            name: subNiche.name,
            marketSize: subNiche.marketSize,
            parent: mainNiche.mainNiche,
            data: subNiche,
          });
        }

        // Search micro-niches
        Object.entries(subNiche.microNiches || {}).forEach(([microKey, microNiche]) => {
          if (microNiche.name.toLowerCase().includes(lowerTerm)) {
            results.push({
              level: 'micro',
              key: `${mainKey}/${subKey}/${microKey}`,
              name: microNiche.name,
              marketSize: microNiche.marketSize,
              parent: `${mainNiche.mainNiche} > ${subNiche.name}`,
              data: microNiche,
            });
          }

          // Search micro-micro niches
          Object.entries(microNiche.microMicroNiches || {}).forEach(([microMicroKey, microMicroNiche]) => {
            if (microMicroNiche.name.toLowerCase().includes(lowerTerm)) {
              results.push({
                level: 'micro-micro',
                key: `${mainKey}/${subKey}/${microKey}/${microMicroKey}`,
                name: microMicroNiche.name,
                traffic: microMicroNiche.traffic,
                competition: microMicroNiche.competition,
                difficulty: microMicroNiche.difficulty,
                cpaRange: microMicroNiche.cpaRange,
                parent: `${mainNiche.mainNiche} > ${subNiche.name} > ${microNiche.name}`,
                data: microMicroNiche,
              });
            }
          });
        });
      });
    });

    setSearchResults(results);
    if (results.length > 0) {
      setSelectedNiche(results[0]);
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    setSearchResults([]);
    setSelectedNiche(null);
    setSelectedTool(null);
  };

  const renderAnalyze = () => {
    if (!selectedNiche?.data) return null;
    const data = selectedNiche.data;
    
    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">📈 Deep Niche Analysis</h2>
        
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
            <p className="text-gray-600 text-sm">Monthly Traffic</p>
            <p className="text-4xl font-bold text-blue-600">{data.traffic?.toLocaleString() || 'N/A'}</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
            <p className="text-gray-600 text-sm">CPA Range</p>
            <p className="text-4xl font-bold text-green-600">{data.cpaRange || 'N/A'}</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
            <p className="text-gray-600 text-sm">Competition</p>
            <p className="text-4xl font-bold text-orange-600">{data.competition || 'N/A'}/50</p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg">
            <p className="text-gray-600 text-sm">Difficulty</p>
            <p className="text-4xl font-bold text-red-600">{data.difficulty || 'N/A'}/50</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Niche Path</h3>
            <p className="text-gray-600">{selectedNiche.parent || selectedNiche.name}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Market Size</h3>
            <p className="text-gray-600">{selectedNiche.marketSize}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderKeywords = () => {
    if (!selectedNiche?.data?.keywords) return null;
    
    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">📊 Keywords</h2>
        <div className="space-y-3">
          {selectedNiche.data.keywords.map((kw, idx) => (
            <div key={idx} className="border-l-4 border-blue-500 pl-4 py-2">
              <p className="font-semibold text-gray-800">{kw.keyword}</p>
              <div className="flex gap-6 text-sm text-gray-600 mt-1">
                <span>📈 Traffic: {kw.traffic}</span>
                <span>🎯 Competition: {kw.competition}</span>
                <span>⚡ Difficulty: {kw.difficulty}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderOffers = () => {
    if (!selectedNiche?.data?.offers) return null;
    
    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">💰 CPA Offers</h2>
        <div className="space-y-4">
          {selectedNiche.data.offers.map((offer, idx) => (
            <div key={idx} className="border border-green-200 rounded-lg p-4 bg-green-50">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-800">{offer.network}</h3>
                <span className="bg-green-600 text-white px-3 py-1 rounded text-sm font-bold">${offer.payout}</span>
              </div>
              <p className="text-gray-600 text-sm mb-2">{offer.desc}</p>
              <a href={offer.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                Visit {offer.network} →
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderDomains = () => {
    if (!selectedNiche?.data?.domains) return null;
    
    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">🌐 Domains</h2>
        <div className="space-y-3">
          {selectedNiche.data.domains.map((domain, idx) => (
            <div key={idx} className="border border-purple-200 rounded-lg p-4 bg-purple-50">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-800">{domain.domain}</h3>
                <span className={`px-3 py-1 rounded text-sm font-bold ${
                  domain.verdict === 'EXCELLENT' ? 'bg-green-600 text-white' :
                  domain.verdict === 'GOOD' ? 'bg-blue-600 text-white' :
                  'bg-yellow-600 text-white'
                }`}>{domain.verdict}</span>
              </div>
              <div className="grid grid-cols-4 gap-4 text-sm text-gray-600">
                <span>📊 Traffic: {domain.traffic}</span>
                <span>🔗 Authority: {domain.authority}</span>
                <span>💰 Price: {domain.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderBlueprint = () => {
    if (!selectedNiche?.data?.blueprint) return null;
    const bp = selectedNiche.data.blueprint;
    
    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">📐 Website Blueprint</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Website Pages</h3>
          <div className="grid grid-cols-1 gap-3">
            {bp.pages.map((page, idx) => (
              <div key={idx} className="border-l-4 border-indigo-500 pl-4 py-2">
                <p className="font-semibold text-gray-800">{page.name}</p>
                <p className="text-gray-600 text-sm">{page.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Strategy</h3>
          <p className="text-gray-600">{bp.strategy}</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Monetization</h3>
          <p className="text-gray-600">{bp.monetization}</p>
        </div>
      </div>
    );
  };

  const renderScripts = () => {
    if (!selectedNiche?.data?.scripts) return null;
    
    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">🎬 Video Scripts</h2>
        <div className="space-y-6">
          {selectedNiche.data.scripts.map((script, idx) => (
            <div key={idx} className="border border-red-200 rounded-lg p-4 bg-red-50">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-gray-800">{script.title}</h3>
                <span className="bg-red-600 text-white px-3 py-1 rounded text-sm">{script.duration}</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{script.script}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-2">🚀 CPA Niche Scout AI</h1>
          <p className="text-gray-400 text-lg">Find the most profitable CPA niches with deep market analysis</p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <label className="block text-gray-700 font-bold mb-3">🔍 Enter Your Niche</label>
          <p className="text-gray-500 text-sm mb-4">Search any niche level: main, sub, micro, or micro-micro</p>
          
          <div className="flex gap-3 mb-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="e.g., weight loss, keto, keto women, keto for beginners..."
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-800"
            />
            <button
              onClick={handleClear}
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-bold transition"
            >
              ✕ Clear
            </button>
          </div>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="mb-4">
              <p className="text-gray-600 font-semibold mb-3">Found {searchResults.length} results:</p>
              <div className="grid grid-cols-1 gap-2 max-h-64 overflow-y-auto">
                {searchResults.map((result, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedNiche(result)}
                    className={`text-left p-3 rounded-lg transition ${
                      selectedNiche?.key === result.key
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    <div className="font-semibold">{result.name}</div>
                    <div className="text-sm opacity-75">{result.parent || result.level}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Suggestions */}
          <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded">
            ✅ Try: weight loss, keto, keto women, insurance, car insurance, bitcoin, forex, real estate, alcohol rehabilitation
          </div>
        </div>

        {/* Tools Grid */}
        {selectedNiche && (
          <div className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                { id: 'analyze', label: '📈 Analyze', icon: '📊' },
                { id: 'keywords', label: '📊 Keywords', icon: '🔍' },
                { id: 'offers', label: '💰 Offers', icon: '💵' },
                { id: 'domains', label: '🌐 Domains', icon: '🔗' },
                { id: 'blueprint', label: '📐 Blueprint', icon: '🏗️' },
                { id: 'scripts', label: '🎬 Scripts', icon: '🎥' },
              ].map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => setSelectedTool(selectedTool === tool.id ? null : tool.id)}
                  className={`p-4 rounded-lg font-bold transition transform hover:scale-105 ${
                    selectedTool === tool.id
                      ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg'
                      : 'bg-white text-gray-800 shadow-md hover:shadow-lg'
                  }`}
                >
                  <div className="text-2xl mb-2">{tool.icon}</div>
                  {tool.label}
                </button>
              ))}
            </div>

            {/* Tool Content */}
            <div className="min-h-96">
              {selectedTool === 'analyze' && renderAnalyze()}
              {selectedTool === 'keywords' && renderKeywords()}
              {selectedTool === 'offers' && renderOffers()}
              {selectedTool === 'domains' && renderDomains()}
              {selectedTool === 'blueprint' && renderBlueprint()}
              {selectedTool === 'scripts' && renderScripts()}
            </div>
          </div>
        )}

        {/* Footer */}
        {!selectedNiche && (
          <div className="text-center text-gray-400 py-12">
            <p className="text-lg">Search for a niche to get started</p>
          </div>
        )}
      </div>
    </div>
  );
}
