import type { Metadata } from "next";
import ServiceInvestment from "@/app/pages/ServiceInvestment"; // adjust path if needed

export const metadata: Metadata = {
  title: "Investment, Trade & Collaboration | Global Connect LLC",
  description:
    "Global Connect LLC connects diaspora investors and global partners to vetted African opportunities, facilitating strategic partnerships for sustainable growth.",
  keywords: [
    "Global Connect",
    "investment",
    "trade",
    "partnership",
    "diaspora investors",
    "Africa business",
    "market access",
    "joint ventures",
    "investment strategy",
    "economic growth",
  ],
  openGraph: {
    title: "Investment, Trade & Collaboration | Global Connect LLC",
    description:
      "Explore Global Connect LLC’s investment, trade, and collaboration services. We connect diaspora investors and global partners to African markets, enabling joint ventures, market access, and strategic partnerships.",
    url: "https://global-connect-gold.vercel.app/pages/investment",
    siteName: "Global Connect LLC",
    images: [
      {
        url: "/hero-investment.jpg", // replace with actual image path
        width: 1200,
        height: 630,
        alt: "Global Connect LLC Investment, Trade & Collaboration",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function InvestmentPage() {
  return <ServiceInvestment />;
}
