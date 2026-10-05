"use client";
import { useCart } from "./CartProvider";
import { findVariant } from "../data/products";
import { subtotal, shipping } from "../lib/cart";
import { href, money } from "../lib/site";
export function Cart() {
  const { items, dispatch, ready } = useCart();
  const sum = subtotal(items);
  if (!ready) return <p role="status">Warenkorb wird geladen …</p>;
  if (!items.length)
    return (
      <div className="empty-state">
        <span aria-hidden="true">○</span>
        <h2>Platz für etwas Schönes.</h2>
        <p>
          Ihr Warenkorb ist noch leer. Entdecken Sie Ihre neuen
          Alltagsbegleiter.
        </p>
        <a className="button" href={href("kollektion/")}>
          Zur Kollektion ↗
        </a>
      </div>
    );
  return (
    <div className="cart-layout">
      <div className="cart-items">
        {items.map((item) => {
          const data = findVariant(item.sku);
          if (!data) return null;
          const { product, variant } = data;
          return (
            <article className="cart-item" key={item.sku}>
              <a href={href(`produkt/${product.slug}/`)}>
                <img
                  src={href(`images/${product.image}-480.webp`)}
                  width={160}
                  height={160}
                  alt={`${product.name} in ${product.color}`}
                />
              </a>
              <div>
                <a href={href(`produkt/${product.slug}/`)}>
                  <h2>{product.name}</h2>
                </a>
                <p>
                  {product.color} · {variant.label}
                </p>
                <label htmlFor={item.sku}>Anzahl</label>
                <select
                  id={item.sku}
                  value={item.quantity}
                  onChange={(e) =>
                    dispatch({
                      type: "quantity",
                      sku: item.sku,
                      quantity: Number(e.target.value),
                    })
                  }
                >
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1}>{i + 1}</option>
                  ))}
                </select>
                <button
                  className="text-button remove"
                  onClick={() => dispatch({ type: "remove", sku: item.sku })}
                >
                  Entfernen
                  <span className="sr-only">
                    : {product.name}, {variant.label}
                  </span>
                </button>
              </div>
              <strong>{money(variant.price * item.quantity)}</strong>
            </article>
          );
        })}
        <a className="text-link" href={href("kollektion/")}>
          ← Weiter stöbern
        </a>
      </div>
      <aside className="order-summary">
        <h2>Ihr Warenkorb</h2>
        <dl>
          <div>
            <dt>Zwischensumme</dt>
            <dd>{money(sum)}</dd>
          </div>
          <div>
            <dt>Versand nach Deutschland</dt>
            <dd>{shipping(sum) === 0 ? "Kostenfrei" : money(shipping(sum))}</dd>
          </div>
          <div className="total">
            <dt>Gesamtsumme</dt>
            <dd>{money(sum + shipping(sum))}</dd>
          </div>
        </dl>
        <p>Inkl. angenommener USt. · Fiktive Preise</p>
        {sum < 8000 && (
          <p>
            Noch {money(8000 - sum)} bis zum kostenlosen Versand in Deutschland.
          </p>
        )}
        <a className="button" href={href("kasse/")}>
          Weiter zur Demo-Kasse →
        </a>
        <p className="demo-note">
          Keine echte Bestellung. Keine Zahlung. Der Warenkorb bleibt nur für
          diese Browsersitzung gespeichert.
        </p>
      </aside>
    </div>
  );
}
