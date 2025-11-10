import type { Metadata } from "next";
import ServiceTravel from "@/app/pages/ServiceTravel"; // adjust path if needed

export const metadata: Metadata = {
  title: "Travel & Consulate Services | Global Connect LLC",
  description:
    "Global Connect LLC provides premium travel and consulate services including passport & visa support, customs navigation, consolidated shipping, and immigration services for business and leisure travelers.",
  keywords: [
    "Global Connect",
    "travel services",
    "consulate services",
    "passport",
    "visa",
    "international travel",
    "customs",
    "shipping",
    "immigration",
    "Africa",
    "concierge services",
  ],
  openGraph: {
    title: "Travel & Consulate Services | Global Connect LLC",
    description:
      "Explore Global Connect LLC’s travel and consulate services. We provide expedited passport & visa services, customs guidance, consolidated shipping, and immigration support to streamline international travel.",
    url: "https://global-connect-gold.vercel.app/pages/travel",
    siteName: "Global Connect LLC",
    images: [
      {
        url: "/section-travel.jpg", // or heroTravel.src if imported
        width: 1200,
        height: 630,
        alt: "Global Connect LLC Travel & Consulate Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function TravelPage() {
  return <ServiceTravel />;
}

