// api/create-checkout.js
// Creates a Stripe Checkout session for the Level 2 Decision Fit Assessment
// Env vars required: STRIPE_SECRET_KEY, SITE_URL

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return res.status(500).json({ error: 'Payment service not configured' });
  }

  const { level1Type, email } = req.body || {};
  const siteUrl = process.env.SITE_URL || 'https://clarity-before-commitment.vercel.app';

  try {
    // Use Stripe REST API directly — no SDK needed in serverless
    const params = new URLSearchParams({
      'payment_method_types[]': 'card',
      'line_items[0][price_data][currency]': 'usd',
      'line_items[0][price_data][product_data][name]': 'Decision Fit Assessment',
      'line_items[0][price_data][product_data][description]': 'A personal evaluation of your fit for Amazon FBA. Produces a Personal Decision Brief.',
      'line_items[0][price_data][unit_amount]': '4900',
      'line_items[0][quantity]': '1',
      'mode': 'payment',
      'success_url': `${siteUrl}/assessment?session_id={CHECKOUT_SESSION_ID}`,
      'cancel_url': `${siteUrl}/amazon-fba`,
      'metadata[level1Type]': level1Type || '',
      'metadata[product]': 'level2_assessment'
    });

    if (email) params.append('customer_email', email);

    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(secretKey + ':').toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params.toString()
    });

    if (!response.ok) {
      const err = await response.json();
      console.error('Stripe error:', err);
      return res.status(500).json({ error: err.error?.message || 'Payment error' });
    }

    const session = await response.json();
    return res.status(200).json({ url: session.url });

  } catch (err) {
    console.error('Checkout error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
