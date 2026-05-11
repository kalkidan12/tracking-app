import { db } from "@/lib/db";
import { format } from "date-fns"; // npm install date-fns

async function getData() {
  const { rows } = await db.query(
    "SELECT * FROM tracking_data ORDER BY created_at DESC",
  );
  return rows;
}

export default async function DataPage() {
  const data = await getData();

  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-2xl font-bold mb-6">Tracking Logs</h1>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Date & Time</th>
              <th className="px-4 py-3 text-left font-semibold">IP Address</th>
              <th className="px-4 py-3 text-left font-semibold">Coordinates</th>
              <th className="px-4 py-3 text-left font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  {format(new Date(row.created_at), "dd MMM yyyy, hh:mm a")}
                </td>
                <td className="px-4 py-3 text-blue-600">{row.ip_address}</td>
                <td className="px-4 py-3 font-mono">
                  {row.latitude.toFixed(4)}, {row.longitude.toFixed(4)}
                </td>
                <td className="px-4 py-3">
                  <a
                    href={`https://www.google.com/maps?q=${row.latitude},${row.longitude}`}
                    target="_blank"
                    className="bg-black text-white px-3 py-1 rounded-md text-xs hover:bg-gray-800"
                  >
                    Track on Map
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
