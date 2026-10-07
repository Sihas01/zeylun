import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zeylun Products | Business Software & Digital Systems",
  description: "Explore software products and industry solutions built by Zeylun to help businesses manage operations, compliance, customers, and growth.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
