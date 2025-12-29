import { NextResponse } from 'next/server';
import { match } from '@/lib/ai/offerEngine';

export async function POST(req: Request) {
  try {
    const { q } = await req.json();
    if (!q || q.trim().length === 0) {
      return NextResponse.json({ error: 'Keyword required' }, { status: 400 });
    }
    const offers = match(q);
    return NextResponse.json({ keyword: q, offers, count: offers.length });
  } catch (error) {
    return NextResponse.json({ error: 'Offer matching failed' }, { status: 500 });
  }
}
