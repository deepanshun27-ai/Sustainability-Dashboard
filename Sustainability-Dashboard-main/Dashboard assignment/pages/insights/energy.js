import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import ChartCard from "../../components/ChartCard";

const data = [
  { time: "01 Aug", value: 1100 },
  { time: "02 Aug", value: 1200 },
  { time: "03 Aug", value: 1150 },
  { time: "04 Aug", value: 1250 },
  { time: "05 Aug", value: 1400 },
  { time: "06 Aug", value: 1300 },
  { time: "07 Aug", value: 1240 }
];

export default function EnergyInsights() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Energy Insights</h1>

      <ChartCard title="30-day Energy Trend">
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#06b6d4" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <div className="text-sm text-gray-600">Hotspot by Department</div>
          <div className="mt-2 text-lg font-semibold">Dyeing — 42% over baseline</div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div className="text-sm text-gray-600">Cost Impact</div>
          <div className="mt-2 text-lg font-semibold">₹ 18,400 / month</div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div className="text-sm text-gray-600">Anomalies</div>
          <div className="mt-2 text-lg font-semibold text-red-600">2 in last 7 days</div>
        </div>
      </div>
    </div>
  );
}