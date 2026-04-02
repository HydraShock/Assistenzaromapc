import type { Metadata } from "next";
import { Cinzel, Inter, Space_Grotesk, Geist } from "next/font/google";

import "./globals.css";
import { siteConfig } from "@/lib/seo";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Assistenza PC a Domicilio Roma | Tecnico Computer Rapido",
    template: "%s | Assistenza Roma PC",
  },
  description:
    "Assistenza PC a domicilio a Roma: riparazione computer e notebook, Wi-Fi, stampanti, recupero dati e supporto rapido in tutti i quartieri.",
  applicationName: siteConfig.name,
  keywords: [
    "assistenza pc roma",
    "tecnico computer roma",
    "riparazione pc domicilio roma",
    "riparazione notebook roma",
    "assistenza wifi roma",
    "assistenza stampanti roma",
    "recupero dati roma",
    "assistenza pc prati",
    "assistenza pc eur",
    "tecnico computer monteverde",
    "assistenza computer trastevere",
    "riparazione pc nomentano",
    "tecnico pc ostia",
    "assistenza informatica roma nord",
    "assistenza informatica roma sud",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: "Assistenza PC a Domicilio Roma | Tecnico Computer Rapido",
    description:
      "Tecnico computer a Roma per assistenza a domicilio su PC, notebook, rete Wi-Fi, stampanti e urgenze informatiche.",
    images: [
      {
        url: "/backgrounds/chat.webp",
        width: 1919,
        height: 767,
        alt: "Assistenza PC a domicilio in tutta Roma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Assistenza PC a Domicilio Roma | Tecnico Computer Rapido",
    description:
      "Interventi rapidi a Roma su computer, notebook, rete e stampanti con supporto a domicilio.",
    images: ["/backgrounds/chat.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Servizi di assistenza informatica",
  other: {
    "geo.region": "IT-RM",
    "geo.placename": "Roma",
    "ICBM": "41.9028, 12.4964",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={cn("font-sans", geist.variable)}>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${cinzel.variable} bg-[#050505] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
