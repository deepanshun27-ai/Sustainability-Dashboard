import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from "recharts";

export default function OverallPerformanceTile({ data }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold">Overall Performance</h3>
        <div className="text-sm text-gray-500">Last 30 days</div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="metric" />
            <Radar dataKey="value" stroke="#6366f1" fill="#6366f1" fillOpacity={0.35} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
