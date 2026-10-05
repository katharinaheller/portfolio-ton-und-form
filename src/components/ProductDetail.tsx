"use client";
import { useState } from "react";
import type { Product } from "../data/products";
import { useCart } from "./CartProvider";
import { href, money } from "../lib/site";
export function ProductDetail({ product }: { product: Product }) {
  const [selected, setSelected] = useState(0);
  const [message, setMessage] = useState("");
  const { items, dispatch, ready } = useCart();
  const variant = product.variants[selected];
  const qty = items.find((i) => i.sku === variant.sku)?.quantity || 0;
  return (
    <div className="product-config">
      <p className="eyebrow">
        {product.category === "geschirr" ? "FÜR DEN TISCH" : "FÜR ZUHAUSE"} ·{" "}
        {product.color}
      </p>
      <h1>{product.name}</h1>
      <p className="product-subtitle">{product.subtitle}</p>
      <p className="detail-price">{money(variant.price)}</p>
      <p className="tax-note">
        Fiktiver Bruttopreis inkl. USt. ·{" "}
        <a href={href("versand-retouren/")}>zzgl. Versand</a>
      </p>
      <p className="description">{product.description}</p>
      <fieldset className="variants">
        <legend>Größe wählen</legend>
        {product.variants.map((v, i) => (
          <label key={v.sku} className={i === selected ? "chosen" : ""}>
            <input
              type="radio"
              name="variant"
              value={v.sku}
              checked={selected === i}
              onChange={() => {
                setSelected(i);
                setMessage("");
              }}
            />
            {v.label}
          </label>
        ))}
      </fieldset>
      <p className="dimension">{variant.dimensions}</p>
      <button
        className="button add-to-cart"
        disabled={!ready || qty >= 12}
        onClick={() => {
          dispatch({ type: "add", sku: variant.sku });
          setMessage(
            `${product.name} (${variant.label}) wurde dem Warenkorb hinzugefügt.`,
          );
        }}
      >
        {qty >= 12 ? "Maximal 12 Stück pro Variante" : "In den Warenkorb"}{" "}
        <span aria-hidden="true">＋</span>
      </button>
      <p className="cart-message" role="status">
        {message}
      </p>
      {message && (
        <a className="text-link" href={href("warenkorb/")}>
          Zum Warenkorb →
        </a>
      )}
      <div className="product-benefits">
        <span>✳ Kleine Serien im Markenkonzept</span>
        <span>↺ 30 Tage Rückgabe im Demo-Angebot</span>
      </div>
      <details open>
        <summary>Material & Herstellung</summary>
        <p>
          Glasiertes Steinzeug mit matter Oberfläche. Das fiktive
          Sortimentskonzept setzt auf kleine Serien mit natürlichen
          Abweichungen. Bilder und Spezifikationen sind Demo-Inhalte, keine
          Angaben zu tatsächlich hergestellten Produkten.
        </p>
      </details>
      <details>
        <summary>Pflege & Alltag</summary>
        <p>{product.care}</p>
      </details>
      <details>
        <summary>Lieferung & Rückgabe</summary>
        <p>
          Gedachte Lieferzeit: 3–5 Werktage innerhalb Deutschlands. Versand 4,90
          €, ab 80 € frei. Alle Abläufe dienen ausschließlich der
          Shop-Demonstration.
        </p>
        <a className="text-link" href={href("versand-retouren/")}>
          Alle Versandinformationen →
        </a>
      </details>
    </div>
  );
}
