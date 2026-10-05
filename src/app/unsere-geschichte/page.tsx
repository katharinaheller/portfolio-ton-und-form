import { meta, href } from "../../lib/site";
export const metadata = meta(
  "Unsere Geschichte – Dinge für jeden Tag",
  "Die Idee hinter TON & FORM: wenige gut gedachte Formen, warme Glasuren und Freude am alltäglichen Gebrauch. Eine fiktive deutsche Keramikmarke.",
  "unsere-geschichte/",
);
export default function Story() {
  return (
    <>
      <section className="page-intro">
        <p className="eyebrow">DIE IDEE HINTER TON & FORM</p>
        <h1>
          Das Gute liegt
          <br />
          oft im <em>Einfachen.</em>
        </h1>
        <p>
          Eine Tasse, die gut in der Hand liegt. Eine Schale, die jeden Tag auf
          den Tisch kommt. Damit beginnt unsere Geschichte.
        </p>
      </section>
      <section className="brand-story">
        <img
          src={href("images/collection-1536.webp")}
          width={1536}
          height={1024}
          alt="Generiertes Stillleben der fiktiven TON & FORM Kollektion in warmen Erdtönen"
        />
        <div>
          <h2>
            Wenige Formen.
            <br />
            Viele <em>Lieblingsmomente.</em>
          </h2>
          <p>
            TON & FORM ist als kleine Keramikmarke aus dem Westerwald gedacht.
            Die erste Kollektion konzentriert sich auf vier Objekte: Tasse,
            Schale, Teller und Vase. Jedes hat eine klare Aufgabe – und genug
            Charakter, um gern benutzt zu werden.
          </p>
          <p>
            Die Palette stammt aus dem Material: Hafer, Terrakotta, Kreide und
            Salbei. Ruhige Farben, die zusammenpassen, ohne gleich sein zu
            müssen.
          </p>
          <p>
            Im Markenkonzept entstehen kleine Serien aus Steinzeug. Natürliche
            Unterschiede in Glasur und Oberfläche gehören zur Idee. Das
            Sortiment bleibt überschaubar; die Formen sollen über wechselnde
            Trends hinaus funktionieren.
          </p>
          <aside className="demo-note">
            TON & FORM ist ein Portfolio-Demoprojekt. Es gibt keine reale
            Manufaktur, keine tatsächliche Produktion und keine käuflichen
            Produkte. Alle Bilder sind eigens generierte Konzeptdarstellungen;
            Herkunfts- und Materialangaben gehören zum fiktiven Markenentwurf.
          </aside>
          <a className="text-link" href={href("kollektion/")}>
            Die erste Kollektion entdecken ↗
          </a>
        </div>
      </section>
    </>
  );
}
