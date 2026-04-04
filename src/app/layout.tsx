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

  description:
    "Zeylun builds high-performance websites, custom platforms, and scalable digital systems for modern businesses worldwide. From startups to growing companies, we engineer solutions that drive real results.",

  keywords: [
    "digital agency",
    "web development",
    "custom software",
    "ERP systems",
    "LMS platforms",
    "business automation",
    "software company Sri Lanka",
    "global software development",
    "Next.js development",
    "startup product development",
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
    description:
      "We design and build modern websites, platforms, and business systems that help companies scale efficiently.",
    url: "https://zeylun.com",
    siteName: "Zeylun",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zeylun — Digital Products & Systems",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Zeylun | Digital Products & Scalable Business Systems",
    description:
      "High-performance websites, custom platforms, and scalable digital systems built for modern businesses.",
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
