import { NextRequest, NextResponse } from 'next/server';
import { syncFacultyFromMyJKKN } from '@/lib/sync/faculty-sync';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const report = await syncFacultyFromMyJKKN();
    return NextResponse.json(report);
  } catch (err: any) {
    console.error('[cron/sync-faculty]', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
