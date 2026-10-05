import { meta } from "../../lib/site";
import { Checkout } from "../../components/Checkout";
export const metadata = {
  ...meta(
    "Demo-Kasse – keine echte Bestellung",
    "Führen Sie eine Beispielbestellung mit festen Demo-Adressen durch. Keine Eingabe echter Zahlungsdaten, keine Datenübermittlung und kein Kaufvertrag.",
    "kasse/",
  ),
  robots: { index: false, follow: true },
};
export default function CheckoutPage() {
  return (
    <section className="section checkout-page">
      <p className="eyebrow">DEMO-CHECKOUT</p>
      <h1>
        Fast <em>angekommen.</em>
      </h1>
      <Checkout />
    </section>
  );
}
