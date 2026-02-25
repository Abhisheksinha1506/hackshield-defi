# HackShield

HackShield is a real-time DeFi exploit detection platform. Unlike traditional monitors that rely on statistical anomalies, HackShield uses exploit signatures from actual replayed Proof-of-Concepts (PoCs) to identify attacks as they happen on-chain.

## Features

- **Real-Time Detection:** Identifies DeFi exploits as they occur.
- **PoC-Based Signatures:** Uses actual attack patterns for high precision and lower false positives.
- **Actionable Intelligence:** Provides specific alerts that allow protocols to take immediate action.
- **Advanced Monitoring:** Detects detectable on-chain patterns before funds are drained.

## Tech Stack

- **Framework:** Next.js
- **Styling:** Tailwind CSS
- **Components:** Radix UI / shadcn/ui
- **Icons:** Lucide React
- **Animations:** Framer Motion / CSS Animations

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server on port 3000:

```bash
npm run dev -- --port 3000
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Supabase Integration

This project is integrated with Supabase for:
- **Visitor Tracking**: Automatically logs page views to `hackshield_visitors`.
- **Early Access Signups**: Captures lead emails in `hackshield_signups`.
- **Analytics**: Pre-configured views for monitoring conversion rates.

To set up the environment, copy `.env.example` to `.env.local` and add your Supabase credentials:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
