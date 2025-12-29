import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();
    console.log(`Email captured: ${name} (${email})`);
    return NextResponse.json({ success: true, message: 'Email captured successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to capture email' }, { status: 500 });
  }
}
