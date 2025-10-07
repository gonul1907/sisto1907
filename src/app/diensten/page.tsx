export const metadata = {
  title: 'Diensten - Sisto Realisatie',
}

export default function Diensten() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4">Onze diensten</h2>
      <p className="mb-6">We bieden een breed scala aan vakmanschap voor particuliere en kleinschalige zakelijke opdrachten. Hieronder vind je een overzicht van onze belangrijkste diensten.</p>

      <ul className="space-y-6">
        <li className="bg-white p-4 rounded shadow-sm">
          <h3 className="font-semibold">Badkamers en toiletten</h3>
          <p className="text-sm">Volledige renovaties of kleine aanpassingen: tegelen, kitwerk, sanitair aansluiten en afwerking.</p>
        </li>

        <li className="bg-white p-4 rounded shadow-sm">
          <h3 className="font-semibold">Laminaat en vloeren</h3>
          <p className="text-sm">Vakkundig leggen van laminaat en afwerking van dorpels en plinten voor een strakke look.</p>
        </li>

        <li className="bg-white p-4 rounded shadow-sm">
          <h3 className="font-semibold">Schilderwerk</h3>
          <p className="text-sm">Binnen- en buitenschilderwerk: egaliseren, primers en dekkende afwerking met duurzame verf.</p>
        </li>

        <li className="bg-white p-4 rounded shadow-sm">
          <h3 className="font-semibold">Tegelwerk</h3>
          <p className="text-sm">Wand- en vloertegels, voegwerk en waterdichte oplossingen voor natte ruimtes.</p>
        </li>

        <li className="bg-white p-4 rounded shadow-sm">
          <h3 className="font-semibold">Trappen</h3>
          <p className="text-sm">Traprenovaties, bekleding en reparaties voor een veilige en representatieve trap.</p>
        </li>
      </ul>

          <p className="mt-8">Wil je een offerte of voorbeelden van afgeronde projecten? <a className="text-beige-500 underline" href="/contact">Neem contact op</a> – we sturen foto&apos;s en een heldere prijsopgave.</p>
    </div>
  )
}
