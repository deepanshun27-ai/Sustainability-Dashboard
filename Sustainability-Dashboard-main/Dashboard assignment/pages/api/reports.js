export default function handler(req, res) {
  // Example CSV content. Replace with DB query to export real data.
  const rows = [
    { date: '2025-08-01', unit: 'Unit A', energy_kwh: 1100, water_l: 4800, waste_kg: 85, emissions_kg: 320 },
    { date: '2025-08-02', unit: 'Unit A', energy_kwh: 1200, water_l: 5000, waste_kg: 90, emissions_kg: 330 },
    { date: '2025-08-03', unit: 'Unit B', energy_kwh: 1150, water_l: 5150, waste_kg: 120, emissions_kg: 340 }
  ];

  const header = Object.keys(rows[0]).join(',');
  const csv = [header, ...rows.map(r => Object.values(r).map(v => `"${String(v).replace(/"/g, '""')}"`).join(','))].join('\n');

  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="sustainability-report.csv"');
  res.status(200).send(csv);
}