import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();
    
    if (!name || !email) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    console.log(`Email captured: ${name} (${email})`);

    return NextResponse.json({
      success: true,
      message: 'Email captured successfully'
    });
  } catch (error) {
    return NextResponse.json({ error: 'Capture failed' }, { status: 500 });
  }
}
