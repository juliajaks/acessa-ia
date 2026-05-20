import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Acessa IA — IA gratuita para jovens do Brasil",
  description:
    "Aprenda inteligência artificial do zero, com exemplos da vida real, no seu ritmo — sem precisar saber nada de tecnologia. 100% gratuito, em português.",
  keywords: [
    "inteligência artificial",
    "IA gratuita",
    "curso IA",
    "escola pública",
    "Brasil",
    "ChatGPT",
    "Gemini",
  ],
  openGraph: {
    title: "Acessa IA — IA gratuita para jovens do Brasil",
    description: "Aprenda IA do zero. Gratuito, em português, feito pra você.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${syne.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
