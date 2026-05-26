import { NextRequest, NextResponse } from 'next/server';
import { syncFacultyFromMyJKKN } from '@/lib/sync/faculty-sync';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  let result = 0;
  for (let i = 0; i < bufA.length; i++) {
    result |= bufA[i] ^ bufB[i];
  }
  return result === 0;
}

export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-sync-secret');
  const expected = process.env.FACULTY_SYNC_SECRET;

  if (!secret || !expected || !timingSafeEqual(secret, expected)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const report = await syncFacultyFromMyJKKN();
    return NextResponse.json(report);
  } catch (err: any) {
    console.error('[sync-faculty-now]', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
