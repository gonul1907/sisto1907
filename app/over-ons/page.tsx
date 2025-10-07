import React from 'react';

export default function AboutUs() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
  <h1 className="text-4xl font-bold mb-4">Over Ons</h1>
      <p className="text-lg mb-8 max-w-xl text-center" style={{ color: '#736635' }}>
        Vanaf dag één staat bij Sisto Realisatie kwaliteit en klanttevredenheid voorop. We zijn niet het grootste bedrijf, maar wél eentje dat zich onderscheidt door vakwerk, betrouwbaarheid en een persoonlijke benadering.
      </p>
      <div className="max-w-xl text-left mt-4" style={{ color: '#736635' }}>
        <strong>Onze kernwaarden:</strong><br />
        • Vakmanschap – Elk project is voor ons belangrijk, van het kleinste reparatiewerk tot grotere renovaties. We zorgen dat alles er strak uitziet, duurzaam is en klopt in afwerking.<br />
        • Betrouwbaarheid – Afspraken zijn afspraken. We komen op tijd, houden ons aan de planning waar mogelijk, en communiceren wanneer iets anders zou lopen.<br />
        • Duidelijkheid – Geen verborgen kosten, heldere offerte, goede uitleg over de mogelijkheden en keuzes. Jij weet altijd waar je aan toe bent.<br />
        • Servicegerichtheid – We luisteren naar jouw wensen en denken mee, ook als het gaat om oplossingen voor lastige hoeken, bijzondere materialen of speciale afwerkingen.
      </div>
      <div className="max-w-xl text-left mt-6" style={{ color: '#736635' }}>
  <strong style={{ color: '#736635', fontSize: '1.25rem' }}>Wie zijn wij</strong><br />
        Bij Sisto Realisatie draait alles om vakmanschap, betrouwbaarheid en oog voor detail. Met jarenlange ervaring in interieur- en renovatiewerk helpen wij zowel particulieren als kleine bedrijven bij het realiseren van hun woon- of werkdromen.<br />
        Of het nu gaat om schilderwerk, tegelzetten, stukadoren, het leggen van laminaatvloeren of het renoveren van trappen - wij beheersen de technieken en blijven continu leren om de nieuwste materialen en methodes toe te passen. Ieder project benaderen we met dezelfde toewijding: jouw ruimte mooier maken, en zorgen dat je er nog jarenlang van kunt genieten.
      </div>
    </main>
  );
}
