"use client";
import { useState } from "react";
import { products } from "../data/products";
import { ProductCard } from "./ProductCard";
export function Catalog({ category = "all" }: { category?: string }) {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState(category);
  const [color, setColor] = useState("all");
  const [sort, setSort] = useState("default");
  const [limit, setLimit] = useState("all");
  let shown = products.filter(
    (p) =>
      (cat === "all" || p.category === cat) &&
      (color === "all" || p.color === color) &&
      (limit === "all" || p.variants[0].price <= Number(limit)) &&
      `${p.name} ${p.description} ${p.color}`
        .toLocaleLowerCase("de-DE")
        .includes(query.trim().toLocaleLowerCase("de-DE")),
  );
  if (sort === "asc")
    shown = [...shown].sort(
      (a, b) => a.variants[0].price - b.variants[0].price,
    );
  if (sort === "desc")
    shown = [...shown].sort(
      (a, b) => b.variants[0].price - a.variants[0].price,
    );
  return (
    <>
      <div className="catalog-toolbar">
        <div className="search-field">
          <label htmlFor="search">In der Kollektion suchen</label>
          <input
            id="search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Zum Beispiel Tasse oder Salbei"
          />
        </div>
        <div>
          <label htmlFor="category">Kategorie</label>
          <select
            id="category"
            value={cat}
            onChange={(e) => setCat(e.target.value)}
          >
            <option value="all">Alle Objekte</option>
            <option value="geschirr">Für den Tisch</option>
            <option value="wohnobjekte">Für Zuhause</option>
          </select>
        </div>
        <div>
          <label htmlFor="color">Glasur</label>
          <select
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          >
            <option value="all">Alle Glasuren</option>
            {products.map((p) => (
              <option key={p.color}>{p.color}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="price-limit">Preis</label>
          <select
            id="price-limit"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
          >
            <option value="all">Alle Preise</option>
            <option value="3000">Bis 30 €</option>
            <option value="5000">Bis 50 €</option>
          </select>
        </div>
        <div>
          <label htmlFor="sort">Sortieren</label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="default">Unsere Reihenfolge</option>
            <option value="asc">Preis aufsteigend</option>
            <option value="desc">Preis absteigend</option>
          </select>
        </div>
      </div>
      <div className="catalog-meta">
        <p role="status">
          {shown.length} {shown.length === 1 ? "Objekt" : "Objekte"}
        </p>
        <button
          className="text-button"
          onClick={() => {
            setQuery("");
            setCat("all");
            setColor("all");
            setLimit("all");
            setSort("default");
          }}
        >
          Filter zurücksetzen
        </button>
      </div>
      {shown.length ? (
        <div className="product-grid">
          {shown.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>Hier ist es gerade ganz still.</h2>
          <p>
            Für diese Auswahl haben wir kein Objekt. Ändern Sie die Suche oder
            setzen Sie die Filter zurück.
          </p>
        </div>
      )}
    </>
  );
}
