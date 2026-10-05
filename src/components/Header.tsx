"use client";
import { useState, useEffect } from "react";
import { href } from "../lib/site";
import { useCart } from "./CartProvider";
export function Header() {
  const { items } = useCart();
  const [open, setOpen] = useState(false);
  const count = items.reduce((s, i) => s + i.quantity, 0);
  useEffect(() => {
    const f = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        if(document.activeElement?.closest('#navigation')) document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus();
      }
    };
    window.addEventListener("keydown", f);
    return () => window.removeEventListener("keydown", f);
  }, []);
  return (
    <>
      <div className="announcement">
        Für die kleinen Rituale. <span>·</span> Versandfrei ab 80 € in
        Deutschland <span>·</span> Demo-Shop
      </div>
      <header className="header">
        <a className="logo" href={href()} aria-label="TON und FORM Startseite">
          TON <span>&</span> FORM<i>KERAMIK FÜR JEDEN TAG</i>
        </a>
        <button
          className="menu-toggle"
          aria-label="Menü öffnen"
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          Menü <span aria-hidden="true">☰</span>
        </button>
        <nav
          id="navigation"
          aria-label="Hauptnavigation"
          className={open ? "open" : ""}
        >
          <a href={href("kollektion/")}>Die Kollektion</a>
          <a href={href("kategorie/geschirr/")}>Für den Tisch</a>
          <a href={href("kategorie/wohnobjekte/")}>Für Zuhause</a>
          <a href={href("unsere-geschichte/")}>Unsere Geschichte</a>
        </nav>
        <a
          className="cart-link"
          href={href("warenkorb/")}
          aria-label={`Warenkorb, ${count} Artikel`}
        >
          <svg
            viewBox="0 0 24 24"
            width="21"
            height="21"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            aria-hidden="true"
          >
            <path d="M5 7h14l1 14H4L5 7Z M8 8V6a4 4 0 0 1 8 0v2" />
          </svg>
          <span>({count})</span>
        </a>
      </header>
    </>
  );
}
