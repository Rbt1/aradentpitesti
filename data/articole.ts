export interface Articol {
  slug: string
  title: string
  metaDescription: string
  excerpt: string
  date: string
  continut: string
}

export const articole: Articol[] = [
  {
    slug: 'cat-costa-implant-dentar-romania-2026',
    title: 'Cat costa un implant dentar in Romania in 2026? Tot adevarul',
    metaDescription: 'Afla ce factori influenteaza pretul unui implant dentar in Romania in 2026 si cum sa eviti sa platesti de doua ori pentru un implant esuat.',
    excerpt: 'Pretul unui implant dentar variaza in functie de brand, complexitate si etape incluse. Iata ce trebuie sa intelegi inainte sa te decizi.',
    date: '2026-06-20',
    continut: `
      <p>Daca ai cautat pe Google "pret implant dentar", probabil ai gasit cifre diferite la fiecare clinica — si asta e confuz. Hai sa clarificam exact de ce variaza preturile si ce ar trebui sa te intereseze cu adevarat.</p>

      <h2>De ce nu exista un pret fix</h2>
      <p>Implantul dentar nu este un produs standard, ca un telefon cu pret afisat pe eticheta. Costul final depinde de mai multi factori care difera de la pacient la pacient.</p>

      <h2>1. Brandul implantului</h2>
      <p>Exista implanturi standard, medii si premium. Diferenta de pret intre un implant de baza si unul premium poate fi semnificativa — dar brandul mai scump nu inseamna automat rezultat mai bun pentru cazul tau specific. Sistemul folosit trebuie sa fie potrivit situatiei tale clinice, nu neaparat cel mai costisitor.</p>

      <h2>2. Complexitatea cazului</h2>
      <p>Un implant simplu, plasat intr-un os sanatos, costa diferit fata de un caz care necesita extractie prealabila, aditie osoasa sau tratamente pregatitoare. Cu cat cazul e mai simplu, cu atat costul total e mai mic — un motiv suplimentar sa nu amani tratamentul, pentru ca dintii lipsa netratati duc la resorbtie osoasa, care complica si scumpeste tratamentul ulterior.</p>

      <h2>3. Etapele incluse in pret</h2>
      <p>Pretul "implantului" pe care il vezi pe multe site-uri se refera strict la surubul din titan. Tratamentul complet include si:</p>
      <ul>
        <li>Bontul protetic</li>
        <li>Coroana definitiva</li>
        <li>Radiografia si CT-ul</li>
        <li>Eventualele proceduri pregatitoare — tratament carii, igienizare profesionala</li>
      </ul>
      <p>Cand compari preturi intre clinici, intreaba intotdeauna <strong>ce este inclus</strong> — altfel compari mere cu pere.</p>

      <h2>4. Experienta medicului</h2>
      <p>Un medic specializat in chirurgie dento-alveolara, cu protocoale clare si experienta documentata, ofera o siguranta diferita fata de un cabinet generalist care face implanturi ocazional. Aceasta nu e doar o variabila de pret — e o variabila de risc.</p>

      <h2>Ce gasesti pe piata in 2026</h2>
      <p>Fara sa dam cifre exacte care nu ar reflecta cazul tau specific, piata romaneasca a implantologiei arata astfel:</p>
      <ul>
        <li>Implanturile <strong>standard</strong> sunt cea mai accesibila optiune, cu rata buna de succes pentru cazuri simple</li>
        <li>Implanturile de <strong>gama medie</strong> (precum Dentium, pe care il folosim la ARA DENT STUDIO) ofera un echilibru excelent intre calitate documentata clinic si cost</li>
        <li>Implanturile <strong>premium</strong> (Straumann, Nobel Biocare) sunt cele mai costisitoare, dar diferenta de rezultat clinic fata de gama medie e adesea minima pentru cazurile standard</li>
      </ul>

      <h2>Intrebarea care conteaza mai mult decat pretul</h2>
      <p>Inainte sa te decizi pe baza celui mai mic pret gasit online, pune-ti o intrebare mai importanta: <strong>ce se intampla daca implantul esueaza?</strong></p>
      <p>Un implant ieftin, plasat fara evaluare corecta — radiografie, CT, pregatire pre-chirurgicala a cavitatii orale — are risc mai mare de esec. Si atunci ajungi sa platesti de doua ori: o data pentru implantul esuat, o data pentru cel de refacere.</p>
      <p>De aceea, la ARA DENT STUDIO, fiecare tratament cu implant include:</p>
      <ul>
        <li>Consultatie gratuita</li>
        <li>Radiografie panoramica gratuita</li>
        <li>CT dentar gratuit</li>
        <li>Evaluare completa a cavitatii orale inainte de interventie</li>
      </ul>
      <p>Nu pentru ca vrem sa "vindem mai mult" — ci pentru ca aceasta este diferenta dintre un implant care dureaza 20 de ani si unul care esueaza in primul an.</p>

      <h2>Cum afli pretul exact pentru cazul tau</h2>
      <p>Singurul mod corect de a afla cat te costa implantul tau este o evaluare clinica reala — nu o estimare generica de pe internet. La consultatia gratuita, Dr. Robert Lungu analizeaza osul tau, starea generala orala si iti ofera un plan de tratament transparent, cu toate etapele incluse, fara costuri ascunse.</p>
    `,
  },
]

const MONTHS_RO = [
  'Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie',
  'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie',
]

export function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number)
  return `${day} ${MONTHS_RO[month - 1]} ${year}`
}
