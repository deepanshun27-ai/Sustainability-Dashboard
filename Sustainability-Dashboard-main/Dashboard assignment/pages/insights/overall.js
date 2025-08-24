import OverallPerformanceTile from "../../components/OverallPerformanceTile";
import ChartCard from "../../components/ChartCard";

const overallData = [
  { metric: "Energy", value: 78 },
  { metric: "Water", value: 68 },
  { metric: "Waste", value: 92 },
  { metric: "Emissions", value: 72 }
];

export default function Overall() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Overall Insights</h1>

      <OverallPerformanceTile data={overallData} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ChartCard title="Top Improvements">
          <div className="p-4 text-sm text-gray-600">1) Replaced pumps in Unit A — Energy down 8%<br/>2) Recycled rinse water — Water down 5%</div>
        </ChartCard>

        <ChartCard title="Regulatory Status">
          <div className="p-4 text-sm text-gray-600">All permits active. Next audit: 01 Oct 2025</div>
        </ChartCard>

        <ChartCard title="Export Reports">
          <div className="p-4">
            <a className="inline-block px-3 py-1 bg-indigo-600 text-white rounded" href="/api/reports">Download CSV</a>
          </div>
        </ChartCard>
      </div>
    </div>
  );
}