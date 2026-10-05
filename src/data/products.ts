export interface Variant {
  label: string;
  sku: string;
  price: number;
  dimensions: string;
}
export interface Product {
  slug: string;
  name: string;
  subtitle: string;
  category: "geschirr" | "wohnobjekte";
  color: string;
  image: string;
  description: string;
  care: string;
  variants: Variant[];
}
export const products: Product[] = [
  {
    slug: "morgentasse",
    name: "Morgentasse",
    subtitle: "Für den ersten guten Moment.",
    category: "geschirr",
    color: "Hafer",
    image: "cup",
    description:
      "Eine ruhige Form, ein angenehm großer Henkel und eine Glasur mit feinen Sprenkeln. Die Morgentasse liegt gut in der Hand und lässt den Kaffee ein bisschen länger nach Morgen schmecken.",
    care: "Spülmaschinengeeignet im Produktkonzept. Für eine lange schöne Oberfläche empfehlen wir ein schonendes Programm. Nicht für den Herd oder direkte Flamme vorgesehen.",
    variants: [
      {
        label: "250 ml",
        sku: "TF-MT-250",
        price: 2800,
        dimensions: "Ø 8 × H 8 cm · ca. 260 g",
      },
      {
        label: "350 ml",
        sku: "TF-MT-350",
        price: 3200,
        dimensions: "Ø 9 × H 9 cm · ca. 310 g",
      },
    ],
  },
  {
    slug: "alltagsschale",
    name: "Alltagsschale",
    subtitle: "Alles Gute findet seinen Platz.",
    category: "geschirr",
    color: "Terrakotta",
    image: "bowl",
    description:
      "Müsli am Morgen, Suppe am Abend, Pfirsiche dazwischen. Eine weite, flache Schale mit weichem Rand. Die warme Terrakottaglasur bringt Farbe auf den Tisch, ohne laut zu werden.",
    care: "Spülmaschinengeeignet im Produktkonzept. Starke Temperatursprünge vermeiden und heiße Schalen auf einen Untersetzer stellen.",
    variants: [
      {
        label: "Ø 16 cm",
        sku: "TF-AS-16",
        price: 3400,
        dimensions: "Ø 16 × H 6 cm · ca. 450 ml",
      },
      {
        label: "Ø 21 cm",
        sku: "TF-AS-21",
        price: 4200,
        dimensions: "Ø 21 × H 7 cm · ca. 850 ml",
      },
    ],
  },
  {
    slug: "bauchvase",
    name: "Bauchvase",
    subtitle: "Eine Form. Viele Möglichkeiten.",
    category: "wohnobjekte",
    color: "Kreide",
    image: "vase",
    description:
      "Ein einzelner Zweig genügt. Die Bauchvase verbindet einen weichen Körper mit einer schmalen Öffnung. Auch ohne Blumen bleibt sie ein stiller Blickfang auf Regal oder Esstisch.",
    care: "Mit lauwarmem Wasser und einer weichen Bürste von Hand reinigen. Zum Schutz empfindlicher Möbel empfehlen wir einen Untersetzer.",
    variants: [
      {
        label: "H 22 cm",
        sku: "TF-BV-22",
        price: 5800,
        dimensions: "Ø 16 × H 22 cm · Öffnung Ø 5 cm",
      },
      {
        label: "H 30 cm",
        sku: "TF-BV-30",
        price: 7800,
        dimensions: "Ø 21 × H 30 cm · Öffnung Ø 6 cm",
      },
    ],
  },
  {
    slug: "abendteller",
    name: "Abendteller",
    subtitle: "Die Bühne für etwas Einfaches.",
    category: "geschirr",
    color: "Salbei",
    image: "plate",
    description:
      "Ein flacher Teller mit sanft ansteigendem Rand. Das matte Salbeigrün harmoniert mit hellem Leinen und dunklem Holz. Für die schnelle Pasta genauso wie für ein langes Abendessen.",
    care: "Spülmaschinengeeignet im Produktkonzept. Metallbesteck kann auf matten Glasuren Spuren hinterlassen. Mit einem weichen Tuch reinigen.",
    variants: [
      {
        label: "Ø 22 cm",
        sku: "TF-AT-22",
        price: 2600,
        dimensions: "Ø 22 × H 2 cm · ca. 420 g",
      },
      {
        label: "Ø 27 cm",
        sku: "TF-AT-27",
        price: 3600,
        dimensions: "Ø 27 × H 2,5 cm · ca. 610 g",
      },
    ],
  },
];
export const findVariant = (sku: string) => {
  for (const product of products) {
    const variant = product.variants.find((v) => v.sku === sku);
    if (variant) return { product, variant };
  }
  return undefined;
};
