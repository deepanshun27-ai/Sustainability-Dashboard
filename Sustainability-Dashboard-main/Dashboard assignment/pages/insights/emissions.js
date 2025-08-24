import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import ChartCard from "../../components/ChartCard";

const data = [
  { time: "01 Aug", value: 320 },
  { time: "02 Aug", value: 330 },
  { time: "03 Aug", value: 340 },
  { time: "04 Aug", value: 360 },
  { time: "05 Aug", value: 355 }
];

export default function EmissionsInsights() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Emissions Insights</h1>
      <ChartCard title="CO₂ Emissions (kg)">
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line dataKey="value" stroke="#84cc16" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <div className="text-sm text-gray-600">Source breakdown</div>
          <div className="mt-2 text-lg font-semibold">Furnace: 45% | Grid: 35% | Transport: 20%</div>
        </div>
      </div>
    </div>
  );
}