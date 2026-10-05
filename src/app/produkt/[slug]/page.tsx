import { notFound } from "next/navigation";
import { products } from "../../../data/products";
import { ProductDetail } from "../../../components/ProductDetail";
import { ProductCard } from "../../../components/ProductCard";
import { meta, href, absolute } from "../../../lib/site";
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = products.find((p) => p.slug === slug);
  return p
    ? meta(`${p.name} in ${p.color}`, p.description, `produkt/${slug}/`)
    : {};
}
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();
  return (
    <>
      <div className="breadcrumb">
        <a href={href()}>Startseite</a>
        <span>/</span>
        <a href={href("kollektion/")}>Kollektion</a>
        <span>/</span>
        <span>{product.name}</span>
      </div>
      <section className="product-detail">
        <div className="detail-image">
          <img
            src={href(`images/${product.image}-960.webp`)}
            srcSet={`${href(`images/${product.image}-480.webp`)} 480w, ${href(`images/${product.image}-960.webp`)} 960w, ${href(`images/${product.image}-1536.webp`)} 1254w`}
            sizes="(max-width:760px) 100vw, 55vw"
            width={1254}
            height={1254}
            alt={`${product.name} in ${product.color}, freigestellte generierte Produktstudie`}
            fetchPriority="high"
          />
          <span>PRODUKTSTUDIE · FIKTIVES SORTIMENT</span>
        </div>
        <ProductDetail product={product} />
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PASST GUT ZUSAMMEN</p>
            <h2>In guter Gesellschaft.</h2>
          </div>
        </div>
        <div className="product-grid recommendations">
          {products
            .filter((p) => p.slug !== slug)
            .map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: `${product.name} — fiktives Demo-Produkt`,
            description:
              product.description + " Portfolio-Demo, nicht kaufbar.",
            image: absolute(`images/${product.image}-960.webp`),
            brand: { "@type": "Brand", name: "TON & FORM (fiktiv)" },
            material: "Steinzeug",
            color: product.color,
          }),
        }}
      />
    </>
  );
}
