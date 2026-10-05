import { meta, href } from "../../lib/site";
export const metadata = meta(
  "Versand & Rückgabe – transparente Demo-Konditionen",
  "Beispielkonditionen: Deutschland 4,90 €, ab 80 € frei; Österreich 7,90 €, ab 120 € frei. Fiktive Lieferzeiten und Rückgabeabläufe verständlich erklärt.",
  "versand-retouren/",
);
export default function Shipping() {
  return (
    <section className="legal">
      <p className="eyebrow">GUT ZU WISSEN</p>
      <h1>
        Der Weg zu <em>Ihnen.</em>
      </h1>
      <p className="demo-note">
        Alle folgenden Angaben sind fiktive Shop-Konditionen. Es werden keine
        Waren versendet, keine Kaufverträge geschlossen und keine realen
        Rücksendungen bearbeitet.
      </p>
      <h2>Versand im Shopkonzept</h2>
      <table>
        <caption>Fiktive Versandkosten und Lieferzeiten</caption>
        <thead>
          <tr>
            <th>Liefergebiet</th>
            <th>Versand</th>
            <th>Versandfrei ab</th>
            <th>Lieferzeit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Deutschland</td>
            <td>4,90 €</td>
            <td>80 €</td>
            <td>3–5 Werktage</td>
          </tr>
          <tr>
            <td>Österreich</td>
            <td>7,90 €</td>
            <td>120 €</td>
            <td>4–7 Werktage</td>
          </tr>
        </tbody>
      </table>
      <p>
        Versandkosten werden anhand des Warenwerts und des gewählten
        Beispiel-Lieferlands berechnet. Andere Lieferländer sind in dieser Demo
        nicht vorgesehen.
      </p>
      <h2>Sorgfältig verpackt gedacht</h2>
      <p>
        Das Verpackungskonzept sieht stabile Kartons und schützende
        Papierpolster vor. Eine reale Transportprüfung wäre vor dem
        Produktverkauf erforderlich.
      </p>
      <h2>30 Tage Rückgabe als Beispielangebot</h2>
      <p>
        Im fiktiven Markenkonzept können unbenutzte, unbeschädigte Produkte
        innerhalb von 30 Tagen zurückgegeben werden. Die Rücksendung wäre
        kostenfrei. Diese Darstellung ist kein rechtsverbindliches
        Widerrufsformular oder reales Rückgabeversprechen.
      </p>
      <h2>Was bei einem echten Shop ergänzt werden müsste</h2>
      <p>
        Ein realer Betrieb benötigt unter anderem überprüfte Anbieterangaben,
        verbindliche Lieferbedingungen, eine passende Widerrufsbelehrung und ein
        tatsächliches Verfahren für Reklamationen. Diese Demo ersetzt deren
        Prüfung nicht.
      </p>
      <a className="text-link" href={href("fragen/")}>
        Weitere Antworten ansehen →
      </a>
    </section>
  );
}
