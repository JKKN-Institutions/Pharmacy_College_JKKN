import { createClient } from '@/lib/supabase/server';
import { getAdminCollegeId } from '@/lib/get-admin-college';
import Link from 'next/link';
import { Plus, Pencil, UserCircle2 } from 'lucide-react';
import DeleteFacultyButton from './DeleteFacultyButton';
import SyncButton from './SyncButton';

export default async function AdminFaculty() {
  const supabase = await createClient();
  const collegeId = await getAdminCollegeId();
  const { data: members } = await supabase
    .from('faculty')
    .select('id, name, designation, department, qualification, experience_years, photo_url, email, display_order, is_active, synced_from_api, staff_id, status')
    .eq('college_id', collegeId)
    .order('display_order', { ascending: true })
    .order('name', { ascending: true });

  const syncedCount = members?.filter((m) => m.synced_from_api).length ?? 0;
  const manualCount = members?.filter((m) => !m.synced_from_api).length ?? 0;

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Senior Learners</h1>
          <p className="text-gray-500 text-sm mt-0.5">
            {members?.length ?? 0} total &middot; {syncedCount} synced &middot; {manualCount} manual
          </p>
        </div>
        <div className="flex items-center gap-3">
          <SyncButton />
          <Link
            href="/admin/faculty/new"
            className="flex items-center gap-2 bg-[#006837] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#005a2e] transition"
          >
            <Plus className="w-4 h-4" />
            Add Senior Learner
          </Link>
        </div>
      </div>

      {/* Grid */}
      {members && members.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {members.map((m) => (
            <div
              key={m.id}
              className={`bg-white rounded-2xl border shadow-sm p-4 flex flex-col ${
                m.is_active ? 'border-gray-100' : 'border-gray-200 opacity-60'
              }`}
            >
              {/* Photo */}
              <div className="flex justify-center mb-3">
                {m.photo_url ? (
                  <img
                    src={m.photo_url}
                    alt={m.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-gray-100"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
                    <UserCircle2 className="w-10 h-10 text-gray-300" />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="text-center flex-1">
                <p className="font-semibold text-gray-900 text-sm leading-snug">{m.name}</p>
                <p className="text-xs text-[#006837] font-medium mt-0.5">{m.designation}</p>
                {m.department && (
                  <p className="text-xs text-gray-500 mt-0.5">{m.department}</p>
                )}
                {m.qualification && (
                  <p className="text-xs text-gray-400 mt-1 line-clamp-1">{m.qualification}</p>
                )}
                {m.experience_years > 0 && (
                  <p className="text-xs text-gray-400 mt-0.5">{m.experience_years} yrs exp</p>
                )}
                {m.staff_id && (
                  <p className="text-xs text-gray-400 mt-0.5 font-mono">{m.staff_id}</p>
                )}
              </div>

              {/* Status badges */}
              <div className="flex justify-center gap-1.5 mt-2 mb-3 flex-wrap">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                  m.is_active ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'
                }`}>
                  {m.is_active ? 'Active' : 'Inactive'}
                </span>
                {m.synced_from_api && (
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">
                    Synced
                  </span>
                )}
                {m.status === 'draft' && (
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-600">
                    Draft
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-center gap-2 pt-2 border-t border-gray-50">
                {m.synced_from_api ? (
                  <a
                    href="https://www.jkkn.ai/staff"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition"
                  >
                    Edit in MyJKKN
                  </a>
                ) : (
                  <>
                    <Link
                      href={`/admin/faculty/${m.id}`}
                      className="flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-[#006837] px-3 py-1.5 rounded-lg hover:bg-gray-100 transition"
                    >
                      <Pencil className="w-3.5 h-3.5" />
                      Edit
                    </Link>
                    <DeleteFacultyButton id={m.id} />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm py-16 flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-4">
            <UserCircle2 className="w-7 h-7 text-rose-400" />
          </div>
          <p className="font-semibold text-gray-700 mb-1">No senior learners yet</p>
          <p className="text-sm text-gray-400 mb-5">Add senior learners or sync from MyJKKN.</p>
          <div className="flex gap-3">
            <SyncButton />
            <Link
              href="/admin/faculty/new"
              className="flex items-center gap-2 bg-[#006837] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#005a2e] transition"
            >
              <Plus className="w-4 h-4" />
              Add Senior Learner
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
