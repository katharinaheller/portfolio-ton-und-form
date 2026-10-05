import { meta } from "../../lib/site";
import { Cart } from "../../components/Cart";
export const metadata = meta(
  "Ihr Warenkorb",
  "Prüfen Sie Ihre Auswahl, passen Sie Mengen an und starten Sie den klar gekennzeichneten Demo-Checkout. Keine echte Bestellung oder Zahlung.",
  "warenkorb/",
);
export default function CartPage() {
  return (
    <section className="section cart-page">
      <p className="eyebrow">IHRE AUSWAHL</p>
      <h1>
        Für Ihren <em>Alltag.</em>
      </h1>
      <Cart />
    </section>
  );
}
