import type { Metadata } from "next";
import { Anton, Cabin, Economica } from "next/font/google";
import "./globals.css";

// Anton stands in for "Future Friends" (the brand's display face in the KV
// deck) — same heavy, condensed poster-grotesque silhouette.
const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const economica = Economica({
  variable: "--font-economica",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Berger Bier | Cultura cervejeira desde 2007",
  description:
    "Berger Bier: cerveja artesanal premiada, filtrada e produzida com paixão de geração em geração. Conheça nossos rótulos e onde encontrar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${anton.variable} ${economica.variable} ${cabin.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bark text-cream">
        {children}
      </body>
    </html>
  );
}
