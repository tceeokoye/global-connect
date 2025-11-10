import type { Metadata } from "next";
import Services from "../pages/Services";

export const metadata: Metadata = {
  title: "Our Services | Global Connect LLC",
  description:
    "Discover the full range of services offered by Global Connect LLC — from trade, investment, and industry partnerships to travel, education, and immigration support bridging Africa and the global community.",
  keywords: [
    "Global Connect",
    "Africa trade",
    "investment opportunities",
    "international business",
    "education programs",
    "immigration services",
    "travel assistance",
    "cross-border consulting",
  ],
  openGraph: {
    title: "Services | Global Connect LLC",
    description:
      "Explore Global Connect LLC’s diverse range of services — connecting Africa, the diaspora, and global partners through trade, investment, education, and innovation.",
    url: "https://global-connect-gold.vercel.app/pages/services",
    siteName: "Global Connect LLC",
    images: [
      {
        url: "/hero-services.jpg", // If imported, you can use heroServices.src
        width: 1200,
        height: 630,
        alt: "Global Connect LLC Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ServicesPage() {
  return <Services />;
}
