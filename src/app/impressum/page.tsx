import { meta } from "../../lib/site";
export const metadata = meta(
  "Impressum-Demo",
  "Impressum-Demo für TON & FORM. Informationen zum fiktiven Portfolio-Projekt, zur technischen Umsetzung und zu den Grenzen der Demonstration.",
  "impressum/",
);
export default function Legal() {
  return (
    <article className="legal">
      <h1>Impressum-Demo</h1>
      <p>
        <strong>
          Portfolio-Demoprojekt – Unternehmen und Geschäftsdaten sind fiktiv.
        </strong>
      </p>
      <p>
        TON & FORM ist eine eigens entworfene Marke zur Demonstration von
        Webdesign und Webentwicklung. Diese Website stellt kein reales
        Unternehmen, keinen realen Auftraggeber und kein tatsächlich verfügbares
        Angebot dar.
      </p>
      <h2>Zweck dieser Website</h2>
      <p>
        Gezeigt werden Gestaltung, Informationsarchitektur und technische
        Funktionen einer professionellen Website. Leistungen, Produkte,
        Personenrollen, Standorte und Geschäftsdaten gehören zum fiktiven
        Konzept. Es gibt keine echten Referenzkunden, Auszeichnungen oder
        Zertifizierungen.
      </p>
      <h2>Keine realen Geschäftsabschlüsse</h2>
      <p>
        Formulare und andere Abschlussstrecken sind lokale Simulationen. Es
        werden keine Anfragen übermittelt, keine Konten angelegt, keine
        Reservierungen vorgenommen und keine Bestellungen oder Zahlungen
        ausgelöst.
      </p>
      <h2>Bild- und Quellennachweise</h2>
      <p>
        Die verwendeten Markenbilder sind eigens generierte
        Konzeptdarstellungen. Sie dokumentieren keine realen Gebäude, Teams oder
        Produkte. Das Architekturmodell und grafische Elemente wurden eigens
        erstellt. Open-Source-Quellen, Schriften und Lizenztexte sind in
        CREDITS.md und im Ordner licenses des jeweiligen Projekts dokumentiert.
      </p>
      <h2>Hinweis zu Anbieterangaben</h2>
      <p>
        Diese Demoseite ist kein vollständiges rechtliches Anbieterkennzeichen
        der tatsächlichen Portfolio-Betreiberin. Vor einem Einsatz als echte
        Unternehmenswebsite müssen die tatsächlichen Anbieter- und Kontaktdaten
        ergänzt und die Inhalte rechtlich geprüft werden. Es werden bewusst
        keine erfundenen Register-, Steuer- oder Berufsangaben veröffentlicht.
      </p>
    </article>
  );
}
