import { NextResponse } from 'next/server';
import { plan } from '@/lib/ai/blueprintEngine';

export async function POST(req: Request) {
  try {
    const { q } = await req.json();
    if (!q || q.trim().length === 0) {
      return NextResponse.json({ error: 'Keyword required' }, { status: 400 });
    }
    const blueprint = plan(q);
    return NextResponse.json({ keyword: q, ...blueprint });
  } catch (error) {
    return NextResponse.json({ error: 'Blueprint generation failed' }, { status: 500 });
  }
}
