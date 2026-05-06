// api/send-brief.js
// Generates and emails the Personal Decision Brief after Level 2 completion
// Env vars required: RESEND_API_KEY, FROM_EMAIL, SITE_URL

const accentMap = {
  strong:      '#1a7a5e',
  conditional: '#b07020',
  risk:        '#a83030',
  redirect:    '#2460a0'
};

const classMap = {
  strong:      'Strong Fit',
  conditional: 'Conditional Fit',
  risk:        'High-Risk Fit',
  redirect:    'Misaligned (for now)'
};

const guidanceMap = {
  strong:      'Proceed deliberately',
  conditional: 'Proceed with specific conditions addressed first',
  risk:        'Pause and reassess conditions before proceeding',
  redirect:    'Explore better-suited business models'
};

function frictionSection(frictions, accent) {
  return frictions.map(f => `
    <div style="padding:16px 0;border-top:1px solid #e8e4dc;">
      <div style="font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#1b1b18;margin-bottom:6px;">${f.title}</div>
      <div style="font-size:15px;line-height:1.72;color:#3c3c38;">${f.body}</div>
    </div>`).join('');
}

function buildBrief({ email, fitType, frictions, executiveSummary, conditions, guidance }) {
  const accent  = accentMap[fitType]  || '#1e6e5c';
  const fitClass = classMap[fitType]  || 'Conditional Fit';
  const guidance2 = guidanceMap[fitType] || guidance;
  const siteUrl = process.env.SITE_URL || 'https://clarity-before-commitment.vercel.app';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Personal Decision Brief — Amazon FBA</title>
</head>
<body style="margin:0;padding:0;background:#f5f3ef;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f3ef;padding:40px 0;">
  <tr><td align="center">
    <table width="620" cellpadding="0" cellspacing="0" style="background:#ffffff;max-width:620px;width:100%;">

      <!-- Cover -->
      <tr><td style="padding:48px 52px 36px;border-bottom:1px solid #e8e4dc;">
        <div style="font-size:11px;font-weight:600;letter-spacing:0.13em;text-transform:uppercase;color:#1e6e5c;margin-bottom:16px;">
          Clarity Before Commitment · Advisory
        </div>
        <div style="font-family:Georgia,serif;font-size:30px;font-weight:400;color:#1b1b18;line-height:1.2;margin-bottom:10px;">
          Personal Decision Brief
        </div>
        <div style="font-size:13px;color:#86867e;letter-spacing:0.04em;">
          Amazon FBA · Decision Fit Assessment · ${new Date().toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'})}
        </div>
      </td></tr>

      <!-- Accent bar + classification -->
      <tr><td style="padding:0;">
        <div style="height:3px;background:${accent};"></div>
        <div style="padding:24px 52px;background:#faf8f4;border-bottom:1px solid #e8e4dc;">
          <div style="font-size:10px;font-weight:600;letter-spacing:0.13em;text-transform:uppercase;color:${accent};margin-bottom:8px;">
            Fit Classification
          </div>
          <div style="font-family:Georgia,serif;font-size:22px;color:#1b1b18;">${fitClass}</div>
        </div>
      </td></tr>

      <!-- Executive Summary -->
      <tr><td style="padding:36px 52px 28px;border-bottom:1px solid #e8e4dc;">
        <div style="font-size:10px;font-weight:600;letter-spacing:0.13em;text-transform:uppercase;color:#1e6e5c;margin-bottom:14px;">
          At a Glance
        </div>
        <p style="font-family:Georgia,serif;font-size:17px;line-height:1.65;color:#1b1b18;margin:0;">
          ${executiveSummary}
        </p>
      </td></tr>

      <!-- Friction points -->
      <tr><td style="padding:28px 52px;border-bottom:1px solid #e8e4dc;">
        <div style="font-size:10px;font-weight:600;letter-spacing:0.13em;text-transform:uppercase;color:#1e6e5c;margin-bottom:4px;">
          Where This Business Will Test You Most
        </div>
        ${frictionSection(frictions, accent)}
      </td></tr>

      <!-- Conditions -->
      ${conditions ? `
      <tr><td style="padding:28px 52px;border-bottom:1px solid #e8e4dc;background:#faf8f4;">
        <div style="font-size:10px;font-weight:600;letter-spacing:0.13em;text-transform:uppercase;color:#1e6e5c;margin-bottom:14px;">
          Conditions That Would Strengthen Your Position
        </div>
        <p style="font-size:15px;line-height:1.75;color:#3c3c38;margin:0;">${conditions}</p>
      </td></tr>` : ''}

      <!-- Decision guidance -->
      <tr><td style="padding:28px 52px;border-bottom:1px solid #e8e4dc;">
        <div style="font-size:10px;font-weight:600;letter-spacing:0.13em;text-transform:uppercase;color:#1e6e5c;margin-bottom:10px;">
          Decision Guidance
        </div>
        <div style="font-family:Georgia,serif;font-size:20px;color:${accent};margin-bottom:14px;">${guidance2}</div>
        <p style="font-size:15px;line-height:1.75;color:#3c3c38;margin:0;">
          ${fitType === 'redirect'
            ? 'This result does not close doors — it narrows them. Consider exploring business archetypes that better match your temperament and constraints before committing time or capital.'
            : 'If you choose to move forward, the Commitment Roadmap provides a phased, decision-aware execution framework — available only to those whose assessment suggests proceeding is appropriate.'
          }
        </p>
      </td></tr>

      <!-- CTA -->
      <tr><td style="padding:32px 52px;border-bottom:1px solid #e8e4dc;">
        <table cellpadding="0" cellspacing="0">
          <tr><td style="background:#1e6e5c;">
            <a href="${siteUrl}${fitType === 'redirect' ? '/redirect' : '/roadmap'}"
               style="display:inline-block;padding:14px 32px;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#ffffff;text-decoration:none;">
              ${fitType === 'redirect' ? 'Explore Better-Fit Directions' : 'View the Commitment Roadmap'}
            </a>
          </td></tr>
        </table>
      </td></tr>

      <!-- Disclaimer -->
      <tr><td style="padding:24px 52px;background:#f5f3ef;">
        <p style="font-size:12px;color:#86867e;line-height:1.7;margin:0;">
          This brief reflects alignment, not ability. Results represent a snapshot of your current situation — not a permanent verdict.
          Good decisions do not eliminate risk. They ensure the risk you take is understood.
          Clarity Before Commitment provides decision clarity tools, not financial or business advice.
        </p>
      </td></tr>

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

  const { email, fitType, frictions, executiveSummary, conditions } = req.body || {};

  if (!email || !fitType) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Email service not configured' });
  }

  const fitClass = classMap[fitType] || 'Decision Brief';

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: process.env.FROM_EMAIL || 'brief@claritybeforecommitment.com',
        to: email,
        subject: `Your Personal Decision Brief — Amazon FBA (${fitClass})`,
        html: buildBrief({ email, fitType, frictions, executiveSummary, conditions })
      })
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Resend error:', err);
      return res.status(500).json({ error: 'Failed to send brief' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Send brief error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
