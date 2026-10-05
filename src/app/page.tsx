import { meta, href } from "../lib/site";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
export const metadata = meta(
  "Schönes für die kleinen Rituale",
  "TON & FORM – fiktive Keramikmarke für den Alltag. Entdecken Sie Tassen, Schalen, Teller und Vasen in ruhigen Farben. Vollständig bedienbarer Demo-Shop.",
);
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">DIE ERSTE KOLLEKTION · ERDE & ALLTAG</p>
          <h1>
            Für die kleinen
            <br />
            <em>Rituale.</em>
          </h1>
          <p>
            Der erste Kaffee. Ein langer Abend.
            <br />
            Dinge, die bleiben – weil wir sie jeden Tag mögen.
          </p>
          <a className="button" href={href("kollektion/")}>
            Die Kollektion entdecken <span aria-hidden="true">↗</span>
          </a>
          <span className="hero-footnote">
            KLARE FORMEN. EHRLICHE MATERIALIEN.
          </span>
        </div>
        <div className="hero-photo">
          <img
            src={href("images/collection-1536.webp")}
            srcSet={`${href("images/collection-480.webp")} 480w, ${href("images/collection-960.webp")} 960w, ${href("images/collection-1536.webp")} 1536w`}
            sizes="(max-width:760px) 100vw, 60vw"
            width={1536}
            height={1024}
            alt="Stillleben aus Terrakottaschale, heller Vase und Steinzeugtassen im warmen Sonnenlicht; generierte Markenfotografie"
            fetchPriority="high"
          />
          <span className="photo-label">
            TON & FORM
            <br />
            EDITION 01 / 2026
          </span>
        </div>
      </section>
      <div className="brand-values">
        <span>
          <i aria-hidden="true">✳</i> Kleine Serien. Große Alltagsliebe.
        </span>
        <span>
          <i aria-hidden="true">◌</i> Natürliche Farben & ruhige Formen
        </span>
        <span>
          <i aria-hidden="true">↺</i> 30 Tage Rückgabe im Demo-Angebot
        </span>
      </div>
      <section className="section favorites">
        <div className="section-heading">
          <div>
            <p className="eyebrow">OBJEKTE MIT BLEIBEWERT</p>
            <h2>Unsere Alltagslieblinge.</h2>
          </div>
          <a className="text-link" href={href("kollektion/")}>
            Alles entdecken ↗
          </a>
        </div>
        <div className="product-grid">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <p className="catalog-price-note">
          Alle Preise inkl. angenommener USt., zzgl. Versand. Fiktives
          Sortiment.
        </p>
      </section>
      <section className="story-preview">
        <div className="story-image">
          <img
            src={href("images/cup-960.webp")}
            width={960}
            height={960}
            alt="Fein gesprenkelte Glasur einer hellen Steinzeugtasse, generierte Produktstudie"
            loading="lazy"
          />
          <span>
            JEDES DETAIL
            <br />
            EINE BEWUSSTE ENTSCHEIDUNG.
          </span>
        </div>
        <div className="story-copy">
          <p className="eyebrow">VOM MATERIAL ZUM LIEBLINGSSTÜCK</p>
          <h2>
            Nicht für die Vitrine.
            <br />
            <em>Fürs Leben.</em>
          </h2>
          <p>
            Wir mögen Dinge, die man gern in die Hand nimmt. Die nicht perfekt
            gleich aussehen müssen. Und die einen ganz gewöhnlichen Dienstag ein
            bisschen schöner machen.
          </p>
          <a className="text-link" href={href("unsere-geschichte/")}>
            Die Idee hinter TON & FORM ↗
          </a>
        </div>
      </section>
      <section className="category-section">
        <a href={href("kategorie/geschirr/")}>
          <span className="eyebrow">ESSEN. TRINKEN. ZUSAMMENKOMMEN.</span>
          <h2>Für den Tisch.</h2>
          <span className="category-arrow" aria-hidden="true">
            ↗
          </span>
        </a>
        <a href={href("kategorie/wohnobjekte/")}>
          <span className="eyebrow">KLEINE DINGE. GUTE RÄUME.</span>
          <h2>Für Zuhause.</h2>
          <span className="category-arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      </section>
    </>
  );
}
