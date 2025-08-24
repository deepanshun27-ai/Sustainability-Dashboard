import { useState, useEffect } from "react";

export default function FilterBar({ onChange }) {
  const [filters, setFilters] = useState({
    timeRange: 'today',
    unit: 'all',
    department: 'all',
    shift: 'all'
  });

  useEffect(() => {
    // persist filter in localStorage
    const saved = localStorage.getItem('sust-filters');
    if (saved) setFilters(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('sust-filters', JSON.stringify(filters));
    if (typeof onChange === 'function') onChange(filters);
  }, [filters]);

  return (
    <div className="bg-white p-3 rounded-md flex gap-3 items-center shadow-sm">
      <select value={filters.timeRange} onChange={e => setFilters(f => ({...f, timeRange: e.target.value}))} className="border rounded px-2 py-1">
        <option value="today">Today</option>
        <option value="7days">7 days</option>
        <option value="30days">30 days</option>
        <option value="90days">90 days</option>
        <option value="1year">1 year</option>
      </select>

      <select value={filters.unit} onChange={e => setFilters(f => ({...f, unit: e.target.value}))} className="border rounded px-2 py-1">
        <option value="all">All Units</option>
        <option value="unit-a">Unit A</option>
        <option value="unit-b">Unit B</option>
      </select>

      <select value={filters.department} onChange={e => setFilters(f => ({...f, department: e.target.value}))} className="border rounded px-2 py-1">
        <option value="all">All Departments</option>
        <option value="dyeing">Dyeing</option>
        <option value="weaving">Weaving</option>
      </select>

      <select value={filters.shift} onChange={e => setFilters(f => ({...f, shift: e.target.value}))} className="border rounded px-2 py-1">
        <option value="all">All Shifts</option>
        <option value="morning">Morning</option>
        <option value="evening">Evening</option>
        <option value="night">Night</option>
      </select>
    </div>
  );
}