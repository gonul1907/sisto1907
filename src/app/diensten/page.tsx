export const metadata = {
  title: 'Diensten - Sisto Realisatie',
}

export default function Diensten() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-5xl">
        <div className="bg-white/95 backdrop-blur card rounded-lg p-6 sm:p-10">
          <h2 className="text-3xl font-bold mb-6">Onze diensten</h2>
          <p className="mb-8">We bieden een breed scala aan vakmanschap voor particuliere en kleinschalige zakelijke opdrachten. Hieronder vind je een overzicht van onze belangrijkste diensten.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">Badkamers en toiletten</h3>
            <p className="text-sm">Volledige renovaties of kleine aanpassingen: tegelen, kitwerk, sanitair aansluiten en afwerking.</p>
          </article>

          <article className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">Laminaat en vloeren</h3>
            <p className="text-sm">Vakkundig leggen van laminaat en afwerking van dorpels en plinten voor een strakke look.</p>
          </article>

          <article className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">Schilderwerk</h3>
            <p className="text-sm">Binnen- en buitenschilderwerk: egaliseren, primers en dekkende afwerking met duurzame verf.</p>
          </article>

          <article className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">Tegelwerk</h3>
            <p className="text-sm">Wand- en vloertegels, voegwerk en waterdichte oplossingen voor natte ruimtes.</p>
          </article>

          <article className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold mb-2">Trappen</h3>
            <p className="text-sm">Traprenovaties, bekleding en reparaties voor een veilige en representatieve trap.</p>
          </article>
          </div>

          <p className="mt-10">Wil je een offerte of voorbeelden van afgeronde projecten? <a className="text-beige-500 underline" href="/contact">Neem contact op</a> — we sturen foto&apos;s en een heldere prijsopgave.</p>
        </div>
      </div>
    </div>
  )
}
