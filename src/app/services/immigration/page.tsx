import type { Metadata } from "next";
import ServiceImmigration from "@/app/pages/ServiceImmigration";

export const metadata: Metadata = {
  title: "Immigration & Visa Consulting | Global Connect LLC",
  description:
    "Global Connect LLC provides expert immigration, visa, and relocation services for students, professionals, investors, and families seeking global opportunities.",
  keywords: [
    "Global Connect",
    "immigration",
    "visa services",
    "student visa",
    "work visa",
    "investor visa",
    "relocation",
    "Africa",
    "global mobility",
    "legal compliance",
  ],
  openGraph: {
    title: "Immigration & Visa Consulting | Global Connect LLC",
    description:
      "Explore Global Connect LLC's immigration and visa consulting services. We support students, professionals, investors, and families with visa processing, relocation guidance, and legal compliance.",
    url: "https://global-connect-gold.vercel.app/pages/immigration",
    siteName: "Global Connect LLC",
    images: [
      {
        url: "/hero-immigration-visual.jpg", // or heroImmigration.src if imported
        width: 1200,
        height: 630,
        alt: "Global Connect LLC Immigration & Visa Consulting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ImmigrationPage() {
  return <ServiceImmigration />;
}
