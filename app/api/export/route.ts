import { NextResponse } from 'next/server';
import { render } from '@/lib/ai/exportEngine';

export async function POST(req: Request) {
  try {
    const { q, data } = await req.json();
    if (!q || q.trim().length === 0) {
      return NextResponse.json({ error: 'Keyword required' }, { status: 400 });
    }
    const html = render(q, data || {});
    return NextResponse.json({ keyword: q, html, format: 'html' });
  } catch (error) {
    return NextResponse.json({ error: 'Export failed' }, { status: 500 });
  }
}
