import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://zeylun.com"),
  title: {
    default: "Zeylun | Digital Products & Scalable Business Systems",
    template: "%s | Zeylun",
  },
  description: "Zeylun engineers high-performance websites, custom business platforms, and scalable digital systems for global industry leaders.",
  keywords: [
    "digital agency",
    "web development",
    "custom software",
    "ERP systems",
    "LMS platforms",
    "business automation",
    "premium software development",
    "Sri Lanka software company",
    "global digital consultant",
  ],
  authors: [{ name: "Zeylun", url: "https://zeylun.com" }],
  creator: "Zeylun",
  publisher: "Zeylun",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Zeylun | Digital Products & Scalable Business Systems",
    description: "Engineering high-performance websites and custom business platforms for global industry leaders.",
    url: "https://zeylun.com",
    siteName: "Zeylun",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zeylun - Engineering Digital Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeylun | Digital Products & Scalable Business Systems",
    description: "Engineering high-performance websites and custom business platforms for global industry leaders.",
    images: ["/og-image.png"],
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
  alternates: {
    canonical: "https://zeylun.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth selection:bg-brand-blue selection:text-white">
      <body className="bg-black text-white antialiased min-h-screen flex flex-col font-inter">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
