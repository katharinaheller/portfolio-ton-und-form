import { meta, href } from "../../lib/site";
export const metadata = meta(
  "Häufige Fragen zu Keramik und Demo-Shop",
  "Antworten zu Größen, Glasuren, Pflege, Warenkorb und Beispielbestellung. Erfahren Sie, was im TON & FORM Demo-Shop funktioniert und was fiktiv ist.",
  "fragen/",
);
export default function Faq() {
  return (
    <section className="legal faq-page">
      <p className="eyebrow">WIR MACHEN ES GERN EINFACH.</p>
      <h1>
        Gute <em>Fragen.</em>
      </h1>
      {[
        [
          "Kann ich die Produkte tatsächlich bestellen?",
          "Nein. Der Shop ist eine Portfolio-Demonstration. Der Warenkorb und der Checkout funktionieren als lokale Simulation; es wird keine Bestellung übermittelt und kein Geld eingezogen.",
        ],
        [
          "Welche Größen gibt es?",
          "Jedes Produkt hat zwei Größen. Auf der Produktseite wählen Sie die Variante; Preis und Maße passen sich sofort an. Die Bilder zeigen jeweils eine gemeinsame Produktstudie, keine maßstabsgetreuen Variantenfotos.",
        ],
        [
          "Sind die Glasuren lebensmittelecht?",
          "Es handelt sich um fiktive Produkte. Für einen tatsächlichen Verkauf wären geeignete Prüfungen und Materialnachweise erforderlich. Diese Demo behauptet keine durchgeführten Prüfungen oder Zertifizierungen.",
        ],
        [
          "Wie pflege ich die Keramik?",
          "Die Produktseiten zeigen beispielhafte Pflegehinweise für das jeweilige Konzept. Für reale Produkte wären die Angaben des tatsächlichen Herstellers maßgeblich.",
        ],
        [
          "Bleibt mein Warenkorb gespeichert?",
          "Nur in dieser Browsersitzung. Wir verwenden sessionStorage ausschließlich für Produktnummern und Mengen. Nach Abschluss der Demo-Bestellung wird der Warenkorb gelöscht.",
        ],
        [
          "Warum gibt es keinen Cookie-Banner?",
          "Die Demo setzt keine Analyse- oder Werbecookies ein. Schriften und Bilder liegen lokal. Die technisch benötigte Warenkorbfunktion wird auf der Datenschutz-Demoseite erklärt.",
        ],
      ].map(([q, a]) => (
        <details key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
      <a className="text-link" href={href("kollektion/")}>
        Zur Kollektion →
      </a>
    </section>
  );
}
