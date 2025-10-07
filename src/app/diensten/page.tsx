export const metadata = {
  title: 'Diensten - Sisto Realisatie',
}

export default function Diensten() {
  return (
    <main className="w-full min-h-screen flex justify-center py-4">
      <section className="w-full max-w-2xl bg-white min-h-[85vh] p-8 sm:p-12 mx-4 sm:mx-0 shadow-lg">
        <div className="text-center space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">Onze diensten</h2>
            <p className="mb-12 text-base sm:text-lg leading-relaxed">
              We bieden een breed scala aan vakmanschap voor particuliere en kleinschalige zakelijke opdrachten. 
              Hieronder vind je een overzicht van onze belangrijkste diensten.
            </p>
          </div>

          <div className="space-y-8">
            <div className="border-b border-[var(--beige-100)] pb-6">
              <h3 className="font-semibold text-xl mb-3 text-[var(--accent)]">Badkamers en toiletten</h3>
              <p className="text-base leading-relaxed">
                Volledige renovaties of kleine aanpassingen: tegelen, kitwerk, sanitair aansluiten en afwerking.
              </p>
            </div>

            <div className="border-b border-[var(--beige-100)] pb-6">
              <h3 className="font-semibold text-xl mb-3 text-[var(--accent)]">Laminaat en vloeren</h3>
              <p className="text-base leading-relaxed">
                Vakkundig leggen van laminaat en afwerking van dorpels en plinten voor een strakke look.
              </p>
            </div>

            <div className="border-b border-[var(--beige-100)] pb-6">
              <h3 className="font-semibold text-xl mb-3 text-[var(--accent)]">Schilderwerk</h3>
              <p className="text-base leading-relaxed">
                Binnen- en buitenschilderwerk: egaliseren, primers en dekkende afwerking met duurzame verf.
              </p>
            </div>

            <div className="border-b border-[var(--beige-100)] pb-6">
              <h3 className="font-semibold text-xl mb-3 text-[var(--accent)]">Tegelwerk</h3>
              <p className="text-base leading-relaxed">
                Wand- en vloertegels, voegwerk en waterdichte oplossingen voor natte ruimtes.
              </p>
            </div>

            <div className="border-b border-[var(--beige-100)] pb-6">
              <h3 className="font-semibold text-xl mb-3 text-[var(--accent)]">Trappen</h3>
              <p className="text-base leading-relaxed">
                Traprenovaties, bekleding en reparaties voor een veilige en representatieve trap.
              </p>
            </div>
          </div>

          <div className="pt-8">
            <p className="text-base sm:text-lg leading-relaxed">
              Wil je een offerte of voorbeelden van afgeronde projecten? 
              <a className="text-[var(--accent)] underline font-semibold" href="/contact"> Neem contact op</a> — 
              we sturen foto&apos;s en een heldere prijsopgave.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
