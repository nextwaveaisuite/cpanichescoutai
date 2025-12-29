import { NextResponse } from 'next/server';
import { analyze } from '@/lib/ai/keywordEngine';

export async function POST(req: Request) {
  try {
    const { q } = await req.json();
    if (!q || q.trim().length === 0) {
      return NextResponse.json({ error: 'Keyword required' }, { status: 400 });
    }
    const result = analyze(q);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: 'Analysis failed' }, { status: 500 });
  }
}
