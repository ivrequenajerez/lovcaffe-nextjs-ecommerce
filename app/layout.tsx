import type { Metadata } from "next";
import { Raleway, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/HeaderHome"; // 👈 importa el header (client)

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Lovcaffe | Café de especialidad y repostería online",
  description:
    "Lovcaffe es una cafetería online donde disfrutar de café de especialidad, repostería artesanal y productos gourmet. Compra fácil y rápido con envíos a domicilio.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${raleway.variable} ${playfair.variable} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
