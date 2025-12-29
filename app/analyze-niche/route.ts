import { NextRequest, NextResponse } from 'next/server';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export async function POST(request: NextRequest) {
  try {
    const { niche } = await request.json();

    if (!niche || typeof niche !== 'string') {
      return NextResponse.json({ error: 'Invalid niche' }, { status: 400 });
    }

    // Call OpenAI to generate niche analysis
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4.1-mini',
        messages: [
          {
            role: 'system',
            content: 'You are an expert CPA niche analyst. Provide detailed, actionable analysis for any niche. Return ONLY valid JSON, no markdown formatting.',
          },
          {
            role: 'user',
            content: `Analyze the "${niche}" niche and return a JSON object with this exact structure (ONLY JSON, no markdown):
{
  "analyze": {
    "niche": "Niche Name",
    "score": 75,
    "difficulty": 45,
    "profitPotential": 85,
    "trafficPotential": 10000,
    "verdict": "BUILD",
    "analysis": "Detailed analysis paragraph",
    "opportunities": ["opportunity 1", "opportunity 2", "opportunity 3", "opportunity 4", "opportunity 5"],
    "challenges": ["challenge 1", "challenge 2", "challenge 3", "challenge 4", "challenge 5"],
    "recommendations": ["recommendation 1", "recommendation 2", "recommendation 3", "recommendation 4", "recommendation 5"],
    "marketSize": "$X Billion USD annually",
    "growthRate": "X% CAGR",
    "topKeywords": ["keyword 1", "keyword 2", "keyword 3"],
    "topOffers": ["offer 1", "offer 2"],
    "estimatedEarnings": "$X-$X/month per 1000 visitors"
  },
  "keywords": [
    {"keyword": "keyword phrase", "traffic": 5000, "competition": 30, "difficulty": 35},
    {"keyword": "keyword phrase 2", "traffic": 4500, "competition": 28, "difficulty": 33},
    {"keyword": "keyword phrase 3", "traffic": 4000, "competition": 25, "difficulty": 30},
    {"keyword": "keyword phrase 4", "traffic": 3500, "competition": 22, "difficulty": 28},
    {"keyword": "keyword phrase 5", "traffic": 3000, "competition": 20, "difficulty": 25},
    {"keyword": "keyword phrase 6", "traffic": 2500, "competition": 18, "difficulty": 23},
    {"keyword": "keyword phrase 7", "traffic": 2000, "competition": 15, "difficulty": 20},
    {"keyword": "keyword phrase 8", "traffic": 1500, "competition": 12, "difficulty": 18}
  ],
  "offers": [
    {"network": "Network Name", "url": "https://www.network.com", "payout": "$50", "commission": "50%", "desc": "Description"},
    {"network": "Network Name 2", "url": "https://www.network2.com", "payout": "$40", "commission": "45%", "desc": "Description"},
    {"network": "Network Name 3", "url": "https://www.network3.com", "payout": "$35", "commission": "40%", "desc": "Description"},
    {"network": "Network Name 4", "url": "https://www.network4.com", "payout": "$30", "commission": "35%", "desc": "Description"},
    {"network": "Network Name 5", "url": "https://www.network5.com", "payout": "$25", "commission": "30%", "desc": "Description"}
  ],
  "domains": [
    {"domain": "domain1.com", "age": 12, "traffic": 3000, "backlinks": 500, "authority": 50, "price": "$25", "verdict": "EXCELLENT"},
    {"domain": "domain2.net", "age": 10, "traffic": 2500, "backlinks": 450, "authority": 45, "price": "$20", "verdict": "EXCELLENT"},
    {"domain": "domain3.org", "age": 9, "traffic": 2000, "backlinks": 400, "authority": 40, "price": "$18", "verdict": "GOOD"},
    {"domain": "domain4.com", "age": 8, "traffic": 1800, "backlinks": 350, "authority": 35, "price": "$15", "verdict": "GOOD"},
    {"domain": "domain5.net", "age": 7, "traffic": 1500, "backlinks": 300, "authority": 30, "price": "$12", "verdict": "GOOD"},
    {"domain": "domain6.org", "age": 6, "traffic": 1200, "backlinks": 250, "authority": 25, "price": "$10", "verdict": "FAIR"},
    {"domain": "domain7.com", "age": 5, "traffic": 1000, "backlinks": 200, "authority": 20, "price": "$8", "verdict": "FAIR"},
    {"domain": "domain8.net", "age": 4, "traffic": 800, "backlinks": 150, "authority": 15, "price": "$5", "verdict": "FAIR"}
  ],
  "blueprint": {
    "pages": [
      {"name": "Page Name", "description": "Page description"},
      {"name": "Page Name 2", "description": "Page description 2"},
      {"name": "Page Name 3", "description": "Page description 3"},
      {"name": "Page Name 4", "description": "Page description 4"},
      {"name": "Page Name 5", "description": "Page description 5"},
      {"name": "Page Name 6", "description": "Page description 6"},
      {"name": "Page Name 7", "description": "Page description 7"},
      {"name": "Page Name 8", "description": "Page description 8"}
    ],
    "strategy": "Overall strategy paragraph",
    "monetization": "Monetization strategy paragraph",
    "timeline": "Timeline paragraph"
  },
  "scripts": [
    {"title": "Script Title", "duration": "60 sec", "script": "Full script with timing markers"},
    {"title": "Script Title 2", "duration": "60 sec", "script": "Full script with timing markers"}
  ]
}`,
          },
        ],
        temperature: 0.7,
        max_tokens: 4000,
      }),
    });

    if (!response.ok) {
      throw new Error('OpenAI API error');
    }

    const data = await response.json();
    const content = data.choices[0].message.content;

    // Parse the JSON response
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Invalid JSON in response');
    }

    const analysisData = JSON.parse(jsonMatch[0]);

    return NextResponse.json(analysisData);
  } catch (error) {
    console.error('Error analyzing niche:', error);
    return NextResponse.json(
      { error: 'Failed to analyze niche. Please try again.' },
      { status: 500 }
    );
  }
}
