import { NextResponse } from 'next/server';
import { find } from '@/lib/ai/domainEngine';

export async function POST(req: Request) {
  try {
    const { q } = await req.json();
    if (!q || q.trim().length === 0) {
      return NextResponse.json({ error: 'Keyword required' }, { status: 400 });
    }
    const domains = find(q);
    return NextResponse.json({ keyword: q, domains, count: domains.length });
  } catch (error) {
    return NextResponse.json({ error: 'Domain search failed' }, { status: 500 });
  }
}
