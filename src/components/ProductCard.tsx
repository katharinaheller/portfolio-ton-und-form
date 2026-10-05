import type { Product } from "../data/products";
import { href, money } from "../lib/site";
export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  return (
    <article className="product-card">
      <a className="product-image" href={href(`produkt/${product.slug}/`)}>
        <img
          src={href(`images/${product.image}-480.webp`)}
          srcSet={`${href(`images/${product.image}-480.webp`)} 480w, ${href(`images/${product.image}-960.webp`)} 960w`}
          sizes="(max-width:600px) 46vw, (max-width:1000px) 44vw, 23vw"
          width={960}
          height={960}
          loading={priority ? "eager" : "lazy"}
          alt={`${product.name} aus Steinzeug in ${product.color}; generierte Produktdarstellung`}
        />
        <span className="product-view">Entdecken ↗</span>
      </a>
      <div className="product-caption">
        <h3>
          <a href={href(`produkt/${product.slug}/`)}>{product.name}</a>
        </h3>
        <span>ab {money(product.variants[0].price)}</span>
      </div>
      <p>{product.color} · Steinzeug</p>
    </article>
  );
}
