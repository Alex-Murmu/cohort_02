// components/AppBar.js
import Image from 'next/image';

export default function AppBar() {
  return (
    <div className="w-full flex items-center justify-between px-4 py-2 shadow-md sticky top-0 z-50 bg-black">
      
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <img src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="YouTube" width={100} height={24} />
      </div>

      {/* Middle: Search Bar */}
      <div className="flex-1 max-w-xl mx-4">
        <div className="flex border border-gray-300 rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 px-4 py-2 outline-none"
          />
          <button className="px-4 bg-blue-400 hover:bg-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

          </button>
        </div>
      </div>

      {/* Right: Sign In Button */}
      <div>
        <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition">
          Sign In
        </button>
      </div>

    </div>
  );
}
