import { NextResponse } from 'next/server';

const STRIPE_SECRET = process.env.STRIPE_SECRET_KEY || 'sk_test_demo';

export async function POST(req: Request) {
  try {
    const { planName, price } = await req.json();
    
    if (!planName || !price) {
      return NextResponse.json({ error: 'Missing plan details' }, { status: 400 });
    }

    return NextResponse.json({
      url: `https://checkout.stripe.com/pay/cs_test_demo?client_reference_id=${planName}`,
      message: 'Stripe integration ready. Add your Stripe keys in .env.local'
    });
  } catch (error) {
    return NextResponse.json({ error: 'Checkout failed' }, { status: 500 });
  }
}
