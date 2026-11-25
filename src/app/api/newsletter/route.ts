import { NextResponse } from 'next/server';

const BACKEND_BASES = Array.from(
  new Set(
    [
      process.env.API_BASE_URL,
      process.env.NEXT_PUBLIC_API_BASE_URL,
      'http://localhost:3000/api/v1',
      'https://api.qbapp.online/api/v1',
    ]
      .filter(Boolean)
      .map((u) => String(u).replace(/\/+$/, '')),
  ),
);

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: 'Invalid email address.' }, { status: 400 });
  }

  for (const base of BACKEND_BASES) {
    try {
      const res = await fetch(`${base}/public/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
        cache: 'no-store',
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) return NextResponse.json(data, { status: 200 });
    } catch {
      continue;
    }
  }

  return NextResponse.json({ message: 'Subscription failed. Please try again.' }, { status: 503 });
}
