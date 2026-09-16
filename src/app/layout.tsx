import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/contexts/I18nContext";
import { PRODUCT, SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const DESCRIPTION =
  "Planifiez les ménages, check-in et check-out, synchronisez vos calendriers Airbnb et Booking, suivez vos équipes sur le terrain et facturez — depuis le mobile et le web.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${PRODUCT} — Gestion des prestations de ménage`,
    template: `%s — ${PRODUCT}`,
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: PRODUCT,
    title: `${PRODUCT} — Gestion des prestations de ménage`,
    description: DESCRIPTION,
    url: SITE_URL,
    locale: "fr_FR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: PRODUCT }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
    title: `${PRODUCT} — Gestion des prestations de ménage`,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-white text-zinc-900">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
