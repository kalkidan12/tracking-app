import { db } from "@/lib/db";
import { format } from "date-fns";

export const dynamic = "force-dynamic";
export const revalidate = 0;

async function getData() {
  const { rows } = await db.query(
    "SELECT * FROM tracking_data ORDER BY created_at DESC",
  );
  return rows;
}

export default async function DataPage() {
  const data = await getData();

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-10 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
              Visitor Analytics
            </h1>
            <p className="text-slate-500 mt-1 text-sm">
              Real-time device tracking and geolocation logs.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-medium text-slate-600">
              {data.length} Total Logs
            </span>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-200">
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Timestamp
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Network Info
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Geolocation
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 text-right">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {data.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-blue-50/30 transition-colors duration-150 group"
                  >
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-slate-900">
                        {format(new Date(row.created_at), "MMM dd, yyyy")}
                      </div>
                      <div className="text-xs text-slate-400 font-mono">
                        {format(new Date(row.created_at), "hh:mm:ss a")}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-[10px] font-bold">
                          IPv4
                        </span>
                        <span className="text-sm text-slate-700 font-mono">
                          {row.ip_address}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm text-slate-600 font-medium">
                          {row.latitude.toFixed(4)}, {row.longitude.toFixed(4)}
                        </span>
                        <span className="text-[10px] text-slate-400 truncate max-w-[200px]">
                          {row.user_agent.split(") ")[0]})
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <a
                        href={`https://www.google.com/maps?q=${row.latitude},${row.longitude}`}
                        target="_blank"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold rounded-lg transition-all shadow-md hover:shadow-blue-200 active:scale-95"
                      >
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        View Map
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {data.length === 0 && (
            <div className="py-20 text-center">
              <div className="text-slate-300 mb-2 font-mono text-5xl">:(</div>
              <p className="text-slate-500 font-medium">
                No tracking data recorded yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
