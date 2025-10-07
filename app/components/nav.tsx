import React, { useState } from 'react';
import Link from 'next/link';

const navItems = {
  '/': {
    name: 'Home',
  },
  '/blog': {
    name: 'Diensten',
  },
  '/over-ons': {
    name: 'Wie zijn Wij',
  },
  '/contact': {
    name: 'Contact',
  },
  'https://vercel.com/templates/next.js/portfolio-starter-kit': {
    name: 'deploy',
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav className="w-full" id="nav">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center w-full gap-2 sm:gap-0 pr-0 sm:pr-10">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="transition-all flex-1 sm:flex-none align-middle relative py-3 px-4 m-0 sm:m-1 font-bold bg-[#736635] text-white rounded-lg shadow hover:bg-[#aba386] hover:text-[#736635] border border-[#d5d1c2] text-center text-base sm:text-sm"
                style={{ minWidth: 0 }}
              >
                {name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
}
