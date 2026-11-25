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
    return NextResponse.json({ message: 'Invalid enquiry payload.' }, { status: 400 });
  }

  for (const base of BACKEND_BASES) {
    try {
      const res = await fetch(`${base}/public/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
        cache: 'no-store',
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) return NextResponse.json(data, { status: 201 });
      if (res.status >= 400 && res.status < 500) return NextResponse.json(data, { status: res.status });
    } catch {
      continue;
    }
  }

  return NextResponse.json(
    { message: 'Unable to reach enquiry service right now. Please try WhatsApp or email.' },
    { status: 503 },
  );
}
