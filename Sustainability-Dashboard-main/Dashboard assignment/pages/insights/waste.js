import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import ChartCard from "../../components/ChartCard";

const data = [
  { dept: "Dyeing", value: 90 },
  { dept: "Weaving", value: 40 },
  { dept: "Cutting", value: 25 },
  { dept: "Finishing", value: 55 }
];

export default function WasteInsights() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Waste Insights</h1>
      <ChartCard title="Waste by Department (kg)">
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dept" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
      <div className="bg-white p-4 rounded shadow">
        <div className="text-sm text-gray-600">Top causes</div>
        <ul className="mt-2 list-disc pl-5 text-sm">
          <li>Process scrap in Dyeing</li>
          <li>Material offcuts in Cutting</li>
        </ul>
      </div>
    </div>
  );
}