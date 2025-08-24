import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import ChartCard from "../../components/ChartCard";

const data = [
  { time: "01 Aug", value: 4800 },
  { time: "02 Aug", value: 5000 },
  { time: "03 Aug", value: 5150 },
  { time: "04 Aug", value: 4980 },
  { time: "05 Aug", value: 5300 },
  { time: "06 Aug", value: 5200 }
];

export default function WaterInsights() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Water Insights</h1>
      <ChartCard title="7-day Water Usage">
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line dataKey="value" stroke="#3b82f6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <div className="text-sm text-gray-600">Hotspot</div>
          <div className="mt-2 text-lg font-semibold">Unit A — Boiler area</div>
        </div>
      </div>
    </div>
  );
}