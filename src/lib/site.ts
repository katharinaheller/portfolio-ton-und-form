import type { Metadata } from "next";
export const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const origin =
  process.env.SITE_ORIGIN || "https://katharinaheller.github.io";
export const href = (path = "") => `${base}/${path.replace(/^\//, "")}`;
export const absolute = (path = "") => `${origin}${href(path)}`;
export const money = (cents: number) =>
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    cents / 100,
  );
export function meta(title: string, description: string, path = ""): Metadata {
  return {
    title: `${title} — TON & FORM`,
    description,
    alternates: { canonical: absolute(path) },
    openGraph: {
      title,
      description,
      url: absolute(path),
      type: "website",
      locale: "de_DE",
      images: [{ url: absolute("social.jpg"), width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absolute("social.jpg")],
    },
  };
}
