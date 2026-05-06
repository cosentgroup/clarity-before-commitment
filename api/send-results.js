// api/send-results.js
// Vercel serverless function — sends Level 1 results email via Resend
// Env vars required: RESEND_API_KEY, FROM_EMAIL

const resultMeta = {
  strong:      { label: 'Promising Alignment',     color: '#1a7a5e' },
  conditional: { label: 'Conditional Alignment',   color: '#b07020' },
  risk:        { label: 'High-Risk Fit',            color: '#a83030' },
  redirect:    { label: 'Explore Other Directions', color: '#2460a0' }
};

const guidanceMap = {
  strong:      'Proceed deliberately',
  conditional: 'Proceed with specific conditions addressed first',
  risk:        'Pause and reassess conditions before proceeding',
  redirect:    'Explore better-suited business models'
};

function buildEmail(type, score) {
  const meta = resultMeta[type] || resultMeta.conditional;
  const guidance = guidanceMap[type] || '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Your Clarity Scan Results</title>
</head>
<body style="margin:0;padding:0;background:#f5f3ef;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f3ef;padding:40px 0;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;max-width:600px;width:100%;">

      <!-- Header -->
      <tr>
        <td style="padding:40px 48px 32px;border-bottom:1px solid #e8e4dc;">
          <div style="font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#1e6e5c;margin-bottom:12px;">
            Clarity Before Commitment
          </div>
          <div style="font-family:Georgia,serif;font-size:26px;font-weight:400;color:#1b1b18;line-height:1.25;">
            Your Amazon FBA<br/>Clarity Scan Results
          </div>
        </td>
      </tr>

      <!-- Result band -->
      <tr>
        <td style="padding:0;">
          <div style="height:3px;background:${meta.color};"></div>
          <div style="padding:24px 48px;background:#faf8f4;border-bottom:1px solid #e8e4dc;">
            <div style="font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:${meta.color};margin-bottom:6px;">
              ${meta.label}
            </div>
            <div style="font-family:Georgia,serif;font-size:20px;color:#1b1b18;line-height:1.4;">
              ${guidance}
            </div>
          </div>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="padding:36px 48px;">
          <p style="font-size:16px;line-height:1.75;color:#3c3c38;margin:0 0 20px;">
            Thank you for completing the Amazon FBA Clarity Scan. Your result is saved below for reference.
          </p>
          <p style="font-size:16px;line-height:1.75;color:#3c3c38;margin:0 0 20px;">
            This result reflects alignment, not ability. It is a snapshot of your current situation — not a permanent verdict. You are welcome to retake this assessment as your financial position, time structure, or risk tolerance evolves.
          </p>

          <div style="border-top:1px solid #e8e4dc;margin:28px 0;"></div>

          <div style="font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#1e6e5c;margin-bottom:12px;">
            What to do next
          </div>
          <p style="font-size:16px;line-height:1.75;color:#3c3c38;margin:0 0 24px;">
            ${type === 'redirect'
              ? 'The Redirection Explorer on our site can help you identify business archetypes that better match your temperament and constraints.'
              : 'A deeper assessment — the Decision Fit Assessment — can clarify whether this alignment holds under real-world constraints. It takes 20–30 minutes and produces a Personal Decision Brief tailored to you.'
            }
          </p>

          <table cellpadding="0" cellspacing="0">
            <tr>
              <td style="background:#1e6e5c;">
                <a href="${process.env.SITE_URL || 'https://clarity-before-commitment.vercel.app'}${type === 'redirect' ? '/redirect' : '/amazon-fba'}"
                   style="display:inline-block;padding:14px 32px;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#ffffff;text-decoration:none;">
                  ${type === 'redirect' ? 'Explore Alternatives' : 'Continue to Full Assessment'}
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="padding:24px 48px;border-top:1px solid #e8e4dc;background:#f5f3ef;">
          <p style="font-size:12px;color:#86867e;line-height:1.65;margin:0;">
            You received this because you requested your results from Clarity Before Commitment.
            This platform provides decision clarity tools, not financial or business advice.
          </p>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, type, score } = req.body || {};

  if (!email || !type) {
    return res.status(400).json({ error: 'Missing email or type' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Email service not configured' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: process.env.FROM_EMAIL || 'results@claritybeforecommitment.com',
        to: email,
        subject: `Your Amazon FBA Clarity Scan — ${resultMeta[type]?.label || 'Results'}`,
        html: buildEmail(type, score)
      })
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Resend error:', err);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Send results error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
