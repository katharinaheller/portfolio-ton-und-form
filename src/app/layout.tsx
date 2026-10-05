import type { ReactNode } from "react";
import localFont from "next/font/local";
import { CartProvider } from "../components/CartProvider";
import { Header } from "../components/Header";
import { href } from "../lib/site";
import "./globals.css";
const sans = localFont({
  src: "../../public/fonts/sans.woff2",
  display: "swap",
  variable: "--font-sans",
});
const serif = localFont({
  src: "../../public/fonts/serif.woff2",
  display: "swap",
  variable: "--font-serif",
});
export const metadata = { icons: { icon: href("favicon.svg") } };
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <a className="skip" href="#inhalt">
          Zum Inhalt
        </a>
        <CartProvider>
          <Header />
          <main id="inhalt">{children}</main>
        </CartProvider>
        <footer>
          <div className="footer-main">
            <div>
              <a className="footer-logo" href={href()}>
                TON & FORM
              </a>
              <p>
                Lieblingsstücke.
                <br />
                Für jeden Tag.
              </p>
            </div>
            <div>
              <span>ENTDECKEN</span>
              <a href={href("kollektion/")}>Die Kollektion</a>
              <a href={href("unsere-geschichte/")}>Unsere Geschichte</a>
            </div>
            <div>
              <span>GUT ZU WISSEN</span>
              <a href={href("versand-retouren/")}>Versand & Rückgabe</a>
              <a href={href("fragen/")}>Häufige Fragen</a>
            </div>
            <div>
              <span>BEWUSST EINFACH.</span>
              <p>
                Ein Demo-Shop ohne Tracking,
                <br />
                ohne Newsletter und ohne echte Zahlung.
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              Portfolio-Demoprojekt – Unternehmen und Geschäftsdaten sind
              fiktiv.
            </p>
            <a href={href("impressum/")}>Impressum-Demo</a>
            <a href={href("datenschutz/")}>Datenschutz-Demo</a>
            <span>© 2026</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
