export const metadata = {
  title: 'Contact - Sisto Realisatie',
}

export default function Contact() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p className="mb-6">Vul het formulier in of bel ons direct voor een afspraak of vrijblijvende offerte.</p>

      <div className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm font-medium">Naam</label>
          <input className="mt-1 block w-full border rounded px-3 py-2" placeholder="Jouw naam" />
        </div>

        <div>
          <label className="block text-sm font-medium">E-mail of telefoon</label>
          <input className="mt-1 block w-full border rounded px-3 py-2" placeholder="E-mail of telefoon" />
        </div>

        <div>
          <label className="block text-sm font-medium">Bericht</label>
          <textarea className="mt-1 block w-full border rounded px-3 py-2" rows={4} placeholder="Wat kunnen we voor je doen?"></textarea>
        </div>

        <button className="inline-block px-4 py-2 rounded bg-beige-500 text-white">Verstuur</button>
      </div>
    </div>
  )
}
