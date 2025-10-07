export const metadata = {
  title: 'Wie zijn wij - Sisto Realisatie',
}

export default function WieZijnWij() {
  return (
    <main className="w-full min-h-screen flex justify-center py-4">
      <section className="w-full max-w-2xl bg-white min-h-[85vh] p-8 sm:p-12 mx-4 sm:mx-0 shadow-lg">
        <div className="text-center space-y-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--accent)]">Wie zijn wij</h2>
            <div className="w-24 h-1 bg-[var(--accent)] mx-auto rounded-full mb-8"></div>
          </div>
          
          <div className="space-y-8">
            <p className="text-base sm:text-lg leading-relaxed">
              Sisto Realisatie is een kleinschalig aannemersbedrijf gespecialiseerd in kwaliteitswerk voor 
              particuliere woningen. We geloven in persoonlijk contact, heldere offertes en nette afwerking.
            </p>

            <div className="border-t border-b border-[var(--beige-100)] py-8">
              <h3 className="font-semibold text-xl mb-6 text-[var(--accent)]">Onze aanpak</h3>
              <div className="space-y-4">
                <p className="text-base leading-relaxed">
                  • Persoonlijk advies en duidelijke communicatie
                </p>
                <p className="text-base leading-relaxed">
                  • Transparante prijzen zonder verborgen kosten
                </p>
                <p className="text-base leading-relaxed">
                  • Schone werkomgeving en oplevering met nazorg
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg leading-relaxed">
              Onze klanten waarderen ons om betrouwbaarheid en vakmanschap. Wil je referenties of foto&apos;s 
              van afgeronde klussen? Vraag ernaar via het contactformulier.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}