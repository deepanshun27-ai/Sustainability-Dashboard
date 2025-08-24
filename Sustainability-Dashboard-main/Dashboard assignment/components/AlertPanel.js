export default function AlertPanel({ alerts = [] }) {
  if (!alerts || alerts.length === 0) {
    return (
      <div className="bg-white p-4 rounded shadow text-sm text-green-700">
        ✅ No critical alerts — everything under control
      </div>
    );
  }

  return (
    <div className="bg-white p-3 rounded shadow space-y-2">
      <h4 className="font-semibold">Alerts</h4>
      <div className="space-y-2 max-h-48 overflow-auto">
        {alerts.map((a, i) => (
          <div key={i} className="p-2 border rounded flex justify-between items-start">
            <div>
              <div className="font-medium">{a.title}</div>
              <div className="text-xs text-gray-600">{a.details}</div>
            </div>
            <div className="text-xs text-red-600">{a.severity}</div>
          </div>
        ))}
      </div>
    </div>
  );
}