import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE_CONFIG } from "@/data/config";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: "Gift Shop Display Space for Rent in India | Racks on Rent",
  description:
    "Find or list unused shelves, counters, display racks, and retail spaces inside gift shops across India. Racks on Rent connects gift shop owners with gift brands, artists, and entrepreneurs.",
  keywords: [
    "Racks on Rent",
    "Gift shop display space for rent",
    "Gift shop shelf space for rent",
    "Gift store counter rental",
    "Rent space inside gift shop",
    "Product display in gift shops",
    "Retail shelf rental India",
    "Gift brand offline selling",
    "Gift shop space marketplace",
    "Gift shop owners extra income",
    "Rent product shelf Hyderabad",
    "Display products in gift stores"
  ],
  authors: [{ name: "Racks on Rent", url: SITE_CONFIG.domain }],
  creator: "Racks on Rent",
  publisher: "Racks on Rent",
  icons: {
    icon: "/opengraph-favicon.jpeg",
    shortcut: "/favicon.ico",
    apple: "/opengraph-favicon.jpeg",
  },
  openGraph: {
    title: "Gift Shop Display Space for Rent in India | Racks on Rent",
    description:
      "Find or list unused shelves, counters, display racks, and retail spaces inside gift shops across India. Racks on Rent connects gift shop owners with gift brands, artists, and entrepreneurs.",
    url: SITE_CONFIG.domain,
    siteName: "Racks on Rent",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/opengraph-favicon.jpeg",
        width: 1200,
        height: 630,
        alt: "Racks on Rent - Gift Shop Display Space for Rent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gift Shop Display Space for Rent in India | Racks on Rent",
    description:
      "Find or list unused shelves, counters, display racks, and retail spaces inside gift shops across India.",
    images: ["/opengraph-favicon.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Racks on Rent",
    "url": SITE_CONFIG.domain,
    "logo": `${SITE_CONFIG.domain}/images/logo.png`,
    "description": "Share Space. Grow Together. Connecting gift shop owners with gift brands, artists, and entrepreneurs.",
    "telephone": "+917995424477",
    "email": "racksonrent@gmail.com"
  };

  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FFFDF5] text-[#1F1F1F] font-sans">
        <TopBar />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

