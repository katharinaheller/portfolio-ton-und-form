"use client";
import { useState } from "react";
import { useCart } from "./CartProvider";
import { subtotal, shipping } from "../lib/cart";
import { findVariant } from "../data/products";
import { href, money } from "../lib/site";
export function Checkout() {
  const { items, dispatch, ready } = useCart();
  const [country, setCountry] = useState("DE");
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState("");
  const [complete, setComplete] = useState<number | null>(null);
  const sum = subtotal(items);
  const total = sum + shipping(sum, country);
  if (complete !== null)
    return (
      <div className="checkout-complete" role="status">
        <span aria-hidden="true">✓</span>
        <p className="eyebrow">DEMO ERFOLGREICH ABGESCHLOSSEN</p>
        <h2>
          Ein guter Moment.
          <br />
          Auch ohne Paket.
        </h2>
        <p>
          Die Beispielbestellung über {money(complete)} ist abgeschlossen. Es
          wurde nichts bestellt, nichts bezahlt und nichts versendet. Ihr
          Demo-Warenkorb wurde geleert.
        </p>
        <a className="button" href={href("kollektion/")}>
          Zurück zur Kollektion ↗
        </a>
      </div>
    );
  if (!ready) return <p>Warenkorb wird geladen …</p>;
  if (!items.length)
    return (
      <div className="empty-state">
        <h2>Ihr Warenkorb ist leer.</h2>
        <a className="button" href={href("kollektion/")}>
          Objekte entdecken ↗
        </a>
      </div>
    );
  return (
    <form
      className="checkout-layout"
      onSubmit={(e) => {
        e.preventDefault();
        if (!confirmed) {
          setError(
            "Bitte bestätigen Sie, dass dies ausschließlich eine Demo ist.",
          );
          document.getElementById("demo-confirm")?.focus();
          return;
        }
        setComplete(total);
        dispatch({ type: "clear" });
      }}
    >
      <div>
        <p className="demo-note prominent">
          Demo-Kasse: Bitte keine echten Personen-, Adress- oder Zahlungsdaten
          eingeben. Es stehen ausschließlich feste Beispieladressen zur Auswahl.
        </p>
        <fieldset className="address-choice">
          <legend>1. Beispiel-Lieferadresse</legend>
          <label>
            <input
              type="radio"
              name="country"
              value="DE"
              checked={country === "DE"}
              onChange={() => setCountry("DE")}
            />
            <span>
              <strong>Demo-Person · Deutschland</strong>
              <br />
              Fiktive Beispielstraße 1<br />
              00000 Beispielstadt
            </span>
          </label>
          <label>
            <input
              type="radio"
              name="country"
              value="AT"
              checked={country === "AT"}
              onChange={() => setCountry("AT")}
            />
            <span>
              <strong>Demo-Person · Österreich</strong>
              <br />
              Fiktiver Beispielweg 2<br />
              0000 Beispielort
            </span>
          </label>
        </fieldset>
        <div className="payment-demo">
          <h2>2. Bezahlung</h2>
          <p>Demo-Zahlung · 0 € werden belastet.</p>
          <small>
            Keine Zahlungsdaten, keine Verbindung zu einem Zahlungsanbieter.
          </small>
        </div>
        <label className="checkbox-label">
          <input
            type="checkbox"
            id="demo-confirm"
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
          />
          <span>
            Ich verstehe, dass keine echte Bestellung und kein Kaufvertrag
            entstehen.
          </span>
        </label>
        <p className="form-error" role="alert">
          {error}
        </p>
      </div>
      <aside className="order-summary">
        <h2>Ihre Auswahl</h2>
        {items.map((item) => {
          const data = findVariant(item.sku);
          return data ? (
            <div className="checkout-line" key={item.sku}>
              <span>
                {item.quantity} × {data.product.name}
                <small>{data.variant.label}</small>
              </span>
              <span>{money(data.variant.price * item.quantity)}</span>
            </div>
          ) : null;
        })}
        <dl>
          <div>
            <dt>Zwischensumme</dt>
            <dd>{money(sum)}</dd>
          </div>
          <div>
            <dt>Versand ({country})</dt>
            <dd>
              {shipping(sum, country)
                ? money(shipping(sum, country))
                : "Kostenfrei"}
            </dd>
          </div>
          <div className="total">
            <dt>Demo-Gesamtsumme</dt>
            <dd>{money(total)}</dd>
          </div>
        </dl>
        <p>Inkl. angenommener USt. · Fiktiver Betrag</p>
        <button className="button" type="submit">
          Demobestellung abschließen →
        </button>
        <a className="text-link" href={href("warenkorb/")}>
          Warenkorb bearbeiten
        </a>
      </aside>
    </form>
  );
}
