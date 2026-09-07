import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";

const display = DM_Serif_Display({
  variable: "--font-display-family",
  subsets: ["latin"],
  weight: "400"
});

const sans = Inter({
  variable: "--font-sans-family",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Familjens recept",
  description: "En samling recept",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={`${display.variable} ${sans.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
