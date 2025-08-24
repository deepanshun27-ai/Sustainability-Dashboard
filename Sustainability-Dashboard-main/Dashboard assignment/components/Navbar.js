import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center">
            {/* placeholder logo */}
            <Image src="/company-logo.png" alt="logo" width={36} height={36} />
          </div>
          <div>
            <div className="text-lg font-semibold">TextileCo — Sustainability</div>
            <div className="text-xs text-gray-500">Head of Sustainability View</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600">Ansh Sharma</div>
          <button className="px-3 py-1 rounded-md bg-indigo-600 text-white text-sm">Sign out</button>
        </div>
      </div>
    </header>
  );
}