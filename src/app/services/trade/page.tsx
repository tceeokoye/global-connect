import type { Metadata } from "next";
import ServiceTrade from "@/app/pages/ServiceTrade"; // adjust path if needed

export const metadata: Metadata = {
  title: "Trade & Export Services | Global Connect LLC",
  description:
    "Global Connect LLC provides trade facilitation and export services to streamline cross-border commerce, including customs clearance, market sourcing, logistics support, and compliance assistance for African and global markets.",
  keywords: [
    "Global Connect",
    "trade services",
    "export",
    "import",
    "customs clearance",
    "logistics",
    "Africa",
    "international trade",
    "market sourcing",
    "compliance",
    "Nigeria",
  ],
  openGraph: {
    title: "Trade & Export Services | Global Connect LLC",
    description:
      "Explore Global Connect LLC's trade and export services. We simplify international commerce through customs clearance, market sourcing, logistics, and compliance support to enhance cross-border trade efficiency.",
    url: "https://global-connect-gold.vercel.app/pages/trade",
    siteName: "Global Connect LLC",
    images: [
      {
        url: "/hero-trade.jpg", // or HeroImage.src if imported
        width: 1200,
        height: 630,
        alt: "Global Connect LLC Trade & Export Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function TradePage() {
  return <ServiceTrade />;
}
