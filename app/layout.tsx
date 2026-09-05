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
    "Find or list unused gift shop shelves, checkout counters, glass showcases, and tabletop display spaces inside gift stores across India. Racks on Rent connects gift shop owners with gift brands, creators & entrepreneurs.",
  keywords: [
    "Racks on Rent",
    "Gift shop display space for rent",
    "Gift store shelf rental",
    "Rent counter space in gift shop",
    "Gift display space",
    "Handmade gift space rental",
    "Stationery display space",
    "Showcase rental gift store",
    "Gift entrepreneurs India",
    "Gift shop space sharing",
    "Retail space for gift brands",
    "Rent shelf space Hyderabad"
  ],
  authors: [{ name: "Racks on Rent", url: SITE_CONFIG.domain }],
  creator: "Racks on Rent",
  publisher: "Racks on Rent",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Gift Shop Display Space for Rent in India | Racks on Rent",
    description:
      "Find or list unused gift shop shelves, checkout counters, glass showcases, and tabletop display spaces inside gift stores across India. Racks on Rent connects gift shop owners with gift brands, creators & entrepreneurs.",
    url: SITE_CONFIG.domain,
    siteName: "Racks on Rent",
    images: [
      {
        url: "/opengraph-image.jpeg",
        width: 1254,
        height: 1254,
        alt: "Racks on Rent - Gift Shop Display Space for Rent",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gift Shop Display Space for Rent in India | Racks on Rent",
    description:
      "Find or list unused gift shop shelves, checkout counters, glass showcases, and tabletop display spaces inside gift stores across India. Racks on Rent connects gift shop owners with gift brands, creators & entrepreneurs.",
    images: ["/opengraph-image.jpeg"],
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
    "description": "Sublet Space. Share Success. Connecting gift shop owners with gift brands, creators & entrepreneurs.",
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
