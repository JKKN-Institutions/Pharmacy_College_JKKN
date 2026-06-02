'use client';

import { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface SyncReport {
  fetched: number;
  upserted: number;
  drafts: number;
  published: number;
  orphansSoftDeleted: number;
  slugRenames: number;
  errors: string[];
  rows: { id: string; name: string; status: string; missing: string[] }[];
  durationMs: number;
}

export default function SyncButton() {
  const [syncing, setSyncing] = useState(false);
  const [report, setReport] = useState<SyncReport | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSync() {
    setSyncing(true);
    setReport(null);
    setError(null);

    try {
      const res = await fetch('/admin/api/trigger-sync', { method: 'POST' });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `Sync failed: ${res.status}`);
      }
      const data: SyncReport = await res.json();
      setReport(data);
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSyncing(false);
    }
  }

  return (
    <div>
      <button
        onClick={handleSync}
        disabled={syncing}
        className="flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
      >
        <RefreshCw className={`w-4 h-4 ${syncing ? 'animate-spin' : ''}`} />
        {syncing ? 'Syncing…' : 'Sync from MyJKKN'}
      </button>

      {error && (
        <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700">
          {error}
        </div>
      )}

      {report && (
        <div className="mt-3 p-4 bg-white border border-gray-200 rounded-xl text-xs space-y-2 max-w-md">
          <p className="font-semibold text-gray-800">Sync Complete ({report.durationMs}ms)</p>
          <div className="grid grid-cols-2 gap-1 text-gray-600">
            <span>Fetched:</span><span className="font-medium">{report.fetched}</span>
            <span>Upserted:</span><span className="font-medium">{report.upserted}</span>
            <span>Published:</span><span className="font-medium text-green-600">{report.published}</span>
            <span>Drafts:</span><span className="font-medium text-amber-600">{report.drafts}</span>
            <span>Orphans hidden:</span><span className="font-medium">{report.orphansSoftDeleted}</span>
            <span>Slug renames:</span><span className="font-medium">{report.slugRenames}</span>
          </div>

          {report.errors.length > 0 && (
            <div className="mt-2 p-2 bg-red-50 rounded-lg">
              <p className="font-semibold text-red-700 mb-1">Errors:</p>
              {report.errors.map((e, i) => (
                <p key={i} className="text-red-600">{e}</p>
              ))}
            </div>
          )}

          {report.rows.filter((r) => r.missing.length > 0).length > 0 && (
            <div className="mt-2">
              <p className="font-semibold text-amber-700 mb-1">Incomplete profiles (drafted):</p>
              {report.rows
                .filter((r) => r.missing.length > 0)
                .map((r) => (
                  <p key={r.id} className="text-gray-600">
                    <span className="font-medium">{r.name}</span>: missing {r.missing.join(', ')}
                  </p>
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
