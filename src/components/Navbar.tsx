import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="w-full bg-transparent py-4">
      <nav className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center sm:justify-center sm:space-x-4 space-y-2 sm:space-y-0">
        <Link href="/" className="px-4 py-2 rounded bg-beige-500 text-white w-full text-center sm:w-auto">Home</Link>
        <Link href="/diensten" className="px-4 py-2 rounded bg-beige-500 text-white w-full text-center sm:w-auto">Diensten</Link>
        <Link href="/wie-zijn-wij" className="px-4 py-2 rounded bg-beige-500 text-white w-full text-center sm:w-auto">Wie zijn wij</Link>
        <Link href="/contact" className="px-4 py-2 rounded bg-beige-500 text-white w-full text-center sm:w-auto">Contact</Link>
      </nav>
    </header>
  )
}
