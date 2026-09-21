import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://careforyourlife247.com"),
  title: "Care For Your Life 24/7 | Trusted Healthcare & Assistance Services",
  description:
    "Care For Your Life 24/7 connects individuals and families with healthcare assistance, elder care, medicine delivery, lab test visits, daily assistance and emergency support services.",
  keywords: [
    "Care For Your Life 24/7",
    "Elder Care India",
    "Hospital Assistance Service",
    "Medicine Delivery at Home",
    "Lab Test Home Collection",
    "Emergency SOS Support",
    "Senior Assistance Platform",
  ],
  authors: [{ name: "Care For Your Life 24/7" }],
  openGraph: {
    title: "Care For Your Life 24/7 | Trusted Healthcare & Assistance Services",
    description:
      "Support • Connect • Simplify. Trusted support for healthcare, daily assistance and essential services — whenever you need us.",
    url: "https://careforyourlife247.com",
    siteName: "Care For Your Life 24/7",
    images: [
      {
        url: "/images/logo/logo_card.png",
        width: 1200,
        height: 630,
        alt: "Care For Your Life 24/7",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Care For Your Life 24/7 | Support • Connect • Simplify",
    description:
      "Connecting individuals and families with healthcare assistance, elder care, and daily support.",
    images: ["/images/logo/logo_card.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/logo/app_icon.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/images/logo/app_icon.png",
    apple: [
      { url: "/apple-touch-icon.png" },
      { url: "/images/logo/app_icon.png" },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://careforyourlife247.com/#organization",
      "name": "Care For Your Life 24/7",
      "url": "https://careforyourlife247.com",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://careforyourlife247.com/#logo",
        "url": "https://careforyourlife247.com/images/logo/app_icon.png",
        "contentUrl": "https://careforyourlife247.com/images/logo/app_icon.png",
        "caption": "Care For Your Life 24/7 Icon",
        "width": "512",
        "height": "512"
      },
      "image": "https://careforyourlife247.com/images/logo/app_icon.png",
      "telephone": "+91-1800-000-2470",
      "description": "Healthcare assistance, elder companionship, home diagnostic tests and medicine delivery."
    },
    {
      "@type": "WebSite",
      "@id": "https://careforyourlife247.com/#website",
      "url": "https://careforyourlife247.com",
      "name": "Care For Your Life 24/7",
      "publisher": {
        "@id": "https://careforyourlife247.com/#organization"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-white text-slate-800 antialiased selection:bg-brand-primary selection:text-white">
        <Header />
        <main className="flex-grow pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
