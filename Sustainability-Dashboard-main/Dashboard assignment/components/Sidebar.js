import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white p-4 border-r hidden md:block">
      <nav className="space-y-2">
        <Link href="/"><a className="block py-2 px-3 rounded hover:bg-gray-100">Dashboard</a></Link>
        <Link href="/insights/overall"><a className="block py-2 px-3 rounded hover:bg-gray-100">Overall Insights</a></Link>
        <Link href="/insights/energy"><a className="block py-2 px-3 rounded hover:bg-gray-100">Energy</a></Link>
        <Link href="/insights/water"><a className="block py-2 px-3 rounded hover:bg-gray-100">Water</a></Link>
        <Link href="/insights/waste"><a className="block py-2 px-3 rounded hover:bg-gray-100">Waste</a></Link>
        <Link href="/insights/emissions"><a className="block py-2 px-3 rounded hover:bg-gray-100">Emissions</a></Link>
      </nav>
    </aside>
  );
}