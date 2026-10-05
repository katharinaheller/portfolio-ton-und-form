import { meta } from "../../lib/site";
import { Catalog } from "../../components/Catalog";
export const metadata = meta(
  "Die Kollektion – Erde & Alltag",
  "Entdecken Sie vier sorgfältig gedachte Keramikobjekte. Nach Kategorie, Glasur und Preis filtern, Größen vergleichen und den Demo-Shop ausprobieren.",
  "kollektion/",
);
export default function Collection() {
  return (
    <>
      <section className="page-intro">
        <p className="eyebrow">EDITION 01 / ERDE & ALLTAG</p>
        <h1>
          Wenige Dinge.
          <br />
          <em>Gut gewählt.</em>
        </h1>
        <p>
          Vier Formen, vier Glasuren und viele gute Momente. Finden Sie Ihr
          neues Lieblingsstück.
        </p>
      </section>
      <section className="section catalog">
        <Catalog />
      </section>
    </>
  );
}
