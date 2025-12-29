import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { q } = await req.json();
    
    if (!q) {
      return NextResponse.json({ error: 'Missing keyword' }, { status: 400 });
    }

    const wordCount = q.split(' ').length;
    const hasCPA = /best|review|guide|how to|cheap|insurance|loan|forex|vpn|weight loss/i.test(q);
    
    let score = 50;
    if (hasCPA) score += 20;
    if (wordCount >= 3) score += 10;
    score = Math.min(95, Math.max(15, score));

    let difficulty = 60;
    if (wordCount >= 3) difficulty -= 15;
    difficulty = Math.min(85, Math.max(15, difficulty));

    let profit = 50;
    if (hasCPA) profit += 30;
    if (wordCount >= 3) profit += 15;
    profit = Math.min(95, Math.max(20, profit));

    let verdict = 'SKIP';
    if (score > 60) verdict = 'BUILD';
    else if (score > 40) verdict = 'MONITOR';

    return NextResponse.json({
      keyword: q,
      score,
      difficulty,
      profit,
      traffic: Math.floor(Math.random() * 10000) + 500,
      competition: Math.floor(Math.random() * 100),
      verdict,
      metrics: { wordCount, hasCPA }
    });
  } catch (error) {
    return NextResponse.json({ error: 'Analysis failed' }, { status: 500 });
  }
}
