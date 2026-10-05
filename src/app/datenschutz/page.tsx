import { meta } from "../../lib/site";
export const metadata = meta(
  "Datenschutz-Demo",
  "Datenschutz-Demo für TON & FORM. Informationen zum fiktiven Portfolio-Projekt, zur technischen Umsetzung und zu den Grenzen der Demonstration.",
  "datenschutz/",
);
export default function Legal() {
  return (
    <article className="legal">
      <h1>Datenschutz-Demo</h1>
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
      <h2>Technisch sparsame Umsetzung</h2>
      <p>
        Die Website lädt Schriften, Bilder und Skripte vom eigenen Hosting. Es
        gibt keine Werbetracker, keine eingebetteten Kartendienste, keine
        automatisch geladenen externen Videos und keine Analysewerkzeuge. Ein
        Einwilligungsbanner für solche Technologien wird deshalb nicht
        angezeigt.
      </p>
      <h2>Hosting und technische Zugriffsdaten</h2>
      <p>
        Die Veröffentlichung erfolgt über GitHub Pages. Beim Abruf einer Seite
        verarbeitet der Hostinganbieter technisch notwendige Verbindungsdaten,
        darunter die IP-Adresse und Angaben zur Anfrage. Umfang und Aufbewahrung
        richten sich nach dessen tatsächlichen Betriebsbedingungen. Weitere
        Informationen finden Sie in der{" "}
        <a
          href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
          rel="noreferrer"
        >
          Datenschutzerklärung von GitHub
        </a>
        .
      </p>
      <h2>Eingaben und Interaktionen</h2>
      <p>
        Formulare werden ausschließlich im Browser geprüft. Es gibt keinen
        Versand an einen Server, keine E-Mail-Benachrichtigungen und keine
        dauerhafte Speicherung von Formulareingaben. Bitte verwenden Sie nur
        Beispieldaten. Produktdemos arbeiten mit vorbereiteten fiktiven Daten.
      </p>
      <h2>Warenkorb in dieser Browsersitzung</h2>
      <p>
        Nach einer Warenkorbaktion werden ausschließlich Produktvarianten und
        Mengen unter dem Schlüssel ton-form-cart in sessionStorage gespeichert.
        Diese technisch zur Demo-Funktion gehörenden Daten bleiben auf Ihrem
        Gerät, werden nicht an uns übermittelt und beim Abschluss der
        Demobestellung entfernt. Die Speicherung endet außerdem mit der
        Browsersitzung. Bei blockiertem Speicher funktioniert der Warenkorb
        innerhalb der geöffneten Seite.
      </p>
      <h2>Keine Rechtsgarantie</h2>
      <p>
        Diese Erläuterung beschreibt die technische Demo und ist kein rechtlich
        geprüfter Datenschutztext für einen realen Geschäftsbetrieb. Angaben zur
        tatsächlich verantwortlichen Person, Kontaktmöglichkeiten und
        gegebenenfalls weitere Informationen müssen für den konkreten Einsatz
        ergänzt und geprüft werden.
      </p>
      <p>Stand: Oktober 2026.</p>
    </article>
  );
}
