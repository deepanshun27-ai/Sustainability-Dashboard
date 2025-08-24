import KpiTile from "../components/KpiTile";
import OverallPerformanceTile from "../components/OverallPerformanceTile";
import FilterBar from "../components/FilterBar";
import AlertPanel from "../components/AlertPanel";
import ChartCard from "../components/ChartCard";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [filters, setFilters] = useState({});
  // Example KPI numbers (replace with live fetch from supabase)
  const kpis = {
    energy: { value: 1240, pct: 78 },
    water: { value: 5200, pct: 68 },
    waste: { value: 210, pct: 92 },
    emissions: { value: 350, pct: 72 }
  };

  const overallData = [
    { metric: "Energy", value: 78 },
    { metric: "Water", value: 68 },
    { metric: "Waste", value: 92 },
    { metric: "Emissions", value: 72 }
  ];

  const alerts = [
    { title: "High waste in Unit B", details: "Waste spike at 02:00 shift", severity: "High" },
    { title: "Energy above target", details: "Energy +15% vs baseline", severity: "Medium" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <FilterBar onChange={setFilters} />
        <div className="flex items-center gap-2">
          <Link href="/api/reports"><a className="px-3 py-1 bg-gray-100 rounded">Export CSV</a></Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <KpiTile title="Energy" value={kpis.energy.value + " kWh"} pct={kpis.energy.pct} link="/insights/energy" />
        <KpiTile title="Water" value={kpis.water.value + " L"} pct={kpis.water.pct} link="/insights/water" />
        <KpiTile title="Waste" value={kpis.waste.value + " kg"} pct={kpis.waste.pct} link="/insights/waste" />
        <KpiTile title="Emissions" value={kpis.emissions.value + " CO₂"} pct={kpis.emissions.pct} link="/insights/emissions" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <OverallPerformanceTile data={overallData} />
        </div>
        <div>
          <AlertPanel alerts={alerts} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ChartCard title="Energy Trend (30 days)">
          <div className="flex items-center justify-center h-full text-gray-400">Add Line chart here (recharts)</div>
        </ChartCard>

        <ChartCard title="Hotspots">
          <div className="flex items-center justify-center h-full text-gray-400">Add bar/heatmap here</div>
        </ChartCard>

        <ChartCard title="Goal Progress">
          <div className="p-4">
            <div className="text-sm text-gray-600">Energy reduction</div>
            <div className="w-full bg-gray-200 rounded h-3 mt-2">
              <div style={{width: '72%'}} className="h-3 bg-indigo-600 rounded"></div>
            </div>
            <div className="text-xs text-gray-500 mt-2">72% of target achieved</div>
          </div>
        </ChartCard>
      </div>
    </div>
  );
}
