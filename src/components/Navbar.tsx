"use client"

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-transparent py-4">
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
        <div className="text-lg font-semibold">Sisto Realisatie</div>
        <button
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
          className="sm:hidden p-2 rounded bg-beige-500 text-white"
        >
          {open ? 'Sluiten' : 'Menu'}
        </button>
        <nav className={`hidden sm:flex items-center space-x-4`}> 
          <Link href="/" className="px-4 py-2 rounded bg-beige-500 text-white">Home</Link>
          <Link href="/diensten" className="px-4 py-2 rounded bg-beige-500 text-white">Diensten</Link>
          <Link href="/wie-zijn-wij" className="px-4 py-2 rounded bg-beige-500 text-white">Wie zijn wij</Link>
          <Link href="/contact" className="px-4 py-2 rounded bg-beige-500 text-white">Contact</Link>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden px-4 mt-2">
          <nav className="flex flex-col gap-2">
            <Link href="/" className="block px-4 py-2 rounded bg-beige-500 text-white text-center">Home</Link>
            <Link href="/diensten" className="block px-4 py-2 rounded bg-beige-500 text-white text-center">Diensten</Link>
            <Link href="/wie-zijn-wij" className="block px-4 py-2 rounded bg-beige-500 text-white text-center">Wie zijn wij</Link>
            <Link href="/contact" className="block px-4 py-2 rounded bg-beige-500 text-white text-center">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
