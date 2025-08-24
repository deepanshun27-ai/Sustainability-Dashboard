import Link from "next/link";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { prettyNumber } from "../utils/charts";

const COLORS = ['#06b6d4','#f59e0b','#ef4444'];

export default function KpiTile({ title, value, pct, link = '/', small = false }) {
  const used = pct;
  const rest = 100 - (pct || 0);

  return (
    <Link href={link}>
      <a className="block bg-white p-4 rounded-2xl shadow hover:shadow-md transition">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-sm text-gray-500">{title}</div>
            <div className="text-2xl font-semibold">{prettyNumber(value)}</div>
            <div className="text-xs text-gray-400 mt-1">{pct <= 70 ? 'On Track' : pct <= 85 ? 'Caution' : 'Critical'}</div>
          </div>
          <div className={`w-20 h-20`}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={[{name:'used', value:used},{name:'rest', value:rest}]} innerRadius={28} outerRadius={36} dataKey="value">
                  <Cell fill={used <= 70 ? '#10b981' : used <= 85 ? '#f59e0b' : '#ef4444'} />
                  <Cell fill="#e6e6e6" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </a>
    </Link>
  );
}