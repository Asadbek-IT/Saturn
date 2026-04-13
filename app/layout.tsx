import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saturn — Quyosh tizimining oltinchi sayyorasi",
  description:
    "Saturn — Quyosh tizimidagi eng go'zal sayyora. Uning halqalari, fizik xususiyatlari va missiyalar haqida ma'lumot.",
  keywords: ["Saturn", "sayyora", "halqalar", "Cassini", "kosmik missiya"],
  openGraph: {
    title: "Saturn — Quyosh tizimining oltinchi sayyorasi",
    description: "Saturn haqida to'liq ma'lumot: fizik xususiyatlar, halqalar va kosmik missiyalar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="grain antialiased">
        {children}
      </body>
    </html>
  );
}
