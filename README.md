# Clarity Before Commitment — v1.1

> Understand the business before you choose it.

## What's new in v1.1
- Real email delivery via Resend (Level 1 results + Level 2 Decision Brief)
- Stripe Checkout for Level 2 payment ($49)
- Full Level 2 Decision Fit Assessment (30 questions, 6 dimensions)
- Personal Decision Brief with dimension scores and personalised frictions
- Serverless API functions (Vercel)

## Environment Variables

Set these in your Vercel project dashboard under **Settings → Environment Variables**:

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | From resend.com — your API key |
| `FROM_EMAIL` | Verified sender email (e.g. results@yourdomain.com) |
| `STRIPE_SECRET_KEY` | From stripe.com — your secret key (starts with sk_) |
| `SITE_URL` | Your live Vercel URL (e.g. https://clarity-before-commitment.vercel.app) |

## Setup services

### Resend (email)
1. Go to resend.com and create a free account
2. Create an API key under API Keys
3. Add your sending domain (or use the Resend test address initially)

### Stripe (payments)
1. Go to stripe.com and create an account
2. Get your secret key from Developers → API Keys
3. Start in test mode — use test key until ready to go live

## Local Development
```bash
npm install
npm start
```

## Deploy
Push to GitHub. Vercel auto-deploys on every push to main.
