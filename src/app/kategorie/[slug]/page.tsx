import { meta } from "../../../lib/site";
import { Catalog } from "../../../components/Catalog";
export function generateStaticParams() {
  return [{ slug: "geschirr" }, { slug: "wohnobjekte" }];
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return meta(
    slug === "geschirr"
      ? "Für den Tisch – Tassen, Schalen und Teller"
      : "Für Zuhause – skulpturale Vasen",
    slug === "geschirr"
      ? "Steinzeug für die kleinen Rituale: Tassen, Schalen und Teller in Hafer, Terrakotta und Salbei. Fiktive Premium-Keramik mit wählbaren Größen."
      : "Ruhige Formen für gute Räume. Entdecken Sie die Bauchvase in Kreide und zwei Größen. Fiktive Wohnobjekte im TON & FORM Demo-Shop.",
    `kategorie/${slug}/`,
  );
}
export default async function Category({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <>
      <section className="page-intro">
        <p className="eyebrow">DIE KOLLEKTION</p>
        <h1>{slug === "geschirr" ? "Für den Tisch." : "Für Zuhause."}</h1>
        <p>
          {slug === "geschirr"
            ? "Ein guter Kaffee. Ein gemeinsames Essen. Die schönsten Momente sind oft die alltäglichen."
            : "Ein Zweig, ein Lichtstrahl, eine schöne Form. Manchmal braucht ein Raum nicht viel."}
        </p>
      </section>
      <section className="section catalog">
        <Catalog category={slug} />
      </section>
    </>
  );
}
