import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zeylun | Digital Products & Scalable Business Systems",
  description: "Zeylun builds high-performance websites, custom platforms, and scalable digital systems for modern businesses.",
  keywords: [
    "digital agency",
    "web development",
    "custom software",
    "ERP systems",
    "LMS platforms",
    "Sri Lanka software company",
    "global web development",
  ],
  authors: [{ name: "Zeylun" }],
  creator: "Zeylun",
  publisher: "Zeylun",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Zeylun | Digital Products & Scalable Business Systems",
    description: "Zeylun builds high-performance websites, custom platforms, and scalable digital systems for modern businesses.",
    url: "https://zeylun.com",
    siteName: "Zeylun",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zeylun - Digital Products & Scalable Business Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeylun | Digital Products & Scalable Business Systems",
    description: "Zeylun builds high-performance websites, custom platforms, and scalable digital systems for modern businesses.",
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
        {children}
      </body>
    </html>
  );
}
