import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zeylun Products | LMS & Outreach Systems",
  description: "Explore Zeylun products including Zeylun LMS and Zeylun Outreach System, built to help businesses and educational providers operate more efficiently.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
