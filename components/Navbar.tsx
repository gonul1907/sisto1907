import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="w-full bg-transparent py-6">
      <nav className="max-w-4xl mx-auto flex justify-center space-x-4">
        <Link href="/" className="px-4 py-2 rounded bg-beige-500 text-white">Home</Link>
        <Link href="/diensten" className="px-4 py-2 rounded bg-beige-500 text-white">Diensten</Link>
        <Link href="/wie-zijn-wij" className="px-4 py-2 rounded bg-beige-500 text-white">Wie zijn wij</Link>
        <Link href="/contact" className="px-4 py-2 rounded bg-beige-500 text-white">Contact</Link>
      </nav>
    </header>
  )
}
