export default function ChartCard({ title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <div className="mb-2 flex justify-between items-center">
        <h4 className="font-medium">{title}</h4>
        <div className="text-sm text-gray-500">Trend</div>
      </div>
      <div style={{ minHeight: 220 }}>
        {children}
      </div>
    </div>
  );
}