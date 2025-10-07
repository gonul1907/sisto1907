export default function Home() {
  return (
    <main className="w-full flex justify-center">
      <section className="w-full max-w-6xl px-6 lg:px-8 py-16">
        <div className="bg-white/95 backdrop-blur card rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-stretch">
          {/* Left: content */}
          <div className="p-8 lg:p-16 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">Sisto Realisatie</h1>
            <p className="mb-6 text-sm sm:text-base text-gray-700">Lokale vakman voor traprenovaties, tegelwerk, schilderwerk en vloeren. We leveren maatwerk met oog voor detail — nette afwerking, duidelijke communicatie en transparante offertes.</p>

            <ul className="mb-6 text-sm sm:text-base list-disc ml-5 space-y-2 text-gray-700">
              <li>Persoonlijk contact en heldere planning</li>
              <li>Vakkundig en netjes uitgevoerd werk</li>
              <li>Relevante foto&apos;s van afgeronde projecten op aanvraag</li>
            </ul>

            <div className="flex flex-wrap gap-3">
              <a href="/diensten" className="inline-block px-6 py-3 rounded bg-[var(--accent)] text-white font-semibold shadow-sm hover:brightness-95">Onze diensten</a>
              <a href="/contact" className="inline-block px-6 py-3 rounded border border-gray-200 text-gray-800 hover:bg-gray-50">Contact</a>
            </div>
          </div>

          {/* Right: image / hero */}
          <div className="h-56 lg:h-auto bg-gray-50 flex items-center justify-center">
            <img src="/images/hero-placeholder.svg" alt="Project voorbeeld" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </main>
  )
}
